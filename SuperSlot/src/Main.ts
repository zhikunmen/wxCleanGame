
class SuperSlotMain extends uniLib.GameDoc {
    private effectArr: Array<dragonBones.Armature>;
    private resLoading: any = null;
    public constructor(param?: any) {
        super(param);
        // console.error("param",param);

        if (this._gameInfo) {
            // console.error("slwh.StaticMgr.getInstance().gameInfo",slwh.StaticMgr.getInstance().gameInfo);

            superslot.StaticMgr.getInstance().gameInfo = this._gameInfo;
            if (this._gameInfo.preloadUI) {
                this.resLoading = this._gameInfo.preloadUI;
            } else {
                this.resLoading = null;
            }
        }
        if (param && param.destroyResOnExit) {
            superslot.StaticMgr.getInstance().destroyResOnExit = param.destroyResOnExit;
        }
        if (this._gameInfo && this._gameInfo.extData) {
            superslot.StaticMgr.getInstance().extData = this._gameInfo.extData;
        }

        // console.error("this.this._gameInfo", this._gameInfo);

        this.effectArr = [];
        egret.MainContext.instance.stage.setContentSize(1280, 720);

    }
    public start(e: egret.Event = null): void {
        uniLib.Utils.clearLocalStorage();
        egret.ImageLoader.crossOrigin = "anonymous";
        var initData: uniLib.initOptions = <uniLib.initOptions>{};
        initData.designWidth = 1280;
        initData.designHeight = 720;
        initData.debug = true;
        initData.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
        uniLib.init(initData);
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        RES.setMaxLoadingThread(6);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        // uniLib.UIMgr.instance.hideLoading()
    }
    private onThemeLoadComplete(): void {
        this.preLoadEnd();
    }
    public preLoadEnd(): void {
        // uniLib.UIMgr.instance.hideLoading();
        var strArr: Array<string> = [];
        // if (uniLib.Global.lobbyMode) {
            strArr = ["SuperSlot_Poker"];
        // }
        // else {
            // strArr = ["slwh_Poker", "sz_lbCommonRes", "CommonUI"];
        // }
        RES.createGroup("sz_all", strArr);
        uniLib.ResLoadMgr.instance.load("sz_all", this.createGameScene, null, this, this.resLoading, false);
    }
    private startEffect(): void {
        var movie = uniLib.DragonUtils.showFastDragon("game_start_effect", "gameStart", "MovieClip", uniLib.Global.screenWidth / 2, uniLib.Global.screenHeight / 2, egret.MainContext.instance.stage, 1, 1, "gameStart");
        movie.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, () => {
            uniLib.DragonUtils.removeFastDragonByKey("gameStart");
        }, this);
    }
    /**
     * 创建游戏场景
     * Create a WLT scene
     */
    private createGameScene(): void {
        superslot.StaticMgr.getInstance().stageWidth = uniLib.Global.screenWidth;
        superslot.StaticMgr.getInstance().stageHeight = uniLib.Global.screenHeight;
        //启动mvc
        uniLib.SceneMgr.instance.changeScene(superslot.superslotGameScene);
    }
    public resize(): void {

    }
}


