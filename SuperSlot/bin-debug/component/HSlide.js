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
    var HSlide = (function (_super) {
        __extends(HSlide, _super);
        function HSlide(trackName, thumbName, thumbName_press, width, trackHighlightName, scale9, scale92, chips) {
            var _this = _super.call(this) || this;
            _this._minValue = 1;
            _this._maxValue = 10;
            _this._value = 1;
            _this.gap = 1;
            _this.lastX = 0;
            _this.touchX = 0;
            _this.width = width;
            _this.thumbName = thumbName;
            _this.thumbName_press = thumbName_press;
            _this.track = new egret.Bitmap(RES.getRes(trackName));
            _this.thumb = new egret.Bitmap(RES.getRes(thumbName));
            // new GameButton([thumbName, thumbName_press]);
            _this.trackHighlight = new egret.Bitmap(RES.getRes(trackHighlightName));
            ;
            if (scale9) {
                _this.trackHighlight.scale9Grid = scale9;
            }
            if (scale92) {
                _this.track.scale9Grid = scale92;
            }
            _this.addChild(_this.track);
            if (_this.trackHighlight) {
                _this.addChild(_this.trackHighlight);
            }
            _this.addChild(_this.thumb);
            _this.track.width = _this.width;
            _this.track.y = (_this.height - _this.track.height) / 2;
            if (_this.trackHighlight) {
                _this.trackHighlight.touchEnabled = false;
                _this.trackHighlight.y = (_this.height - _this.trackHighlight.height) / 2;
            }
            _this.thumb.y = (_this.height - _this.thumb.height) / 2;
            _this.thumb.x = -20;
            egret.setTimeout(function () {
                if (_this.thumb)
                    _this.thumb.x = -20;
            }, _this, 100);
            _this.thumbMaxX = _this.width - _this.thumb.width;
            _this.thumb.touchEnabled = true;
            _this.track.touchEnabled = true;
            superslotBC.addEvent(_this, _this.thumb, egret.TouchEvent.TOUCH_BEGIN, _this.onThumbTouch);
            superslotBC.addEvent(_this, _this.thumb, egret.TouchEvent.TOUCH_END, _this.onThumbTouch);
            superslotBC.addEvent(_this, _this.track, egret.TouchEvent.TOUCH_TAP, _this.onTrackTouch);
            if (chips < superslot.RoomInfo.getInstance().minBanker) {
                _this.thumb.alpha = 0.8;
                _this.thumb.touchEnabled = false;
                _this.trackHighlight.touchEnabled = false;
                _this.track.touchEnabled = false;
            }
            return _this;
        }
        HSlide.prototype.onTrackTouch = function (event) {
            this.updateThumbPos(event.localX - this.thumb.width / 2);
        };
        HSlide.prototype.onThumbTouch = function (event) {
            superslot.RoomInfo.getInstance().playhbButtonSound();
            this.thumb.texture = superslot.ResUtil.createTexture(this.thumbName);
            this.lastX = event.stageX;
            this.touchX = this.thumb.x;
            superslotBC.addEvent(this, this.stage, egret.TouchEvent.TOUCH_MOVE, this.onStageMove);
            superslotBC.addEvent(this, this.stage, egret.TouchEvent.TOUCH_END, this.onStageEnd);
        };
        HSlide.prototype.onThumbTouchEnd = function (event) {
            this.thumb.texture = superslot.ResUtil.createTexture(this.thumbName_press);
        };
        HSlide.prototype.onStageMove = function (event) {
            var gap = event.stageX - this.lastX;
            this.updateThumbPos(this.touchX + gap);
        };
        HSlide.prototype.onStageEnd = function (event) {
            if (this.stage) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
            }
        };
        Object.defineProperty(HSlide.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (num) {
                if (this.gap >= 1)
                    num = Math.floor(num);
                if (num > this._maxValue) {
                    num = this._maxValue;
                }
                else if (num < this._minValue) {
                    num = this._minValue;
                }
                if (this._value != num) {
                    this._value = num;
                    this.updatePos();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HSlide.prototype, "maxValue", {
            get: function () {
                return this._maxValue;
            },
            set: function (num) {
                if (this._maxValue != num) {
                    this._maxValue = num;
                    this.value = this._value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HSlide.prototype, "minValue", {
            get: function () {
                return this._minValue;
            },
            set: function (num) {
                if (!num) {
                    num = 0;
                }
                if (this._minValue != num) {
                    this._minValue = num;
                    this.value = this._value;
                }
            },
            enumerable: true,
            configurable: true
        });
        HSlide.prototype.updateThumbPos = function (num) {
            this.thumb.x = num;
            if (this.thumb.x < 0) {
                this.thumb.x = -20;
            }
            else if (this.thumb.x > this.thumbMaxX) {
                this.thumb.x = this.thumbMaxX;
            }
            this.updateValue();
        };
        HSlide.prototype.updateValue = function () {
            var perent = this.thumb.x / this.thumbMaxX;
            var value = this._minValue + perent * (this._maxValue - this._minValue);
            value = Math.floor(value / this.gap) * this.gap;
            if (this._value != value) {
                this._value = value;
                this.dispatchEventWith(egret.Event.CHANGE, false, this._value);
            }
            this.updateTrackHighlight();
        };
        HSlide.prototype.updatePos = function () {
            var perent = (this._value - this._minValue) / (this._maxValue - this._minValue);
            this.thumb.x = this.thumbMaxX * perent;
            this.updateTrackHighlight();
        };
        HSlide.prototype.updateTrackHighlight = function () {
            if (this.trackHighlight) {
                this.trackHighlight.width = this.thumb.x + this.thumb.width / 2;
            }
        };
        HSlide.prototype.dispose = function () {
            if (this.stage) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
            }
            if (this.track) {
                superslot.ResUtil.removeFromParent(this.track);
            }
            this.track = null;
            if (this.thumb) {
                superslot.ResUtil.removeFromParent(this.thumb);
                this.thumb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onThumbTouch, this);
                this.thumb.removeEventListener(egret.TouchEvent.TOUCH_END, this.onThumbTouch, this);
            }
            this.thumb = null;
            if (this.trackHighlight) {
                superslot.ResUtil.removeFromParent(this.trackHighlight);
            }
            this.trackHighlight = null;
            superslot.ResUtil.removeAllChildren(this);
        };
        return HSlide;
    }(egret.Sprite));
    superslot.HSlide = HSlide;
    __reflect(HSlide.prototype, "superslot.HSlide");
})(superslot || (superslot = {}));
