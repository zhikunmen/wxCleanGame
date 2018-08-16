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
    var PokerPanel = (function (_super) {
        __extends(PokerPanel, _super);
        function PokerPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "FishTankSkin";
            _this.init();
            return _this;
        }
        PokerPanel.prototype.init = function () {
            this.bg_layer = new egret.Sprite();
            this.bg_layer.graphics.beginFill(0, 0.7);
            this.bg_layer.graphics.drawRect(-(uniLib.Global.screenWidth - 1280) / 2, 0, uniLib.Global.screenWidth, 720);
            this.bg_layer.graphics.endFill();
            this.addChildAt(this.bg_layer, 0);
            this.bg_layer.alpha = 0;
            // this.swapChildren(this.container, this.bg_layer);
        };
        PokerPanel.prototype.enterFrameHandler = function () {
        };
        PokerPanel.prototype.showEffect = function () {
            this.second++;
            switch (this.second) {
                case 1:
                    this.showPoker();
                    break;
                case 4:
                    this.removePoker();
                    this.showPrize();
                    break;
                case 7:
                    this.destory();
                    break;
            }
        };
        PokerPanel.prototype.showShine = function () {
            if (this.bg.source == "dt_prize_bg_1") {
                this.bg.source = "dt_prize_bg_2";
            }
            else {
                this.bg.source = "dt_prize_bg_1";
            }
        };
        PokerPanel.prototype.showPoker = function () {
            this.frame.visible = true;
            this.poker.visible = true;
            this.bg.visible = true;
            this.backPoker.mask = this.frame;
            // egret.Tween.get(this.frame).to({x:-150,y:92},1500);
            egret.Tween.get(this.frame).to({ scaleY: 0 }, 1500);
            //x240y491
        };
        PokerPanel.prototype.removePoker = function () {
            if (this.showTime) {
                this.showTime.stop();
                this.showTime.removeEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
                this.showTime = null;
            }
            if (this.shineTime) {
                this.shineTime.stop();
                this.shineTime.removeEventListener(egret.TimerEvent.TIMER, this.showShine, this);
                this.shineTime = null;
            }
            if (this.backPoker) {
                uniLib.DisplayUtils.removeFromParent(this.backPoker);
            }
            this.bg.visible = false;
            this.poker.visible = false;
        };
        PokerPanel.prototype.showPrize = function () {
        };
        PokerPanel.prototype.getPoint = function (num) {
            var point;
            switch (num) {
                case 1:
                    point = new egret.Point(300, 310);
                    break;
                case 2:
                    point = new egret.Point(520, 245);
                    break;
                case 3:
                    point = new egret.Point(760, 310);
                    break;
                case 4:
                    point = new egret.Point(975, 245);
                    break;
                case 5:
                    point = new egret.Point(640, 425);
                    break;
            }
            return point;
        };
        PokerPanel.prototype.destory = function () {
            if (this.showTime) {
                this.showTime.stop();
                this.showTime.removeEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
                this.showTime = null;
            }
            if (this.shineTime) {
                this.shineTime.stop();
                this.shineTime.removeEventListener(egret.TimerEvent.TIMER, this.showShine, this);
                this.shineTime = null;
            }
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        return PokerPanel;
    }(eui.Component));
    lhj.PokerPanel = PokerPanel;
    __reflect(PokerPanel.prototype, "lhj.PokerPanel");
})(lhj || (lhj = {}));
