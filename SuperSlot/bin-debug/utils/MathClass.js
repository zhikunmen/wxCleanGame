var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var MathClass = (function () {
        function MathClass() {
        }
        MathClass.randRange = function (min, max) {
            var num = max - min;
            var randomNum = Math.floor(Math.random() * num);
            return min + randomNum;
        };
        MathClass.randSeadRange = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        /**
         * 将一个数字格式化为亿，万，千
         * */
        MathClass.formatNum = function (value) {
            var str;
            if (value >= 100000000) {
                str = Math.floor(value / 100000000) + "亿";
            }
            else if (value >= 10000) {
                str = Math.floor(value / 10000) + "万";
            }
            else if (value >= 1000) {
                str = Math.floor(value / 1000) + "千";
            }
            else {
                str = value.toString();
            }
            return str;
        };
        MathClass.Random_Seed = 1;
        return MathClass;
    }());
    superslot.MathClass = MathClass;
    __reflect(MathClass.prototype, "superslot.MathClass");
})(superslot || (superslot = {}));
