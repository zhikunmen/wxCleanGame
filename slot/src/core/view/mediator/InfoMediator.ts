module lhj {
	export class InfoMediator extends puremvc.Mediator {
		public static NAME: string = "InfoMediator";
		private _view: InfoVc;
		public constructor(viewComponent?: any) {
			super(InfoMediator.NAME, viewComponent);
			this._view = new InfoVc;
			GameInfo.uiLayer.addChild(this._view);
			this._view.scaleY = GameInfo.scaleY;
			this._view.width = 1280 * GameInfo.scaleY;
			this._view.x = (uniLib.Global.screenWidth - this._view.width) / 2;
			this.setViewComponent(this._view);
			if (this._view) {

			}
		}
		private uiHandle(evt: egret.Event): void {
			var req: any;
			switch (evt.type) {
				case UIEventConsts.GET_LOTTERY_HISTORY:
					// req = new Cmd.GetLotteryHistoryCmd_C;
					// this.sendNotification(AppFacadeConst.SEND_DATA, req, DataRequestCommand.GAME_DATA);
					//uniLib.NetMgr.tcpSend();
					break;
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
				this._view = null;
			}
		}
		public listNotificationInterests(): Array<any> {
			return [
				AppFacadeConst.ROOM_INIT,
				AppFacadeConst.BET_REPLY,
				AppFacadeConst.LOTTERY_RESULT,
				AppFacadeConst.SELECT_BOX
			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case AppFacadeConst.ROOM_INIT:
					if (this._view) {
						this._view.initInfo(notification.getBody());
					}
					break;
				case AppFacadeConst.BET_REPLY:
					if (this._view) {
						this._view.setChips(notification.getBody().chips);
					}
					break;
				case AppFacadeConst.LOTTERY_RESULT:
					if (this._view) {
						this._view.setChips(notification.getBody().chips);
						this._view.setIncome(notification.getBody().lotchips);
					}
					break;
				case AppFacadeConst.SELECT_BOX:
					if (this._view) {
						this._view.setChips(notification.getBody().chips);
					}
					break;
				default:
					break;
			}
		}
	}
}