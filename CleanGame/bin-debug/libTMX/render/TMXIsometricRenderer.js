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
    var TMXIsometricRenderer = (function (_super) {
        __extends(TMXIsometricRenderer, _super);
        /**
         * 创建1个iso渲染器
         * @param rows 水平方向格子数
         * @param cols 垂直方向格子数
         * @param tilewidth 格子宽（单位：像素）
         * @param tileheight 格子高（单位：像素）
         * @version Egret 3.0.3
         */
        function TMXIsometricRenderer(rows, cols, tilewidth, tileheight) {
            var _this = _super.call(this, rows, cols, tilewidth, tileheight) || this;
            _this._hTilewidth = _this.tilewidth / 2;
            _this._hTileheight = _this.tileheight / 2;
            _this._originX = _this.rows * _this._hTilewidth;
            return _this;
        }
        /**
         * 是否可渲染
         * @param layer
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.canRender = function (layer) {
            return (layer.orientation === tiled.TMXConstants.ORIENTATION_ISOMETRIC) && _super.prototype.canRender.call(this, layer);
        };
        /**
         * 像素坐标转化为格子坐标
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.pixelToTileCoords = function (x, y) {
            var __x = Math.floor(this.pixelToTileX(x, y));
            var __y = Math.floor(this.pixelToTileY(y, x));
            return new egret.Point(this.pixelToTileX(x, y), this.pixelToTileY(y, x));
        };
        /**
         * 像素坐标转化为水平格子坐标
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.pixelToTileX = function (x, y) {
            var _value = (y / this.tileheight) + ((x - this._originX) / this.tilewidth);
            return (y / this.tileheight) + ((x - this._originX) / this.tilewidth);
        };
        /**
         * 像素坐标转化为垂直格子坐标
         * @param y 垂直像素坐标
         * @param x 水平像素坐标
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.pixelToTileY = function (y, x) {
            var _value = (y / this.tileheight) - ((x - this._originX) / this.tilewidth);
            return (y / this.tileheight) - ((x - this._originX) / this.tilewidth);
        };
        /**
         * 格子坐标转化为像素坐标
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.tileToPixelCoords = function (tileX, tileY) {
            return new egret.Point((tileX - tileY) * this._hTilewidth + this._originX, (tileX + tileY) * this._hTileheight);
        };
        /**
         * 绘制作Tile
         * @param renderer 渲染容器
         * @param tileX 水平格子坐标（单位：像素）
         * @param tileY 垂直格子坐标（单位：像素）
         * @param tile TMXTile实例
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.drawTile = function (renderer, tileX, tileY, tile) {
            var tileset = tile.tileset;
            tileset.drawTile(renderer, tileset.tileoffset.x + tileX, tileset.tileoffset.y + tileY - tileset.tileheight, tile);
        };
        /**
         * 绘制图层
         * @param layer 图层
         * @param rect 绘制区域
         * @version Egret 3.0.3
         */
        TMXIsometricRenderer.prototype.drawTileLayer = function (layer, rect) {
            var staticContainer = layer.staticContainer;
            var tileset = layer.tileset;
            var offset = tileset.tileoffset;
            //获得上左，右下角位置
            var rowItr = this.pixelToTileCoords(rect.x - tileset.tilewidth, rect.y - tileset.tileheight);
            rowItr = new egret.Point(Math.floor(rowItr.x), Math.floor(rowItr.y));
            var tileEnd = this.pixelToTileCoords(rect.x + rect.width + tileset.tilewidth, rect.y + rect.height + tileset.tileheight);
            tileEnd = new egret.Point(Math.ceil(tileEnd.x), Math.ceil(tileEnd.y));
            var rectEnd = this.tileToPixelCoords(tileEnd.x, tileEnd.y);
            var startPos = this.tileToPixelCoords(rowItr.x, rowItr.y);
            startPos.x -= this._hTilewidth;
            startPos.y += this.tileheight;
            var inUpperHalf = (startPos.y - rect.y) > this._hTileheight;
            var inLeftHalf = (rect.x - startPos.x) < this._hTilewidth;
            if (inUpperHalf) {
                if (inLeftHalf) {
                    rowItr.x--;
                    startPos.x -= this._hTilewidth;
                }
                else {
                    rowItr.y--;
                    startPos.x += this._hTilewidth;
                }
                startPos.y -= this._hTileheight;
            }
            //确定当前行是否将半个瓦片移到右边
            var shifted = Boolean(+inUpperHalf ^ +inLeftHalf);
            var columnItr = rowItr.clone();
            //先横向扫描，再纵向扫描
            for (var y = startPos.y; y - this.tileheight < rectEnd.y; y += this._hTileheight) {
                columnItr.setTo(rowItr.x, rowItr.y);
                for (var x = startPos.x; x < rectEnd.x; x += this.tilewidth) {
                    if ((columnItr.x >= 0) && (columnItr.y >= 0) && (columnItr.x < this.rows) && (columnItr.y < this.cols)) {
                        var tmxTile = layer.layerData[columnItr.x][columnItr.y];
                        if (tmxTile) {
                            tileset = tmxTile.tileset;
                            offset = tileset.tileoffset;
                            if (tmxTile) {
                                if (tmxTile.animation)
                                    this.animationTiles.push({ "tmxTile": tmxTile, "pos": [offset.x + x, offset.y + y] });
                                else
                                    this.drawTile(staticContainer, x, y, tmxTile);
                            }
                        }
                    }
                    columnItr.x++;
                    columnItr.y--;
                }
                if (!shifted) {
                    rowItr.x++;
                    startPos.x += this._hTilewidth;
                    shifted = true;
                }
                else {
                    rowItr.y++;
                    startPos.x -= this._hTilewidth;
                    shifted = false;
                }
            }
        };
        return TMXIsometricRenderer;
    }(tiled.TMXRenderer));
    tiled.TMXIsometricRenderer = TMXIsometricRenderer;
    __reflect(TMXIsometricRenderer.prototype, "tiled.TMXIsometricRenderer");
})(tiled || (tiled = {}));
