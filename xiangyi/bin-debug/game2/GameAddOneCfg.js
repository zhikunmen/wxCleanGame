var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameAddOneCfg = (function () {
    function GameAddOneCfg() {
    }
    GameAddOneCfg.colorArray = [
        0x4169e1,
        0xffff,
        0x00ff00,
        0x7eff00,
        0xffff00,
        0xff9912,
        0xff6100,
        0x802a2a,
        0xa020f0,
    ];
    GameAddOneCfg.Grid = { row: 6, column: 6 };
    return GameAddOneCfg;
}());
__reflect(GameAddOneCfg.prototype, "GameAddOneCfg");
