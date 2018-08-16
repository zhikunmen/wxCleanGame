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
    /**
     *
     * @author
     *
     */
    var MildAlertVC = (function (_super) {
        __extends(MildAlertVC, _super);
        function MildAlertVC() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        MildAlertVC.prototype.initUI = function () {
            this._bg = lhj.ResUtil.createBitmapByName("tipsBg");
            this._bg.width = this._bg.width * 1.2;
            this._bg.height = this._bg.height * 1.2;
            this.addChild(this._bg);
            this._text = lhj.ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, "", 30, 88, 10, 786);
            this._text.multiline = true;
            this.addChild(this._text);
        };
        /**
         *
         * @param message
         *
         */
        MildAlertVC.prototype.setText = function (message) {
            if (!message) {
                return;
            }
            this._text.text = message;
            this._bg.height = this._text.textHeight * 2;
            this.y = lhj.DataCache.defaultHeight;
            egret.Tween.get(this).to({ y: Math.round((lhj.DataCache.defaultHeight - this.height) / 2) - 60 }, 500, egret.Ease.circOut).call(this.showDelay, this);
        };
        MildAlertVC.prototype.showDelay = function () {
            egret.Tween.get(this).wait(2000).to({ y: -this.height }, 500, egret.Ease.circOut).call(this.destory, this);
        };
        MildAlertVC.prototype.destory = function () {
            egret.Tween.removeTweens(this);
            lhj.ResUtil.removeAllChildren(this);
            lhj.ResUtil.removeFromParent(this);
            this._bg = null;
            this._text = null;
        };
        return MildAlertVC;
    }(egret.Sprite));
    lhj.MildAlertVC = MildAlertVC;
    __reflect(MildAlertVC.prototype, "lhj.MildAlertVC");
})(lhj || (lhj = {}));
