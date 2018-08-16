module superslot {
	export class LotteryListViewItem extends eui.ItemRenderer {
		private bg: eui.Image;
		private _newImage: eui.Image;
		constructor() {
			super();
			this.skinName = "SuperSlot_LotteryHistoryItem";
		}
		protected dataChanged(): void {
			if (this.data.cardid != -1) {
				if (this.data.cardid == 10) {
					if (this.data.specialcardid.length >= 3) {
						if (this.data.bluetype == 1) {
							this.bg.source = "ss_history10" + this.data.bluetype + "_png";
						} else if (this.data.bluetype == 2) {
							this.bg.source = "ss_history10" + this.data.bluetype + "_png";
						} else if (this.data.bluetype == 3) {
							this.bg.source = "ss_history10" + this.data.bluetype + "_png";
						}
					}
					
				} else if (this.data.cardid == 22) {
					this.bg.source = "ss_history" + this.data.specialcardid[0];
				} else {
					this.bg.source = "ss_history" + this.data.cardid;
				}
				
				let lotteryList: eui.List = this.parent as eui.List;
				if (lotteryList.dataProvider.length == this.itemIndex + 1) {
					this._newImage.visible = true;
				}
			}
		}
	}
}