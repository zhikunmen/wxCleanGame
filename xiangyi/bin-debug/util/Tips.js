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
var Tips = (function (_super) {
    __extends(Tips, _super);
    function Tips() {
        var _this = _super.call(this) || this;
        _this.bg = new eui.Image();
        _this.bg.source = RES.getRes("tips_png");
        _this.bg.scale9Grid = new egret.Rectangle(55, 12, 9, 4);
        _this.addChild(_this.bg);
        _this.width = 121;
        _this.height = 30;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.label = new eui.Label();
        _this.addChild(_this.label);
        _this.x = Display.winSize.width / 2;
        _this.y = Display.winSize.height - 100;
        egret.MainContext.instance.stage.addChildAt(_this, 100000);
        return _this;
    }
    Tips.prototype.show = function (str) {
        this.label.text = str;
        this.label.anchorOffsetX = this.label.width / 2;
        this.label.anchorOffsetY = this.label.height / 2;
        this.label.x = this.width / 2;
        this.label.y = this.height / 2;
        this.bg.width = this.label.width + 50;
        this.bg.height = this.label.height + 20;
        this.bg.anchorOffsetX = this.bg.width / 2;
        this.bg.anchorOffsetY = this.bg.height / 2;
        this.bg.x = this.width / 2;
        this.bg.y = this.height / 2;
        var tw = egret.Tween.get(this);
        tw.to({ x: Display.winSize.width / 2, y: Display.winSize.height - 200 }, 1500, egret.Ease.backOut)
            .call(this.callback, this);
    };
    Tips.prototype.callback = function () {
        this.parent.removeChild(this);
    };
    return Tips;
}(egret.DisplayObjectContainer));
__reflect(Tips.prototype, "Tips");
//# sourceMappingURL=Tips.js.map