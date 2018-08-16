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
var Cell = (function (_super) {
    __extends(Cell, _super);
    function Cell(id) {
        var _this = _super.call(this) || this;
        _this.id = 0;
        _this.row = 0;
        _this.column = 0;
        _this.moveFlag = false;
        _this.checkFlag = false; // 检查标志
        _this.sprite = null;
        _this.isAction = false;
        _this.isSelected = false;
        _this.moveSpeed = 400;
        _this.id = id;
        _this.sprite = new eui.Image();
        _this.addChild(_this.sprite);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Cell.prototype.addStage = function () {
        this.init();
        //this.initTouch();
    };
    Cell.prototype.init = function () {
        var idpng = ["num1_png", "num2_png", "num3_png", "num4_png", "num5_png",];
        idpng = ["game_Apple_png", "game_Blueberry_png",
            "game_Grape_png", "game_Lemon_png", "game_Watermelon_png"];
        var res = idpng[this.id - 1];
        var texture = RES.getRes(res);
        if (texture) {
            this.width = Cell.CellWidth; //texture.textureWidth;
            this.height = Cell.CellHeight; // texture.textureHeight;
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;
            this.sprite.source = texture;
            this.sprite.width = Cell.CellWidth;
            this.sprite.height = Cell.CellHeight;
            this.sprite.anchorOffsetX = this.sprite.width / 2;
            this.sprite.anchorOffsetY = this.sprite.height / 2;
            this.sprite.x = this.width / 2;
            this.sprite.y = this.height / 2;
        }
    };
    Cell.prototype.initTouch = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegan, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    };
    Cell.prototype.onBegan = function () {
        egret.log("Cell Touch Began");
    };
    // 提示动作
    Cell.prototype.noticeAction = function () {
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this, { loop: true });
        tw.to({ scaleX: 0.8, scaleY: 0.8 }, 300)
            .to({ scaleX: 1, scaleY: 1 }, 300);
    };
    Cell.prototype.setSelect = function (b) {
        if (this.isSelected != b) {
            this.isSelected = b;
            if (b) {
                // 选中状态
                this.runSelectedAni();
            }
            else {
                // 非选中状态
            }
        }
    };
    Cell.prototype.runSelectedAni = function () {
        if (this.isAction == false) {
            this.isAction = true;
            SoundsMgr.clickCell();
            egret.Tween.removeTweens(this);
            var tw = egret.Tween.get(this);
            tw.to({ scaleX: 0.8, scaleY: 1.3 }, 100, egret.Ease.bounceIn)
                .to({ scaleX: 1.1, scaleY: 1 }, 100, egret.Ease.bounceOut)
                .to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.backIn)
                .call(function () {
                this.isAction = false;
            }, this);
        }
    };
    Cell.prototype.onMove = function () {
    };
    Cell.prototype.onEnd = function () {
    };
    Cell.prototype.clean = function () {
        Util.removeByElements(CellMgr.cleanList, this);
        CellMgr.cleanCell(this);
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 0.4, scaleY: 0.4 }, 200)
            .call(function () {
            this.sendCleanOverEvent();
        }, this)
            .wait(50)
            .call(function (args) {
            if (this.parent) {
                this.parent.removeChild(this);
            }
            else {
                egret.log("no parent");
            }
        }, this, [this]);
    };
    Cell.prototype.sendCleanOverEvent = function () {
        var event = new GameEvent(GameEvent.CleanOver);
        this.dispatchEvent(event);
    };
    Cell.prototype.getDistance = function (began, end) {
        var disX = Math.pow(end.x - began.x, 2);
        var disY = Math.pow(end.y - began.y, 2);
        var dis = Math.sqrt(disX + disY);
        return dis;
    };
    Cell.prototype.drop = function (row, column) {
        var x = CellMgr.getCellPosX(column);
        var y = CellMgr.getCellPosY(row);
        var dis = this.getDistance({ x: this.x, y: this.y }, { x: x, y: y });
        var time = (dis / this.moveSpeed) * 1000;
        this.moveFlag = true;
        CellMgr.setCell(this, row, column);
        var tw = egret.Tween.get(this);
        tw.to({ x: x, y: y }, time, egret.Ease.bounceOut).call(function () {
            this.moveFlag = false;
            this.sendDropOverEvent();
        }, this);
    };
    Cell.prototype.sendDropOverEvent = function () {
        var event = new GameEvent(GameEvent.DropOver);
        this.dispatchEvent(event);
    };
    Cell.CellWidth = 60;
    Cell.CellHeight = 60;
    return Cell;
}(egret.Sprite));
__reflect(Cell.prototype, "Cell");
//# sourceMappingURL=Cell.js.map