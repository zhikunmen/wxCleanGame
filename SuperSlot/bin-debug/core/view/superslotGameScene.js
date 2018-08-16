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
var superslot;
(function (superslot) {
    var superslotGameScene = (function (_super) {
        __extends(superslotGameScene, _super);
        function superslotGameScene() {
            return _super.call(this) || this;
        }
        superslotGameScene.prototype.start = function () {
            _super.prototype.start.call(this);
            //初始化数据表格
            // DataVoMap.getInstance().initTable();
            superslot.GameInfo.uiLayer = this.uiLayer;
            superslot.GameInfo.mainUILayer = this.mainUILayer;
            superslot.GameInfo.topLayer = this.topLayer;
            superslot.GameInfo.main = this.tipsLayer;
            superslot.GameInfo.scaleY = uniLib.Global.screenHeight / 720;
            this.background = new egret.Bitmap(RES.getRes("ss_main_bg_jpg"));
            this.addChildAt(this.background, 0);
            this.background.anchorOffsetX = this.background.width / 2;
            this.background.x = uniLib.Global.screenWidth / 2;
            superslot.RoomInfo.getInstance().soundType = "mp3";
            this.initPositionData();
            superslot.AppFacade.getInstance().startUp(this);
            superslot.AppFacade.getInstance().sendNotification(superslot.AppFacadeConst.SEND_DATA, null, superslot.DataRequestCommand.CONNECT_GAME_SERVER);
            uniLib.SoundMgr.instance.playBgMusic([superslot.SoundConsts.BACKGROUND_MUSIC + superslot.RoomInfo.getInstance().soundType]);
            if (superslot.StaticMgr.getInstance().gameInfo) {
                this.dispatchEventWith("haocai_Casino_enterGame", true, superslot.StaticMgr.getInstance().gameInfo.gameId);
            }
            // console.error("this.addEventListener(egret.Event.ACTIVATE");
            superslotBC.addEvent(this, this, egret.Event.ACTIVATE, this.againEnter);
        };
        superslotGameScene.prototype.againEnter = function (evt) {
            // console.error("againEnteragainEnter",evt.type);
            if (evt.type == egret.Event.ACTIVATE) {
                egret.MainContext.instance.stage.dispatchEventWith(superslot.AppFacadeConst.USER_ENTER_ROOM);
            }
        };
        superslotGameScene.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.removeEventListener(egret.Event.ACTIVATE, this.againEnter, this);
        };
        /**
         * 初始化位置属性,以做到右对齐
         */
        superslotGameScene.prototype.initPositionData = function () {
            if (superslot.DataCache.defaultWidth != uniLib.Global.screenWidth) {
                superslot.DataCache.defaultWidth = uniLib.Global.screenWidth;
                superslot.DataCache.defaultHeight = uniLib.Global.screenHeight;
            }
        };
        return superslotGameScene;
    }(uniLib.GameScene));
    superslot.superslotGameScene = superslotGameScene;
    __reflect(superslotGameScene.prototype, "superslot.superslotGameScene");
})(superslot || (superslot = {}));
