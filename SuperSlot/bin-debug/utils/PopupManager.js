var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var PopupManager = (function () {
        function PopupManager() {
        }
        /**
         * 显示弹出框
         * @param	target:显示对象
         * @param	modal:是否添加遮罩
         * @param	center:是否居中显示
         * @param	useEffect:是否缓动
         * @param	isTop:是否在最上层
         */
        PopupManager.addPopUp = function (target, modal, center, useEffect, w, h, isTop, isClose) {
            if (modal === void 0) { modal = false; }
            if (center === void 0) { center = false; }
            if (useEffect === void 0) { useEffect = true; }
            if (w === void 0) { w = 0; }
            if (h === void 0) { h = 0; }
            if (isTop === void 0) { isTop = false; }
            if (isClose === void 0) { isClose = false; }
            if (this._popUpMask == null) {
                this._popUpMask = new egret.Sprite();
                this._popUpMask.graphics.beginFill(0, 0.6);
                this._popUpMask.graphics.drawRect(0, 0, superslot.DataCache.defaultWidth, superslot.DataCache.defaultHeight); //* uniLib.ScreenUtils.scaleFactor);
                this._popUpMask.graphics.endFill();
                this._popUpMask.touchEnabled = true;
            }
            if (modal) {
                this._popUpMask.visible = true;
            }
            else {
                this._popUpMask.visible = false;
            }
            if (!isTop) {
                superslot.GameInfo.topLayer.addChild(this._popUpMask);
                superslot.GameInfo.topLayer.addChild(target);
                // console.error("ddisTopisTop");
            }
            else {
                superslot.GameInfo.main.addChild(this._popUpMask);
                superslot.GameInfo.main.addChild(target);
            }
            var scaleY = uniLib.Global.screenHeight / 720;
            var targetX;
            var targetY;
            if (center) {
                if (w) {
                    targetX = superslot.DataCache.defaultWidth - w >> 1;
                }
                else {
                    targetX = superslot.DataCache.defaultWidth - target.width >> 1;
                }
                if (h) {
                    targetY = superslot.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - h >> 1;
                }
                else {
                    targetY = superslot.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - target.height >> 1;
                }
            }
            else {
                targetX = target.x;
                targetY = target.y;
            }
            if (useEffect) {
                target.alpha = 0;
                target.anchorOffsetX = target.width / 2;
                target.anchorOffsetY = target.height / 2;
                target.scaleX = 0.6;
                target.scaleY = 0.6 * scaleY;
                // target.x += target.width / 2;
                target.x = uniLib.Global.screenWidth / 2;
                target.y += (target.height / 2) * scaleY;
                egret.Tween.removeTweens(target);
                egret.Tween.get(target).to({ alpha: 1, scaleX: 1.1, scaleY: 1.1 * scaleY }, 200, egret.Ease.backOut).
                    to({ scaleX: 1, scaleY: 1 * scaleY }, 100);
            }
            else {
                target.scaleY = scaleY;
            }
            if (isClose) {
                this._popUpMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
            }
            else {
                this._popUpMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
            }
        };
        PopupManager.closeHandle = function () {
            egret.MainContext.instance.stage.dispatchEventWith(superslot.UIEventConsts.CLOSE);
        };
        /**
         * 移除弹出框
         * @param	target:显示对象
         * @param	useEffect:是否缓动
         */
        PopupManager.removePopUp = function (target, useEffect) {
            if (useEffect === void 0) { useEffect = false; }
            if (this._popUpMask != null)
                this._popUpMask.visible = false;
            if (!useEffect) {
                if (target.parent)
                    target.parent.removeChild(target);
            }
            else {
                egret.Tween.removeTweens(target);
                egret.Tween.get(target).to({ y: target.y - 200, alpha: 0 }).call(this.removeTarget, this, [target]);
            }
        };
        PopupManager.removeTarget = function (target) {
            target.alpha = 1.0;
            egret.Tween.removeTweens(target);
            if (target.parent) {
                target.parent.removeChild(target);
            }
        };
        return PopupManager;
    }());
    superslot.PopupManager = PopupManager;
    __reflect(PopupManager.prototype, "superslot.PopupManager");
})(superslot || (superslot = {}));
