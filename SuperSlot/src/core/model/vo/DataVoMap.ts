
module superslot {
	export class DataVoMap {
		private static _instance: DataVoMap;
		public static getInstance(): DataVoMap {
			if (!this._instance) {
				this._instance = new DataVoMap();
			}
			return this._instance;
		}
		private _dataContainer = {};

		private _keyContainer = {};

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
		public removeTable(): void {
			this._dataContainer = {};
			this._keyContainer = {};
		}

		public getDataVoList(name: string) {
			if (this._dataContainer[name]) {
				return this._dataContainer[name];
			}
			return null;
		}

		public getDataVoKeyList(name: string): Array<any> {
			if (this._keyContainer[name]) {
				return this._keyContainer[name];
			}
			return null;
		}

		public getDataVoListLength(name: string): number {
			if (this._keyContainer[name]) {
				return this._keyContainer[name].length;
			}
			return 0;
		}

		private getDataVo(name: string, key: string) {
			if (this._dataContainer[name] && this._dataContainer[name][key]) {
				return this._dataContainer[name][key];
			}
			return null;
		}

		public setDataVo(name: string, key: string, dataVo: any): void {
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
		}

		public static USERVO: string = "uservo";
		// public getUserVo(userId: number): UserVo {
		// 	return this.getDataVo(DataVoMap.USERVO, userId.toString());
		// }
		// public removeUserVo(userId: number): void {
		// 	var vo: UserVo = this.getDataVo(DataVoMap.USERVO, userId.toString());
		// 	if (vo) vo.reset();
		// }
		public static GIFT: string = "gift";
		// public resSoundGift(giftId: number): GiftVo {
		// 	return this.getDataVo(DataVoMap.GIFT, giftId.toString());
		// }
	}
}