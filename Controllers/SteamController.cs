using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Rulette.Helper;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Rulette.MyDb;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;

namespace Rulette.Controllers {
    [Route("api/get/")]
    public class SteamController : Controller {
        private RuletteDb _context;
        private IMemoryCache _cache;

        public SteamController([FromServices] RuletteDb context, IMemoryCache memoryCache) {
            _context = context;
            _cache = memoryCache;
        }

        [HttpGet("[action]")]
        public async Task<string> UserIsAuth() {
            return await Task.Run(() => {
                // if user login then __aucu != null and User is auth
                string login = Request.Cookies["__aucu"];
                if (login == null) return "null";
                if (!User.Identity.IsAuthenticated) return "false";
                return "true";
            });
        }

        // get user from steam API
        [HttpGet("[action]")]
        public async Task<JObject> GetUserInfo(string userIdParam) {
            string userId = User.Identity.Name;
            if (!String.IsNullOrEmpty(userIdParam)) {
                userId = userIdParam;
            }
            // if user not found then some trouble in auth controller
            // when user is logining his data saved in db
            var user = _context.User.FirstOrDefault(u => u.UserId == userId);
            if (user == null) return null;

            JObject result = null;

            using (var client = new HttpClient()) {
                try {
                    var response = await client.GetAsync(SteamHelper.UserInfoLink(user.UserId));
                    response.EnsureSuccessStatusCode();

                    var responseResult = await response.Content.ReadAsStringAsync();
                    JObject json = JObject.Parse(responseResult);
                    result = (JObject)json["response"]["players"][0];

                }
                catch (HttpRequestException httpRequestException) {
                    Console.WriteLine($"Error getting user info from: {httpRequestException.Message}");
                    return null;
                }
                catch {
                    Console.WriteLine($"Error getting user info");
                    return null;
                }
            }

            return result;
        }
    }
}
