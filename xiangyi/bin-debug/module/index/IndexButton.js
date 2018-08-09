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
var LevelState;
(function (LevelState) {
    LevelState[LevelState["NONE"] = 0] = "NONE";
    LevelState[LevelState["OPEN"] = 1] = "OPEN";
    LevelState[LevelState["CLOSE"] = 2] = "CLOSE";
})(LevelState || (LevelState = {}));
var IndexButton = (function (_super) {
    __extends(IndexButton, _super);
    function IndexButton() {
        var _this = _super.call(this) || this;
        _this.state = LevelState.NONE;
        _this.lvNumber = 0;
        _this.skinName = "IndexButtonSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Object.defineProperty(IndexButton.prototype, "lv", {
        get: function () {
            return this.lvNumber;
        },
        set: function (v) {
            this.lvNumber = v;
            this.lvLabel.text = this.lvNumber.toString();
            if (this.lvNumber < parseInt(PlayerData.data.fightLv)) {
                // 已经通关了
                this.setData(LevelState.OPEN);
            }
            else if (this.lvNumber == parseInt(PlayerData.data.fightLv)) {
                this.setData(LevelState.OPEN);
                this.showIcon();
            }
            else {
                // 还没有通关
                this.setData(LevelState.CLOSE);
            }
        },
        enumerable: true,
        configurable: true
    });
    IndexButton.prototype.showIcon = function () {
        this.icon.visible = true;
        var tw = egret.Tween.get(this.icon, { loop: true });
        var y = this.icon.y;
        tw.to({ y: y + 20 }, 1200, egret.Ease.backIn)
            .to({ y: y }, 500, egret.Ease.backOut);
    };
    IndexButton.prototype.setData = function (state) {
        this.state = state;
        this.bg.source = this.getStateImage();
    };
    IndexButton.prototype.addStage = function () {
    };
    IndexButton.prototype.getStateImage = function () {
        if (this.state == LevelState.CLOSE) {
            return "selet_g_lock_png";
        }
        else if (this.state == LevelState.OPEN) {
            return "selet_g_green_png";
        }
        return "";
    };
    return IndexButton;
}(eui.Component));
__reflect(IndexButton.prototype, "IndexButton");
