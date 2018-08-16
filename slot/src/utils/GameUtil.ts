
module lhj{
    export class GameUtil{
        /**
        * 给字符串转变为
        * 三位带一个逗号 字符串形式
        * */
        public static getStringByChips(chips: string): string {
            if (chips == "0" || chips == "" || chips == null) return "0";
            var reg: RegExp = /(\d)(?=(?:\d{3})+\b)/g;
            var str: string = chips.replace(reg, "$1,");
            return str;
        }

        public static getChipsFromString(chips: string): number {
            while (chips.indexOf(",") != -1) {
                chips = chips.replace(",", "");
            }
            var num: number = parseInt(chips);

            return num;
        }
    }
}