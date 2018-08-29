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
    var Ellipse = (function (_super) {
        __extends(Ellipse, _super);
        /**
         * 创建1个椭圆形状实例
         * @param x 水平坐标（单位：像素）
         * @param y 垂直坐标（单位：像素）
         * @param w 椭圆宽
         * @param h 椭圆高
         * @version Egret 3.0.3
         */
        function Ellipse(x, y, w, h) {
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.width = w;
            _this.height = h;
            return _this;
        }
        /**
         * 根据参数<code>color</code>绘制椭圆，参数为16进制表示形式，例如：0xff0000
         * @param color 颜色值
         * @version Egret 3.0.3
         */
        Ellipse.prototype.draw = function (color) {
            this.graphics.clear();
            this.graphics.lineStyle(2, color);
            this.graphics.beginFill(color, 0.2);
            this.graphics.drawEllipse(0, 0, this.width, this.height);
            this.graphics.endFill();
        };
        return Ellipse;
    }(egret.Sprite));
    tiled.Ellipse = Ellipse;
    __reflect(Ellipse.prototype, "tiled.Ellipse");
})(tiled || (tiled = {}));
