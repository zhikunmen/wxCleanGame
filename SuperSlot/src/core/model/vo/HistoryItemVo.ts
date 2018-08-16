module superslot {
	export class HistoryItemVo {
		public isNew: boolean = false;
		public unit: Array<HistoryUnit> = [];
		public constructor() {

		}
		public setData(data): void {
			let index;
			if((data-1)%3 == 0){
				index = 0;
			}
			if((data-1)%3 == 1){
				index = 2;
			}
			if((data-1)%3 == 2){
				index = 1;
			}
			this.unit = [];
			var vo: HistoryUnit
			for (var i = 0; i < 3; i++) {
				vo = new HistoryUnit();
				if(i == index){
					vo.setData(index);
				}else{
					vo.setDefault();
				}
				this.unit.push(vo);
			}
		
		}
	}
	export class HistoryUnit {
		public textureImg: string;
		public constructor() {

		}
		public setData(num): void {
			switch(num){
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
		}
		public setDefault(): void{
			this.textureImg = "slwh_prize_4";
		}
	}
}