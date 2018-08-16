	module superslot{
        export class MenuItem extends egret.DisplayObjectContainer {
		private _data: Array<string>;
		private _bitmap: egret.Bitmap;
		private _frame: number;
		private _id: number;
		private _lableArr: Array<string>;
		private _label: egret.Bitmap;
		private _labelTxt:egret.TextField;
		public static CHOOSED: string = "CHOOSED";
        public static CLICK:string="CLICK"
		private alwayDispatch:boolean;
		public constructor(arr: Array<string>, labelArr?: Array<string>,label?:string,alwayDispatch:boolean=false) {
			super();
			this._data = arr;
			this.alwayDispatch=alwayDispatch;
			this._lableArr = labelArr;
			this._bitmap = new egret.Bitmap();
			this._bitmap.texture = ResUtil.createTexture(this._data[0]);
			this.addChild(this._bitmap);
			this.touchEnabled = true;
			this.gotoAndStop(1);
            superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_TAP, this.onClick);
			if(label){
				this._labelTxt=ResUtil.createTextFeild(0xFFFFFF, egret.HorizontalAlign.CENTER, label, 34, 3, 20, 231);
				this.addChild(this._labelTxt);
			}
			
		}
		public destory(): void {
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			ResUtil.removeAllChildren(this);
			ResUtil.removeFromParent(this);
			this._bitmap = null;
			this._label = null;
			this._lableArr = null;
			this._data = null;
			this._labelTxt=null;
		}
		public get id(): number {
			return this._id;
		}
		public set id(index: number) {
			this._id = index;
		}
		private onClick(evt: egret.TouchEvent): void {
            this.dispatchEventWith(MenuItem.CLICK)
			if (this._frame == 1||this.alwayDispatch) {
				this.gotoAndStop(2);
				this.dispatchEventWith(MenuItem.CHOOSED);
			}
		}
		public gotoAndStop(frame: number): void {
			this._frame = frame;
			this._bitmap.texture =ResUtil.createTexture(this._data[frame - 1]);
			if (this._lableArr) {
				if (!this._label) {
					this._label = new egret.Bitmap();
					this._label.y = 19;
					this.addChild(this._label);
				}
				this._label.texture =ResUtil.createTexture(this._lableArr[frame - 1]);
				this._label.x = Math.round((243 - this._label.width) / 2);
			}
		}
	}
    }


    module superslot{
          /**
    * 滑动按钮类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 可以有图片，文字，动画
    */

export class ToggleSwitch extends egret.DisplayObjectContainer{

    private assets:egret.SpriteSheet = RES.getRes("assets");//名称不一样的话需要修改 
    private backFun:Function;
    private isPlayCartoon:Boolean = false;
    private isSelected:Boolean = false;
    private switchOffName:string = "";
    private switchOnName:string = "";
    private switchBarName:string = "";

    private switchOffImg:egret.Bitmap;
    private switchOnImg:egret.Bitmap;
    private switchBarImg:egret.Bitmap;
    private param = {context:null,data:null};//回调参数
    /**
    * switchOffName       图片
    * switchOnName        图片
    * switchBarName        图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    public constructor(context:any,switchOffName:string = "",switchOnName:string = "",switchBarName:string = "",backFun:Function = null,assetsName:string = "assets"){
        super();
        this.param.context = context;
        this.switchOffName = switchOffName;
        this.switchOnName = switchOnName;
        this.switchBarName = switchBarName;
        this.init(backFun,assetsName);
    }

    private init(backFun:Function = null,assetsName:string = "assets"):void {
        this.backFun = backFun;
        this.switchOffImg = new egret.Bitmap();
        this.switchOnImg = new egret.Bitmap();
        this.switchBarImg = new egret.Bitmap();
        if(assetsName != "assets"){
            this.assets = RES.getRes(assetsName);
        }
        this.switchOffImg.texture = this.assets.getTexture(this.switchOffName);
        this.addChild(this.switchOffImg);   
        this.switchOnImg.texture = this.assets.getTexture(this.switchOnName);
        this.addChild(this.switchOnImg);   
        this.switchOnImg.alpha = 0;

        this.switchBarImg.texture = this.assets.getTexture(this.switchBarName);
        this.switchBarImg.x = 5;
        this.switchBarImg.y = this.switchOffImg.height/2 - this.switchBarImg.height/2 + 4;
        this.addChild(this.switchBarImg);   

        this.touchEnabled = true;
        superslotBC.addEvent(this,this,egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap);
    }

    private onbuttonTouchTap(e):void {
        if(this.isPlayCartoon){
            return;
        }
        this.isPlayCartoon = true;

        var onComplete:Function = function(){//改变状态
            this.isPlayCartoon = false;
            this.isSelected = !this.isSelected;
            if(this.backFun != null){
                this.backFun.apply(this.param.context, [this.param.data]);
            } 
        }; 
        if(this.isSelected){
            egret.Tween.get(this.switchBarImg).to({x:5},400).call(onComplete,this); 
            egret.Tween.get(this.switchOffImg).to({alpha:1},400); 
            egret.Tween.get(this.switchOnImg).to({alpha:0},400); 
        }else{
            egret.Tween.get(this.switchBarImg).to({x:this.switchOffImg.width - this.switchBarImg.width - 6},400).call(onComplete,this); 
            egret.Tween.get(this.switchOffImg).to({alpha:0},400); 
            egret.Tween.get(this.switchOnImg).to({alpha:1},400); 
        }
    }
    
    //设置绑定数据
    public setBindData(data):void{
        this.param.data = data;
    }

    //获取绑定数据
    public getBindData():any{
        return this.param.data;
    }
    
    //是否打开
    public getSelected():Boolean{
        return this.isSelected;
    }

}

    }