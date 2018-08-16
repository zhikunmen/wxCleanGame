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
var FishScene = (function (_super) {
    __extends(FishScene, _super);
    function FishScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    FishScene.prototype.addStage = function () {
        var fish = new Fish();
        fish.x = 0;
        fish.y = 0;
        fish.swimming();
        this.addChild(fish);
        this.initBg();
        this.initCannon();
    };
    FishScene.prototype.initBg = function () {
        var bg = new eui.Image("scenebg1_jpg");
        bg.width = Display.winSize.width;
        bg.height = Display.winSize.height;
        this.addChild(bg);
    };
    FishScene.prototype.initCannon = function () {
    };
    return FishScene;
}(eui.Component));
__reflect(FishScene.prototype, "FishScene");
//# sourceMappingURL=FishScene.js.map