module lhj {
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
		public static  addPopUp(target:egret.DisplayObjectContainer, modal:Boolean = false, center:Boolean = false, useEffect:Boolean = true,w:number=0,h:number=0,isTop:Boolean = false):void
		{
			if (this._popUpMask == null)
			{
				this._popUpMask = new egret.Sprite();
				this._popUpMask.graphics.beginFill(0, 0.3);
				this._popUpMask.graphics.drawRect(0, 0, uniLib.Global.screenWidth,uniLib.Global.screenHeight);//* uniLib.ScreenUtils.scaleFactor);
				this._popUpMask.graphics.endFill();
				this._popUpMask.touchEnabled=true;
			}
			if (modal){
				this._popUpMask.visible = true;
			}else{
				this._popUpMask.visible = false;
			}
			if(!isTop){
				GameInfo.uiLayer.addChild(this._popUpMask);
				GameInfo.uiLayer.addChild(target);
			}else{
				GameInfo.uiLayer.addChild(this._popUpMask);
				GameInfo.uiLayer.addChild(target);
			}
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
			
			
			if (useEffect)
			{	
				target.y = targetY+target.height/2;
				target.x = targetX+target.width/2;
				target.scaleX = 0;
				target.scaleY = 0;
				egret.Tween.removeTweens(target);
				egret.Tween.get(target).to( {scaleX:1,scaleY:GameInfo.scaleY,
					x: (uniLib.Global.screenWidth-target.width)/2,y:(720-target.height)/3},150);
			}
			else
			{
				target.x=targetX;
				target.y=targetY;
			}
		}
		/**
		 * 移除弹出框
		 * @param	target:显示对象
		 * @param	useEffect:是否缓动
		 */
		public static  removePopUp(target:egret.DisplayObjectContainer, useEffect:Boolean = false):void
		{
			var targetX = DataCache.defaultWidth - target.width >> 1;
			var targetY = DataCache.defaultHeight* uniLib.ScreenUtils.scaleFactor - target.height >> 1;
			target.y = targetY+target.height/2;
			target.x = targetX+target.width/2;
			target.anchorOffsetX = target.width/2;
			target.anchorOffsetY = target.height/2;
			if(this._popUpMask != null)
				this._popUpMask.visible = false;
			if (!useEffect)
			{
				if (target.parent){
					egret.Tween.get(target).to( {scaleX:0,scaleY:0},200).call(this.removeTarget,this,[target]);
				}
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