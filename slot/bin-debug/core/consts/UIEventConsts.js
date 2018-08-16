var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var UIEventConsts = (function () {
        function UIEventConsts() {
        }
        /**退出房间 */
        UIEventConsts.EXIT_GAME = "exit_game"; //退出房间
        //关闭按钮
        UIEventConsts.CLOSE = "close";
        //玩家站起来
        UIEventConsts.USER_APPLY_STAND_UP = "user_apply_stand_up";
        //显示玩家信息
        UIEventConsts.SHOW_PLAYER_INFO = "show_palyer_info";
        //玩家申请坐下
        UIEventConsts.USER_APPLY_SIT_DOWN = "user_apply_sit_down";
        //显示趋势图
        UIEventConsts.SHOW_RECORD_PANEL = "show_trend_panel";
        //显示牌行倍率
        UIEventConsts.SHOW_MULT_PANEL = "show_mult_panel";
        //显示帮助
        UIEventConsts.SHOW_HELP_PANEL = "show_help_panel";
        //显示设置
        UIEventConsts.SHOW_SETTING_PANEL = "show_setting_panel";
        //显示更多
        UIEventConsts.SHOW_MORE_PANEL = "show_more_panel";
        //申请上庄
        UIEventConsts.APPLY_BANKER_PANEL = "apply_banker_panel";
        //取消上庄
        UIEventConsts.CANCEL_APPLY_BANKER = "cancel_apply_banker";
        //申请上庄
        UIEventConsts.APPLY_BANKER = "apply_banker";
        //选择表情
        UIEventConsts.SELECT_EXPRESSION_ITEM = "select_expression_item";
        //发送消息
        UIEventConsts.SEND_MESSAGE = "send_message";
        //向右西东
        UIEventConsts.MOVE_RIGHT = "move_right";
        //向左
        UIEventConsts.MOVE_LEFT = "move_left";
        //获取无座玩家列表
        UIEventConsts.GET_NOSEAT_USER_LIST = "get_noseat_user_list";
        //玩家下注
        UIEventConsts.USER_BET_CHIPS = "user_bet_chips";
        //结算
        UIEventConsts.SHOW_RESULT_PANEL = "show_result_panel";
        //显示结算特效
        UIEventConsts.SHOW_WIN_EFFECT = "show_win_effect";
        //获取历史记录
        UIEventConsts.GET_LOTTERY_HISTORY = "get_lottery_history";
        //买金币的二级提示框
        UIEventConsts.GUIDE_BUY_COINS = "guide_buy_coins";
        //分享
        UIEventConsts.SHOW_SHARE_PAGE = "show_share_page";
        //展示输赢金币
        UIEventConsts.SHOW_CHIPS_PANEL = "show_chips_panel";
        //显示倒计时
        UIEventConsts.LAST_TIME = "last_time";
        //重复下注
        UIEventConsts.REPEAT_BET = "repeat_bet";
        //金币变化
        UIEventConsts.CHANGE_CHIPS = "change_chips";
        return UIEventConsts;
    }());
    lhj.UIEventConsts = UIEventConsts;
    __reflect(UIEventConsts.prototype, "lhj.UIEventConsts");
})(lhj || (lhj = {}));
