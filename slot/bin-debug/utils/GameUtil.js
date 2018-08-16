var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        /**
        * 给字符串转变为
        * 三位带一个逗号 字符串形式
        * */
        GameUtil.getStringByChips = function (chips) {
            if (chips == "0" || chips == "" || chips == null)
                return "0";
            var reg = /(\d)(?=(?:\d{3})+\b)/g;
            var str = chips.replace(reg, "$1,");
            return str;
        };
        GameUtil.getChipsFromString = function (chips) {
            while (chips.indexOf(",") != -1) {
                chips = chips.replace(",", "");
            }
            var num = parseInt(chips);
            return num;
        };
        return GameUtil;
    }());
    lhj.GameUtil = GameUtil;
    __reflect(GameUtil.prototype, "lhj.GameUtil");
})(lhj || (lhj = {}));
