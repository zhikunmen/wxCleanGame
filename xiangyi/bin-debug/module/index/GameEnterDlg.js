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
var GameEnterDlg = (function (_super) {
    __extends(GameEnterDlg, _super);
    function GameEnterDlg(lv) {
        var _this = _super.call(this) || this;
        _this.lv = lv;
        _this.skinName = "GameEnterDlgSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        _this.initData();
        return _this;
    }
    GameEnterDlg.prototype.addStage = function () {
        this.height = ScreenMgr.instance.screenHeight;
        this.width = ScreenMgr.instance.screenWidth;
        this.goImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGo, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    GameEnterDlg.prototype.onClose = function () {
        SoundsMgr.playBtn();
        Director.getInstance().popScene();
    };
    GameEnterDlg.prototype.initData = function () {
        this.lvLabel.text = this.lv.toString();
        var data = CfgFileMgr.getLvCfgDatayId(this.lv);
        if (data) {
            var str = "在" + data["step"] + "步之内达到" + data["score"] + "分";
            this.descLabel.text = str;
        }
    };
    GameEnterDlg.prototype.onGo = function () {
        SoundsMgr.playBtn();
        GameData.initLvData(this.lv);
        SceneMgr.gotoGame();
    };
    return GameEnterDlg;
}(eui.Component));
__reflect(GameEnterDlg.prototype, "GameEnterDlg");
