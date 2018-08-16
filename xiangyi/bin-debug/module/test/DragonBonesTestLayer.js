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
var DragonBonesTestLayer = (function (_super) {
    __extends(DragonBonesTestLayer, _super);
    function DragonBonesTestLayer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    DragonBonesTestLayer.prototype.init = function () {
        var data = RES.getRes("Robot_json");
        var textureData = RES.getRes("texture_json");
        var texture = RES.getRes("texture_png");
        var dragonFactory = new dragonBones.EgretFactory();
        dragonFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(data));
        dragonFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = dragonFactory.buildArmature("Robot");
        this.addChild(armature.display);
        armature.display.x = 200;
        armature.display.y = 300;
        armature.display.scaleX = armature.display.scaleY = 0.5;
        dragonBones.WorldClock.clock.add(armature);
        armature.animation.gotoAndPlay("run");
        egret.Ticker.getInstance().register(function (frameTime) {
            dragonBones.WorldClock.clock.advanceTime(0.01);
        }, this);
    };
    return DragonBonesTestLayer;
}(egret.DisplayObjectContainer));
__reflect(DragonBonesTestLayer.prototype, "DragonBonesTestLayer");
//# sourceMappingURL=DragonBonesTestLayer.js.map