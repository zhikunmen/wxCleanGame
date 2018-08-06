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
var LoseLayer = (function (_super) {
    __extends(LoseLayer, _super);
    function LoseLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoseLayerSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        SoundsMgr.lose();
        return _this;
    }
    LoseLayer.prototype.addStage = function () {
        this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgain, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    LoseLayer.prototype.onAgain = function () {
        SceneMgr.rePlayLv();
    };
    LoseLayer.prototype.onClose = function () {
        Director.getInstance().repleaceScene(new IndexScene());
    };
    return LoseLayer;
}(eui.Component));
__reflect(LoseLayer.prototype, "LoseLayer");
//# sourceMappingURL=LoseLayer.js.map