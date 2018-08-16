var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var lhj;
(function (lhj) {
    var SettingPanel = (function (_super) {
        __extends(SettingPanel, _super);
        function SettingPanel() {
            var _this = _super.call(this) || this;
            _this.setColor();
            return _this;
        }
        SettingPanel.prototype.setColor = function () {
        };
        SettingPanel.prototype.destory = function () {
            _super.prototype.destory.call(this);
            if (this._voiceBtn) {
                this._voiceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.voiceBtnClick, this);
                this._voiceBtn = null;
            }
            if (this._soundBtn) {
                this._soundBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soundBtnClick, this);
                this._soundBtn = null;
            }
            if (this._voiceHilder) {
                this._voiceHilder.dispose();
                this._voiceHilder.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrackTouch, this);
                this._voiceHilder.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrackTouch, this);
                this._voiceHilder = null;
            }
            if (this._soundHilder) {
                this._soundHilder.dispose();
                this._soundHilder.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundTouch, this);
                this._soundHilder.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSoundTouch, this);
                this._soundHilder = null;
            }
            uniLib.Utils.setLocalStorage("SoundVolime", uniLib.SoundMgr.instance.soundVolume);
            uniLib.Utils.setLocalStorage("MusicVolime", uniLib.SoundMgr.instance.musicVolume);
        };
        SettingPanel.prototype.initPanel = function () {
            this.setSize(850, 555);
            this.title = "hlhyg_setting";
            var label0 = lhj.ResUtil.createTextFeild(0xc4d5ff, egret.HorizontalAlign.LEFT, "音效", 37, 85, 220, 104);
            this.addChild(label0);
            var label1 = lhj.ResUtil.createTextFeild(0xc4d5ff, egret.HorizontalAlign.LEFT, "音乐", 37, 85, 350, 104);
            this.addChild(label1);
            this._voiceHilder = new lhj.HSlide("hlhyg_bar_2", "hlhyg_bar_3", "hlhyg_bar_3", 500, "hlhyg_bar_1", new egret.Rectangle(22, 13, 1, 1), new egret.Rectangle(28, 16, 8, 3));
            this._voiceHilder.name = "_voiceHilder";
            this._voiceHilder.x = 180;
            this._voiceHilder.y = label1.y - 5;
            this._voiceHilder.updateThumbPos(uniLib.SoundMgr.instance.musicVolume * 527);
            this._voiceHilder.minValue = 0;
            this._voiceHilder.maxValue = 100;
            this.addChild(this._voiceHilder);
            this._voiceHilder.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrackTouch, this);
            this._voiceHilder.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrackTouch, this);
            this._soundHilder = new lhj.HSlide("hlhyg_bar_2", "hlhyg_bar_3", "hlhyg_bar_3", 500, "hlhyg_bar_1", new egret.Rectangle(22, 13, 1, 1), new egret.Rectangle(28, 16, 1, 1));
            this._soundHilder.name = "_soundHilder";
            this._soundHilder.x = 180;
            this._soundHilder.y = label0.y - 5;
            this._soundHilder.updateThumbPos(uniLib.SoundMgr.instance.soundVolume * 527);
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            this.color = new egret.ColorMatrixFilter(colorMatrix);
            this._soundHilder.minValue = 0;
            this._soundHilder.maxValue = 100;
            this.addChild(this._soundHilder);
            this._soundHilder.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundTouch, this);
            this._soundHilder.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSoundTouch, this);
            this._soundBtn = new uniLib.CommonButton("hlhyg_voice_1", "hlhyg_voice_2");
            this.addChild(this._soundBtn);
            this._soundBtn.x = 700;
            this._soundBtn.y = this._soundHilder.y - 15;
            this._voiceBtn = new uniLib.CommonButton("hlhyg_music_1", "hlhyg_music_2");
            this.addChild(this._voiceBtn);
            this._voiceBtn.x = 700;
            this._voiceBtn.y = this._voiceHilder.y - 15;
            this._soundBtn.touchEnabled = true;
            this._voiceBtn.touchEnabled = true;
            this._soundBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soundBtnClick, this);
            this._voiceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.voiceBtnClick, this);
            if (uniLib.Utils.getLocalStorage("MusicVolime")) {
                uniLib.SoundMgr.instance.musicVolume = uniLib.Utils.getLocalStorage("MusicVolime");
            }
            if (uniLib.Utils.getLocalStorage("SoundVolime")) {
                uniLib.SoundMgr.instance.soundVolume = uniLib.Utils.getLocalStorage("SoundVolime");
            }
            this.updateMusicVolime();
            this.updateSoundVolime();
        };
        SettingPanel.prototype.soundBtnClick = function (evt) {
            if (uniLib.SoundMgr.instance.soundOpen == false) {
                uniLib.SoundMgr.instance.soundVolume = 1;
                uniLib.SoundMgr.instance.soundOpen = true;
                this._soundBtn.filters = null;
            }
            else {
                uniLib.SoundMgr.instance.soundVolume = 0;
                uniLib.SoundMgr.instance.soundOpen = false;
                this._soundBtn.filters = [this.color];
            }
            this.updateSoundVolime();
        };
        SettingPanel.prototype.voiceBtnClick = function (evt) {
            if (uniLib.SoundMgr.instance.musicOpen == false) {
                uniLib.SoundMgr.instance.musicVolume = 1;
                uniLib.SoundMgr.instance.musicOpen = true;
                this._voiceBtn.filters = null;
            }
            else {
                uniLib.SoundMgr.instance.musicVolume = 0;
                uniLib.SoundMgr.instance.musicOpen = false;
                this._voiceBtn.filters = [this.color];
            }
            this.updateMusicVolime();
        };
        SettingPanel.prototype.updateMusicVolime = function () {
            this._voiceHilder.value = uniLib.SoundMgr.instance.musicVolume * 100;
            if (uniLib.SoundMgr.instance.musicVolume == 0) {
                this._voiceBtn.filters = [this.color];
            }
            else {
                this._voiceBtn.filters = null;
            }
        };
        SettingPanel.prototype.updateSoundVolime = function () {
            this._soundHilder.value = uniLib.SoundMgr.instance.soundVolume * 100;
            if (uniLib.SoundMgr.instance.soundVolume == 0) {
                this._soundBtn.filters = [this.color];
            }
            else {
                this._soundBtn.filters = null;
            }
        };
        SettingPanel.prototype.onTrackTouch = function (event) {
            if (this._voiceHilder.value < 0)
                this._voiceHilder.value = 0;
            uniLib.SoundMgr.instance.musicVolume = this._voiceHilder.value / 100;
            uniLib.SoundMgr.instance.musicOpen = false;
            uniLib.SoundMgr.instance.musicOpen = true;
            if (uniLib.SoundMgr.instance.musicVolume == 0) {
                this._voiceBtn.filters = [this.color];
            }
            else {
                this._voiceBtn.filters = null;
            }
        };
        SettingPanel.prototype.onSoundTouch = function (evt) {
            if (this._soundHilder.value < 0)
                this._soundHilder.value = 0;
            uniLib.SoundMgr.instance.soundVolume = this._soundHilder.value / 100;
            uniLib.SoundMgr.instance.soundOpen = false;
            uniLib.SoundMgr.instance.soundOpen = true;
            if (uniLib.SoundMgr.instance.soundVolume == 0) {
                this._soundBtn.filters = [this.color];
            }
            else {
                this._soundBtn.filters = null;
            }
        };
        SettingPanel.prototype.setSoundBtn = function () {
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var color = new egret.ColorMatrixFilter(colorMatrix);
            this._soundBtn.filters = [color];
        };
        return SettingPanel;
    }(lhj.BasePanel));
    lhj.SettingPanel = SettingPanel;
    __reflect(SettingPanel.prototype, "lhj.SettingPanel");
})(lhj || (lhj = {}));
