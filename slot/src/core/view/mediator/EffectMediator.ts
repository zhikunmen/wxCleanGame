module lhj {
	//主UI视图
	export class EffectMediator extends puremvc.Mediator {
		public static NAME: string = "EffectMediator";
		private _view: EffectVc;
		public constructor(viewComponent?: any) {
			super(EffectMediator.NAME, viewComponent);
			this._view = new EffectVc;
			GameInfo.uiLayer.addChild(this._view);
			this._view.scaleY = GameInfo.scaleY;
			this.setViewComponent(this._view);
			if (this._view) {

			}
		}
		private uiHandle(evt: egret.Event): void {
			var req: any;
			switch (evt.type) {
				default:
					break;
			}
		}
		public onRegister(): void {
			super.onRegister();

		}
		public onRemove(): void {
			super.onRemove();
			if (this._view) {
				this._view.destory();
			}
		}
		public listNotificationInterests(): Array<any> {
			return [

			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				default:
					break;
			}
		}
	}
}
