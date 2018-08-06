var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    var TMXTileset = (function () {
        /**
         * Tileset对象
         * @param tilemap 引用的TMXTilemap对象
         * @param tilesetData tilesetDat数据
         * @version Egret 3.0.3
         * 暂时不支持tsx文件的扩展
         */
        function TMXTileset(tilemap, tilesetData) {
            /**
             * 获取文件扩展名
             * @version Egret 3.0.3
             */
            this.getFileExtension = function (path) {
                return path.substring(path.lastIndexOf(".") + 1, path.length);
            };
            this._tileDatas = [];
            tiled.TMXTileset._cacheRenderTextures = {};
            this._firstgid = +tilesetData.attributes.firstgid;
            this._lastgid = this._firstgid;
            this._tilemap = tilemap;
            //tileset也可能是外部加载的
            var src = tilesetData.attributes.source;
            if (src && this.getFileExtension(src) === "tsx") {
                throw new Error("tmx not support tsx file load!!!");
            }
            this._transformMatrix = new egret.Matrix();
            this._name = tilesetData.attributes.name;
            this._tilewidth = +tilesetData.attributes.tilewidth;
            this._tileheight = +tilesetData.attributes.tileheight;
            this._spacing = +tilesetData.attributes.spacing || 0;
            this._margin = +tilesetData.attributes.margin || 0;
            //每个Tileset有个偏移值，这个偏移值是指绘制在场景中的对象的偏移值
            this._tileoffset = new egret.Point();
            this._hTileCount = 0;
            this._vTileCount = 0;
            var childrens = tilesetData.children;
            if (childrens) {
                for (var i = 0; i < childrens.length; i++) {
                    var child = childrens[i];
                    switch (child.localName) {
                        case tiled.TMXConstants.IMAGE:
                            this._image = new tiled.TMXImage(child, this.tilemap.baseURL);
                            this._imagesource = this._image.source;
                            break;
                        case tiled.TMXConstants.TILE_OFFSET:
                            this._tileoffset = new egret.Point(+child.attributes.x, +child.attributes.y);
                            break;
                        case tiled.TMXConstants.TILE:
                            var gid = +child.attributes.id + this._firstgid;
                            if (this._tileDatas[gid] == null)
                                this._tileDatas[gid] = child;
                            break;
                        case tiled.TMXConstants.PROPERTIES:
                            this._properties = tilemap.parseProperties(child);
                            break;
                    }
                }
            }
            if (this._image) {
                this._hTileCount = ~~(this._image.width / (this._tilewidth + this._spacing));
                this._vTileCount = ~~(this._image.height / (this._tileheight + this._margin));
                this._lastgid = this._firstgid + (((this._hTileCount * this._vTileCount) - 1) || 0);
            }
        }
        Object.defineProperty(TMXTileset.prototype, "name", {
            /**
             * Tileset名称
             * @version Egret 3.0.3
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "firstgid", {
            /**
             * 获取每个tileset第1个格子的id号。<br/>
             * 例如，1个tmx文件有3个tileset，那么第1个tileset的firstgid默认为1，如果第1个tileset有12个格子，<br/>
             * 那么第二个tileset的firstgid将为13，依此类推，firstgid为全局的标识id号，通过此id号可以计算每个tileset中格子的id号
             * @version Egret 3.0.3
             */
            get: function () {
                return this._firstgid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "lastgid", {
            /**
             * 获取每个tileset最后1个格子的id号
             * @version Egret 3.0.3
             */
            get: function () {
                return this._lastgid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "tilewidth", {
            /**
             * 获取每个tileset中格子宽（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tilewidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "tileheight", {
            /**
             * 获取每个tileset中格子高（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileheight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "spacing", {
            /**
             * 获取tileset中格子与格子之间的水平间距（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._spacing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "margin", {
            /**
             * 获取tileset中格子与格子之间的垂直间距（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._margin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "tileoffset", {
            /**
             * 获取tileset中格子的偏移值,返回egret.Point数据
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileoffset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "horizontalTileCount", {
            /**
             * 获取tileset中水平方向的格子数
             * @version Egret 3.0.3
             */
            get: function () {
                return this._hTileCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "verticalTileCount", {
            /**
             * 获取tileset中垂直方向的格子数
             * @version Egret 3.0.3
             */
            get: function () {
                return this._vTileCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "tilemap", {
            /**
             * 获取对TMXTilemap实例的引用
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tilemap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "properties", {
            /**
             * 获取tileset所具备的属性列表<br/>
             * 通过查看tmx文件可知，只有具备属性数据的tileset才会生成属性数据，以标签<code>properties</code>表示
             * 注意：这里表示的是tileset本身的属性列表，而非tileset中格子的属性列表
             * @version Egret 3.0.3
             */
            get: function () {
                return this._properties;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTileset.prototype, "image", {
            /**
             * 获取tileset中对标签<code>image</code>解析实例的引用
             * @version Egret 3.0.3
             */
            get: function () {
                return this._image;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 根据id获取特殊格子的数据，默认情况下，tileset中格子如果没有作特殊处理，在tmx文件中是不会生成数据的，这里的特殊处理包括以下几个方面：<br/>
         * (1):格子添加了自定义属性<br/>
         * (2):格子添加了动画<br/>
         * (3):格子添加了碰撞区域<br/>
         * 对于第2种情况，tmx文件中是以标签<code>animation</code>记录</br>
         * 对于第3种情况，tmx文件中是以标签<code>objectgroup</code>记录，这表示可以添加多个自定义的碰撞区域
         * @param gid tileset中的格子id
         * @version Egret 3.0.3
         */
        TMXTileset.prototype.getSpecialTileDataByTileId = function (gid) {
            return this._tileDatas[gid];
        };
        /**
         *  获取tileset属性列表
         * @version Egret 3.0.3
         */
        TMXTileset.prototype.getProperties = function () {
            return this._properties;
        };
        /**
         * 根据索引获取tileset属性列表
         * @param index
         * @version Egret 3.0.3
         */
        TMXTileset.prototype.getPropertyByIndex = function (index) {
            if (this._properties && index < this._properties.length)
                return this._properties[index];
            return null;
        };
        /**
         * 判断当前tileset中是否包含对应<code>gid</code>的格子
         * @param gid gid
         * @version Egret 3.0.3
         */
        TMXTileset.prototype.contains = function (gid) {
            return gid >= this._firstgid && gid <= this._lastgid;
        };
        /**
         * 绘制Tile
         * @param renderer 渲染容器
         * @param dx 水平像素坐标
         * @param dy 垂直像素坐标
         * @param tile TMXTile实例
         * @version Egret 3.0.3
         */
        TMXTileset.prototype.drawTile = function (renderer, dx, dy, tile) {
            //用gid+col+row作key来降低draw的次数
            var renderTexture;
            var id = tile.gid - this.firstgid;
            var key = this.firstgid + "_" + id;
            if (key) {
                if (tiled.TMXTileset._cacheRenderTextures[key] == null) {
                    if (this.image) {
                        renderTexture = new egret.RenderTexture();
                        renderTexture.drawToTexture(this.image.bitmap, new egret.Rectangle((id % this.horizontalTileCount) * (this.tilewidth + this._spacing) + this._spacing, (Math.floor(id / this.horizontalTileCount)) * (this.tileheight + this._margin) + this._margin, this.tilewidth, this.tileheight));
                        tiled.TMXTileset._cacheRenderTextures[key] = renderTexture;
                    }
                }
                else {
                    renderTexture = tiled.TMXTileset._cacheRenderTextures[key];
                }
                if (renderTexture) {
                    var isImage = false;
                    var isObject = false;
                    if (renderer instanceof tiled.TMXObject) {
                        isObject = true;
                        isImage = renderer.isImage;
                    }
                    this._transformMatrix.identity();
                    var _scalex = isObject ? renderer.width / renderTexture.textureWidth : 1;
                    var _scaley = isObject ? renderer.height / renderTexture.textureHeight : 1;
                    if (tile.flippedAD) {
                        this._transformMatrix.scale(-1 * _scalex, -1 * _scaley);
                        this._transformMatrix.translate(dx + renderer.width * _scalex, dy + renderer.height * _scaley);
                    }
                    else if (tile.flippedY) {
                        this._transformMatrix.scale(1 * _scalex, -1 * _scaley);
                        this._transformMatrix.translate(dx, dy + renderer.height * _scaley);
                    }
                    else if (tile.flippedX) {
                        this._transformMatrix.scale(-1 * _scalex, 1 * _scaley);
                        this._transformMatrix.translate(dx + renderer.width * _scalex, dy);
                    }
                    else {
                        this._transformMatrix.scale(_scalex, _scaley);
                        this._transformMatrix.translate(dx, dy + (isObject ? (renderTexture.textureHeight - renderer.height) : 0));
                    }
                    if (tile.bitmap == null)
                        tile.bitmap = new egret.Bitmap();
                    tile.bitmap.texture = renderTexture;
                    tile.bitmap.matrix = this._transformMatrix;
                    renderer.addChild(tile.bitmap);
                }
            }
        };
        /**
         * 移除所有缓存的纹理
         * @version Egret 3.0.3
         */
        TMXTileset.removeAllTextures = function () {
            this._cacheRenderTextures = {};
        };
        return TMXTileset;
    }());
    tiled.TMXTileset = TMXTileset;
    __reflect(TMXTileset.prototype, "tiled.TMXTileset");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXTileset.js.map