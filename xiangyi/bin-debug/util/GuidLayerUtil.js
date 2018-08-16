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
var GuidLayerUtil = (function (_super) {
    __extends(GuidLayerUtil, _super);
    function GuidLayerUtil() {
        return _super.call(this) || this;
    }
    GuidLayerUtil.prototype.addGuidLayer = function () {
    };
    GuidLayerUtil.prototype.cleanGuidLayer = function () {
        this.removeChildren();
    };
    return GuidLayerUtil;
}(egret.DisplayObjectContainer));
__reflect(GuidLayerUtil.prototype, "GuidLayerUtil");
//# sourceMappingURL=GuidLayerUtil.js.map