var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CfgFileMgr = (function () {
    function CfgFileMgr() {
    }
    CfgFileMgr.getLvCfgDatayId = function (v) {
        var format = Util.formatString(["%04s", v]);
        var json = RES.getRes("lvcfg_json");
        for (var k in json) {
            var item = json[k];
            var id = item["id"];
            if (id == format.toString()) {
                return item;
            }
        }
        return null;
    };
    return CfgFileMgr;
}());
__reflect(CfgFileMgr.prototype, "CfgFileMgr");
