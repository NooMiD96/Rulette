using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Rulette.MyDb;


namespace Rulette.Controllers {
    [Route("api/[controller]")]
    public class InventoryController : Controller {
        private readonly RuletteDb _context;

        public InventoryController([FromServices] RuletteDb context) {
            _context = context;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> Get() {
            var db = _context;

            return RedirectToAction("Index", "Home");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Add(string name) {
            var db = _context;
            await db.AddNewItemAsync(name, User.Identity.Name);
            return RedirectToAction("Index", "Home");
        }
    }
}
