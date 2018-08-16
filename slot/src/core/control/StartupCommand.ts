module lhj {
    export class StartupCommand extends puremvc.MacroCommand {
        public constructor() {
            super();
        }
        public execute(notification: puremvc.INotification): void {
            this.initController();
            this.initProxy();
            this.initMediator();
        }
        private initController(): void {
            this.facade.registerCommand(AppFacadeConst.SEND_DATA, DataRequestCommand);
            this.facade.registerCommand(AppFacadeConst.DESTORY, RemoveCommand);
        }
        private initMediator(): void {
            this.facade.registerMediator(new GameMediator());
            this.facade.registerMediator(new ButtonMediator());
            this.facade.registerMediator(new InfoMediator());
            this.facade.registerMediator(new EffectMediator());
        }
        private initProxy(): void {
            this.facade.registerProxy(new ServerProxy())
        }
    }
}