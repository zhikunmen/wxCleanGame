var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var RoomInfo = (function () {
        function RoomInfo() {
            //房间状态信息
            // public roomStatusInfo: Cmd.GameStatusInfo;
            //玩家当前选择的筹码档
            this.selectChipsValue = 0;
            this.waitNext = true;
            this.soundType = "mp3";
            //自动跟住次数
            this.autoFollowRemainder = 0;
            //下注门槛
            this.minBetChips = 1000;
            //是否超上限
            this.isExceed = false;
        }
        RoomInfo.getInstance = function () {
            if (!this.instance) {
                this.instance = new RoomInfo();
            }
            return this.instance;
        };
        RoomInfo.prototype.initRoom = function (rev) {
            // this.roomInfo = [];
            this.lastBetItems = [];
            this.currentBetItems = [];
            // this.myUserInfo = new UserVo();
            // this.myUserInfo.initWithBaseInfo(rev.userInfo);
            // this.roomInfo = rev.roomInfo;
            this.debugLevel = rev.gmLevel;
        };
        // public initRoomState(rev: Cmd.PokerEnterRoomCmd_S): void {
        // 	this.bankerId = rev.roundInfo.bankerInfo.uid;
        // 	this.minBanker = rev.roomInfo.minBanker;
        // 	this.maxBanker = rev.roomInfo.maxBanker;
        // 	this.cancelBanker = rev.roomInfo.cancelBanker;
        // }
        // public getRoomInfo(roomId: number): Cmd.PokerRoomInfo {
        // 	var room: Cmd.PokerRoomInfo;
        // 	for (var i = 0; i < this.roomInfo.length; i++) {
        // 		if (this.roomInfo[i].roomId == roomId) {
        // 			room = this.roomInfo[i];
        // 			break;
        // 		}
        // 	}
        // 	return room;
        // }
        RoomInfo.prototype.playhbButtonSound = function () {
            if (RES.hasRes("slwh_buttonClick_mp3")) {
                uniLib.SoundMgr.instance.playSound("slwh_buttonClick_mp3");
            }
        };
        RoomInfo.prototype.playhbSwitchSound = function () {
            if (RES.hasRes("slwh_buttonSwitch_mp3")) {
                uniLib.SoundMgr.instance.playSound("slwh_buttonSwitch_mp3");
            }
        };
        return RoomInfo;
    }());
    superslot.RoomInfo = RoomInfo;
    __reflect(RoomInfo.prototype, "superslot.RoomInfo");
})(superslot || (superslot = {}));
