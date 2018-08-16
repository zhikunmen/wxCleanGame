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
    //主UI视图
    var MainMediator = (function (_super) {
        __extends(MainMediator, _super);
        function MainMediator(viewComponent) {
            var _this = _super.call(this, MainMediator.NAME, viewComponent) || this;
            _this._view = new superslot.MainVc;
            superslot.GameInfo.uiLayer.addChild(_this._view);
            _this._view.width = 1280 * 720 / uniLib.Global.screenHeight;
            _this._view.x = (uniLib.Global.screenWidth - _this._view.width) / 2;
            _this._view.scaleY = superslot.GameInfo.scaleY;
            _this.setViewComponent(_this._view);
            if (_this._view) {
            }
            return _this;
        }
        MainMediator.prototype.uiHandle = function (evt) {
            var req;
            switch (evt.type) {
                default:
                    break;
            }
        };
        MainMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        MainMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            if (this._view) {
                this._view.destory();
            }
        };
        MainMediator.prototype.listNotificationInterests = function () {
            return [
                superslot.AppFacadeConst.FREE_TIME,
                superslot.AppFacadeConst.NOTIFY_START_BET,
                superslot.AppFacadeConst.NOTIFY_GAME_OPEN_CARD,
                superslot.AppFacadeConst.ROOM_INIT,
                superslot.AppFacadeConst.START_GAME,
                superslot.AppFacadeConst.LEFT_RIGHT_TRUE_GOLD,
                superslot.AppFacadeConst.BET_SIZE,
                superslot.AppFacadeConst.EIGHT_BUTTON_BET_INFO,
                superslot.AppFacadeConst.ALL_BET_OR_REPEAL,
                superslot.AppFacadeConst.EXIT_GAME,
                superslot.AppFacadeConst.RECORD_LAST_GAME_BET,
                superslot.AppFacadeConst.THREE_BET_FAIL
            ];
        };
        MainMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                // case AppFacadeConst.FREE_TIME:
                // 	if (this._view) {
                // 		this._view.onsleep();
                // 	}
                // 	break;
                // case AppFacadeConst.NOTIFY_START_BET:
                // 	if (this._view) {
                // 		this._view.startBet();
                // 	}
                // 	break;
                case superslot.AppFacadeConst.NOTIFY_GAME_OPEN_CARD:
                    if (this._view) {
                        // this._view.openLottery(notification.getBody());
                        // this._view.onAccelerate();
                    }
                    //notification.getBody().bankerLotInfo.lotteryId
                    break;
                case superslot.AppFacadeConst.ROOM_INIT:
                    if (this._view) {
                        if (notification.getBody().lotteryhistory) {
                            this._view.setLotteryHistory(notification.getBody().lotteryhistory);
                        }
                        if (notification.getBody().sizehistory) {
                            this._view.setSizeHistory(notification.getBody().sizehistory);
                        }
                        if (notification.getBody().userInfo) {
                            this._view.setRepeatTextValue(notification.getBody().roombet, notification.getBody().userInfo.chips, notification.getBody().userInfo.bounty);
                        }
                    }
                    break;
                case superslot.AppFacadeConst.START_GAME:
                    if (this._view) {
                        this._view.startGame(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.LEFT_RIGHT_TRUE_GOLD:
                    if (this._view) {
                        this._view.setRewardAndBalanceVaule(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.BET_SIZE:
                    if (this._view) {
                        this._view._small.enabled = false;
                        this._view._big.enabled = false;
                        this._view._start.enabled = false;
                        this._view.updateSizeView(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.EIGHT_BUTTON_BET_INFO:
                    if (this._view) {
                        this._view.updateEightTextView(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.ALL_BET_OR_REPEAL:
                    if (this._view) {
                        this._view.updateEightTextView2(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.EXIT_GAME:
                    this.exitGame();
                    break;
                case superslot.AppFacadeConst.RECORD_LAST_GAME_BET:
                    if (this._view) {
                        this._view.setLastGameRecord(notification.getBody());
                    }
                    break;
                case superslot.AppFacadeConst.THREE_BET_FAIL:
                    if (this._view) {
                        this._view.updateIsAutoGameState(notification.getBody());
                    }
                    break;
                default:
                    break;
            }
        };
        MainMediator.prototype.exitGame = function () {
            // console.error("退出游戏")
            superslot.AppFacade.getInstance().sendNotification(superslot.AppFacadeConst.DESTORY);
            uniLib.Global.dispatchEvent(uniLib.ZqEvent.EVENT_G2L, { gameId: 167 });
            //资源的移除让大厅来做
            //	RES.destroyRes("HB_Poker", true);
            //	RES.destroyRes("start_effect", true);
            /*
            uniLib.ResUtils.clearResConfigByGroupName(["HB_Poker"]);
            uniLib.ResUtils.clearResConfigByGroupName(["start_effect"]);
            */
            uniLib.GameModuleUtils.ExitGame();
        };
        MainMediator.NAME = "MainMediator";
        return MainMediator;
    }(puremvc.Mediator));
    superslot.MainMediator = MainMediator;
    __reflect(MainMediator.prototype, "superslot.MainMediator");
})(superslot || (superslot = {}));
