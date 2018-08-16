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
    var LogoItem = (function (_super) {
        __extends(LogoItem, _super);
        function LogoItem() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            //房间每列转轮图片排列顺序
            _this.imageArr = [];
            _this.skinName = "LogoItemSkin";
            _this.init();
            return _this;
        }
        LogoItem.prototype.init = function () {
            this.imageArr = [];
        };
        //进房初始化
        LogoItem.prototype.initImage = function (index, numArr) {
            this.index = index;
            this.imageArr = numArr;
            this.setImage();
        };
        //转轮开始转动
        LogoItem.prototype.changeImage = function () {
            this.index += 8;
            this.setImage();
        };
        //转动停止设置图片
        LogoItem.prototype.lastImage = function (index) {
            this.index = index;
            this.setImage();
        };
        //中奖图片播放动画效果
        LogoItem.prototype.showEffect = function () {
            var num = this.imageArr[this.index];
            if (num < 6 || num > 11) {
                this.movie = lhj.ResUtil.createDragon("lhj_effect_logo_" + num, "newAnimation", uniLib.DragonType.ARMATURE, 111, 111, this, 1, 1);
            }
            else {
                this.movie = lhj.ResUtil.createDragon("lhj_effect_logo_6", "effect" + num, uniLib.DragonType.ARMATURE, 111, 111, this, 1, 1);
                //     // this.movie = ResUtil.createDragon("lhj_effect_logo_" + 8, "newAnimation", uniLib.DragonType.ARMATURE, 111, 111, this, 1, 1)
                //     this.effect = ResUtil.createDragonBones("lhj_effect_logo_8_ske_json",
                //         "lhj_effect_logo_8_tex_json", "lhj_effect_logo_8_tex_png", "Armature", 111, 111, 1, 1);
                //     let picture = "lhj_effect_logo_" + this.imageArr[this.index] + "_png";
                //     let slot: dragonBones.Slot = this.effect.getSlot("wupin");
                //     if (egret.Capabilities.engineVersion > "5.0") {
                //         slot.display.texture = RES.getRes(picture);
                //     } else {
                //         slot.getDisplay().texture = RES.getRes(picture);
                //     }
                //     this.addChild(this.effect.display);
            }
            this.logo.visible = false;
        };
        //重新开始游戏，删除所有动画
        LogoItem.prototype.removeEffect = function () {
            if (this.movie) {
                uniLib.DisplayUtils.removeFromParent(this.movie);
            }
            if (this.effect) {
                uniLib.DisplayUtils.removeFromParent(this.effect.display);
            }
            this.logo.visible = true;
        };
        //图片切换
        LogoItem.prototype.setImage = function () {
            if (this.index < 0) {
                this.index = this.imageArr.length + this.index;
            }
            if (this.index >= this.imageArr.length) {
                this.index = this.index % this.imageArr.length;
            }
            this.logo.source = "lhj_logo_" + this.imageArr[this.index];
        };
        LogoItem.prototype.destory = function () {
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        };
        return LogoItem;
    }(eui.Component));
    lhj.LogoItem = LogoItem;
    __reflect(LogoItem.prototype, "lhj.LogoItem");
})(lhj || (lhj = {}));
