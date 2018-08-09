var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Director = (function () {
    function Director() {
        this.stackLayer = [];
        //��Ϸ��,��ʵ����Main��
        this.gameLayer = null;
        // ��ʵӦ�ó�������һ��������,���ܽ�����ͨ��֤�ָ���ʱ��,�����������д򿪵�ui����,�ᵼ�¸ý��汻popScene��û�п��ǵ��ؿ�����������
        this.netLayer = null;
        // ������
        this.guidLayer = null;
    }
    Director.getInstance = function () {
        if (Director.instance == null) {
            Director.instance = new Director();
        }
        return Director.instance;
    };
    Director.prototype.initWithMain = function (m) {
        if (this.gameLayer == null) {
            this.gameLayer = m;
        }
        this.netLayer = new NetLayerUtil();
        Display.stage.addChildAt(this.netLayer, 9);
        this.guidLayer = new GuidLayerUtil();
        Display.stage.addChildAt(this.guidLayer, 10);
    };
    // ====================ǣ����Ϸ�߼��Ĳ�����====================================
    Director.prototype.repleaceScene = function (layer) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.removeChildren();
            this.gameLayer.addChild(layer);
        }
    };
    Director.prototype.pushScene = function (layer) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.addChild(layer);
            this.stackLayer.push(layer);
        }
    };
    Director.prototype.popScene = function () {
        if (this.gameLayer != null) {
            var len = this.stackLayer.length;
            if (len > 0) {
                var layer = this.stackLayer[len - 1];
                if (layer.parent == this.gameLayer) {
                    this.gameLayer.removeChild(layer);
                    Util.removeByElements(this.stackLayer, layer);
                }
            }
        }
    };
    ///////////////////////////������/////////////////////////////////////////////////
    Director.prototype.addGuidLayer = function () {
        this.guidLayer.addGuidLayer();
    };
    Director.prototype.getCurGuidLayer = function () {
        return this.guidLayer.curLayer;
    };
    Director.prototype.cleanGuidLayer = function () {
        this.guidLayer.cleanGuidLayer();
    };
    // ====================ǣ�������߼�������====================================
    // �����ȴ�
    Director.prototype.addNetWaitLayer = function () {
        this.netLayer.addWaitLayer();
    };
    //ǿ������
    Director.prototype.addNetOutLineLayer = function () {
        this.netLayer.addOutLineLayer();
    };
    //��������
    Director.prototype.addNetErrorLayer = function () {
        this.netLayer.addErrorLayer();
    };
    // �����������н���
    Director.prototype.cleanNetLayer = function () {
        this.netLayer.cleanLayer();
    };
    Director.instance = null;
    return Director;
}());
__reflect(Director.prototype, "Director");
