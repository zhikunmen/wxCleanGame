module superslot {
	export class SizeListViewItem extends eui.ItemRenderer {
		private _sizeValue: eui.BitmapLabel;
		private _newImage: eui.Image;
		constructor() {
			super();
			this.skinName = "SuperSlot_SizeHistoryItem";
			// let sizeList: eui.List = this.parent as eui.List;
			// if (sizeList.dataProvider.length == this.itemIndex) {
			// 	this._newImage.visible = true;
			// }
		}
		protected dataChanged(): void {
			this._sizeValue.text =  this.data + "";
			let sizeList: eui.List = this.parent as eui.List;
			if (sizeList.dataProvider.length == this.itemIndex + 1) {
				this._newImage.visible = true;
			}
		}
	}
}