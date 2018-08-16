var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var lhj;
(function (lhj) {
    /**
     *
     * @author
     *
     */
    var ServerProxy = (function (_super) {
        __extends(ServerProxy, _super);
        function ServerProxy() {
            return _super.call(this, ServerProxy.NAME) || this;
        }
        ;
        ServerProxy.prototype.onRegister = function () {
        };
        ServerProxy.prototype.initServer = function () {
            //uniLib.UIMgr.instance.showProcessBar(null, 99, 100, "正在连接游戏服务器...", "", true);
            chessCommonLib.ConfigMgr.getInstance().initTables();
            var gameId = Number(uniLib.BrowersUtils.GetRequest("gameId"));
            var zoneId = Number(uniLib.BrowersUtils.GetRequest("zoneId"));
            if (lhj.StaticMgr.getInstance().gameInfo == null || lhj.StaticMgr.getInstance().gameInfo.zoneInfo == null) {
                this._config = RES.getRes("lhj_config_json");
                console.log(this._config);
                uniLib.NetMgr.init(this._config.LoginUrl, gameId ? gameId : this._config.GameID, zoneId ? zoneId : this._config.ZoneID, this.onHttpInitSucc, this.onHttpInitFail, this);
            }
            else {
                uniLib.NetMgr.init(chessCommonLib.ConfigMgr.getInstance().getLoginCfg().login_url, lhj.StaticMgr.getInstance().gameInfo.zoneInfo.gameid, lhj.StaticMgr.getInstance().gameInfo.zoneInfo.zoneid, this.onHttpInitSucc, this.onHttpInitFail, this);
            }
        };
        /**
         * http平台登录完成
         */
        ServerProxy.prototype.onHttpInitSucc = function (obj) {
            uniLib.NetMgr.initSocket(this.onSockInitSucc, this.onSockInitFail, this, "", "", "", false, true); //初始化平台socket
        };
        ServerProxy.prototype.onHttpInitFail = function (back) {
            if (back) {
                lhj.PublicManage.getInstance().showMildWarnShow("游戏登录失败:" + JSON.stringify(back));
            }
            else {
                lhj.PublicManage.getInstance().showMildWarnShow("游戏登录失败");
            }
            this.facade.sendNotification(lhj.AppFacadeConst.EXIT_GAME);
            return true;
        };
        /**
         * socket连接完成
         */
        ServerProxy.prototype.onSockInitSucc = function () {
            var roomEnter = new Cmd.EnterGameCmd_C();
            this.sendNotification(lhj.AppFacadeConst.SEND_DATA, roomEnter, lhj.DataRequestCommand.GAME_DATA);
        };
        ServerProxy.prototype.reLogin = function () {
            this.onSockInitSucc();
        };
        ServerProxy.prototype.onSockInitFail = function (back) {
            if (back) {
                lhj.PublicManage.getInstance().showMildWarnShow("游戏服务器连接失败:" + JSON.stringify(back));
            }
            else {
                lhj.PublicManage.getInstance().showMildWarnShow("游戏服务器连接失败");
            }
            this.facade.sendNotification(lhj.AppFacadeConst.EXIT_GAME);
            return true;
        };
        ServerProxy.prototype.sendData = function (obj) {
            lhj.ResUtil.trace("sendData:" + JSON.stringify(obj));
            uniLib.NetMgr.tcpSend(obj);
            uniLib.NetMgr.setMsgTimeout(8, "ServerMJProxy.sendData");
        };
        ServerProxy.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            uniLib.NetMgr.closeSocket();
            uniLib.Global.removeEventListener(uniLib.ZqEvent.ON_RECONNEC, this.onSockInitSucc, this);
        };
        ServerProxy.prototype.closeSocket = function () {
            lhj.ResUtil.trace("closeSocket");
            uniLib.NetMgr.closeSocket();
        };
        ServerProxy.NAME = "ServerProxy";
        return ServerProxy;
    }(puremvc.Proxy));
    lhj.ServerProxy = ServerProxy;
    __reflect(ServerProxy.prototype, "lhj.ServerProxy");
})(lhj || (lhj = {}));
