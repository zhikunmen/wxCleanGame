var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameCfg = (function () {
    function GameCfg() {
    }
    GameCfg.row = 6;
    GameCfg.rowSpace = 20;
    GameCfg.column = 6;
    GameCfg.columnSpace = 20;
    GameCfg.baseCleanNum = 3;
    return GameCfg;
}());
__reflect(GameCfg.prototype, "GameCfg");
//# sourceMappingURL=GameCfg.js.map