var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var ColorConst = (function () {
        function ColorConst() {
        }
        /**是否显示绿色桌布等  1显示 0不显示 */
        ColorConst.setGreen = function (num) {
            if (num === void 0) { num = 0; }
            if (num == 1) {
                this.green = "green_";
                this.greenFont = 0x50a351;
                this.greenFanghao = 0x50a351;
                this.resetFont = 0x6ff68f;
            }
        };
        ColorConst.green = "";
        ColorConst.greenFont = 0x6ba8c7;
        ColorConst.greenFanghao = 0x6da8c8;
        ColorConst.resetFont = 0xfff600;
        return ColorConst;
    }());
    lhj.ColorConst = ColorConst;
    __reflect(ColorConst.prototype, "lhj.ColorConst");
})(lhj || (lhj = {}));
