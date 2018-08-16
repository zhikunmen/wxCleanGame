var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
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
        PopupManager.addPopUp = function (target, modal, center, useEffect, w, h, isTop) {
            if (modal === void 0) { modal = false; }
            if (center === void 0) { center = false; }
            if (useEffect === void 0) { useEffect = true; }
            if (w === void 0) { w = 0; }
            if (h === void 0) { h = 0; }
            if (isTop === void 0) { isTop = false; }
            if (this._popUpMask == null) {
                this._popUpMask = new egret.Sprite();
                this._popUpMask.graphics.beginFill(0, 0.3);
                this._popUpMask.graphics.drawRect(0, 0, uniLib.Global.screenWidth, uniLib.Global.screenHeight); //* uniLib.ScreenUtils.scaleFactor);
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
                lhj.GameInfo.uiLayer.addChild(this._popUpMask);
                lhj.GameInfo.uiLayer.addChild(target);
            }
            else {
                lhj.GameInfo.uiLayer.addChild(this._popUpMask);
                lhj.GameInfo.uiLayer.addChild(target);
            }
            var targetX;
            var targetY;
            if (center) {
                if (w) {
                    targetX = lhj.DataCache.defaultWidth - w >> 1;
                }
                else {
                    targetX = lhj.DataCache.defaultWidth - target.width >> 1;
                }
                if (h) {
                    targetY = lhj.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - h >> 1;
                }
                else {
                    targetY = lhj.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - target.height >> 1;
                }
            }
            else {
                targetX = target.x;
                targetY = target.y;
            }
            if (useEffect) {
                target.y = targetY + target.height / 2;
                target.x = targetX + target.width / 2;
                target.scaleX = 0;
                target.scaleY = 0;
                egret.Tween.removeTweens(target);
                egret.Tween.get(target).to({ scaleX: 1, scaleY: lhj.GameInfo.scaleY,
                    x: (uniLib.Global.screenWidth - target.width) / 2, y: (720 - target.height) / 3 }, 150);
            }
            else {
                target.x = targetX;
                target.y = targetY;
            }
        };
        /**
         * 移除弹出框
         * @param	target:显示对象
         * @param	useEffect:是否缓动
         */
        PopupManager.removePopUp = function (target, useEffect) {
            if (useEffect === void 0) { useEffect = false; }
            var targetX = lhj.DataCache.defaultWidth - target.width >> 1;
            var targetY = lhj.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - target.height >> 1;
            target.y = targetY + target.height / 2;
            target.x = targetX + target.width / 2;
            target.anchorOffsetX = target.width / 2;
            target.anchorOffsetY = target.height / 2;
            if (this._popUpMask != null)
                this._popUpMask.visible = false;
            if (!useEffect) {
                if (target.parent) {
                    egret.Tween.get(target).to({ scaleX: 0, scaleY: 0 }, 200).call(this.removeTarget, this, [target]);
                }
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
    lhj.PopupManager = PopupManager;
    __reflect(PopupManager.prototype, "lhj.PopupManager");
})(lhj || (lhj = {}));
