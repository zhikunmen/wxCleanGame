var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CallBackFunc = (function () {
    function CallBackFunc() {
        this.callBack = null;
        this.thisObj = null;
        this.args = [];
    }
    CallBackFunc.prototype.handler = function (callBack, thisObj, args) {
        this.callBack = callBack;
        this.thisObj = thisObj;
        this.args = args;
        return this;
    };
    CallBackFunc.prototype.exec = function (execArgs) {
        if (execArgs === void 0) { execArgs = null; }
        if (execArgs) {
            this.args = execArgs;
        }
        if (this.callBack != null && this.thisObj != null) {
            return this.callBack.apply(this.thisObj, this.args);
        }
    };
    return CallBackFunc;
}());
__reflect(CallBackFunc.prototype, "CallBackFunc");
