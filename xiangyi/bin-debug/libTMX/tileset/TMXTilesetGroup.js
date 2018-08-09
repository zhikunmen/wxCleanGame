var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    var TMXTilesetGroup = (function () {
        /**
         * Tileset集合，所有的Tileset都存储在这里
         * @param $tilemap
         * @version Egret 3.0.3
         */
        function TMXTilesetGroup($tilemap) {
            this._tilesets = [];
            this._length = 0;
            this._imagelength = 0;
            this._tilemap = $tilemap;
        }
        Object.defineProperty(TMXTilesetGroup.prototype, "length", {
            /**
             * 获取tileset的长度
             * @version Egret 3.0.3
             */
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTilesetGroup.prototype, "imagelength", {
            /**
             * 获取所有图片的长度
             * @version Egret 3.0.3
             */
            get: function () {
                return this._imagelength;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXTilesetGroup.prototype, "tilemap", {
            /**
             * 获取TMXTilemap实例的引用
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tilemap;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 添加Tileset
         * @param tileset
         * @version Egret 3.0.3
         */
        TMXTilesetGroup.prototype.add = function (tileset) {
            this._tilesets.push(tileset);
            this._length++;
            if (tileset.image)
                this._imagelength++;
        };
        /**
         * 根据索引获取Tileset
         * @param index
         * @version Egret 3.0.3
         */
        TMXTilesetGroup.prototype.getTilesetByIndex = function (index) {
            return this._tilesets[index];
        };
        /**
         * 根据格子id获取Tileset，每个tileset都可能有n个格子(n>=1)，而这些格子的id都具备唯一性<br/>
         * 因此，通过格子id可以获取到此id在哪个tileset中的格子集中
         * @param gid 格子id
         * @version Egret 3.0.3
         */
        TMXTilesetGroup.prototype.getTilesetByGid = function (gid) {
            if (gid === 0)
                return null;
            var invalidRange = -1;
            gid &= tiled.TMXConstants.TMX_CLEAR_BIT_MASK;
            for (var i = 0, len = this._tilesets.length; i < len; i++) {
                var tileset = this._tilesets[i];
                if (tileset.contains(gid))
                    return tileset;
                if (tileset.firstgid === tileset.lastgid && gid >= tileset.firstgid)
                    invalidRange = i;
            }
            if (invalidRange !== -1)
                return this._tilesets[invalidRange];
            else
                throw new Error("no matching tileset found for gid " + gid);
        };
        return TMXTilesetGroup;
    }());
    tiled.TMXTilesetGroup = TMXTilesetGroup;
    __reflect(TMXTilesetGroup.prototype, "tiled.TMXTilesetGroup");
})(tiled || (tiled = {}));
