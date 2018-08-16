module Cmd {
    export function bullGameDispatch(cmd: string, obj?: any, type?: string): void {
        var facade: superslot.AppFacade = superslot.AppFacade.getInstance();
        facade.sendNotification(cmd, obj, type);
    }

    /**
 * 登陆游戏返回   
 */
    export function OnUserInfoSynRequestLobbyCmd_S(rev: Cmd.UserInfoSynRequestLobbyCmd_S) {
        superslot.RoomInfo.getInstance().initRoom(rev);
        bullGameDispatch(superslot.AppFacadeConst.USER_ENTER_ROOM, rev);
    }

    //进房间
    export function OnRoomEnterRoomCmd_S(rev: Cmd.RoomEnterRoomCmd_S) {
        if (rev.resultcode == 0) {
            superslot.RoomInfo.getInstance().waitNext = true;
            // superslot.RoomInfo.getInstance().initRoomState(rev);
            bullGameDispatch(superslot.AppFacadeConst.ROOM_INIT, rev);
        } else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, true);
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        }
        if (superslot.StaticMgr.getInstance().gameInfo && superslot.StaticMgr.getInstance().gameInfo.preloadUIAutoHide == false && superslot.StaticMgr.getInstance().gameInfo.preloadUI) {
            uniLib.UIMgr.instance.hideLoading(superslot.StaticMgr.getInstance().gameInfo.preloadUI, "", true, false);
        } else {
            uniLib.UIMgr.instance.hideLoading();
        }
    }
    // export function OnPokerEnterRoomCmd_Brd(rev: Cmd.PokerEnterRoomCmd_Brd) {
    //     if (rev.userInfo) {
    //         if (rev.userInfo.uid == uniLib.NetMgr.UID) {
    //         }
    //         bullGameDispatch(superslot.AppFacadeConst.NOTIFY_PLAYER_ENTER_ROOM, rev);
    //     }
    // }

    // 左右按钮金币转换
    export function OnTrueGoldRoomCmd_S(rev: Cmd.TrueGoldRoomCmd_S) {
        if (rev.resultcode == 0) {
             bullGameDispatch(superslot.AppFacadeConst.LEFT_RIGHT_TRUE_GOLD, rev);
        } else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    // 压大小
    export function OnBetSizeRoomCmd_S(rev: Cmd.BetSizeRoomCmd_S) {
        if (rev.resultcode == 0) {
             bullGameDispatch(superslot.AppFacadeConst.BET_SIZE, rev);
        } else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    // 八个按钮下注请求
    export function OnBetRequestRoomCmd_S(rev: Cmd.BetRequestRoomCmd_S) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.EIGHT_BUTTON_BET_INFO, rev);
        } else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    // 全压和撤销请求
    export function OnAllBetOrRepealRoomCmd_S(rev: Cmd.AllBetOrRepealRoomCmd_S) {
        if (rev.resultcode == 0) {
            bullGameDispatch(superslot.AppFacadeConst.ALL_BET_OR_REPEAL, rev);
        } else {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
        }
    }
    export function OnStartGameRoomCmd_S(rev: Cmd.StartGameRoomCmd_S) {
        if (rev.resultcode == 0) {
            // console.error("协议返回 : OnStartGameRoomCmd_S");
            bullGameDispatch(superslot.AppFacadeConst.RECORD_LAST_GAME_BET, rev);
        } else {
            console.error("协议返回 : OnStartGameRoomCmd_S " + rev.resultcode);
            bullGameDispatch(superslot.AppFacadeConst.THREE_BET_FAIL, rev);
            if (rev.desc) {
                uniLib.TipsUtils.showTipsDownToUp(rev.desc, 0xffffff);
            }
        }
    }

    export function OnLeaveRoomCmd_Brd(rev: Cmd.LeaveRoomCmd_Brd) {
        if (rev.uid == uniLib.NetMgr.UID) {
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        }
    }

    export function OnLeaveRoomCmd_S(rev: Cmd.LeaveRoomCmd_S) {
        if (rev.ret == 0) {
            bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
        } else {
            bullGameDispatch(superslot.AppFacadeConst.FAIL_LEAVE_ROOM, rev);
        }
    }


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
    export function OnLotteryRoomCmd_Brd(rev: Cmd.LotteryRoomCmd_Brd) {
        // bullGameDispatch(superslot.AppFacadeConst.SHOW_RESULT_PANEL, rev);
        bullGameDispatch(superslot.AppFacadeConst.START_GAME, rev);
    }
    
    export function OnSysMessageCmd_S(rev: Cmd.SysMessageCmd_S) {
        superslot.PublicManage.getInstance().showMildWarnShow(rev.msg);
    }

    export function OnRoomLeaveRoomCmd_S(rev: Cmd.RoomLeaveRoomCmd_S) {
         bullGameDispatch(superslot.AppFacadeConst.EXIT_GAME, rev);
    }
}
