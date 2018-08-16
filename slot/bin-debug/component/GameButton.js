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
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this, true);
            return _this;
        }
        GameButton.prototype.iconTexture = function (res) {
            this.srcArr = res;
            this._icon.texture = lhj.ResUtil.createTexture(res[0]);
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
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            if (!this._icon) {
                this._icon = lhj.ResUtil.createBitmapByName(src);
                this.addChild(this._icon);
            }
            else {
                this._icon.texture = lhj.ResUtil.createTexture(src);
            }
            if (this._label) {
                this._labelTxt = lhj.ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, this._label, 25, 0, 8, this._icon.width);
                this.addChild(this._labelTxt);
            }
        };
        GameButton.prototype.onTouchBegin = function (evt) {
            this._icon.texture = lhj.ResUtil.createTexture(this.srcArr[1]);
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true);
            //uniLib.SoundMgr.instance.playSound(HBPoker.SoundConsts.BUTTON_CLICK);
        };
        GameButton.prototype.onTouchEnd = function (evt) {
            egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true);
            this._icon.texture = lhj.ResUtil.createTexture(this.srcArr[0]);
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
        GameButton.prototype.destory = function () {
            this.touchEnabled = false;
            egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this, true);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this, true);
            lhj.ResUtil.removeFromParent(this);
            lhj.ResUtil.removeAllChildren(this);
            this._area = null;
            this._icon = null;
            this._label = null;
            this._labelTxt = null;
        };
        return GameButton;
    }(egret.Sprite));
    lhj.GameButton = GameButton;
    __reflect(GameButton.prototype, "lhj.GameButton");
})(lhj || (lhj = {}));
