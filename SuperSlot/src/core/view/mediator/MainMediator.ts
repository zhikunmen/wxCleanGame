module superslot {
	//主UI视图
	export class MainMediator extends puremvc.Mediator {
		public static NAME: string = "MainMediator";
		private _view: MainVc;
		public constructor(viewComponent?: any) {
			super(MainMediator.NAME, viewComponent);
			this._view = new MainVc;
			GameInfo.uiLayer.addChild(this._view);
			this._view.width = 1280*720/uniLib.Global.screenHeight;
            this._view.x = (uniLib.Global.screenWidth - this._view.width)/2;
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
				AppFacadeConst.FREE_TIME,
				AppFacadeConst.NOTIFY_START_BET,
				AppFacadeConst.NOTIFY_GAME_OPEN_CARD,
				AppFacadeConst.ROOM_INIT,
				AppFacadeConst.START_GAME,
				AppFacadeConst.LEFT_RIGHT_TRUE_GOLD,
				AppFacadeConst.BET_SIZE,
				AppFacadeConst.EIGHT_BUTTON_BET_INFO,
				AppFacadeConst.ALL_BET_OR_REPEAL,
				AppFacadeConst.EXIT_GAME,
				AppFacadeConst.RECORD_LAST_GAME_BET,
				AppFacadeConst.THREE_BET_FAIL
			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				// case AppFacadeConst.FREE_TIME:
				// 	if (this._view) {
				// 		this._view.onsleep();
				// 	}
				// 	break;
				// case AppFacadeConst.NOTIFY_START_BET:
				// 	if (this._view) {
				// 		this._view.startBet();
				// 	}
				// 	break;
				case AppFacadeConst.NOTIFY_GAME_OPEN_CARD:
					if (this._view) {
						// this._view.openLottery(notification.getBody());
						// this._view.onAccelerate();
					}
					//notification.getBody().bankerLotInfo.lotteryId
					break;
				case AppFacadeConst.ROOM_INIT:
					if (this._view) {
						if (notification.getBody().lotteryhistory) {
							this._view.setLotteryHistory(notification.getBody().lotteryhistory);
						}
						if (notification.getBody().sizehistory) {
							this._view.setSizeHistory(notification.getBody().sizehistory);
						}
						if (notification.getBody().userInfo) {
							this._view.setRepeatTextValue(notification.getBody().roombet, notification.getBody().userInfo.chips, notification.getBody().userInfo.bounty);
						}
					}
					break;
				case AppFacadeConst.START_GAME:
					if (this._view) {
						this._view.startGame(notification.getBody());
					}
					break;
				case AppFacadeConst.LEFT_RIGHT_TRUE_GOLD:
					if (this._view) {
						this._view.setRewardAndBalanceVaule(notification.getBody());
					}
					break;
				case AppFacadeConst.BET_SIZE:
					if (this._view) {
						this._view._small.enabled = false;
						this._view._big.enabled = false;
						this._view._start.enabled = false;
						this._view.updateSizeView(notification.getBody());
					}
					break;
				case AppFacadeConst.EIGHT_BUTTON_BET_INFO:
					if (this._view) {
						this._view.updateEightTextView(notification.getBody());
					}
					break;
				case AppFacadeConst.ALL_BET_OR_REPEAL:
					if (this._view) {
						this._view.updateEightTextView2(notification.getBody());
					}
					break;
				case AppFacadeConst.EXIT_GAME:
					this.exitGame();
					break;
				case AppFacadeConst.RECORD_LAST_GAME_BET:
					if (this._view) {
						this._view.setLastGameRecord(notification.getBody());
					}
					break;
				case AppFacadeConst.THREE_BET_FAIL:
					if (this._view) {
						this._view.updateIsAutoGameState(notification.getBody());
					}
					break;
				default:
					break;
			}
		}

		private exitGame(): void {
			// console.error("退出游戏")
			AppFacade.getInstance().sendNotification(AppFacadeConst.DESTORY);
			uniLib.Global.dispatchEvent(uniLib.ZqEvent.EVENT_G2L, { gameId: 167 });
			//资源的移除让大厅来做

			//	RES.destroyRes("HB_Poker", true);
			//	RES.destroyRes("start_effect", true);
			/*
			uniLib.ResUtils.clearResConfigByGroupName(["HB_Poker"]);
			uniLib.ResUtils.clearResConfigByGroupName(["start_effect"]);
			*/
			uniLib.GameModuleUtils.ExitGame();
		}
	}
}