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
    /**
     *
     * @author
     *
     */
    var GameButton = (function (_super) {
        __extends(GameButton, _super);
        function GameButton(arr, label, autoDestory) {
            if (label === void 0) { label = null; }
            if (autoDestory === void 0) { autoDestory = true; }
            var _this = _super.call(this) || this;
            _this.name = "GameButton";
            _this.srcArr = arr;
            _this._label = label;
            _this._autoDestory = autoDestory;
            _this.initUI();
            superslotBC.addEvent(_this, _this, egret.Event.REMOVED_FROM_STAGE, _this.onRemove);
            return _this;
        }
        GameButton.prototype.iconTexture = function (res) {
            this.srcArr = res;
            this._icon.texture = superslot.ResUtil.createTexture(res[0]);
        };
        GameButton.prototype.onRemove = function (evt) {
            if (this._autoDestory) {
                this.destory();
            }
        };
        GameButton.prototype.initUI = function () {
            var src;
            src = this.srcArr[0];
            this.touchEnabled = true;
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_END, this.onTouchEnd);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel);
            superslotBC.addEvent(this, this, egret.TouchEvent.TOUCH_MOVE, this.onTouchCancel);
            if (!this._icon) {
                this._icon = superslot.ResUtil.createBitmapByName(src);
                this.addChild(this._icon);
            }
            else {
                this._icon.texture = superslot.ResUtil.createTexture(src);
            }
            if (this._label) {
                this._labelTxt = superslot.ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, this._label, 25, 0, 8, this._icon.width);
                this.addChild(this._labelTxt);
            }
            this.anchorOffsetX = this._icon.width / 2;
            this.anchorOffsetY = this._icon.height / 2;
        };
        GameButton.prototype.onTouchBegin = function (evt) {
            this._icon.texture = superslot.ResUtil.createTexture(this.srcArr[1]);
            this.scaleX = 1.1;
            this.scaleY = 1.1;
            superslot.RoomInfo.getInstance().playhbButtonSound();
            //uniLib.SoundMgr.instance.playSound(slwh.SoundConsts.BUTTON_CLICK);
        };
        GameButton.prototype.onTouchEnd = function (evt) {
            this._icon.texture = superslot.ResUtil.createTexture(this.srcArr[0]);
            this.scaleX = 1;
            this.scaleY = 1;
        };
        GameButton.prototype.addClickArea = function (num) {
            if (!this._area) {
                this._area = new egret.Sprite();
                this._area.touchEnabled = true;
                this.addChild(this._area);
            }
            this._area.graphics.clear();
            this._area.graphics.beginFill(0xff0000, 0);
            this._area.graphics.drawRect(-num, -num, this._icon.width + num * 2, this._icon.height + num * 2);
            this._area.graphics.endFill();
        };
        Object.defineProperty(GameButton.prototype, "ButtonX", {
            get: function () {
                return this.x;
            },
            set: function (x) {
                this.x = x + this.width / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameButton.prototype, "ButtonY", {
            set: function (y) {
                this.y = y + this.height / 2;
            },
            enumerable: true,
            configurable: true
        });
        GameButton.prototype.onTouchCancel = function () {
            this.scaleX = 1;
            this.scaleY = 1;
        };
        GameButton.prototype.destory = function () {
            this.touchEnabled = false;
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this, true);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchCancel, this);
            superslot.ResUtil.removeFromParent(this);
            superslot.ResUtil.removeAllChildren(this);
            this._area = null;
            this._icon = null;
            this._label = null;
            this._labelTxt = null;
        };
        return GameButton;
    }(egret.Sprite));
    superslot.GameButton = GameButton;
    __reflect(GameButton.prototype, "superslot.GameButton");
})(superslot || (superslot = {}));
