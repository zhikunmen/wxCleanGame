module lhj {
	/**
	 *
	 * @author 
	 *
	 */
    export class MsgBox extends egret.Sprite {
        private _needClose: boolean;
        private title: egret.TextField;
        private info: egret.TextField;
        private _backFn: Array<Function>;
        private _backObj: any;
        private yesBtn: GameButton;
        private noBtn: GameButton;
        constructor(needClose: boolean) {
            super();
            this.touchEnabled = true;
            this._needClose = needClose;
            this.initUI();
        }
        public initUI(): void {
            var bg = ResUtil.createBitmapByName("da_frame_4");
            bg.scale9Grid = new egret.Rectangle(20,31,34,15);
            bg.width = 635;
            bg.height = 391;
            this.addChild(bg);
            this.title = ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, "", 32, 140, 18, 191);
            this.info = ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, "", 32, 66, 39, 508);
            this.info.lineSpacing = 2;
            this.addChild(this.info);
            this.addChild(this.title);
            if (this._needClose) {
                var closeBtn = new GameButton(["dt_close_btn_1", "dt_close_btn_2"]);
                closeBtn.x = bg.width - 61;
                closeBtn.y = -10;
                closeBtn.addClickArea(20);
                closeBtn.touchEnabled = true;
                closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
                this.addChild(closeBtn);
            }
        }
        private onClose(evt: egret.TouchEvent): void {
            evt.stopPropagation();
            PopupManager.removePopUp(this);
            this.dispatchEventWith(UIEventConsts.CLOSE);
            this.destory();
        }
        public setData(title: string, msg: string, labelarr: Array<any> = null, backFn: Array<Function> = null, backObject: any = null, countdown: number = 0, size: number = 32, align: string = egret.HorizontalAlign.CENTER): void {
            if (labelarr === void 0) { labelarr = null; }
            if (backFn === void 0) { backFn = null; }
            if (backObject === void 0) { backObject = null; }
            if (countdown === void 0) { countdown = 0; }
            if (size === void 0) { size = 32; }
            if (align === void 0) { align = egret.HorizontalAlign.CENTER; }
            this._backFn = backFn;
            this._backObj = backObject;
            this.info.size = size;
            this.title.text = title;
            this.info.text = msg;
            this.info.textAlign = align;
            this.info.y = 20 + Math.round((254 - this.info.textHeight) / 2);
            if (labelarr.length == 1) {
                if (!labelarr[0] || labelarr[0] == "") {
                    labelarr[0] = "确定";
                }
                this.yesBtn = new GameButton(["hlhyg_sure_1", "hlhyg_sure_2"]);
                this.yesBtn.x = Math.round((this.width - this.yesBtn.width) / 2);
                this.yesBtn.y = this.height - 105;
                this.addChild(this.yesBtn);
            }
            else if (labelarr.length == 2) {
                if (!labelarr[0] || labelarr[0] == "") {
                    labelarr[0] = "确定";
                }
                if (!labelarr[1] || labelarr[1] == "") {
                    labelarr[1] = "取消";
                }
                this.yesBtn = new GameButton(["hlhyg_sure_1", "hlhyg_sure_2"]);
                this.yesBtn.x = 635 / 2 - this.yesBtn.width - 10;
                this.yesBtn.y = 290;
                this.addChild(this.yesBtn);
                this.noBtn = new GameButton(["hlhyg_cancel_1", "hlhyg_cancel_2"]);
                this.noBtn.x = 635 / 2 + 10;
                this.noBtn.y = 290;
                this.yesBtn.y = this.noBtn.y = this.height - this.yesBtn.height - 50;
                this.addChild(this.noBtn);
            }
            if (this._backFn && this._backFn[0]) {
                this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[0], this._backObj);
            }
            if (this._backFn && this._backFn[1]) {
                this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[1], this._backObj);
            }
            if (this.yesBtn) {
                this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            }
            if (this.noBtn) {
                this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            }
            this.title.x = (635 - this.title.width) / 2;
        }
        public set titleY(value) {
            this.title.y = value;
        }
        public set titleColor(value) {
            this.title.textColor = value;
        }
        public destory(): void {
            if (this.yesBtn) {
                if (this._backFn && this._backFn[0]) {
                    this.yesBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[0], this._backObj);
                }
                this.yesBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
                this.yesBtn = null;
            }
            if (this.noBtn) {
                this.noBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
                if (this._backFn && this._backFn[1]) {
                    this.noBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._backFn[1], this._backObj);
                }
                this.noBtn = null;
            }
            this.title = null;
            this.info = null;
            this._backFn = null;
            this._backObj = null;
            ResUtil.removeFromParent(this);
            ResUtil.removeAllChildren(this);
        }
    }
}
