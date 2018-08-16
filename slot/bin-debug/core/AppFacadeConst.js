var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var AppFacadeConst = (function () {
        function AppFacadeConst() {
        }
        /** 启动  */
        AppFacadeConst.STARTUP = "HBPoker_startup";
        /** 发送数据 */
        AppFacadeConst.SEND_DATA = "senddata";
        /**销毁 */
        AppFacadeConst.DESTORY = "destroy";
        /**结束游戏 */
        AppFacadeConst.EXIT_GAME = "exitGame";
        //玩家进房间
        AppFacadeConst.ROOM_INIT = "room_init";
        //改变旋转速度
        AppFacadeConst.CHANGE_SPEED = "change_speed";
        //下注
        AppFacadeConst.BET_REPLY = "bet_reply";
        //转轮结果
        AppFacadeConst.RUN_RESULT = "run_result";
        //开奖
        AppFacadeConst.LOTTERY_RESULT = "lottery_result";
        //特殊奖励
        AppFacadeConst.SPECIAL_REWARD = "special_reward";
        //选取宝箱
        AppFacadeConst.SELECT_BOX = "select_box";
        return AppFacadeConst;
    }());
    lhj.AppFacadeConst = AppFacadeConst;
    __reflect(AppFacadeConst.prototype, "lhj.AppFacadeConst");
})(lhj || (lhj = {}));
