using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Rulette.CustomClasses;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rulette.Middleware {
    public class ChatWebSocketMiddleware : SocketMiddleware {
        private static ConcurrentDictionary<string, WebSocket> _sockets = new ConcurrentDictionary<string, WebSocket>();

        private static IMemoryCache _cache;

        private readonly RequestDelegate _next;

        public ChatWebSocketMiddleware(RequestDelegate next, IMemoryCache memoryCache) {
            _next = next;
            _cache = memoryCache;
        }

        public async Task Invoke(HttpContext context) {
            if(!context.WebSockets.IsWebSocketRequest || context.Request.Path != "/ws") {
                await _next.Invoke(context);
                return;
            }

            CancellationToken ct = context.RequestAborted;
            WebSocket currentSocket = await context.WebSockets.AcceptWebSocketAsync();
            var socketId = Guid.NewGuid().ToString();

            _sockets.TryAdd(socketId, currentSocket);
            Console.WriteLine($"info: chat socket connected.");
            string steamId, userName, message = userName = steamId = "";
            while(true) {
                if(ct.IsCancellationRequested) {
                    break;
                }

                string response;
                try {
                    response = await ReceiveStringAsync(currentSocket, ct);
                } catch(Exception exp) {
                    //Console.WriteLine($"info: socket aborted.\nMore info: {exp}");
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
                    if(response == "GetMessages") {
                        //if _(cache empty) method GetCacheMessages return null => exaption
                        foreach(var ms in _cache.GetCacheMessages()) {
                            await SendStringAsync(_sockets[socketId], ms.steamId, ms.userName, ms.message, ms.date, ct);
                        }
                        continue;
                    } else {
                        JObject jobj = JObject.Parse(response);
                        steamId     = jobj["steamId"].ToString();
                        userName    = jobj["userName"].ToString();
                        message     = jobj["message"].ToString();
                        _cache.SetNewMessageAsync(steamId, userName, message);
                    }
                } catch {
                    continue;
                }

                foreach(var socket in _sockets) {
                    if(socket.Value.State != WebSocketState.Open) {
                        continue;
                    }
                    await SendStringAsync(socket.Value, steamId, userName, message, ct);
                }
            }

            _sockets.TryRemove(socketId, out _);

            if(currentSocket.State != WebSocketState.Aborted) {
                await currentSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", ct);
            }
            currentSocket.Dispose();
            Console.WriteLine($"WebSocket disconnect from chat: {socketId}");
        }
    }
}
