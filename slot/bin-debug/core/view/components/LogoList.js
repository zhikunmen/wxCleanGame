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
    var LogoList = (function (_super) {
        __extends(LogoList, _super);
        function LogoList(i) {
            var _this = _super.call(this) || this;
            _this.index = 0; //匀速滚动身位数
            _this.total = 0; //匀速滚动总身位数，根据开奖结果去计算
            _this.startPos = 0; //复位回原始位置续转动的身位数
            //房间每列转轮图片排列顺序
            _this.imageArr = [];
            _this.time = 20;
            _this.isChange = false; //是否处于减速阶段
            _this.skinName = "LogoListSkin";
            _this.init();
            _this.num = i;
            return _this;
        }
        LogoList.prototype.init = function () {
            this.logoArr = [];
            this.imageArr = [];
            var startY = [0, 180, 360, 540, 720];
            this.topY = 0;
            this.underY = 724;
            for (var i = 0; i < startY.length; i++) {
                var logo = new lhj.LogoItem();
                logo.y = startY[i];
                this.addChild(logo);
                this.logoArr.push(logo);
            }
            this.runTime = new egret.Timer(20);
            this.runTime.addEventListener(egret.TimerEvent.TIMER, this.addRun, this);
            this.runTime.stop();
            this.speed = 0;
            this.addSpeed = 5.625;
            this.evenSpeed = 90;
            this.reduceSpeed = 5.625;
            this.bonusTime = new egret.Timer(60);
            this.bonusTime.addEventListener(egret.TimerEvent.TIMER, this.addRun, this);
            this.bonusTime.stop();
        };
        //开始游戏
        LogoList.prototype.startGame = function () {
            this.index = 0;
            // this.isChange = false;
            if (this.runTime) {
                this.runTime.start();
            }
        };
        //触发bonus玩法
        LogoList.prototype.onBonus = function () {
            this.index = 0;
            if (this.bonusTime) {
                this.bonusTime.start();
            }
        };
        //加速
        LogoList.prototype.addRun = function () {
            if (this.index >= 2 * this.total - 1) {
                // if (!this.isChange) {
                //     this.isChange = true;
                // }
                this.reduceRun();
                return;
            }
            this.speed += this.addSpeed;
            if (this.speed >= this.evenSpeed) {
                this.speed = this.evenSpeed;
                this.index++;
            }
            this.startRun(false);
        };
        //慢慢减速直至停止
        LogoList.prototype.reduceRun = function () {
            this.speed = this.speed - this.reduceSpeed;
            if (this.speed <= 0) {
                if (this.runTime) {
                    this.runTime.stop();
                }
                if (this.bonusTime) {
                    this.bonusTime.stop();
                }
                this.speed = 0;
            }
            if (this.speed == 0) {
                this.startRun(true);
            }
            else {
                this.startRun(false);
            }
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].lastImage(this.startPos + i - 1);
            }
        };
        //设置转轮里的每张图片
        LogoList.prototype.setImage = function (numArr) {
            this.imageArr = numArr;
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].initImage((i - 1), numArr);
            }
        };
        //滚动转轮
        LogoList.prototype.startRun = function (bool) {
            var topY = this.logoArr[0].y + this.speed;
            for (var i = 0; i < this.logoArr.length; i++) {
                var newY = this.logoArr[i].y;
                if (bool) {
                    egret.Tween.get(this.logoArr[i]).to({ y: newY + 60 }, 200).to({ y: newY - 30 }, 300).to({ y: newY }, 100);
                }
                else {
                    egret.Tween.get(this.logoArr[i]).to({ y: newY + this.speed }).wait(10).call(this.resetLogo, this.logoArr[i], [this.logoArr[i], this.logoArr, topY]);
                }
            }
        };
        //如果图片移动到超出最低位置720，复位回最高位置0
        LogoList.prototype.resetLogo = function (logo, logoArr, y) {
            if (logo) {
                if (logo.y > 720) {
                    // logo.y = 0;
                    logo.y = y - 180;
                    logo.changeImage();
                    logoArr.pop();
                    logoArr.unshift(logo);
                }
            }
        };
        //计算出匀速（即最高速）转动身位数，以下表达式中的2表示加速和减速阶段转动的身位和
        LogoList.prototype.setData = function (index) {
            if (lhj.RoomInfo.getInstance().isAdd) {
                this.total = 5 + this.num * 2;
            }
            else {
                this.total = 10 + this.num * 2;
            }
            this.startPos = index - 1;
            console.error("*/", this.imageArr[this.startPos]);
        };
        //展示中奖结果
        LogoList.prototype.showLight = function (index) {
            this.logoArr[index].showEffect();
        };
        //清除开奖动画
        LogoList.prototype.removeLottery = function () {
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].removeEffect();
            }
        };
        //设置是否加速
        LogoList.prototype.setTime = function () {
        };
        LogoList.prototype.destory = function () {
            if (this.runTime) {
                this.runTime.stop();
                this.runTime.removeEventListener(egret.TimerEvent.TIMER, this.addRun, this);
                this.runTime = null;
            }
            if (this.bonusTime) {
                this.bonusTime.stop();
                this.bonusTime.removeEventListener(egret.TimerEvent.TIMER, this.addRun, this);
                this.bonusTime = null;
            }
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        return LogoList;
    }(eui.Component));
    lhj.LogoList = LogoList;
    __reflect(LogoList.prototype, "lhj.LogoList");
})(lhj || (lhj = {}));
