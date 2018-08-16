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
    var BasePanel = (function (_super) {
        __extends(BasePanel, _super);
        function BasePanel() {
            return _super.call(this) || this;
        }
        BasePanel.prototype.initUI = function () {
            this._initY = -13;
            this._bg = lhj.ResUtil.createBitmapByName("da_frame_4");
            this._bg.scale9Grid = new egret.Rectangle(20, 31, 34, 15);
            this._bg.width = 577;
            this._bg.height = 482 - this._initY;
            this._bg.y = this._initY + 40;
            this._bg.touchEnabled = true;
            this.addChild(this._bg);
            this._closeBtn = new lhj.GameButton(["dt_close_btn_1", "dt_close_btn_2"]);
            this._closeBtn.x = this._bg.width - 61;
            this._closeBtn.y = this._bg.y + 10;
            this.addChild(this._closeBtn);
            this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
            this.initPanel();
        };
        BasePanel.prototype.initPanel = function () {
        };
        BasePanel.prototype.closeHandle = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(lhj.UIEventConsts.CLOSE);
        };
        Object.defineProperty(BasePanel.prototype, "title", {
            set: function (iconUrl) {
                if (!this.title) {
                    this._title = lhj.ResUtil.createBitmapByName(iconUrl);
                    this._title.y = this._bg.y - 6;
                    this._title.x = this._bg.width / 2 - this._title.width / 2;
                    this.addChild(this._title);
                }
            },
            enumerable: true,
            configurable: true
        });
        BasePanel.prototype.setSize = function (w, h, bg) {
            if (bg === void 0) { bg = false; }
            if (bg == true) {
                this._bg.texture = RES.getRes("dt_frame_bg");
                this._bg.scale9Grid = new egret.Rectangle(145, 212, 659, 192);
            }
            this._bg.width = w;
            this._bg.height = h - this._initY;
            this._closeBtn.x = this._bg.width - 50;
            this._closeBtn.y = this._bg.y;
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
    }(lhj.BaseVc));
    lhj.BasePanel = BasePanel;
    __reflect(BasePanel.prototype, "lhj.BasePanel");
})(lhj || (lhj = {}));
