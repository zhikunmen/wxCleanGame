module lhj {
	export class BuyPanel extends BasePanel {
		private _quickBtn: GameButton;
		private _buyGameButton: GameButton;
		private _messageTxt: egret.TextField;
		public constructor() {
			super();
		}
		public initPanel(): void {
			this.setSize(723, 488);
			var title = ResUtil.createBitmapByName("hlhyg_warn_title", 170, 20);
			this.addChild(title);
			this._messageTxt = ResUtil.createTextFeild(0xffffff, egret.HorizontalAlign.LEFT, "", 34, 50, 90, 640);
			this._messageTxt.height = 300;
			this._messageTxt.lineSpacing = 17;
			this._messageTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
			this._messageTxt.text = ""
			this.addChild(this._messageTxt);

			this._quickBtn = new GameButton(["hlhyg_consider_1", "hlhyg_consider_2"]);
			this._quickBtn.x = 70;
			this._quickBtn.y = 400;
			this._quickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuit, this);
			this.addChild(this._quickBtn);

			this._buyGameButton = new GameButton(["hlhyg_buy_1", "hlhyg_buy_2"]);
			this._buyGameButton.x = 410;
			this._buyGameButton.y = 400;
			this._buyGameButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
			this.addChild(this._buyGameButton);
			if (uniLib.Global.lobbyMode && uniLib.Global.gameConfig.lobbyId == 46) {
				this._buyGameButton.visible = false;
				this._quickBtn.visible = false;
			}
			uniLib.SoundMgr.instance.playSound("dt_sound_tips_mp3");
		}
		/**1 入座 2 上庄 3 下注  */
		public setType(type: number, coinsNum?: number): void {
			var message = "";
			switch (type) {
				case 1:
					message = "  至少携带100万金币才能入座哦，您当前金币不足，还需要" + ResUtil.numberFormat(1000000 - RoomInfo.getInstance().chips) + "金币才能入座哦！"
					if (uniLib.Global.lobbyMode && uniLib.Global.gameConfig.lobbyId == 48) {
						message = "  至少携带1000万金币才能入座哦，您当前金币不足，还需要" + ResUtil.numberFormat(10000000 - RoomInfo.getInstance().chips) + "金币才能入座哦！"
					}
					break;
				case 2:
					message = "  至少携带300万金币才能上庄哦，您当前金币不足，还需要" + ResUtil.numberFormat(3000000 - RoomInfo.getInstance().chips) + "金币才能上庄哦！"
					if (uniLib.Global.lobbyMode && uniLib.Global.gameConfig.lobbyId == 48) {
						message = "  至少携带300万金币才能上庄哦，您当前金币不足，还需要" + ResUtil.numberFormat(30000000 - RoomInfo.getInstance().chips) + "金币才能上庄哦！"
					}
					break;
				case 3:
					message = "      您还差" + ResUtil.numberFormat(coinsNum - RoomInfo.getInstance().chips) + "金币，请前往充值！"
					break;
				case 4:
					message = "  您当前金币不足，还需要" + ResUtil.numberFormat(coinsNum - RoomInfo.getInstance().chips) + "金币才能申请" + coinsNum + "金币额度当庄";
					break;
				case 5:
					message = "  由于您上一局输掉了游戏，上庄金币不足，现已把您踢出上庄列表！"
					break;
			}
			this._messageTxt.text = message;
		}
		private onBuy(): void {
			// uniLib.Global.dispatchEvent(chessCommonLib.CommonModelEvent.SHOP);
			this.dispatchEventWith(UIEventConsts.CLOSE, false);
		}
		private onQuit(): void {
			this.dispatchEventWith(UIEventConsts.CLOSE, false);
		}
		public destory(): void {
			super.destory();
			if (this._quickBtn) {
				this._quickBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuit, this);
				this._quickBtn = null;
			}
			if (this._buyGameButton) {
				this._buyGameButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
				this._buyGameButton = null;
			}
		}
	}
}