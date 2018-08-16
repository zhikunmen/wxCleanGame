module superslot {
	export class AppFacade extends puremvc.Facade {
		public static _instance: any;
		public constructor() {
			super()
		}
		public static getInstance(): AppFacade {
			if (this.instance == null) this.instance = new AppFacade();
			return <AppFacade><any>(this.instance);
		}
		public initializeController(): void {
			super.initializeController();
			this.registerCommand(AppFacadeConst.STARTUP, StartupCommand);
		}
		public startUp(rootView: egret.DisplayObjectContainer): void {
			this.sendNotification(AppFacadeConst.STARTUP, rootView);
			this.removeCommand(AppFacadeConst.STARTUP);
		}
	}
}