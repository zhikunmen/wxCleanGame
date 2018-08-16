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
    var ActionEffectMc = (function (_super) {
        __extends(ActionEffectMc, _super);
        function ActionEffectMc() {
            var _this = _super.call(this) || this;
            _this._second = 0;
            _this._count = 10;
            return _this;
        }
        //等待下一局
        ActionEffectMc.prototype.waitNext = function (rev) {
        };
        //休息时间
        ActionEffectMc.prototype.freeTime = function (time) {
            if (this.waitTxt) {
                uniLib.DisplayUtils.removeFromParent(this.waitTxt);
            }
            if (this.movie_1) {
                uniLib.DisplayUtils.removeFromParent(this.movie_1);
            }
            this.timer_1000.stop();
            this._second = 0;
            this.effect = lhj.ResUtil.createDragon("dt_free_effect", "dengdai", uniLib.DragonType.ARMATURE, 640, 360, this, time, 1);
            this.title = lhj.ResUtil.createBitmapByName("dt_free_title");
            this.title.x = 490;
            this.title.y = 320;
            this.addChild(this.title);
            this.addChild(this.waitTxt);
            this.waitTxt.x = 720;
            this.waitTxt.y = 320;
            this.waitTxt.text = "(" + time + "s)";
            this._count = time;
            this._second = 0;
            this.timer_1000.start();
        };
        ActionEffectMc.prototype.removeEffect = function () {
            if (this.effect) {
                uniLib.DisplayUtils.removeFromParent(this.effect);
            }
            if (this.title) {
                uniLib.DisplayUtils.removeFromParent(this.title);
            }
        };
        ActionEffectMc.prototype.countSecond = function () {
            this._second++;
            var remind = this._count - this._second;
            if (remind < 0)
                remind = 0;
            this.waitTxt.text = "(" + (remind) + "s)";
            if (this._second > this._count) {
                if (this.waitTxt) {
                    uniLib.DisplayUtils.removeFromParent(this.waitTxt);
                }
                if (this.movie_1) {
                    uniLib.DisplayUtils.removeFromParent(this.movie_1);
                }
                this.timer_1000.stop();
                this._second = 0;
            }
        };
        //开始下注
        ActionEffectMc.prototype.startBet = function (time) {
            var _this = this;
            if (time === void 0) { time = 10; }
            this.removeEffect();
            this.timer_1000.stop();
            if (this.waitTxt) {
                uniLib.DisplayUtils.removeFromParent(this.waitTxt);
            }
            if (this.movie_1) {
                uniLib.DisplayUtils.removeFromParent(this.movie_1);
            }
            this.movie_2 = lhj.ResUtil.createDragon("dt_tishi", "xiazhu", "MovieClip", 640, 360, this, 1, 1);
            if (this.movie_2) {
                this.movie_2.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, function () {
                    uniLib.DisplayUtils.removeFromParent(_this.movie_2);
                }, this);
            }
        };
        ActionEffectMc.prototype.bgDown = function (param) {
            if (param) {
                egret.Tween.removeTweens(param);
            }
        };
        ActionEffectMc.prototype.removeAction = function () {
        };
        ActionEffectMc.prototype.initUI = function () {
            this.effectArr = [];
            this._mcPanel = new egret.Sprite;
            this.addChild(this._mcPanel);
            this.waitTxt = lhj.ResUtil.createFontText("", 0, 0, 300, RES.getRes("dt_tishi_num_fnt"));
            this.timer_1000 = new egret.Timer(1000);
            this.timer_1000.addEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
            this.timer_1000.stop();
        };
        ActionEffectMc.prototype.destory = function () {
            if (this.timer_1000) {
                this.timer_1000.removeEventListener(egret.TimerEvent.TIMER, this.countSecond, this);
                this.timer_1000.stop();
                this.timer_1000 = null;
            }
        };
        return ActionEffectMc;
    }(lhj.BaseVc));
    lhj.ActionEffectMc = ActionEffectMc;
    __reflect(ActionEffectMc.prototype, "lhj.ActionEffectMc");
})(lhj || (lhj = {}));
