var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var RoomInfo = (function () {
        function RoomInfo() {
            //玩家当前选择的筹码档
            this.selectChipsValue = 0;
            this.index = 0;
            //是否加速模式
            this.isAdd = false;
        }
        RoomInfo.getInstance = function () {
            if (!this.instance) {
                this.instance = new RoomInfo();
            }
            return this.instance;
        };
        return RoomInfo;
    }());
    lhj.RoomInfo = RoomInfo;
    __reflect(RoomInfo.prototype, "lhj.RoomInfo");
})(lhj || (lhj = {}));
