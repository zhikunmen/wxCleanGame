/*!
 * wxGameLib - JS for Debug
 * @licence wxGameLib - v0.1.0 (2018-09-03)
 * qq:93749937 | Licence: helojo
 */
var wxgame;
(function (wxgame) {
    var Golbal = /** @class */ (function () {
        function Golbal() {
        }
        /**
         * @param appId 小游戏appid
         * @param secret 小游戏秘钥
         */
        Golbal.init = function (appId, secret) {
            var _this = this;
            this.appId = appId;
            this.secret = secret;
            wx.login({
                success: function (code) {
                    _this.getSessionKeyOpenId(code);
                },
                fail: function (e) {
                    console.error("login fail: " + e);
                },
                complete: function () { }
            });
        };
        /**
         * @param jscode login回调成功的code
         */
        Golbal.getSessionKeyOpenId = function (jscode) {
            var wxUrl = "https://api.weixin.qq.com/sns/jscode2session?appid=" + this.appId + "&secret=" + this.secret + "&js_code=" + jscode + "&grant_type=authorization_code";
            var req = new egret.URLRequest(wxUrl);
            req.method = egret.URLRequestMethod.GET;
            var loader = new egret.URLLoader(req);
            loader.addEventListener(egret.Event.COMPLETE, function (data) {
                console.log("getSessionKeyOpenId   " + JSON.stringify(data));
            }, this);
        };
        return Golbal;
    }());
    wxgame.Golbal = Golbal;
})(wxgame || (wxgame = {}));
