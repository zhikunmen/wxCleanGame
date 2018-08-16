var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var StaticMgr = (function () {
        function StaticMgr() {
            //舞台高度
            this.stageHeight = 0;
            //舞台宽度
            this.stageWidth = 0;
        }
        StaticMgr.getInstance = function () {
            if (this.instance == null)
                this.instance = new StaticMgr();
            return (this.instance);
        };
        return StaticMgr;
    }());
    superslot.StaticMgr = StaticMgr;
    __reflect(StaticMgr.prototype, "superslot.StaticMgr");
})(superslot || (superslot = {}));
