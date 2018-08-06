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
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    Fish.prototype.initView = function () {
        this.mc = Animation.makeAni("fish4");
        if (this.mc) {
            this.mc.gotoAndPlay("run", -1);
            this.addChild(this.mc);
        }
        var tw = egret.Tween.get(this);
        //tw.to({factor: 1}, 5000);
    };
    Fish.prototype.swimming = function () {
        var tw = egret.Tween.get(this, { loop: true });
        tw.to({ x: 480, y: 800 }, 4000);
    };
    // һ�㴫�������ڵ��ĵ�
    Fish.prototype.isUnderAtk = function (x, y) {
        var b = this.hitTestPoint(x, y);
    };
    Object.defineProperty(Fish.prototype, "factor", {
        //=================================================================================================
        // �ͱ����������й�
        get: function () {
            return 0;
        },
        set: function (value) {
            //������P0����(100,100)��P1����(300,300)��P2����(100,500)��
            this.x = (1 - value) * (1 - value) * 100 + 2 * value * (1 - value) * 300 + value * value * 100;
            this.y = (1 - value) * (1 - value) * 100 + 2 * value * (1 - value) * 300 + value * value * 500;
        },
        enumerable: true,
        configurable: true
    });
    return Fish;
}(eui.Component));
__reflect(Fish.prototype, "Fish");
//# sourceMappingURL=Fish.js.map