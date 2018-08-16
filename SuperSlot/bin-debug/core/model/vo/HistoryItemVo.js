var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var HistoryItemVo = (function () {
        function HistoryItemVo() {
            this.isNew = false;
            this.unit = [];
        }
        HistoryItemVo.prototype.setData = function (data) {
            var index;
            if ((data - 1) % 3 == 0) {
                index = 0;
            }
            if ((data - 1) % 3 == 1) {
                index = 2;
            }
            if ((data - 1) % 3 == 2) {
                index = 1;
            }
            this.unit = [];
            var vo;
            for (var i = 0; i < 3; i++) {
                vo = new HistoryUnit();
                if (i == index) {
                    vo.setData(index);
                }
                else {
                    vo.setDefault();
                }
                this.unit.push(vo);
            }
        };
        return HistoryItemVo;
    }());
    superslot.HistoryItemVo = HistoryItemVo;
    __reflect(HistoryItemVo.prototype, "superslot.HistoryItemVo");
    var HistoryUnit = (function () {
        function HistoryUnit() {
        }
        HistoryUnit.prototype.setData = function (num) {
            switch (num) {
                case 0:
                    this.textureImg = "slwh_prize_1";
                    break;
                case 1:
                    this.textureImg = "slwh_prize_2";
                    break;
                case 2:
                    this.textureImg = "slwh_prize_3";
                    break;
            }
        };
        HistoryUnit.prototype.setDefault = function () {
            this.textureImg = "slwh_prize_4";
        };
        return HistoryUnit;
    }());
    superslot.HistoryUnit = HistoryUnit;
    __reflect(HistoryUnit.prototype, "superslot.HistoryUnit");
})(superslot || (superslot = {}));
