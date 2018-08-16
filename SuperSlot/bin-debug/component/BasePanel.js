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
    var BasePanel = (function (_super) {
        __extends(BasePanel, _super);
        function BasePanel() {
            return _super.call(this) || this;
        }
        BasePanel.prototype.initUI = function () {
            this._initY = -13;
            this._bg = superslot.ResUtil.createBitmapByName("sz_sys_bg_png");
            this._bg.y = this._initY + 160;
            this._bg.touchEnabled = true;
            this.addChild(this._bg);
            this._closeBtn = new superslot.GameButton(["hb_player_close", "hb_player_close"]);
            this._closeBtn.ButtonX = this._bg.width - 85;
            this._closeBtn.ButtonY = this._bg.y - 40;
            // this.addChild(this._closeBtn);
            superslotBC.addEvent(this, this._closeBtn, egret.TouchEvent.TOUCH_TAP, this.closeHandle);
            this.initPanel();
        };
        BasePanel.prototype.initPanel = function () {
        };
        BasePanel.prototype.closeHandle = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(superslot.UIEventConsts.CLOSE);
        };
        Object.defineProperty(BasePanel.prototype, "title", {
            set: function (iconUrl) {
                if (!this.title) {
                    this._title = superslot.ResUtil.createBitmapByName(iconUrl);
                    this._title.y = this._bg.y - 6;
                    this._title.x = this._bg.width / 2 - this._title.width / 2;
                    this.addChild(this._title);
                }
            },
            enumerable: true,
            configurable: true
        });
        BasePanel.prototype.setSize = function (w, h) {
            this._bg.width = w;
            this._bg.height = h - this._initY;
            this._closeBtn.x = this._bg.width - 85;
            this._closeBtn.y = this._bg.y - 40;
        };
        BasePanel.prototype.hideTitle = function (show) {
            if (this._title) {
                this._title.visible = show;
            }
        };
        BasePanel.prototype.setCloseBtnPosition = function (x, y) {
            if (x === void 0) {
                x = null;
            }
            if (y === void 0) {
                y = null;
            }
            if (x != null)
                this._closeBtn.x = x;
            if (y != null)
                this._closeBtn.y = y;
        };
        BasePanel.prototype.setTitlePosition = function (x, y) {
            if (x === void 0) {
                x = null;
            }
            if (y === void 0) {
                y = null;
            }
            if (x != null)
                this._title.x = x;
            if (y != null)
                this._title.y = y;
        };
        BasePanel.prototype.destory = function () {
            _super.prototype.destory.call(this);
            if (this._closeBtn) {
                this._closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
                this._closeBtn = null;
            }
            this._bg = null;
            this._title = null;
        };
        return BasePanel;
    }(superslot.BaseVc));
    superslot.BasePanel = BasePanel;
    __reflect(BasePanel.prototype, "superslot.BasePanel");
})(superslot || (superslot = {}));
