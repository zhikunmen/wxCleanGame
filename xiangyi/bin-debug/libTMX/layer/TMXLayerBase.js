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
    var TMXLayerBase = (function (_super) {
        __extends(TMXLayerBase, _super);
        /**
         * 图层基类
         * @param tilemap TMXTilemap实例
         * @param data
         * @param z 图层层深
         * @version Egret 3.0.3
         */
        function TMXLayerBase(tilemap, data, z) {
            var _this = _super.call(this) || this;
            _this._tilemap = tilemap;
            _this._data = data;
            _this._z = z;
            return _this;
        }
        Object.defineProperty(TMXLayerBase.prototype, "tilemap", {
            /**
             * 获取TMXTilemap实例
             * @version Egret 3.0.3
             */
            get: function () {
                return this._tilemap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXLayerBase.prototype, "z", {
            /**
             * 获取图层所在的层深
             * @version Egret 3.0.3
             */
            get: function () {
                return this._z;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 实现ILayer绘制<code>draw</code>接口
         * @param rect 绘制的矩形区域
         * @version Egret 3.0.3
         */
        TMXLayerBase.prototype.draw = function (rect) {
        };
        return TMXLayerBase;
    }(egret.Sprite));
    tiled.TMXLayerBase = TMXLayerBase;
    __reflect(TMXLayerBase.prototype, "tiled.TMXLayerBase", ["tiled.ILayer"]);
})(tiled || (tiled = {}));
