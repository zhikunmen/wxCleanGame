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
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        _this.skinName = "TestSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Test.prototype.addStage = function () {
        this.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtn, this);
        //this.initMusic();
    };
    Test.prototype.initMusic = function () {
        var music = RES.getRes("bg_mp3");
        if (music) {
            music.play(0, 1);
        }
    };
    Test.prototype.onBtn = function () {
        this.label.strokeColor = 0x00ff00;
        this.label.stroke = 1;
        var music = RES.getRes("bg_mp3");
        if (music) {
            music.play(0, 1);
        }
    };
    return Test;
}(eui.Component));
__reflect(Test.prototype, "Test");
