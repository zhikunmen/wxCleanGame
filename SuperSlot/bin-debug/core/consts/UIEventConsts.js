var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var UIEventConsts = (function () {
        function UIEventConsts() {
        }
        /**退出房间 */
        UIEventConsts.EXIT_GAME = "exit_game"; //退出房间
        //关闭按钮
        UIEventConsts.CLOSE = "close";
        //跟随下注
        UIEventConsts.FOLLOW_CHIPS = "follow_chips";
        //取消跟随下注
        UIEventConsts.CANCEL_FOLLOW = "cancel_follow";
        //重复下注
        UIEventConsts.REPEAT_CHIPS = "repeat_chips";
        //玩家站起来
        UIEventConsts.USER_APPLY_STAND_UP = "user_apply_stand_up";
        //显示玩家信息
        UIEventConsts.SHOW_PLAYER_INFO = "show_palyer_info";
        //玩家申请坐下
        UIEventConsts.USER_APPLY_SIT_DOWN = "user_apply_sit_down";
        //显示趋势图
        UIEventConsts.SHOW_TREND_PANEL = "show_trend_panel";
        //显示大奖图
        UIEventConsts.SHOW_PRIZE_PANEL = "show_prize_panel";
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
        //申请下庄
        UIEventConsts.APPLY_DOWN_BANKER = "apply_down_banker";
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
        //获取玩家列表
        UIEventConsts.SHOW_PLAYERPANEL = "show_playerpanel";
        //获取富豪榜
        UIEventConsts.SHOW_RANKPANEL = "show_rankpanel";
        //加币、减币
        UIEventConsts.UPDATA_CHIPS_APPLY = "updata_chips_apply";
        //再次获取玩家列表
        UIEventConsts.AGAIN_SHOW_PLAYERPANEL = "again_show_playerpanel";
        //自身金币发生变化
        UIEventConsts.SELFCHIPS_CHANGE = "selfchips_change";
        //获取聊天窗口
        UIEventConsts.SHOW_CHAT_PANEL = "show_chat_panel";
        //结算完毕
        UIEventConsts.SLWHSETTLEMENT_COMPLETE = "SLWHsettlement_complete";
        //筹码变更状态
        UIEventConsts.CHANGE_CHIPS = "change_chips";
        //更新排行榜
        UIEventConsts.UPDATE_RANKING = "update_ranking";
        return UIEventConsts;
    }());
    superslot.UIEventConsts = UIEventConsts;
    __reflect(UIEventConsts.prototype, "superslot.UIEventConsts");
})(superslot || (superslot = {}));
