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
    var superslotGameSceneMediator = (function (_super) {
        __extends(superslotGameSceneMediator, _super);
        function superslotGameSceneMediator(viewComponent) {
            return _super.call(this, superslotGameSceneMediator.NAME, viewComponent) || this;
        }
        superslotGameSceneMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        superslotGameSceneMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                default:
                    break;
            }
        };
        superslotGameSceneMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
        };
        superslotGameSceneMediator.NAME = "PokerMainMediator";
        return superslotGameSceneMediator;
    }(puremvc.Mediator));
    superslot.superslotGameSceneMediator = superslotGameSceneMediator;
    __reflect(superslotGameSceneMediator.prototype, "superslot.superslotGameSceneMediator");
})(superslot || (superslot = {}));
