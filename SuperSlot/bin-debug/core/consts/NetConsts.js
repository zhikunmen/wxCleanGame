var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var NetConsts = (function () {
        function NetConsts() {
        }
        NetConsts.SUCCESS = 0;
        NetConsts.CANCLEOPEARET = 1;
        NetConsts.PRIORITY = 32; //优先级等待
        return NetConsts;
    }());
    superslot.NetConsts = NetConsts;
    __reflect(NetConsts.prototype, "superslot.NetConsts");
})(superslot || (superslot = {}));
