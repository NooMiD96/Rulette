using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rulette.Helper
{
    public class SteamUserModel {
        public string SteamID { get; set; }
        public string PersonaName { get; set; }
        public string ProfileUrl { get; set; }
        public string Avatar { get; set; }
        public string AvatarMedium { get; set; }
        public string AvatarFull { get; set; }
        //"communityvisibilitystate": 3,
        //"profilestate": 1,
        //"lastlogoff": 1501870765,
        //"personastate": 0,
        //"primaryclanid": "103582791429521408",
        //"timecreated": 1266091324,
        //"personastateflags": 0
    }
}
