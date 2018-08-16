module lhj {
	export class RoomInfo {
		private static instance: RoomInfo;
		//房间信息
		public roomInfo: Cmd.RoomInfo[];
		//调试等级
		public debugLevel: number;
		//房间ID
		public roomId: number;
		//玩家当前选择的筹码档
		public selectChipsValue: number = 0;
		public index: number = 0;
		//玩家个人金币
		public chips: number;
		//是否加速模式
		public isAdd: boolean = false;
		private constructor() {

		}
		public static getInstance(): RoomInfo {
			if (!this.instance) {
				this.instance = new RoomInfo();
			}
			return this.instance;
		}
	}
}