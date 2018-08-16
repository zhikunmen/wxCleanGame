module superslot {
	export class RoomInfo {
		private static instance: RoomInfo;
		//房间信息
		// public roomInfo: Cmd.PokerRoomInfo[];
		//庄家信息
		public bankerId: number;
		//玩家信息
		// public myUserInfo: UserVo;
		//调试等级
		public debugLevel: number;
		//房间ID
		public roomId: number;
		//房间状态信息
		// public roomStatusInfo: Cmd.GameStatusInfo;
		//玩家当前选择的筹码档
		public selectChipsValue: number = 0;
		public lastBetItems: Cmd.BetItem[];
		public currentBetItems: Cmd.BetItem[];
		public waitNext: boolean = true;
		public soundType: string = "mp3";
		//最低上庄金币
		public minBanker: number;
		//最高上庄金币
		public maxBanker: number;
		//自动下庄金币
		public cancelBanker: number;
		//自动跟住次数
		public autoFollowRemainder: number = 0;
		//下注门槛
		public minBetChips: number = 1000;
		//是否超上限
		public isExceed : boolean = false;
			//聊天气泡容器  用来控制层级
		public chatSprite:  egret.DisplayObjectContainer ;
		private constructor() {

		}
		public static getInstance(): RoomInfo {
			if (!this.instance) {
				this.instance = new RoomInfo();
			}
			return this.instance;
		}
		public initRoom(rev: Cmd.UserInfoSynRequestLobbyCmd_S): void {
			// this.roomInfo = [];
			this.lastBetItems = [];
			this.currentBetItems = [];

			// this.myUserInfo = new UserVo();
			// this.myUserInfo.initWithBaseInfo(rev.userInfo);
			// this.roomInfo = rev.roomInfo;
			this.debugLevel = rev.gmLevel;
		}
		// public initRoomState(rev: Cmd.PokerEnterRoomCmd_S): void {
		// 	this.bankerId = rev.roundInfo.bankerInfo.uid;
		// 	this.minBanker = rev.roomInfo.minBanker;
		// 	this.maxBanker = rev.roomInfo.maxBanker;
		// 	this.cancelBanker = rev.roomInfo.cancelBanker;
		// }
		// public getRoomInfo(roomId: number): Cmd.PokerRoomInfo {
		// 	var room: Cmd.PokerRoomInfo;
		// 	for (var i = 0; i < this.roomInfo.length; i++) {
		// 		if (this.roomInfo[i].roomId == roomId) {
		// 			room = this.roomInfo[i];
		// 			break;
		// 		}
		// 	}
		// 	return room;
		// }

		public playhbButtonSound() {
			if (RES.hasRes("slwh_buttonClick_mp3")) {
				uniLib.SoundMgr.instance.playSound("slwh_buttonClick_mp3");
			}
		}

		public playhbSwitchSound() {
			if (RES.hasRes("slwh_buttonSwitch_mp3")) {
				uniLib.SoundMgr.instance.playSound("slwh_buttonSwitch_mp3");
			}
		}
	}
}