module lhj {
        export class AppFacadeConst {
                /** 启动  */
                public static STARTUP: string = "HBPoker_startup";
                /** 发送数据 */
                public static SEND_DATA: string = "senddata";
                /**销毁 */
                public static DESTORY: string = "destroy";
                /**结束游戏 */
                public static EXIT_GAME: string = "exitGame";
                //玩家进房间
                public static ROOM_INIT: string = "room_init";
                //改变旋转速度
                public static CHANGE_SPEED: string = "change_speed";
                //下注
                public static BET_REPLY: string = "bet_reply";
                //转轮结果
                public static RUN_RESULT: string = "run_result";
                //开奖
                public static LOTTERY_RESULT: string = "lottery_result";
                //特殊奖励
                public static SPECIAL_REWARD: string = "special_reward";
                //选取宝箱
                public static SELECT_BOX: string = "select_box";
        }
}
