module lhj {
	export class ButtonMediator extends puremvc.Mediator {
		public static NAME: string = "ButtonMediator";
		private _view: ButtonVc;
		private _helpPanel: HelpPanel;
		private _settingPanel: SettingPanel;
		public constructor(viewComponent?: any) {
			super(ButtonMediator.NAME, viewComponent);
			this._view = new ButtonVc;
			GameInfo.uiLayer.addChild(this._view);
			this._view.scaleY = GameInfo.scaleY;
			this._view.width = 1280 * GameInfo.scaleY;
			this._view.x = (uniLib.Global.screenWidth - this._view.width) / 2;
			this.setViewComponent(this._view);
			if (this._view) {
				this._view.addEventListener(UIEventConsts.SHOW_HELP_PANEL, this.uiHandle, this);
				this._view.addEventListener(UIEventConsts.SHOW_SETTING_PANEL, this.uiHandle, this);
				this._view.addEventListener(UIEventConsts.EXIT_GAME, this.uiHandle, this);
			}
		}
		private uiHandle(evt: egret.Event): void {
			var req: any;
			switch (evt.type) {
				case UIEventConsts.SHOW_HELP_PANEL:
					this.showHelp(evt);
					break;
				case UIEventConsts.SHOW_SETTING_PANEL:
					this.showSetting(evt);
					break;
				case UIEventConsts.EXIT_GAME:
					this.showExitGame(evt);
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
				this._view.removeEventListener(UIEventConsts.SHOW_HELP_PANEL, this.uiHandle, this);
				this._view.removeEventListener(UIEventConsts.SHOW_SETTING_PANEL, this.uiHandle, this);
				this._view.removeEventListener(UIEventConsts.EXIT_GAME, this.uiHandle, this);
				this.removeHelp(null);
				this.removeSetting(null);
				this._view.destory();
			}
		}
		public listNotificationInterests(): Array<any> {
			return [
				AppFacadeConst.BET_REPLY,
				AppFacadeConst.LOTTERY_RESULT,
				AppFacadeConst.ROOM_INIT
			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case AppFacadeConst.BET_REPLY:
					if (this._view) {
						this._view.setBet(false);
					}
					break;
				case AppFacadeConst.LOTTERY_RESULT:
					if (this._view) {
						this._view.setBet(true);
					}
					break;
				case AppFacadeConst.ROOM_INIT:
					if(this._view){
						this._view.initChip(notification.getBody());
					}
					break;
				default:
					break;
			}
		}
		//打开帮助页面
		private showHelp(evt: egret.Event): void {
			evt.stopPropagation();
			if (this._helpPanel) {
				this._helpPanel.destory();
				this._helpPanel = null;
			}
			if (!this._helpPanel) {
				this._helpPanel = new HelpPanel;
				this._helpPanel.addEventListener(UIEventConsts.CLOSE, this.removeHelp, this);
				PopupManager.addPopUp(this._helpPanel, true, true, true);
			}
		}
		//关闭帮助页面
		private removeHelp(evt: egret.Event): void {
			if (this._helpPanel) {
				this._helpPanel.removeEventListener(UIEventConsts.CLOSE, this.removeHelp, this);
				PopupManager.removePopUp(this._helpPanel);
			}
		}
		//打开设置页面
		private showSetting(evt: egret.Event): void {
			evt.stopPropagation();
			if (this._settingPanel) {
				this._settingPanel.destory();
				this._settingPanel = null;
			}
			if (!this._settingPanel) {
				this._settingPanel = new SettingPanel;
				this._settingPanel.addEventListener(UIEventConsts.CLOSE, this.removeSetting, this);
				PopupManager.addPopUp(this._settingPanel, true, true, true);
			}
		}
		//关闭设置页面
		private removeSetting(evt: egret.Event): void {
			if (this._settingPanel) {
				this._settingPanel.removeEventListener(UIEventConsts.CLOSE, this.removeSetting, this);
				PopupManager.removePopUp(this._settingPanel);
			}
		}
		//打开退出房间页面
		private showExitGame(evt: egret.Event): void {
			evt.stopPropagation();
			PublicManage.getInstance().showConfirmPanel("确定要退出房间", ["确定", "取消"], [this.onLeaveRoom], null, this);
		}
		private onLeaveRoom(evt: egret.Event): void {
			var req: Cmd.ExitGameCmd_C = new Cmd.ExitGameCmd_C;
			this.sendNotification(AppFacadeConst.SEND_DATA, req, DataRequestCommand.GAME_DATA);
		}

		private exitGame(): void {
			AppFacade.getInstance().sendNotification(AppFacadeConst.DESTORY);
			uniLib.Global.dispatchEvent(uniLib.ZqEvent.EVENT_G2L, { gameId: 4222 });
			//资源的移除让大厅来做
			uniLib.GameModuleUtils.ExitGame();
		}
	}
}