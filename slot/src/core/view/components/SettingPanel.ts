module lhj {
	export class SettingPanel extends BasePanel {
		private _soundIndex: number;
		private _musicIndex: number;
		private _voiceHilder: HSlide; //音量调节
		private _soundHilder: HSlide; //音效调节
		private _voiceBtn: uniLib.CommonButton;//音量按钮
		private _soundBtn: uniLib.CommonButton;//音效调节
		private color:egret.ColorMatrixFilter;
		public constructor() {
			super();
			this.setColor();
		}
		private setColor(): void{
			
		}
		public destory(): void {
			super.destory();
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
		}
		public initPanel(): void {
			this.setSize(850, 555);
			this.title = "hlhyg_setting";
			var label0: egret.TextField = ResUtil.createTextFeild(0xc4d5ff, egret.HorizontalAlign.LEFT, "音效", 37, 85, 220, 104);
			this.addChild(label0);
			var label1: egret.TextField = ResUtil.createTextFeild(0xc4d5ff, egret.HorizontalAlign.LEFT, "音乐", 37, 85, 350, 104);
			this.addChild(label1);
			this._voiceHilder = new HSlide("hlhyg_bar_2", "hlhyg_bar_3", "hlhyg_bar_3", 500, "hlhyg_bar_1",
				new egret.Rectangle(22, 13, 1, 1), new egret.Rectangle(28, 16, 8, 3));
			this._voiceHilder.name = "_voiceHilder";
			this._voiceHilder.x = 180;
			this._voiceHilder.y = label1.y - 5;
			this._voiceHilder.updateThumbPos(uniLib.SoundMgr.instance.musicVolume * 527)

			this._voiceHilder.minValue = 0;
			this._voiceHilder.maxValue = 100;
			this.addChild(this._voiceHilder);

			this._voiceHilder.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrackTouch, this);
			this._voiceHilder.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrackTouch, this);
			this._soundHilder = new HSlide("hlhyg_bar_2", "hlhyg_bar_3", "hlhyg_bar_3", 500, "hlhyg_bar_1",
				new egret.Rectangle(22, 13, 1, 1), new egret.Rectangle(28, 16, 1, 1));
			this._soundHilder.name = "_soundHilder";
			this._soundHilder.x = 180;
			this._soundHilder.y = label0.y - 5;
			this._soundHilder.updateThumbPos(uniLib.SoundMgr.instance.soundVolume * 527)

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
		}
		private soundBtnClick(evt: egret.TouchEvent): void {
			if (uniLib.SoundMgr.instance.soundOpen == false) {
				uniLib.SoundMgr.instance.soundVolume = 1;
				uniLib.SoundMgr.instance.soundOpen = true;
				this._soundBtn.filters = null;
			} else {
				uniLib.SoundMgr.instance.soundVolume = 0;
				uniLib.SoundMgr.instance.soundOpen = false;
				this._soundBtn.filters = [this.color];
			}
			this.updateSoundVolime();
		}

		private voiceBtnClick(evt: egret.TouchEvent): void {
			if (uniLib.SoundMgr.instance.musicOpen == false) {
				uniLib.SoundMgr.instance.musicVolume = 1;
				uniLib.SoundMgr.instance.musicOpen = true;
				this._voiceBtn.filters = null;
			} else {
				uniLib.SoundMgr.instance.musicVolume = 0;
				uniLib.SoundMgr.instance.musicOpen = false;
				this._voiceBtn.filters = [this.color];
			}
			this.updateMusicVolime();
		}

		private updateMusicVolime(): void {
			this._voiceHilder.value = uniLib.SoundMgr.instance.musicVolume * 100;
			if (uniLib.SoundMgr.instance.musicVolume == 0) {
				this._voiceBtn.filters = [this.color];
			} else {
				this._voiceBtn.filters = null;
			}
		}

		private updateSoundVolime(): void {
			this._soundHilder.value = uniLib.SoundMgr.instance.soundVolume * 100;
			if (uniLib.SoundMgr.instance.soundVolume == 0) {
				this._soundBtn.filters = [this.color];
			} else {
				this._soundBtn.filters = null;
			}
		}
		private onTrackTouch(event: egret.TouchEvent) {
			if (this._voiceHilder.value < 0)
				this._voiceHilder.value = 0;
			uniLib.SoundMgr.instance.musicVolume = this._voiceHilder.value / 100;
			uniLib.SoundMgr.instance.musicOpen = false;
			uniLib.SoundMgr.instance.musicOpen = true;
			if (uniLib.SoundMgr.instance.musicVolume == 0) {
				this._voiceBtn.filters = [this.color];
			} else {
				this._voiceBtn.filters = null;
			}
		}
		private onSoundTouch(evt: egret.TouchEvent) {
			if (this._soundHilder.value < 0)
				this._soundHilder.value = 0;
			uniLib.SoundMgr.instance.soundVolume = this._soundHilder.value / 100;
			uniLib.SoundMgr.instance.soundOpen = false;
			uniLib.SoundMgr.instance.soundOpen = true;
			if (uniLib.SoundMgr.instance.soundVolume == 0) {
				this._soundBtn.filters = [this.color];
			} else {
				this._soundBtn.filters = null;
			}
		}
		private setSoundBtn(){
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var color = new egret.ColorMatrixFilter(colorMatrix);
			this._soundBtn.filters = [color];
        }
	}
}
