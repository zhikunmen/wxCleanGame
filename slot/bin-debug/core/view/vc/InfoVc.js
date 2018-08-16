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
var lhj;
(function (lhj) {
    var InfoVc = (function (_super) {
        __extends(InfoVc, _super);
        function InfoVc() {
            var _this = _super.call(this) || this;
            _this.skinName = "InfoVcSkin";
            _this.init();
            return _this;
        }
        InfoVc.prototype.init = function () {
            this.head = new chessCommonLib.Head();
            this.head.width = 81;
            this.head.height = 81;
            this.addChild(this.head);
            this.head.x = 126;
            this.head.y = 633.5;
        };
        //进房的时候初始化玩家数据
        InfoVc.prototype.initInfo = function (rev) {
            this.nickTxt.text = rev.myinfo.nickname;
            this.idTxt.text = "ID:" + rev.myinfo.uid;
            this.recordTxt.text = "战绩:" + lhj.ResUtil.simplifyNum(rev.myinfo.profit);
            this.chipsTxt.text = "金币:" + lhj.ResUtil.simplifyNum(rev.myinfo.chips);
            this.head.headUrl = rev.myinfo.headurl;
            lhj.RoomInfo.getInstance().chips = rev.myinfo.chips;
        };
        //金币变化
        InfoVc.prototype.setChips = function (chips) {
            this.chipsTxt.text = "金币:" + lhj.ResUtil.simplifyNum(chips);
            lhj.RoomInfo.getInstance().chips = chips;
        };
        //成绩变化
        InfoVc.prototype.setRecord = function (chips) {
            this.recordTxt.text = "战绩:" + lhj.ResUtil.simplifyNum(chips);
        };
        //上一局游戏获胜金币
        InfoVc.prototype.setIncome = function (chips) {
            this.incomeTxt.text = lhj.ResUtil.simplifyNum(chips);
        };
        InfoVc.prototype.destory = function () {
            uniLib.DisplayUtils.removeFromParent(this);
            uniLib.DisplayUtils.removeAllChildren(this);
        };
        InfoVc.NAME = "InfoVc";
        return InfoVc;
    }(eui.Component));
    lhj.InfoVc = InfoVc;
    __reflect(InfoVc.prototype, "lhj.InfoVc");
})(lhj || (lhj = {}));
