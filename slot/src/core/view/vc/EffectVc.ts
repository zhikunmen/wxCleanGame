module lhj {
	export class EffectVc extends eui.Component {
		public constructor() {
			super();
		}
		public destory(): void {
			egret.Tween.removeTweens(this);
			uniLib.DisplayUtils.removeFromParent(this);
			uniLib.DisplayUtils.removeAllChildren(this);
		}
	}
}