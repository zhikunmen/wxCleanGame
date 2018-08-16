var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 函数代理，方便传递参数和函数执行空间地址，包含原始参数和附加参数。
* @author 交流联系方式 442924754@qq.com 梦之神仔
**/
var SuperSlotDelegateUtil = (function () {
    function SuperSlotDelegateUtil() {
    }
    /**
        * 函数代理，方便传递参数和函数执行空间地址，包含原始参数和附加参数。
        * @param thisArg 函数执行空间地址
        * @param fun 被代理的函数
        * @param funParameters 传递给被代理函数的参数
        * @return 代理函数
        * @throws "没有可代理的函数."
        */
    SuperSlotDelegateUtil.create = function (thisArg, fun) {
        var funParameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            funParameters[_i - 2] = arguments[_i];
        }
        if (!fun)
            throw "没有可代理的函数.";
        var tempFun = function tempFun() {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            fun.apply(thisArg, e.concat(funParameters));
            thisArg = null;
        };
        return tempFun;
    };
    /**
        * 函数代理，方便传递参数和函数执行空间地址，仅包含附加参数。
        * @param thisArg 函数执行空间地址
        * @param fun 被代理的函数
        * @param funParameters 传递给被代理函数的参数
        * @return 代理函数
        * @throws "没有可代理的函数."
        */
    SuperSlotDelegateUtil.createFilterOriginalParameters = function (thisArg, fun) {
        var funParameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            funParameters[_i - 2] = arguments[_i];
        }
        if (!fun)
            throw "没有可代理的函数.";
        var tempFun = function tempFun() {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            fun.apply(thisArg, funParameters);
        };
        return tempFun;
    };
    return SuperSlotDelegateUtil;
}());
__reflect(SuperSlotDelegateUtil.prototype, "SuperSlotDelegateUtil");
