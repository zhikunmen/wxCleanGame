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
    var MenuItem = (function (_super) {
        __extends(MenuItem, _super);
        function MenuItem(arr, labelArr, label, alwayDispatch) {
            if (alwayDispatch === void 0) { alwayDispatch = false; }
            var _this = _super.call(this) || this;
            _this._data = arr;
            _this.alwayDispatch = alwayDispatch;
            _this._lableArr = labelArr;
            _this._bitmap = new egret.Bitmap();
            _this._bitmap.texture = lhj.ResUtil.createTexture(_this._data[0]);
            _this.addChild(_this._bitmap);
            _this.touchEnabled = true;
            _this.gotoAndStop(1);
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
            if (label) {
                _this._labelTxt = lhj.ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, label, 34, 3, 20, 231);
                _this.addChild(_this._labelTxt);
            }
            return _this;
        }
        MenuItem.prototype.destory = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            lhj.ResUtil.removeAllChildren(this);
            lhj.ResUtil.removeFromParent(this);
            this._bitmap = null;
            this._label = null;
            this._lableArr = null;
            this._data = null;
            this._labelTxt = null;
        };
        Object.defineProperty(MenuItem.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (index) {
                this._id = index;
            },
            enumerable: true,
            configurable: true
        });
        MenuItem.prototype.onClick = function (evt) {
            this.dispatchEventWith(MenuItem.CLICK);
            if (this._frame == 1 || this.alwayDispatch) {
                this.gotoAndStop(2);
                this.dispatchEventWith(MenuItem.CHOOSED);
            }
        };
        MenuItem.prototype.gotoAndStop = function (frame) {
            this._frame = frame;
            this._bitmap.texture = lhj.ResUtil.createTexture(this._data[frame - 1]);
            if (this._lableArr) {
                if (!this._label) {
                    this._label = new egret.Bitmap();
                    this._label.y = 19;
                    this.addChild(this._label);
                }
                this._label.texture = lhj.ResUtil.createTexture(this._lableArr[frame - 1]);
                this._label.x = Math.round((243 - this._label.width) / 2);
            }
        };
        MenuItem.CHOOSED = "CHOOSED";
        MenuItem.CLICK = "CLICK";
        return MenuItem;
    }(egret.DisplayObjectContainer));
    lhj.MenuItem = MenuItem;
    __reflect(MenuItem.prototype, "lhj.MenuItem");
})(lhj || (lhj = {}));
var HBPoker;
(function (HBPoker) {
    /**
* 滑动按钮类
* by dily
* (c) copyright 2014 - 2035
* All Rights Reserved.
* 可以有图片，文字，动画
*/
    var ToggleSwitch = (function (_super) {
        __extends(ToggleSwitch, _super);
        /**
        * switchOffName       图片
        * switchOnName        图片
        * switchBarName        图片
        * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
        * 注意：如果有动画的话，只有动画结束才会触发click事件
        */
        function ToggleSwitch(context, switchOffName, switchOnName, switchBarName, backFun, assetsName) {
            if (switchOffName === void 0) { switchOffName = ""; }
            if (switchOnName === void 0) { switchOnName = ""; }
            if (switchBarName === void 0) { switchBarName = ""; }
            if (backFun === void 0) { backFun = null; }
            if (assetsName === void 0) { assetsName = "assets"; }
            var _this = _super.call(this) || this;
            _this.assets = RES.getRes("assets"); //名称不一样的话需要修改 
            _this.isPlayCartoon = false;
            _this.isSelected = false;
            _this.switchOffName = "";
            _this.switchOnName = "";
            _this.switchBarName = "";
            _this.param = { context: null, data: null }; //回调参数
            _this.param.context = context;
            _this.switchOffName = switchOffName;
            _this.switchOnName = switchOnName;
            _this.switchBarName = switchBarName;
            _this.init(backFun, assetsName);
            return _this;
        }
        ToggleSwitch.prototype.init = function (backFun, assetsName) {
            if (backFun === void 0) { backFun = null; }
            if (assetsName === void 0) { assetsName = "assets"; }
            this.backFun = backFun;
            this.switchOffImg = new egret.Bitmap();
            this.switchOnImg = new egret.Bitmap();
            this.switchBarImg = new egret.Bitmap();
            if (assetsName != "assets") {
                this.assets = RES.getRes(assetsName);
            }
            this.switchOffImg.texture = this.assets.getTexture(this.switchOffName);
            this.addChild(this.switchOffImg);
            this.switchOnImg.texture = this.assets.getTexture(this.switchOnName);
            this.addChild(this.switchOnImg);
            this.switchOnImg.alpha = 0;
            this.switchBarImg.texture = this.assets.getTexture(this.switchBarName);
            this.switchBarImg.x = 5;
            this.switchBarImg.y = this.switchOffImg.height / 2 - this.switchBarImg.height / 2 + 4;
            this.addChild(this.switchBarImg);
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
        };
        ToggleSwitch.prototype.onbuttonTouchTap = function (e) {
            if (this.isPlayCartoon) {
                return;
            }
            this.isPlayCartoon = true;
            var onComplete = function () {
                this.isPlayCartoon = false;
                this.isSelected = !this.isSelected;
                if (this.backFun != null) {
                    this.backFun.apply(this.param.context, [this.param.data]);
                }
            };
            if (this.isSelected) {
                egret.Tween.get(this.switchBarImg).to({ x: 5 }, 400).call(onComplete, this);
                egret.Tween.get(this.switchOffImg).to({ alpha: 1 }, 400);
                egret.Tween.get(this.switchOnImg).to({ alpha: 0 }, 400);
            }
            else {
                egret.Tween.get(this.switchBarImg).to({ x: this.switchOffImg.width - this.switchBarImg.width - 6 }, 400).call(onComplete, this);
                egret.Tween.get(this.switchOffImg).to({ alpha: 0 }, 400);
                egret.Tween.get(this.switchOnImg).to({ alpha: 1 }, 400);
            }
        };
        //设置绑定数据
        ToggleSwitch.prototype.setBindData = function (data) {
            this.param.data = data;
        };
        //获取绑定数据
        ToggleSwitch.prototype.getBindData = function () {
            return this.param.data;
        };
        //是否打开
        ToggleSwitch.prototype.getSelected = function () {
            return this.isSelected;
        };
        return ToggleSwitch;
    }(egret.DisplayObjectContainer));
    HBPoker.ToggleSwitch = ToggleSwitch;
    __reflect(ToggleSwitch.prototype, "HBPoker.ToggleSwitch");
})(HBPoker || (HBPoker = {}));
