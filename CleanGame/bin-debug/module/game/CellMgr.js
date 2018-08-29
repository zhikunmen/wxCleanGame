var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CellMgr = (function () {
    function CellMgr() {
    }
    CellMgr.cleanCellArray = function () {
        this.cellArray = [];
        for (var i = 0; i < GameCfg.row; i++) {
            this.cellArray.push([]);
            for (var j = 0; j < GameCfg.column; j++) {
                this.cellArray[i].push(null);
            }
        }
    };
    CellMgr.genDropCellId = function (row, column) {
        // 思路是:假设该位置有id, 从该位置出发可以得到相同id的数量
        // 棋盘现阶段拥有可以消除id的数量
        // 利用这个控制难度
        var idArr = [1, 2, 3, 4, 5];
        var n = Math.random() * idArr.length;
        var i = Math.floor(n);
        return idArr[i];
    };
    CellMgr.genInitCellId = function (row, column) {
        var json = RES.getRes("gameCellCfg_json");
        var arr = json["1"];
        var id = arr[row][column];
        return id;
    };
    CellMgr.removeAllCellAction = function () {
        for (var k in this.cellArray) {
            for (var j in this.cellArray[k]) {
                var item = this.cellArray[k][j];
                if (item) {
                    egret.Tween.removeTweens(item);
                    item.scaleX = item.scaleY = 1;
                }
            }
        }
    };
    CellMgr.setAllCellCheckFlag = function (b) {
        for (var k in this.cellArray) {
            for (var j in this.cellArray[k]) {
                var item = this.cellArray[k][j];
                if (item) {
                    item.checkFlag = b;
                }
            }
        }
    };
    // 获取现在棋盘的可以清除的队列数目
    CellMgr.getNowCleanListNum = function () {
        var arr = [];
        for (var k in this.cellArray) {
            for (var j in this.cellArray[k]) {
                var item = this.cellArray[k][j];
                if (item && item.checkFlag == false) {
                    var sameArr = [item];
                    this.getSameArrByCell(item, sameArr);
                    if (sameArr.length >= GameCfg.baseCleanNum) {
                        arr.push(sameArr);
                    }
                }
            }
        }
        this.setAllCellCheckFlag(false);
        return arr;
    };
    CellMgr.getSameArrByCell = function (cell, sameArray) {
        var row = cell.row;
        var column = cell.column;
        var id = cell.id;
        cell.checkFlag = true;
        // 判断左边cell
        var leftRow = row;
        var leftColumn = column - 1;
        if (leftColumn >= 0) {
            var leftCell = this.cellArray[leftRow][leftColumn];
            if (leftCell.id == id && leftCell.checkFlag == false) {
                leftCell.checkFlag = true;
                this.getSameArrByCell(leftCell, sameArray);
                sameArray.push(leftCell);
            }
        }
        // 判断右边
        var rightRow = row;
        var rightColumn = column + 1;
        if (rightColumn < GameCfg.column) {
            var rightCell = this.cellArray[rightRow][rightColumn];
            if (rightCell.id == id && rightCell.checkFlag == false) {
                rightCell.checkFlag = true;
                this.getSameArrByCell(rightCell, sameArray);
                sameArray.push(rightCell);
            }
        }
        // 判断下边
        var bottomRow = row + 1;
        var bottomColumn = column;
        if (bottomRow < GameCfg.row) {
            var bottomCell = this.cellArray[bottomRow][bottomColumn];
            if (bottomCell.id == id && bottomCell.checkFlag == false) {
                bottomCell.checkFlag = true;
                this.getSameArrByCell(bottomCell, sameArray);
                sameArray.push(bottomCell);
            }
        }
        // 判断上边
        var topRow = row - 1;
        var topColumn = column;
        if (topRow >= 0) {
            var topCell = this.cellArray[topRow][topColumn];
            if (topCell.id == id && topCell.checkFlag == false) {
                topCell.checkFlag = true;
                this.getSameArrByCell(topCell, sameArray);
                sameArray.push(topCell);
            }
        }
    };
    CellMgr.setCell = function (cell, row, column) {
        // 设置老地方为空
        var cellRow = cell.row;
        var cellColumn = cell.column;
        this.cellArray[cellRow][cellColumn] = null;
        // 设置新地方
        cell.row = row;
        cell.column = column;
        this.cellArray[row][column] = cell;
    };
    CellMgr.cleanCell = function (cell) {
        var row = cell.row;
        var column = cell.column;
        this.cellArray[row][column] = null;
    };
    CellMgr.getCellPosX = function (cloumn) {
        var harfWidth = Cell.CellWidth / 2;
        var x = cloumn * (Cell.CellWidth + GameCfg.columnSpace) + harfWidth;
        return x;
    };
    CellMgr.getCellPosY = function (row) {
        var harfHeight = Cell.CellHeight / 2;
        var y = row * (Cell.CellHeight + GameCfg.rowSpace) + harfHeight;
        return y;
    };
    CellMgr.getTouchCell = function (x, y) {
        for (var k in this.cellArray) {
            var itemLineArr = this.cellArray[k];
            for (var j in itemLineArr) {
                var item = itemLineArr[j];
                if (item) {
                    var b = item.hitTestPoint(x, y);
                    if (b) {
                        return item;
                    }
                }
            }
        }
        return null;
    };
    CellMgr.getCleanListID = function () {
        if (this.cleanList.length > 0) {
            var cell = this.cleanList[0];
            return cell.id;
        }
        return 0;
    };
    CellMgr.isInArround = function (cell) {
        var row = cell.row;
        var column = cell.column;
        var len = this.cleanList.length;
        if (len > 0) {
            var item = this.cleanList[len - 1];
            var itemRow = item.row;
            var itemColumn = item.column;
            if (itemRow == row + 1 || itemRow == row - 1 || itemRow == row) {
                if (itemColumn == column + 1 || itemColumn == column - 1 || itemColumn == column) {
                    return true;
                }
            }
        }
        return false;
    };
    // 这个cell是否是倒数第二个
    CellMgr.getIsLastTwoInCleanList = function (cell) {
        var length = this.cleanList.length;
        if (length >= 2) {
            var index = length - 2;
            var item = this.cleanList[index];
            if (item == cell) {
                return true;
            }
        }
        return false;
    };
    CellMgr.removeTopItemInCleanList = function () {
        var length = this.cleanList.length;
        if (length > 0) {
            var topItem = this.cleanList[length - 1];
            Util.removeByElements(this.cleanList, topItem);
            return topItem;
        }
    };
    // 移除最后的一条线
    CellMgr.removeTopLine = function () {
        var length = this.lineArray.length;
        if (length > 0) {
            var lineItem = this.lineArray[length - 1];
            Util.removeByElements(this.lineArray, lineItem);
            if (lineItem.parent) {
                lineItem.parent.removeChild(lineItem);
            }
            //return lineItem;
        }
    };
    // 是否有cell在move
    CellMgr.isAllMove = function () {
        for (var k in this.cellArray) {
            var itemArr = this.cellArray[k];
            for (var j in itemArr) {
                var item = itemArr[j];
                if (item && item.moveFlag == true) {
                    return true;
                }
            }
        }
        return false;
    };
    // 获取空的cell
    CellMgr.getEmptyCell = function () {
        var retArr = [];
        for (var i = GameCfg.row - 1; i >= 0; i--) {
            for (var j = 0; j < GameCfg.column; j++) {
                var item = CellMgr.cellArray[i][j];
                if (item == null) {
                    var p = { row: i, column: j };
                    retArr.push(p);
                }
            }
        }
        return retArr;
    };
    CellMgr.getDropRowAndColumn = function (cell) {
        var row = cell.row;
        var column = cell.column;
        var ret = { row: row, column: column };
        row++;
        while (row < GameCfg.row) {
            var item = this.cellArray[row][column];
            if (item == null) {
                ret.row++;
                row++;
            }
            else {
                break;
            }
        }
        return ret;
    };
    CellMgr.cellArray = []; // 所有cell数组
    CellMgr.cleanList = []; // 清理cell的队列
    CellMgr.lineArray = []; // 临时存放line的数组
    return CellMgr;
}());
__reflect(CellMgr.prototype, "CellMgr");
