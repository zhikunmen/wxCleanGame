module lhj {
    export class Main extends uniLib.GameDoc {
        public constructor(param?: any) {
            super(param);
            egret.ImageLoader.crossOrigin = "anonymous";
            if (this._gameInfo) {
                lhj.StaticMgr.getInstance().gameInfo = this._gameInfo;
            }
            if (param && param.destroyResOnExit) {
                lhj.StaticMgr.getInstance().destroyResOnExit = param.destroyResOnExit;
            }
            if (this._gameInfo && this._gameInfo.extData) {
                lhj.StaticMgr.getInstance().extData = this._gameInfo.extData;
            }
        }
        public start(e: egret.Event = null): void {
            var initData: uniLib.initOptions = <uniLib.initOptions>{};
            initData.designWidth = 1280;
            initData.designHeight = 720;
            initData.debug = true;
            initData.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
            if (DEBUG) {
                initData.CdnDomains = ["http://192.168.130.172/"];
                // initData.CdnDomains = ["http://h5.publish.gamelaoyou.com"]
            }
            uniLib.init(initData);

            // let option: chessCommonLib.initOptions = new chessCommonLib.initOptions();
            // chessCommonLib.init(option, () => {
            //     console.error("game chessCommonLib load success");
            // }, this);
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR, this.onLoadError, this);
            let resource = "resource/default.res.json";
            RES.loadConfig(resource, "resource/");
            let assetAdapter = new AssetAdapter();
            egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            RES.setMaxLoadingThread(6);
        }
        //资源加载失败
        //资源加载失败处理
        private countGroupError: number = 0;
        private onLoadError(event: RES.ResourceEvent) {
            if (++this.countGroupError < 3) {
                console.warn('${event.groupName}资源组加载失败，重试第${this.countGroupError}次');
                uniLib.ResLoadMgr.instance.load(event.groupName, this.createGameScene, null, this, null)
            } else {
                console.warn('${event.groupName}资源组加载失败,返回大厅');
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadError, this);
                // if()
                uniLib.GameModuleUtils.ExitGame(false);
                RES.destroyRes(event.groupName, true);
                uniLib.ResUtils.clearResConfigByGroupName([event.groupName]);
                uniLib.UIMgr.instance.hideLoading();
            }
        }
        /**
         * 配置文件加载完成,开始预加载preload资源组。
         * configuration file loading is completed, start to pre-load the preload resource group
         */
        private onConfigComplete(event: RES.ResourceEvent): void {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            let theme;
            let themeConfig = "resource/default.thm.json";
            theme = new eui.Theme(themeConfig, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        }
        private onThemeLoadComplete(): void {
            this.preLoadEnd();
        }
        private loadStartEffect(): void {
            // var strArr: Array<string> = [];
            // strArr = [
            //     "lhj"
            // ];

            // if (DEBUG) {//debug
            //     strArr.push(chessCommonLib.GrpConsts.CHESS_COMMON_TEST);
            // }
            // this.loadGameRes();
            uniLib.ResLoadMgr.instance.loadGrps(["lhj"], this.loadGameRes, null, this, LoadingUI, false);
        }
        public preLoadEnd(): void {
            // uniLib.ResLoadMgr.instance.load("start_effect", this.loadStartEffect, null, this, HBPoker.LoadingUI, false);
            this.loadStartEffect();
        }
        private loadGameRes() {
            //uniLib.UIMgr.instance.showProcessBar(null, 2, 100, "正在加载游戏资源...");
            // if (uniLib.Global.lobbyMode) {
            // if (DEBUG) {
            // chessCommonLib.ConfigMgr.getInstance().initTables();
            // }

            this.createGameScene();
            // } else {
            //     var strArr: Array<string> = [];
            //     strArr = ["CommonUI", "mjl_LbCommonRes"];
            //     uniLib.ResLoadMgr.instance.loadGrps(strArr, this.createGameScene, null, this, HBPoker.LoadingUI);
            // }
        }
        /**
         * 创建游戏场景
         * Create a WLT scene
         */
        private createGameScene(): void {

            lhj.StaticMgr.getInstance().stageWidth = uniLib.Global.screenWidth;
            lhj.StaticMgr.getInstance().stageHeight = uniLib.Global.screenHeight;
            //启动mvc
            uniLib.SceneMgr.instance.changeScene(lhj.LHJGameScene);
        }
        public resize(): void {

        }
    }
}
