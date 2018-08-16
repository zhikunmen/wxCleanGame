module superslot {
    export class RemoveCommand extends puremvc.MacroCommand {
        public constructor() {
            super();
        }
        public execute(notification: puremvc.INotification): void {
            var rootView: egret.DisplayObjectContainer = notification.getBody();
            this.removeMediator();
            this.removeController();
            this.removeProxy();
            console.log("REMOVEREMOVEREMOVE")
        }
        private removeController(): void {
            this.facade.removeCommand(AppFacadeConst.SEND_DATA);
            this.facade.removeCommand(AppFacadeConst.DESTORY);
        }
        private removeMediator(): void {//移除中介者
            // this.facade.removeMediator(GameMediator.NAME);
            this.facade.removeMediator(MainMediator.NAME);
        }
        private removeProxy(): void {
            this.facade.removeProxy(ServerProxy.NAME);
            this.facade = null;
            puremvc.Facade.instance = null;
            superslot.AppFacade.instance = null;
        }
    }
}