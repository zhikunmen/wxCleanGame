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
    var TMXImageLayer = (function (_super) {
        __extends(TMXImageLayer, _super);
        /**
         * 创建1个图像图层实例
         * @param tilemap TMXTilemap实例
         * @param data 图像图层数据
         * @param z 层深
         * @version Egret 3.0.3
         */
        function TMXImageLayer(tilemap, data, z) {
            var _this = _super.call(this, tilemap, data, z) || this;
            _this._name = data.attributes.name;
            _this.x = +data.attributes.x;
            _this.y = +data.attributes.y;
            _this._z = z;
            _this._opacity = (typeof +data.attributes.opacity !== "undefined") ? +data.attributes.opacity : 1;
            _this.visible = (typeof +data.attributes.visible !== "undefined") ? Boolean(+data.attributes.visible) : true;
            //解析源
            var children = data.children;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = data.children[i];
                    switch (child.localName) {
                        case tiled.TMXConstants.IMAGE:
                            _this._source = child.attributes.source;
                            _this._transColor = child.attributes.trans;
                            _this.loadImage(_this.tilemap.baseURL + _this._source);
                            break;
                        case tiled.TMXConstants.PROPERTIES:
                            _this._properties = _this._tilemap.parseProperties(child);
                            break;
                        default:
                            throw new Error("TMXTileMap decode ImageLayer is Error：" + child.localName);
                            break;
                    }
                }
            }
            return _this;
        }
        Object.defineProperty(TMXImageLayer.prototype, "bitmap", {
            /**
             * 获取图像图层的位图，如果源图像没有加载完成，那么，数据为空
             * @version Egret 3.0.3
             */
            get: function () {
                return this._bitmap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImageLayer.prototype, "texture", {
            /**
             * 获取图像图层的纹理，如果源图像没有加载完成，那么，数据为空
             * @version Egret 3.0.3
             */
            get: function () {
                return this._texture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXImageLayer.prototype, "alpha", {
            /**
             * 创建图像图层的透明度
             * @version Egret 3.0.3
             */
            get: function () {
                return this._opacity;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 加载图片
         * @param $url 图片地址
         * @version Egret 3.0.3
         */
        TMXImageLayer.prototype.loadImage = function (url) {
            if (url == null || url == "")
                return;
            RES.getResByUrl(url, function (texture) {
                if (texture) {
                    this._sourcebitmap.texture = texture;
                    this._texture = texture;
                    this.dispatchEvent(new tiled.TMXImageLoadEvent(tiled.TMXImageLoadEvent.IMAGE_COMPLETE, texture));
                }
            }, this, RES.ResourceItem.TYPE_IMAGE);
        };
        /**
         * 绘制矩形区域内的图像
         * @param rect 矩形区域
         * @version Egret 3.0.3
         */
        TMXImageLayer.prototype.draw = function (rect) {
            var renderTexture = new egret.RenderTexture();
            var brect = new egret.Rectangle(this.x, this.y, this._sourcebitmap.width, this._sourcebitmap.height);
            rect = brect.intersection(rect);
            rect.right = Math.ceil(this.tilemap.width / this.tilemap.tilewidth) * this.tilemap.tilewidth;
            rect.bottom = Math.ceil(this.tilemap.height / this.tilemap.tileheight) * this.tilemap.tileheight;
            //补充可能缺失的部分像素区域
            renderTexture.drawToTexture(this._sourcebitmap, rect);
            this._bitmap = new egret.Bitmap();
            this._bitmap.texture = renderTexture;
            this._bitmap.alpha = this._opacity;
            this._bitmap.visible = this.visible;
            this.addChild(this._bitmap);
        };
        return TMXImageLayer;
    }(tiled.TMXLayerBase));
    tiled.TMXImageLayer = TMXImageLayer;
    __reflect(TMXImageLayer.prototype, "tiled.TMXImageLayer");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXImageLayer.js.map