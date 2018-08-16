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
            this.facade.registerCommand(superslot.AppFacadeConst.SEND_DATA, superslot.DataRequestCommand);
            this.facade.registerCommand(superslot.AppFacadeConst.DESTORY, superslot.RemoveCommand);
        };
        StartupCommand.prototype.initMediator = function () {
            //  this.facade.registerMediator(new GameMediator());
            this.facade.registerMediator(new superslot.MainMediator());
        };
        StartupCommand.prototype.initProxy = function () {
            this.facade.registerProxy(new superslot.ServerProxy());
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    superslot.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "superslot.StartupCommand");
})(superslot || (superslot = {}));
