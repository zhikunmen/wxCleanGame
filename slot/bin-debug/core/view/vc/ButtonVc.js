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
    var ButtonVc = (function (_super) {
        __extends(ButtonVc, _super);
        function ButtonVc() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.chipsArr = [];
            _this.selectBet = 1000;
            _this.time = 0;
            _this.isBet = true; //本局是否能下注
            _this.skinName = "ButtonVcSkin";
            _this.init();
            return _this;
        }
        Object.defineProperty(ButtonVc, "instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new ButtonVc();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        ButtonVc.prototype.init = function () {
            this.downTime = new egret.Timer(1000);
            this.downTime.addEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
            this.downTime.stop();
            this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoreMenu, this);
            this.upBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upBet, this);
            this.downBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.downBet, this);
            this.maxBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setMax, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBet, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startTime, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTime, this);
            this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            this.speed_bg.touchEnabled = true;
            this.speed_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            this.AutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAuto, this);
        };
        //开启计时器
        ButtonVc.prototype.startTime = function (evt) {
            evt.stopPropagation();
            if (this.downTime) {
                this.time = 0;
                this.downTime.start();
            }
        };
        //关闭计时器
        ButtonVc.prototype.stopTime = function (evt) {
            evt.stopPropagation();
            if (this.downTime) {
                this.downTime.stop();
            }
            if (this.time < 3) {
                this.startGame(false);
            }
            this.time = 0;
        };
        //点击开始
        ButtonVc.prototype.onBet = function (evt) {
            evt.stopPropagation();
            this.startGame(false);
        };
        //检测开始按钮按住几秒,超过3秒启动自动开始游戏模式
        ButtonVc.prototype.countSecond = function () {
            this.time++;
            if (this.time == 3) {
                this.startGame(true);
                this.AutoBtn.visible = true;
                this.startBtn.visible = false;
            }
        };
        //启动游戏
        ButtonVc.prototype.startGame = function (isAuto) {
            if (this.downTime) {
                this.downTime.stop();
                this.time = 0;
            }
            if (!this.isBet) {
                return;
            }
            //玩家身上金币大于选择筹码则发送下注请求，如果不足则弹出充值页面
            if (lhj.RoomInfo.getInstance().chips >= this.selectBet) {
                var req = new Cmd.BetRequestCmd_C();
                req.autobet = isAuto;
                req.betchips = this.selectBet;
                uniLib.NetMgr.tcpSend(req);
            }
            else {
                lhj.PublicManage.getInstance().showCommonBuy(1);
            }
        };
        //设置房间筹码大小
        ButtonVc.prototype.initChip = function (rev) {
            this.chipsArr = rev.betchips;
            this.selectBet = this.chipsArr[0];
            this.chipsTxt.text = lhj.ResUtil.simplifyNum(this.selectBet);
        };
        //向上更换筹码
        ButtonVc.prototype.upBet = function (evt) {
            evt.stopPropagation();
            this.index++;
            this.setChip();
        };
        //向下更换筹码
        ButtonVc.prototype.downBet = function (evt) {
            evt.stopPropagation();
            this.index--;
            this.setChip();
        };
        //更换下注筹码
        ButtonVc.prototype.setChip = function () {
            if (this.index > 6) {
                this.index = 6;
            }
            if (this.index < 0) {
                this.index = 0;
            }
            this.selectBet = this.chipsArr[this.index];
            this.chipsTxt.text = lhj.ResUtil.simplifyNum(this.selectBet);
        };
        //选择最大下注筹码值
        ButtonVc.prototype.setMax = function (evt) {
            evt.stopPropagation();
            this.selectBet = this.chipsArr[0];
            for (var i = 0; i < this.chipsArr.length; i++) {
                if (lhj.RoomInfo.getInstance().chips >= this.chipsArr[i]) {
                    this.selectBet = this.chipsArr[i];
                    this.chipsTxt.text = lhj.ResUtil.simplifyNum(this.selectBet);
                }
            }
        };
        //打开左下角按钮
        ButtonVc.prototype.onMoreMenu = function (evt) {
            var _this = this;
            evt.stopPropagation();
            if (!this.morePanel) {
                this.morePanel = new lhj.MoreMenuPanel();
                this.morePanel.scaleX = 0;
                egret.Tween.get(this.morePanel).to({ scaleX: 1 }, 100).call(function () {
                    egret.Tween.removeTweens(_this.morePanel);
                });
                lhj.GameInfo.uiLayer.addChild(this.morePanel);
                this.morePanel.addEventListener(lhj.UIEventConsts.SHOW_HELP_PANEL, this.moreHandler, this);
                this.morePanel.addEventListener(lhj.UIEventConsts.SHOW_SETTING_PANEL, this.moreHandler, this);
                this.morePanel.addEventListener(lhj.UIEventConsts.EXIT_GAME, this.moreHandler, this);
                this.morePanel.addEventListener(lhj.UIEventConsts.CLOSE, this.removeMorePanel, this);
            }
            else {
                this.removeMorePanel(null);
            }
        };
        //启动加速模式
        ButtonVc.prototype.openAdd = function (evt) {
            evt.stopPropagation();
            lhj.RoomInfo.getInstance().isAdd = true;
            this.addBtn.visible = false;
            this.reduceBtn.visible = true;
            this.speed_bg.source = "lhj_open_bg";
        };
        //关闭加速模式
        ButtonVc.prototype.closeAdd = function (evt) {
            evt.stopPropagation();
            lhj.RoomInfo.getInstance().isAdd = false;
            this.addBtn.visible = true;
            this.reduceBtn.visible = false;
            this.speed_bg.source = "lhj_close_bg";
        };
        ButtonVc.prototype.stopAuto = function (evt) {
            var req = new Cmd.CancelAutoBetCmd_C();
            uniLib.NetMgr.tcpSend(req);
            this.AutoBtn.visible = false;
            this.startBtn.visible = true;
        };
        //改变速度模式
        ButtonVc.prototype.changeSpeed = function (evt) {
            evt.stopPropagation();
            if (lhj.RoomInfo.getInstance().isAdd) {
                lhj.RoomInfo.getInstance().isAdd = false;
                this.addBtn.visible = true;
                this.reduceBtn.visible = false;
                this.speed_bg.source = "lhj_close_bg";
            }
            else {
                lhj.RoomInfo.getInstance().isAdd = true;
                this.addBtn.visible = false;
                this.reduceBtn.visible = true;
                this.speed_bg.source = "lhj_open_bg";
            }
        };
        ButtonVc.prototype.removeMorePanel = function (evt) {
            if (this.morePanel) {
                this.morePanel.removeEventListener(lhj.UIEventConsts.SHOW_HELP_PANEL, this.moreHandler, this);
                this.morePanel.removeEventListener(lhj.UIEventConsts.SHOW_SETTING_PANEL, this.moreHandler, this);
                this.morePanel.removeEventListener(lhj.UIEventConsts.EXIT_GAME, this.moreHandler, this);
                this.morePanel.removeEventListener(lhj.UIEventConsts.CLOSE, this.removeMorePanel, this);
                this.morePanel.destory();
                this.morePanel = null;
            }
        };
        ButtonVc.prototype.moreHandler = function (evt) {
            this.dispatchEvent(evt);
        };
        //设置下注状态
        ButtonVc.prototype.setBet = function (bool) {
            this.isBet = bool;
            this.startBtn.enabled = bool;
        };
        ButtonVc.prototype.destory = function () {
            this.removeMorePanel(null);
            if (this.moreBtn) {
                this.moreBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoreMenu, this);
            }
            if (this.upBtn) {
                this.upBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.upBet, this);
            }
            if (this.downBtn) {
                this.downBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.downBet, this);
            }
            if (this.maxBtn) {
                this.maxBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.setMax, this);
            }
            if (this.downTime) {
                this.downTime.removeEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
                this.downTime.stop();
                this.downTime = null;
            }
            if (this.startBtn) {
                this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBet, this);
                this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startTime, this);
                this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTime, this);
            }
            if (this.addBtn) {
                this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            }
            if (this.reduceBtn) {
                this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            }
            if (this.speed_bg) {
                this.speed_bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSpeed, this);
            }
            if (this.AutoBtn) {
                this.AutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAuto, this);
            }
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        ButtonVc.NAME = "BUTTONVC";
        ButtonVc._self = null;
        return ButtonVc;
    }(eui.Component));
    lhj.ButtonVc = ButtonVc;
    __reflect(ButtonVc.prototype, "lhj.ButtonVc");
})(lhj || (lhj = {}));
