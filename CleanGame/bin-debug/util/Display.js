var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Display = (function () {
    function Display() {
    }
    Object.defineProperty(Display, "winSize", {
        get: function () {
            this._winSize.width = egret.MainContext.instance.stage.stageWidth;
            this._winSize.height = egret.MainContext.instance.stage.stageHeight;
            this._winSize.cx = this._winSize.width / 2;
            this._winSize.cy = this._winSize.height / 2;
            return this._winSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Display, "stage", {
        get: function () {
            return egret.MainContext.instance.stage;
        },
        enumerable: true,
        configurable: true
    });
    Display._winSize = { width: 0, height: 0, cx: 0, cy: 0 };
    return Display;
}());
__reflect(Display.prototype, "Display");
//# sourceMappingURL=Display.js.map