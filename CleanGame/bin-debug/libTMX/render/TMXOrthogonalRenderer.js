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
    var TMXOrthogonalRenderer = (function (_super) {
        __extends(TMXOrthogonalRenderer, _super);
        /**
         * 创建1个正交渲染器（正常模式）
         * @param rows 水平方向格子数
         * @param cols 垂直方向格子数
         * @param tilewidth 格子宽（单位：像素）
         * @param tileheight 格子高（单位：像素）
         * @version Egret 3.0.3
         */
        function TMXOrthogonalRenderer(rows, cols, tilewidth, tileheight) {
            return _super.call(this, rows, cols, tilewidth, tileheight) || this;
        }
        /**
         * 是否可渲染
         * @param layer
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.canRender = function (layer) {
            return (layer.orientation === tiled.TMXConstants.ORIENTATION_ORTHOGONAL) && _super.prototype.canRender.call(this, layer);
        };
        /**
         * 像素坐标转化为格子坐标
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.pixelToTileCoords = function (x, y) {
            return new egret.Point(this.pixelToTileX(x), this.pixelToTileY(y));
        };
        /**
         * 水平像素坐标转化为水平格子坐标
         * @param x 水平像素坐标
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.pixelToTileX = function (x) {
            return Math.floor(x / this.tilewidth);
        };
        /**
         * 垂直像素坐标转化为垂直格子坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.pixelToTileY = function (y) {
            return Math.floor(y / this.tileheight);
        };
        /**
         * 格子坐标转化为像素坐标
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.tileToPixelCoords = function (tileX, tileY) {
            return new egret.Point(tileX * this.tilewidth, tileY * this.tileheight);
        };
        /**
         * 绘制Tile
         * @param renderer 渲染容器
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @param tile TMXTile实例
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.drawTile = function (renderer, tileX, tileY, tile) {
            var tileset = tile.tileset;
            tileset.drawTile(renderer, tileset.tileoffset.x + tileX * this.tilewidth, tileset.tileoffset.y + (tileY + 1) * this.tileheight - tileset.tileheight, tile);
        };
        /**
         * 绘制作Tile图层
         * @param layer 图层
         * @param rect  绘制区域
         * @version Egret 3.0.3
         */
        TMXOrthogonalRenderer.prototype.drawTileLayer = function (layer, rect) {
            var staticContainer = layer.staticContainer;
            var start = this.pixelToTileCoords(Math.floor(Math.max(rect.x - (layer.maxTileSize.width - layer.tilewidth), 0)), Math.floor(Math.max(rect.y - (layer.maxTileSize.height - layer.tileheight), 0)));
            var end = this.pixelToTileCoords(Math.ceil(rect.x + rect.width + this.tilewidth), Math.ceil(rect.y + rect.height + this.tileheight));
            end.x = end.x > this.rows ? this.rows : end.x;
            end.y = end.y > this.cols ? this.cols : end.y;
            for (var y = start.y; y < end.y; y++) {
                for (var x = start.x; x < end.x; x++) {
                    var tmxTile = layer.layerData[x][y];
                    if (tmxTile) {
                        if (tmxTile.animation)
                            this.animationTiles.push({ "tmxTile": tmxTile, "pos": [x, y] });
                        else
                            this.drawTile(staticContainer, x, y, tmxTile);
                    }
                }
            }
        };
        return TMXOrthogonalRenderer;
    }(tiled.TMXRenderer));
    tiled.TMXOrthogonalRenderer = TMXOrthogonalRenderer;
    __reflect(TMXOrthogonalRenderer.prototype, "tiled.TMXOrthogonalRenderer");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXOrthogonalRenderer.js.map