var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.reset = function () {
        this.enterLv = 0;
        this.curStep = 0;
        this.targetStep = 0;
        this.curScore = 0;
        this.targetScore = 0;
        this.isOver = false;
        this.isWin = false;
    };
    GameData.initLvData = function (lv) {
        this.reset();
        var data = CfgFileMgr.getLvCfgDatayId(lv);
        GameData.targetScore = parseInt(data["score"]);
        GameData.targetStep = parseInt(data["step"]);
        GameData.curStep = GameData.targetStep;
        GameData.enterLv = lv;
    };
    GameData.enterLv = 0;
    GameData.curStep = 0;
    GameData.targetStep = 0;
    GameData.curScore = 0;
    GameData.targetScore = 0;
    GameData.isOver = false;
    GameData.isWin = false;
    GameData.sourceUrl = "https://h5.publish.1stgame.cn/mahjong_native_test/dongbei-jilin/resource/";
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
var GameState;
(function (GameState) {
    GameState[GameState["DealLogic"] = 0] = "DealLogic";
    GameState[GameState["Play"] = 1] = "Play"; //����Ϸ��
})(GameState || (GameState = {}));
;
//# sourceMappingURL=GameData.js.map