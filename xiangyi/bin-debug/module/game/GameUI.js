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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.star = 0;
        _this.skinName = "GameUISkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    GameUI.prototype.addStage = function () {
        this.width = ScreenMgr.instance.screenWidth;
        this.height = ScreenMgr.instance.screenHeight;
        this.init();
        this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPause, this);
    };
    GameUI.prototype.init = function () {
        this.progress.value = 0;
        this.gold.text = "0";
        this.score.text = "0";
        this.targetScore.text = GameData.targetScore.toString();
        this.lv.text = GameData.enterLv.toString();
        this.stepScore.text = GameData.targetStep.toString();
    };
    GameUI.prototype.addScore = function (v) {
        GameData.curScore += v;
        this.score.text = GameData.curScore.toString();
        // 星级评价
        var star1Score = GameData.targetScore;
        var star2Score = GameData.targetScore * 1.5;
        var star3Score = GameData.targetScore * 2;
        if (GameData.curScore < star1Score) {
            this.showStar(0);
        }
        else if (GameData.curScore >= star1Score && GameData.curScore < star2Score) {
            // 一星
            this.showStar(1);
        }
        else if (GameData.curScore >= star2Score && GameData.curScore < star3Score) {
            // 二星
            this.showStar(2);
        }
        else {
            // 三星
            this.showStar(3);
        }
        var progress = GameData.curScore / star3Score * 100;
        this.progress.value = progress;
    };
    GameUI.prototype.showStar = function (v) {
        this.star = v;
        this.star1.source = "game_rate1_off_png";
        this.star2.source = "game_rate2_off_png";
        this.star3.source = "game_rate3_off_png";
        if (v == 1) {
            this.star1.source = "game_rate1_png";
        }
        else if (v == 2) {
            this.star2.source = "game_rate2_png";
        }
        else if (v == 3) {
            this.star3.source = "game_rate3_png";
        }
    };
    GameUI.prototype.reduceStep = function () {
        GameData.curStep--;
        this.stepScore.text = GameData.curStep.toString();
        if (GameData.curStep <= 0) {
            GameData.curStep = 0;
            if (GameData.isOver == false) {
                // 失败
                GameData.isOver = true;
                GameData.isWin = false;
                this.addDefeatLayer();
            }
        }
        else {
            if (GameData.curScore >= GameData.targetScore) {
                // 胜利
                if (GameData.isOver == false) {
                    GameData.isOver = true;
                    GameData.isWin = true;
                    this.addWinLayer();
                }
            }
        }
    };
    GameUI.prototype.addWinLayer = function () {
        Director.getInstance().pushScene(new WinUI(this.star));
    };
    GameUI.prototype.addDefeatLayer = function () {
        Director.getInstance().pushScene(new LoseLayer());
    };
    GameUI.prototype.onPause = function () {
        SoundsMgr.playBtn();
        this.addChild(new PauseLayer());
    };
    GameUI.prototype.onBtn = function () {
        return;
        CellMgr.removeAllCellAction();
        //var cell = CellMgr.cellArray[0][0];
        //var arr = [cell];
        //CellMgr.getSameArrByCell(cell, arr);
        //CellMgr.setAllCellCheckFlag(false);
        //for (var k in arr) {
        //    var item:Cell = arr[k];
        //    item.noticeAction();
        //}
        var arr = CellMgr.getNowCleanListNum();
        for (var k in arr) {
            for (var j in arr[k]) {
                var item = arr[k][j];
                item.noticeAction();
            }
        }
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map