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
    var UI_EventListener = (function (_super) {
        __extends(UI_EventListener, _super);
        function UI_EventListener() {
            return _super.call(this) || this;
        }
        UI_EventListener.getInstance = function () {
            if (!this._instance) {
                this._instance = new UI_EventListener;
            }
            return this._instance;
        };
        return UI_EventListener;
    }(egret.EventDispatcher));
    lhj.UI_EventListener = UI_EventListener;
    __reflect(UI_EventListener.prototype, "lhj.UI_EventListener");
})(lhj || (lhj = {}));
