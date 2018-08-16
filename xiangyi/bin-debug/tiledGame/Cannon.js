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
var Cannon = (function (_super) {
    __extends(Cannon, _super);
    function Cannon() {
        var _this = _super.call(this) || this;
        _this.skinName = "";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Cannon.prototype.addStage = function () {
    };
    Cannon.prototype.shoot = function (x, y) {
        // Ҫת������������
        // ��������֮���ĽǶ�
        var rotation = 90;
        var tw = egret.Tween.get(this.cannon);
        tw.to({ rotation: rotation }, 200).call(function () {
        }, this);
    };
    Cannon.prototype.changeCannon = function () {
        this.cannon.source = "";
        var texture = RES.getRes("");
        this.cannon.anchorOffsetX = texture.textureWidth / 2;
        this.cannon.anchorOffsetY = texture.textureHeight / 2;
    };
    return Cannon;
}(eui.Component));
__reflect(Cannon.prototype, "Cannon");
//# sourceMappingURL=Cannon.js.map