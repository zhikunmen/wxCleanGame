module lhj {
    export class RemoveCommand extends puremvc.MacroCommand {
        public constructor() {
            super();
        }
        public execute(notification: puremvc.INotification): void {
            var rootView: egret.DisplayObjectContainer = notification.getBody();
            this.removeMediator();
            this.removeController();
            this.removeProxy();
        }
        private removeController(): void {
            this.facade.removeCommand(AppFacadeConst.SEND_DATA);
            this.facade.removeCommand(AppFacadeConst.DESTORY);
        }
        private removeMediator(): void {//移除中介者
            this.facade.removeMediator(ButtonMediator.NAME);
            this.facade.removeMediator(GameMediator.NAME);
            this.facade.removeMediator(EffectMediator.NAME);
            this.facade.removeMediator(InfoMediator.NAME);
        }
        private removeProxy(): void {
            this.facade.removeProxy(ServerProxy.NAME);
            this.facade = null;
            puremvc.Facade.instance = null;
            lhj.AppFacade.instance = null;
        }
    }
}