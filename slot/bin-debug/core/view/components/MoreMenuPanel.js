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
    var MoreMenuPanel = (function (_super) {
        __extends(MoreMenuPanel, _super);
        function MoreMenuPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "MorePanelSkin";
            _this.init();
            return _this;
        }
        MoreMenuPanel.prototype.init = function () {
            this.bg_layer = uniLib.DisplayUtils.createMask(0, uniLib.Global.screenWidth, uniLib.Global.screenHeight);
            this.bg_layer.touchEnabled = true;
            this.bg_layer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this.addChild(this.bg_layer);
            this.swapChildren(this.container, this.bg_layer);
            this.helpTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHelpTouchHandler, this);
            this.helpTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onHelpTouchHandler, this);
            this.setTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onsetTouchHandler, this);
            this.setTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onsetTouchHandler, this);
            this.exitTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onexitTouchHandler, this);
            this.exitTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onexitTouchHandler, this);
        };
        MoreMenuPanel.prototype.onexitTouchHandler = function (evt) {
            evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.exitBg.visible = true;
            }
            else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.exitBg.visible = false;
                this.onExitGame();
            }
        };
        MoreMenuPanel.prototype.onsetTouchHandler = function (evt) {
            evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.setBg.visible = true;
            }
            else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.setBg.visible = false;
                this.onSetting();
            }
        };
        MoreMenuPanel.prototype.onHelpTouchHandler = function (evt) {
            evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.helpBg.visible = true;
            }
            else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.helpBg.visible = false;
                this.onHelp();
            }
        };
        MoreMenuPanel.prototype.onTouch = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(lhj.UIEventConsts.CLOSE, false);
        };
        MoreMenuPanel.prototype.onHelp = function () {
            this.dispatchEventWith(lhj.UIEventConsts.SHOW_HELP_PANEL, false);
        };
        MoreMenuPanel.prototype.onSetting = function () {
            this.dispatchEventWith(lhj.UIEventConsts.SHOW_SETTING_PANEL, false);
        };
        MoreMenuPanel.prototype.onExitGame = function () {
            this.dispatchEventWith(lhj.UIEventConsts.EXIT_GAME, false, 999);
        };
        MoreMenuPanel.prototype.destory = function () {
            if (this.bg_layer) {
                this.bg_layer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            }
            this.helpTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHelpTouchHandler, this);
            this.helpTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onHelpTouchHandler, this);
            this.setTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onsetTouchHandler, this);
            this.setTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onsetTouchHandler, this);
            this.exitTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onexitTouchHandler, this);
            this.exitTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onexitTouchHandler, this);
            uniLib.DisplayUtils.removeFromParent(this);
            uniLib.DisplayUtils.removeAllChildren(this);
        };
        return MoreMenuPanel;
    }(eui.Component));
    lhj.MoreMenuPanel = MoreMenuPanel;
    __reflect(MoreMenuPanel.prototype, "lhj.MoreMenuPanel");
})(lhj || (lhj = {}));
