var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var ManageBox = (function () {
        function ManageBox() {
            this.init();
        }
        ManageBox.getInstance = function () {
            if (!this.instance) {
                this.instance = new ManageBox();
            }
            return this.instance;
        };
        ManageBox.prototype.init = function () {
            this.BoxArray = [];
            this.qipaoLine = [];
            this.chatLine = [];
        };
        /**手机返回键监听 */
        ManageBox.prototype.destroyPanelByAndroid = function () {
            if (ManageBox.getInstance().BoxArray.length > 0) {
                ManageBox.getInstance().BoxArray[ManageBox.getInstance().BoxArray.length - 1].dispatchEventWith(superslot.UIEventConsts.CLOSE);
            }
            else if (uniLib.SceneMgr.instance.currentScene.tipsLayer.getChildByName("lobbyChat")) {
                uniLib.SceneMgr.instance.currentScene.tipsLayer.removeChild(uniLib.SceneMgr.instance.currentScene.tipsLayer.getChildByName("lobbyChat"));
            }
            else {
                egret.MainContext.instance.stage.dispatchEventWith(superslot.UIEventConsts.EXIT_GAME, false);
            }
        };
        return ManageBox;
    }());
    superslot.ManageBox = ManageBox;
    __reflect(ManageBox.prototype, "superslot.ManageBox");
})(superslot || (superslot = {}));
