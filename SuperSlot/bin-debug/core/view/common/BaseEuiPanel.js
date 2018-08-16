/**eui组件的父类 */
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
    var BaseSlwhEuiPanel = (function (_super) {
        __extends(BaseSlwhEuiPanel, _super);
        function BaseSlwhEuiPanel() {
            return _super.call(this) || this;
        }
        BaseSlwhEuiPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.init();
            this.addEvent();
        };
        //初始化
        BaseSlwhEuiPanel.prototype.init = function () {
            if (this._panelBg) {
                this._panelBg.scale9Grid = new egret.Rectangle(160, 150, 960, 502);
                this._panelBg.height = uniLib.Global.screenHeight;
            }
        };
        /**事件监听 */
        BaseSlwhEuiPanel.prototype.addEvent = function () {
        };
        BaseSlwhEuiPanel.prototype.removeEvent = function () {
        };
        BaseSlwhEuiPanel.prototype.destory = function () {
            this.removeEvent();
        };
        return BaseSlwhEuiPanel;
    }(eui.Component));
    superslot.BaseSlwhEuiPanel = BaseSlwhEuiPanel;
    __reflect(BaseSlwhEuiPanel.prototype, "superslot.BaseSlwhEuiPanel", ["superslot.EuiSkinInt"]);
})(superslot || (superslot = {}));
