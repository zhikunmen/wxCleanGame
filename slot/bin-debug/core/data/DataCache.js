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
    var DataCache = (function () {
        function DataCache() {
        }
        DataCache.getStartPos = function (x, y, width, height, betId) {
            //筹码距离左右长度
            var lengthX = 50;
            //筹码距离上下长度
            var lengthY = 60;
            if (betId == 1 || betId == 4) {
                // lengthY = 60;
            }
            else {
                lengthX = 25;
                lengthY = 45;
            }
            //筹码在x轴范围内下落随机位置
            var startX = x + lengthX + (width - lengthX * 2) * Math.random();
            //筹码在y轴范围内下落随机位置
            var startY = y + lengthY + (height - lengthY * 2) * Math.random();
            return new egret.Point(startX, startY);
        };
        DataCache.getSeatPos = function (seatId) {
            return this.seatPosArr[seatId];
        };
        DataCache.getChipsPos = function (seatId) {
            var pointX = this.seatPosArr[seatId - 1].x;
            var pointY = this.seatPosArr[seatId - 1].y + 40;
            var point = new egret.Point(pointX, pointY);
            return point;
        };
        DataCache.setX = function () {
            for (var i = 0; i < this.seatPosArr.length; i++) {
                if (i > 3) {
                    this.seatPosArr[i].x = uniLib.Global.screenWidth - 45;
                }
            }
        };
        DataCache.defaultWidth = 1280;
        DataCache.defaultHeight = 720;
        DataCache.path = "";
        DataCache.destroyResOnExit = false;
        DataCache.seatPosArr = [
            new egret.Point(45, 80),
            new egret.Point(45, 210),
            new egret.Point(45, 340),
            new egret.Point(45, 470),
            new egret.Point(DataCache.defaultWidth - 45, 80),
            new egret.Point(DataCache.defaultWidth - 45, 210),
            new egret.Point(DataCache.defaultWidth - 45, 340),
            new egret.Point(DataCache.defaultWidth - 45, 470)
        ];
        //下注区域
        DataCache.BetAreaEndX = [[230, 300], [450, 520], [660, 730], [870, 940], [280, 360]];
        DataCache.BetAreaEndY = [[200, 270], [200, 270], [200, 270], [200, 270], [20, 60]];
        return DataCache;
    }());
    lhj.DataCache = DataCache;
    __reflect(DataCache.prototype, "lhj.DataCache");
})(lhj || (lhj = {}));
