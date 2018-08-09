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
    var TMXTile = (function (_super) {
        __extends(TMXTile, _super);
        /**
         * 创建一个新的TMXTile实例，此类存储了场景的格子数据与Tileset中格子的数据
         * @param tileX 场景中的水平格子坐标
         * @param tileY 场景中的垂直格子坐标
         * @param gid tileset中的格子id
         * @param tilemap TMXTilemap实例
         * @param tileset TMXTileset实例
         * @version Egret 3.0.3
         */
        function TMXTile(tileX, tileY, gid, tilemap, tileset) {
            var _this = _super.call(this) || this;
            _this._tileset = tileset;
            _this._tileX = tileX;
            _this._tileY = tileY;
            _this._tilemap = tilemap;
            _this._gid = gid;
            _this._flippedX = (_this._gid & tiled.TMXConstants.TMX_FLIP_H) !== 0;
            _this._flippedY = (_this._gid & tiled.TMXConstants.TMX_FLIP_V) !== 0;
            _this._flippedAD = _this._flippedX && _this._flippedY; //(this._gid & tiled.TMXConstants.TMX_FLIP_AD) !== 0;
            _this._flipped = _this._flippedX || _this._flippedY || _this._flippedAD;
            _this._gid &= tiled.TMXConstants.TMX_CLEAR_BIT_MASK;
            _this._tileData = tileset.getSpecialTileDataByTileId(_this._gid);
            if (_this._tileData) {
                var children = _this._tileData.children;
                if (children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        switch (child.localName) {
                            case tiled.TMXConstants.PROPERTIES:
                                _this._properties = tilemap.parseProperties(child);
                                break;
                            case tiled.TMXConstants.OBJECT_GROUP:
                                break;
                            case tiled.TMXConstants.IMAGE:
                                _this._image = new tiled.TMXImage(child, _this.tilemap.baseURL);
                                break;
                            case tiled.TMXConstants.ANIMATION:
                                _this._animation = new tiled.TMXAnimation(tilemap, tileset, tileX, tileY, child);
                                break;
                        }
                    }
                }
            }
            return _this;
        }
        Object.defineProperty(TMXTile.prototype, "gid", {
            /**
             * 获取在tileset所对应的格子id
             * @version Egret 3.0.3
             */
            get: function () {
                return this._gid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "tileX", {
            /**
             * 获取其在场景水平格子坐标
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "tileY", {
            /**
             * 获取其在场景中垂直格子坐标
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "tileset", {
            /**
             * 获取其在场景中所引用的TMXTileset实例
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tileset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "image", {
            get: function () {
                return this._image;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "tilemap", {
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
        Object.defineProperty(TMXTile.prototype, "flippedX", {
            /**
             * 获取格子是否进行了水平方向翻转
             * @version Egret 3.0.3
             */
            get: function () {
                return this._flippedX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "flippedY", {
            /**
             * 获取格子是否进行了垂直方向翻转
             * @version Egret 3.0.3
             */
            get: function () {
                return this._flippedY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "flippedAD", {
            /**
             * 获取格子是否进行了水平且垂直方向翻转
             * @version Egret 3.0.3
             */
            get: function () {
                return this._flippedAD;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "flipped", {
            /**
             * 获取格子是否进行了翻转（不管是水平还是垂直）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._flipped;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTile.prototype, "animation", {
            /**
             * 获取格子的动画信息(如果没有动画信息，那么为空)
             * @version Egret 3.0.3
             */
            get: function () {
                return this._animation;
            },
            enumerable: true,
            configurable: true
        });
        return TMXTile;
    }(egret.Sprite));
    tiled.TMXTile = TMXTile;
    __reflect(TMXTile.prototype, "tiled.TMXTile");
})(tiled || (tiled = {}));
