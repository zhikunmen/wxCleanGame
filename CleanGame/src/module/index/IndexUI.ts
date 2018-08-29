class IndexUI extends eui.Component {
    private addGoldBtn: eui.Image;
    private addHeartBtn: eui.Image;

    public constructor() {
        super();
        this.skinName = "IndexUISkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private addStage() {
        this.addGoldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //GH.showAd();

            new Tips().show("功能暂未开放");
        }, this);
        this.addHeartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //Director.getInstance().repleaceScene(new IndexScene());
            new Tips().show("功能暂未开放");
            wx.shareAppMessage({
                title: "menzhikun",
                imageUrl: GameData.sourceUrl+"cleanGame/com/circle.png",
                query: "门智坤",
                success: (e) => {
                    console.log("成功" + JSON.stringify(e));
                },
                fail: (e) => {
                    console.error("失败" + JSON.stringify(e));
                }
            })
        }, this);
    }
}