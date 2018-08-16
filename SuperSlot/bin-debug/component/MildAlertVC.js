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
var superslot;
(function (superslot) {
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
            this._bg = this.createBitmapByName("sz_Toast_png");
            this._bg.width = this._bg.width * 1.2;
            this._bg.height = this._bg.height * 1.2;
            this.addChild(this._bg);
            this._text = this.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, "", 30, 88, 10, 786);
            this._text.multiline = true;
            this.addChild(this._text);
        };
        MildAlertVC.prototype.createTextFeild = function (color, align, text, size, x, y, width, isBold, space) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = -1; }
            if (isBold === void 0) { isBold = false; }
            if (space === void 0) { space = 0; }
            var tf = new egret.TextField();
            if (width != -1) {
                tf.width = width;
            }
            tf.fontFamily = "微软雅黑";
            tf.bold = isBold;
            tf.textColor = color;
            tf.textAlign = align;
            tf.text = text;
            tf.size = size;
            tf.lineSpacing = space;
            tf.x = x;
            tf.y = y;
            tf.multiline = false;
            return tf;
        };
        MildAlertVC.prototype.createBitmapByName = function (name, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            result.smoothing = true;
            result.x = x;
            result.y = y;
            return result;
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
            var strUIR = message;
            this._text.textFlow = (new egret.HtmlTextParser).parser(decodeURIComponent(strUIR));
            if (this._text.textWidth + 22 >= this._text.width) {
                this._text.textAlign = egret.HorizontalAlign.LEFT;
            }
            this._bg.height = this._text.textHeight * 4;
            this._text.y = Math.floor(this._bg.height / 2) - (this._bg.height * 0.26);
            // this._text.y =  (this._text.textHeight/1)-5; 
            this.x = Math.round((uniLib.Global.screenWidth - this.width) / 2);
            this.y = Math.round((uniLib.Global.screenHeight - this.height) / 2);
            this.showDelay();
        };
        MildAlertVC.prototype.showDelay = function () {
            egret.Tween.get(this).wait(2000).to({ alpha: 0 }, 2000, egret.Ease.circOut).call(this.destory, this);
        };
        MildAlertVC.prototype.destory = function () {
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
            this._bg = null;
            this._text = null;
        };
        return MildAlertVC;
    }(egret.Sprite));
    superslot.MildAlertVC = MildAlertVC;
    __reflect(MildAlertVC.prototype, "superslot.MildAlertVC");
})(superslot || (superslot = {}));
