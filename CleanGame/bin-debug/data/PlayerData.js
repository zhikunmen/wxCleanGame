var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerData = (function () {
    function PlayerData() {
    }
    PlayerData.saveLv = function (lv) {
        if (lv >= this.data.fightLv) {
            this.data.fightLv = lv;
        }
        this.save();
    };
    PlayerData.initData = function () {
        var localData = egret.localStorage.getItem("gameLocalData");
        if (localData) {
            this.data = JSON.parse(localData);
        }
    };
    PlayerData.save = function () {
        var s = JSON.stringify(this.data);
        egret.localStorage.setItem("gameLocalData", s);
    };
    PlayerData.data = { fightLv: "1", gold: 0, heart: 0 }; // ս���Ĺؿ�
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
//# sourceMappingURL=PlayerData.js.map