module lhj {
	export class GameVc extends eui.Component {
		public static NAME: string = "GameVc";
		private container: eui.Group;
		private frame: eui.Rect;
		private listArr: Array<LogoList>;
		private runTime: egret.Timer;
		private index: number = 0;
		private showTime: egret.Timer;
		private order: number = -1;
		private data: Cmd.LotteryCmd_S;
		private isBonus: boolean = false;
		public constructor() {
			super();
			this.skinName = "GameVcSkin";
			this.init();
		}
		private init(): void {
			this.listArr = [];
			this.container.mask = this.frame;
			//创建5列转轮
			for (var i = 0; i < 5; i++) {
				let list = new LogoList(i);
				list.x = 129.5 + 203 * i;
				list.y = -164.5;
				this.container.addChild(list);
				this.listArr.push(list);
			}
			this.showTime = new egret.Timer(2000);
			this.showTime.addEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
			this.showTime.stop();
		}
		//设置每列转轮图片
		public setLogo(rev: Cmd.EnterGameCmd_S): void {
			for (var i = 0; i < this.listArr.length; i++) {
				this.listArr[i].setImage(rev.gameinfo.whells[i].reels);
			}
		}
		//配置每列转轮停放时的图片
		public setData(rev: Cmd.WhellResultCmd_S): void {
			this.isBonus = rev.bonus;
			for (var i = 0; i < rev.idxs.length; i++) {
				this.listArr[i].setData(rev.idxs[i]);
			}
		}
		//展示中奖结果
		public showLottery(rev: Cmd.LotteryCmd_S): void {
			this.data = rev;
			this.showEffect();
			this.showTime.start();
		}
		private showEffect(): void {
			if (this.data.lotitems.length > 0) {
				for (var i = 0; i < this.listArr.length; i++) {
					this.listArr[i].removeLottery();
				}
				this.order++;
				let type = this.data.lotitems[this.order].linereels;
				for (var i = 0; i < type.length; i++) {
					let index = Math.floor((type[i] - 1) / 3);
					let order = (type[i] - 1) % 3 + 1;
					this.listArr[index].showLight(order);
				}
				if (this.order == (this.data.lotitems.length - 1)) {
					this.order = -1;
				}
			}
		}
		//启动游戏
		public startGame(): void {
			this.isBonus = false;
			if (this.showTime) {
				this.showTime.stop();
			}
			for (var i = 0; i < this.listArr.length; i++) {
				this.listArr[i].removeLottery();
			}
			this.stopRun();
			this.index = 0
			this.data = null;
			this.order = -1;
			this.runTime = new egret.Timer(50, 5);
			this.runTime.addEventListener(egret.TimerEvent.TIMER, this.runGame, this);
			this.runTime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
			this.runTime.start();
		}
		private runGame(): void {
			if (this.isBonus && this.index == 4) {
				this.listArr[this.index].onBonus();
			} else {
				this.listArr[this.index].startGame();
			}
			this.index++;
			if (this.index > 4) {
				this.index = 0;
			}
		}
		//停止计时器
		private stopRun(): void {
			if (this.runTime) {
				this.runTime.stop();
				this.runTime.removeEventListener(egret.TimerEvent.TIMER, this.runGame, this);
				this.runTime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
				this.runTime = null;
			}
		}
		//设置加速器
		public setAdd(): void {
			for (var i = 0; i < this.listArr.length; i++) {
				this.listArr[i].setTime();
			}
		}
		public destory(): void {
			if (this.runTime) {
				this.runTime.stop();
				this.runTime.removeEventListener(egret.TimerEvent.TIMER, this.runGame, this);
				this.runTime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopRun, this);
				this.runTime = null;
			}
			egret.Tween.removeTweens(this);
			uniLib.DisplayUtils.removeAllChildren(this);
			uniLib.DisplayUtils.removeFromParent(this);
		}
	}
}