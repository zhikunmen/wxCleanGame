module superslot {
	export class PopupManager {
		private static  _popUpMask:egret.Sprite;
		public constructor() {
		}
		/**
		 * 显示弹出框
		 * @param	target:显示对象
		 * @param	modal:是否添加遮罩
		 * @param	center:是否居中显示
		 * @param	useEffect:是否缓动
		 * @param	isTop:是否在最上层
		 */
		public static  addPopUp(target:egret.DisplayObjectContainer, modal:Boolean = false, center:Boolean = false, useEffect:Boolean = true,w:number=0,h:number=0,isTop:Boolean = false,isClose:Boolean = false):void
		{
			if (this._popUpMask == null)
			{
				this._popUpMask = new egret.Sprite();
				this._popUpMask.graphics.beginFill(0, 0.6);
				this._popUpMask.graphics.drawRect(0, 0, DataCache.defaultWidth,DataCache.defaultHeight);//* uniLib.ScreenUtils.scaleFactor);
				this._popUpMask.graphics.endFill();
				this._popUpMask.touchEnabled=true;
			}
			if (modal){
				this._popUpMask.visible = true;
			}else{
				this._popUpMask.visible = false;
			}
			if(!isTop){
				GameInfo.topLayer.addChild(this._popUpMask);
				GameInfo.topLayer.addChild(target);
				// console.error("ddisTopisTop");
				
			}else{
				GameInfo.main.addChild(this._popUpMask);
				GameInfo.main.addChild(target);
			}

			  var scaleY = uniLib.Global.screenHeight /720;

			var targetX:number;
			var targetY:number;
			if (center)
			{
				if(w){
					targetX =DataCache.defaultWidth - w >> 1;
				}else{
					targetX = DataCache.defaultWidth - target.width >> 1;
				}
				
				if(h){
					targetY = DataCache.defaultHeight* uniLib.ScreenUtils.scaleFactor - h >> 1;
				}else{
					targetY = DataCache.defaultHeight* uniLib.ScreenUtils.scaleFactor - target.height >> 1;
				}
			}
			else
			{
				targetX=target.x;
				targetY=target.y
			}
			if (useEffect) {
				target.alpha = 0;
				target.anchorOffsetX = target.width / 2;
				target.anchorOffsetY = target.height / 2;
				target.scaleX = 0.6;
				target.scaleY = 0.6*scaleY;
				// target.x += target.width / 2;
            	target.x = uniLib.Global.screenWidth / 2;
				target.y += (target.height / 2)*scaleY;
				egret.Tween.removeTweens(target);
				egret.Tween.get(target).to({ alpha: 1, scaleX: 1.1, scaleY: 1.1 *scaleY}, 200, egret.Ease.backOut).
					to({ scaleX: 1, scaleY: 1*scaleY }, 100)
			}
			else{
				target.scaleY = scaleY;
			}
			if(isClose){
				this._popUpMask.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeHandle, this);
			}else{
				this._popUpMask.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.closeHandle, this);
			}
		}
		private static closeHandle():void{
			egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.CLOSE);
		}
		/**
		 * 移除弹出框
		 * @param	target:显示对象
		 * @param	useEffect:是否缓动
		 */
		public static  removePopUp(target:egret.DisplayObjectContainer, useEffect:Boolean = false):void
		{
			if(this._popUpMask != null)
				this._popUpMask.visible = false;
			if (!useEffect)
			{
				if (target.parent)
					target.parent.removeChild(target);
			}
			else
			{
				egret.Tween.removeTweens(target);
				egret.Tween.get(target).to( {y: target.y - 200, alpha: 0}).call(this.removeTarget,this,[target]);
			}
		}
		private static removeTarget (target:egret.DisplayObjectContainer):void{
			target.alpha = 1.0;
			egret.Tween.removeTweens(target);
			if (target.parent){
				target.parent.removeChild(target);
			}
		}
	}
}