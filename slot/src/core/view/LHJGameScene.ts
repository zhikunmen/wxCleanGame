module lhj {
	export class LHJGameScene extends uniLib.GameScene {
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
			// GameInfo.leftChat = chessCommonLib.ConfigMgr.getInstance().gameOptions.leftChat;
			// GameInfo.notice = chessCommonLib.ConfigMgr.getInstance().gameOptions.notice;
			// GameInfo.market = chessCommonLib.ConfigMgr.getInstance().gameOptions.market;
			// GameInfo.task = chessCommonLib.ConfigMgr.getInstance().gameOptions.task;
			// GameInfo.bank = chessCommonLib.ConfigMgr.getInstance().gameOptions.bank;
			// GameInfo.rank = chessCommonLib.ConfigMgr.getInstance().gameOptions.rank;
			// GameInfo.ssc = chessCommonLib.ConfigMgr.getInstance().gameOptions.ssc;
			GameInfo.scaleY = uniLib.Global.screenHeight/720;
			this.initPositionData();
			lhj.AppFacade.getInstance().startUp(this);
			lhj.AppFacade.getInstance().sendNotification(lhj.AppFacadeConst.SEND_DATA, null, lhj.DataRequestCommand.CONNECT_GAME_SERVER);
			uniLib.SoundMgr.instance.playBgMusic(["dt_sound_bg_mp3"]);
			if (lhj.StaticMgr.getInstance().gameInfo && lhj.StaticMgr.getInstance().gameInfo.defaultOrientation == egret.OrientationMode.PORTRAIT) {
				uniLib.ScreenUtils.landscape = true;
			}

			if (lhj.StaticMgr.getInstance().gameInfo && lhj.StaticMgr.getInstance().gameInfo.preloadUIAutoHide == false && lhj.StaticMgr.getInstance().gameInfo.preloadUI) {
				uniLib.UIMgr.instance.hideLoading(lhj.StaticMgr.getInstance().gameInfo.preloadUI, "", true, false);
			} else {
				uniLib.UIMgr.instance.hideLoading();
			}

			if (lhj.StaticMgr.getInstance().gameInfo)
				this.dispatchEventWith("haocai_Casino_enterGame", true, lhj.StaticMgr.getInstance().gameInfo.gameId);
		}

		public destroy(): void {
			super.destroy();
			uniLib.DisplayUtils.removeAllChildren(this);
			uniLib.DisplayUtils.removeFromParent(this);
		}

		/**
		 * 初始化位置属性,以做到右对齐
		 */
		private initPositionData(): void {
			DataCache.defaultWidth = uniLib.Global.screenWidth;
			let img = ResUtil.createBitmapByName("lhj_bg_1_jpg");
			this.addChildAt(img,0)
			img.anchorOffsetX = img.width / 2;
			img.x = uniLib.Global.screenWidth / 2;
			let movie_1 = ResUtil.createDragon("lhj_effect_flower", "newAnimation", uniLib.DragonType.ARMATURE, uniLib.Global.screenWidth / 2, 360, this, -1, 1);
			this.addChildAt(movie_1,1);
			let movie_2 = ResUtil.createDragon("lhj_effect_bg", "newAnimation", uniLib.DragonType.ARMATURE, uniLib.Global.screenWidth / 2, 360, this, -1, 1);
			this.addChildAt(movie_2,2);
			let img1 = ResUtil.createBitmapByName("lhj_bg_2");
			this.addChildAt(img1,3)
			img1.anchorOffsetX = img1.width / 2;
			img1.x = uniLib.Global.screenWidth / 2;
			img1.y = uniLib.Global.screenHeight - img1.height;
		}
	}
}