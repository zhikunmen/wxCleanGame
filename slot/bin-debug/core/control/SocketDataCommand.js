var Cmd;
(function (Cmd) {
    function GameDispatch(cmd, obj, type) {
        var facade = lhj.AppFacade.getInstance();
        facade.sendNotification(cmd, obj, type);
    }
    Cmd.GameDispatch = GameDispatch;
    //进入游戏
    function OnEnterGameCmd_S(rev) {
        if (rev.ret != 0) {
            uniLib.TipsUtils.showTipsDownToUp(rev.desc, true);
            GameDispatch(lhj.AppFacadeConst.EXIT_GAME, rev);
        }
        else {
            GameDispatch(lhj.AppFacadeConst.ROOM_INIT, rev);
        }
    }
    Cmd.OnEnterGameCmd_S = OnEnterGameCmd_S;
    //退出游戏
    function OnExitGameCmd_S(rev) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.EXIT_GAME, rev);
        }
        else {
        }
    }
    Cmd.OnExitGameCmd_S = OnExitGameCmd_S;
    //改变旋转速度
    function OnSetSpeedCmd_S(rev) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.CHANGE_SPEED, rev);
        }
    }
    Cmd.OnSetSpeedCmd_S = OnSetSpeedCmd_S;
    //下注
    function OnBetRequestCmd_S(rev) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.BET_REPLY, rev);
        }
    }
    Cmd.OnBetRequestCmd_S = OnBetRequestCmd_S;
    //转轮结果
    function OnWhellResultCmd_S(rev) {
        GameDispatch(lhj.AppFacadeConst.RUN_RESULT, rev);
    }
    Cmd.OnWhellResultCmd_S = OnWhellResultCmd_S;
    //开奖
    function OnLotteryCmd_S(rev) {
        GameDispatch(lhj.AppFacadeConst.LOTTERY_RESULT, rev);
    }
    Cmd.OnLotteryCmd_S = OnLotteryCmd_S;
    //特殊奖励
    function OnSpecLotCmd_S(rev) {
        GameDispatch(lhj.AppFacadeConst.SPECIAL_REWARD, rev);
    }
    Cmd.OnSpecLotCmd_S = OnSpecLotCmd_S;
    //选取宝箱
    function OnPickSpecLotCmd_S(rev) {
        if (rev.ret == 0) {
            GameDispatch(lhj.AppFacadeConst.SELECT_BOX, rev);
        }
    }
    Cmd.OnPickSpecLotCmd_S = OnPickSpecLotCmd_S;
    //错误操作提醒
    function OnSysMessageCmd_S(rev) {
        lhj.PublicManage.getInstance().showMildWarnShow(rev.msg);
    }
    Cmd.OnSysMessageCmd_S = OnSysMessageCmd_S;
})(Cmd || (Cmd = {}));
