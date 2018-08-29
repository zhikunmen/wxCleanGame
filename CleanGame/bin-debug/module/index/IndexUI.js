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
var IndexUI = (function (_super) {
    __extends(IndexUI, _super);
    function IndexUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "IndexUISkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    IndexUI.prototype.addStage = function () {
        this.addGoldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //GH.showAd();
            new Tips().show("功能暂未开放");
        }, this);
        this.addHeartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //Director.getInstance().repleaceScene(new IndexScene());
            new Tips().show("功能暂未开放");
            wx.shareAppMessage({
                title: "menzhikun",
                imageUrl: GameData.sourceUrl + "cleanGame/com/circle.png",
                query: "门智坤",
                success: function (e) {
                    console.log("成功" + JSON.stringify(e));
                },
                fail: function (e) {
                    console.error("失败" + JSON.stringify(e));
                }
            });
        }, this);
    };
    return IndexUI;
}(eui.Component));
__reflect(IndexUI.prototype, "IndexUI");
