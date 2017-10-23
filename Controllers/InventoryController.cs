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
    }
}
