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
    var GameVc = (function (_super) {
        __extends(GameVc, _super);
        function GameVc() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.order = -1;
            _this.isBonus = false;
            _this.skinName = "GameVcSkin";
            _this.init();
            return _this;
        }
        GameVc.prototype.init = function () {
            this.listArr = [];
            this.container.mask = this.frame;
            //创建5列转轮
            for (var i = 0; i < 5; i++) {
                var list = new lhj.LogoList(i);
                list.x = 129.5 + 203 * i;
                list.y = -164.5;
                this.container.addChild(list);
                this.listArr.push(list);
            }
            this.showTime = new egret.Timer(2000);
            this.showTime.addEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
            this.showTime.stop();
        };
        //设置每列转轮图片
        GameVc.prototype.setLogo = function (rev) {
            for (var i = 0; i < this.listArr.length; i++) {
                this.listArr[i].setImage(rev.gameinfo.whells[i].reels);
            }
        };
        //配置每列转轮停放时的图片
        GameVc.prototype.setData = function (rev) {
            this.isBonus = rev.bonus;
            for (var i = 0; i < rev.idxs.length; i++) {
                this.listArr[i].setData(rev.idxs[i]);
            }
        };
        //展示中奖结果
        GameVc.prototype.showLottery = function (rev) {
            this.data = rev;
            this.showEffect();
            this.showTime.start();
        };
        GameVc.prototype.showEffect = function () {
            if (this.data.lotitems.length > 0) {
                for (var i = 0; i < this.listArr.length; i++) {
                    this.listArr[i].removeLottery();
                }
                this.order++;
                var type = this.data.lotitems[this.order].linereels;
                for (var i = 0; i < type.length; i++) {
                    var index = Math.floor((type[i] - 1) / 3);
                    var order = (type[i] - 1) % 3 + 1;
                    this.listArr[index].showLight(order);
                }
                if (this.order == (this.data.lotitems.length - 1)) {
                    this.order = -1;
                }
            }
        };
        //启动游戏
        GameVc.prototype.startGame = function () {
            this.isBonus = false;
            if (this.showTime) {
                this.showTime.stop();
            }
            for (var i = 0; i < this.listArr.length; i++) {
                this.listArr[i].removeLottery();
            }
            this.stopRun();
            this.index = 0;
            this.data = null;
            this.order = -1;
            this.runTime = new egret.Timer(50, 5);
            this.runTime.addEventListener(egret.TimerEvent.TIMER, this.runGame, this);
            this.runTime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
            this.runTime.start();
        };
        GameVc.prototype.runGame = function () {
            if (this.isBonus && this.index == 4) {
                this.listArr[this.index].onBonus();
            }
            else {
                this.listArr[this.index].startGame();
            }
            this.index++;
            if (this.index > 4) {
                this.index = 0;
            }
        };
        //停止计时器
        GameVc.prototype.stopRun = function () {
            if (this.runTime) {
                this.runTime.stop();
                this.runTime.removeEventListener(egret.TimerEvent.TIMER, this.runGame, this);
                this.runTime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
                this.runTime = null;
            }
        };
        //设置加速器
        GameVc.prototype.setAdd = function () {
            for (var i = 0; i < this.listArr.length; i++) {
                this.listArr[i].setTime();
            }
        };
        GameVc.prototype.destory = function () {
            if (this.runTime) {
                this.runTime.stop();
                this.runTime.removeEventListener(egret.TimerEvent.TIMER, this.runGame, this);
                this.runTime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
                this.runTime = null;
            }
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        GameVc.NAME = "GameVc";
        return GameVc;
    }(eui.Component));
    lhj.GameVc = GameVc;
    __reflect(GameVc.prototype, "lhj.GameVc");
})(lhj || (lhj = {}));
