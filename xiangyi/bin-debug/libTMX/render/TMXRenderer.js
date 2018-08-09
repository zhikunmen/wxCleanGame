var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    var TMXRenderer = (function () {
        /**
         * 渲染器基类
         * @param rows 水平方向格子数
         * @param cols 垂直方向格子数
         * @param tilewidth 格子宽（单位：像素）
         * @param tileheight 格子高（单位：像素）
         * @version Egret 3.0.3
         */
        function TMXRenderer(rows, cols, tilewidth, tileheight) {
            this.rows = rows;
            this.cols = cols;
            this.tilewidth = tilewidth;
            this.tileheight = tileheight;
            this.animationTiles = [];
        }
        /**
         * 是否能够渲染
         * @param layer
         * @version Egret 3.0.3
         * @private
         */
        TMXRenderer.prototype.canRender = function (layer) {
            return ((this.cols === layer.cols) &&
                (this.rows === layer.rows) &&
                (this.tilewidth === layer.tilewidth) &&
                (this.tileheight === layer.tileheight));
        };
        /**
         * 绘制Tile图层
         * @param layer
         * @param rect
         * @version Egret 3.0.3
         */
        TMXRenderer.prototype.drawTileLayer = function (layer, rect) {
        };
        /**
         * 绘制Tile
         * @param renderer 渲染容器
         * @param tileX 水平格子坐标
         * @param tileY 垂直格子坐标
         * @param tile TMXTile实例
         * @version Egret 3.0.3
         */
        TMXRenderer.prototype.drawTile = function (renderer, tileX, tileY, tile) {
        };
        /**
         * 渲染动画
         * @param renderContainer
         * @version Egret 3.0.3
         */
        TMXRenderer.prototype.render = function (renderContainer) {
            if (!this.animationTiles)
                return;
            var currentTime = egret.getTimer();
            for (var i = 0; i < this.animationTiles.length; i++) {
                var animationInfo = this.animationTiles[i];
                var tmxTile = animationInfo.tmxTile;
                var pos = animationInfo.pos;
                var animation = tmxTile.animation;
                var frame = animation.currentAnimationFrame;
                if (animation["oldTime"] == undefined)
                    animation["oldTime"] = 0;
                if (currentTime - animation["oldTime"] > frame.duration) {
                    if (animation.oldBitmap && animation.oldBitmap.parent)
                        animation.oldBitmap.parent.removeChild(animation.oldBitmap);
                    this.drawTile(renderContainer, pos[0], pos[1], frame.tile);
                    animation.oldBitmap = frame.tile.bitmap;
                    animation["oldTime"] = currentTime;
                    animation.render();
                }
            }
        };
        return TMXRenderer;
    }());
    tiled.TMXRenderer = TMXRenderer;
    __reflect(TMXRenderer.prototype, "tiled.TMXRenderer");
})(tiled || (tiled = {}));
