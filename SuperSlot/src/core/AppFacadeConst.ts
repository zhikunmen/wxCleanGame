module superslot {
        export class AppFacadeConst {
                /** 启动  */
                public static STARTUP: string = "slwh_startup";
                /** 发送数据 */
                public static SEND_DATA: string = "senddata";
                /**销毁 */
                public static DESTORY: string = "destroy";
                /**结束游戏 */
                public static EXIT_GAME: string = "exitGame";
                //玩家进房间
                public static USER_ENTER_ROOM: string = "br_user_enter_room";
                //房间初始化
                public static ROOM_INIT: string = "room_init";
                //开牌
                public static NOTIFY_GAME_OPEN_CARD: string = "notify_game_open_card";
                //通知玩家坐下
                public static NOTIFY_PLAYER_SIT_DOWN: string = "notify_palyer_sit_down";
                //通知玩家站起
                public static NOTIFY_PLAYER_STAND_UP: string = "notify_palyer_stand_up";
                //通知新玩家进入房间
                public static NOTIFY_PLAYER_ENTER_ROOM: string = "notify_palyer_enter_room";
                //广播玩家下注
                public static NOTIFY_BET_ROOM: string = "notify_bet_room";
                //机器人下注
                public static NOTIFY_BET_LIST_ROOM: string = "notify_bet_list_room";
                //展示发牌动画
                public static NOTIFY_READY_SEND_CARD = "notify_ready_send_card";
                //通知开始下注
                public static NOTIFY_START_BET: string = "notify_start_bet";
                //显示结算
                public static SHOW_RESULT_PANEL: string = "show_result_panel";
                //显示牛牛的历史信息
                public static SHOW_BULL_HISTORY:string="show_bull_history";
                //获取上庄列表
                public static GET_BANKER_LIST:string="get_banker_list";
                //玩家申请上庄
                public static USER_APPLY_BANKER:string="user_apply_banker";
                //通知上庄广播
                public static NOTIFY_APPLY_BANKER:string="notify_apply_banker";
                //取消上庄返回
                public static USER_CANCEL_BANKER:string="user_cancel_banker";
                //通知取消上庄
                public static NOTIFY_CANCEL_BANKER:string="notify_cancel_banker";
                //获取无座玩家列表
                public static GET_NOSEAT_USER_LIST:string="get_noseat_user_list";
                //广播玩家聊天消息
                public static NOTIFY_COMMON_CHAT_MESSAGE:string="notify_common_chat_message";
                //玩家下注返回
                public static USER_BET_CHIPS:string="user_bet_chips";
                //获取排行榜
                public static GET_RANKING_LIST:string="get_ranking_list";
                //获取玩家列表
                public static GET_PLAYER_LIST:string="get_player_list";
                //加、减币
                public static UPDATA_BANKER_BET:string="updata_banker_bet";
                //送礼
                public static SEND_GIFT:string="send_gift";
                //空闲时间
                public static FREE_TIME:string = "free_time";
                //刷新玩家数据
                public static NOTIFY_REFRESH_USERINFO:string="notify_refresh_userinfo";
                //获取大奖页
                public static GET_BIG_PRIZE: string = "get_big_prize";
                //刷新自己的数据  这个感觉很多余 做好让服务器调整一下协议                
                public static REFRESH_MY_USER_INFO:string="notify_refresh_my_user_info";
                //获取玩家个人信息
                public static SHOW_PLAYER_INFO: string = "show_player_info";
                //离开房间失败
                public static FAIL_LEAVE_ROOM: string = "fail_leave_room";
                //时时彩刷新个人金币
                public static REFRESH_MYCHIPS: string = "refresh_mychips";
                //重复下注
                public static REPEAT_CHIPS: string = "repeat_chips";
                //跟随下注
		public static FOLLOW_CHIPS: string = "follow_chips";
                //开始游戏
		public static START_GAME: string = "start_game";
                //左右按钮金币转换
		public static LEFT_RIGHT_TRUE_GOLD: string = "left_right_true_gold";
                //压大小
		public static BET_SIZE: string = "bet_size";
                //八个按钮下注请求
		public static EIGHT_BUTTON_BET_INFO: string = "eight_button_bet_info";
                //全压和撤销请求
		public static ALL_BET_OR_REPEAL: string = "all_bet_or_repeal";
                //记录上一局下注请求
		public static RECORD_LAST_GAME_BET: string = "record_last_game_bet";
                //没有下注无法开始
		public static THREE_BET_FAIL: string = "three_bet_fail";
        }
}
