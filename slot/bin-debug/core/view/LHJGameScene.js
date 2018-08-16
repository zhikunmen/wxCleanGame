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
    var LHJGameScene = (function (_super) {
        __extends(LHJGameScene, _super);
        function LHJGameScene() {
            return _super.call(this) || this;
        }
        LHJGameScene.prototype.start = function () {
            _super.prototype.start.call(this);
            //初始化数据表格
            // DataVoMap.getInstance().initTable();
            lhj.GameInfo.uiLayer = this.uiLayer;
            lhj.GameInfo.mainUILayer = this.mainUILayer;
            lhj.GameInfo.topLayer = this.topLayer;
            lhj.GameInfo.main = this.tipsLayer;
            lhj.GameInfo.leftChat = chessCommonLib.ConfigMgr.getInstance().gameOptions.leftChat;
            lhj.GameInfo.notice = chessCommonLib.ConfigMgr.getInstance().gameOptions.notice;
            lhj.GameInfo.market = chessCommonLib.ConfigMgr.getInstance().gameOptions.market;
            lhj.GameInfo.task = chessCommonLib.ConfigMgr.getInstance().gameOptions.task;
            lhj.GameInfo.bank = chessCommonLib.ConfigMgr.getInstance().gameOptions.bank;
            lhj.GameInfo.rank = chessCommonLib.ConfigMgr.getInstance().gameOptions.rank;
            lhj.GameInfo.ssc = chessCommonLib.ConfigMgr.getInstance().gameOptions.ssc;
            lhj.GameInfo.scaleY = uniLib.Global.screenHeight / 720;
            this.initPositionData();
            lhj.AppFacade.getInstance().startUp(this);
            lhj.AppFacade.getInstance().sendNotification(lhj.AppFacadeConst.SEND_DATA, null, lhj.DataRequestCommand.CONNECT_GAME_SERVER);
            uniLib.SoundMgr.instance.playBgMusic(["dt_sound_bg_mp3"]);
            if (lhj.StaticMgr.getInstance().gameInfo && lhj.StaticMgr.getInstance().gameInfo.defaultOrientation == egret.OrientationMode.PORTRAIT) {
                uniLib.ScreenUtils.landscape = true;
            }
            if (lhj.StaticMgr.getInstance().gameInfo && lhj.StaticMgr.getInstance().gameInfo.preloadUIAutoHide == false && lhj.StaticMgr.getInstance().gameInfo.preloadUI) {
                uniLib.UIMgr.instance.hideLoading(lhj.StaticMgr.getInstance().gameInfo.preloadUI, "", true, false);
            }
            else {
                uniLib.UIMgr.instance.hideLoading();
            }
            if (lhj.StaticMgr.getInstance().gameInfo)
                this.dispatchEventWith("haocai_Casino_enterGame", true, lhj.StaticMgr.getInstance().gameInfo.gameId);
        };
        LHJGameScene.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        /**
         * 初始化位置属性,以做到右对齐
         */
        LHJGameScene.prototype.initPositionData = function () {
            lhj.DataCache.defaultWidth = uniLib.Global.screenWidth;
            var img = lhj.ResUtil.createBitmapByName("lhj_bg_1_jpg");
            this.addChildAt(img, 0);
            img.anchorOffsetX = img.width / 2;
            img.x = uniLib.Global.screenWidth / 2;
            var movie_1 = lhj.ResUtil.createDragon("lhj_effect_flower", "newAnimation", uniLib.DragonType.ARMATURE, uniLib.Global.screenWidth / 2, 360, this, -1, 1);
            this.addChildAt(movie_1, 1);
            var movie_2 = lhj.ResUtil.createDragon("lhj_effect_bg", "newAnimation", uniLib.DragonType.ARMATURE, uniLib.Global.screenWidth / 2, 360, this, -1, 1);
            this.addChildAt(movie_2, 2);
            var img1 = lhj.ResUtil.createBitmapByName("lhj_bg_2");
            this.addChildAt(img1, 3);
            img1.anchorOffsetX = img1.width / 2;
            img1.x = uniLib.Global.screenWidth / 2;
            img1.y = uniLib.Global.screenHeight - img1.height;
        };
        return LHJGameScene;
    }(uniLib.GameScene));
    lhj.LHJGameScene = LHJGameScene;
    __reflect(LHJGameScene.prototype, "lhj.LHJGameScene");
})(lhj || (lhj = {}));
