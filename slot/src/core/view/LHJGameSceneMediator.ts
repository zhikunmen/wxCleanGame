
module lhj {
	export class LHJGameSceneMediator extends puremvc.Mediator {
		public static NAME: string = "PokerMainMediator";
		public _mainScene: LHJGameScene;
		public constructor(viewComponent: any) {
			super(LHJGameSceneMediator.NAME, viewComponent);
		}
		public listNotificationInterests(): Array<any> {
			return [

			];
		}
		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				default:
					break;
			}
		}
		public onRemove(): void {
			super.onRemove();
		}
	}
}