var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundsMgr = (function () {
    function SoundsMgr() {
    }
    SoundsMgr.playBtn = function () {
        this.playMusic("button_mp3");
    };
    SoundsMgr.clickCell = function () {
        this.playMusic("dianji_mp3");
    };
    SoundsMgr.removeCell = function (len) {
        // 有声音顺序
        var soundArr = [
            "efx_combine_1_mp3",
            "efx_combine_2_mp3",
            "efx_combine_3_mp3",
            "efx_combine_4_mp3",
            "efx_combine_5_mp3",
            "efx_combine_6_mp3",
            "efx_combine_7_mp3"
        ];
        if (len >= 6) {
            len = 6;
        }
        this.playMusic(soundArr[len]);
    };
    SoundsMgr.win = function () {
        this.playMusic("win_mp3");
    };
    SoundsMgr.lose = function () {
        this.playMusic("lose_mp3");
    };
    SoundsMgr.playMusic = function (v) {
        var sound = RES.getRes(v.toString());
        if (sound) {
            this.bgSoundChannel = sound.play(0, 1);
        }
    };
    SoundsMgr.bgSoundChannel = null;
    return SoundsMgr;
}());
__reflect(SoundsMgr.prototype, "SoundsMgr");
