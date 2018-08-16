var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var superslot;
(function (superslot) {
    var SizeListViewItem = (function (_super) {
        __extends(SizeListViewItem, _super);
        function SizeListViewItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "SuperSlot_SizeHistoryItem";
            return _this;
            // let sizeList: eui.List = this.parent as eui.List;
            // if (sizeList.dataProvider.length == this.itemIndex) {
            // 	this._newImage.visible = true;
            // }
        }
        SizeListViewItem.prototype.dataChanged = function () {
            this._sizeValue.text = this.data + "";
            var sizeList = this.parent;
            if (sizeList.dataProvider.length == this.itemIndex + 1) {
                this._newImage.visible = true;
            }
        };
        return SizeListViewItem;
    }(eui.ItemRenderer));
    superslot.SizeListViewItem = SizeListViewItem;
    __reflect(SizeListViewItem.prototype, "superslot.SizeListViewItem");
})(superslot || (superslot = {}));
