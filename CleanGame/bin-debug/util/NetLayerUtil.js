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
var NetLayerUtil = (function (_super) {
    __extends(NetLayerUtil, _super);
    function NetLayerUtil() {
        return _super.call(this) || this;
    }
    NetLayerUtil.prototype.addWaitLayer = function () {
        // ���Ƴ����е�netLayer
        this.removeChildren();
        // ��������layer
        var layer = new NetWait();
        this.curLayer = layer;
        this.addChild(layer);
    };
    NetLayerUtil.prototype.addOutLineLayer = function () {
        // ���Ƴ����е�netLayer
        this.removeChildren();
        // ��������layer
        var layer = new NetError("���˺����������ط���¼,�Ƿ����µ�¼?");
        this.curLayer = layer;
        this.addChild(layer);
    };
    NetLayerUtil.prototype.addErrorLayer = function () {
        // ���Ƴ����е�netLayer
        this.removeChildren();
        // ��������layer
        var layer = new NetError();
        this.curLayer = layer;
        this.addChild(layer);
    };
    NetLayerUtil.prototype.cleanLayer = function () {
        this.removeChildren();
    };
    return NetLayerUtil;
}(egret.DisplayObjectContainer));
__reflect(NetLayerUtil.prototype, "NetLayerUtil");
//# sourceMappingURL=NetLayerUtil.js.map