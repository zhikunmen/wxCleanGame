
module lhj {
	/**
	 *
	 * @author 
	 *
	 */
    export class PublicManage {
        private static instance: PublicManage;
        private maskMc: egret.Sprite;
        private showList: Array<MildAlertVC> = [];
        private _guideBuy: BuyPanel;
        private _msgTips:MsgBox;
        public constructor() {
        }
        public static getInstance(): PublicManage {
            if (!PublicManage.instance) {
                PublicManage.instance = new PublicManage();
            }
            return PublicManage.instance;
        }
		/**
		 * 轻提示
		 */
        public showMildWarnShow(msg: string): void {
            //ResUtil.trace("轻度提示：" + msg);
            if (!msg) {
                return
            }
            uniLib.TipsUtils.showTipsDownToUp(msg);
            // var alert: MildAlertVC = new MildAlertVC();
            // alert.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
            // alert.setText(msg);
            // this.getContainer().addChild(alert);
            // if (this.showList.length > 0) {
            //     for (var index = 0; index < this.showList.length; index++) {
            //         this.showList[index].y -= alert.height;
            //     }
            // }
            // this.showList.push(alert);
        }
        private getContainer(): egret.DisplayObjectContainer {
            if (GameInfo.topLayer) {
                return GameInfo.topLayer;
            }
            if (uniLib.SceneMgr.instance.currentScene.topLayer) {
                return uniLib.SceneMgr.instance.currentScene.topLayer;
            }
            return uniLib.SceneMgr.instance.currentScene
        }
        private removeStage(evt: egret.Event): void {
            var alert: MildAlertVC = evt.currentTarget as MildAlertVC;
            alert.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
            this.showList.splice(this.showList.indexOf(alert), 1);
            alert.destory();
            alert = null;
        }
        public showConfirmPanel(msg: string, btnlables: Array<string>, backFn: Array<Function> = null, title: string = null, backObj: any, countdown: number = 0, needClose: boolean = true): void {
            if(this._msgTips){
                this._msgTips.destory();
				this._msgTips = null;
            }
            this._msgTips = new MsgBox(needClose);
            if (!title) {
                title = "";
            }
            this._msgTips.setData(title, msg, btnlables, backFn, backObj, countdown);
            this._msgTips.x = Math.round((DataCache.defaultWidth - this._msgTips.width) / 2);
            this._msgTips.y = Math.round((DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - this._msgTips.height) / 2);
            // GameInfo.topLayer.addChild(_msgTips);
            PopupManager.addPopUp(this._msgTips, true);
        }

        public showMask(): void {
            if (!this.maskMc) {
                this.maskMc = new egret.Sprite();
                this.maskMc.graphics.beginFill(0x000000, 0.5);
                this.maskMc.graphics.drawRect(0, 0, DataCache.defaultWidth, DataCache.defaultHeight);//* uniLib.ScreenUtils.scaleFactor);
                this.maskMc.graphics.endFill();
            }
            GameInfo.topLayer.addChild(this.maskMc);
        }
        public hideMask(): void {
            if (this.maskMc) {
                GameInfo.topLayer.removeChild(this.maskMc);
            }
        }
        public showMarket(): void {
        }
        public backHall(): void {
        }
        /**
        *录像面板专用
         */
        public showVideoCommonPanel(msg: string, btnlables: Array<string>, backFn: Array<Function> = null, title: string = null, backObj: any, countdown: number = 0, needClose: boolean = true): void {
            var msgTip = new MsgBox(true);
            msgTip.setData(title, msg, btnlables, backFn, backObj, countdown);
            msgTip.x = Math.round((DataCache.defaultWidth - msgTip.width) / 2);
            msgTip.y = Math.round((DataCache.defaultHeight * uniLib.ScreenUtils.scaleFactor - msgTip.height) / 2);
            PopupManager.addPopUp(msgTip, true, false, true, 0, 0, true);
        }
        /**通用购买金币 */
        public showCommonBuy(type:number,coinsNum?:number): void {
            if (this._guideBuy) {
                this._guideBuy.destory();
                this._guideBuy = null;
            }
            if (!this._guideBuy) {
                this._guideBuy = new BuyPanel;
                this._guideBuy.setType(type,coinsNum);
                this._guideBuy.addEventListener(UIEventConsts.CLOSE, this.removeBuyCoins, this);
                PopupManager.addPopUp(this._guideBuy, true, true, true);
            }
        }
        public removeBuyCoins(): void {
            if (this._guideBuy) {
                this._guideBuy.removeEventListener(UIEventConsts.CLOSE, this.removeBuyCoins, this);
                PopupManager.removePopUp(this._guideBuy);
            }
        }
    }
}
