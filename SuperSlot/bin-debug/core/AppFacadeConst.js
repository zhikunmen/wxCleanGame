var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var AppFacadeConst = (function () {
        function AppFacadeConst() {
        }
        /** 启动  */
        AppFacadeConst.STARTUP = "slwh_startup";
        /** 发送数据 */
        AppFacadeConst.SEND_DATA = "senddata";
        /**销毁 */
        AppFacadeConst.DESTORY = "destroy";
        /**结束游戏 */
        AppFacadeConst.EXIT_GAME = "exitGame";
        //玩家进房间
        AppFacadeConst.USER_ENTER_ROOM = "br_user_enter_room";
        //房间初始化
        AppFacadeConst.ROOM_INIT = "room_init";
        //开牌
        AppFacadeConst.NOTIFY_GAME_OPEN_CARD = "notify_game_open_card";
        //通知玩家坐下
        AppFacadeConst.NOTIFY_PLAYER_SIT_DOWN = "notify_palyer_sit_down";
        //通知玩家站起
        AppFacadeConst.NOTIFY_PLAYER_STAND_UP = "notify_palyer_stand_up";
        //通知新玩家进入房间
        AppFacadeConst.NOTIFY_PLAYER_ENTER_ROOM = "notify_palyer_enter_room";
        //广播玩家下注
        AppFacadeConst.NOTIFY_BET_ROOM = "notify_bet_room";
        //机器人下注
        AppFacadeConst.NOTIFY_BET_LIST_ROOM = "notify_bet_list_room";
        //展示发牌动画
        AppFacadeConst.NOTIFY_READY_SEND_CARD = "notify_ready_send_card";
        //通知开始下注
        AppFacadeConst.NOTIFY_START_BET = "notify_start_bet";
        //显示结算
        AppFacadeConst.SHOW_RESULT_PANEL = "show_result_panel";
        //显示牛牛的历史信息
        AppFacadeConst.SHOW_BULL_HISTORY = "show_bull_history";
        //获取上庄列表
        AppFacadeConst.GET_BANKER_LIST = "get_banker_list";
        //玩家申请上庄
        AppFacadeConst.USER_APPLY_BANKER = "user_apply_banker";
        //通知上庄广播
        AppFacadeConst.NOTIFY_APPLY_BANKER = "notify_apply_banker";
        //取消上庄返回
        AppFacadeConst.USER_CANCEL_BANKER = "user_cancel_banker";
        //通知取消上庄
        AppFacadeConst.NOTIFY_CANCEL_BANKER = "notify_cancel_banker";
        //获取无座玩家列表
        AppFacadeConst.GET_NOSEAT_USER_LIST = "get_noseat_user_list";
        //广播玩家聊天消息
        AppFacadeConst.NOTIFY_COMMON_CHAT_MESSAGE = "notify_common_chat_message";
        //玩家下注返回
        AppFacadeConst.USER_BET_CHIPS = "user_bet_chips";
        //获取排行榜
        AppFacadeConst.GET_RANKING_LIST = "get_ranking_list";
        //获取玩家列表
        AppFacadeConst.GET_PLAYER_LIST = "get_player_list";
        //加、减币
        AppFacadeConst.UPDATA_BANKER_BET = "updata_banker_bet";
        //送礼
        AppFacadeConst.SEND_GIFT = "send_gift";
        //空闲时间
        AppFacadeConst.FREE_TIME = "free_time";
        //刷新玩家数据
        AppFacadeConst.NOTIFY_REFRESH_USERINFO = "notify_refresh_userinfo";
        //获取大奖页
        AppFacadeConst.GET_BIG_PRIZE = "get_big_prize";
        //刷新自己的数据  这个感觉很多余 做好让服务器调整一下协议                
        AppFacadeConst.REFRESH_MY_USER_INFO = "notify_refresh_my_user_info";
        //获取玩家个人信息
        AppFacadeConst.SHOW_PLAYER_INFO = "show_player_info";
        //离开房间失败
        AppFacadeConst.FAIL_LEAVE_ROOM = "fail_leave_room";
        //时时彩刷新个人金币
        AppFacadeConst.REFRESH_MYCHIPS = "refresh_mychips";
        //重复下注
        AppFacadeConst.REPEAT_CHIPS = "repeat_chips";
        //跟随下注
        AppFacadeConst.FOLLOW_CHIPS = "follow_chips";
        //开始游戏
        AppFacadeConst.START_GAME = "start_game";
        //左右按钮金币转换
        AppFacadeConst.LEFT_RIGHT_TRUE_GOLD = "left_right_true_gold";
        //压大小
        AppFacadeConst.BET_SIZE = "bet_size";
        //八个按钮下注请求
        AppFacadeConst.EIGHT_BUTTON_BET_INFO = "eight_button_bet_info";
        //全压和撤销请求
        AppFacadeConst.ALL_BET_OR_REPEAL = "all_bet_or_repeal";
        //记录上一局下注请求
        AppFacadeConst.RECORD_LAST_GAME_BET = "record_last_game_bet";
        //没有下注无法开始
        AppFacadeConst.THREE_BET_FAIL = "three_bet_fail";
        return AppFacadeConst;
    }());
    superslot.AppFacadeConst = AppFacadeConst;
    __reflect(AppFacadeConst.prototype, "superslot.AppFacadeConst");
})(superslot || (superslot = {}));
