using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Rulette.MyDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Rulette.Identity;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Http;
using System.Threading;
using Rulette.Middleware;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace Rulette {
    public class Startup {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<RuletteDb>(options => {
                options.UseSqlServer(Configuration.GetConnectionString("MyDataBase"));
            });
            services.AddDbContext<IdentityRuletteDbContext>(options => {
                options.UseSqlServer(Configuration.GetConnectionString("MyDataBase"));
            });

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<IdentityRuletteDbContext>();

            services.AddMemoryCache();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions() {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"B4W")),
                RequestPath = new PathString("/B4W")
            });
            app.UseStaticFiles(new StaticFileOptions() {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"B4W\\assets")),
                RequestPath = new PathString("/assets")
            });

            app.UseAuthentication();

            app.UseWebSockets();
            app.UseMiddleware<ChatWebSocketMiddleware>();
            app.UseMiddleware<B4WWebSocketMiddleware>();

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
