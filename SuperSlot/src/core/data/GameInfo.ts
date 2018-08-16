module superslot {
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
			GameInfo.scaleY=null;
		}
	}
}
