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
    var ClockMc = (function (_super) {
        __extends(ClockMc, _super);
        function ClockMc() {
            var _this = _super.call(this) || this;
            _this._countSecond = 0;
            _this._countIndex = 0;
            return _this;
        }
        ClockMc.prototype.initUI = function () {
            this._clockBg = lhj.ResUtil.createBitmapByName("dt_clock_bg");
            this.addChild(this._clockBg);
            this._clockBg.x = 830;
            this._clockBg.visible = false;
            this._clockBg.y = 10;
            this._clockTxt = lhj.ResUtil.createFontText("", 0, 0, 0, RES.getRes("dt_countdown_num_fnt"));
            this._clockTxt.width = this._clockBg.width;
            this._clockTxt.height = this._clockBg.height;
            this._clockTxt.x = this._clockBg.x;
            this._clockTxt.y = this._clockBg.y;
            this._clockTxt.textAlign = egret.HorizontalAlign.CENTER;
            this._clockTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.addChild(this._clockTxt);
            this._clockTxt.visible = false;
            this._timer = new egret.Timer(1000);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        };
        ClockMc.prototype.startCount = function (count) {
            this._clockBg.visible = true;
            this._clockTxt.visible = true;
            this._countSecond = count;
            this._clockTxt.text = count + "";
            this._countIndex = 0;
            this._timer.start();
        };
        ClockMc.prototype.reset = function () {
            this._clockBg.visible = false;
            this._clockTxt.visible = false;
            this._countIndex = 0;
            if (this._timer) {
                this._timer.stop();
            }
        };
        ClockMc.prototype.onTimer = function (evt) {
            this._countIndex++;
            var curTime = Math.floor(this._countSecond - this._countIndex);
            if (curTime == 0) {
                curTime = 0;
                uniLib.SoundMgr.instance.playSound("hb_sound_stop_bell_mp3");
                this._timer.reset();
                this._timer.stop();
                this._clockBg.visible = false;
                this._clockTxt.visible = false;
            }
            if (curTime == 5) {
                // this._clockBg.visible = false;
                // this._clockTxt.visible = false;
                // egret.MainContext.instance.stage.dispatchEventWith(UIEventConsts.LAST_TIME, false);
                uniLib.SoundMgr.instance.playSound("dt_sound_count_mp3");
            }
            this._clockTxt.text = curTime + "";
        };
        ClockMc.prototype.destory = function () {
            if (this._timer) {
                this._timer.stop();
                this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            }
        };
        return ClockMc;
    }(lhj.BaseVc));
    lhj.ClockMc = ClockMc;
    __reflect(ClockMc.prototype, "lhj.ClockMc");
})(lhj || (lhj = {}));
