module superslot {
	export class SoundConsts {
		//背景音乐
		public static BACKGROUND_MUSIC: string = "ss_bg_sound_";
		// 普通转圈音效
		public static TURN_SOUND: string[] = ["ss_jiasu_sound_","ss_yunsu_sound_","ss_jiansu_sound_"];
		//下注音效
		public static CHIPIN_SOUND: string[] = ["ss_chipin_apple_", "ss_chipin_orange_", "ss_chipin_papaya_", 
			"ss_chipin_bell_", "ss_chipin_watermelon_", "ss_chipin_star_", "ss_chipin_seven_", "ss_chipin_bar_"];
		// 开奖结果音效
		public static PRIZE_SOUND: string[] = ["ss_prize_apple_", "ss_prize_orange_", "ss_prize_papaya_", 
			"ss_prize_bell_", "ss_prize_watermelon_", "ss_prize_star_", "ss_prize_seven_", "ss_prize_bar_"];
		// 特殊转圈音效
		public static SPECIAL_TURN_SOUND: string = "ss_circle_";
		// 转圈后结果停止音效
		public static STOP_CIRCLE_SOUND: string = "ss_stop_after_circle_";
		// 交替特效
		public static ALTERNATE_SOUND: string  = "ss_alternate_effect_";
		// 图标闪烁音效
		public static LOGO_DISPLAY_SOUND: string  = "ss_logo_display_";
		// 比倍成功音效
		public static COMPARE_MULTIPLE_SOUND: string = 	"ss_compare_multiple_";
		// 其他按钮音效
		public static OTHER_BUTTON_SOUND: string = 	"ss_other_button_";
		// 胜利音效
		public static WIN_SOUND: string = 	"ss_win_";
		// 失败音效
		public static LOSE_SOUND: string = 	"ss_lose_";
		
		public constructor() {

		}
	}
}
