module lhj {
    export class PokerPanel extends eui.Component {
        private backPoker: egret.Bitmap;
        private poker: eui.Image;
        private bg: eui.Image;
        private showTime: egret.Timer;
        private shineTime: egret.Timer;
        private bg_layer: egret.Sprite;
        private frame: eui.Rect;
        private second: number;
        private bet: eui.Image;
        private mul: eui.Image;
        private light_1: eui.Image;
        private light_2:eui.Image;
        public constructor() {
            super();
            this.skinName = "FishTankSkin";
            this.init();
        }
        private init(): void {
            this.bg_layer = new egret.Sprite();
            this.bg_layer.graphics.beginFill(0, 0.7);
            this.bg_layer.graphics.drawRect(-(uniLib.Global.screenWidth-1280)/2, 0, uniLib.Global.screenWidth, 720);
            this.bg_layer.graphics.endFill();
            this.addChildAt(this.bg_layer,0);
            this.bg_layer.alpha = 0;
            // this.swapChildren(this.container, this.bg_layer);
        }
        private enterFrameHandler(): void {
          
        }
        
        
        private showEffect(): void{
            this.second++;
            switch(this.second){
                case 1:
                this.showPoker();
                break;
                case 4:
                this.removePoker();
                this.showPrize();
                break;
                case 7:
                this.destory();
                break;
            }
        }
        private showShine():void{
            if(this.bg.source == "dt_prize_bg_1"){
                this.bg.source = "dt_prize_bg_2";
            }else{
                this.bg.source = "dt_prize_bg_1";
            }
        }
        private showPoker(): void {
            this.frame.visible = true;
            this.poker.visible = true;
            this.bg.visible = true;
            this.backPoker.mask = this.frame;
            // egret.Tween.get(this.frame).to({x:-150,y:92},1500);
            egret.Tween.get(this.frame).to({scaleY:0},1500);
            //x240y491
        }
        private removePoker(): void{
            if(this.showTime){
                this.showTime.stop();
                this.showTime.removeEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
                this.showTime = null;
            }
            if(this.shineTime){
                this.shineTime.stop();
                this.shineTime.removeEventListener(egret.TimerEvent.TIMER, this.showShine, this);
                this.shineTime = null;
            }
            if(this.backPoker){
                uniLib.DisplayUtils.removeFromParent(this.backPoker);
            }
            this.bg.visible = false;
            this.poker.visible = false;
        }
        private showPrize(): void{
            
        }
        private getPoint(num:number):egret.Point{
            let point ;
            switch(num){
                case 1:
                    point = new egret.Point(300,310);
                break;
                case 2:
                    point = new egret.Point(520,245);
                break;
                case 3:
                    point = new egret.Point(760,310);
                break;
                case 4:
                    point = new egret.Point(975,245);
                break;
                case 5:
                    point = new egret.Point(640,425);
                break;
            }
            return point;
        }
        public destory(): void {
            if(this.showTime){
                this.showTime.stop();
                this.showTime.removeEventListener(egret.TimerEvent.TIMER, this.showEffect, this);
                this.showTime = null;
            }
            if(this.shineTime){
                this.shineTime.stop();
                this.shineTime.removeEventListener(egret.TimerEvent.TIMER, this.showShine, this);
                this.shineTime = null;
            }
            egret.Tween.removeTweens(this);
            uniLib.DisplayUtils.removeAllChildren(this);
            uniLib.DisplayUtils.removeFromParent(this);
        }
    }
}