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
    var SizeHistoryPanel = (function (_super) {
        __extends(SizeHistoryPanel, _super);
        function SizeHistoryPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "SuperSlot_SizeHistorySkin";
            _this.init();
            return _this;
        }
        SizeHistoryPanel.prototype.init = function () {
            this.rank_list.itemRenderer = superslot.SizeListViewItem;
        };
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
        SizeHistoryPanel.prototype.destory = function () {
            superslot.ResUtil.removeFromParent(this);
            superslot.ResUtil.removeAllChildren(this);
        };
        return SizeHistoryPanel;
    }(eui.Component));
    superslot.SizeHistoryPanel = SizeHistoryPanel;
    __reflect(SizeHistoryPanel.prototype, "superslot.SizeHistoryPanel");
})(superslot || (superslot = {}));
