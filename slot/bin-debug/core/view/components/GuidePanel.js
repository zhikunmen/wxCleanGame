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
    var GuidePanel = (function (_super) {
        __extends(GuidePanel, _super);
        function GuidePanel() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.skinName = "dt_GuideSkin";
            _this.init();
            return _this;
        }
        GuidePanel.prototype.init = function () {
            this.touchEnabled = true;
            this.guideArr = [this.guide_1, this.guide_2, this.guide_3, this.guide_4, this.guide_5, this.guide_6, this.guide_7];
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showGuide, this);
            for (var i = 0; i < this.guideArr.length; i++) {
                this.guideArr[i].width = 1280 * lhj.GameInfo.scaleY;
            }
            var img1 = new egret.Sprite();
            img1.graphics.beginFill(0, 0.7);
            img1.graphics.drawRect(-(uniLib.Global.screenWidth - 1280 * lhj.GameInfo.scaleY) / 2, 0, (uniLib.Global.screenWidth - 1280 * lhj.GameInfo.scaleY) / 2, 720);
            img1.graphics.endFill();
            this.addChild(img1);
            var img2 = new egret.Sprite();
            img2.graphics.beginFill(0, 0.7);
            img2.graphics.drawRect(this.guide_1.width, 0, (uniLib.Global.screenWidth - 1280 * lhj.GameInfo.scaleY) / 2, 720);
            img2.graphics.endFill();
            this.addChild(img2);
        };
        GuidePanel.prototype.showGuide = function () {
            if (this.index == this.guideArr.length - 1) {
                this.destroy();
            }
            else {
                this.guideArr[this.index].visible = false;
                this.index++;
                this.guideArr[this.index].visible = true;
            }
        };
        GuidePanel.prototype.destroy = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showGuide, this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        return GuidePanel;
    }(eui.Component));
    lhj.GuidePanel = GuidePanel;
    __reflect(GuidePanel.prototype, "lhj.GuidePanel");
})(lhj || (lhj = {}));
