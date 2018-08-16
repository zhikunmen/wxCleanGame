var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var SoundConsts = (function () {
        function SoundConsts() {
        }
        //背景音乐
        SoundConsts.BACKGROUND_MUSIC = "ss_bg_sound_";
        // 普通转圈音效
        SoundConsts.TURN_SOUND = ["ss_jiasu_sound_", "ss_yunsu_sound_", "ss_jiansu_sound_"];
        //下注音效
        SoundConsts.CHIPIN_SOUND = ["ss_chipin_apple_", "ss_chipin_orange_", "ss_chipin_papaya_",
            "ss_chipin_bell_", "ss_chipin_watermelon_", "ss_chipin_star_", "ss_chipin_seven_", "ss_chipin_bar_"];
        // 开奖结果音效
        SoundConsts.PRIZE_SOUND = ["ss_prize_apple_", "ss_prize_orange_", "ss_prize_papaya_",
            "ss_prize_bell_", "ss_prize_watermelon_", "ss_prize_star_", "ss_prize_seven_", "ss_prize_bar_"];
        // 特殊转圈音效
        SoundConsts.SPECIAL_TURN_SOUND = "ss_circle_";
        // 转圈后结果停止音效
        SoundConsts.STOP_CIRCLE_SOUND = "ss_stop_after_circle_";
        // 交替特效
        SoundConsts.ALTERNATE_SOUND = "ss_alternate_effect_";
        // 图标闪烁音效
        SoundConsts.LOGO_DISPLAY_SOUND = "ss_logo_display_";
        // 比倍成功音效
        SoundConsts.COMPARE_MULTIPLE_SOUND = "ss_compare_multiple_";
        // 其他按钮音效
        SoundConsts.OTHER_BUTTON_SOUND = "ss_other_button_";
        // 胜利音效
        SoundConsts.WIN_SOUND = "ss_win_";
        // 失败音效
        SoundConsts.LOSE_SOUND = "ss_lose_";
        return SoundConsts;
    }());
    superslot.SoundConsts = SoundConsts;
    __reflect(SoundConsts.prototype, "superslot.SoundConsts");
})(superslot || (superslot = {}));
