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
    var GameMediator = (function (_super) {
        __extends(GameMediator, _super);
        function GameMediator(viewComponent) {
            var _this = _super.call(this, GameMediator.NAME, viewComponent) || this;
            _this._view = new lhj.GameVc;
            lhj.GameInfo.uiLayer.addChild(_this._view);
            _this._view.scaleY = lhj.GameInfo.scaleY;
            _this._view.width = 1280 * lhj.GameInfo.scaleY;
            _this._view.x = (uniLib.Global.screenWidth - _this._view.width) / 2;
            _this.setViewComponent(_this._view);
            if (_this._view) {
                _this._view.addEventListener(lhj.UIEventConsts.USER_BET_CHIPS, _this.uiHandle, _this);
            }
            return _this;
        }
        GameMediator.prototype.uiHandle = function (evt) {
            var req;
            switch (evt.type) {
                default:
                    break;
            }
        };
        GameMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        GameMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            if (this._view) {
                this._view.removeEventListener(lhj.UIEventConsts.USER_BET_CHIPS, this.uiHandle, this);
                this._view.destory();
            }
        };
        GameMediator.prototype.listNotificationInterests = function () {
            return [
                lhj.AppFacadeConst.ROOM_INIT,
                lhj.AppFacadeConst.CHANGE_SPEED,
                lhj.AppFacadeConst.BET_REPLY,
                lhj.AppFacadeConst.RUN_RESULT,
                lhj.AppFacadeConst.LOTTERY_RESULT
            ];
        };
        GameMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case lhj.AppFacadeConst.ROOM_INIT:
                    if (this._view) {
                        this._view.setLogo(notification.getBody());
                    }
                    break;
                case lhj.AppFacadeConst.CHANGE_SPEED:
                    if (this._view) {
                        this._view.setAdd();
                    }
                    break;
                case lhj.AppFacadeConst.BET_REPLY:
                    if (this._view) {
                        this._view.startGame();
                    }
                    break;
                case lhj.AppFacadeConst.RUN_RESULT:
                    if (this._view) {
                        this._view.setData(notification.getBody());
                    }
                    break;
                case lhj.AppFacadeConst.LOTTERY_RESULT:
                    if (this._view) {
                        this._view.showLottery(notification.getBody());
                    }
                    break;
                default:
                    break;
            }
        };
        GameMediator.NAME = "GameMediator";
        return GameMediator;
    }(puremvc.Mediator));
    lhj.GameMediator = GameMediator;
    __reflect(GameMediator.prototype, "lhj.GameMediator");
})(lhj || (lhj = {}));
