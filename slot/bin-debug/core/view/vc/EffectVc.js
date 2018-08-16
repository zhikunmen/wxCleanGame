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
var lhj;
(function (lhj) {
    var EffectVc = (function (_super) {
        __extends(EffectVc, _super);
        function EffectVc() {
            return _super.call(this) || this;
        }
        EffectVc.prototype.destory = function () {
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeFromParent(this);
            uniLib.DisplayUtils.removeAllChildren(this);
        };
        return EffectVc;
    }(eui.Component));
    lhj.EffectVc = EffectVc;
    __reflect(EffectVc.prototype, "lhj.EffectVc");
})(lhj || (lhj = {}));
