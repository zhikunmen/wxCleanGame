module lhj {
	/**
	 *
	 * @author 
	 *
	 */
	export class GameInfo {
        public static main: egret.DisplayObjectContainer;
        public static stage:egret.Stage;
		public static mainUILayer: egret.DisplayObjectContainer;
        public static uiLayer: egret.DisplayObjectContainer;
        public static topLayer: egret.DisplayObjectContainer;
		public static manage: PublicManage;
		//是否屏蔽聊天
		public static leftChat: boolean;
		//是否屏蔽跑马灯
		public static notice: boolean;
		//是否屏蔽跑商城
		public static market: boolean;
		//是否屏蔽跑任务
		public static task: boolean;
		//是否屏蔽跑银行
		public static bank: boolean;
		//是否屏蔽跑排行榜
		public static rank: boolean;
		//是否屏蔽时时彩
		public static ssc: boolean;
		//适配
		public static scaleY: number;
		public constructor() {
		}
		public destory():void{
			GameInfo.main=null;
			GameInfo.stage=null;
			GameInfo.mainUILayer=null;
			GameInfo.uiLayer=null;
			GameInfo.topLayer=null;
			GameInfo.manage=null;
		}
	}
}
