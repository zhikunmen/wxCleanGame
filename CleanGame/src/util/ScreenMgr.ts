class ScreenMgr {
	private static _instance: ScreenMgr;
	private _designWidth: number;
	private _designHeight: number;
	public static get instance(): ScreenMgr {
		if (!this._instance) {
			this._instance = new ScreenMgr();
		}
		return this._instance;
	}

	public get screenWidth(): number {
		return egret.MainContext.instance.stage.stageWidth;
	}

	public get screenHeight(): number {
		return egret.MainContext.instance.stage.stageHeight;
	}

	public set designWidth(width: number) {
		this._designWidth = width;
	}

	public set designHeight(height: number) {
		this._designHeight = height;
	}

	public get designWidth(): number {
		return this._designWidth;
	}

	public get designHeight(): number {
		return this._designHeight;
	}

}