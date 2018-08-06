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
    var TMXImage = (function (_super) {
        __extends(TMXImage, _super);
        /**
         * Tile图像
         * @param data 图像数据
         * @param baseURL 地址前缀
         * @version Egret 3.0.3
         */
        function TMXImage(data, baseURL) {
            var _this = _super.call(this) || this;
            _this._width = +data.attributes.width;
            _this._height = +data.attributes.height;
            _this._source = data.attributes.source;
            _this._trans = (typeof data.attributes.trans !== "undefined") ? data.attributes.trans : '000000';
            _this._bitmap = new egret.Bitmap();
            _this._source = baseURL + _this._source;
            _this.loadImage(_this._source);
            return _this;
        }
        Object.defineProperty(TMXImage.prototype, "texture", {
            /**
             * 获取图像加载完后的纹理
             * @version Egret 3.0.3
             */
            get: function () {
                return this._texture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImage.prototype, "bitmap", {
            /**
             * 获取图像加载完后的图片
             * @version Egret 3.0.3
             */
            get: function () {
                return this._bitmap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImage.prototype, "source", {
            /**
             * 获取图像加载的源地址
             * @version Egret 3.0.3
             */
            get: function () {
                return this._source;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImage.prototype, "width", {
            /**
             * 获取图像的原始宽（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImage.prototype, "height", {
            /**
             * 获取图像的原始高（单位：像素）
             * @version Egret 3.0.3
             */
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 加载图像
         * @param $url
         * @version Egret 3.0.3
         */
        TMXImage.prototype.loadImage = function (url) {
            if (url == null || url == "")
                return;
            RES.getResByUrl(url, function (texture) {
                if (texture) {
                    this._bitmap.texture = texture;
                    this._texture = texture;
                    this._width = texture.textureWidth;
                    this._height = texture.textureHeight;
                    this.dispatchEvent(new tiled.TMXImageLoadEvent(tiled.TMXImageLoadEvent.IMAGE_COMPLETE, texture));
                }
            }, this, RES.ResourceItem.TYPE_IMAGE);
        };
        return TMXImage;
    }(egret.EventDispatcher));
    tiled.TMXImage = TMXImage;
    __reflect(TMXImage.prototype, "tiled.TMXImage");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXImage.js.map