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
var IndexGroup = (function (_super) {
    __extends(IndexGroup, _super);
    function IndexGroup() {
        var _this = _super.call(this) || this;
        _this.skinName = "IndexGroupSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    IndexGroup.prototype.addStage = function () {
        var buttonArr = [this.btn1, this.btn2, this.btn3, this.btn4, this.btn5, this.btn6,
            this.btn7, this.btn8, this.btn9, this.btn10, this.btn11, this.btn12, this.btn13];
        for (var k in buttonArr) {
            var itemBtn = buttonArr[k];
            itemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn, this);
        }
    };
    IndexGroup.prototype.clickBtn = function (touch) {
        SoundsMgr.playBtn();
        var btn = touch.currentTarget;
        var lv = btn.lv;
        if (lv <= parseInt(PlayerData.data.fightLv)) {
            Director.getInstance().pushScene(new GameEnterDlg(lv));
        }
        else {
            new Tips().show("不能进入");
        }
    };
    return IndexGroup;
}(eui.Component));
__reflect(IndexGroup.prototype, "IndexGroup");
