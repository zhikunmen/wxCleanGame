

module lhj {
	/**
	 *
	 * @author 
	 *
	 */
	export class ServerProxy extends puremvc.Proxy {
		public static NAME: string = "ServerProxy";;
		private _location: uniLib.Location;
		private loopback: any;
		public constructor() {
			super(ServerProxy.NAME);
		}
		public onRegister(): void {
		}
		private _config: any;
		public initServer(): void {
			//uniLib.UIMgr.instance.showProcessBar(null, 99, 100, "正在连接游戏服务器...", "", true);
			// chessCommonLib.ConfigMgr.getInstance().initTables();
			let gameId: number = Number(uniLib.BrowersUtils.GetRequest("gameId"));
			let zoneId: number = Number(uniLib.BrowersUtils.GetRequest("zoneId"));
			if (lhj.StaticMgr.getInstance().gameInfo == null || lhj.StaticMgr.getInstance().gameInfo.zoneInfo == null) {
				this._config = RES.getRes("lhj_config_json");
				console.log(this._config);
				uniLib.NetMgr.init(this._config.LoginUrl, gameId ? gameId : this._config.GameID, zoneId ? zoneId : this._config.ZoneID, this.onHttpInitSucc, this.onHttpInitFail, this);
			} else {
				// uniLib.NetMgr.init(chessCommonLib.ConfigMgr.getInstance().getLoginCfg().login_url, lhj.StaticMgr.getInstance().gameInfo.zoneInfo.gameid, lhj.StaticMgr.getInstance().gameInfo.zoneInfo.zoneid, this.onHttpInitSucc, this.onHttpInitFail, this);
			}
		}
        /**
         * http平台登录完成
         */
		private onHttpInitSucc(obj: any): void {
			uniLib.NetMgr.initSocket(this.onSockInitSucc, this.onSockInitFail, this, "", "", "", false, true);//初始化平台socket
		}

		private onHttpInitFail(back?: any): boolean {
			if (back) {
				PublicManage.getInstance().showMildWarnShow("游戏登录失败:" + JSON.stringify(back));
			} else {
				PublicManage.getInstance().showMildWarnShow("游戏登录失败");
			}
			this.facade.sendNotification(AppFacadeConst.EXIT_GAME);
			return true;
		}

        /**
         * socket连接完成
         */
		private onSockInitSucc(): void {
			var roomEnter: Cmd.EnterGameCmd_C = new Cmd.EnterGameCmd_C();
			this.sendNotification(AppFacadeConst.SEND_DATA, roomEnter, DataRequestCommand.GAME_DATA);
		}
		public reLogin(): void {
			this.onSockInitSucc();
		}
		private onSockInitFail(back?: any): boolean {
			if (back) {
				PublicManage.getInstance().showMildWarnShow("游戏服务器连接失败:" + JSON.stringify(back));
			} else {
				PublicManage.getInstance().showMildWarnShow("游戏服务器连接失败");
			}
			this.facade.sendNotification(AppFacadeConst.EXIT_GAME);
			return true;
		}
		public sendData(obj: any): void {
			ResUtil.trace("sendData:" + JSON.stringify(obj));
			uniLib.NetMgr.tcpSend(obj);
			uniLib.NetMgr.setMsgTimeout(8, "ServerMJProxy.sendData");
		}
		public onRemove(): void {
			super.onRemove();
			uniLib.NetMgr.closeSocket();
			uniLib.Global.removeEventListener(uniLib.ZqEvent.ON_RECONNEC, this.onSockInitSucc, this);
		}
		public closeSocket(): void {
			ResUtil.trace("closeSocket");
			uniLib.NetMgr.closeSocket();
		}
	}
}
