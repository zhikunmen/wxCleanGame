var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// ��״����
var EllipseShapData = (function () {
    function EllipseShapData() {
        this.ra = 0; //���뾶
        this.rb = 0; //�̰뾶
    }
    return EllipseShapData;
}());
__reflect(EllipseShapData.prototype, "EllipseShapData");
var PolygonShapData = (function () {
    function PolygonShapData() {
        this.pointArray = [];
    }
    return PolygonShapData;
}());
__reflect(PolygonShapData.prototype, "PolygonShapData");
var PolyLineShapData = (function () {
    function PolyLineShapData() {
        this.pointArray = [];
    }
    return PolyLineShapData;
}());
__reflect(PolyLineShapData.prototype, "PolyLineShapData");
var RectangleShapData = (function () {
    function RectangleShapData() {
        this.width = 0;
        this.height = 0;
    }
    return RectangleShapData;
}());
__reflect(RectangleShapData.prototype, "RectangleShapData");
//# sourceMappingURL=ShapData.js.map