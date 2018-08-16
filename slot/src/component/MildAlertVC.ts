module lhj {
	/**
	 *
	 * @author 
	 *
	 */
	export class MildAlertVC extends egret.Sprite{
        private _bg: egret.Bitmap;
        private _text: egret.TextField;
        private _timer: egret.Timer ;
		public constructor() {
            super();
            this.initUI();
		}
		private initUI():void{
            this._bg = ResUtil.createBitmapByName("tipsBg");
            this._bg.width = this._bg.width * 1.2;
            this._bg.height = this._bg.height * 1.2;
            this.addChild(this._bg);
            
            this._text = ResUtil.createTextFeild(0xFFFFFF,egret.HorizontalAlign.CENTER,"",30,88,10,786);
            this._text.multiline = true;
            this.addChild(this._text);
		}
		/**
		 * 
		 * @param message
		 * 
		 */
        public  setText(message:string):void
		{
            if(!message) {
                return;
            }
            this._text.text = message;
            this._bg.height = this._text.textHeight * 2;
            this.y = DataCache.defaultHeight;
            egret.Tween.get(this).to({ y: Math.round((DataCache.defaultHeight - this.height) / 2)-60 },500,egret.Ease.circOut).call(this.showDelay,this);
        }
        private showDelay():void{
            egret.Tween.get(this).wait(2000).to({ y: -this.height },500,egret.Ease.circOut).call(this.destory,this);
        }
        public  destory(): void {
            egret.Tween.removeTweens(this);
            ResUtil.removeAllChildren(this);
            ResUtil.removeFromParent(this);
            this._bg = null;
            this._text = null;
        }
	}
}
