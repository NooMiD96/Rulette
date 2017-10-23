using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Rulette.Helper;
using Rulette.MyDb;
using Microsoft.AspNetCore.Identity;
using System.Net.Http;
using System.Text;

namespace Rulette.Controllers {
    [Route("api/[controller]")]
    public class AuthController : Controller {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RuletteDb _context;

        public AuthController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, 
                            [FromServices] RuletteDb context) {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        // redirect on steam/login
        [HttpGet("[action]"), HttpPost("[action]")]
        public IActionResult SignIn() {
            string url = "http://steamcommunity.com/openid/login?";
            url += new SteamHelper().ParamsOpenid;
            return Redirect(url);
        }
        // redirect from steam/login
        [HttpGet("[action]"), HttpPost("[action]")]
        public async Task<IActionResult> Signet() {
            // getting userId
            string userID = HttpContext.Request.Query["openid.identity"];
            if (!string.IsNullOrEmpty(userID)) {
                userID = userID.Split("/id/")[1];
            }
            if (userID == null) {
                Response.Cookies.Delete("__aucu");
            } else {
                // verify redirect from steam/login
                using (var client = new HttpClient()) {
                    // create POST request
                    var querys = HttpContext.Request.QueryString.ToString().Split("openid.mode");
                    var postQuery = querys[0];
                    postQuery += "openid.mode=check_authentication";
                    postQuery += querys[1].Substring(querys[1].IndexOf('&'));
                    var content = new StringContent(postQuery, Encoding.UTF8, "multipart/form-data");
                    // send request
                    var response = await client.PostAsync("http://steamcommunity.com/openid/login" + postQuery, content);
                    // check getted date
                    if ((int)response.StatusCode == 200 && response.IsSuccessStatusCode == true) {
                        Response.Cookies.Append("__aucu", "1");

                        await _context.AddNewUserAsync(userID);

                        var user = await _userManager.FindByIdAsync(userID);
                        if (user == null) {
                            user = new IdentityUser { Id = userID, UserName = userID };
                            await _userManager.CreateAsync(user);
                        }
                        await _signInManager.SignInAsync(user, true);
                    }
                } //!using
            }//!if-else

            return RedirectToAction("Index", "Home");
        }

        [HttpGet("[action]"), HttpPost("[action]")]
        public async Task<IActionResult> SignOut() {
            string userID = HttpContext.Request.Cookies["__aucu"];
            if (userID != null) {
                Response.Cookies.Delete("__aucu");

                await _signInManager.SignOutAsync();
            }
            return RedirectToAction("Index", "Home");
        }
    }
}
