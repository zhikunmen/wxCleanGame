var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    var TMXAnimationFrame = (function () {
        /**
         * 创建1个动画帧数据解析类
         * @param tilemap 获取Tiledmap实例
         * @param tileset
         * @param tileX
         * @param tileY
         * @param data
         *
         * @version egret 3.0.3
         */
        function TMXAnimationFrame(tilemap, tileset, col, row, data) {
            this._tiledid = +data.attributes.tileid;
            this._duration = +data.attributes.duration;
            this._tile = new tiled.TMXTile(col, row, this._tiledid + tileset.firstgid, tilemap, tileset);
        }
        Object.defineProperty(TMXAnimationFrame.prototype, "tile", {
            /**
             * 获取当前画帧所使用的<code>TMXTile实例</code>
             * @version egret 3.0.3
             */
            get: function () {
                return this._tile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXAnimationFrame.prototype, "tiledId", {
            /**
             * 获取当前帧所使用的tileset中的id号
             * @version egret 3.0.3
             */
            get: function () {
                return this._tiledid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXAnimationFrame.prototype, "duration", {
            /**
             * 获取每帧持续时间(单位：毫秒)
             * @version egret 3.0.3
             */
            get: function () {
                return this._duration;
            },
            enumerable: true,
            configurable: true
        });
        return TMXAnimationFrame;
    }());
    tiled.TMXAnimationFrame = TMXAnimationFrame;
    __reflect(TMXAnimationFrame.prototype, "tiled.TMXAnimationFrame");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXAnimationFrame.js.map