module lhj {
	export class HelpPanel extends eui.Component {
		private closeBtn: eui.Button;
		private introduce_bg: eui.Image;
		private introduce_btn: eui.Image;
		private introduce_txt: eui.Label;
		private rule_bg: eui.Image;
		private rule_btn: eui.Image;
		private rule_txt: eui.Label;
		private instr_bg: eui.Image;
		private instr_btn: eui.Image;
		private instr_txt: eui.Image;
		public constructor() {
			super();
			this.skinName = "fpc_HelpPanelSkin";
			this.init();
		}
		private init(): void {
			this.rule_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this);
			this.introduce_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showIntroduce, this);
			this.instr_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showInstr, this);
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
		}
		private closeHandle(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.dispatchEventWith(UIEventConsts.CLOSE);
		}
		private showRule(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.rule_txt.visible = true;
			this.rule_bg.visible = true;
			this.introduce_bg.visible = false;
			this.introduce_txt.visible = false;
			this.instr_bg.visible = false;
			this.instr_txt.visible = false;
		}
		private showIntroduce(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.rule_txt.visible = false;
			this.rule_bg.visible = false;
			this.introduce_bg.visible = true;
			this.introduce_txt.visible = true;
			this.instr_bg.visible = false;
			this.instr_txt.visible = false;
		}
		private showInstr(evt: egret.TouchEvent): void{
			evt.stopPropagation();
			this.rule_txt.visible = false;
			this.rule_bg.visible = false;
			this.introduce_bg.visible = false;
			this.introduce_txt.visible = false;
			this.instr_bg.visible = true;
			this.instr_txt.visible = true;
		}
		public destory(): void {
			this.rule_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this);
			this.introduce_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showIntroduce, this);
			this.instr_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showInstr, this);
			this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
			uniLib.DisplayUtils.removeFromParent(this);
			uniLib.DisplayUtils.removeAllChildren(this);
		}
	}
}