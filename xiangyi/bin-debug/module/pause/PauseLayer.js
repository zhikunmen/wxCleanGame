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
var PauseLayer = (function (_super) {
    __extends(PauseLayer, _super);
    function PauseLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "PauseLayerSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    PauseLayer.prototype.addStage = function () {
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundsMgr.playBtn();
            // �ص���Ϸ
            if (this.parent) {
                this.parent.removeChild(this);
            }
        }, this);
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundsMgr.playBtn();
            // ���¿�ʼ
            SceneMgr.rePlayLv();
        }, this);
        this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundsMgr.playBtn();
            //�˳�
            Director.getInstance().repleaceScene(new IndexScene());
        }, this);
    };
    return PauseLayer;
}(eui.Component));
__reflect(PauseLayer.prototype, "PauseLayer");
