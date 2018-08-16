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
    var WinningChipsPanel = (function (_super) {
        __extends(WinningChipsPanel, _super);
        function WinningChipsPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "sicbo_winchipsSkin";
            return _this;
        }
        WinningChipsPanel.prototype.setData = function (num) {
            if (num < 0) {
                this._bg.source = "hlhyg_lose_bg";
                this._chipTxt.font = "hb_loseChips_number_fnt";
                this._chipTxt.text = num + "";
            }
            else if (num > 0) {
                this._bg.source = "hlhyg_winning_bg";
                this._chipTxt.font = "hb_winChips_number_fnt";
                this._chipTxt.text = "+" + num;
            }
            this._bg.width = this._chipTxt.width;
        };
        return WinningChipsPanel;
    }(eui.Component));
    lhj.WinningChipsPanel = WinningChipsPanel;
    __reflect(WinningChipsPanel.prototype, "lhj.WinningChipsPanel");
})(lhj || (lhj = {}));
