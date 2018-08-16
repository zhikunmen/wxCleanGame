var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GridMgr = (function () {
    function GridMgr() {
    }
    GridMgr.init = function () {
        for (var i = 0; i < 6; i++) {
            GridMgr._cellArray.push([]);
            for (var j = 0; j < 6; j++) {
                GridMgr._cellArray[i][j] = null;
            }
        }
    };
    GridMgr.addCell = function (cell) {
        var row = cell.row;
        var column = cell.column;
        GridMgr._cellArray[row][column] = cell;
    };
    GridMgr.getPositionX = function (column) {
        var x = column * (Grid.width + 5) + Grid.width / 2;
        return x;
    };
    GridMgr.getDifferentNum = function (row, column) {
        var totoalNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var numberArr = [];
        // 左边
        if (column - 1 >= 0) {
            var leftCell = this._cellArray[row][column - 1];
            if (leftCell) {
                var leftnum = leftCell.num;
                numberArr.push(leftnum);
            }
        }
        // 右边
        if (column + 1 < GameAddOneCfg.Grid.column) {
            var rightCell = this._cellArray[row][column + 1];
            if (rightCell) {
                var rightnum = rightCell.num;
                numberArr.push(rightnum);
            }
        }
        // 上边
        if (row - 1 >= 0) {
            var topCell = this._cellArray[row - 1][column];
            if (topCell) {
                var topNum = topCell.num;
                numberArr.push(topNum);
            }
        }
        // 下边
        if (row + 1 < GameAddOneCfg.Grid.row) {
            var bottomCell = this._cellArray[row + 1][column];
            if (bottomCell) {
                var bottomNum = bottomCell.num;
                numberArr.push(bottomNum);
            }
        }
        for (var k in numberArr) {
            var item = numberArr[k];
            Util.removeByElements(totoalNumberArr, item);
        }
        var len = totoalNumberArr.length;
        var random = Math.floor(Math.random() * len);
        return totoalNumberArr[random];
    };
    GridMgr.getPositionY = function (row) {
        var y = row * (Grid.height + 5) + Grid.height / 2;
        return y;
    };
    GridMgr.getCleanCell = function () {
        for (var i = 0; i < GameAddOneCfg.Grid.row; i++) {
            for (var j = 0; j < GameAddOneCfg.Grid.column; j++) {
                var cell = GridMgr._cellArray[i][j];
                if (cell && cell.checkFlag == false) {
                    var sameArr = [];
                    sameArr.push(cell);
                    this.getSameCell(cell, sameArr);
                    if (sameArr.length >= 2) {
                        for (var k in sameArr) {
                            var item = sameArr[k];
                            item.removeSelf();
                        }
                    }
                }
            }
        }
        this.setAllCellCheckFlag(false);
    };
    GridMgr.getCleanList = function () {
        for (var row = GameAddOneCfg.Grid.row - 1; row >= 0; row--) {
            for (var column = 0; column < GameAddOneCfg.Grid.column; column++) {
                var cell = this._cellArray[row][column];
                var cellArr = this.getSameCellByCell(cell);
                cellArr.push(cell);
                if (cellArr.length >= 3) {
                    return cellArr;
                }
            }
        }
        return null;
    };
    GridMgr.getSameCellByCell = function (cell) {
        var sameArr = [];
        this.getSameCell(cell, sameArr);
        if (sameArr.length >= 2) {
            this.setAllCellCheckFlag(false);
            return sameArr;
        }
        else {
            this.setAllCellCheckFlag(false);
            return [];
        }
    };
    GridMgr.RemoveCell = function (cell) {
        var row = cell.row;
        var column = cell.column;
        this._cellArray[row][column] = null;
    };
    GridMgr.isMoveOver = function () {
        for (var i = 0; i < GameAddOneCfg.Grid.row; i++) {
            for (var j = 0; j < GameAddOneCfg.Grid.column; j++) {
                var cell = GridMgr._cellArray[i][j];
                if (cell) {
                    if (cell.moveFlag == true) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    GridMgr.allCellTurnToNormal = function () {
        for (var i = 0; i < GameAddOneCfg.Grid.row; i++) {
            for (var j = 0; j < GameAddOneCfg.Grid.column; j++) {
                var cell = GridMgr._cellArray[i][j];
                if (cell) {
                    cell.normalShow();
                }
            }
        }
    };
    GridMgr.setAllCellCheckFlag = function (b) {
        for (var i = 0; i < GameAddOneCfg.Grid.row; i++) {
            for (var j = 0; j < GameAddOneCfg.Grid.column; j++) {
                var cell = GridMgr._cellArray[i][j];
                if (cell) {
                    cell.checkFlag = b;
                }
            }
        }
    };
    GridMgr.getSameCell = function (cell, sameArr) {
        cell.checkFlag = true;
        var row = cell.row;
        var column = cell.column;
        // 左边
        if (column - 1 >= 0) {
            var leftCell = this._cellArray[row][column - 1];
            if (leftCell && leftCell.num == cell.num && leftCell.checkFlag == false) {
                sameArr.push(leftCell);
                this.getSameCell(leftCell, sameArr);
            }
        }
        // 右边
        if (column + 1 < GameAddOneCfg.Grid.column) {
            var rightCell = this._cellArray[row][column + 1];
            if (rightCell && rightCell.num == cell.num && rightCell.checkFlag == false) {
                sameArr.push(rightCell);
                this.getSameCell(rightCell, sameArr);
            }
        }
        // 上边
        if (row - 1 >= 0) {
            var topCell = this._cellArray[row - 1][column];
            if (topCell && topCell.num == cell.num && topCell.checkFlag == false) {
                sameArr.push(topCell);
                this.getSameCell(topCell, sameArr);
            }
        }
        // 下边
        if (row + 1 < GameAddOneCfg.Grid.row) {
            var downCell = this._cellArray[row + 1][column];
            if (downCell && downCell.num == cell.num && downCell.checkFlag == false) {
                sameArr.push(downCell);
                this.getSameCell(downCell, sameArr);
            }
        }
    };
    GridMgr.dropAllCell = function () {
        for (var i = GameAddOneCfg.Grid.row - 1; i >= 0; i--) {
            for (var j = 0; j < GameAddOneCfg.Grid.column; j++) {
                var cell = GridMgr._cellArray[i][j];
                if (cell) {
                    var p = this.getFillPos(cell.row, cell.column); //获取到位置
                    if (cell.row != p.row || cell.column != p.column) {
                        this.swapCell(cell, p.row, p.column);
                        cell.moveToPos(p.row, p.column);
                    }
                }
            }
        }
    };
    GridMgr.swapCell = function (cell, desRow, desColumn) {
        this._cellArray[desRow][desColumn] = cell;
        this._cellArray[cell.row][cell.column] = null;
        cell.row = desRow;
        cell.column = desColumn;
    };
    GridMgr.getFillPos = function (row, column) {
        var ret = { row: row, column: column };
        var dropRow = row + 1;
        while (dropRow < GameAddOneCfg.Grid.row) {
            var downCell = this._cellArray[dropRow][column];
            if (downCell == null) {
                ret.row++;
                dropRow++;
            }
            else {
                break;
            }
        }
        return ret;
    };
    GridMgr._cellArray = [];
    return GridMgr;
}());
__reflect(GridMgr.prototype, "GridMgr");
//# sourceMappingURL=GridMgr.js.map