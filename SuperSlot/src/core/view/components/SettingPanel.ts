module superslot {
	export class SettingPanel extends eui.Component {
		private closeBtn: eui.Button;
		private soundHS: eui.HSlider;// 音效
		private voiceHS: eui.HSlider;// 音乐
		private soundBtn: eui.CheckBox;// 音效按钮
		private voiceBtn: eui.CheckBox;// 音乐按钮
		public constructor() {
			super();
			this.skinName = "SuperSlot_SettingSkin";
			superslotBC.addEvent(this,this.closeBtn,egret.TouchEvent.TOUCH_TAP, this.closeHandle);
		}

		private closeHandle(evt: egret.TouchEvent): void {
			evt.stopPropagation();
			this.dispatchEventWith(UIEventConsts.CLOSE);
		}

		protected createChildren() {
			super.createChildren();
			this.initUI();
		}

		private initUI(): void {
			this.soundHS.minimum = 0;
			this.soundHS.maximum = 100;
			this.voiceHS.minimum = 0;
			this.voiceHS.maximum = 100;
			this.updateMusicVolime();
			this.updateSoundVolime();
			this.addEvent();
		}

		private addEvent():void{
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
			this.soundHS.addEventListener(eui.UIEvent.CHANGE, this.soundChangeHandler, this);
			this.voiceHS.addEventListener(eui.UIEvent.CHANGE, this.voiceChangeHandler, this);
		}

		private removeEvent():void{
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
			this.soundHS.removeEventListener(eui.UIEvent.CHANGE, this.soundChangeHandler, this);
			this.voiceHS.removeEventListener(eui.UIEvent.CHANGE, this.voiceChangeHandler, this);
		}

		private onTouchEvent(e:egret.Event):void{
			let target:any=e.target;
			switch(target){
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
		}

		private soundChangeHandler(evt: eui.UIEvent):void{
			this.soundHS.value = evt.target.value;
			this.onSoundTouch();
		}

		private voiceChangeHandler(evt: eui.UIEvent):void{
			this.voiceHS.value = evt.target.value;
			this.onTrackTouch();
		}

		private onSoundTouch() {
			if (this.soundHS.value < 0)
				this.soundHS.value = 0;
			uniLib.SoundMgr.instance.soundVolume = this.soundHS.value / 100;
			uniLib.SoundMgr.instance.soundOpen = false;
			uniLib.SoundMgr.instance.soundOpen = true;
			console.log("soundVolume="+uniLib.SoundMgr.instance.soundVolume);
			
			if (uniLib.SoundMgr.instance.soundVolume == 0) {
				this.soundBtn.selected = true;
				uniLib.SoundMgr.instance.soundOpen = false;
			} else {
				this.soundBtn.selected = false;
				uniLib.SoundMgr.instance.soundOpen = true;
			}
			if (this.soundHS.value < 5) {
				this.soundHS.skin["thumb"].source = "ss_voice_track_press_png";
			} else {
				this.soundHS.skin["thumb"].source = "ss_voice_track_press1_png";
			}
		}

		private onTrackTouch() {
			if (this.voiceHS.value < 0)
				this.voiceHS.value = 0;
			uniLib.SoundMgr.instance.musicVolume = this.voiceHS.value / 100;
			uniLib.SoundMgr.instance.musicOpen = false;
			uniLib.SoundMgr.instance.musicOpen = true;
			console.log("musicVolume="+uniLib.SoundMgr.instance.musicVolume);
			if (uniLib.SoundMgr.instance.musicVolume == 0) {
				this.voiceBtn.selected = true;
				uniLib.SoundMgr.instance.musicOpen = false;
			} else {
				this.voiceBtn.selected = false;
				uniLib.SoundMgr.instance.musicOpen = true;
			}
			if (this.voiceHS.value < 5) {
				this.voiceHS.skin["thumb"].source = "ss_voice_track_press_png";
			} else {
				this.voiceHS.skin["thumb"].source = "ss_voice_track_press1_png";
			}
		}

		private voiceBtnClick(): void {

			if (uniLib.SoundMgr.instance.musicOpen == false) {
				uniLib.SoundMgr.instance.musicVolume = 1;
				uniLib.SoundMgr.instance.musicOpen = true;
				this.voiceBtn.selected = false;
			} else {
				uniLib.SoundMgr.instance.musicVolume = 0;
				uniLib.SoundMgr.instance.musicOpen = false;
				this.voiceBtn.selected = true;
			}
			this.updateMusicVolime();
		}

		private updateMusicVolime(): void {
			this.voiceHS.value = uniLib.SoundMgr.instance.musicVolume * 100;
			if (this.voiceHS.value < 5) {
				this.voiceHS.skin["thumb"].source = "ss_voice_track_press_png";
			} else {
				this.voiceHS.skin["thumb"].source = "ss_voice_track_press1_png";
			}
			if (uniLib.SoundMgr.instance.musicVolume == 0) {
				this.voiceBtn.selected = true;
			} else {
				this.voiceBtn.selected = false;
			}
		}

		private soundBtnClick(): void {
			if (uniLib.SoundMgr.instance.soundOpen == false) {
				uniLib.SoundMgr.instance.soundVolume = 1;
				uniLib.SoundMgr.instance.soundOpen = true;
				this.soundBtn.selected = false;
			} else {
				uniLib.SoundMgr.instance.soundVolume = 0;
				uniLib.SoundMgr.instance.soundOpen = false;
				this.soundBtn.selected = true;
			}
			this.updateSoundVolime();
		}

		private updateSoundVolime(): void {
			this.soundHS.value = uniLib.SoundMgr.instance.soundVolume * 100;
			if (this.soundHS.value < 5) {
				this.soundHS.skin["thumb"].source = "ss_voice_track_press_png";
			} else {
				this.soundHS.skin["thumb"].source = "ss_voice_track_press1_png";
			}
			if (uniLib.SoundMgr.instance.soundVolume == 0) {
				this.soundBtn.selected = true;
			} else {
				this.soundBtn.selected = false;
			}
		}


		public destory(): void {
			if (this.closeBtn) {
				this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandle, this);
				this.closeBtn = null;
			}
			this.removeEvent();
			ResUtil.removeFromParent(this);
            ResUtil.removeAllChildren(this);
			uniLib.PopUpMgr.removePopUp(this);
		}
	}
}