var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    /**
     * TMX常量数据
     */
    var TMXConstants = (function () {
        function TMXConstants() {
        }
        /**
         * @version Egret 3.0.3
         */
        TMXConstants.TMX_FLIP_H = 0x80000000;
        /**
         * @version Egret 3.0.3
         */
        TMXConstants.TMX_FLIP_V = 0x40000000;
        /**
         * @version Egret 3.0.3
         */
        TMXConstants.TMX_FLIP_AD = 0x20000000;
        /**
         * @version Egret 3.0.3
         */
        TMXConstants.TMX_CLEAR_BIT_MASK = ~(0x80000000 | 0x40000000 | 0x20000000);
        /**
         * 图层
         * @version Egret 3.0.3
         */
        TMXConstants.LAYER = "layer";
        /**
         * 对象组
         * @version Egret 3.0.3
         */
        TMXConstants.OBJECT_GROUP = "objectgroup";
        /**
         * 属性
         * @version Egret 3.0.3
         */
        TMXConstants.PROPERTIES = "properties";
        /**
         * 数据
         * @version Egret 3.0.3
         */
        TMXConstants.DATA = "data";
        /**
         * 对象
         * @version Egret 3.0.3
         */
        TMXConstants.OBJECT = "object";
        /**
         * 图像
         * @version Egret 3.0.3
         */
        TMXConstants.IMAGE = "image";
        /**
         * 图像层
         * @version Egret 3.0.3
         */
        TMXConstants.IMAGE_LAYER = "imagelayer";
        /**
         * Tile设置
         * @version Egret 3.0.3
         */
        TMXConstants.TILE_SET = "tileset";
        /**
         * Tile
         * @version Egret 3.0.3
         */
        TMXConstants.TILE = "tile";
        /**
         * Tile偏移
         * @version Egret 3.0.3
         */
        TMXConstants.TILE_OFFSET = "tileoffset";
        /**
         * 动画
         * @version Egret 3.0.3
         */
        TMXConstants.ANIMATION = "animation";
        /**
         * 默认颜色
         * @version Egret 3.0.3
         */
        TMXConstants.DEFAULT_COLOR = 0xa0a0a4;
        /**
         * 绘图索引
         * @version Egret 3.0.3
         */
        TMXConstants.DRAWORDER_INDEX = "index";
        /**
         * 多边形
         * @version Egret 3.0.3
         */
        TMXConstants.POLYGON = "polygon";
        /**
         * 折线
         * @version Egret 3.0.3
         */
        TMXConstants.POLYLINE = "polyline";
        /**
         * 椭圆
         * @version Egret 3.0.3
         */
        TMXConstants.ELLIPSE = "ellipse";
        /**
         * tile对象组
         * @version Egret 3.0.3
         */
        TMXConstants.TILE_OBJECT_GROUP = "tileobjectgroup";
        /**
         * 正交
         * @version Egret 3.0.3
         */
        TMXConstants.ORIENTATION_ORTHOGONAL = "orthogonal";
        /**
         * 等矩
         * @version Egret 3.0.3
         */
        TMXConstants.ORIENTATION_ISOMETRIC = "isometric";
        /**
         * 交错
         * @version Egret 3.0.3
         */
        TMXConstants.ORIENTATION_STAGGERED = "staggered";
        /**
         * 六角
         * @version Egret 3.0.3
         */
        TMXConstants.ORIENTATION_HEXAGONAL = "hexagonal";
        return TMXConstants;
    }());
    tiled.TMXConstants = TMXConstants;
    __reflect(TMXConstants.prototype, "tiled.TMXConstants");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXConstants.js.map