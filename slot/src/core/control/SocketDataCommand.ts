module Cmd {
    export function GameDispatch(cmd: string, obj?: any, type?: string): void {
        var facade: lhj.AppFacade = lhj.AppFacade.getInstance();
        facade.sendNotification(cmd, obj, type);
    }

    //进入游戏
    export function OnEnterGameCmd_S(rev: Cmd.EnterGameCmd_S) {
        if (rev.ret != 0) {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, true);
            GameDispatch(lhj.AppFacadeConst.EXIT_GAME, rev);
        } else {
            GameDispatch(lhj.AppFacadeConst.ROOM_INIT, rev);
        }
    }
    //退出游戏
    export function OnExitGameCmd_S(rev: Cmd.ExitGameCmd_S) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.EXIT_GAME, rev);
        } else {

        }
    }
    //改变旋转速度
    export function OnSetSpeedCmd_S(rev: Cmd.SetSpeedCmd_S) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.CHANGE_SPEED, rev);
        }
    }
    //下注
    export function OnBetRequestCmd_S(rev: Cmd.BetRequestCmd_S) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.BET_REPLY, rev);
        }
    }
    //转轮结果
    export function OnWhellResultCmd_S(rev: Cmd.WhellResultCmd_S) {
        GameDispatch(lhj.AppFacadeConst.RUN_RESULT, rev);
    }
    //开奖
    export function OnLotteryCmd_S(rev: Cmd.LotteryCmd_S) {
        GameDispatch(lhj.AppFacadeConst.LOTTERY_RESULT, rev);
    }
    //特殊奖励
    export function OnSpecLotCmd_S(rev: Cmd.SpecLotCmd_S) {
        GameDispatch(lhj.AppFacadeConst.SPECIAL_REWARD, rev);
    }
    //选取宝箱
    export function OnPickSpecLotCmd_S(rev: Cmd.PickSpecLotCmd_S) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.SELECT_BOX, rev);
        }
    }
    //错误操作提醒
    export function OnSysMessageCmd_S(rev: Cmd.SysMessageCmd_S){
        lhj.PublicManage.getInstance().showMildWarnShow(rev.msg);
    }
}
