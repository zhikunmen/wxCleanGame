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
var ClickButton = (function (_super) {
    __extends(ClickButton, _super);
    function ClickButton() {
        var _this = _super.call(this) || this;
        _this.skinName = "ClickButtonSkin";
        return _this;
    }
    Object.defineProperty(ClickButton.prototype, "btnIcon", {
        get: function () {
            return this.icon.source;
        },
        set: function (png) {
            var btnTexture = RES.getRes(png);
            if (btnTexture) {
                this.icon.source = btnTexture;
                this.icon.x = this.icon.y = 0;
                this.width = btnTexture.textureWidth;
                this.height = btnTexture.textureHeight;
                this.anchorOffsetX = btnTexture.textureWidth / 2;
                this.anchorOffsetY = btnTexture.textureHeight / 2;
            }
        },
        enumerable: true,
        configurable: true
    });
    ClickButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        //if (instance == this.iconDisplay){
        //    this.iconDisplay.source = this._icon;
        //}
    };
    return ClickButton;
}(eui.Component));
__reflect(ClickButton.prototype, "ClickButton");
