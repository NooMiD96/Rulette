using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Rulette.Helper
{   
    public class SteamHelper
    {
        // openID params
        public string ParamsOpenid { get {
                string value = "";
                value +=       "openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select";
                value += "&" + "openid.identity=http://specs.openid.net/auth/2.0/identifier_select";
                value += "&" + "openid.mode=checkid_setup";
                value += "&" + "openid.ns=http://specs.openid.net/auth/2.0";
                value += "&" + "openid.realm=http://localhost:60217";
                value += "&" + "openid.return_to=http://localhost:60217/api/auth/signet";
                return value;
            }
        }
        // link to steam auth
        public string UserInfoLink(string userID) {
            return $"http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=42B647E8C45CC98667E49415667ECDD1&steamids={userID}";
        }
    }
}
