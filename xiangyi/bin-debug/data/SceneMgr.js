var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneMgr = (function () {
    function SceneMgr() {
    }
    SceneMgr.gotoLogoin = function () {
        var loading = new ResLoading();
        Director.getInstance().pushScene(loading);
        var call = new CallBackFunc().handler(SceneMgr.onLogo, this, []);
        loading.load(["com", "fruit", "logoin", "mp3"], call);
    };
    SceneMgr.onLogo = function () {
        var layer = new Logoin();
        Director.getInstance().repleaceScene(layer);
    };
    SceneMgr.gotoIndex = function () {
        var loading = new ResLoading();
        Director.getInstance().pushScene(loading);
        var call = new CallBackFunc().handler(SceneMgr.onIndex, this, []);
        loading.load(["map", "index", "json"], call);
    };
    SceneMgr.onIndex = function () {
        var index = new IndexScene();
        Director.getInstance().repleaceScene(index);
    };
    ////////////////////////////////////////////////////////////////////
    SceneMgr.gotoGame = function () {
        var loading = new ResLoading();
        Director.getInstance().pushScene(loading);
        var call = new CallBackFunc().handler(SceneMgr.onGame, this, []);
        loading.load(["cell", "fruit", "json"], call);
    };
    SceneMgr.onGame = function () {
        var game = new GameScene();
        Director.getInstance().repleaceScene(game);
    };
    SceneMgr.rePlayLv = function () {
        GameData.curScore = 0;
        GameData.curStep = GameData.targetStep;
        GameData.isOver = false;
        GameData.isWin = false;
        Director.getInstance().repleaceScene(new GameScene());
    };
    ////////////////////////////////////////////////////////////////////
    SceneMgr.gotoTest = function () {
        var loading = new ResLoading();
        Director.getInstance().pushScene(loading);
        var call = new CallBackFunc().handler(SceneMgr.onTest, this, []);
        loading.load(["test"], call);
    };
    SceneMgr.onTest = function () {
        Director.getInstance().repleaceScene(new Test());
    };
    ////////////////////////////////////////////////////////////////////
    SceneMgr.gotoChat = function () {
        Director.getInstance().repleaceScene(new ChatScene());
    };
    return SceneMgr;
}());
__reflect(SceneMgr.prototype, "SceneMgr");
//# sourceMappingURL=SceneMgr.js.map