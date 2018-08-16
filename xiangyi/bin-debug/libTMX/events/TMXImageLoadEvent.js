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
    var TMXImageLoadEvent = (function (_super) {
        __extends(TMXImageLoadEvent, _super);
        /**
         * Tile中图片加载完成事件
         * @param type 事件的类型，可以作为 TMXImageLoadEvent.type 访问。
         * @param texture 事件在IMAGE_COMPLETE完成后所带的纹理
         * @param bubbles 确定 TMXImageLoadEvent 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 TMXImageLoadEvent 对象。默认值为 false。
         * @version Egret 3.0.3
         */
        function TMXImageLoadEvent(type, texture, bubbles, cancelable) {
            if (texture === void 0) { texture = null; }
            if (bubbles === void 0) { bubbles = true; }
            if (cancelable === void 0) { cancelable = false; }
            var _this = _super.call(this, type, bubbles, cancelable) || this;
            _this.texture = texture;
            return _this;
        }
        /**
         * 单张图片加载完成
         * @version Egret 3.0.3
         */
        TMXImageLoadEvent.IMAGE_COMPLETE = "complete";
        /**
         * 所有图片加载完成
         * @version Egret 3.0.3
         */
        TMXImageLoadEvent.ALL_IMAGE_COMPLETE = "allComplete";
        return TMXImageLoadEvent;
    }(egret.Event));
    tiled.TMXImageLoadEvent = TMXImageLoadEvent;
    __reflect(TMXImageLoadEvent.prototype, "tiled.TMXImageLoadEvent");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXImageLoadEvent.js.map