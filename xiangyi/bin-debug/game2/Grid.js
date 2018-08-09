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
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(row, column) {
        var _this = _super.call(this) || this;
        _this.checkFlag = false;
        _this.moveFlag = false;
        _this.isHeightLight = false;
        _this.num = 0;
        _this.row = 0;
        _this.column = 0;
        _this.row = row;
        _this.column = column;
        _this.width = Grid.width;
        _this.height = Grid.height;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.init();
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onClick, _this);
        return _this;
    }
    Grid.prototype.init = function () {
        this._bg = new egret.Sprite();
        this.addChild(this._bg);
        this._numLabel = new eui.Label();
        this._numLabel.touchEnabled = false;
        this.addChild(this._numLabel);
    };
    Grid.prototype.resetColor = function () {
        var color = GameAddOneCfg.colorArray[this.num - 1];
        this._bg.graphics.clear();
        this._bg.graphics.beginFill(color, 1);
        this._bg.graphics.drawRoundRect(0, 0, Grid.width, Grid.height, 20, 20);
        this._bg.graphics.endFill();
    };
    Grid.prototype.setNum = function (n) {
        this.num = n;
        this._numLabel.text = n.toString();
        this._numLabel.anchorOffsetX = this._numLabel.width / 2;
        this._numLabel.anchorOffsetY = this._numLabel.height / 2;
        this._numLabel.x = this.width / 2;
        this._numLabel.y = this.height / 2;
        this.resetColor();
    };
    Grid.prototype.onClick = function () {
        if (this.isHeightLight) {
            var event = new GameAddOneEvent(GameAddOneEvent.CellAddPos);
            this.dispatchEvent(event);
        }
        else {
            this.num++;
            var tw = egret.Tween.get(this);
            tw
                .to({ scaleX: 0.7, scaleY: 1.1 }, 100)
                .to({ scaleX: 1, scaleY: 0.8 }, 80)
                .to({ scaleX: 1, scaleY: 1 }, 10)
                .call(function () {
                this.setNum(this.num);
                var event = new GameAddOneEvent(GameAddOneEvent.CellAddOne);
                this.dispatchEvent(event);
            }, this);
        }
    };
    Grid.prototype.removeSelf = function () {
        if (this.moveFlag == false) {
            this.moveFlag = true;
            GridMgr.RemoveCell(this);
            var tw = egret.Tween.get(this);
            tw.to({ scaleX: 0.6, scaleY: 0.6 }, 300, egret.Ease.backOut)
                .call(function () {
                this.moveFlag = false;
                var event = new GameAddOneEvent(GameAddOneEvent.CellRemove);
                this.dispatchEvent(event);
                this.parent.removeChild(this);
            }, this);
        }
    };
    Grid.prototype.highlightShow = function () {
        this.isHeightLight = true;
        var color = GameAddOneCfg.colorArray[this.num - 1];
        this._bg.graphics.clear();
        this._bg.graphics.beginFill(color, 1);
        this._bg.graphics.drawCircle(Grid.width / 2, Grid.height / 2, Grid.width / 2);
        //this._bg.graphics.drawRoundRect(0, 0, Grid.width, Grid.height, 10, 10);
        this._bg.graphics.endFill();
    };
    Grid.prototype.normalShow = function () {
        this.isHeightLight = false;
        this.resetColor();
    };
    Grid.prototype.moveToPos = function (row, column) {
        if (this.moveFlag == false) {
            this.moveFlag = true;
            this.row = row;
            this.column = column;
            var x = GridMgr.getPositionX(this.column);
            var y = GridMgr.getPositionY(this.row);
            var tw = egret.Tween.get(this);
            tw.to({ x: x, y: y }, 400, egret.Ease.bounceOut)
                .call(function () {
                this.moveFlag = false;
                var event = new GameAddOneEvent(GameAddOneEvent.CellMoveOver);
                this.dispatchEvent(event);
            }, this);
        }
    };
    Grid.prototype.fill = function () {
        if (this.moveFlag == false) {
            this.moveFlag = true;
            var x = GridMgr.getPositionX(this.column);
            var y = -Grid.height;
            this.x = x;
            this.y = y;
            var desx = GridMgr.getPositionX(this.column);
            var desy = GridMgr.getPositionY(this.row);
            var tw = egret.Tween.get(this);
            tw.to({ x: desx, y: desy }, 400, egret.Ease.bounceOut)
                .call(function () {
                this.moveFlag = false;
                var event = new GameAddOneEvent(GameAddOneEvent.CellMoveOver);
                this.dispatchEvent(event);
            }, this);
        }
    };
    Grid.width = 60;
    Grid.height = 60;
    return Grid;
}(egret.Sprite));
__reflect(Grid.prototype, "Grid");
