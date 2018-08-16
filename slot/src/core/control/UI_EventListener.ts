module lhj {
	export class UI_EventListener extends egret.EventDispatcher{
		private static _instance:UI_EventListener;
		public constructor() {
			super();
		}
		public static getInstance():UI_EventListener{
			if(!this._instance){
				this._instance=new UI_EventListener;
			}
			return this._instance;
		}
	}
}