

module lhj {
    export class StaticMgr {
        private static instance: StaticMgr;
        //从大厅传过来的游戏信息
        public gameInfo: any;
        //扩展参数
        public extData: any;
        //是否在移除的时候删除资源
        destroyResOnExit:any;
        //舞台高度
        public stageHeight: number = 0;
        //舞台宽度
        public stageWidth: number = 0;

        private constructor() {

        }
        public static getInstance(): StaticMgr {
            if (this.instance == null) this.instance = new StaticMgr();
            return <StaticMgr><any>(this.instance);
        }
    }
}