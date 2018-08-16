var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetMsg = (function () {
    function NetMsg() {
    }
    NetMsg.arr = {
        chat: { send: "chat.sendMsg" }
    };
    return NetMsg;
}());
__reflect(NetMsg.prototype, "NetMsg");
//# sourceMappingURL=NetMsg.js.map