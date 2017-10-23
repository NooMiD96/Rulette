using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Rulette.MyDb;

namespace Rulette.Controllers {
    [Route("api/get/")]
    public class LkController : Controller {
        private RuletteDb _context;

        public LkController([FromServices] RuletteDb context) {
            _context = context;
        }

        [HttpGet("[action]")]
        public async Task<string> GetUserState(string userIdParam) {
            return await Task.Run(() => {
                string result = "";
                

                return result;
            });
        }
    }
}
