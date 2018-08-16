module superslot {
	export class HelpPanel extends BaseSlwhEuiPanel {
		private closeBtn: eui.Button;
		// private rank_list: eui.List;
		private gameRule_1: eui.Image;
		private gameRule_2: eui.Image;
		private gameExplain_1: eui.Image;
		private gameExplain_2: eui.Image;
		private helpScroll_rule: eui.Scroller;
		private helpScroll_explain: eui.Scroller;
		public constructor() {
			super();
			this.skinName = "SuperSlot_HelpSkin";
			superslotBC.addEvent(this,this.closeBtn,egret.TouchEvent.TOUCH_TAP, this.closeHandle);
		}
		protected addEvent(): void {
			superslotBC.addEvent(this, this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.closeHandle);
			superslotBC.addEvent(this,this.gameRule_2,egret.TouchEvent.TOUCH_TAP, this.showGameRule);
			superslotBC.addEvent(this,this.gameExplain_2,egret.TouchEvent.TOUCH_TAP, this.showgameExplain);
		}
		private closeHandle(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.dispatchEventWith(UIEventConsts.CLOSE);
		}
		private showGameRule(evt: egret.TouchEvent): void{
			evt.stopPropagation();
			this.gameRule_1.visible = true;
			this.gameRule_2.visible = false;
			this.gameExplain_1.visible = false;
			this.gameExplain_2.visible = true;
			this.helpScroll_rule.visible = true;
			// this.helpScroll_rule.verticalScrollBar.autoVisibility = false;
			// this.helpScroll_rule.verticalScrollBar.visible = true;
			this.helpScroll_explain.visible = false;
		}
		private showgameExplain(evt: egret.TouchEvent): void{
			evt.stopPropagation();
			this.gameRule_1.visible = false;
			this.gameRule_2.visible = true;
			this.gameExplain_1.visible = true;
			this.gameExplain_2.visible = false;
			this.helpScroll_rule.visible = false;
			this.helpScroll_explain.visible = true;
		}
		public destory(): void {
			if (this.closeBtn) {
				this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
				this.closeBtn = null;
			}
			ResUtil.removeFromParent(this);
            ResUtil.removeAllChildren(this);
		}
	}
}