module lhj {
	export class ClockMc extends BaseVc {
		private _clockBg: egret.Bitmap;
		private _clockTxt: egret.BitmapText;
		private _timer: egret.Timer;
		private _countSecond: number = 0;
		private _countIndex: number = 0;
		public constructor() {
			super();
		}
		public initUI(): void {
			this._clockBg = ResUtil.createBitmapByName("dt_clock_bg");
			this.addChild(this._clockBg);
			this._clockBg.x = 830;
			this._clockBg.visible = false;
			this._clockBg.y = 10;
			this._clockTxt = ResUtil.createFontText("", 0, 0, 0, RES.getRes("dt_countdown_num_fnt"));
			this._clockTxt.width = this._clockBg.width;
			this._clockTxt.height = this._clockBg.height;
			this._clockTxt.x = this._clockBg.x;
			this._clockTxt.y = this._clockBg.y;
			this._clockTxt.textAlign = egret.HorizontalAlign.CENTER;
			this._clockTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.addChild(this._clockTxt);
			this._clockTxt.visible = false;
			this._timer = new egret.Timer(1000);
			this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		}
		public startCount(count: number): void {
			this._clockBg.visible = true;
			this._clockTxt.visible = true;
			this._countSecond = count;
			this._clockTxt.text = count + "";
			this._countIndex = 0;
			this._timer.start();
		}
		public reset():void{
			this._clockBg.visible = false;
			this._clockTxt.visible = false;
			this._countIndex = 0;
			if(this._timer){
				this._timer.stop();
			}
		}
		private onTimer(evt: egret.TimerEvent): void {
			this._countIndex++;
			var curTime = Math.floor(this._countSecond - this._countIndex);
			if (curTime == 0) {
				curTime = 0;
				uniLib.SoundMgr.instance.playSound("hb_sound_stop_bell_mp3");
				this._timer.reset();
				this._timer.stop();
				this._clockBg.visible = false;
				this._clockTxt.visible = false;
			}
			if (curTime == 5) {
				// this._clockBg.visible = false;
				// this._clockTxt.visible = false;
				// egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.LAST_TIME, false);
				uniLib.SoundMgr.instance.playSound("dt_sound_count_mp3");
			}
			this._clockTxt.text = curTime + "";
		}
		public destory(): void {
			if (this._timer) {
				this._timer.stop();
				this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
		}
	}
}