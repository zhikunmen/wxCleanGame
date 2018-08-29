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
var tiled;
(function (tiled) {
    var PolyLine = (function (_super) {
        __extends(PolyLine, _super);
        /**
         * 创建1个新的折线实例
         * @param x 水平坐标（单位：像素）
         * @param y 垂直坐标（单位：像素）
         * @param points 折线对应的点数据列表
         * @version Egret 3.0.3
         */
        function PolyLine(x, y, points) {
            var _this = _super.call(this) || this;
            _this.points = points;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        /**
         * 根据参数<code>color</code>绘制折线，参数为16进制表示形式，例如：0xff0000
         * @param color 颜色值
         * @version Egret 3.0.3
         */
        PolyLine.prototype.draw = function (color) {
            this.graphics.clear();
            this.graphics.lineStyle(2, color);
            this.graphics.beginFill(color, 0.2);
            if (this.points) {
                for (var i = 0; i < this.points.length; i++) {
                    var _data = this.points[i];
                    if (i == 0)
                        this.graphics.moveTo(_data[0], _data[1]);
                    else
                        this.graphics.lineTo(_data[0], _data[1]);
                }
            }
            this.graphics.endFill();
        };
        return PolyLine;
    }(egret.Sprite));
    tiled.PolyLine = PolyLine;
    __reflect(PolyLine.prototype, "tiled.PolyLine");
})(tiled || (tiled = {}));
