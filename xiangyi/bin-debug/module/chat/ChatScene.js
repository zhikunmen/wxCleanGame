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
var ChatScene = (function (_super) {
    __extends(ChatScene, _super);
    function ChatScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "ChatSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    ChatScene.prototype.addStage = function () {
        this.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSend, this);
    };
    ChatScene.prototype.onSend = function () {
        var word = this.inputWord.text;
        if (word) {
            var sendData = { word: word };
            Net.getInstance().sendHttpRequest(NetMsg.arr.chat.send, sendData);
        }
    };
    return ChatScene;
}(eui.Component));
__reflect(ChatScene.prototype, "ChatScene");
