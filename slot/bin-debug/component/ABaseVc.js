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
    var BaseVc = (function (_super) {
        __extends(BaseVc, _super);
        function BaseVc(width, height) {
            var _this = _super.call(this) || this;
            if (width)
                _this._width = width;
            if (height)
                _this._height = height;
            _this.initUI();
            _this.Start();
            return _this;
        }
        BaseVc.prototype.initUI = function () {
        };
        BaseVc.prototype.setSize = function (width, height) {
        };
        BaseVc.prototype.Start = function () {
        };
        BaseVc.prototype.destory = function () {
            lhj.ResUtil.removeFromParent(this);
            lhj.ResUtil.removeAllChildren(this);
        };
        return BaseVc;
    }(egret.DisplayObjectContainer));
    lhj.BaseVc = BaseVc;
    __reflect(BaseVc.prototype, "lhj.BaseVc");
})(lhj || (lhj = {}));
