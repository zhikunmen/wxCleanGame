var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    /**
     * 属性VO,存储map、tileset、tile相关属性数据
     */
    var TMXProperty = (function () {
        function TMXProperty() {
            /**
             * id
             * @version Egret 3.0.3
             * */
            this.gid = 0;
        }
        return TMXProperty;
    }());
    tiled.TMXProperty = TMXProperty;
    __reflect(TMXProperty.prototype, "tiled.TMXProperty");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXProperty.js.map