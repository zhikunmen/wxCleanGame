var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SuperSlotMain = (function (_super) {
    __extends(SuperSlotMain, _super);
    function SuperSlotMain(param) {
        var _this = _super.call(this, param) || this;
        _this.resLoading = null;
        // console.error("param",param);
        if (_this._gameInfo) {
            // console.error("slwh.StaticMgr.getInstance().gameInfo",slwh.StaticMgr.getInstance().gameInfo);
            superslot.StaticMgr.getInstance().gameInfo = _this._gameInfo;
            if (_this._gameInfo.preloadUI) {
                _this.resLoading = _this._gameInfo.preloadUI;
            }
            else {
                _this.resLoading = null;
            }
        }
        if (param && param.destroyResOnExit) {
            superslot.StaticMgr.getInstance().destroyResOnExit = param.destroyResOnExit;
        }
        if (_this._gameInfo && _this._gameInfo.extData) {
            superslot.StaticMgr.getInstance().extData = _this._gameInfo.extData;
        }
        // console.error("this.this._gameInfo", this._gameInfo);
        _this.effectArr = [];
        egret.MainContext.instance.stage.setContentSize(1280, 720);
        return _this;
    }
    SuperSlotMain.prototype.start = function (e) {
        if (e === void 0) { e = null; }
        egret.ImageLoader.crossOrigin = "anonymous";
        var initData = {};
        initData.designWidth = 1280;
        initData.designHeight = 720;
        initData.debug = true;
        initData.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
        uniLib.init(initData);
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        RES.setMaxLoadingThread(6);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    SuperSlotMain.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        // uniLib.UIMgr.instance.hideLoading()
    };
    SuperSlotMain.prototype.onThemeLoadComplete = function () {
        this.preLoadEnd();
    };
    SuperSlotMain.prototype.preLoadEnd = function () {
        // uniLib.UIMgr.instance.hideLoading();
        var strArr = [];
        // if (uniLib.Global.lobbyMode) {
        strArr = ["SuperSlot_Poker"];
        // }
        // else {
        // strArr = ["slwh_Poker", "sz_lbCommonRes", "CommonUI"];
        // }
        RES.createGroup("sz_all", strArr);
        uniLib.ResLoadMgr.instance.load("sz_all", this.createGameScene, null, this, this.resLoading, false);
    };
    SuperSlotMain.prototype.startEffect = function () {
        var movie = uniLib.DragonUtils.showFastDragon("game_start_effect", "gameStart", "MovieClip", uniLib.Global.screenWidth / 2, uniLib.Global.screenHeight / 2, egret.MainContext.instance.stage, 1, 1, "gameStart");
        movie.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, function () {
            uniLib.DragonUtils.removeFastDragonByKey("gameStart");
        }, this);
    };
    /**
     * 创建游戏场景
     * Create a WLT scene
     */
    SuperSlotMain.prototype.createGameScene = function () {
        superslot.StaticMgr.getInstance().stageWidth = uniLib.Global.screenWidth;
        superslot.StaticMgr.getInstance().stageHeight = uniLib.Global.screenHeight;
        //启动mvc
        uniLib.SceneMgr.instance.changeScene(superslot.superslotGameScene);
    };
    SuperSlotMain.prototype.resize = function () {
    };
    return SuperSlotMain;
}(uniLib.GameDoc));
__reflect(SuperSlotMain.prototype, "SuperSlotMain");
