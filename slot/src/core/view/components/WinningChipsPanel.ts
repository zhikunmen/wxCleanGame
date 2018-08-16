module lhj{
    export class WinningChipsPanel extends eui.Component{
        private _bg: eui.Image;
        private _chipTxt: eui.BitmapLabel;
        public constructor() {
			super();
            this.skinName = "sicbo_winchipsSkin";
		}
        public setData(num: number): void{
			if(num < 0){
				this._bg.source = "hlhyg_lose_bg";
				this._chipTxt.font = "hb_loseChips_number_fnt";
                this._chipTxt.text = num+"";
			}else if(num > 0){
				this._bg.source = "hlhyg_winning_bg";
				this._chipTxt.font = "hb_winChips_number_fnt";
                this._chipTxt.text = "+" + num;
			}
            this._bg.width = this._chipTxt.width;
		}
    }
}