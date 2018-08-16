var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    /**
     *
     * @author
     *
     */
    var DataCache = (function () {
        function DataCache() {
        }
        DataCache.getSeatPos = function (seatId) {
            return this.seatPosArr[seatId];
        };
        DataCache.defaultWidth = 1280;
        DataCache.defaultHeight = 720;
        DataCache.path = "";
        DataCache.destroyResOnExit = false;
        DataCache.seatPosArr = [
            new egret.Point(10, 70),
            new egret.Point(10, 250),
            new egret.Point(10, 430),
            new egret.Point(DataCache.defaultWidth - 45, 70),
            new egret.Point(DataCache.defaultWidth - 45, 250),
            new egret.Point(DataCache.defaultWidth - 45, 430)
        ];
        //下注区域
        DataCache.BetAreaEndX = [[290, 385], [490, 585], [690, 785], [890, 985], [280, 360]];
        DataCache.BetAreaEndY = [[280, 400], [280, 400], [280, 400], [280, 400], [20, 60]];
        return DataCache;
    }());
    superslot.DataCache = DataCache;
    __reflect(DataCache.prototype, "superslot.DataCache");
})(superslot || (superslot = {}));
