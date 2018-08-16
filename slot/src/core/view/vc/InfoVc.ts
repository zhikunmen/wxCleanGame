module lhj {
	export class InfoVc extends eui.Component {
		public static NAME: string = "InfoVc";
		private nickTxt: eui.Label;
		private idTxt: eui.Label;
		private recordTxt: eui.Label;
		private chipsTxt: eui.Label;
		private incomeTxt: eui.Label;
		// private head: chessCommonLib.Head;
		public constructor() {
			super();
			this.skinName = "InfoVcSkin";
			this.init();
		}
		private init(): void{
			// this.head = new chessCommonLib.Head();
			// this.head.width = 81;
			// this.head.height = 81;
			// this.addChild(this.head);
			// this.head.x = 126;			
			// this.head.y = 633.5;
		}
		//进房的时候初始化玩家数据
		public initInfo(rev: Cmd.EnterGameCmd_S):void{
			this.nickTxt.text = rev.myinfo.nickname;
			this.idTxt.text = "ID:"+rev.myinfo.uid;
			this.recordTxt.text = "战绩:"+ResUtil.simplifyNum(rev.myinfo.profit);
			this.chipsTxt.text = "金币:"+ResUtil.simplifyNum(rev.myinfo.chips);
			// this.head.headUrl = rev.myinfo.headurl;
			RoomInfo.getInstance().chips = rev.myinfo.chips;
		}
		//金币变化
		public setChips(chips: number): void{
			this.chipsTxt.text = "金币:"+ResUtil.simplifyNum(chips);
			RoomInfo.getInstance().chips = chips;
		}
		//成绩变化
		public setRecord(chips: number):void{
			this.recordTxt.text = "战绩:"+ResUtil.simplifyNum(chips);
		}
		//上一局游戏获胜金币
		public setIncome(chips: number): void{
			this.incomeTxt.text = ResUtil.simplifyNum(chips);
		}
		public destory(): void {
			uniLib.DisplayUtils.removeFromParent(this);
			uniLib.DisplayUtils.removeAllChildren(this);
		}
	}
}