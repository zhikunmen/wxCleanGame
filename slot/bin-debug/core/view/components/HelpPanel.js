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
    var HelpPanel = (function (_super) {
        __extends(HelpPanel, _super);
        function HelpPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "fpc_HelpPanelSkin";
            _this.init();
            return _this;
        }
        HelpPanel.prototype.init = function () {
            this.rule_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this);
            this.introduce_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showIntroduce, this);
            this.instr_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInstr, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
        };
        HelpPanel.prototype.closeHandle = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(lhj.UIEventConsts.CLOSE);
        };
        HelpPanel.prototype.showRule = function (evt) {
            evt.stopPropagation();
            this.rule_txt.visible = true;
            this.rule_bg.visible = true;
            this.introduce_bg.visible = false;
            this.introduce_txt.visible = false;
            this.instr_bg.visible = false;
            this.instr_txt.visible = false;
        };
        HelpPanel.prototype.showIntroduce = function (evt) {
            evt.stopPropagation();
            this.rule_txt.visible = false;
            this.rule_bg.visible = false;
            this.introduce_bg.visible = true;
            this.introduce_txt.visible = true;
            this.instr_bg.visible = false;
            this.instr_txt.visible = false;
        };
        HelpPanel.prototype.showInstr = function (evt) {
            evt.stopPropagation();
            this.rule_txt.visible = false;
            this.rule_bg.visible = false;
            this.introduce_bg.visible = false;
            this.introduce_txt.visible = false;
            this.instr_bg.visible = true;
            this.instr_txt.visible = true;
        };
        HelpPanel.prototype.destory = function () {
            this.rule_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this);
            this.introduce_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showIntroduce, this);
            this.instr_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showInstr, this);
            this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
            uniLib.DisplayUtils.removeFromParent(this);
            uniLib.DisplayUtils.removeAllChildren(this);
        };
        return HelpPanel;
    }(eui.Component));
    lhj.HelpPanel = HelpPanel;
    __reflect(HelpPanel.prototype, "lhj.HelpPanel");
})(lhj || (lhj = {}));
