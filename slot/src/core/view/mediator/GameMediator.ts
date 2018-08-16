
module lhj {
	export class GameMediator extends puremvc.Mediator {
		public static NAME: string = "GameMediator";
		private _view: GameVc;
		public constructor(viewComponent?: any) {
			super(GameMediator.NAME, viewComponent);
			this._view = new GameVc;
			GameInfo.uiLayer.addChild(this._view);
			this._view.scaleY = GameInfo.scaleY;
			this._view.width = 1280 * GameInfo.scaleY;
			this._view.x = (uniLib.Global.screenWidth - this._view.width) / 2;
			this.setViewComponent(this._view);
			if (this._view) {
				this._view.addEventListener(UIEventConsts.USER_BET_CHIPS, this.uiHandle, this);
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
				this._view.removeEventListener(UIEventConsts.USER_BET_CHIPS, this.uiHandle, this);
				this._view.destory();
			}
		}
		public listNotificationInterests(): Array<any> {
			return [
				AppFacadeConst.ROOM_INIT,
				AppFacadeConst.CHANGE_SPEED,
				AppFacadeConst.BET_REPLY,
				AppFacadeConst.RUN_RESULT,
				AppFacadeConst.LOTTERY_RESULT
			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case AppFacadeConst.ROOM_INIT:
					if(this._view){
						this._view.setLogo(notification.getBody());
					}
					break;
				case AppFacadeConst.CHANGE_SPEED:
					if(this._view){
						this._view.setAdd();
					}
					break;
				case AppFacadeConst.BET_REPLY:
					if(this._view){
						this._view.startGame();
					}
					break;
				case AppFacadeConst.RUN_RESULT:
					if(this._view){
						this._view.setData(notification.getBody());
					}
					break;
				case AppFacadeConst.LOTTERY_RESULT:
					if(this._view){
						this._view.showLottery(notification.getBody());
					}
					break;
				default:
					break;
			}
		}
	}
}