module superslot {
	export class superslotGameScene extends uniLib.GameScene {
		private background: egret.Bitmap;
		public constructor() {
			super();
		}
		public start(): void {
			super.start();
			//初始化数据表格
			// DataVoMap.getInstance().initTable();
			GameInfo.uiLayer = this.uiLayer;
			GameInfo.mainUILayer = this.mainUILayer;
			GameInfo.topLayer = this.topLayer;
			GameInfo.main = this.tipsLayer;
			GameInfo.scaleY = uniLib.Global.screenHeight/720;
			this.background = new egret.Bitmap(RES.getRes("ss_main_bg_jpg"));
			this.addChildAt(this.background, 0);
			this.background.anchorOffsetX = this.background.width/2;
			this.background.x = uniLib.Global.screenWidth/2;

			superslot.RoomInfo.getInstance().soundType = "mp3";

			this.initPositionData();
			superslot.AppFacade.getInstance().startUp(this);
			superslot.AppFacade.getInstance().sendNotification(superslot.AppFacadeConst.SEND_DATA, null, superslot.DataRequestCommand.CONNECT_GAME_SERVER);
			uniLib.SoundMgr.instance.playBgMusic([SoundConsts.BACKGROUND_MUSIC + superslot.RoomInfo.getInstance().soundType]);
			

			if (superslot.StaticMgr.getInstance().gameInfo) {
				this.dispatchEventWith("haocai_Casino_enterGame", true, superslot.StaticMgr.getInstance().gameInfo.gameId);
			}
			// console.error("this.addEventListener(egret.Event.ACTIVATE");
			superslotBC.addEvent(this,this,egret.Event.ACTIVATE, this.againEnter);
		}
		private againEnter(evt: egret.Event): void {
			// console.error("againEnteragainEnter",evt.type);
			
			if (evt.type == egret.Event.ACTIVATE) {
				egret.MainContext.instance.stage.dispatchEventWith(AppFacadeConst.USER_ENTER_ROOM);
			}
		}
		public destroy(): void {
			super.destroy();
			this.removeEventListener(egret.Event.ACTIVATE, this.againEnter, this);
		}
		/**
		 * 初始化位置属性,以做到右对齐
		 */
		private initPositionData(): void {
			if (DataCache.defaultWidth != uniLib.Global.screenWidth) {
				DataCache.defaultWidth = uniLib.Global.screenWidth;
				DataCache.defaultHeight = uniLib.Global.screenHeight;
			}
		}
	}
}