module superslot {
    export class ManageBox {
        private static instance: ManageBox;
        //弹框管理
        public BoxArray:Array<any>;
        //聊天气泡行数
		public qipaoLine: Array<number>;
		//聊天气泡宽度
        public chatLine: Array<number>;
        public static getInstance(): ManageBox {
            if (!this.instance) {
                this.instance = new ManageBox();
            }
            return this.instance;
        }
        public constructor() {
            this.init();
        }
        private init() {
            this.BoxArray = [];
            this.qipaoLine = [];
            this.chatLine = [];
        }
         /**手机返回键监听 */
        public destroyPanelByAndroid() {
            if (ManageBox.getInstance().BoxArray.length > 0) {
                ManageBox.getInstance().BoxArray[ManageBox.getInstance().BoxArray.length-1].dispatchEventWith(UIEventConsts.CLOSE);
            }else if(uniLib.SceneMgr.instance.currentScene.tipsLayer.getChildByName("lobbyChat")){
                uniLib.SceneMgr.instance.currentScene.tipsLayer.removeChild(uniLib.SceneMgr.instance.currentScene.tipsLayer.getChildByName("lobbyChat"));
            }else{
                egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.EXIT_GAME, false);
            }
        }
    }
}