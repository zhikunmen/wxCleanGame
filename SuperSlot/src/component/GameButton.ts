module superslot {
	/**
	 *
	 * @author 
	 *
	 */
    export class GameButton extends egret.Sprite {
        private lable: egret.TextField;
        private srcArr: Array<string>;
        private _icon: egret.Bitmap;
        private _labelTxt: egret.TextField;
        private _label: string;
        private _area: egret.Sprite;
        private _autoDestory: boolean;
        public name: string = "GameButton"
        public constructor(arr: Array<string>, label: string = null, autoDestory: boolean = true) {
            super();
            this.srcArr = arr;
            this._label = label;
            this._autoDestory = autoDestory;
            this.initUI();
            superslotBC.addEvent(this,this,egret.Event.REMOVED_FROM_STAGE, this.onRemove);
        }

        public iconTexture(res: string[]) {
            this.srcArr = res;
            this._icon.texture = ResUtil.createTexture(res[0]);
        }
        private onRemove(evt: egret.Event): void {
            if (this._autoDestory) {
                this.destory();
            }
        }
        private initUI(): void {
            var src: string;
            src = this.srcArr[0]
            this.touchEnabled = true;
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_END, this.onTouchEnd);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_MOVE, this.onTouchCancel);
            if (!this._icon) {
                this._icon = ResUtil.createBitmapByName(src);
                this.addChild(this._icon);
            } else {
                this._icon.texture = ResUtil.createTexture(src);
            }
            if (this._label) {
                this._labelTxt = ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, this._label, 25, 0, 8, this._icon.width);
                this.addChild(this._labelTxt);
            }
            this.anchorOffsetX = this._icon.width / 2;
            this.anchorOffsetY = this._icon.height / 2;
        }
        private onTouchBegin(evt: egret.TouchEvent): void {
            this._icon.texture = ResUtil.createTexture(this.srcArr[1]);
            this.scaleX = 1.1;
            this.scaleY = 1.1;
            superslot.RoomInfo.getInstance().playhbButtonSound();
            //uniLib.SoundMgr.instance.playSound(slwh.SoundConsts.BUTTON_CLICK);
        }
        private onTouchEnd(evt: egret.TouchEvent): void {
            this._icon.texture = ResUtil.createTexture(this.srcArr[0]);
            this.scaleX = 1;
            this.scaleY = 1;
        }
        public addClickArea(num: number): void {
            if (!this._area) {
                this._area = new egret.Sprite();
                this._area.touchEnabled = true;
                this.addChild(this._area)
            }
            this._area.graphics.clear();
            this._area.graphics.beginFill(0xff0000, 0);
            this._area.graphics.drawRect(-num, -num, this._icon.width + num * 2, this._icon.height + num * 2);
            this._area.graphics.endFill();
        }

        public set ButtonX(x: number) {
            this.x = x + this.width / 2
        }

         public get ButtonX():number {
            return this.x
        }

        public set ButtonY(y: number) {
            this.y = y + this.height / 2
        }
          public onTouchCancel() {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        public destory(): void {
            this.touchEnabled = false;
           
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this, true);
           this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
             this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener( egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
            this.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.onTouchCancel, this);
            ResUtil.removeFromParent(this);
            ResUtil.removeAllChildren(this);
            this._area = null;
            this._icon = null;
            this._label = null;
            this._labelTxt = null;

        }
    }
}
