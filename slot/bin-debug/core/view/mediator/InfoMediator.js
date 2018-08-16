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
    var InfoMediator = (function (_super) {
        __extends(InfoMediator, _super);
        function InfoMediator(viewComponent) {
            var _this = _super.call(this, InfoMediator.NAME, viewComponent) || this;
            _this._view = new lhj.InfoVc;
            lhj.GameInfo.uiLayer.addChild(_this._view);
            _this._view.scaleY = lhj.GameInfo.scaleY;
            _this._view.width = 1280 * lhj.GameInfo.scaleY;
            _this._view.x = (uniLib.Global.screenWidth - _this._view.width) / 2;
            _this.setViewComponent(_this._view);
            if (_this._view) {
            }
            return _this;
        }
        InfoMediator.prototype.uiHandle = function (evt) {
            var req;
            switch (evt.type) {
                case lhj.UIEventConsts.GET_LOTTERY_HISTORY:
                    // req = new Cmd.GetLotteryHistoryCmd_C;
                    // this.sendNotification(AppFacadeConst.SEND_DATA, req, DataRequestCommand.GAME_DATA);
                    //uniLib.NetMgr.tcpSend();
                    break;
                default:
                    break;
            }
        };
        InfoMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        InfoMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            if (this._view) {
                this._view.destory();
                this._view = null;
            }
        };
        InfoMediator.prototype.listNotificationInterests = function () {
            return [
                lhj.AppFacadeConst.ROOM_INIT,
                lhj.AppFacadeConst.BET_REPLY,
                lhj.AppFacadeConst.LOTTERY_RESULT,
                lhj.AppFacadeConst.SELECT_BOX
            ];
        };
        InfoMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case lhj.AppFacadeConst.ROOM_INIT:
                    if (this._view) {
                        this._view.initInfo(notification.getBody());
                    }
                    break;
                case lhj.AppFacadeConst.BET_REPLY:
                    if (this._view) {
                        this._view.setChips(notification.getBody().chips);
                    }
                    break;
                case lhj.AppFacadeConst.LOTTERY_RESULT:
                    if (this._view) {
                        this._view.setChips(notification.getBody().chips);
                        this._view.setIncome(notification.getBody().lotchips);
                    }
                    break;
                case lhj.AppFacadeConst.SELECT_BOX:
                    if (this._view) {
                        this._view.setChips(notification.getBody().chips);
                    }
                    break;
                default:
                    break;
            }
        };
        InfoMediator.NAME = "InfoMediator";
        return InfoMediator;
    }(puremvc.Mediator));
    lhj.InfoMediator = InfoMediator;
    __reflect(InfoMediator.prototype, "lhj.InfoMediator");
})(lhj || (lhj = {}));
