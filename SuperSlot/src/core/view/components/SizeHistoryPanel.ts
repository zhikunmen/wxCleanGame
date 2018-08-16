module superslot {
	export class SizeHistoryPanel extends eui.Component {
		private uid;
		private rank_list: eui.List;
		private scroller:eui.Scroller;
		public constructor() {
			super();
			this.skinName = "SuperSlot_SizeHistorySkin";
			this.init();
		}
		private init(): void {
			this.rank_list.itemRenderer = SizeListViewItem;
		}
		// private closeHandle(evt: egret.TouchEvent): void {
		// 	evt.stopPropagation();
		// 	this.dispatchEventWith(UIEventConsts.CLOSE);
		// }
		// private onClick(evt: egret.TouchEvent): void {
		// 	evt.stopPropagation();
		// 	egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.SHOW_PLAYER_INFO, false, this.uid);
		// }
		// public setData(rev: Cmd.GetRankInfoCmd_S): void {
		// 	this.scroller.viewport.scrollV = 0;
		// 	var sourceArr = [];
		// 	this.rank_list.dataProvider = new eui.ArrayCollection(sourceArr);
		// 	let selfTxt = ResUtil.sanzhangNumFormat(rev.selfRankInfo.winChips);
		// 	sourceArr.push({ nickname: rev.selfRankInfo.userInfo.nickName, rank: rev.selfRankInfo.rankId, chips: selfTxt, headUrl: rev.selfRankInfo.userInfo.headUrl, uid: rev.selfRankInfo.userInfo.uid, vipLevel: rev.selfRankInfo.userInfo.vipLevel });
		// 	if (rev.othersRankInfo) {
		// 		for (var i = 0; i < rev.othersRankInfo.length; i++) {
		// 			let data = rev.othersRankInfo[i];
		// 			let txt;
		// 			txt = ResUtil.sanzhangNumFormat(data.winChips);
		// 			sourceArr.push({ nickname: data.userInfo.nickName, rank: data.rankId, chips: txt, headUrl: data.userInfo.headUrl, uid: data.userInfo.uid, vipLevel: data.userInfo.vipLevel });
		// 		}
		// 	}
		// }
		public destory(): void {
			ResUtil.removeFromParent(this);
			ResUtil.removeAllChildren(this);
		}
	}
}