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
var WinUI = (function (_super) {
    __extends(WinUI, _super);
    function WinUI(star) {
        var _this = _super.call(this) || this;
        _this.star = 0;
        _this.skinName = "WinUISkin";
        _this.star = star;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        SoundsMgr.win();
        return _this;
    }
    WinUI.prototype.addStage = function () {
        this.width = ScreenMgr.instance.screenWidth;
        this.height = ScreenMgr.instance.screenHeight;
        this.btn1Bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn1, this);
        this.btn2Bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn2, this);
        this.btn3Bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtn3, this);
        this.init();
        this.saveData();
        this.initStar();
    };
    WinUI.prototype.initStar = function () {
        var arr = [this.star1, this.star2, this.star3];
        for (var k in arr) {
            arr[k].visible = false;
        }
        for (var i = 0; i < this.star; i++) {
            arr[i].visible = true;
        }
    };
    WinUI.prototype.saveData = function () {
    };
    WinUI.prototype.init = function () {
        this.numLabel.text = GameData.curScore.toString();
    };
    // 主页
    WinUI.prototype.clickBtn1 = function () {
        SceneMgr.gotoIndex();
    };
    // 重玩
    WinUI.prototype.clickBtn2 = function () {
        SceneMgr.rePlayLv();
    };
    // 下一关
    WinUI.prototype.clickBtn3 = function () {
        GameData.initLvData(GameData.enterLv + 1);
        SceneMgr.gotoGame();
    };
    return WinUI;
}(eui.Component));
__reflect(WinUI.prototype, "WinUI");
//# sourceMappingURL=WinUI.js.map