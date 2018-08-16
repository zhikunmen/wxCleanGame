var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    /**
     *
     * @author
     *
     */
    var GameInfo = (function () {
        function GameInfo() {
        }
        GameInfo.prototype.destory = function () {
            GameInfo.main = null;
            GameInfo.stage = null;
            GameInfo.mainUILayer = null;
            GameInfo.uiLayer = null;
            GameInfo.topLayer = null;
            GameInfo.manage = null;
        };
        return GameInfo;
    }());
    lhj.GameInfo = GameInfo;
    __reflect(GameInfo.prototype, "lhj.GameInfo");
})(lhj || (lhj = {}));
