module lhj {
	export class BasePanel extends BaseVc {
		private _closeBtn: GameButton;
		private _bg: egret.Bitmap;
		private _title: egret.Bitmap;
		private _initY: number;
		public constructor() {
			super();
		}
		public initUI(): void {
			this._initY = -13;
			this._bg = ResUtil.createBitmapByName("da_frame_4");
			this._bg.scale9Grid = new egret.Rectangle(20, 31, 34, 15);
			this._bg.width = 577;
			this._bg.height = 482 - this._initY;
			this._bg.y = this._initY + 40;
			this._bg.touchEnabled = true;
			this.addChild(this._bg);

			this._closeBtn = new GameButton(["dt_close_btn_1", "dt_close_btn_2"]);
			this._closeBtn.x = this._bg.width - 61;
			this._closeBtn.y = this._bg.y + 10;
			this.addChild(this._closeBtn);
			this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
			this.initPanel();
		}
		public initPanel(): void {

		}
		private closeHandle(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.dispatchEventWith(UIEventConsts.CLOSE);
		}

		public set title(iconUrl) {
			if (!this.title) {
				this._title = ResUtil.createBitmapByName(iconUrl);
				this._title.y = this._bg.y - 6;
				this._title.x = this._bg.width / 2 - this._title.width / 2;
				this.addChild(this._title);
			}
		}
		public setSize(w: number, h: number, bg: boolean = false): void {
			if (bg == true) {
				this._bg.texture = RES.getRes("dt_frame_bg");
				this._bg.scale9Grid = new egret.Rectangle(145,212,659,192);
			}
			this._bg.width = w;
			this._bg.height = h - this._initY;
			this._closeBtn.x = this._bg.width - 50;
			this._closeBtn.y = this._bg.y ;
		}
		public hideTitle(show: boolean): void {
			if (this._title) {
				this._title.visible = show;
			}
		}
		public setCloseBtnPosition(x: number, y: number): void {
			if (x === void 0) { x = null; }
			if (y === void 0) { y = null; }
			if (x != null)
				this._closeBtn.x = x;
			if (y != null)
				this._closeBtn.y = y;
		}
		public setTitlePosition(x: number, y: number): void {
			if (x === void 0) { x = null; }
			if (y === void 0) { y = null; }
			if (x != null)
				this._title.x = x;
			if (y != null)
				this._title.y = y;
		}
		public destory(): void {
			super.destory();
			if (this._closeBtn) {
				this._closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
				this._closeBtn = null;
			}
			this._bg = null;
			this._title = null;
		}
	}
}