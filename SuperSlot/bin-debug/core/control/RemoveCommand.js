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
var superslot;
(function (superslot) {
    var RemoveCommand = (function (_super) {
        __extends(RemoveCommand, _super);
        function RemoveCommand() {
            return _super.call(this) || this;
        }
        RemoveCommand.prototype.execute = function (notification) {
            var rootView = notification.getBody();
            this.removeMediator();
            this.removeController();
            this.removeProxy();
            console.log("REMOVEREMOVEREMOVE");
        };
        RemoveCommand.prototype.removeController = function () {
            this.facade.removeCommand(superslot.AppFacadeConst.SEND_DATA);
            this.facade.removeCommand(superslot.AppFacadeConst.DESTORY);
        };
        RemoveCommand.prototype.removeMediator = function () {
            // this.facade.removeMediator(GameMediator.NAME);
            this.facade.removeMediator(superslot.MainMediator.NAME);
        };
        RemoveCommand.prototype.removeProxy = function () {
            this.facade.removeProxy(superslot.ServerProxy.NAME);
            this.facade = null;
            puremvc.Facade.instance = null;
            superslot.AppFacade.instance = null;
        };
        return RemoveCommand;
    }(puremvc.MacroCommand));
    superslot.RemoveCommand = RemoveCommand;
    __reflect(RemoveCommand.prototype, "superslot.RemoveCommand");
})(superslot || (superslot = {}));
