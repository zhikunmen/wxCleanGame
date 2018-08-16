module lhj {
    export class LogoList extends eui.Component {
        private logoArr: Array<LogoItem>;
        private topY: number;   //最高位置
        private underY: number;     //最低位置
        private runTime: egret.Timer;
        private speed: number;   //速度
        private addSpeed: number;       //加速度(根据计算，计算出加速阶段一共滚动5个身位)
        private evenSpeed: number;      //匀速即最高速（一次滚动2个身位）
        private reduceSpeed: number;    //减速度(根据计算，计算出减速阶段一共滚动5个身位)
        private index: number = 0;      //匀速滚动身位数
        private total: number = 0;      //匀速滚动总身位数，根据开奖结果去计算
        private startPos: number = 0;   //复位回原始位置续转动的身位数
        //房间每列转轮图片排列顺序
        public imageArr: Array<number> = [];
        private num: number;
        private time: number = 20;
        private isChange: boolean = false;  //是否处于减速阶段
        private bonusTime: egret.Timer;
        public constructor(i) {
            super();
            this.skinName = "LogoListSkin";
            this.init();
            this.num = i;
        }
        private init(): void {
            this.logoArr = [];
            this.imageArr = [];
            let startY = [0, 180, 360, 540, 720];
            this.topY = 0;
            this.underY = 724;
            for (var i = 0; i < startY.length; i++) {
                let logo = new LogoItem();
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
        }
        //开始游戏
        public startGame(): void {
            this.index = 0;
            // this.isChange = false;
            if (this.runTime) {
                this.runTime.start();
            }
        }
        //触发bonus玩法
        public onBonus(): void {
            this.index = 0;
            if (this.bonusTime) {
                this.bonusTime.start();
            }
        }
        //加速
        private addRun(): void {
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
        }
        //慢慢减速直至停止
        private reduceRun(): void {
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
            } else {
                this.startRun(false);
            }
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].lastImage(this.startPos + i - 1);
            }
        }
        //设置转轮里的每张图片
        public setImage(numArr: number[]): void {
            this.imageArr = numArr;
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].initImage((i - 1), numArr);
            }
        }
        //滚动转轮
        private startRun(bool: boolean): void {
            let topY = this.logoArr[0].y + this.speed;
            for (var i = 0; i < this.logoArr.length; i++) {
                let newY = this.logoArr[i].y;
                if (bool) {
                    egret.Tween.get(this.logoArr[i]).to({ y: newY + 60 }, 200).to({ y: newY - 30 }, 300).to({ y: newY }, 100)
                } else {
                    egret.Tween.get(this.logoArr[i]).to({ y: newY + this.speed }).wait(10).call(this.resetLogo, this.logoArr[i], [this.logoArr[i], this.logoArr, topY]);
                }
            }
        }
        //如果图片移动到超出最低位置720，复位回最高位置0
        private resetLogo(logo: LogoItem, logoArr: LogoItem[], y: number): void {
            if (logo) {
                if (logo.y > 720) {
                    // logo.y = 0;
                    logo.y = y - 180;
                    logo.changeImage();
                    logoArr.pop();
                    logoArr.unshift(logo);
                }
            }
        }
        //计算出匀速（即最高速）转动身位数，以下表达式中的2表示加速和减速阶段转动的身位和
        public setData(index: number): void {
            if (RoomInfo.getInstance().isAdd) {
                this.total = 5 + this.num * 2;
            } else {
                this.total = 10 + this.num * 2;
            }
            this.startPos = index - 1;
            console.error("*/", this.imageArr[this.startPos]);
        }
        //展示中奖结果
        public showLight(index: number): void {
            this.logoArr[index].showEffect();
        }
        //清除开奖动画
        public removeLottery(): void {
            for (var i = 0; i < this.logoArr.length; i++) {
                this.logoArr[i].removeEffect();
            }
        }
        //设置是否加速
        public setTime(): void {

        }
        public destory(): void {
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
        }
    }
}