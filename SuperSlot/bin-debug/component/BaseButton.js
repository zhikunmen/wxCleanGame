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
var SZLobby;
(function (SZLobby) {
    var BaseButton = (function (_super) {
        __extends(BaseButton, _super);
        function BaseButton() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        BaseButton.prototype.init = function () {
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_END, this.onTouchEnd);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_MOVE, this.onTouchMove);
            superslotBC.addEvent(this, this, egret.Event.REMOVED, this.dispose);
        };
        BaseButton.prototype.onTouchBegin = function () {
            this.scaleX = 1.1;
            this.scaleY = 1.1;
            superslot.RoomInfo.getInstance().playhbButtonSound();
        };
        BaseButton.prototype.onTouchEnd = function () {
            this.scaleX = 1;
            this.scaleY = 1;
        };
        BaseButton.prototype.onTouchCancel = function () {
            this.scaleX = 1;
            this.scaleY = 1;
        };
        BaseButton.prototype.onTouchMove = function () {
            this.scaleX = 1;
            this.scaleY = 1;
        };
        Object.defineProperty(BaseButton.prototype, "$currentState", {
            set: function (state) {
                this.currentState = state;
                this.touchEnabled = false;
            },
            enumerable: true,
            configurable: true
        });
        BaseButton.prototype.dispose = function () {
            superslotBC.removeEvent(this);
        };
        return BaseButton;
    }(eui.Button));
    SZLobby.BaseButton = BaseButton;
    __reflect(BaseButton.prototype, "SZLobby.BaseButton");
})(SZLobby || (SZLobby = {}));
