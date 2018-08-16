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
    var ButtonMediator = (function (_super) {
        __extends(ButtonMediator, _super);
        function ButtonMediator(viewComponent) {
            var _this = _super.call(this, ButtonMediator.NAME, viewComponent) || this;
            _this._view = new lhj.ButtonVc;
            lhj.GameInfo.uiLayer.addChild(_this._view);
            _this._view.scaleY = lhj.GameInfo.scaleY;
            _this._view.width = 1280 * lhj.GameInfo.scaleY;
            _this._view.x = (uniLib.Global.screenWidth - _this._view.width) / 2;
            _this.setViewComponent(_this._view);
            if (_this._view) {
                _this._view.addEventListener(lhj.UIEventConsts.SHOW_HELP_PANEL, _this.uiHandle, _this);
                _this._view.addEventListener(lhj.UIEventConsts.SHOW_SETTING_PANEL, _this.uiHandle, _this);
                _this._view.addEventListener(lhj.UIEventConsts.EXIT_GAME, _this.uiHandle, _this);
            }
            return _this;
        }
        ButtonMediator.prototype.uiHandle = function (evt) {
            var req;
            switch (evt.type) {
                case lhj.UIEventConsts.SHOW_HELP_PANEL:
                    this.showHelp(evt);
                    break;
                case lhj.UIEventConsts.SHOW_SETTING_PANEL:
                    this.showSetting(evt);
                    break;
                case lhj.UIEventConsts.EXIT_GAME:
                    this.showExitGame(evt);
                    break;
                default:
                    break;
            }
        };
        ButtonMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        ButtonMediator.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            if (this._view) {
                this._view.removeEventListener(lhj.UIEventConsts.SHOW_HELP_PANEL, this.uiHandle, this);
                this._view.removeEventListener(lhj.UIEventConsts.SHOW_SETTING_PANEL, this.uiHandle, this);
                this._view.removeEventListener(lhj.UIEventConsts.EXIT_GAME, this.uiHandle, this);
                this.removeHelp(null);
                this.removeSetting(null);
                this._view.destory();
            }
        };
        ButtonMediator.prototype.listNotificationInterests = function () {
            return [
                lhj.AppFacadeConst.BET_REPLY,
                lhj.AppFacadeConst.LOTTERY_RESULT,
                lhj.AppFacadeConst.ROOM_INIT
            ];
        };
        ButtonMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case lhj.AppFacadeConst.BET_REPLY:
                    if (this._view) {
                        this._view.setBet(false);
                    }
                    break;
                case lhj.AppFacadeConst.LOTTERY_RESULT:
                    if (this._view) {
                        this._view.setBet(true);
                    }
                    break;
                case lhj.AppFacadeConst.ROOM_INIT:
                    if (this._view) {
                        this._view.initChip(notification.getBody());
                    }
                    break;
                default:
                    break;
            }
        };
        //打开帮助页面
        ButtonMediator.prototype.showHelp = function (evt) {
            evt.stopPropagation();
            if (this._helpPanel) {
                this._helpPanel.destory();
                this._helpPanel = null;
            }
            if (!this._helpPanel) {
                this._helpPanel = new lhj.HelpPanel;
                this._helpPanel.addEventListener(lhj.UIEventConsts.CLOSE, this.removeHelp, this);
                lhj.PopupManager.addPopUp(this._helpPanel, true, true, true);
            }
        };
        //关闭帮助页面
        ButtonMediator.prototype.removeHelp = function (evt) {
            if (this._helpPanel) {
                this._helpPanel.removeEventListener(lhj.UIEventConsts.CLOSE, this.removeHelp, this);
                lhj.PopupManager.removePopUp(this._helpPanel);
            }
        };
        //打开设置页面
        ButtonMediator.prototype.showSetting = function (evt) {
            evt.stopPropagation();
            if (this._settingPanel) {
                this._settingPanel.destory();
                this._settingPanel = null;
            }
            if (!this._settingPanel) {
                this._settingPanel = new lhj.SettingPanel;
                this._settingPanel.addEventListener(lhj.UIEventConsts.CLOSE, this.removeSetting, this);
                lhj.PopupManager.addPopUp(this._settingPanel, true, true, true);
            }
        };
        //关闭设置页面
        ButtonMediator.prototype.removeSetting = function (evt) {
            if (this._settingPanel) {
                this._settingPanel.removeEventListener(lhj.UIEventConsts.CLOSE, this.removeSetting, this);
                lhj.PopupManager.removePopUp(this._settingPanel);
            }
        };
        //打开退出房间页面
        ButtonMediator.prototype.showExitGame = function (evt) {
            evt.stopPropagation();
            lhj.PublicManage.getInstance().showConfirmPanel("确定要退出房间", ["确定", "取消"], [this.onLeaveRoom], null, this);
        };
        ButtonMediator.prototype.onLeaveRoom = function (evt) {
            var req = new Cmd.ExitGameCmd_C;
            this.sendNotification(lhj.AppFacadeConst.SEND_DATA, req, lhj.DataRequestCommand.GAME_DATA);
        };
        ButtonMediator.prototype.exitGame = function () {
            lhj.AppFacade.getInstance().sendNotification(lhj.AppFacadeConst.DESTORY);
            uniLib.Global.dispatchEvent(uniLib.ZqEvent.EVENT_G2L, { gameId: 4222 });
            //资源的移除让大厅来做
            uniLib.GameModuleUtils.ExitGame();
        };
        ButtonMediator.NAME = "ButtonMediator";
        return ButtonMediator;
    }(puremvc.Mediator));
    lhj.ButtonMediator = ButtonMediator;
    __reflect(ButtonMediator.prototype, "lhj.ButtonMediator");
})(lhj || (lhj = {}));
