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
    var MsgBox = (function (_super) {
        __extends(MsgBox, _super);
        function MsgBox(needClose) {
            var _this = _super.call(this) || this;
            _this.touchEnabled = true;
            _this._needClose = needClose;
            _this.initUI();
            return _this;
        }
        MsgBox.prototype.initUI = function () {
            var bg = superslot.ResUtil.createBitmapByName("ss_common_bg_png");
            bg.scale9Grid = new egret.Rectangle(85, 80, 36, 36);
            bg.width = 597;
            bg.height = 362;
            this.addChild(bg);
            this.title = superslot.ResUtil.createTextFeild(0x683021, egret.HorizontalAlign.CENTER, "", 30, 140, 18, 191);
            this.info = superslot.ResUtil.createTextFeild(0x683021, egret.HorizontalAlign.CENTER, "", 30, 45, 39, 508);
            this.info.lineSpacing = 2;
            this.addChild(this.info);
            this.addChild(this.title);
            if (this._needClose) {
                var closeBtn = new superslot.GameButton(["ss_closebtn_1_png", "ss_closebtn_2_png"]);
                closeBtn.ButtonX = bg.width - 46;
                closeBtn.ButtonY = -13;
                closeBtn.addClickArea(20);
                closeBtn.touchEnabled = true;
                superslotBC.addEvent(this, closeBtn, egret.TouchEvent.TOUCH_TAP, this.onClose);
                this.addChild(closeBtn);
            }
        };
        MsgBox.prototype.onClose = function (evt) {
            evt.stopPropagation();
            superslot.PopupManager.removePopUp(this);
            this.dispatchEventWith(superslot.UIEventConsts.CLOSE);
            this.destory();
        };
        MsgBox.prototype.setData = function (title, msg, labelarr, backFn, backObject, countdown, size, align) {
            if (labelarr === void 0) { labelarr = null; }
            if (backFn === void 0) { backFn = null; }
            if (backObject === void 0) { backObject = null; }
            if (countdown === void 0) { countdown = 0; }
            if (size === void 0) { size = 32; }
            if (align === void 0) { align = egret.HorizontalAlign.CENTER; }
            if (labelarr === void 0) {
                labelarr = null;
            }
            if (backFn === void 0) {
                backFn = null;
            }
            if (backObject === void 0) {
                backObject = null;
            }
            if (countdown === void 0) {
                countdown = 0;
            }
            if (size === void 0) {
                size = 32;
            }
            if (align === void 0) {
                align = egret.HorizontalAlign.CENTER;
            }
            this._backFn = backFn;
            this._backObj = backObject;
            this.info.size = size;
            this.title.text = title;
            this.info.text = msg;
            this.info.textAlign = align;
            this.info.y = Math.round((254 - this.info.textHeight) / 2);
            if (labelarr.length == 1) {
                if (!labelarr[0] || labelarr[0] == "") {
                    labelarr[0] = "确定";
                }
                this.yesBtn = new superslot.GameButton(["ss_common_sure_1_png", "ss_common_sure_2_png"]);
                this.yesBtn.ButtonX = Math.round((this.width - this.yesBtn.width) / 2);
                this.yesBtn.ButtonY = this.height - 105;
                this.addChild(this.yesBtn);
            }
            else if (labelarr.length == 2) {
                if (!labelarr[0] || labelarr[0] == "") {
                    labelarr[0] = "确定";
                }
                if (!labelarr[1] || labelarr[1] == "") {
                    labelarr[1] = "取消";
                }
                this.yesBtn = new superslot.GameButton(["ss_common_sure_1_png", "ss_common_sure_2_png"]);
                this.yesBtn.ButtonX = 597 / 2 - this.yesBtn.width - 10;
                this.yesBtn.ButtonY = 230;
                this.addChild(this.yesBtn);
                this.noBtn = new superslot.GameButton(["ss_common_cancel_1_png", "ss_common_cancel_2_png"]);
                this.noBtn.ButtonX = 597 / 2 + 10;
                this.noBtn.ButtonY = 230;
                this.yesBtn.y = this.noBtn.y = this.height - this.yesBtn.height - 70;
                this.addChild(this.noBtn);
            }
            if (this._backFn && this._backFn[0]) {
                this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[0], this._backObj);
            }
            if (this._backFn && this._backFn[1]) {
                this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[1], this._backObj);
            }
            if (this.yesBtn) {
                superslotBC.addEvent(this, this.yesBtn, egret.TouchEvent.TOUCH_TAP, this.onClose);
            }
            if (this.noBtn) {
                superslotBC.addEvent(this, this.noBtn, egret.TouchEvent.TOUCH_TAP, this.onClose);
            }
            this.title.x = (597 - this.title.width) / 2;
        };
        Object.defineProperty(MsgBox.prototype, "titleY", {
            set: function (value) {
                this.title.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MsgBox.prototype, "titleColor", {
            set: function (value) {
                this.title.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        MsgBox.prototype.destory = function () {
            if (this.yesBtn) {
                if (this._backFn && this._backFn[0]) {
                    this.yesBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[0], this._backObj);
                }
                this.yesBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
                this.yesBtn = null;
            }
            if (this.noBtn) {
                this.noBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
                if (this._backFn && this._backFn[1]) {
                    this.noBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[1], this._backObj);
                }
                this.noBtn = null;
            }
            this.title = null;
            this.info = null;
            this._backFn = null;
            this._backObj = null;
            superslot.ResUtil.removeFromParent(this);
            superslot.ResUtil.removeAllChildren(this);
        };
        return MsgBox;
    }(egret.Sprite));
    superslot.MsgBox = MsgBox;
    __reflect(MsgBox.prototype, "superslot.MsgBox");
})(superslot || (superslot = {}));
