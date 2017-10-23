using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Concurrent;
using System.IO;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;

namespace Rulette.Middleware {
    public class B4WWebSocketMiddleware : SocketMiddleware {
        private static ConcurrentDictionary<string, WebSocket> _sockets_react = new ConcurrentDictionary<string, WebSocket>();
        private static ConcurrentDictionary<string, WebSocket> _sockets_frame = new ConcurrentDictionary<string, WebSocket>();

        private readonly RequestDelegate _next;

        public B4WWebSocketMiddleware(RequestDelegate next) {
            _next = next;
        }

        public async Task Invoke(HttpContext context) {
            if(!context.WebSockets.IsWebSocketRequest || !context.Request.Path.ToString().Contains("/b4w")) {
                await _next.Invoke(context);
                return;
            }

            ConcurrentDictionary<string, WebSocket> _sockets;
            if(context.Request.Path.ToString().Contains("react")) {
                _sockets = _sockets_react;
            } else if(context.Request.Path.ToString().Contains("frame")) {
                _sockets = _sockets_frame;
            } else {
                await _next.Invoke(context);
                return;
            }
            CancellationToken ct = context.RequestAborted;
            WebSocket currentSocket = await context.WebSockets.AcceptWebSocketAsync();
            var socketId = Guid.NewGuid().ToString();

            _sockets.TryAdd(socketId, currentSocket);
            Console.WriteLine($"info: B4W socket connected.");
            string state;
            dynamic sendObj;
            while(true) {
                if(ct.IsCancellationRequested) {
                    break;
                }
                string response;
                try {
                    response = await ReceiveStringAsync(currentSocket, ct);
                } catch(Exception exp) {
                    //Console.WriteLine($"info: socket aborted.\n\tMore info: {exp}");
                    Console.WriteLine($"info: socket aborted.");
                    break;
                }
                if(string.IsNullOrEmpty(response)) {
                    if(currentSocket.State != WebSocketState.Open) {
                        break;
                    }
                    continue;
                }

                try {
                    JObject jobj = JObject.Parse(response);
                    state = jobj["state"].ToString();
                    switch(state) {
                        case "add_user":
                            sendObj = ("add_user", /*"heroName"*/ "cm", jobj["name"], jobj["steamId"]);
                            break;
                        case "start_phase1":
                            sendObj = new Tuple<string>("start_phase1");
                            break;
                        case "start_phase2":
                            sendObj = new Tuple<string>("start_phase2");
                            break;
                        case "restart":
                            sendObj = new Tuple<string>("restart");
                            break;
                        default:
                            continue;
                    }
                } catch {
                    continue;
                }

                foreach(var socket in _sockets_frame) {
                    if(socket.Value.State != WebSocketState.Open) {
                        continue;
                    }
                    await SendStringAsync(socket.Value, sendObj, ct);
                }
            }

            _sockets.TryRemove(socketId, out _);

            if(currentSocket.State != WebSocketState.Aborted) {
                await currentSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", ct);
            }
            currentSocket.Dispose();
            Console.WriteLine($"info: WebSocket disconnect from B4W: {socketId}");
        }
    }
}
