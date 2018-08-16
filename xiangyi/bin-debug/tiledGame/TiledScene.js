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
var TiledScene = (function (_super) {
    __extends(TiledScene, _super);
    function TiledScene() {
        var _this = _super.call(this) || this;
        _this.map = null;
        _this.prePoint = { x: 0, y: 0 };
        _this.initBg();
        _this.onLoadMap();
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegan, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMoved, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    TiledScene.prototype.addToStage = function () {
    };
    TiledScene.prototype.initBg = function () {
        var shap = new egret.Shape();
        shap.graphics.beginFill(0xC1CBFF);
        shap.graphics.drawRect(0, 0, Display.winSize.width, Display.winSize.height);
        shap.graphics.endFill();
        this.addChild(shap);
    };
    TiledScene.prototype.onLoadMap = function () {
        var url = "resource/tiled/map.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            this.map = new tiled.TMXTilemap(2000, 2000, data, url);
            this.map.render();
            this.map.addEventListener(tiled.TMXImageLoadEvent.ALL_IMAGE_COMPLETE, this.onLoaded, this);
            this.addChildAt(this.map, 1);
        }, this);
        urlLoader.load(new egret.URLRequest(url));
    };
    TiledScene.prototype.onLoaded = function () {
        if (this.map) {
            this.map.visible = true;
            var layers = this.map.getLayers();
            for (var k in layers) {
                var item = layers[k];
                var type = item.__class__;
                //TMXLayer, TMXObjectGroup, TMXLayer
                if (type == "tiled.TMXLayer") {
                    var tmxLayer = item;
                    var tile = tmxLayer.getTile(0, 0);
                    var tileId = tmxLayer.getTileId(0, 0);
                }
                else if (type == "tiled.TMXObjectGroup") {
                    var tmxObjGroup = item;
                    var count = tmxObjGroup.getObjectCount();
                    for (var i = 0; i < count; i++) {
                        //tmxObjGroup.getObjectById(6);
                        var obj = tmxObjGroup.getObjectByIndex(i);
                        if (obj.isEllipse) {
                            //egret.log(obj.id.toString() + "椭圆");
                            var p = new EllipseShapData();
                            p.pos = new egret.Point(obj.x, obj.y);
                            p.ra = obj.width;
                            p.rb = obj.height;
                        }
                        else if (obj.isImage) {
                            //egret.log(obj.id.toString() + "图片");
                        }
                        else if (obj.isPolygon) {
                            //egret.log(obj.id.toString() + "多边形");
                            //var p = new PolygonShapData();
                            //p.pos = new egret.Point(obj.x,obj.y);
                            //p.pointArray = obj.
                        }
                        else if (obj.isPolyLine) {
                            //egret.log(obj.id.toString() + "折线");
                        }
                        else {
                            //egret.log(obj.id.toString() + "矩形");
                        }
                    }
                }
            }
            var objects = this.map.getObjects();
            for (var k in objects) {
                var a = objects[k];
                var tmp = 0;
            }
        }
    };
    TiledScene.prototype.onTouchBegan = function (touch) {
        this.prePoint.x = touch.stageX;
        this.prePoint.y = touch.stageY;
    };
    TiledScene.prototype.onTouchEnd = function (touch) {
    };
    TiledScene.prototype.onTouchMoved = function (touch) {
        if (this.map) {
            var x = touch.stageX;
            var y = touch.stageY;
            var diffx = x - this.prePoint.x;
            var diffy = y - this.prePoint.y;
            var mapx = this.map.x;
            var mapy = this.map.y;
            this.map.x = mapx + diffx;
            this.map.y = mapy + diffy;
            this.prePoint.x = x;
            this.prePoint.y = y;
        }
    };
    return TiledScene;
}(egret.DisplayObjectContainer));
__reflect(TiledScene.prototype, "TiledScene");
//# sourceMappingURL=TiledScene.js.map