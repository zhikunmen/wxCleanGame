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
    var TMXColorLayer = (function (_super) {
        __extends(TMXColorLayer, _super);
        /**
         * 创建1个Tile颜色图层
         * @param tilemap TMXTilemap实例
         * @param color 颜色值，格式#ff0000
         * @param z 图层深度
         * @version Egret 3.0.3
         */
        function TMXColorLayer(tilemap, color, z) {
            var _this = _super.call(this) || this;
            _this._tilemap = tilemap;
            _this._color = color;
            _this._z = z;
            _this.graphics.beginFill(tiled.TMXUtils.color16ToUnit(_this._color), 1);
            _this.graphics.drawRect(0, 0, tilemap.renderwidth, tilemap.renderheight);
            _this.graphics.endFill();
            return _this;
        }
        return TMXColorLayer;
    }(egret.Sprite));
    tiled.TMXColorLayer = TMXColorLayer;
    __reflect(TMXColorLayer.prototype, "tiled.TMXColorLayer");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXColorLayer.js.map