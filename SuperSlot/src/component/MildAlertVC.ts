module superslot {
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
            this._bg = this.createBitmapByName("sz_Toast_png");
            this._bg.width = this._bg.width * 1.2;
            this._bg.height = this._bg.height * 1.2;
            this.addChild(this._bg);
            this._text = this.createTextFeild(0xFFFFFF,egret.HorizontalAlign.CENTER,"",30,88,10,786);
            this._text.multiline = true;
            this.addChild(this._text);
		}0


        private  createTextFeild(color: number, align: string, text: string, size: number, x: number = 0, y: number = 0, width: number = -1, isBold: boolean = false, space: number = 0): egret.TextField {
            var tf: egret.TextField = new egret.TextField();
            if (width != -1) {
                tf.width = width;
            }
            tf.fontFamily = "微软雅黑";
            tf.bold = isBold;
            tf.textColor = color;
            tf.textAlign = align;
            tf.text = text;
            tf.size = size;
            tf.lineSpacing = space;
            tf.x = x;
            tf.y = y;
            tf.multiline = false;
            return tf;
        }

              private createBitmapByName(name: string, x: number = 0, y: number = 0): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            result.smoothing = true;
            result.x = x;
            result.y = y;
            return result;
        }
		/**
		 * 
		 * @param message
		 * 
		 */
        public  setText(message:string):void
		{
            if (!message) {
                return;
            }
            this._text.text = message;
            let strUIR = message;
            
            this._text.textFlow = (new egret.HtmlTextParser).parser(decodeURIComponent(strUIR));
            if(this._text.textWidth+22>=this._text.width){//我也不知道为什么是22, 这里是让第二行靠左吧？
                this._text.textAlign = egret.HorizontalAlign.LEFT
            }
            this._bg.height = this._text.textHeight * 4;
            this._text.y = Math.floor(this._bg.height/2)  -(this._bg.height*0.26); 
            // this._text.y =  (this._text.textHeight/1)-5; 
            
            this.x = Math.round((uniLib.Global.screenWidth - this.width) / 2);
            this.y = Math.round((uniLib.Global.screenHeight - this.height) / 2) ;
            this.showDelay();
        }
        private showDelay():void{
             egret.Tween.get(this).wait(2000).to({ alpha: 0 }, 2000, egret.Ease.circOut).call(this.destory, this);
        }
        public  destory(): void {
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
            this._bg = null;
            this._text = null;
        }
	}
}
