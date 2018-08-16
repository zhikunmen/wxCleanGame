module lhj {
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
			new egret.Point(45, 80),
			new egret.Point(45, 210),
			new egret.Point(45, 340),
			new egret.Point(45, 470),
			new egret.Point(DataCache.defaultWidth - 45, 80),
			new egret.Point(DataCache.defaultWidth - 45, 210),
			new egret.Point(DataCache.defaultWidth - 45, 340),
			new egret.Point(DataCache.defaultWidth - 45, 470)
		];
		//下注区域
		public static BetAreaEndX: number[][] = [[230, 300], [450, 520], [660, 730], [870, 940], [280, 360]];
		public static BetAreaEndY: number[][] = [[200, 270], [200, 270], [200, 270], [200, 270], [20, 60]];
		public static getStartPos(x: number, y: number, width: number, height: number, betId: number): egret.Point {
			//筹码距离左右长度
			let lengthX = 50;
			//筹码距离上下长度
			let lengthY = 60;
			if (betId == 1 || betId == 4) {
				// lengthY = 60;
			} else {
				lengthX = 25;
				lengthY = 45;
			}
			//筹码在x轴范围内下落随机位置
			let startX = x + lengthX + (width - lengthX * 2) * Math.random();
			//筹码在y轴范围内下落随机位置
			let startY = y + lengthY + (height - lengthY * 2) * Math.random();
			return new egret.Point(startX, startY);
		}
		public static getSeatPos(seatId: number): egret.Point {
			return this.seatPosArr[seatId];
		}
		public static getChipsPos(seatId: number): egret.Point {
			let pointX = this.seatPosArr[seatId-1].x;
			let pointY = this.seatPosArr[seatId-1].y + 40;
			let point = new egret.Point(pointX,pointY);
			return point;
		}
		public constructor() {
		}
		public static setX():void{
			for(var i=0;i<this.seatPosArr.length;i++){
				if(i>3){
					this.seatPosArr[i].x = uniLib.Global.screenWidth - 45
				}
			}
		}
	}
}
