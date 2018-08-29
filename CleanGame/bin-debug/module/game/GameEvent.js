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
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelAble) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        return _super.call(this, type, bubbles, cancelAble) || this;
    }
    GameEvent.CleanOver = "CleanOver";
    GameEvent.DropOver = "DropOver";
    return GameEvent;
}(egret.Event));
__reflect(GameEvent.prototype, "GameEvent");
