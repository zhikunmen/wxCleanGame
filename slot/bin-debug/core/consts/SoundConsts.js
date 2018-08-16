var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
    var SoundConsts = (function () {
        function SoundConsts() {
        }
        //背景音乐
        SoundConsts.BACKGROUND_MUSIC = ["sicbo_bg_sound_mp3", "fpc_bg_sound_mp3"];
        //按钮点击
        SoundConsts.BUTTON_CLICK = "button_click";
        //开始下注
        SoundConsts.START_BET = ["hb_sound_kaishixiazhu_mp3", "hb_sound_keyixiazhu_mp3", "hb_sound_laixiazhu_mp3", "hb_sound_qingxiazhu_mp3", "hb_sound_yiqixiazhu_mp3"];
        //停止下注
        SoundConsts.STOP_BET = ["hb_sound_count_down_mp3", "hb_sound_stop_bell_mp3"];
        //最后5秒
        SoundConsts.LAST_FIVE_SECONDS = ["hb_sound_zhishengwumiao_mp3", "hb_sound_zuihouwumiao_mp3", "hb_sound_daoshuwumiao_mp3"];
        //筹码飞行音效
        SoundConsts.CHIPS_FLY = "dt_sound_bet_mp3";
        return SoundConsts;
    }());
    lhj.SoundConsts = SoundConsts;
    __reflect(SoundConsts.prototype, "lhj.SoundConsts");
})(lhj || (lhj = {}));
