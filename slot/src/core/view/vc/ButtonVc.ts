module lhj {
	export class ButtonVc extends eui.Component {
		public static NAME: string = "BUTTONVC";
		private moreBtn: eui.Button;
		private morePanel: MoreMenuPanel;
		private static _self: ButtonVc = null;
		private index: number = 0;
		private chipsArr: Array<number> = [];
		private selectBet: number = 1000;
		private chipsTxt: eui.Label;
		private upBtn: eui.Button;
		private downBtn: eui.Button;
		private maxBtn: eui.Button;
		private startBtn: eui.Button;
		private downTime: egret.Timer;
		private time: number = 0;
		private isBet: boolean = true; //本局是否能下注
		private addBtn: eui.Button;		//加速按钮
		private reduceBtn: eui.Button;	//减速按钮
		private stopBtn: eui.Button;	//停止按钮
		private AutoBtn: eui.Button;	//停止自动按钮
		private speed_bg: eui.Image;
		public constructor() {
			super();
			this.skinName = "ButtonVcSkin";
			this.init();
		}
		public static get instance(): ButtonVc {
			if (this._self == null) {
				this._self = new ButtonVc();
			}
			return this._self;
		}
		private init(): void {
			this.downTime = new egret.Timer(1000);
			this.downTime.addEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
			this.downTime.stop();
			this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoreMenu, this);
			this.upBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upBet, this);
			this.downBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.downBet, this);
			this.maxBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setMax, this);
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBet, this);
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startTime, this);
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTime, this);
			this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			this.speed_bg.touchEnabled = true;
			this.speed_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			this.AutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAuto, this);
		}
		//开启计时器
		private startTime(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			if (this.downTime) {
				this.time = 0;
				this.downTime.start();
			}
		}
		//关闭计时器
		private stopTime(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			if (this.downTime) {
				this.downTime.stop();
			}
			if (this.time < 3) {
				this.startGame(false);
			}
			this.time = 0;
		}
		//点击开始
		private onBet(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.startGame(false);
		}
		//检测开始按钮按住几秒,超过3秒启动自动开始游戏模式
		private countSecond(): void {
			this.time++;
			if (this.time == 3) {
				this.startGame(true);
				this.AutoBtn.visible = true;
				this.startBtn.visible = false;
			}
		}
		//启动游戏
		private startGame(isAuto: boolean): void {
			if (this.downTime) {
				this.downTime.stop();
				this.time = 0;
			}
			if (!this.isBet) {
				return;
			}
			//玩家身上金币大于选择筹码则发送下注请求，如果不足则弹出充值页面
			if (RoomInfo.getInstance().chips >= this.selectBet) {
				let req = new Cmd.BetRequestCmd_C();
				req.autobet = isAuto;
				req.betchips = this.selectBet;
				uniLib.NetMgr.tcpSend(req);
			} else {
				PublicManage.getInstance().showCommonBuy(1);
			}
		}
		//设置房间筹码大小
		public initChip(rev: Cmd.EnterGameCmd_S): void {
			this.chipsArr = rev.betchips;
			this.selectBet = this.chipsArr[0];
			this.chipsTxt.text = ResUtil.simplifyNum(this.selectBet);
		}
		//向上更换筹码
		private upBet(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.index++;
			this.setChip();
		}
		//向下更换筹码
		private downBet(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.index--;
			this.setChip();
		}
		//更换下注筹码
		private setChip(): void {
			if (this.index > 6) {
				this.index = 6;
			}
			if (this.index < 0) {
				this.index = 0;
			}
			this.selectBet = this.chipsArr[this.index];
			this.chipsTxt.text = ResUtil.simplifyNum(this.selectBet);
		}
		//选择最大下注筹码值
		private setMax(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.selectBet = this.chipsArr[0];
			for (var i = 0; i < this.chipsArr.length; i++) {
				if (RoomInfo.getInstance().chips >= this.chipsArr[i]) {
					this.selectBet = this.chipsArr[i];
					this.chipsTxt.text = ResUtil.simplifyNum(this.selectBet);
				}
			}
		}
		//打开左下角按钮
		private onMoreMenu(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			if (!this.morePanel) {
				this.morePanel = new MoreMenuPanel();
				this.morePanel.scaleX = 0;
				egret.Tween.get(this.morePanel).to({ scaleX: 1 }, 100).call(() => {
					egret.Tween.removeTweens(this.morePanel);
				})
				GameInfo.uiLayer.addChild(this.morePanel);
				this.morePanel.addEventListener(UIEventConsts.SHOW_HELP_PANEL, this.moreHandler, this);
				this.morePanel.addEventListener(UIEventConsts.SHOW_SETTING_PANEL, this.moreHandler, this);
				this.morePanel.addEventListener(UIEventConsts.EXIT_GAME, this.moreHandler, this);
				this.morePanel.addEventListener(UIEventConsts.CLOSE, this.removeMorePanel, this);
			} else {
				this.removeMorePanel(null);
			}
		}
		//启动加速模式
		private openAdd(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			RoomInfo.getInstance().isAdd = true;
			this.addBtn.visible = false;
			this.reduceBtn.visible = true;
			this.speed_bg.source = "lhj_open_bg";
		}
		//关闭加速模式
		private closeAdd(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			RoomInfo.getInstance().isAdd = false;
			this.addBtn.visible = true;
			this.reduceBtn.visible = false;
			this.speed_bg.source = "lhj_close_bg";
		}
		private stopAuto(evt: egret.TouchEvent): void {
			let req = new Cmd.CancelAutoBetCmd_C();
			uniLib.NetMgr.tcpSend(req);
			this.AutoBtn.visible = false;
			this.startBtn.visible = true;
		}
		//改变速度模式
		private changeSpeed(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			if (RoomInfo.getInstance().isAdd) {
				RoomInfo.getInstance().isAdd = false;
				this.addBtn.visible = true;
				this.reduceBtn.visible = false;
				this.speed_bg.source = "lhj_close_bg";
			} else {
				RoomInfo.getInstance().isAdd = true;
				this.addBtn.visible = false;
				this.reduceBtn.visible = true;
				this.speed_bg.source = "lhj_open_bg";
			}
		}
		private removeMorePanel(evt: egret.Event): void {
			if (this.morePanel) {
				this.morePanel.removeEventListener(UIEventConsts.SHOW_HELP_PANEL, this.moreHandler, this);
				this.morePanel.removeEventListener(UIEventConsts.SHOW_SETTING_PANEL, this.moreHandler, this);
				this.morePanel.removeEventListener(UIEventConsts.EXIT_GAME, this.moreHandler, this);
				this.morePanel.removeEventListener(UIEventConsts.CLOSE, this.removeMorePanel, this);
				this.morePanel.destory();
				this.morePanel = null;
			}
		}
		private moreHandler(evt: egret.Event): void {
			this.dispatchEvent(evt);
		}
		//设置下注状态
		public setBet(bool: boolean): void {
			this.isBet = bool;
			this.startBtn.enabled = bool;
		}
		public destory(): void {
			this.removeMorePanel(null);
			if (this.moreBtn) {
				this.moreBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoreMenu, this);
			}
			if (this.upBtn) {
				this.upBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.upBet, this);
			}
			if (this.downBtn) {
				this.downBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.downBet, this);
			}
			if (this.maxBtn) {
				this.maxBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.setMax, this);
			}
			if (this.downTime) {
				this.downTime.removeEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
				this.downTime.stop();
				this.downTime = null;
			}
			if (this.startBtn) {
				this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBet, this);
				this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startTime, this);
				this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTime, this);
			}
			if (this.addBtn) {
				this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			}
			if (this.reduceBtn) {
				this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			}
			if (this.speed_bg) {
				this.speed_bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
			}
			if (this.AutoBtn) {
				this.AutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAuto, this);
			}
			uniLib.DisplayUtils.removeAllChildren(this);
			uniLib.DisplayUtils.removeFromParent(this);
		}
	}
}