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
    var TMXLayer = (function (_super) {
        __extends(TMXLayer, _super);
        /**
         * 创建1个基本图层实例
         * 为了优化渲染，这里创建了静态图层与动画图层<br/>
         * 静态图层中没有任何动画组件，将其缓存为位图，即container.cacheAsBitmap=true;<br/>
         * 动态图层中有动画
         * @param tilemap TMXTilemap实例引用
         * @param tilewidth 格子宽
         * @param tileheight 格子高
         * @param orientation 渲染方向
         * @param tilesets tilesets组
         * @param z 层深
         * @param data
         * @version Egret 3.0.3
         */
        function TMXLayer(tilemap, tilewidth, tileheight, orientation, tilesets, z, data) {
            var _this = _super.call(this, tilemap, data, z) || this;
            _this._staticContainer = new egret.Sprite();
            //
            _this.addChild(_this._staticContainer);
            //为了防止地图坐标为负时出现无法显示的问题，这里延迟2秒进行缓存
            setTimeout(function (self) {
                self._staticContainer.cacheAsBitmap = true;
            }, 2000, _this);
            _this._animationContainer = new egret.Sprite();
            _this.addChild(_this._animationContainer);
            _this._tilemap = tilemap;
            _this._tilewidth = tilewidth;
            _this._tileheight = tileheight;
            _this._orientation = orientation;
            _this._tilesets = tilesets;
            _this.tileset = _this._tilesets ? _this._tilesets.getTilesetByIndex(0) : null;
            _this.maxTileSize = { "width": 0, "height": 0 };
            //根据Tile设置来设置图层数据
            for (var i = 0; i < _this._tilesets.length; i++) {
                var tileset = _this._tilesets.getTilesetByIndex(i);
                _this.maxTileSize.width = Math.max(_this.maxTileSize.width, tileset.tilewidth);
                _this.maxTileSize.height = Math.max(_this.maxTileSize.height, tileset.tileheight);
            }
            _this._name = data.attributes.name;
            _this._cols = +data.attributes.width;
            _this._rows = +data.attributes.height;
            _this._opacity = (typeof data.attributes.opacity !== "undefined") ? parseFloat(data.attributes.opacity) : 1;
            _this.visible = (typeof data.attributes.visible !== "undefined") ? Boolean(+data.attributes.visible) : true;
            _this._hexsidelength = +data.attributes.hexsidelength;
            _this._staggeraxis = data.attributes.staggeraxis;
            _this._staggerindex = +data.attributes.staggerindex;
            // layer "real" size
            if (_this._orientation === "isometric") {
                _this.width = (_this._cols + _this._rows) * (_this._tilewidth / 2);
                _this.height = (_this._cols + _this._rows) * (_this._tileheight / 2);
            }
            else {
                _this.width = _this._cols * _this._tilewidth;
                _this.height = _this._rows * _this._tileheight;
            }
            _this.initArray(_this._cols, _this._rows);
            //解析子属性
            var children = data.children;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    switch (child.localName) {
                        case tiled.TMXConstants.DATA://解析数据
                            _this.parseLayerData(tiled.TMXUtils.decode(child, child.attributes.encoding, child.attributes.compression));
                            break;
                        case tiled.TMXConstants.PROPERTIES://解析属性
                            _this._properties = _this.tilemap.parseProperties(child);
                            break;
                        default:
                            throw new Error("TMXTileMap decode Layer is Error：" + child.localName);
                            break;
                    }
                }
            }
            _this.alpha = _this._opacity;
            _this.visible = _this.visible;
            return _this;
        }
        Object.defineProperty(TMXLayer.prototype, "staticContainer", {
            /**
             * 获取静态层容器（用于渲染静态对象）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._staticContainer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "animationContainer", {
            /**
             * 获取动画层容器（用于渲染动画）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._animationContainer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "tilewidth", {
            /**
             * 获取tile宽
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tilewidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "tileheight", {
            /**
             * 获取tile高
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileheight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "orientation", {
            /**
             * 获取渲染方向
             * @version Egret 3.0.3
             */
            get: function () {
                return this._orientation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "rows", {
            /**
             * 获取水平格子数
             * @version Egret 3.0.3
             */
            get: function () {
                return this._rows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "cols", {
            /**
             * 获取垂直格子数
             * @version Egret 3.0.3
             */
            get: function () {
                return this._cols;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "hexsidelength", {
            /**
             * @version Egret 3.0.3
             */
            get: function () {
                return this._hexsidelength;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "staggeraxis", {
            /**
             * @version Egret 3.0.3
             */
            get: function () {
                return this._staggeraxis;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "staggerindex", {
            /**
             * @version Egret 3.0.3
             */
            get: function () {
                return this.staggerindex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "opacity", {
            /**
             * 获取透明度
             * @version Egret 3.0.3
             */
            get: function () {
                return this._opacity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayer.prototype, "properties", {
            /**
             * 获取图层属性列表
             * @version Egret 3.0.3
             */
            get: function () {
                return this._properties;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置渲染器
         * @param renderer 渲染器(包括：1、TMXHexagonoalRenderer,2、TMXIsometricRenderer,3、TMXOrthogonalRenderer)
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.setRenderer = function (renderer) {
            this.renderer = renderer;
        };
        /**
         * 根据像素坐标获取Tile Id
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.getTileId = function (x, y) {
            var tile = this.getTile(x, y);
            return tile ? tile.gid : 0;
        };
        /**
         * 根据像素坐标获取格子信息
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.getTile = function (x, y) {
            if (this.renderer instanceof tiled.TMXOrthogonalRenderer) {
                return this.layerData[~~this.renderer.pixelToTileX(x)][~~this.renderer.pixelToTileY(y)];
            }
            else if (this.renderer instanceof tiled.TMXIsometricRenderer) {
                return this.layerData[~~this.renderer.pixelToTileX(x, y)][~~this.renderer.pixelToTileY(y, x)];
            }
            return this.layerData[~~this.renderer.pixelToTileX(x, y)][~~this.renderer.pixelToTileY(y, x)];
        };
        /**
         * TMXTileMap#setLayerData调用
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @param tileId tileset所对应的id
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.setTile = function (tileX, tileY, tileId) {
            if (!this.tileset.contains(tileId))
                this.tileset = this._tilesets.getTilesetByGid(tileId);
            if (this.tileset) {
                var tile = this.layerData[tileX][tileY] = new tiled.TMXTile(tileX, tileY, tileId, this.tilemap, this.tileset);
                return tile;
            }
            return null;
        };
        /**
         * 清除Tile
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.clearTile = function (tileX, tileY) {
            this.layerData[tileX][tileY] = null;
        };
        /**
         * 绘制
         * @param rect 要绘制的矩形区域
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.draw = function (rect) {
            this.renderer.drawTileLayer(this, rect);
        };
        /**
         * 渲染
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.render = function () {
            this.renderer.render(this._animationContainer);
        };
        /**
         * 根据水平格子数与垂直格子数初始化图层数据
         * @param rows 水平格子数
         * @param cols 垂直格子数
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.initArray = function (rows, cols) {
            this.layerData = [];
            for (var x = 0; x < rows; x++) {
                this.layerData[x] = [];
                for (var y = 0; y < cols; y++) {
                    this.layerData[x][y] = null;
                }
            }
        };
        /**
         * 解析图层数据
         * @param data
         * @version Egret 3.0.3
         */
        TMXLayer.prototype.parseLayerData = function (data) {
            if (data) {
                var idx = 0;
                for (var y = 0; y < this.rows; y++) {
                    for (var x = 0; x < this.cols; x++) {
                        var gid = data[idx];
                        if (gid !== 0)
                            this.setTile(x, y, gid);
                        idx++;
                    }
                }
            }
        };
        return TMXLayer;
    }(tiled.TMXLayerBase));
    tiled.TMXLayer = TMXLayer;
    __reflect(TMXLayer.prototype, "tiled.TMXLayer");
})(tiled || (tiled = {}));
