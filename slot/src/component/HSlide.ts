module lhj {
	export class HSlide extends egret.Sprite {
		private track: egret.Bitmap;
		private trackHighlight: egret.Bitmap;
		private thumb:GameButton;

		private thumbMaxX: number;
		private _minValue: number = 1;
		private _maxValue: number = 10;
		private _value: number = 1;
		public gap: number = 1;

		private lastX: number = 0;
		private touchX: number = 0;

		public constructor(trackName: string, thumbName: string, thumbName_press: string,width: number, trackHighlightName?: string, scale9?: egret.Rectangle,scale92?:egret.Rectangle) {
			super();
			this.width = width;
			this.track = new egret.Bitmap(RES.getRes(trackName));
			this.thumb = new GameButton([thumbName,thumbName_press]);
			this.trackHighlight = new egret.Bitmap(RES.getRes(trackHighlightName));;
			if (scale9) {
				this.trackHighlight.scale9Grid = scale9;
			}
			if(scale92){
				this.track.scale9Grid=scale92;
			}
			this.addChild(this.track);
			if (this.trackHighlight) {
				this.addChild(this.trackHighlight);
			}
			this.addChild(this.thumb);

			this.track.width = this.width;
			this.track.y = (this.height - this.track.height) / 2;

			if (this.trackHighlight) {
				this.trackHighlight.touchEnabled = false;
				this.trackHighlight.y = (this.height - this.trackHighlight.height) / 2;
			}

			this.thumb.y = (this.height - this.thumb.height) / 2;

			this.thumbMaxX = this.width - this.thumb.width;

			this.thumb.touchEnabled = true;
			this.track.touchEnabled = true;
			this.thumb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onThumbTouch, this);
			this.track.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrackTouch, this);
		}

		private onTrackTouch(event: egret.TouchEvent): void {
			this.updateThumbPos(event.localX - this.thumb.width / 2);
		}

		private onThumbTouch(event: egret.TouchEvent): void {
			this.lastX = event.stageX;
			this.touchX = this.thumb.x;
			this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
		}

		private onStageMove(event: egret.TouchEvent): void {
			var gap: number = event.stageX - this.lastX;
			this.updateThumbPos(this.touchX + gap);
		}

		private onStageEnd(event: egret.TouchEvent): void {
			if (this.stage) {
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this);
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
			}
		}

		public get value(): number {
			return this._value;
		}

		public set value(num: number) {
			if (this.gap >= 1) num = Math.floor(num);
			if (num > this._maxValue) {
				num = this._maxValue;
			} else if (num < this._minValue) {
				num = this._minValue;
			}

			if (this._value != num) {
				this._value = num;
				this.updatePos();
			}
		}

		public get maxValue(): number {
			return this._maxValue;
		}

		public set maxValue(num: number) {
			if (this._maxValue != num) {
				this._maxValue = num;
				this.value = this._value;
			}
		}

		public get minValue(): number {
			return this._minValue;
		}

		public set minValue(num: number) {
			if (!num) {
				num = 0;
			}
			if (this._minValue != num) {
				this._minValue = num;
				this.value = this._value;
			}
		}

		public updateThumbPos(num: number): void {
			this.thumb.x = num;

			if (this.thumb.x < 0) {
				this.thumb.x = 0;
			} else if (this.thumb.x > this.thumbMaxX) {
				this.thumb.x = this.thumbMaxX;
			}

			this.updateValue();
		}

		private updateValue(): void {
			var perent: number = this.thumb.x / this.thumbMaxX;
			var value: number = this._minValue + perent * (this._maxValue - this._minValue);
			value = Math.floor(value / this.gap) * this.gap;
			console.log("value", value);
			if (this._value != value) {
				this._value = value;
				this.dispatchEventWith(egret.Event.CHANGE, false, this._value);
				console.log("egret.Event.CHANGE")
			}

			this.updateTrackHighlight();
		}

		private updatePos(): void {
			var perent: number = (this._value - this._minValue) / (this._maxValue - this._minValue);
			this.thumb.x = this.thumbMaxX * perent;

			this.updateTrackHighlight();
		}

		private updateTrackHighlight(): void {
			if (this.trackHighlight) {
				this.trackHighlight.width = this.thumb.x + this.thumb.width / 2;
			}
		}

		public dispose() {
			if (this.stage) {
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this);
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
			}
			if (this.track) {
				ResUtil.removeFromParent(this.track);
			}
			this.track = null;
			if (this.thumb) {
				ResUtil.removeFromParent(this.thumb);
			}
			this.thumb = null;
			if (this.trackHighlight) {
				ResUtil.removeFromParent(this.trackHighlight);
			}
			this.trackHighlight = null;
			ResUtil.removeAllChildren(this);
		}
	}
}


