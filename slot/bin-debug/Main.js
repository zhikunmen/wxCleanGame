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
var lhj;
(function (lhj) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main(param) {
            var _this = _super.call(this, param) || this;
            //资源加载失败
            //资源加载失败处理
            _this.countGroupError = 0;
            egret.ImageLoader.crossOrigin = "anonymous";
            if (_this._gameInfo) {
                lhj.StaticMgr.getInstance().gameInfo = _this._gameInfo;
            }
            if (param && param.destroyResOnExit) {
                lhj.StaticMgr.getInstance().destroyResOnExit = param.destroyResOnExit;
            }
            if (_this._gameInfo && _this._gameInfo.extData) {
                lhj.StaticMgr.getInstance().extData = _this._gameInfo.extData;
            }
            return _this;
        }
        Main.prototype.start = function (e) {
            if (e === void 0) { e = null; }
            var initData = {};
            initData.designWidth = 1280;
            initData.designHeight = 720;
            initData.debug = true;
            initData.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
            if (true) {
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
            var resource = "resource/default.res.json";
            RES.loadConfig(resource, "resource/");
            var assetAdapter = new AssetAdapter();
            egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            RES.setMaxLoadingThread(6);
        };
        Main.prototype.onLoadError = function (event) {
            if (++this.countGroupError < 3) {
                console.warn('${event.groupName}资源组加载失败，重试第${this.countGroupError}次');
                uniLib.ResLoadMgr.instance.load(event.groupName, this.createGameScene, null, this, null);
            }
            else {
                console.warn('${event.groupName}资源组加载失败,返回大厅');
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadError, this);
                // if()
                uniLib.GameModuleUtils.ExitGame(false);
                RES.destroyRes(event.groupName, true);
                uniLib.ResUtils.clearResConfigByGroupName([event.groupName]);
                uniLib.UIMgr.instance.hideLoading();
            }
        };
        /**
         * 配置文件加载完成,开始预加载preload资源组。
         * configuration file loading is completed, start to pre-load the preload resource group
         */
        Main.prototype.onConfigComplete = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            var theme;
            var themeConfig = "resource/default.thm.json";
            theme = new eui.Theme(themeConfig, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        };
        Main.prototype.onThemeLoadComplete = function () {
            this.preLoadEnd();
        };
        Main.prototype.loadStartEffect = function () {
            // var strArr: Array<string> = [];
            // strArr = [
            //     "lhj"
            // ];
            // if (DEBUG) {//debug
            //     strArr.push(chessCommonLib.GrpConsts.CHESS_COMMON_TEST);
            // }
            // this.loadGameRes();
            uniLib.ResLoadMgr.instance.loadGrps(["lhj"], this.loadGameRes, null, this, LoadingUI, false);
        };
        Main.prototype.preLoadEnd = function () {
            // uniLib.ResLoadMgr.instance.load("start_effect", this.loadStartEffect, null, this, HBPoker.LoadingUI, false);
            this.loadStartEffect();
        };
        Main.prototype.loadGameRes = function () {
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
        };
        /**
         * 创建游戏场景
         * Create a WLT scene
         */
        Main.prototype.createGameScene = function () {
            lhj.StaticMgr.getInstance().stageWidth = uniLib.Global.screenWidth;
            lhj.StaticMgr.getInstance().stageHeight = uniLib.Global.screenHeight;
            //启动mvc
            uniLib.SceneMgr.instance.changeScene(lhj.LHJGameScene);
        };
        Main.prototype.resize = function () {
        };
        return Main;
    }(uniLib.GameDoc));
    lhj.Main = Main;
    __reflect(Main.prototype, "lhj.Main");
})(lhj || (lhj = {}));
