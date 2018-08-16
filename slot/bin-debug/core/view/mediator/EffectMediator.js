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
    //主UI视图
    var EffectMediator = (function (_super) {
        __extends(EffectMediator, _super);
        function EffectMediator(viewComponent) {
            var _this = _super.call(this, EffectMediator.NAME, viewComponent) || this;
            _this._view = new lhj.EffectVc;
            lhj.GameInfo.uiLayer.addChild(_this._view);
            _this._view.scaleY = lhj.GameInfo.scaleY;
            _this.setViewComponent(_this._view);
            if (_this._view) {
            }
            return _this;
        }
        EffectMediator.prototype.uiHandle = function (evt) {
            var req;
            switch (evt.type) {
                default:
                    break;
            }
        };
        EffectMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        EffectMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            if (this._view) {
                this._view.destory();
            }
        };
        EffectMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        EffectMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                default:
                    break;
            }
        };
        EffectMediator.NAME = "EffectMediator";
        return EffectMediator;
    }(puremvc.Mediator));
    lhj.EffectMediator = EffectMediator;
    __reflect(EffectMediator.prototype, "lhj.EffectMediator");
})(lhj || (lhj = {}));
