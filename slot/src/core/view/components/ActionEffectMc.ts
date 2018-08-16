module lhj {
	export class ActionEffectMc extends BaseVc {
		private _mcPanel: egret.Sprite;
		private _second: number = 0;
		private _count: number = 10;
		private timer_1000: egret.Timer;
		private effectArr: Array<dragonBones.Armature>;
		private waitTxt: egret.BitmapText;
		private _diceCup: egret.Bitmap;
		private movie_1: dragonBones.EgretArmatureDisplay;
		private movie_2: dragonBones.EgretArmatureDisplay;
		private movie_3: dragonBones.EgretArmatureDisplay;
		private movie_4: dragonBones.EgretArmatureDisplay;
		private effect: dragonBones.EgretArmatureDisplay;
		private title: egret.Bitmap;
		public constructor() {
			super();
		}
		//等待下一局
		public waitNext(rev): void {
			
		}
		//休息时间
		public freeTime(time: number): void {
			if (this.waitTxt) {
				uniLib.DisplayUtils.removeFromParent(this.waitTxt);
			}
			if (this.movie_1) {
				uniLib.DisplayUtils.removeFromParent(this.movie_1);
			}
			this.timer_1000.stop();
			this._second = 0;
			this.effect = ResUtil.createDragon("dt_free_effect", "dengdai", uniLib.DragonType.ARMATURE, 640, 360, this, time, 1);
			this.title = ResUtil.createBitmapByName("dt_free_title");
			this.title.x = 490;
			this.title.y = 320;
			this.addChild(this.title);
			this.addChild(this.waitTxt);
			this.waitTxt.x = 720;
			this.waitTxt.y = 320;
			this.waitTxt.text = "(" + time + "s)";
			this._count = time;
			this._second = 0;
			this.timer_1000.start();
		}
		private removeEffect(): void {
			if (this.effect) {
				uniLib.DisplayUtils.removeFromParent(this.effect);
			}
			if (this.title) {
				uniLib.DisplayUtils.removeFromParent(this.title);
			}
		}
		private countSecond() {
			this._second++;
			var remind = this._count - this._second;
			if (remind < 0) remind = 0;
			this.waitTxt.text = "(" + (remind) + "s)";
			if (this._second > this._count) {
				if (this.waitTxt) {
					uniLib.DisplayUtils.removeFromParent(this.waitTxt);
				}
				if (this.movie_1) {
					uniLib.DisplayUtils.removeFromParent(this.movie_1);
				}
				this.timer_1000.stop();
				this._second = 0;
			}
		}
		//开始下注
		public startBet(time: number = 10): void {
			this.removeEffect();
			this.timer_1000.stop();
			if (this.waitTxt) {
				uniLib.DisplayUtils.removeFromParent(this.waitTxt);
			}
			if (this.movie_1) {
				uniLib.DisplayUtils.removeFromParent(this.movie_1);
			}
			this.movie_2 = ResUtil.createDragon("dt_tishi", "xiazhu", "MovieClip", 640, 360, this, 1, 1);
			if (this.movie_2) {
				this.movie_2.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, () => {
					uniLib.DisplayUtils.removeFromParent(this.movie_2);
				}, this);
			}
		}
		public bgDown(param: egret.DisplayObjectContainer): void {
			if (param) {
				egret.Tween.removeTweens(param);
			}
		}
		private removeAction(): void {

		}
		public initUI(): void {
			this.effectArr = [];
			this._mcPanel = new egret.Sprite;
			this.addChild(this._mcPanel);
			this.waitTxt = ResUtil.createFontText("", 0, 0, 300, RES.getRes("dt_tishi_num_fnt"));
			this.timer_1000 = new egret.Timer(1000);
			this.timer_1000.addEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
			this.timer_1000.stop();
		}
		public destory(): void {
			if (this.timer_1000) {
				this.timer_1000.removeEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
				this.timer_1000.stop();
				this.timer_1000 = null;
			}
		}
	}
}