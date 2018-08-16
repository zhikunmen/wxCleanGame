module lhj {
    export class LogoItem extends eui.Component {
        private logo: eui.Image;
        private index: number = 0;
        private effect: dragonBones.Armature;
        private movie: dragonBones.EgretArmatureDisplay;
        private startX: number;
        private startY: number;
        //房间每列转轮图片排列顺序
        public imageArr: Array<number> = [];
        public constructor() {
            super();
            this.skinName = "LogoItemSkin";
            this.init();
        }
        private init(): void {
            this.imageArr = [];
        }
        //进房初始化
        public initImage(index: number, numArr: number[]): void {
            this.index = index;
            this.imageArr = numArr;
            this.setImage();
        }
        //转轮开始转动
        public changeImage(): void {
            this.index += 8;
            this.setImage();
        }
        //转动停止设置图片
        public lastImage(index: number): void {
            this.index = index;
            this.setImage();
        }
        //中奖图片播放动画效果
        public showEffect(): void {
            let num = this.imageArr[this.index];
            if (num < 6 || num > 11) {
                this.movie = ResUtil.createDragon("lhj_effect_logo_" + num, "newAnimation", uniLib.DragonType.ARMATURE, 111, 111, this, 1, 1)
            } else {
                this.movie = ResUtil.createDragon("lhj_effect_logo_6", "effect" + num, uniLib.DragonType.ARMATURE, 111, 111, this, 1, 1)
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
        }
        //重新开始游戏，删除所有动画
        public removeEffect(): void {
            if (this.movie) {
                uniLib.DisplayUtils.removeFromParent(this.movie);
            }
            if (this.effect) {
                uniLib.DisplayUtils.removeFromParent(this.effect.display);
            }
            this.logo.visible = true;
        }
        //图片切换
        private setImage(): void {
            if (this.index < 0) {
                this.index = this.imageArr.length + this.index;
            }
            if (this.index >= this.imageArr.length) {
                this.index = this.index % this.imageArr.length;
            }
            this.logo.source = "lhj_logo_" + this.imageArr[this.index];
        }
        public destory(): void {
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        }
    }
}