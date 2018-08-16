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
var IndexScene = (function (_super) {
    __extends(IndexScene, _super);
    function IndexScene() {
        var _this = _super.call(this) || this;
        _this.prePoint = new egret.Point();
        _this.indexUI = new IndexUI();
        _this.addChild(_this.indexUI);
        _this.skinName = "IndexSceneSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    IndexScene.prototype.addStage = function () {
        this.width = ScreenMgr.instance.screenWidth;
        this.height = ScreenMgr.instance.screenHeight;
        this.initData();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegan, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    IndexScene.prototype.initData = function () {
        this.list.addChild(new IndexGroup());
        //滚动到屏幕可见区域
        var arr = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 256,
            "5": 559,
            "6": 778,
            "7": 1000,
            "8": 1284,
            "9": 1461,
            "10": 1617,
            "11": 1640,
            "12": 1640,
            "13": 1640
        };
        this.list.scrollV = arr[PlayerData.data.fightLv.toString()];
    };
    IndexScene.prototype.onBegan = function (touch) {
        this.prePoint.x = touch.stageX;
        this.prePoint.y = touch.stageY;
    };
    IndexScene.prototype.onMove = function (touch) {
        var x = touch.stageX;
        var y = touch.stageY;
        var diffy = 0;
        this.prePoint.x = x;
        this.prePoint.y = y;
    };
    IndexScene.prototype.onEnd = function (touch) {
        this.prePoint.x = touch.stageX;
        this.prePoint.y = touch.stageY;
    };
    return IndexScene;
}(eui.Component));
__reflect(IndexScene.prototype, "IndexScene");
//# sourceMappingURL=IndexScene.js.map