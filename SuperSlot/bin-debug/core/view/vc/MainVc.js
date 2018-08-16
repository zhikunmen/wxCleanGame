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
    var MainVc = (function (_super) {
        __extends(MainVc, _super);
        function MainVc() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.random = 0;
            // this.background = new egret.Bitmap(RES.getRes("ss_main_bg_jpg"));
            // this.addChild(this.background);
            // this.addChildAt
            // this.background.anchorOffsetX = this.background.width/2;
            // this.background.x = uniLib.Global.screenWidth/2;
            _this.skinName = "SuperSlot_MainViewSkin";
            return _this;
        }
        MainVc.prototype.init = function () {
            this.logoArray = [this.logo_1, this.logo_2, this.logo_3, this.logo_4, this.logo_5, this.logo_6, this.logo_7, this.logo_8, this.logo_9,
                this.logo_10, this.logo_11, this.logo_12, this.logo_13, this.logo_14, this.logo_15, this.logo_16, this.logo_17, this.logo_18, this.logo_19,
                this.logo_20, this.logo_21, this.logo_22, this.logo_23, this.logo_24];
            this.peripheralDisplayTimer = new egret.Timer(400, 0);
            superslotBC.addEvent(this, this.peripheralDisplayTimer, egret.TimerEvent.TIMER, this.peripheralDisplay);
            this.peripheralDisplayTimer.start();
            this.currentBetValue = 10000;
            this.betValueArray = [10000, 20000, 50000, 100000, 1000000];
            this.betAreaArray = [];
            this.currentBalanceValue = 0;
            this.specialPlayNumArray = [3, 4, 10, 22];
            this.sizeSourceArr = [];
            this.lotterySourceArr = [];
            this.isOpenPrize = false;
            this.isAutomaticGame = false;
            this.rewardCumulationArray = [];
            this.startCount = 0;
            this.firstIntoStartNum = 0;
            this.firstPressStartNum = 0;
            this.times = 0;
            this.isCompareDisplay = false;
            if (this.reward_up.text == "0") {
                this._compare.enabled = false;
            }
            for (var i = 0; i < 8; i++) {
                var betItem = new Cmd.Betbase();
                this.betAreaArray.push(betItem);
            }
            this.btnAddEventListener();
            this.initBitmapLabelTextZero();
            this.setData();
            this.beatTimer = new egret.Timer(300, -1);
            this.beatTimer.stop();
            this._start.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this._start.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            this._start.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchEnd, this);
        };
        MainVc.prototype.touchBegin = function () {
            // console.error("touchBegin");
            // this.limitClickTimes();
            if (!this._start.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                this._start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            }
            if (!this._start.hasEventListener(egret.TouchEvent.TOUCH_END)) {
                this._start.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            if (!this.longPressTimer) {
                this.longPressTimer = new egret.Timer(3000, 1);
                // superslotBC.addEvent(this, this.sizeTimer, egret.TimerEvent.TIMER, this.sizeTimering);
                if (!this.longPressTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                    superslotBC.addEvent(this, this.longPressTimer, egret.TimerEvent.TIMER_COMPLETE, this.longPressComplete);
                }
                // console.error("longPressTimer new");
                this.longPressTimer.start();
            }
        };
        MainVc.prototype.touchEnd = function (evt) {
            // console.error("touchEnd");
            if (this.longPressTimer) {
                if (this.longPressTimer.running) {
                    // console.error("touchEnd running");
                    if (this.longPressTimer) {
                        this.longPressTimer.stop();
                        this.longPressTimer = null;
                    }
                }
                else {
                    // console.error("touchEnd not running");
                    if (this._start.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                        this._start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    }
                }
            }
        };
        MainVc.prototype.longPressComplete = function () {
            // console.error("longPressComplete");
            if (this.longPressTimer) {
                // console.error("longPressComplete isAutomaticGame = true");
                this.isAutomaticGame = true;
            }
            if (this.longPressTimer) {
                this.longPressTimer.stop();
                this.longPressTimer = null;
            }
            if (this.isAutomaticGame == true) {
                // this._start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                egret.TouchEvent.dispatchTouchEvent(this._start, egret.TouchEvent.TOUCH_TAP);
                // if ((this.lastGameRecordInfo && this.lastGameRecordInfo.length > 0) || (this.bar_up.text != "0" || this.seven_up.text != "0" || this.star_up.text != "0" || this.watermelon_up.text != "0" 
                // 		|| this.bell_up.text != "0" || this.papaya_up.text != "0" || this.orange_up.text != "0" || this.apple_up.text != "0")) {
                // 	this._startCircle.visible = true;
                // 	this.startInterval = setInterval(() => {
                // 		this.startCount += 1;
                // 		if(this.startCount % 2 == 1) {
                // 			this._startCircle.source = "ss_start_circle_2_png";
                // 		} else if (this.startCount % 2 == 0) {
                // 			this._startCircle.source = "ss_start_circle_1_png";
                // 		}
                // 	}, 400);
                // }
            }
        };
        MainVc.prototype.btnAddEventListener = function () {
            this._bar.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._seven.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._star.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._watermelon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._bell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._papaya.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._orange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._apple.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._plus.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._full.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._revoke.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._small.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._big.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._compare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this._backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitGame, this);
            this._helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHelp, this);
            this._settingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showSetting, this);
            this.auto_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.autoOnClick, this);
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.screenOnClick, this);
            // superslotBC.removeEvent(this);
        };
        MainVc.prototype.initBitmapLabelTextZero = function () {
            this.reward_up.text = "0";
            this.bar_up.text = "0";
            this.seven_up.text = "0";
            this.star_up.text = "0";
            this.watermelon_up.text = "0";
            this.bell_up.text = "0";
            this.papaya_up.text = "0";
            this.orange_up.text = "0";
            this.apple_up.text = "0";
            this.bet_up.text = String(this.betValueArray[0]);
        };
        MainVc.prototype.onClick = function (evt) {
            var betIndex = 0;
            if (this.autoPlayEachIntervalTimer) {
                this.autoPlayEachIntervalTimer.stop();
                this.autoPlayEachIntervalTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete, this);
                this.autoPlayEachIntervalTimer = null;
            }
            if (this.bet_up.text.indexOf("万") > -1) {
                var textStr = this.bet_up.text.substring(0, this.bet_up.text.indexOf("万"));
                betIndex = this.betValueArray.indexOf(Number(textStr) * 10000);
            }
            else {
                betIndex = this.betValueArray.indexOf(Number(this.bet_up.text));
            }
            if (this.isOpenPrize) {
                this.winNumButtonIdArray = [];
                this.bar_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.seven_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.star_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.watermelon_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.bell_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.papaya_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.orange_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.apple_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this._bar.alpha = 1;
                this._seven.alpha = 1;
                this._star.alpha = 1;
                this._watermelon.alpha = 1;
                this._bell.alpha = 1;
                this._papaya.alpha = 1;
                this._orange.alpha = 1;
                this._apple.alpha = 1;
                this.reward_up_other.visible = false;
                this.reward_up.visible = true;
                this.isOpenPrize = false;
            }
            switch (evt.target) {
                case this._bar:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[7] + superslot.RoomInfo.getInstance().soundType, 1);
                    var barReq = new Cmd.BetRequestRoomCmd_C;
                    var barBetBase = new Cmd.Betbase;
                    var barBetInfoArr = [];
                    barBetBase.betid = 8;
                    barBetBase.chips = this.textStrToNumber(this.bar_up.text);
                    barBetInfoArr.push(barBetBase);
                    barReq.betinfo = barBetInfoArr;
                    barReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(barReq);
                    break;
                case this._seven:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[6] + superslot.RoomInfo.getInstance().soundType, 1);
                    var sevenReq = new Cmd.BetRequestRoomCmd_C;
                    var sevenBetBase = new Cmd.Betbase;
                    var sevenBetInfoArr = [];
                    sevenBetBase.betid = 7;
                    sevenBetBase.chips = this.textStrToNumber(this.seven_up.text);
                    sevenBetInfoArr.push(sevenBetBase);
                    sevenReq.betinfo = sevenBetInfoArr;
                    sevenReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(sevenReq);
                    break;
                case this._star:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[5] + superslot.RoomInfo.getInstance().soundType, 1);
                    var starReq = new Cmd.BetRequestRoomCmd_C;
                    var starBetBase = new Cmd.Betbase;
                    var starBetInfoArr = [];
                    starBetBase.betid = 6;
                    starBetBase.chips = this.textStrToNumber(this.star_up.text);
                    starBetInfoArr.push(starBetBase);
                    starReq.betinfo = starBetInfoArr;
                    starReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(starReq);
                    break;
                case this._watermelon:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[4] + superslot.RoomInfo.getInstance().soundType, 1);
                    var watermelonReq = new Cmd.BetRequestRoomCmd_C;
                    var watermelonBetBase = new Cmd.Betbase;
                    var watermelonBetInfoArr = [];
                    watermelonBetBase.betid = 5;
                    watermelonBetBase.chips = this.textStrToNumber(this.watermelon_up.text);
                    watermelonBetInfoArr.push(watermelonBetBase);
                    watermelonReq.betinfo = watermelonBetInfoArr;
                    watermelonReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(watermelonReq);
                    break;
                case this._bell:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[3] + superslot.RoomInfo.getInstance().soundType, 1);
                    var bellReq = new Cmd.BetRequestRoomCmd_C;
                    var bellBetBase = new Cmd.Betbase;
                    var bellBetInfoArr = [];
                    bellBetBase.betid = 4;
                    bellBetBase.chips = this.textStrToNumber(this.bell_up.text);
                    bellBetInfoArr.push(bellBetBase);
                    bellReq.betinfo = bellBetInfoArr;
                    bellReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(bellReq);
                    break;
                case this._papaya:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[2] + superslot.RoomInfo.getInstance().soundType, 1);
                    var papayaReq = new Cmd.BetRequestRoomCmd_C;
                    var papayaBetBase = new Cmd.Betbase;
                    var papayaBetInfoArr = [];
                    papayaBetBase.betid = 3;
                    papayaBetBase.chips = this.textStrToNumber(this.papaya_up.text);
                    papayaBetInfoArr.push(papayaBetBase);
                    papayaReq.betinfo = papayaBetInfoArr;
                    papayaReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(papayaReq);
                    break;
                case this._orange:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[1] + superslot.RoomInfo.getInstance().soundType, 1);
                    var orangeReq = new Cmd.BetRequestRoomCmd_C;
                    var orangeBetBase = new Cmd.Betbase;
                    var orangeBetInfoArr = [];
                    orangeBetBase.betid = 2;
                    orangeBetBase.chips = this.textStrToNumber(this.orange_up.text);
                    orangeBetInfoArr.push(orangeBetBase);
                    orangeReq.betinfo = orangeBetInfoArr;
                    orangeReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(orangeReq);
                    break;
                case this._apple:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.CHIPIN_SOUND[0] + superslot.RoomInfo.getInstance().soundType, 1);
                    var appleReq = new Cmd.BetRequestRoomCmd_C;
                    var appleBetBase = new Cmd.Betbase;
                    var appleBetInfoArr = [];
                    appleBetBase.betid = 1;
                    appleBetBase.chips = this.textStrToNumber(this.apple_up.text);
                    appleBetInfoArr.push(appleBetBase);
                    appleReq.betinfo = appleBetInfoArr;
                    appleReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(appleReq);
                    break;
                case this._reduce:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    if (betIndex != 0) {
                        this.bet_up.text = superslot.ResUtil.superslotNumFormat(this.betValueArray[betIndex - 1], 100000, false);
                        this.currentBetValue = this.betValueArray[betIndex - 1];
                    }
                    break;
                case this._plus:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    if (betIndex != 4) {
                        this.bet_up.text = superslot.ResUtil.superslotNumFormat(this.betValueArray[betIndex + 1], 100000, false);
                        this.currentBetValue = this.betValueArray[betIndex + 1];
                    }
                    break;
                case this._full:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var allBetReq = new Cmd.AllBetOrRepealRoomCmd_C;
                    allBetReq.type = 1;
                    allBetReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(allBetReq);
                    break;
                case this._revoke:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var repealReq = new Cmd.AllBetOrRepealRoomCmd_C;
                    repealReq.type = 2;
                    repealReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(repealReq);
                    break;
                case this._left:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var trueGoldLeftReq = new Cmd.TrueGoldRoomCmd_C;
                    trueGoldLeftReq.sizeid = 0;
                    trueGoldLeftReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(trueGoldLeftReq);
                    break;
                case this._right:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var trueGoldRightReq = new Cmd.TrueGoldRoomCmd_C;
                    trueGoldRightReq.sizeid = 1;
                    trueGoldRightReq.chips = this.currentBetValue;
                    uniLib.NetMgr.tcpSend(trueGoldRightReq);
                    break;
                case this._small:
                    if (this.bar_up.text != "0" || this.seven_up.text != "0" || this.star_up.text != "0" || this.watermelon_up.text != "0"
                        || this.bell_up.text != "0" || this.papaya_up.text != "0" || this.orange_up.text != "0" || this.apple_up.text != "0") {
                        var returnReq = new Cmd.AllBetOrRepealRoomCmd_C;
                        returnReq.type = 2;
                        returnReq.chips = this.currentBetValue;
                        uniLib.NetMgr.tcpSend(returnReq);
                    }
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var smallReq = new Cmd.BetSizeRoomCmd_C;
                    smallReq.sizeid = 0;
                    uniLib.NetMgr.tcpSend(smallReq);
                    break;
                case this._big:
                    if (this.bar_up.text != "0" || this.seven_up.text != "0" || this.star_up.text != "0" || this.watermelon_up.text != "0"
                        || this.bell_up.text != "0" || this.papaya_up.text != "0" || this.orange_up.text != "0" || this.apple_up.text != "0") {
                        var returnReq = new Cmd.AllBetOrRepealRoomCmd_C;
                        returnReq.type = 2;
                        returnReq.chips = this.currentBetValue;
                        uniLib.NetMgr.tcpSend(returnReq);
                    }
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    var bigReq = new Cmd.BetSizeRoomCmd_C;
                    bigReq.sizeid = 1;
                    uniLib.NetMgr.tcpSend(bigReq);
                    break;
                case this._start:
                    // console.error("this._start : 按下了按钮");
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    // this.limitClickTimes();
                    if (this.isAutomaticGame) {
                        this.firstIntoStartNum += 1;
                        var betChipSum = 0;
                        if (this.lastGameRecordInfo && this.lastGameRecordInfo.length > 0) {
                            for (var i = 0; i < this.lastGameRecordInfo.length; i++) {
                                betChipSum += this.lastGameRecordInfo[i].chips;
                            }
                        }
                        if (!this.lastGameRecordInfo) {
                            this.firstIntoStartNum = 1;
                        }
                        if (this.firstIntoStartNum == 1) {
                            if (this.textStrToNumber(this.balance_up.text) < betChipSum) {
                                uniLib.TipsUtils.showTipsDownToUp("金币不足", 0xffffff);
                                egret.TouchEvent.dispatchTouchEvent(this.auto_start, egret.TouchEvent.TOUCH_TAP);
                            }
                            else {
                                if (this.reward_up.text != "0") {
                                    var trueGoldtReq = new Cmd.TrueGoldRoomCmd_C;
                                    trueGoldtReq.sizeid = 1;
                                    trueGoldtReq.chips = this.textStrToNumber(this.reward_up.text);
                                    // console.error("TrueGoldRoomCmd_C : " + trueGoldtReq.chips);
                                    uniLib.NetMgr.tcpSend(trueGoldtReq);
                                }
                                else {
                                    var startGameReq = new Cmd.StartGameRoomCmd_C;
                                    if (this.reward_up.text == "0") {
                                        if (this.bar_up.text == "0" && this.seven_up.text == "0" && this.star_up.text == "0" && this.watermelon_up.text == "0"
                                            && this.bell_up.text == "0" && this.papaya_up.text == "0" && this.orange_up.text == "0" && this.apple_up.text == "0") {
                                            startGameReq.betinfo = this.lastGameRecordInfo;
                                            // console.error("有没有下注记录 : 上局记录下注");
                                        }
                                        // console.error("有没有下注记录 : 重新下注");
                                        uniLib.NetMgr.tcpSend(startGameReq);
                                    }
                                }
                            }
                        }
                        break;
                    }
                    else {
                        if (this.reward_up.text != "0") {
                            var trueGoldtReq = new Cmd.TrueGoldRoomCmd_C;
                            trueGoldtReq.sizeid = 1;
                            trueGoldtReq.chips = this.textStrToNumber(this.reward_up.text);
                            uniLib.NetMgr.tcpSend(trueGoldtReq);
                            break;
                        }
                        var startGameReq = new Cmd.StartGameRoomCmd_C;
                        if (this.reward_up.text == "0") {
                            this.firstPressStartNum += 1;
                            if (!this.lastGameRecordInfo) {
                                this.firstPressStartNum = 1;
                            }
                            if (this.bar_up.text == "0" && this.seven_up.text == "0" && this.star_up.text == "0" && this.watermelon_up.text == "0"
                                && this.bell_up.text == "0" && this.papaya_up.text == "0" && this.orange_up.text == "0" && this.apple_up.text == "0") {
                                startGameReq.betinfo = this.lastGameRecordInfo;
                                // console.error("有没有下注记录 : 上局记录下注");
                            }
                            // console.error("有没有下注记录 : 重新下注");
                            if (this.firstPressStartNum == 1) {
                                uniLib.NetMgr.tcpSend(startGameReq);
                            }
                        }
                        break;
                    }
                case this._compare:
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.OTHER_BUTTON_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    if (this.reward_up.text == "0") {
                        uniLib.TipsUtils.showTipsDownToUp("没有奖励金", 0xffffff);
                    }
                    else {
                        this._compare.visible = false;
                        this._small.visible = true;
                        this._big.visible = true;
                    }
                    break;
            }
        };
        MainVc.prototype.autoOnClick = function () {
            this.auto_start.visible = false;
            this._start.visible = true;
            this._start.enabled = true;
            this._startCircle.visible = false;
            clearInterval(this.startInterval);
            this.isAutomaticGame = false;
            if (!this.isAutomaticGame) {
                this._bar.enabled = true;
                this._seven.enabled = true;
                this._star.enabled = true;
                this._watermelon.enabled = true;
                this._bell.enabled = true;
                this._papaya.enabled = true;
                this._orange.enabled = true;
                this._apple.enabled = true;
                this._left.enabled = true;
                this._right.enabled = true;
                if (this.reward_up.text == "0") {
                    if (this._small.visible || this._big.visible) {
                        this._small.visible = false;
                        this._big.visible = false;
                        this._compare.visible = true;
                    }
                    this._compare.enabled = false;
                }
                if (this.reward_up.text == "0") {
                    this._full.enabled = true;
                    this._revoke.enabled = true;
                }
                else {
                    this._full.enabled = false;
                    this._revoke.enabled = false;
                    this._compare.enabled = true;
                    if (this._small.visible || this._big.visible) {
                        this._small.enabled = true;
                        this._big.enabled = true;
                    }
                }
            }
        };
        MainVc.prototype.addEvent = function () {
            superslotBC.addEvent(this, this.beatTimer, egret.TimerEvent.TIMER, this.randomBeat);
        };
        MainVc.prototype.setTextValue = function (_currentText) {
            var currentBarTextValue = Number(_currentText.text);
            if (_currentText.text.indexOf("亿") > -1) {
                var numberText = _currentText.text.substring(0, _currentText.text.indexOf("亿"));
                var barUpText = Number(numberText) * 100000000 + this.currentBetValue;
                _currentText.text = superslot.ResUtil.superslotNumFormat(barUpText, 100000, false);
            }
            else if (_currentText.text.indexOf("万") > -1) {
                var numberText = _currentText.text.substring(0, _currentText.text.indexOf("万"));
                var barUpText = Number(numberText) * 10000 + this.currentBetValue;
                _currentText.text = superslot.ResUtil.superslotNumFormat(barUpText, 100000, false);
            }
            else {
                var barUpText = Number(_currentText.text) + this.currentBetValue;
                _currentText.text = superslot.ResUtil.superslotNumFormat(barUpText, 100000, false);
            }
        };
        MainVc.prototype.textStrToNumber = function (textStr) {
            if (textStr == "null" || textStr == "undefined") {
                return;
            }
            if (textStr.indexOf("亿") > -1) {
                textStr = textStr.substring(0, textStr.indexOf("亿"));
                return parseFloat(textStr) * 100000000;
            }
            else if (textStr.indexOf("万") > -1) {
                textStr = textStr.substring(0, textStr.indexOf("万"));
                return parseFloat(textStr) * 10000;
            }
            else {
                return parseFloat(textStr);
            }
        };
        MainVc.prototype.setSizeHistory = function (sizeInfo) {
            this.sizeScroller.scrollPolicyV = "off";
            this.sizeScroller.scrollPolicyH = "off";
            this.sizeScroller.viewport = this.sizeList;
            this.sizeList.itemRenderer = superslot.SizeListViewItem;
            if (sizeInfo.length == 1) {
                if (sizeInfo[0] == -1) {
                    sizeInfo = [];
                }
            }
            if (sizeInfo.length > 10) {
                sizeInfo = sizeInfo.slice(sizeInfo.length - 10);
            }
            this.sizeSourceArr = sizeInfo;
            if (this.sizeSourceArr.length > 0) {
                this.sizeList.dataProvider = new eui.ArrayCollection(this.sizeSourceArr);
            }
        };
        MainVc.prototype.setLotteryHistory = function (lotteryInfo) {
            this.lotteryScroller.scrollPolicyV = "off";
            this.lotteryScroller.scrollPolicyH = "off";
            this.lotteryScroller.viewport = this.lotteryList;
            this.lotteryList.itemRenderer = superslot.LotteryListViewItem;
            if (lotteryInfo.length > 12) {
                lotteryInfo = lotteryInfo.slice(lotteryInfo.length - 12);
            }
            for (var i = 0; i < lotteryInfo.length; i++) {
                if (lotteryInfo[i].cardid == -1) {
                    lotteryInfo.splice(i, 1);
                }
            }
            this.lotterySourceArr = lotteryInfo;
            if (this.lotterySourceArr.length > 0) {
                this.lotteryList.dataProvider = new eui.ArrayCollection(this.lotterySourceArr);
            }
        };
        MainVc.prototype.setRepeatTextValue = function (betbase, chipStr, bountyStr) {
            this.currentBalanceValue = chipStr;
            this.balance_up.text = superslot.ResUtil.superslotNumFormat(this.currentBalanceValue, 100000, true);
            this.initBitmapLabelTextZero();
            this.currentBetValue = 10000;
            this.betValueArray = [10000, 20000, 50000, 100000, 1000000];
            this.betAreaArray = [];
            // this.currentBalanceValue = 0;
            this.specialPlayNumArray = [3, 4, 10, 22];
            this.sizeSourceArr = [];
            this.lotterySourceArr = [];
            this.isOpenPrize = false;
            this.isAutomaticGame = false;
            this.rewardCumulationArray = [];
            this.startCount = 0;
            this.firstIntoStartNum = 0;
            this.firstPressStartNum = 0;
            this.times = 0;
            this.isCompareDisplay = false;
            if (this.reward_up.text == "0") {
                this._compare.enabled = false;
            }
            for (var i = 0; i < 8; i++) {
                var betItem = new Cmd.Betbase();
                this.betAreaArray.push(betItem);
            }
            this.btnAddEventListener();
            this.setData();
            this._start.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this._start.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            this._start.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchEnd, this);
        };
        MainVc.prototype.setRewardAndBalanceVaule = function (res) {
            var _this = this;
            if (res && res.remainbounty >= 0) {
                this.reward_up.text = superslot.ResUtil.superslotNumFormat(res.remainbounty, 100000, false);
            }
            if (res && res.remainder >= 0) {
                this.balance_up.text = superslot.ResUtil.superslotNumFormat(res.remainder, 100000, true);
            }
            if (!this.isAutomaticGame) {
                this.isCompareDisplay = false;
                if (this.reward_up.text != "0") {
                    this._compare.enabled = true;
                    this._full.enabled = false;
                    this._revoke.enabled = false;
                    if (!this.leftRightClickTimer) {
                        this.leftRightClickTimer = new egret.Timer(1500, 1);
                        superslotBC.addEvent(this, this.leftRightClickTimer, egret.TimerEvent.TIMER, this.leftRightClick);
                        superslotBC.addEvent(this, this.leftRightClickTimer, egret.TimerEvent.TIMER_COMPLETE, this.leftRightClickComplete);
                        this.leftRightClickTimer.start();
                    }
                }
                else if (this.reward_up.text == "0") {
                    this.isCompareDisplay = true;
                    if (this.leftRightClickTimer) {
                        this.leftRightClickTimer.stop();
                        this.leftRightClickTimer = null;
                        // clearInterval(this.rewardInterval);
                    }
                    if (this._small.visible || this._big.visible) {
                        this._small.visible = false;
                        this._big.visible = false;
                        this._compare.visible = true;
                    }
                    this._compare.enabled = false;
                    this._full.enabled = true;
                    this._revoke.enabled = true;
                }
            }
            if (this.isAutomaticGame) {
                if (this.reward_up.text == "0") {
                    if (this._big.visible || this._small.visible) {
                        this._big.visible = false;
                        this._small.visible = false;
                    }
                    if (this._compare.visible) {
                        this._compare.enabled = false;
                    }
                    else {
                        this._compare.visible = true;
                        this._compare.enabled = false;
                    }
                }
                var betChipSum_1 = 0;
                if (this.lastGameRecordInfo && this.lastGameRecordInfo.length > 0) {
                    for (var i = 0; i < this.lastGameRecordInfo.length; i++) {
                        betChipSum_1 += this.lastGameRecordInfo[i].chips;
                    }
                }
                var balanceNum_1 = this.textStrToNumber(this.balance_up.text);
                setTimeout(function () {
                    if (balanceNum_1 < betChipSum_1) {
                        uniLib.TipsUtils.showTipsDownToUp("金币不足", 0xffffff);
                        egret.TouchEvent.dispatchTouchEvent(_this.auto_start, egret.TouchEvent.TOUCH_TAP);
                    }
                    else {
                        var startGameReq = new Cmd.StartGameRoomCmd_C;
                        if (_this.reward_up.text == "0") {
                            if (_this.bar_up.text == "0" && _this.seven_up.text == "0" && _this.star_up.text == "0" && _this.watermelon_up.text == "0"
                                && _this.bell_up.text == "0" && _this.papaya_up.text == "0" && _this.orange_up.text == "0" && _this.apple_up.text == "0") {
                                startGameReq.betinfo = _this.lastGameRecordInfo;
                                // console.error("--------有没有下注记录 : 上局记录下注");
                            }
                            // console.error("--------有没有下注记录 : 重新下注");
                            uniLib.NetMgr.tcpSend(startGameReq);
                        }
                    }
                }, 1000);
            }
        };
        MainVc.prototype.updateSizeView = function (res) {
            var sizeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            if (res.sizeid && res.sizeid > 0) {
                if (sizeArr.indexOf(res.sizeid) > -1) {
                    sizeArr.splice(sizeArr.indexOf(res.sizeid), 1);
                }
                this.sizeValueArray = superslot.ResUtil.shuffle(sizeArr);
                this.sizeValueArray.push(res.sizeid);
                this.sizeTimer = new egret.Timer(100, this.sizeValueArray.length + 1);
                superslotBC.addEvent(this, this.sizeTimer, egret.TimerEvent.TIMER, this.sizeTimering);
                superslotBC.addEvent(this, this.sizeTimer, egret.TimerEvent.TIMER_COMPLETE, this.sizeTimerComplete);
                this.sizeIndex = 0;
                this.betSizeRemainArray = [];
                this.betSizeRemainArray.push(res.remainbounty);
                this.betSizeRemainArray.push(res.remainder);
                this.sizeTimer.start();
            }
        };
        MainVc.prototype.sizeTimering = function () {
            if (this.sizeIndex < this.sizeValueArray.length) {
                // this._size.text = this.sizeValueArray[this.sizeIndex].toString();
                this.size_up.text = this.sizeValueArray[this.sizeIndex].toString();
            }
            else {
                if (this.sizeTimer) {
                    this.sizeTimer.stop();
                    this.sizeTimer = null;
                    if (this.betSizeRemainArray && this.betSizeRemainArray[0] >= 0) {
                        this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.betSizeRemainArray[0], 100000, false);
                    }
                    if (this.betSizeRemainArray && this.betSizeRemainArray[1] >= 0) {
                        this.balance_up.text = superslot.ResUtil.superslotNumFormat(this.betSizeRemainArray[1], 100000, true);
                    }
                }
            }
            this.sizeIndex++;
        };
        MainVc.prototype.sizeTimerComplete = function () {
            if (this.sizeTimer) {
                this.sizeTimer.stop();
                this.sizeTimer = null;
            }
            this.sizeSourceArr.push(this.sizeValueArray[this.sizeValueArray.length - 1]);
            this.setSizeHistory(this.sizeSourceArr);
            this._small.enabled = true;
            this._big.enabled = true;
            if (this.reward_up.text == "0") {
                this._compare.visible = true;
                if (this._compare.enabled) {
                    this._compare.enabled = false;
                }
                this._small.visible = false;
                this._big.visible = false;
            }
            if (this.reward_up.text != "0") {
                this._full.enabled = false;
                this._revoke.enabled = false;
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.COMPARE_MULTIPLE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (this.reward_up.text == "0") {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.LOSE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                this._full.enabled = true;
                this._revoke.enabled = true;
            }
            this._start.enabled = true;
        };
        MainVc.prototype.updateEightTextView = function (res) {
            if (res.betinfo && res.betinfo.length > 0) {
                for (var i = 0; i < res.betinfo.length; i++) {
                    if (res.betinfo[i].betid == 8) {
                        this.bar_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 7) {
                        this.seven_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 6) {
                        this.star_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 5) {
                        this.watermelon_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 4) {
                        this.bell_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 3) {
                        this.papaya_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 2) {
                        this.orange_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 1) {
                        this.apple_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                }
            }
            if (res.remainder >= 0) {
                this.balance_up.text = superslot.ResUtil.superslotNumFormat(res.remainder, 100000, true);
            }
        };
        MainVc.prototype.updateEightTextView2 = function (res) {
            if (res.betinfo && res.betinfo.length > 0) {
                for (var i = 0; i < res.betinfo.length; i++) {
                    if (res.betinfo[i].betid == 8) {
                        this.bar_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 7) {
                        this.seven_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 6) {
                        this.star_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 5) {
                        this.watermelon_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 4) {
                        this.bell_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 3) {
                        this.papaya_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 2) {
                        this.orange_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                    else if (res.betinfo[i].betid == 1) {
                        this.apple_up.text = superslot.ResUtil.superslotNumFormat(res.betinfo[i].chips, 100000, false);
                    }
                }
            }
            if (res.betinfo == null) {
                this.bar_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.seven_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.star_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.watermelon_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.bell_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.papaya_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.orange_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                this.apple_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
            }
            if (res.remainder) {
                this.balance_up.text = superslot.ResUtil.superslotNumFormat(res.remainder, 100000, true);
            }
        };
        MainVc.prototype.setData = function () {
            if (this.accelerate) {
                this.accelerate.stop();
                this.accelerate = null;
            }
            if (this.uniform) {
                this.uniform.stop();
                this.uniform = null;
            }
            if (this.decelerate) {
                this.decelerate.stop();
                this.decelerate = null;
            }
            this.initial_velocity = 320;
            this.accelerate_num = 50;
            this.uniform_num = 20;
            this.decelerate_num = 35;
            this.decelerate_time = 0;
            this.index = 0;
            this.winningChip = 0;
        };
        //随机跳动
        MainVc.prototype.randomBeat = function () {
            // let index = (this.random % 12) + 1;
            // this.logoArray[this.random].source = "slwh_logo_" + index;
            // let num = this.getRamdom();
            // let selected_num = num + 2;
            // if (selected_num > 24) {
            // 	selected_num = 1;
            // }
            // if (selected_num > 12) {
            // 	selected_num = selected_num - 12;
            // }
            // this.logoArray[this.random].source = "slwh_selected_" + Math.ceil(selected_num / 3);
            // if (this.random == 0 || this.random == 12) {
            // 	this.logoArray[this.random].source = "slwh_selected_5";
            // }
        };
        MainVc.prototype.getRamdom = function () {
            var num = Math.round(Math.random() * 23);
            if (this.random == num || num == this.random - 1 || num == this.random + 1) {
                num = this.getRamdom();
            }
            this.random = num;
            return num;
        };
        MainVc.prototype.startGame = function (rev) {
            // console.error("开始游戏 : startGame");
            if (this.displayLogoTimer) {
                this.displayLogoTimer.stop();
                this.displayLogoTimer = null;
            }
            // 清除所有亮的图片
            for (var i = 0; i < this.logoArray.length; i++) {
                this.logoArray[i].source = "ss_logo_" + (i + 1);
            }
            if (rev.animation == 0) {
                this.isPlayPrizeAnimation = false;
            }
            else if (rev.animation == 1) {
                this.isPlayPrizeAnimation = true;
            }
            this.lastGameWinningNum = this.winningNum;
            this.index = this.lastGameWinningNum - 1;
            if (!this.lastGameWinningNum) {
                this.lastGameWinningNum = 1;
                this.index = 0;
            }
            this.winningNum = rev.lotteryroom.cardid;
            this.lastDecelerationNum = Math.round(Math.random() * 10);
            if (this.lastDecelerationNum <= 6) {
                this.lastDecelerationNum = 6;
            }
            else if (this.lastDecelerationNum > 6 && this.lastDecelerationNum <= 7) {
                this.lastDecelerationNum = 7;
            }
            else {
                this.lastDecelerationNum = 8;
            }
            // console.error("上一局中奖数字 : " + this.lastGameWinningNum);
            // console.error("本局中奖数字 : " + this.winningNum);
            // console.error("this.lastDecelerationNum : " + this.lastDecelerationNum);
            this.specialWinningNum = [];
            if (rev.lotteryroom.specialcardid && rev.lotteryroom.specialcardid.length > 0) {
                this.specialWinningNum = rev.lotteryroom.specialcardid;
            }
            this.rewardCumulationArray = [];
            var tempRewardCumulationArray = [];
            for (var k = 0; k < rev.windetail.length; k++) {
                if ((this.winningNum == 3 && rev.windetail[k].id == 3) || (this.winningNum == 4 && rev.windetail[k].id == 4)) {
                    tempRewardCumulationArray.push(rev.windetail[k]);
                }
            }
            if (rev.windetail && rev.windetail.length > 0) {
                for (var i = 0; i < this.specialWinningNum.length; i++) {
                    for (var j = 0; j < rev.windetail.length; j++) {
                        if (this.specialWinningNum[i] == rev.windetail[j].id) {
                            tempRewardCumulationArray.push(rev.windetail[j]);
                        }
                    }
                }
            }
            for (var k = 0; k < tempRewardCumulationArray.length; k++) {
                if (k == 0) {
                    this.rewardCumulationArray.push(tempRewardCumulationArray[0].chips);
                }
                else if (k == 1) {
                    this.rewardCumulationArray.push(this.rewardCumulationArray[0] + tempRewardCumulationArray[1].chips);
                }
                else if (k == 2) {
                    this.rewardCumulationArray.push(this.rewardCumulationArray[1] + tempRewardCumulationArray[2].chips);
                }
                else if (k == 3) {
                    this.rewardCumulationArray.push(this.rewardCumulationArray[2] + tempRewardCumulationArray[3].chips);
                }
            }
            // console.error("本局中奖特殊数字 : " + this.specialWinningNum);
            // console.error("windetail长度 : " + rev.windetail);
            // console.error("本局中奖奖励金 : " + this.rewardCumulationArray);
            this.lotteryData = rev;
            this._bar.enabled = false;
            this._seven.enabled = false;
            this._star.enabled = false;
            this._watermelon.enabled = false;
            this._bell.enabled = false;
            this._papaya.enabled = false;
            this._orange.enabled = false;
            this._apple.enabled = false;
            this._full.enabled = false;
            this._revoke.enabled = false;
            this._left.enabled = false;
            this._right.enabled = false;
            this._big.enabled = false;
            this._small.enabled = false;
            this._start.enabled = false;
            this._plus.enabled = false;
            this._reduce.enabled = false;
            this.initial_velocity = 320;
            this.uniform_num = 20;
            this.decelerate_time = 0;
            this.winNumButtonIdArray = [];
            this.firstIntoStartNum = 0;
            this.firstPressStartNum = 0;
            this.middleJPDisplayTimer = new egret.Timer(80, 0);
            superslotBC.addEvent(this, this.middleJPDisplayTimer, egret.TimerEvent.TIMER, this.middleJPDisplay);
            // superslotBC.addEvent(this, this.middleJPDisplayTimer, egret.TimerEvent.TIMER_COMPLETE, this.middleJPDisplayComplete);
            this.middleJPDisplayTimer.start();
            this.onAccelerate();
        };
        // 加速
        MainVc.prototype.onAccelerate = function () {
            this.initial_velocity -= this.accelerate_num;
            this.accelerate = new egret.Timer(this.initial_velocity, 1);
            superslotBC.addEvent(this, this.accelerate, egret.TimerEvent.TIMER, this.showTurn);
            superslotBC.addEvent(this, this.accelerate, egret.TimerEvent.TIMER_COMPLETE, this.afterAccelerate);
            this.accelerate.start();
            // uniLib.SoundMgr.instance.playSound(SoundConsts.TURN_SOUND + superslot.RoomInfo.getInstance().soundType, 0);
        };
        MainVc.prototype.afterAccelerate = function () {
            if (this.accelerate) {
                this.accelerate.stop();
                this.accelerate = null;
            }
            if (this.initial_velocity == this.uniform_num) {
                this.stopAccelerate();
                this.onUniform();
            }
            else {
                this.onAccelerate();
            }
        };
        // 暂停加速音乐，播放匀速音乐
        MainVc.prototype.stopAccelerate = function () {
            // uniLib.SoundMgr.instance.stopSounds();
            uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.TURN_SOUND[1] + superslot.RoomInfo.getInstance().soundType);
            // this.play_time = new egret.Timer(290,10);
            // superslotBC.addEvent(this, this.play_time, egret.TimerEvent.TIMER, this.playUniform);
            // this.play_time.start();
        };
        // private playUniform(): void {
        // 	uniLib.SoundMgr.instance.stopSounds();
        // 	uniLib.SoundMgr.instance.playSound(SoundConsts.TURN_SOUND[1] + superslot.RoomInfo.getInstance().soundType);
        // }
        // 匀速 
        MainVc.prototype.onUniform = function () {
            var circleNum = 0; // 匀速转圈的格数
            var intervalNum = 0; // 匀速开始的位置与中将数字的位置之间的间隔格数
            var uniformPos = (this.lastGameWinningNum + 5) % 24; // 匀速开始的位置
            if (uniformPos == 0) {
                uniformPos = 24;
            }
            if (uniformPos - this.winningNum < 0) {
                intervalNum = Math.abs(uniformPos - this.winningNum);
                if (intervalNum >= this.lastDecelerationNum) {
                    circleNum = 24 * 3 + intervalNum - this.lastDecelerationNum;
                }
                else {
                    circleNum = 24 * 2 + (24 - (this.lastDecelerationNum - intervalNum));
                }
            }
            else if (uniformPos - this.winningNum > 0) {
                intervalNum = 24 - uniformPos + this.winningNum;
                if (intervalNum >= this.lastDecelerationNum) {
                    circleNum = 24 * 3 + intervalNum - this.lastDecelerationNum;
                }
                else {
                    circleNum = 24 * 2 + (24 - (this.lastDecelerationNum - intervalNum));
                }
            }
            else {
                circleNum = 24 * 2 + 24 - this.lastDecelerationNum;
            }
            // let num = this.winningNum + 54;
            // console.error("751 circleNum : " + circleNum);
            this.uniform = new egret.Timer(this.uniform_num, circleNum);
            superslotBC.addEvent(this, this.uniform, egret.TimerEvent.TIMER, this.showTurn);
            superslotBC.addEvent(this, this.uniform, egret.TimerEvent.TIMER_COMPLETE, this.stopUniform);
            this.uniform.start();
        };
        //暂停匀速，开始减速
        MainVc.prototype.stopUniform = function () {
            var _this = this;
            if (this.uniform) {
                this.uniform.stop();
                this.uniform = null;
            }
            if (this.play_time) {
                this.play_time.stop();
                this.play_time = null;
            }
            // uniLib.SoundMgr.instance.stopSound(SoundConsts.TURN_SOUND[1] + slwh.RoomInfo.getInstance().soundType);
            uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.TURN_SOUND[2] + superslot.RoomInfo.getInstance().soundType);
            this.time = setInterval(function () {
                uniLib.SoundMgr.instance.stopSound(superslot.SoundConsts.TURN_SOUND[1] + superslot.RoomInfo.getInstance().soundType);
                if (_this.time) {
                    clearTimeout(_this.time);
                }
            }, 20);
            this.onDecelerate();
        };
        // 减速 
        MainVc.prototype.onDecelerate = function () {
            this.uniform_num += this.decelerate_num;
            this.decelerate = new egret.Timer(this.uniform_num, 1);
            superslotBC.addEvent(this, this.decelerate, egret.TimerEvent.TIMER, this.showTurn);
            superslotBC.addEvent(this, this.decelerate, egret.TimerEvent.TIMER_COMPLETE, this.afterDecelerate);
            this.decelerate.start();
        };
        MainVc.prototype.afterDecelerate = function () {
            if (this.decelerate) {
                this.decelerate.stop();
                this.decelerate = null;
            }
            this.decelerate_time += 1;
            if (this.decelerate_time == this.lastDecelerationNum) {
                // uniLib.SoundMgr.instance.stopSound(SoundConsts.TURN_SOUND + superslot.RoomInfo.getInstance().soundType);
                uniLib.SoundMgr.instance.stopSound(superslot.SoundConsts.TURN_SOUND[2] + superslot.RoomInfo.getInstance().soundType);
            }
            if (this.decelerate_time < this.lastDecelerationNum) {
                this.onDecelerate();
            }
            else {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.STOP_CIRCLE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                this.playStopSound(this.winningNum);
                if (this.specialWinningNum && this.specialWinningNum.length > 0) {
                    if (this.winningNum == 3 || this.winningNum == 4) {
                        if (this.rewardCumulationArray.length > 0) {
                            this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.rewardCumulationArray[0], 100000, false);
                        }
                    }
                }
                else {
                    this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.lotteryData.remainbounty, 100000, false);
                    this.compareButtonDisplay();
                }
                this.afterTurn();
            }
        };
        //显示中奖LOGO
        MainVc.prototype.afterTurn = function () {
            for (var i = 0; i < this.lotteryData.betinfo.length; i++) {
                if (this.lotteryData.betinfo[i].chips > 0) {
                    var betInfoObj = this.lotteryData.betinfo[i];
                    // console.error("betid : " + betInfoObj.betid);
                    this.winNumButtonIdArray.push(betInfoObj.betid);
                }
            }
            this.rewardRollTimer = new egret.Timer(30, 1500 / 30);
            superslotBC.addEvent(this, this.rewardRollTimer, egret.TimerEvent.TIMER, this.rewardRoll);
            superslotBC.addEvent(this, this.rewardRollTimer, egret.TimerEvent.TIMER_COMPLETE, this.rewardRollComplete);
            // console.error("this.winNumButtonIdArray : " + this.winNumButtonIdArray);
            if (this.specialWinningNum && this.specialWinningNum.length > 0) {
                this.currentSpecialIndex = 1;
                if (this.specialWinningNum.length == 4) {
                    this.balance_up.text = superslot.ResUtil.superslotNumFormat(this.lotteryData.remainder, 100000, true);
                    if (this.middleJPDisplayTimer) {
                        this.middleJPDisplayTimer.stop();
                        this.middleJPDisplayTimer = null;
                    }
                    this.dasixiDisplayTimer = new egret.Timer(500, 4);
                    superslotBC.addEvent(this, this.dasixiDisplayTimer, egret.TimerEvent.TIMER, this.twinkleDasixi);
                    superslotBC.addEvent(this, this.dasixiDisplayTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleCompleteDasixi);
                    this.dasixiDisplayTimer.start();
                }
                else {
                    this.displayThreeTimer = new egret.Timer(100, 2000 / 100);
                    superslotBC.addEvent(this, this.displayThreeTimer, egret.TimerEvent.TIMER, this.twinkleThree);
                    superslotBC.addEvent(this, this.displayThreeTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleThreeComplete);
                    this.displayThreeTimer.start();
                }
            }
            else {
                // this.reward_up.text = ResUtil.superslotNumFormat(this.lotteryData.remainbounty, 100000, false);
                this.balance_up.text = superslot.ResUtil.superslotNumFormat(this.lotteryData.remainder, 100000, true);
                if (this.reward_up.text == "0") {
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.LOSE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    this.createAndPlayDisplay("weizhongjiang");
                }
                else {
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.WIN_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    if (this.isPlayPrizeAnimation) {
                        this.rewardRollTimer.start();
                        this.createAndPlayDisplay("zhongjiang");
                    }
                }
                this.lotterySourceArr.push(this.getLotteryInfoObj());
                this.setLotteryHistory(this.lotterySourceArr);
                if (this.middleJPDisplayTimer) {
                    this.middleJPDisplayTimer.stop();
                    this.middleJPDisplayTimer = null;
                }
                this.isOpenPrize = true;
                this.times = 0;
                if (!this.isAutomaticGame) {
                    this.setAllButton(true);
                }
                if (!this.isPlayPrizeAnimation) {
                    this.autoPlayEachIntervalTimer = new egret.Timer(3000, 1);
                    if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER)) {
                        superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER, this.autoPlay);
                    }
                    if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                        superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete);
                    }
                    this.autoPlayEachIntervalTimer.start();
                }
                this.displayLogoTimer = new egret.Timer(80, 0);
                superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER, this.twinkle);
                // superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleComplete);
                this.displayLogoTimer.start();
            }
            if (!this.isAutomaticGame) {
                if (this.reward_up.text != "0") {
                    this._full.enabled = false;
                    this._revoke.enabled = false;
                    this._compare.enabled = true;
                }
                else if (this.reward_up.text == "0") {
                    // this._full.enabled = true;
                    // this._revoke.enabled = true;
                    if (this._small.visible || this._big.visible) {
                        this._small.visible = false;
                        this._big.visible = false;
                        this._compare.visible = true;
                    }
                    this._compare.enabled = false;
                }
            }
        };
        MainVc.prototype.twinkle = function () {
            if (this.displayLogoTimer.currentCount % 2 == 1) {
                this.logoArray[this.winningNum - 1].source = "ss_logo_" + this.winningNum;
                for (var i = 0; i < this.specialWinningNum.length; i++) {
                    this.logoArray[this.specialWinningNum[i] - 1].source = "ss_logo_" + this.specialWinningNum[i];
                }
            }
            else {
                this.logoArray[this.winningNum - 1].source = "ss_selected_" + this.winningNum;
                for (var j = 0; j < this.specialWinningNum.length; j++) {
                    this.logoArray[this.specialWinningNum[j] - 1].source = "ss_selected_" + this.specialWinningNum[j];
                }
            }
            if (this.displayLogoTimer.currentCount <= 30000 / 80) {
                for (var i = 0; i < this.winNumButtonIdArray.length; i++) {
                    var winNumId = this.winNumButtonIdArray[i];
                    if (this.displayLogoTimer.currentCount % 2 == 1) {
                        if (winNumId == 8) {
                            this._bar.alpha = 0.5;
                        }
                        else if (winNumId == 7) {
                            this._seven.alpha = 0.5;
                        }
                        else if (winNumId == 6) {
                            this._star.alpha = 0.5;
                        }
                        else if (winNumId == 5) {
                            this._watermelon.alpha = 0.5;
                        }
                        else if (winNumId == 4) {
                            this._bell.alpha = 0.5;
                        }
                        else if (winNumId == 3) {
                            this._papaya.alpha = 0.5;
                        }
                        else if (winNumId == 2) {
                            this._orange.alpha = 0.5;
                        }
                        else if (winNumId == 1) {
                            this._apple.alpha = 0.5;
                        }
                        if (this.reward_up.text != "0") {
                            this.reward_up_other.text = this.reward_up.text;
                            this.reward_up_other.visible = true;
                            this.reward_up.visible = false;
                        }
                    }
                    else {
                        if (winNumId == 8) {
                            this._bar.alpha = 1;
                        }
                        else if (winNumId == 7) {
                            this._seven.alpha = 1;
                        }
                        else if (winNumId == 6) {
                            this._star.alpha = 1;
                        }
                        else if (winNumId == 5) {
                            this._watermelon.alpha = 1;
                        }
                        else if (winNumId == 4) {
                            this._bell.alpha = 1;
                        }
                        else if (winNumId == 3) {
                            this._papaya.alpha = 1;
                        }
                        else if (winNumId == 2) {
                            this._orange.alpha = 1;
                        }
                        else if (winNumId == 1) {
                            this._apple.alpha = 1;
                        }
                        if (this.reward_up.text != "0") {
                            // this.reward_up_other.text = this.reward_up.text;
                            this.reward_up_other.visible = false;
                            this.reward_up.visible = true;
                        }
                    }
                }
                if (this.displayLogoTimer.currentCount == 30000 / 80) {
                    this._bar.alpha = 1;
                    this._seven.alpha = 1;
                    this._star.alpha = 1;
                    this._watermelon.alpha = 1;
                    this._bell.alpha = 1;
                    this._papaya.alpha = 1;
                    this._orange.alpha = 1;
                    this._apple.alpha = 1;
                    this.bar_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.seven_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.star_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.watermelon_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.bell_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.papaya_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.orange_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.apple_up.text = superslot.ResUtil.superslotNumFormat(0, 100000, false);
                    this.reward_up_other.visible = false;
                    this.reward_up.visible = true;
                }
            }
        };
        // private twinkleComplete(): void { 
        // 	if (this.displayLogoTimer) {
        // 		this.displayLogoTimer.stop();
        // 		this.displayLogoTimer = null;
        // 	}
        // }
        // 中奖后交替特效闪烁2s
        MainVc.prototype.twinkleThree = function () {
            // console.error(this.displayThreeTimer.currentCount);
            if (this.displayThreeTimer.currentCount == 1) {
                this._displayImage.visible = true;
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.ALTERNATE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
            }
            if (this.displayThreeTimer.currentCount % 2 == 1) {
                this._displayImage.source = "ss_fruit_1";
            }
            else {
                this._displayImage.source = "ss_fruit_0";
            }
            if (this.displayThreeTimer.currentCount == 20) {
                this._displayImage.visible = false;
                uniLib.SoundMgr.instance.stopSound(superslot.SoundConsts.ALTERNATE_SOUND + superslot.RoomInfo.getInstance().soundType);
                this.logoDisplayTimer = new egret.Timer(80, 2000 / 80);
                superslotBC.addEvent(this, this.logoDisplayTimer, egret.TimerEvent.TIMER, this.twinkleThreeLogo);
                superslotBC.addEvent(this, this.logoDisplayTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleThreeLogoComplete);
                this.logoDisplayTimer.start();
            }
        };
        MainVc.prototype.twinkleThreeComplete = function () {
            if (this.displayThreeTimer) {
                this.displayThreeTimer.stop();
                this.displayThreeTimer = null;
            }
        };
        // 中奖后logo原地闪烁2s
        MainVc.prototype.twinkleThreeLogo = function () {
            // console.error("this.currentSpecialIndex : " + this.currentSpecialIndex);
            if (this.logoDisplayTimer.currentCount == 1) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.LOGO_DISPLAY_SOUND + superslot.RoomInfo.getInstance().soundType, 0);
            }
            if (this.currentSpecialIndex == 1) {
                if (this.logoDisplayTimer.currentCount % 2 == 0) {
                    this.logoArray[this.winningNum - 1].source = "ss_logo_" + this.winningNum;
                }
                else {
                    this.logoArray[this.winningNum - 1].source = "ss_selected_" + this.winningNum;
                }
            }
            else {
                var logoDisplayIndex = this.specialWinningNum[this.currentSpecialIndex - 2];
                if (this.logoDisplayTimer.currentCount % 2 == 0) {
                    this.logoArray[logoDisplayIndex - 1].source = "ss_logo_" + logoDisplayIndex;
                }
                else {
                    this.logoArray[logoDisplayIndex - 1].source = "ss_selected_" + logoDisplayIndex;
                }
            }
            if (this.logoDisplayTimer.currentCount == 2000 / 80) {
                uniLib.SoundMgr.instance.stopSound(superslot.SoundConsts.LOGO_DISPLAY_SOUND + superslot.RoomInfo.getInstance().soundType);
            }
        };
        MainVc.prototype.twinkleThreeLogoComplete = function () {
            if (this.logoDisplayTimer) {
                this.logoDisplayTimer.stop();
                this.logoDisplayTimer = null;
            }
            this.onUniformForSpecial(this.specialWinningNum[this.currentSpecialIndex - 1]);
        };
        MainVc.prototype.specialTwinkleThree = function () {
            // console.error("this.currentSpecialIndex : " + this.currentSpecialIndex);
            var logoArrayIndex = this.specialWinningNum[this.currentSpecialIndex - 2];
            if (this.specialDisplayThreeTimer.currentCount % 2 == 1) {
                this.logoArray[logoArrayIndex - 1].source = "ss_selected_" + logoArrayIndex;
            }
            else {
                this.logoArray[logoArrayIndex - 1].source = "ss_logo_" + logoArrayIndex;
            }
        };
        MainVc.prototype.specialTwinkleThreeComplete = function () {
            if (this.specialDisplayThreeTimer) {
                this.specialDisplayThreeTimer.stop();
                this.specialDisplayThreeTimer = null;
            }
            this.onUniformForSpecial(this.specialWinningNum[this.currentSpecialIndex - 1]);
        };
        MainVc.prototype.onUniformForSpecial = function (specialWinNum) {
            this.everyWheelIndex = 1;
            var circleNumSpecial = 0; // 匀速转圈的格数
            var intervalNum = 0; // 匀速开始的位置与中将数字的位置之间的间隔格数
            var uniformPos = this.winningNum; // 匀速开始的位置
            if (uniformPos == 0) {
                uniformPos = 24;
            }
            if (uniformPos - specialWinNum < 0) {
                circleNumSpecial = Math.abs(uniformPos - specialWinNum);
            }
            else if (uniformPos - specialWinNum > 0) {
                circleNumSpecial = 24 - uniformPos + specialWinNum;
            }
            circleNumSpecial += 24;
            this.specialIndex = this.winningNum;
            this.uniformForSpecial = new egret.Timer(20, circleNumSpecial);
            superslotBC.addEvent(this, this.uniformForSpecial, egret.TimerEvent.TIMER, this.turnToDestination);
            superslotBC.addEvent(this, this.uniformForSpecial, egret.TimerEvent.TIMER_COMPLETE, this.stopUniformForSpecial);
            this.uniformForSpecial.start();
        };
        MainVc.prototype.turnToDestination = function () {
            // console.error("this.currentSpecialIndex : " + this.currentSpecialIndex); // 当前特殊玩法所在的圈数（1,2,3）
            // console.error("this.everyWheelIndex : " + this.everyWheelIndex);
            if (this.uniformForSpecial.currentCount == 1) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.SPECIAL_TURN_SOUND + superslot.RoomInfo.getInstance().soundType, 0);
            }
            this.logoArray[this.specialIndex - 1].source = "ss_logo_" + this.specialIndex;
            if (this.everyWheelIndex == 1 && this.specialWinningNum.length < 4) {
                this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.specialIndex;
            }
            if (this.everyWheelIndex >= 1 && (this.specialWinningNum.length >= 1 || this.specialWinningNum.length <= 3)) {
                if (this.specialWinningNum.length == 1) {
                    if (this.specialIndex == this.winningNum) {
                        this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.winningNum;
                    }
                }
                if (this.specialWinningNum.length == 2) {
                    if (this.specialIndex == this.winningNum) {
                        this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.winningNum;
                    }
                    if (this.specialIndex == this.specialWinningNum[0] && this.uniformForSpecial.currentCount > 24) {
                        this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.specialIndex;
                    }
                    if (this.currentSpecialIndex == 2) {
                        if (this.specialIndex == this.specialWinningNum[0]) {
                            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.specialIndex;
                        }
                    }
                }
                if (this.specialWinningNum.length == 3) {
                    if (this.currentSpecialIndex == 1) {
                        if (this.specialIndex == this.winningNum) {
                            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.winningNum;
                        }
                    }
                    else if (this.currentSpecialIndex == 2) {
                        if (this.specialIndex == this.winningNum) {
                            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.winningNum;
                        }
                        if (this.specialIndex == this.specialWinningNum[0]) {
                            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.specialIndex;
                        }
                    }
                    else if (this.currentSpecialIndex == 3) {
                        if (this.specialIndex == this.winningNum) {
                            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.winningNum;
                        }
                        for (var i = 0; i < this.specialWinningNum.length - 1; i++) {
                            if (this.specialIndex == this.specialWinningNum[i]) {
                                this.logoArray[this.specialIndex - 1].source = "ss_selected_" + this.specialIndex;
                            }
                        }
                    }
                }
            }
            this.specialIndex += 1;
            if (this.specialIndex > 24) {
                this.specialIndex = 1;
            }
            var selected_num = this.specialIndex;
            if (selected_num > 24) {
                selected_num = 1;
            }
            this.logoArray[this.specialIndex - 1].source = "ss_selected_" + selected_num;
            this.everyWheelIndex += 1;
        };
        MainVc.prototype.stopUniformForSpecial = function () {
            if (this.uniformForSpecial) {
                this.uniformForSpecial.stop();
                this.uniformForSpecial = null;
            }
            if (this.winningNum == 3 || this.winningNum == 4) {
                this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.rewardCumulationArray[this.currentSpecialIndex], 100000, false);
            }
            else {
                this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.rewardCumulationArray[this.currentSpecialIndex - 1], 100000, false);
            }
            uniLib.SoundMgr.instance.stopSound(superslot.SoundConsts.SPECIAL_TURN_SOUND + superslot.RoomInfo.getInstance().soundType);
            uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.STOP_CIRCLE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
            this.playStopSound(this.specialWinningNum[this.currentSpecialIndex - 1]);
            this.currentSpecialIndex += 1;
            if (this.currentSpecialIndex <= this.specialWinningNum.length) {
                // this.specialDisplayThreeTimer = new egret.Timer(100, 3);
                // superslotBC.addEvent(this, this.specialDisplayThreeTimer, egret.TimerEvent.TIMER, this.specialTwinkleThree);
                // superslotBC.addEvent(this, this.specialDisplayThreeTimer, egret.TimerEvent.TIMER_COMPLETE, this.specialTwinkleThreeComplete);
                // this.specialDisplayThreeTimer.start();
                this.displayThreeTimer = new egret.Timer(100, 2000 / 100 * 2);
                superslotBC.addEvent(this, this.displayThreeTimer, egret.TimerEvent.TIMER, this.twinkleThree);
                superslotBC.addEvent(this, this.displayThreeTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleThreeComplete);
                this.displayThreeTimer.start();
                // this.onUniformForSpecial(this.specialWinningNum[this.currentSpecialIndex - 1]);
            }
            else {
                this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.lotteryData.remainbounty, 100000, false);
                this.balance_up.text = superslot.ResUtil.superslotNumFormat(this.lotteryData.remainder, 100000, true);
                if (this.middleJPDisplayTimer) {
                    this.middleJPDisplayTimer.stop();
                    this.middleJPDisplayTimer = null;
                }
                this.compareButtonDisplay();
                this.lotterySourceArr.push(this.getLotteryInfoObj());
                this.setLotteryHistory(this.lotterySourceArr);
                this.isOpenPrize = true;
                this.times = 0;
                if (!this.isAutomaticGame) {
                    this.setAllButton(true);
                }
                if (this.reward_up.text == "0") {
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.LOSE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    this.createAndPlayDisplay("weizhongjiang");
                }
                else {
                    uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.WIN_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                    if (this.isPlayPrizeAnimation) {
                        this.rewardRollTimer.start();
                        this.createAndPlayDisplay("zhongjiang");
                    }
                    if (!this.isAutomaticGame) {
                        this._compare.enabled = true;
                    }
                }
                if (!this.isPlayPrizeAnimation) {
                    this.autoPlayEachIntervalTimer = new egret.Timer(3000, 1);
                    if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER)) {
                        superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER, this.autoPlay);
                    }
                    if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                        superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete);
                    }
                    this.autoPlayEachIntervalTimer.start();
                }
                this.displayLogoTimer = new egret.Timer(80, 0);
                superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER, this.twinkle);
                // superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleComplete);
                this.displayLogoTimer.start();
            }
            // this.onDecelerate();
        };
        MainVc.prototype.twinkleDasixi = function () {
            var dasixiIndex = this.specialWinningNum[this.dasixiDisplayTimer.currentCount - 1];
            this.logoArray[dasixiIndex - 1].source = "ss_selected_" + dasixiIndex;
            uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.STOP_CIRCLE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
            this.playStopSound(this.specialWinningNum[dasixiIndex]);
            if (this.dasixiDisplayTimer) {
                this.reward_up.text = superslot.ResUtil.superslotNumFormat(this.rewardCumulationArray[this.dasixiDisplayTimer.currentCount - 1], 100000, false);
            }
        };
        MainVc.prototype.twinkleCompleteDasixi = function () {
            if (this.dasixiDisplayTimer) {
                this.dasixiDisplayTimer.stop();
                this.dasixiDisplayTimer = null;
            }
            if (this.reward_up.text == "0") {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.LOSE_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                this.createAndPlayDisplay("weizhongjiang");
            }
            else {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.WIN_SOUND + superslot.RoomInfo.getInstance().soundType, 1);
                if (this.isPlayPrizeAnimation) {
                    this.rewardRollTimer.start();
                    this.createAndPlayDisplay("zhongjiang");
                }
            }
            this.compareButtonDisplay();
            this.lotterySourceArr.push(this.getLotteryInfoObj());
            this.setLotteryHistory(this.lotterySourceArr);
            this.isOpenPrize = true;
            this.times = 0;
            if (!this.isAutomaticGame) {
                this.setAllButton(true);
            }
            if (!this.isPlayPrizeAnimation) {
                this.autoPlayEachIntervalTimer = new egret.Timer(3000, 1);
                if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER)) {
                    superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER, this.autoPlay);
                }
                if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                    superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete);
                }
                this.autoPlayEachIntervalTimer.start();
            }
            this.displayLogoTimer = new egret.Timer(80, 0);
            superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER, this.twinkle);
            // superslotBC.addEvent(this, this.displayLogoTimer, egret.TimerEvent.TIMER_COMPLETE, this.twinkleComplete);
            this.displayLogoTimer.start();
        };
        MainVc.prototype.showTurn = function () {
            // let num = (this.index % 24) + 1;
            // console.error("this.index : " + this.index);
            // console.error("this.decelerate_time : " + this.decelerate_time);
            var isChangeIndex = false;
            if (this.index == 0) {
                this.index = 1;
                isChangeIndex = true;
            }
            this.logoArray[this.index - 1].source = "ss_logo_" + this.index;
            if (isChangeIndex) {
                this.index = 0;
            }
            this.index += 1;
            if (this.index > 24) {
                this.index = 1;
            }
            var selected_num = this.index;
            if (selected_num > 24) {
                selected_num = 1;
            }
            this.logoArray[this.index - 1].source = "ss_selected_" + selected_num;
        };
        MainVc.prototype.peripheralDisplay = function () {
            if (this.peripheralDisplayTimer.currentCount % 2 == 1) {
                this._peripheral.source = "ss_lighting1";
            }
            else {
                this._peripheral.source = "ss_lighting0";
            }
        };
        MainVc.prototype.middleJPDisplay = function () {
            // console.error("this.currentSpecialIndex : " + this.currentSpecialIndex);
            if (this.middleJPDisplayTimer) {
                if (this.middleJPDisplayTimer.currentCount % 2 == 1) {
                    this._jpImage.source = "ss_JP1";
                }
                else {
                    this._jpImage.source = "ss_JP0";
                }
            }
        };
        MainVc.prototype.middleJPDisplayComplete = function () {
            if (this.middleJPDisplayTimer) {
                this.middleJPDisplayTimer.stop();
                this.middleJPDisplayTimer = null;
            }
        };
        MainVc.prototype.onExitGame = function (evt) {
            evt.stopPropagation();
            superslot.PublicManage.getInstance().showConfirmPanel("确定要退出房间", ["确定", "取消"], [this.onLeaveRoom], null, this);
            // this.onLeaveRoom();
        };
        MainVc.prototype.onLeaveRoom = function () {
            var leaveReq = new Cmd.RoomLeaveRoomCmd_C;
            leaveReq.deskid = 10004;
            uniLib.NetMgr.tcpSend(leaveReq);
        };
        MainVc.prototype.setLastGameRecord = function (res) {
            var _this = this;
            if (this.isAutomaticGame) {
                this.auto_start.visible = true;
                this._start.visible = false;
                this._startCircle.visible = true;
                this.startInterval = setInterval(function () {
                    _this.startCount += 1;
                    if (_this.startCount % 2 == 1) {
                        _this._startCircle.source = "ss_start_circle_2_png";
                    }
                    else if (_this.startCount % 2 == 0) {
                        _this._startCircle.source = "ss_start_circle_1_png";
                    }
                }, 400);
            }
            this.lastGameRecordInfo = [];
            this.lastGameRecordInfo = res.betinfo;
        };
        MainVc.prototype.setAllButton = function (isEnable) {
            this._bar.enabled = isEnable;
            this._seven.enabled = isEnable;
            this._star.enabled = isEnable;
            this._watermelon.enabled = isEnable;
            this._bell.enabled = isEnable;
            this._papaya.enabled = isEnable;
            this._orange.enabled = isEnable;
            this._apple.enabled = isEnable;
            this._full.enabled = isEnable;
            this._revoke.enabled = isEnable;
            this._left.enabled = isEnable;
            this._right.enabled = isEnable;
            this._big.enabled = isEnable;
            this._small.enabled = isEnable;
            this._start.enabled = isEnable;
            this._plus.enabled = isEnable;
            this._reduce.enabled = isEnable;
        };
        MainVc.prototype.showHelp = function (evt) {
            if (!this.helpPanel) {
                this.helpPanel = new superslot.HelpPanel;
                superslotBC.addEvent(this, this.helpPanel, superslot.UIEventConsts.CLOSE, this.removeHelp);
                superslot.PopupManager.addPopUp(this.helpPanel, true, true, true);
                superslot.ManageBox.getInstance().BoxArray.push(this.helpPanel);
            }
        };
        MainVc.prototype.removeHelp = function (evt) {
            if (this.helpPanel) {
                this.helpPanel.removeEventListener(superslot.UIEventConsts.CLOSE, this.removeHelp, this);
                superslot.PopupManager.removePopUp(this.helpPanel);
                superslot.ManageBox.getInstance().BoxArray.splice(superslot.ManageBox.getInstance().BoxArray.length - 1, 1);
                this.helpPanel.destory();
                this.helpPanel = null;
            }
        };
        MainVc.prototype.showSetting = function (evt) {
            if (!this.settingPanel) {
                this.settingPanel = new superslot.SettingPanel;
                superslotBC.addEvent(this, this.settingPanel, superslot.UIEventConsts.CLOSE, this.removeSetting);
                superslot.PopupManager.addPopUp(this.settingPanel, true, true, true);
                superslot.ManageBox.getInstance().BoxArray.push(this.settingPanel);
            }
        };
        MainVc.prototype.removeSetting = function (evt) {
            if (this.settingPanel) {
                this.settingPanel.removeEventListener(superslot.UIEventConsts.CLOSE, this.removeSetting, this);
                superslot.PopupManager.removePopUp(this.settingPanel);
                superslot.ManageBox.getInstance().BoxArray.splice(superslot.ManageBox.getInstance().BoxArray.length - 1, 1);
                this.settingPanel.destory();
                this.settingPanel = null;
            }
        };
        MainVc.prototype.getLotteryInfoObj = function () {
            var lotteryInfoObj = new Cmd.LotteryInfo();
            lotteryInfoObj.cardid = this.winningNum;
            lotteryInfoObj.specialcardid = this.specialWinningNum;
            if (this.specialWinningNum.length == 3) {
                for (var i = 0; i < this.specialWinningNum.length; i++) {
                    if (this.specialWinningNum[i] == 2 || this.specialWinningNum[i] == 14 || this.specialWinningNum[i] == 7
                        || this.specialWinningNum[i] == 19 || this.specialWinningNum[i] == 1 || this.specialWinningNum[i] == 13) {
                        lotteryInfoObj.bluetype = 1; // 小三元
                        break;
                    }
                    if (this.specialWinningNum[i] == 16 || this.specialWinningNum[i] == 20 || this.specialWinningNum[i] == 8) {
                        lotteryInfoObj.bluetype = 2; // 大三元
                        break;
                    }
                }
            }
            else if (this.specialWinningNum.length == 4) {
                lotteryInfoObj.bluetype = 3; // 大四喜
            }
            return lotteryInfoObj;
        };
        MainVc.prototype.createAndPlayDisplay = function (resName) {
            var _this = this;
            if (!this._movie)
                this._movie = uniLib.DragonUtils.createDragonBonesDisplay(resName + "_ske_json", resName + "_tex_json", resName + "_tex_png", uniLib.DragonType.ARMATURE);
            this._movie.display.x = this.width / 2;
            this._movie.display.y = this.height / 2;
            this.addChild(this._movie.display);
            // this.addChildAt(this._movie.display, this.numChildren - 1);
            this.armatureResName = resName;
            this.swapChildren(this._movie.display, this.changeOfGold);
            this._movie.addEventListener(dragonBones.EventObject.COMPLETE, this.dragonbonesAnimePlayCompleted, this);
            var popUpMaskX = (uniLib.Global.screenWidth - 1280 * 720 / uniLib.Global.screenHeight) / 2;
            this.popUpMask = new egret.Sprite();
            this.popUpMask.graphics.beginFill(0xffffff, 0.1);
            this.popUpMask.graphics.drawRect(popUpMaskX, 0, uniLib.Global.screenWidth, superslot.DataCache.defaultHeight);
            this.popUpMask.graphics.endFill();
            this.popUpMask.touchEnabled = true;
            this.popUpMask.name = "_mask";
            this.popUpMask.width = 1280 * 720 / uniLib.Global.screenHeight;
            this.popUpMask.x = popUpMaskX;
            this.popUpMask.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.removeChild(_this._movie.display);
                uniLib.DragonUtils.destoryDragonBonesArmature(_this._movie, "newAnimation");
                _this._movie.removeEventListener(dragonBones.EventObject.COMPLETE, _this.dragonbonesAnimePlayCompleted, _this);
                _this._movie = null;
                if (!_this.isAutomaticGame) {
                    _this.removeChild(_this.popUpMask);
                }
                _this.popUpMask.mask = null;
                _this.changeOfGold.visible = false;
                if (_this.armatureResName == "zhongjiang") {
                    var _loop_1 = function (i) {
                        var goldImage = superslot.ResUtil.createBitmapByName("ss_middle_gold_png");
                        if (i < 6) {
                            goldImage.x = 640 - i * 15;
                        }
                        else {
                            goldImage.x = 640 + i * 15;
                        }
                        goldImage.y = 360;
                        _this.addChild(goldImage);
                        egret.Tween.get(goldImage).to({ x: 810, y: 129 }, 1000, egret.Ease.circOut).call(function () {
                            goldImage.visible = false;
                            this.removeChild(goldImage);
                        }, _this);
                    };
                    for (var i = 0; i < 20; i++) {
                        _loop_1(i);
                    }
                }
            }, this);
            uniLib.DragonUtils.runDragonBonesArmature(this._movie, "newAnimation", 1);
            if (!this.isAutomaticGame) {
                this.addChild(this.popUpMask);
            }
            if (resName == "zhongjiang") {
                this.changeOfGold.visible = true;
                // this.changeOfGold.text = "+" + ResUtil.strFormatThousandsSeparator(this.lotteryData.remainbounty.toString());
            }
        };
        MainVc.prototype.dragonbonesAnimePlayCompleted = function (e) {
            // let display: dragonBones.EgretArmatureDisplay = <dragonBones.EgretArmatureDisplay>e.target;
            // display.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.dragonbonesAnimePlayCompleted, this);
            this.changeOfGold.visible = false;
            if (this.popUpMask) {
                if (!this.isAutomaticGame) {
                    if (this.getChildIndex(this.popUpMask) >= 0) {
                        this.removeChild(this.popUpMask);
                    }
                }
                this.popUpMask.mask = null;
            }
            if (this.armatureResName == "zhongjiang") {
                var _loop_2 = function (i) {
                    var goldImage = superslot.ResUtil.createBitmapByName("ss_middle_gold_png");
                    if (i < 6) {
                        goldImage.x = 640 - i * 15;
                        // goldImage.y = 360 - 20;
                    }
                    else {
                        goldImage.x = 640 + i * 15;
                        // goldImage.y = 360 + 20;
                    }
                    goldImage.y = 360;
                    this_1.addChild(goldImage);
                    egret.Tween.get(goldImage).to({ x: 810, y: 129 }, 1000, egret.Ease.circOut).call(function () {
                        goldImage.visible = false;
                        this.removeChild(goldImage);
                        this.autoPlayEachIntervalTimer = new egret.Timer(3000, 1);
                        if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER)) {
                            superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER, this.autoPlay);
                        }
                        if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                            superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete);
                        }
                        this.autoPlayEachIntervalTimer.start();
                    }, this_1);
                };
                var this_1 = this;
                for (var i = 0; i < 20; i++) {
                    _loop_2(i);
                }
            }
            else {
                this.autoPlayEachIntervalTimer = new egret.Timer(3000, 1);
                if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER)) {
                    superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER, this.autoPlay);
                }
                if (!this.autoPlayEachIntervalTimer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE)) {
                    superslotBC.addEvent(this, this.autoPlayEachIntervalTimer, egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete);
                }
                this.autoPlayEachIntervalTimer.start();
            }
            if (this._movie) {
                this.removeChild(this._movie.display);
                uniLib.DragonUtils.destoryDragonBonesArmature(this._movie, "newAnimation");
                this._movie.removeEventListener(dragonBones.EventObject.COMPLETE, this.dragonbonesAnimePlayCompleted, this);
                this._movie = null;
            }
        };
        MainVc.prototype.playStopSound = function (stopNum) {
            if (stopNum == 1 || stopNum == 12 || stopNum == 13) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[1] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 2 || stopNum == 14 || stopNum == 24) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[3] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 5 || stopNum == 6 || stopNum == 11 || stopNum == 17 || stopNum == 23) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[0] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 7 || stopNum == 18 || stopNum == 19) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[2] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 8 || stopNum == 9) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[4] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 15 || stopNum == 16) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[6] + superslot.RoomInfo.getInstance().soundType, 1);
            }
            else if (stopNum == 20 || stopNum == 21) {
                uniLib.SoundMgr.instance.playSound(superslot.SoundConsts.PRIZE_SOUND[5] + superslot.RoomInfo.getInstance().soundType, 1);
            }
        };
        MainVc.prototype.autoPlay = function () {
            // console.error("this.currentSpecialIndex : " + this.currentSpecialIndex);
        };
        MainVc.prototype.autoPlayComplete = function () {
            if (this.autoPlayEachIntervalTimer) {
                this.autoPlayEachIntervalTimer.stop();
                this.autoPlayEachIntervalTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete, this);
                this.autoPlayEachIntervalTimer = null;
            }
            if (this.isAutomaticGame == true) {
                // let touchEventObj: egret.TouchEvent = new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP);
                // touchEventObj.target = this._start;
                // this.onClick(touchEventObj);
                // console.error("autoPlayComplete : ");
                egret.TouchEvent.dispatchTouchEvent(this._start, egret.TouchEvent.TOUCH_TAP);
            }
        };
        MainVc.prototype.rewardRoll = function () {
            if (this.rewardRollTimer) {
                if (this.rewardRollTimer.currentCount == 1500 / 30) {
                    this.changeOfGold.text = "+" + superslot.ResUtil.strFormatThousandsSeparator(this.lotteryData.remainbounty.toString());
                }
                else {
                    this.changeOfGold.text = this.lotteryData.remainbounty / (1500 / 30) * this.rewardRollTimer.currentCount + "";
                }
            }
        };
        MainVc.prototype.rewardRollComplete = function () {
            // this.changeOfGold.visible = false;
            if (this.rewardRollTimer) {
                this.rewardRollTimer.stop();
                this.rewardRollTimer = null;
            }
        };
        MainVc.prototype.leftRightClick = function () {
            this.compareButtonDisplay();
        };
        MainVc.prototype.leftRightClickComplete = function () {
            // this.changeOfGold.visible = false;
            if (this.leftRightClickTimer) {
                this.leftRightClickTimer.stop();
                this.leftRightClickTimer = null;
            }
        };
        MainVc.prototype.compareButtonDisplay = function () {
            var _this = this;
            if (this.reward_up.text != "0") {
                var count_1 = 0;
                this.rewardInterval = setInterval(function () {
                    if (_this.isCompareDisplay) {
                        clearInterval(_this.rewardInterval);
                    }
                    console.error("count : " + count_1);
                    count_1 += 1;
                    if (count_1 > 5) {
                        // 停止触发回调
                        clearInterval(_this.rewardInterval);
                    }
                    if (count_1 % 2 == 1) {
                        _this._compare.alpha = 0.6;
                    }
                    else if (count_1 % 2 == 0) {
                        _this._compare.alpha = 1;
                    }
                }, 500);
            }
        };
        MainVc.prototype.updateIsAutoGameState = function (res) {
            if (this.isAutomaticGame == true && res.resultcode == 3) {
                this.isAutomaticGame = false;
            }
        };
        MainVc.prototype.limitClickTimes = function () {
            // console.error("this.times : " + this.times);
            if (this.times == 0) {
                this.preClickTime = new Date().getTime(); //首次点击的时间
                this.times++;
                return;
            }
            this.currentClickTime = new Date().getTime();
            //alert(currentClickTime - preClickTime);
            if ((this.currentClickTime - this.preClickTime) < 500) {
                // alert("亲，您的点击速度过快...");
                uniLib.TipsUtils.showTipsDownToUp("亲，您的点击速度过快...", 0xffffff);
                this.preClickTime = this.currentClickTime;
                return;
            }
            this.times++;
            this.preClickTime = this.currentClickTime;
            if (this.times >= 1) {
                return;
            }
        };
        MainVc.prototype.destory = function () {
            // super.destory();
            if (this.beatTimer) {
                this.beatTimer.stop();
                this.beatTimer.removeEventListener(egret.TimerEvent.TIMER, this.randomBeat, this);
                this.beatTimer = null;
            }
            if (this.uniform) {
                this.uniform.stop();
                this.uniform.removeEventListener(egret.TimerEvent.TIMER, this.showTurn, this);
                this.uniform.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onDecelerate, this);
                this.uniform = null;
            }
            if (this.accelerate) {
                this.accelerate.stop();
                this.accelerate.removeEventListener(egret.TimerEvent.TIMER, this.showTurn, this);
                this.accelerate.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.afterAccelerate, this);
                this.accelerate = null;
            }
            if (this.decelerate) {
                this.decelerate.stop();
                this.decelerate.removeEventListener(egret.TimerEvent.TIMER, this.showTurn, this);
                this.decelerate.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.afterDecelerate, this);
                this.decelerate = null;
            }
            if (this.peripheralDisplayTimer) {
                this.peripheralDisplayTimer.stop();
                this.peripheralDisplayTimer.removeEventListener(egret.TimerEvent.TIMER, this.peripheralDisplay, this);
                this.peripheralDisplayTimer = null;
            }
            if (this.time) {
                clearTimeout(this.time);
            }
            if (this.sizeTimer) {
                this.sizeTimer.stop();
                this.sizeTimer.removeEventListener(egret.TimerEvent.TIMER, this.sizeTimering, this);
                this.sizeTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.sizeTimerComplete, this);
                this.sizeTimer = null;
            }
            if (this.displayLogoTimer) {
                this.displayLogoTimer.stop();
                this.displayLogoTimer.removeEventListener(egret.TimerEvent.TIMER, this.twinkle, this);
                this.displayLogoTimer = null;
            }
            if (this.displayThreeTimer) {
                this.displayThreeTimer.stop();
                this.displayThreeTimer.removeEventListener(egret.TimerEvent.TIMER, this.twinkleThree, this);
                this.displayThreeTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.twinkleThreeComplete, this);
                this.displayThreeTimer = null;
            }
            if (this.middleJPDisplayTimer) {
                this.middleJPDisplayTimer.stop();
                this.middleJPDisplayTimer.removeEventListener(egret.TimerEvent.TIMER, this.middleJPDisplay, this);
                this.middleJPDisplayTimer = null;
            }
            if (this.dasixiDisplayTimer) {
                this.dasixiDisplayTimer.stop();
                this.dasixiDisplayTimer.removeEventListener(egret.TimerEvent.TIMER, this.twinkleDasixi, this);
                this.dasixiDisplayTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.twinkleCompleteDasixi, this);
                this.dasixiDisplayTimer = null;
            }
            if (this.logoDisplayTimer) {
                this.logoDisplayTimer.stop();
                this.logoDisplayTimer.removeEventListener(egret.TimerEvent.TIMER, this.twinkleThreeLogo, this);
                this.logoDisplayTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.twinkleThreeLogoComplete, this);
                this.logoDisplayTimer = null;
            }
            if (this.longPressTimer) {
                this.longPressTimer.stop();
                this.longPressTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.longPressComplete, this);
                this.longPressTimer = null;
            }
            if (this.autoPlayEachIntervalTimer) {
                this.autoPlayEachIntervalTimer.stop();
                this.autoPlayEachIntervalTimer.removeEventListener(egret.TimerEvent.TIMER, this.autoPlay, this);
                this.autoPlayEachIntervalTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.autoPlayComplete, this);
                this.autoPlayEachIntervalTimer = null;
            }
            if (this.rewardRollTimer) {
                this.rewardRollTimer.stop();
                this.rewardRollTimer.removeEventListener(egret.TimerEvent.TIMER, this.rewardRoll, this);
                this.rewardRollTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.rewardRollComplete, this);
                this.rewardRollTimer = null;
            }
            uniLib.SoundMgr.instance.stopSounds();
            superslotBC.removeEvent(this);
            uniLib.DisplayUtils.removeFromParent(this);
            uniLib.DisplayUtils.removeAllChildren(this);
        };
        return MainVc;
    }(superslot.BaseSlwhEuiPanel));
    superslot.MainVc = MainVc;
    __reflect(MainVc.prototype, "superslot.MainVc");
})(superslot || (superslot = {}));
