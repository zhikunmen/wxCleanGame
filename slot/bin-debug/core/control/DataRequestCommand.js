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
    var DataRequestCommand = (function (_super) {
        __extends(DataRequestCommand, _super);
        function DataRequestCommand() {
            return _super.call(this) || this;
        }
        DataRequestCommand.prototype.execute = function (notification) {
            var socketProxy = this.facade.retrieveProxy(lhj.ServerProxy.NAME);
            lhj.ResUtil.trace("execute:", notification.getType());
            switch (notification.getType()) {
                case DataRequestCommand.GAME_DATA:
                    socketProxy.sendData(notification.getBody());
                    break;
                case DataRequestCommand.CONNECT_GAME_SERVER:
                    socketProxy.initServer();
                    break;
                case DataRequestCommand.CLOSE:
                    socketProxy.closeSocket();
                    break;
            }
        };
        DataRequestCommand.GAME_DATA = "game_data";
        DataRequestCommand.CONNECT_GAME_SERVER = "connect_game_server"; //连接大厅聊天服务器
        DataRequestCommand.CLOSE = "close"; //连接大厅聊天服务器
        return DataRequestCommand;
    }(puremvc.SimpleCommand));
    lhj.DataRequestCommand = DataRequestCommand;
    __reflect(DataRequestCommand.prototype, "lhj.DataRequestCommand");
})(lhj || (lhj = {}));
