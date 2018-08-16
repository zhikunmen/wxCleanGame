var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var DataVoMap = (function () {
        function DataVoMap() {
            this._dataContainer = {};
            this._keyContainer = {};
            // public resSoundGift(giftId: number): GiftVo {
            // 	return this.getDataVo(DataVoMap.GIFT, giftId.toString());
            // }
        }
        DataVoMap.getInstance = function () {
            if (!this._instance) {
                this._instance = new DataVoMap();
            }
            return this._instance;
        };
        //初始化表
        // public initTable(): void {
        // 	var gifts = RES.getRes("TableGift_json");
        // 	if (gifts) {
        // 		for (var i = 0; i < gifts.length; i++) {
        // 			var gift: GiftVo = new GiftVo;
        // 			gift.setData(gifts[i]);
        // 			this.setDataVo(DataVoMap.GIFT, gift.giftId.toString(), gift)
        // 		}
        // 	}
        // }
        DataVoMap.prototype.removeTable = function () {
            this._dataContainer = {};
            this._keyContainer = {};
        };
        DataVoMap.prototype.getDataVoList = function (name) {
            if (this._dataContainer[name]) {
                return this._dataContainer[name];
            }
            return null;
        };
        DataVoMap.prototype.getDataVoKeyList = function (name) {
            if (this._keyContainer[name]) {
                return this._keyContainer[name];
            }
            return null;
        };
        DataVoMap.prototype.getDataVoListLength = function (name) {
            if (this._keyContainer[name]) {
                return this._keyContainer[name].length;
            }
            return 0;
        };
        DataVoMap.prototype.getDataVo = function (name, key) {
            if (this._dataContainer[name] && this._dataContainer[name][key]) {
                return this._dataContainer[name][key];
            }
            return null;
        };
        DataVoMap.prototype.setDataVo = function (name, key, dataVo) {
            if (!this._keyContainer[name]) {
                this._keyContainer[name] = [];
            }
            if (!this._dataContainer[name]) {
                this._dataContainer[name] = {};
            }
            if (!this._dataContainer[name][key]) {
                this._keyContainer[name].push(key);
            }
            this._dataContainer[name][key] = dataVo;
        };
        DataVoMap.USERVO = "uservo";
        // public getUserVo(userId: number): UserVo {
        // 	return this.getDataVo(DataVoMap.USERVO, userId.toString());
        // }
        // public removeUserVo(userId: number): void {
        // 	var vo: UserVo = this.getDataVo(DataVoMap.USERVO, userId.toString());
        // 	if (vo) vo.reset();
        // }
        DataVoMap.GIFT = "gift";
        return DataVoMap;
    }());
    superslot.DataVoMap = DataVoMap;
    __reflect(DataVoMap.prototype, "superslot.DataVoMap");
})(superslot || (superslot = {}));
