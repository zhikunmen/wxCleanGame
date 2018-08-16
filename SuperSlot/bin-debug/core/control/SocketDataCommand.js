var Cmd;
(function (Cmd) {
    function bullGameDispatch(cmd, obj, type) {
        var facade = superslot.AppFacade.getInstance();
        facade.sendNotification(cmd, obj, type);
    }
    Cmd.bullGameDispatch = bullGameDispatch;
    /**
 * 登陆游戏返回
 */
    function OnUserInfoSynRequestLobbyCmd_S(rev) {
        superslot.RoomInfo.getInstance().initRoom(rev);
        bullGameDispatch(superslot.AppFacadeConst.USER_ENTER_ROOM, rev);
    }
    Cmd.OnUserInfoSynRequestLobbyCmd_S = OnUserInfoSynRequestLobbyCmd_S;
    //进房间
    function OnRoomEnterRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            superslot.RoomInfo.getInstance().waitNext = true;
            // superslot.RoomInfo.getInstance().initRoomState(rev);
            bullGameDispatch(superslot.AppFacadeConst.ROOM_INIT, rev);
        }
        else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, true);
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        }
        if (superslot.StaticMgr.getInstance().gameInfo && superslot.StaticMgr.getInstance().gameInfo.preloadUIAutoHide == false && superslot.StaticMgr.getInstance().gameInfo.preloadUI) {
            uniLib.UIMgr.instance.hideLoading(superslot.StaticMgr.getInstance().gameInfo.preloadUI, "", true, false);
        }
        else {
            uniLib.UIMgr.instance.hideLoading();
        }
    }
    Cmd.OnRoomEnterRoomCmd_S = OnRoomEnterRoomCmd_S;
    // export function OnPokerEnterRoomCmd_Brd(rev: Cmd.PokerEnterRoomCmd_Brd) {
    //     if (rev.userInfo) {
    //         if (rev.userInfo.uid == uniLib.NetMgr.UID) {
    //         }
    //         bullGameDispatch(superslot.AppFacadeConst.NOTIFY_PLAYER_ENTER_ROOM, rev);
    //     }
    // }
    // 左右按钮金币转换
    function OnTrueGoldRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.LEFT_RIGHT_TRUE_GOLD, rev);
        }
        else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    Cmd.OnTrueGoldRoomCmd_S = OnTrueGoldRoomCmd_S;
    // 压大小
    function OnBetSizeRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.BET_SIZE, rev);
        }
        else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    Cmd.OnBetSizeRoomCmd_S = OnBetSizeRoomCmd_S;
    // 八个按钮下注请求
    function OnBetRequestRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.EIGHT_BUTTON_BET_INFO, rev);
        }
        else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    Cmd.OnBetRequestRoomCmd_S = OnBetRequestRoomCmd_S;
    // 全压和撤销请求
    function OnAllBetOrRepealRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.ALL_BET_OR_REPEAL, rev);
        }
        else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    Cmd.OnAllBetOrRepealRoomCmd_S = OnAllBetOrRepealRoomCmd_S;
    function OnStartGameRoomCmd_S(rev) {
        if (rev.resultcode == 0) {
            // console.error("协议返回 : OnStartGameRoomCmd_S");
            bullGameDispatch(superslot.AppFacadeConst.RECORD_LAST_GAME_BET, rev);
        }
        else {
            console.error("协议返回 : OnStartGameRoomCmd_S " + rev.resultcode);
            bullGameDispatch(superslot.AppFacadeConst.THREE_BET_FAIL, rev);
            if (rev.desc) {
                uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
            }
        }
    }
    Cmd.OnStartGameRoomCmd_S = OnStartGameRoomCmd_S;
    function OnLeaveRoomCmd_Brd(rev) {
        if (rev.uid == uniLib.NetMgr.UID) {
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        }
    }
    Cmd.OnLeaveRoomCmd_Brd = OnLeaveRoomCmd_Brd;
    function OnLeaveRoomCmd_S(rev) {
        if (rev.ret == 0) {
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        }
        else {
            bullGameDispatch(superslot.AppFacadeConst.FAIL_LEAVE_ROOM, rev);
        }
    }
    Cmd.OnLeaveRoomCmd_S = OnLeaveRoomCmd_S;
    // export function OnBetRequestCmd_S(rev: Cmd.BetRequestCmd_S) {
    //     if (rev.ret == 0) {
    //         uniLib.UserInfo.goldChips = rev.chips;
    //         bullGameDispatch(superslot.AppFacadeConst.USER_BET_CHIPS, rev);
    //     } else {
    //         superslot.PublicManage.getInstance().showMildWarnShow(rev.desc);
    //     }
    // }
    // export function OnRequestUserInfoCmd_S(rev: Cmd.RequestUserInfoCmd_S) {
    //     if (rev.ret == 0) {
    //         bullGameDispatch(superslot.AppFacadeConst.SHOW_PLAYER_INFO, rev);
    //     }
    // }
    // export function OnBetRequestCmd_Brd(rev: Cmd.BetRequestCmd_Brd) {
    //     if (rev.betInfo) {
    //         bullGameDispatch(superslot.AppFacadeConst.NOTIFY_BET_ROOM, rev);
    //     }
    // }
    // export function OnFreeRoomCmd_Brd(rev: Cmd.FreeRoomCmd_Brd) {
    //     bullGameDispatch(superslot.AppFacadeConst.FREE_TIME, rev);
    // }
    // export function OnBeginBetCmd_Brd(rev: Cmd.BeginBetCmd_Brd) {
    //     bullGameDispatch(superslot.AppFacadeConst.NOTIFY_START_BET, rev);
    // }
    function OnLotteryRoomCmd_Brd(rev) {
        // bullGameDispatch(superslot.AppFacadeConst.SHOW_RESULT_PANEL, rev);
        bullGameDispatch(superslot.AppFacadeConst.START_GAME, rev);
    }
    Cmd.OnLotteryRoomCmd_Brd = OnLotteryRoomCmd_Brd;
    function OnSysMessageCmd_S(rev) {
        superslot.PublicManage.getInstance().showMildWarnShow(rev.msg);
    }
    Cmd.OnSysMessageCmd_S = OnSysMessageCmd_S;
    function OnRoomLeaveRoomCmd_S(rev) {
        bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
    }
    Cmd.OnRoomLeaveRoomCmd_S = OnRoomLeaveRoomCmd_S;
})(Cmd || (Cmd = {}));
