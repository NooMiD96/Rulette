using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using System.Collections;

namespace Rulette.CustomClasses {
    public static class CacheExtensionsHelper {
        static object ObjLock { get; set; } = new object();

        public static async void SetNewMessageAsync(this IMemoryCache _cache, string steamId, string userName, string message) {
            await Task.Run(() => {
                lock (ObjLock) {
                    Queue<(string steamId, string userName, string message, DateTime date)> messages = _cache.Get("Messages") as Queue<(string steamId, string userName, string message, DateTime date)>;

                    if (messages == null) {
                        messages = new Queue<(string steamId, string userName, string message, DateTime date)>();
                    }
                    else {
                        if (messages.Count == 5) {
                            messages.Dequeue();
                        }
                    }

                    messages.Enqueue((steamId, userName, message, DateTime.Now));
                    _cache.Set("Messages", messages);
                    return;
                } //!lock
            });
        }

        public static IEnumerable<(string steamId, string userName, string message, DateTime date)> GetCacheMessages(this IMemoryCache _cache) {
            Queue<(string steamId, string userName, string message, DateTime date)> messages = _cache.Get("Messages") as Queue<(string steamId, string userName, string message, DateTime date)>;
            if (messages.Count == 0) return null;
            return messages.ToArray();
        }
    }
}
