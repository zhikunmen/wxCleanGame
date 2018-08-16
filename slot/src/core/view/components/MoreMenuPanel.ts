module lhj {
	export class MoreMenuPanel extends eui.Component {
		private bg_layer: egret.Sprite;
		private container: eui.Panel;
		private exitBg: eui.Image;
		private setBg: eui.Image;
		private helpBg: eui.Image;
		private exitTxt: eui.Label;
		private setTxt: eui.Label;
		private helpTxt: eui.Label;
		public constructor() {
			super();
			this.skinName = "MorePanelSkin";
			this.init();
		}
		private init(): void {
			this.bg_layer = uniLib.DisplayUtils.createMask(0, uniLib.Global.screenWidth, uniLib.Global.screenHeight);
			this.bg_layer.touchEnabled = true;
			this.bg_layer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.addChild(this.bg_layer);
			this.swapChildren(this.container, this.bg_layer);
			this.helpTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHelpTouchHandler, this);
            this.helpTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onHelpTouchHandler, this);
			this.setTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onsetTouchHandler, this);
            this.setTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onsetTouchHandler, this);
			this.exitTxt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onexitTouchHandler, this);
            this.exitTxt.addEventListener(egret.TouchEvent.TOUCH_END, this.onexitTouchHandler, this);
		}
		private onexitTouchHandler(evt: egret.TouchEvent) {
			evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.exitBg.visible = true;
            } else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.exitBg.visible = false;
				this.onExitGame();
            } 
        }
		private onsetTouchHandler(evt: egret.TouchEvent) {
			evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.setBg.visible = true;
            } else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.setBg.visible = false;
				this.onSetting();
            } 
        }
		private onHelpTouchHandler(evt: egret.TouchEvent) {
			evt.stopPropagation();
            if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.helpBg.visible = true;
            } else if (evt.type == egret.TouchEvent.TOUCH_END) {
                this.helpBg.visible = false;
				this.onHelp();
            } 
        }
		private onTouch(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.dispatchEventWith(UIEventConsts.CLOSE, false);
		}
		private onHelp(): void {
			this.dispatchEventWith(UIEventConsts.SHOW_HELP_PANEL, false);
		}
		private onSetting(): void {
			this.dispatchEventWith(UIEventConsts.SHOW_SETTING_PANEL, false);
		}
		private onExitGame(): void {
			this.dispatchEventWith(UIEventConsts.EXIT_GAME, false, 999);
		}
		public destory(): void {
			if (this.bg_layer) {
				this.bg_layer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			}
			this.helpTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHelpTouchHandler, this);
            this.helpTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onHelpTouchHandler, this);
			this.setTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onsetTouchHandler, this);
            this.setTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onsetTouchHandler, this);
			this.exitTxt.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onexitTouchHandler, this);
            this.exitTxt.removeEventListener(egret.TouchEvent.TOUCH_END, this.onexitTouchHandler, this);
			uniLib.DisplayUtils.removeFromParent(this);
			uniLib.DisplayUtils.removeAllChildren(this);
		}
	}
}