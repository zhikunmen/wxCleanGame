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
// ��������
var CleanWithLineGameScene = (function (_super) {
    __extends(CleanWithLineGameScene, _super);
    function CleanWithLineGameScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    CleanWithLineGameScene.prototype.addStage = function () {
    };
    return CleanWithLineGameScene;
}(eui.Component));
__reflect(CleanWithLineGameScene.prototype, "CleanWithLineGameScene");
//# sourceMappingURL=CleanWithLineGameScene.js.map