using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Rulette.Identity {
    public class IdentityRuletteDbContext : IdentityDbContext<IdentityUser> {
        public IdentityRuletteDbContext(DbContextOptions<IdentityRuletteDbContext> options)
            : base(options) {
        }
    }
}
