
module superslot {
	export class superslotGameSceneMediator extends puremvc.Mediator {
		public static NAME: string = "PokerMainMediator";
		public _mainScene: superslotGameScene;
		public constructor(viewComponent: any) {
			super(superslotGameSceneMediator.NAME, viewComponent);
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