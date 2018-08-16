module lhj {
    export class GuidePanel extends eui.Component {
        private guide_1: eui.Group;
        private guide_2: eui.Group;
        private guide_3: eui.Group;
        private guide_4: eui.Group;
        private guide_5: eui.Group;
        private guide_6: eui.Group;
        private guide_7: eui.Group;
        private index: number = 0;
        private guideArr: Array<eui.Group>;
        public constructor() {
            super();
            this.skinName = "dt_GuideSkin";
            this.init();
        }
        private init(): void {
            this.touchEnabled = true;
            this.guideArr = [this.guide_1, this.guide_2, this.guide_3, this.guide_4, this.guide_5, this.guide_6, this.guide_7];
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showGuide, this);
            for(var i=0;i<this.guideArr.length;i++){
                this.guideArr[i].width =  1280*GameInfo.scaleY;
            }
            let img1 = new egret.Sprite();
            img1.graphics.beginFill(0, 0.7);
            img1.graphics.drawRect(-(uniLib.Global.screenWidth - 1280*GameInfo.scaleY)/2, 0, (uniLib.Global.screenWidth - 1280*GameInfo.scaleY)/2, 720);
            img1.graphics.endFill();
            this.addChild(img1);
            let img2 = new egret.Sprite();
            img2.graphics.beginFill(0, 0.7);
            img2.graphics.drawRect(this.guide_1.width, 0, (uniLib.Global.screenWidth - 1280*GameInfo.scaleY)/2, 720);
            img2.graphics.endFill();
            this.addChild(img2);
        }
        private showGuide(): void {
            if (this.index == this.guideArr.length - 1) {
                this.destroy();
            } else {
                this.guideArr[this.index].visible = false;
                this.index++;
                this.guideArr[this.index].visible = true;
            }
        }
        public destroy(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showGuide, this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        }
    }
}