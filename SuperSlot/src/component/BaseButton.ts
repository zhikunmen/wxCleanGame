module SZLobby {
	export class BaseButton extends eui.Button{
        public constructor() {
            super();
            this.init();
        }
        private _btnlabel:eui.Label;
        private init() {
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_END,this.onTouchEnd);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_CANCEL,this.onTouchCancel);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_MOVE,this.onTouchMove);
            superslotBC.addEvent(this,this,egret.Event.REMOVED,this.dispose);
        }
        
        protected onTouchBegin() 
        {
            this.scaleX = 1.1;
            this.scaleY = 1.1;
            superslot.RoomInfo.getInstance().playhbButtonSound();
        }
        protected onTouchEnd() {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        protected onTouchCancel() {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        protected onTouchMove() {
            this.scaleX = 1;
            this.scaleY = 1;
        }
             public set $currentState(state:string) {
             this.currentState = state;
             this.touchEnabled = false;

        }
        
        public dispose() {
            superslotBC.removeEvent(this);      
        }
    }
}