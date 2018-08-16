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
var superslot;
(function (superslot) {
    var SettingPanel = (function (_super) {
        __extends(SettingPanel, _super);
        function SettingPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "SuperSlot_SettingSkin";
            superslotBC.addEvent(_this, _this.closeBtn, egret.TouchEvent.TOUCH_TAP, _this.closeHandle);
            return _this;
        }
        SettingPanel.prototype.closeHandle = function (evt) {
            evt.stopPropagation();
            this.dispatchEventWith(superslot.UIEventConsts.CLOSE);
        };
        SettingPanel.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.initUI();
        };
        SettingPanel.prototype.initUI = function () {
            this.soundHS.minimum = 0;
            this.soundHS.maximum = 100;
            this.voiceHS.minimum = 0;
            this.voiceHS.maximum = 100;
            this.updateMusicVolime();
            this.updateSoundVolime();
            this.addEvent();
        };
        SettingPanel.prototype.addEvent = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
            this.soundHS.addEventListener(eui.UIEvent.CHANGE, this.soundChangeHandler, this);
            this.voiceHS.addEventListener(eui.UIEvent.CHANGE, this.voiceChangeHandler, this);
        };
        SettingPanel.prototype.removeEvent = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
            this.soundHS.removeEventListener(eui.UIEvent.CHANGE, this.soundChangeHandler, this);
            this.voiceHS.removeEventListener(eui.UIEvent.CHANGE, this.voiceChangeHandler, this);
        };
        SettingPanel.prototype.onTouchEvent = function (e) {
            var target = e.target;
            switch (target) {
                case this.voiceBtn:
                    this.voiceBtnClick();
                    break;
                case this.soundBtn:
                    this.soundBtnClick();
                    break;
                case this.voiceHS:
                    this.onTrackTouch();
                    break;
                case this.soundHS:
                    this.onSoundTouch();
                    break;
            }
        };
        SettingPanel.prototype.soundChangeHandler = function (evt) {
            this.soundHS.value = evt.target.value;
            this.onSoundTouch();
        };
        SettingPanel.prototype.voiceChangeHandler = function (evt) {
            this.voiceHS.value = evt.target.value;
            this.onTrackTouch();
        };
        SettingPanel.prototype.onSoundTouch = function () {
            if (this.soundHS.value < 0)
                this.soundHS.value = 0;
            uniLib.SoundMgr.instance.soundVolume = this.soundHS.value / 100;
            uniLib.SoundMgr.instance.soundOpen = false;
            uniLib.SoundMgr.instance.soundOpen = true;
            console.log("soundVolume=" + uniLib.SoundMgr.instance.soundVolume);
            if (uniLib.SoundMgr.instance.soundVolume == 0) {
                this.soundBtn.selected = true;
                uniLib.SoundMgr.instance.soundOpen = false;
            }
            else {
                this.soundBtn.selected = false;
                uniLib.SoundMgr.instance.soundOpen = true;
            }
            if (this.soundHS.value < 5) {
                this.soundHS.skin["thumb"].source = "ss_voice_track_press_png";
            }
            else {
                this.soundHS.skin["thumb"].source = "ss_voice_track_press1_png";
            }
        };
        SettingPanel.prototype.onTrackTouch = function () {
            if (this.voiceHS.value < 0)
                this.voiceHS.value = 0;
            uniLib.SoundMgr.instance.musicVolume = this.voiceHS.value / 100;
            uniLib.SoundMgr.instance.musicOpen = false;
            uniLib.SoundMgr.instance.musicOpen = true;
            console.log("musicVolume=" + uniLib.SoundMgr.instance.musicVolume);
            if (uniLib.SoundMgr.instance.musicVolume == 0) {
                this.voiceBtn.selected = true;
                uniLib.SoundMgr.instance.musicOpen = false;
            }
            else {
                this.voiceBtn.selected = false;
                uniLib.SoundMgr.instance.musicOpen = true;
            }
            if (this.voiceHS.value < 5) {
                this.voiceHS.skin["thumb"].source = "ss_voice_track_press_png";
            }
            else {
                this.voiceHS.skin["thumb"].source = "ss_voice_track_press1_png";
            }
        };
        SettingPanel.prototype.voiceBtnClick = function () {
            if (uniLib.SoundMgr.instance.musicOpen == false) {
                uniLib.SoundMgr.instance.musicVolume = 1;
                uniLib.SoundMgr.instance.musicOpen = true;
                this.voiceBtn.selected = false;
            }
            else {
                uniLib.SoundMgr.instance.musicVolume = 0;
                uniLib.SoundMgr.instance.musicOpen = false;
                this.voiceBtn.selected = true;
            }
            this.updateMusicVolime();
        };
        SettingPanel.prototype.updateMusicVolime = function () {
            this.voiceHS.value = uniLib.SoundMgr.instance.musicVolume * 100;
            if (this.voiceHS.value < 5) {
                this.voiceHS.skin["thumb"].source = "ss_voice_track_press_png";
            }
            else {
                this.voiceHS.skin["thumb"].source = "ss_voice_track_press1_png";
            }
            if (uniLib.SoundMgr.instance.musicVolume == 0) {
                this.voiceBtn.selected = true;
            }
            else {
                this.voiceBtn.selected = false;
            }
        };
        SettingPanel.prototype.soundBtnClick = function () {
            if (uniLib.SoundMgr.instance.soundOpen == false) {
                uniLib.SoundMgr.instance.soundVolume = 1;
                uniLib.SoundMgr.instance.soundOpen = true;
                this.soundBtn.selected = false;
            }
            else {
                uniLib.SoundMgr.instance.soundVolume = 0;
                uniLib.SoundMgr.instance.soundOpen = false;
                this.soundBtn.selected = true;
            }
            this.updateSoundVolime();
        };
        SettingPanel.prototype.updateSoundVolime = function () {
            this.soundHS.value = uniLib.SoundMgr.instance.soundVolume * 100;
            if (this.soundHS.value < 5) {
                this.soundHS.skin["thumb"].source = "ss_voice_track_press_png";
            }
            else {
                this.soundHS.skin["thumb"].source = "ss_voice_track_press1_png";
            }
            if (uniLib.SoundMgr.instance.soundVolume == 0) {
                this.soundBtn.selected = true;
            }
            else {
                this.soundBtn.selected = false;
            }
        };
        SettingPanel.prototype.destory = function () {
            if (this.closeBtn) {
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
                this.closeBtn = null;
            }
            this.removeEvent();
            superslot.ResUtil.removeFromParent(this);
            superslot.ResUtil.removeAllChildren(this);
            uniLib.PopUpMgr.removePopUp(this);
        };
        return SettingPanel;
    }(eui.Component));
    superslot.SettingPanel = SettingPanel;
    __reflect(SettingPanel.prototype, "superslot.SettingPanel");
})(superslot || (superslot = {}));
