var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ScreenMgr = (function () {
    function ScreenMgr() {
    }
    Object.defineProperty(ScreenMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ScreenMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenMgr.prototype, "screenWidth", {
        get: function () {
            return egret.MainContext.instance.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenMgr.prototype, "screenHeight", {
        get: function () {
            return egret.MainContext.instance.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenMgr.prototype, "designWidth", {
        get: function () {
            return this._designWidth;
        },
        set: function (width) {
            this._designWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenMgr.prototype, "designHeight", {
        get: function () {
            return this._designHeight;
        },
        set: function (height) {
            this._designHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    return ScreenMgr;
}());
__reflect(ScreenMgr.prototype, "ScreenMgr");
//# sourceMappingURL=ScreenMgr.js.map