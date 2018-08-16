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
    var HelpPanel = (function (_super) {
        __extends(HelpPanel, _super);
        function HelpPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "SuperSlot_HelpSkin";
            superslotBC.addEvent(_this, _this.closeBtn, egret.TouchEvent.TOUCH_TAP, _this.closeHandle);
            return _this;
        }
        HelpPanel.prototype.addEvent = function () {
            superslotBC.addEvent(this, this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.closeHandle);
            superslotBC.addEvent(this, this.gameRule_2, egret.TouchEvent.TOUCH_TAP, this.showGameRule);
            superslotBC.addEvent(this, this.gameExplain_2, egret.TouchEvent.TOUCH_TAP, this.showgameExplain);
        };
        HelpPanel.prototype.closeHandle = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(superslot.UIEventConsts.CLOSE);
        };
        HelpPanel.prototype.showGameRule = function (evt) {
            evt.stopPropagation();
            this.gameRule_1.visible = true;
            this.gameRule_2.visible = false;
            this.gameExplain_1.visible = false;
            this.gameExplain_2.visible = true;
            this.helpScroll_rule.visible = true;
            // this.helpScroll_rule.verticalScrollBar.autoVisibility = false;
            // this.helpScroll_rule.verticalScrollBar.visible = true;
            this.helpScroll_explain.visible = false;
        };
        HelpPanel.prototype.showgameExplain = function (evt) {
            evt.stopPropagation();
            this.gameRule_1.visible = false;
            this.gameRule_2.visible = true;
            this.gameExplain_1.visible = true;
            this.gameExplain_2.visible = false;
            this.helpScroll_rule.visible = false;
            this.helpScroll_explain.visible = true;
        };
        HelpPanel.prototype.destory = function () {
            if (this.closeBtn) {
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
                this.closeBtn = null;
            }
            superslot.ResUtil.removeFromParent(this);
            superslot.ResUtil.removeAllChildren(this);
        };
        return HelpPanel;
    }(superslot.BaseSlwhEuiPanel));
    superslot.HelpPanel = HelpPanel;
    __reflect(HelpPanel.prototype, "superslot.HelpPanel");
})(superslot || (superslot = {}));
