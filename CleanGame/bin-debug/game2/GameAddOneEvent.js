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
var GameAddOneEvent = (function (_super) {
    __extends(GameAddOneEvent, _super);
    function GameAddOneEvent(type, bubbles, cancelAble) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        return _super.call(this, type, bubbles, cancelAble) || this;
    }
    GameAddOneEvent.GameOver = "GameOver";
    GameAddOneEvent.CellAddOne = "CellAddOne";
    GameAddOneEvent.CellRemove = "CellRemove";
    GameAddOneEvent.CellAddPos = "CellAddPos";
    GameAddOneEvent.CellMoveOver = "CellMoveOver";
    return GameAddOneEvent;
}(egret.Event));
__reflect(GameAddOneEvent.prototype, "GameAddOneEvent");
