module superslot {
	export class BuyPanel extends BaseSlwhEuiPanel {
		private _quickBtn: eui.Button;
		private _buyGameButton: eui.Button;
		private _messageTxt: eui.Label;
		private index: number = 0;
		public constructor() {
			super();
			this.skinName = "slwh_BuyPanelSkin";
		}
		protected addEvent(): void{
			superslotBC.addEvent(this,this._quickBtn,egret.TouchEvent.TOUCH_TAP, this.onQuit);
			superslotBC.addEvent(this,this._buyGameButton,egret.TouchEvent.TOUCH_TAP, this.onBuy);
		}
		protected childrenCreated() {
			super.childrenCreated();
			
		}
		/**1 入座 2 上庄 3 下注  */
		public setType(type: number, coinsNum?: number): void {
			var message = "";
			switch (type) {
				case 1:
					message = "  至少携带10万金币才能入座哦，您当前金币不足，还需要" + ResUtil.numberFormat(100000 - uniLib.UserInfo.goldChips) + "金币才能入座哦！"
					break;
				case 2:
					message = "  至少携带3000万金币才能上庄哦，您当前金币不足，还需要" + ResUtil.numberFormat(30000000 - uniLib.UserInfo.goldChips) + "金币才能上庄哦！"
					break;
				case 3:
					message = "  至少携带2万金币才能下注哦，您当前金币不足，还需要" + ResUtil.numberFormat(20000 - uniLib.UserInfo.goldChips) + "金币才能下注哦！"
					break;
				case 4:
					message = "  您当前金币不足，还需要"+ResUtil.numberFormat(coinsNum - uniLib.UserInfo.goldChips)+"金币才能申请"+coinsNum+"金币额度当庄";
					break;
				case 5:
					message = "  由于您上一局输掉了游戏，上庄金币不足，现已把您踢出上庄列表！"
					break;
				case 6:
					this.index = 1;
					message = "确定要取消排队吗？"
					break;
				case 7:
					this.index = 2;
					message = "确定减币到"+ ResUtil.numFormat2(coinsNum,2) +"吗？"
					break;
				case 8:
					this.index = 2;
					message = "确定加币到"+ ResUtil.numFormat2(coinsNum,2) +"吗？(如果身上金币不够，则加入身上所有金币)"
					break;
				case 9:
					this.index = 3;
					message = "确定要申请下庄吗？"
					break;
				case 10:
					this.index = 4;
					message = "确定要取消排队吗？"
					break;
			}
			this._messageTxt.text = message;
		}
		private onBuy(): void {
			if(this.index == 1){
				egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.CANCEL_APPLY_BANKER, true);
				superslot.PublicManage.getInstance().showMildWarnShow("取消排队成功");
			}
			if(this.index == 2){
				egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.UPDATA_CHIPS_APPLY, true);
			}
			if(this.index == 3){
				egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.APPLY_DOWN_BANKER, true);
				superslot.PublicManage.getInstance().showMildWarnShow("申请下庄成功");
			}
			if(this.index == 4){
				superslot.PublicManage.getInstance().showMildWarnShow("你已坐庄,无法取消排队");
			}
			this.dispatchEventWith(UIEventConsts.CLOSE, false);
		}
		private onQuit(): void {
			this.dispatchEventWith(UIEventConsts.CLOSE, false);
		}
		public destory(): void {
			super.destory();
			superslotBC.removeEvent(this);
			if (this._quickBtn) {
				this._quickBtn = null;
			}
			if (this._buyGameButton) {
				this._buyGameButton = null;
			}
		}
	}
}