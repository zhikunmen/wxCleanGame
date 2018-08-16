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
        };
        RemoveCommand.prototype.removeController = function () {
            this.facade.removeCommand(lhj.AppFacadeConst.SEND_DATA);
            this.facade.removeCommand(lhj.AppFacadeConst.DESTORY);
        };
        RemoveCommand.prototype.removeMediator = function () {
            this.facade.removeMediator(lhj.ButtonMediator.NAME);
            this.facade.removeMediator(lhj.GameMediator.NAME);
            this.facade.removeMediator(lhj.EffectMediator.NAME);
            this.facade.removeMediator(lhj.InfoMediator.NAME);
        };
        RemoveCommand.prototype.removeProxy = function () {
            this.facade.removeProxy(lhj.ServerProxy.NAME);
            this.facade = null;
            puremvc.Facade.instance = null;
            lhj.AppFacade.instance = null;
        };
        return RemoveCommand;
    }(puremvc.MacroCommand));
    lhj.RemoveCommand = RemoveCommand;
    __reflect(RemoveCommand.prototype, "lhj.RemoveCommand");
})(lhj || (lhj = {}));
