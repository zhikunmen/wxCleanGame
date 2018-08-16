var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    /**
     *
     * @author
     *
     */
    var PublicManage = (function () {
        function PublicManage() {
            this.showList = [];
        }
        PublicManage.getInstance = function () {
            if (!PublicManage.instance) {
                PublicManage.instance = new PublicManage();
            }
            return PublicManage.instance;
        };
        /**
         * 轻提示
         */
        PublicManage.prototype.showMildWarnShow = function (msg) {
            //ResUtil.trace("轻度提示：" + msg);
            if (!msg) {
                return;
            }
            var alert = new superslot.MildAlertVC();
            superslotBC.addEvent(this, alert, egret.Event.REMOVED_FROM_STAGE, this.removeStage);
            alert.setText(msg);
            this.getContainer().addChild(alert);
            if (this.showList.length > 0) {
                for (var index = 0; index < this.showList.length; index++) {
                    this.showList[index].y -= alert.height;
                }
            }
            this.showList.push(alert);
        };
        PublicManage.prototype.getContainer = function () {
            if (superslot.GameInfo.topLayer) {
                return superslot.GameInfo.topLayer;
            }
            if (uniLib.SceneMgr.instance.currentScene.topLayer) {
                return uniLib.SceneMgr.instance.currentScene.topLayer;
            }
            return uniLib.SceneMgr.instance.currentScene;
        };
        PublicManage.prototype.removeStage = function (evt) {
            var alert = evt.currentTarget;
            alert.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
            this.showList.splice(this.showList.indexOf(alert), 1);
            alert.destory();
            alert = null;
        };
        PublicManage.prototype.showConfirmPanel = function (msg, btnlables, backFn, title, backObj, countdown, needClose) {
            if (backFn === void 0) { backFn = null; }
            if (title === void 0) { title = null; }
            if (countdown === void 0) { countdown = 0; }
            if (needClose === void 0) { needClose = true; }
            var _msgTips = new superslot.MsgBox(needClose);
            if (!title) {
                title = "";
            }
            _msgTips.setData(title, msg, btnlables, backFn, backObj, countdown);
            _msgTips.x = Math.round((superslot.DataCache.defaultWidth - _msgTips.width) / 2);
            _msgTips.y = Math.round((superslot.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - _msgTips.height) / 2);
            // GameInfo.topLayer.addChild(_msgTips);
            superslot.PopupManager.addPopUp(_msgTips, true);
        };
        PublicManage.prototype.showMask = function () {
            if (!this.maskMc) {
                this.maskMc = new egret.Sprite();
                this.maskMc.graphics.beginFill(0x000000, 0.5);
                this.maskMc.graphics.drawRect(0, 0, superslot.DataCache.defaultWidth, superslot.DataCache.defaultHeight); //* uniLib.ScreenUtils.scaleFactor);
                this.maskMc.graphics.endFill();
            }
            superslot.GameInfo.topLayer.addChild(this.maskMc);
        };
        PublicManage.prototype.hideMask = function () {
            if (this.maskMc) {
                superslot.GameInfo.topLayer.removeChild(this.maskMc);
            }
        };
        PublicManage.prototype.showMarket = function () {
        };
        PublicManage.prototype.backHall = function () {
        };
        /**
        *录像面板专用
         */
        PublicManage.prototype.showVideoCommonPanel = function (msg, btnlables, backFn, title, backObj, countdown, needClose) {
            if (backFn === void 0) { backFn = null; }
            if (title === void 0) { title = null; }
            if (countdown === void 0) { countdown = 0; }
            if (needClose === void 0) { needClose = true; }
            var msgTip = new superslot.MsgBox(true);
            msgTip.setData(title, msg, btnlables, backFn, backObj, countdown);
            msgTip.x = Math.round((superslot.DataCache.defaultWidth - msgTip.width) / 2);
            msgTip.y = Math.round((superslot.DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - msgTip.height) / 2);
            superslot.PopupManager.addPopUp(msgTip, true, false, true, 0, 0, true);
        };
        /**通用购买金币 */
        PublicManage.prototype.showCommonBuy = function (type, coinsNum) {
            if (!this._guideBuy) {
                this._guideBuy = new superslot.BuyPanel;
                this._guideBuy.setType(type, coinsNum);
                superslotBC.addEvent(this, this._guideBuy, superslot.UIEventConsts.CLOSE, this.removeBuyCoins);
                superslot.PopupManager.addPopUp(this._guideBuy, true, true, true);
            }
        };
        PublicManage.prototype.removeBuyCoins = function () {
            if (this._guideBuy) {
                this._guideBuy.removeEventListener(superslot.UIEventConsts.CLOSE, this.removeBuyCoins, this);
                superslot.PopupManager.removePopUp(this._guideBuy);
                this._guideBuy.destory();
                this._guideBuy = null;
            }
        };
        return PublicManage;
    }());
    superslot.PublicManage = PublicManage;
    __reflect(PublicManage.prototype, "superslot.PublicManage");
})(superslot || (superslot = {}));
