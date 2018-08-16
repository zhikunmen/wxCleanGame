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
    var LHJGameSceneMediator = (function (_super) {
        __extends(LHJGameSceneMediator, _super);
        function LHJGameSceneMediator(viewComponent) {
            return _super.call(this, LHJGameSceneMediator.NAME, viewComponent) || this;
        }
        LHJGameSceneMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        LHJGameSceneMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                default:
                    break;
            }
        };
        LHJGameSceneMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
        };
        LHJGameSceneMediator.NAME = "PokerMainMediator";
        return LHJGameSceneMediator;
    }(puremvc.Mediator));
    lhj.LHJGameSceneMediator = LHJGameSceneMediator;
    __reflect(LHJGameSceneMediator.prototype, "lhj.LHJGameSceneMediator");
})(lhj || (lhj = {}));
