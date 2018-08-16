module superslot {
	export class UIEventConsts {
		/**退出房间 */
		public static EXIT_GAME: string = "exit_game";//退出房间
		//关闭按钮
		public static CLOSE: string = "close";
		//跟随下注
		public static FOLLOW_CHIPS: string = "follow_chips";
		//取消跟随下注
		public static CANCEL_FOLLOW: string = "cancel_follow";
		//重复下注
		public static REPEAT_CHIPS: string = "repeat_chips";
		//玩家站起来
		public static USER_APPLY_STAND_UP: string = "user_apply_stand_up";
		//显示玩家信息
		public static SHOW_PLAYER_INFO: string = "show_palyer_info";
		//玩家申请坐下
		public static USER_APPLY_SIT_DOWN: string = "user_apply_sit_down";
		//显示趋势图
		public static SHOW_TREND_PANEL: string = "show_trend_panel";
		//显示大奖图
		public static SHOW_PRIZE_PANEL: string = "show_prize_panel";
		//显示牌行倍率
		public static SHOW_MULT_PANEL: string = "show_mult_panel";
		//显示帮助
		public static SHOW_HELP_PANEL: string = "show_help_panel";
		//显示设置
		public static SHOW_SETTING_PANEL: string = "show_setting_panel";
		//显示更多
		public static SHOW_MORE_PANEL: string = "show_more_panel";
		//申请上庄
		public static APPLY_BANKER_PANEL: string = "apply_banker_panel";
		//取消上庄
		public static CANCEL_APPLY_BANKER: string = "cancel_apply_banker";
		//申请下庄
		public static APPLY_DOWN_BANKER: string = "apply_down_banker";
		//申请上庄
		public static APPLY_BANKER: string = "apply_banker";
		//选择表情
		public static SELECT_EXPRESSION_ITEM: string = "select_expression_item";
		//发送消息
		public static SEND_MESSAGE: string = "send_message";
		//向右西东
		public static MOVE_RIGHT: string = "move_right";
		//向左
		public static MOVE_LEFT: string = "move_left";
		//获取无座玩家列表
		public static GET_NOSEAT_USER_LIST: string = "get_noseat_user_list";
		//玩家下注
		public static USER_BET_CHIPS: string = "user_bet_chips";
		//结算
		public static SHOW_RESULT_PANEL: string = "show_result_panel";
		//显示结算特效
		public static SHOW_WIN_EFFECT: string = "show_win_effect";
		//获取历史记录
		public static GET_LOTTERY_HISTORY: string = "get_lottery_history";
		//买金币的二级提示框
		public static GUIDE_BUY_COINS: string = "guide_buy_coins";
		//分享
		public static SHOW_SHARE_PAGE: string = "show_share_page";
		//获取玩家列表
		public static SHOW_PLAYERPANEL: string = "show_playerpanel";
		//获取富豪榜
		public static SHOW_RANKPANEL: string = "show_rankpanel";
		//加币、减币
		public static UPDATA_CHIPS_APPLY: string = "updata_chips_apply";
		//再次获取玩家列表
		public static AGAIN_SHOW_PLAYERPANEL: string = "again_show_playerpanel";
		//自身金币发生变化
		public static SELFCHIPS_CHANGE: string = "selfchips_change";
		//获取聊天窗口
		public static SHOW_CHAT_PANEL: string = "show_chat_panel";
		//结算完毕
		public static SLWHSETTLEMENT_COMPLETE: string = "SLWHsettlement_complete";
		//筹码变更状态
		public static CHANGE_CHIPS: string = "change_chips";
		//更新排行榜
		public static UPDATE_RANKING: string = "update_ranking";
		public constructor() {

		}
	}
}
