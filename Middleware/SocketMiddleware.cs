using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rulette.Middleware
{
    public class SocketMiddleware
    {
        public static Task SendStringAsync(WebSocket socket, string steamId, string userName, string message, CancellationToken ct = default(CancellationToken)) {
            return SendStringAsync(socket, steamId, userName, message, DateTime.Now, ct);
        }

        public static Task SendStringAsync(WebSocket socket, string steamId, string userName, string message, DateTime dateTime, CancellationToken ct = default(CancellationToken)) {
            return SendStringAsync(socket, (steamId, userName, message, dateTime), ct);
        }

        public static Task SendStringAsync(WebSocket socket, object sendObj, CancellationToken ct = default(CancellationToken)) {
            string jsonString = JsonConvert.SerializeObject(sendObj);
            var buffer = Encoding.UTF8.GetBytes(jsonString);
            var segment = new ArraySegment<byte>(buffer);
            return socket.SendAsync(segment, WebSocketMessageType.Text, true, ct);
        }


        public static async Task<string> ReceiveStringAsync(WebSocket socket, CancellationToken ct = default(CancellationToken)) {
            var buffer = new ArraySegment<byte>(new byte[8192]);
            using(var ms = new MemoryStream()) {
                WebSocketReceiveResult result;
                do {
                    ct.ThrowIfCancellationRequested();

                    result = await socket.ReceiveAsync(buffer, ct);
                    ms.Write(buffer.Array, buffer.Offset, result.Count);
                }
                while(!result.EndOfMessage);

                ms.Seek(0, SeekOrigin.Begin);
                if(result.MessageType != WebSocketMessageType.Text) {
                    return null;
                }

                // Encoding UTF8: https://tools.ietf.org/html/rfc6455#section-5.6
                using(var reader = new StreamReader(ms, Encoding.UTF8)) {
                    return await reader.ReadToEndAsync();
                }
            }
        }
    }
}
