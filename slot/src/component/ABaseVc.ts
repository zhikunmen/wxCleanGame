module lhj {
	export class BaseVc extends egret.DisplayObjectContainer {
		protected _width: number;
		protected _height: number;
		public constructor(width?: number, height?: number) {
			super();
			if (width) this._width = width;
			if (height) this._height = height;
			this.initUI();
			this.Start();
		}
		public initUI(): void {

		}
		public setSize(width: number, height: number): void {

		}
		public Start(): void {

		}
		public destory(): void {
			ResUtil.removeFromParent(this);
			ResUtil.removeAllChildren(this);
		}
	}
}