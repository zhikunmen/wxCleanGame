module superslot {
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
			this._bg = ResUtil.createBitmapByName("sz_sys_bg_png");
			this._bg.y = this._initY + 160;
			this._bg.touchEnabled = true;
			this.addChild(this._bg);

			this._closeBtn = new GameButton(["hb_player_close", "hb_player_close"]);
			this._closeBtn.ButtonX = this._bg.width - 85;
			this._closeBtn.ButtonY = this._bg.y - 40;
			// this.addChild(this._closeBtn);
			superslotBC.addEvent(this,this._closeBtn,egret.TouchEvent.TOUCH_TAP, this.closeHandle);
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
		public setSize(w: number, h: number): void {
			this._bg.width = w;
			this._bg.height = h - this._initY;
			this._closeBtn.x = this._bg.width - 85;
			this._closeBtn.y = this._bg.y - 40;
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