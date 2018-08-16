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
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.execute = function (notification) {
            this.initController();
            this.initProxy();
            this.initMediator();
        };
        StartupCommand.prototype.initController = function () {
            this.facade.registerCommand(lhj.AppFacadeConst.SEND_DATA, lhj.DataRequestCommand);
            this.facade.registerCommand(lhj.AppFacadeConst.DESTORY, lhj.RemoveCommand);
        };
        StartupCommand.prototype.initMediator = function () {
            this.facade.registerMediator(new lhj.GameMediator());
            this.facade.registerMediator(new lhj.ButtonMediator());
            this.facade.registerMediator(new lhj.InfoMediator());
            this.facade.registerMediator(new lhj.EffectMediator());
        };
        StartupCommand.prototype.initProxy = function () {
            this.facade.registerProxy(new lhj.ServerProxy());
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    lhj.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "lhj.StartupCommand");
})(lhj || (lhj = {}));
