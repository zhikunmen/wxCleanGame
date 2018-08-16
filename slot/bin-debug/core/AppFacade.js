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
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            return _super.call(this) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instance == null) {
                this.instance = new AppFacade();
            }
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(lhj.AppFacadeConst.STARTUP, lhj.StartupCommand);
        };
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(lhj.AppFacadeConst.STARTUP, rootView);
            this.removeCommand(lhj.AppFacadeConst.STARTUP);
        };
        return AppFacade;
    }(puremvc.Facade));
    lhj.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "lhj.AppFacade");
})(lhj || (lhj = {}));
