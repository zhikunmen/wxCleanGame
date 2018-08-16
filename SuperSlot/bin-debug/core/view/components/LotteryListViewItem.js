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
    var LotteryListViewItem = (function (_super) {
        __extends(LotteryListViewItem, _super);
        function LotteryListViewItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "SuperSlot_LotteryHistoryItem";
            return _this;
        }
        LotteryListViewItem.prototype.dataChanged = function () {
            if (this.data.cardid != -1) {
                if (this.data.cardid == 10) {
                    if (this.data.specialcardid.length >= 3) {
                        if (this.data.bluetype == 1) {
                            this.bg.source = "ss_history10" + this.data.bluetype + "_png";
                        }
                        else if (this.data.bluetype == 2) {
                            this.bg.source = "ss_history10" + this.data.bluetype + "_png";
                        }
                        else if (this.data.bluetype == 3) {
                            this.bg.source = "ss_history10" + this.data.bluetype + "_png";
                        }
                    }
                }
                else if (this.data.cardid == 22) {
                    this.bg.source = "ss_history" + this.data.specialcardid[0];
                }
                else {
                    this.bg.source = "ss_history" + this.data.cardid;
                }
                var lotteryList = this.parent;
                if (lotteryList.dataProvider.length == this.itemIndex + 1) {
                    this._newImage.visible = true;
                }
            }
        };
        return LotteryListViewItem;
    }(eui.ItemRenderer));
    superslot.LotteryListViewItem = LotteryListViewItem;
    __reflect(LotteryListViewItem.prototype, "superslot.LotteryListViewItem");
})(superslot || (superslot = {}));
