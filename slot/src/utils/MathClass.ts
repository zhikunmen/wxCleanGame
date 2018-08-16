module lhj {
	export class MathClass {
		public static Random_Seed: number = 1;
		public constructor() {
		}
		public static randRange(min: number, max: number): number {
			var num: number = max - min;
			var randomNum: number = Math.floor(Math.random() * num);
			return min + randomNum;
		}
		public static randSeadRange(min: number, max: number) {
			return Math.floor(Math.random()*(max-min+1)+min)
		}

        /**
         * 将一个数字格式化为亿，万，千
         * */
		public static formatNum(value: number): string {
			var str: string;
			if (value >= 100000000) {
				str = Math.floor(value / 100000000) + "亿";
			} else if (value >= 10000) {
				str = Math.floor(value / 10000) + "万";
			} else if (value >= 1000) {
				str = Math.floor(value / 1000) + "千";
			} else {
				str = value.toString();
			}
			return str;
		}
	}
}