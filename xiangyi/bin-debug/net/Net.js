var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Net = (function () {
    function Net() {
        this._url = null;
        this._url = "http://localhost:63342/workerMan/Game/Test.php";
    }
    Net.getInstance = function () {
        if (Net.instance == null) {
            Net.instance = new Net();
        }
        return Net.instance;
    };
    Net.prototype.sendHttpRequest = function (gameMsg, gameParm) {
        if (gameParm === void 0) { gameParm = null; }
        // 新建连接
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        // 传递参数
        var data = JSON.stringify(gameParm);
        var urlVariables = new egret.URLVariables();
        urlVariables.variables = { msg: gameMsg, data: data };
        // 请求内容
        var request = new egret.URLRequest();
        request.method = egret.URLRequestMethod.POST;
        request.url = this._url;
        request.data = urlVariables;
        loader.load(request);
    };
    Net.prototype.onLoadError = function () {
        console.log("服务器连接失败");
    };
    Net.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        var text = loader.data;
        egret.log("返回数据：" + text);
    };
    Net.instance = null;
    return Net;
}());
__reflect(Net.prototype, "Net");
