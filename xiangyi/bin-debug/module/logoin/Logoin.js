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
var Logoin = (function (_super) {
    __extends(Logoin, _super);
    function Logoin() {
        var _this = _super.call(this) || this;
        _this.skinName = "LogoinSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Logoin.prototype.addStage = function () {
        this.width = ScreenMgr.instance.screenWidth;
        this.height = ScreenMgr.instance.screenHeight;
        console.error(this);
        this.initDB();
        this.beganBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBegan, this);
        var tw = egret.Tween.get(this.beganBtn, { loop: true });
        tw.to({ scaleX: 0.8, scaleY: 0.8 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000);
    };
    Logoin.prototype.initDB = function () {
        var data = RES.getRes("tree_json");
        var textureData = RES.getRes("textureTree_json");
        var texture = RES.getRes("textureTree_png");
        var dragonFactory = new dragonBones.EgretFactory();
        dragonFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(data));
        dragonFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = dragonFactory.buildArmature("Armature");
        this.treeGroup.addChild(armature.display);
        armature.display.x = 150;
        armature.display.y = 200;
        dragonBones.WorldClock.clock.add(armature);
        armature.animation.gotoAndPlay("run", -1, -1, 0);
        egret.Ticker.getInstance().register(function (frameTime) {
            dragonBones.WorldClock.clock.advanceTime(0.01);
        }, this);
    };
    Logoin.prototype.onBegan = function () {
        SoundsMgr.playBtn();
        SceneMgr.gotoIndex();
    };
    return Logoin;
}(eui.Component));
__reflect(Logoin.prototype, "Logoin");
//# sourceMappingURL=Logoin.js.map