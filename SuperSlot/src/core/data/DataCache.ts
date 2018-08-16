module superslot {
	/**
	 *
	 * @author 
	 *
	 */
	export class DataCache {
		public static language: string;
		public static langObj: any;
		public static stageHight: number;
		public static stageWidth: number;
		public static defaultWidth: number = 1280;
		public static defaultHeight: number = 720;
		public static path: string = "";
		public static gameInfo: uniLib.IGameConfig;
		public static destroyResOnExit: boolean = false;
		public static plat: string;
		public static platParam: any;
		public static seatPosArr: Array<egret.Point> = [
			new egret.Point(10, 70),
			new egret.Point(10, 250),
			new egret.Point(10, 430),
			new egret.Point(DataCache.defaultWidth - 45, 70),
			new egret.Point(DataCache.defaultWidth - 45, 250),
			new egret.Point(DataCache.defaultWidth - 45, 430)
		];
		//下注区域
		public static BetAreaEndX: number[][] = [[290, 385], [490, 585], [690, 785], [890, 985], [280, 360]];
		public static BetAreaEndY: number[][] = [[280, 400], [280, 400], [280, 400], [280, 400], [20, 60]];
		
		public static getSeatPos(seatId: number): egret.Point {
			return this.seatPosArr[seatId];
		}
		public constructor() {
		}
	}
}
