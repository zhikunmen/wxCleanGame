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
var tiled;
(function (tiled) {
    //可能存在普通对象，也可能存在动画
    var TMXObject = (function (_super) {
        __extends(TMXObject, _super);
        /**
         * 创建一个Tile对象实例
         * @param data 数据
         * @param orientation 渲染方向
         * @param tilesets TMXTilesetGroup实例
         * @param z 对象所在的层深
         * @param color 对象所使用的颜色
         * @version Egret 3.0.3
         */
        function TMXObject(data, orientation, tilesets, z, color) {
            var _this = _super.call(this) || this;
            _this._points = undefined;
            _this._name = data.attributes.name;
            _this.x = +data.attributes.x;
            _this.y = +data.attributes.y;
            _this._z = +z;
            _this.width = +data.attributes.width || 0;
            _this.height = +data.attributes.height || 0;
            _this._gid = +data.attributes.gid || null;
            _this._type = data.attributes.type;
            _this.rotation = +data.attributes.rotation || 0;
            _this._id = +data.attributes.id || undefined;
            _this._orientation = orientation;
            _this._shapes = undefined;
            _this._color = color;
            _this._isEllipse = false;
            _this._isPolygon = false;
            _this._isPolyLine = false;
            _this.visible = (typeof data.attributes.visible !== "undefined") ? Boolean(+data.attributes.visible) : true;
            // 检测当前对象是否已经分配了gid(只有图块对象层才会分配gid)
            if (typeof _this._gid === "number") {
                _this._isImage = true;
                _this.setTile(tilesets);
            }
            else {
                _this._points = [];
                var self = _this;
                var children = data.children;
                if (children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        switch (child.localName) {
                            case tiled.TMXConstants.ELLIPSE:
                                _this._isEllipse = true;
                                _this._isImage = false;
                                _this._ellipse = _this.parseEllipse(child);
                                break;
                            case tiled.TMXConstants.POLYGON:
                                _this._isPolygon = true;
                                _this._isImage = false;
                                _this._points = _this.parsePolygonOrPolyline(child.attributes.points);
                                break;
                            case tiled.TMXConstants.POLYLINE:
                                _this._isPolyLine = true;
                                _this._isImage = false;
                                _this._points = _this.parsePolygonOrPolyline(child.attributes.points);
                                break;
                            case tiled.TMXConstants.PROPERTIES:
                                if (tilesets.tilemap)
                                    _this._properties = tilesets.tilemap.parseProperties(child);
                                break;
                        }
                    }
                }
            }
            //parseShapes
            if (!_this._shapes)
                _this._shapes = _this.parseTMXShapes();
            for (var i = 0; i < _this._shapes.length; i++) {
                var _shape = _this._shapes[i];
                _this.addChild(_shape);
            }
            return _this;
        }
        Object.defineProperty(TMXObject.prototype, "id", {
            /**
             * 对象自增长id
             * @version Egret 3.0.3
             */
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "gid", {
            /**
             * tileset中对应的id
             * @version Egret 3.0.3
             */
            get: function () {
                return this._gid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "name", {
            /**
             * 对象名称
             * @version Egret 3.0.3
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "type", {
            /**
             * 对象类型
             * @version Egret 3.0.3
             */
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "z", {
            /**
             * 对象所在层深
             * @version Egret 3.0.3
             */
            get: function () {
                return this._z;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "isEllipse", {
            /**
             * 当前对象是否是椭圆
             * @version Egret 3.0.3
             */
            get: function () {
                return this._isEllipse;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "isPolygon", {
            /**
             * 当前对象是否为多边形
             * @version Egret 3.0.3
             */
            get: function () {
                return this._isPolygon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "isPolyLine", {
            /**
             * 当前对象是否为折线
             * @version Egret 3.0.3
             */
            get: function () {
                return this._isPolyLine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TMXObject.prototype, "isImage", {
            /**
             * 当前对象是否为图像
             * @version Egret 3.0.3
             */
            get: function () {
                return this._isImage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 解析多边形或者折线数据
         * @param $points
         * @version Egret 3.0.3
         */
        TMXObject.prototype.parsePolygonOrPolyline = function ($points) {
            var datas = [];
            var points = $points.split(" ");
            if (points) {
                for (var i = 0; i < points.length; i++) {
                    var pdata = points[i].split(",");
                    datas[i] = [+pdata[0], +pdata[1]];
                }
            }
            return datas;
        };
        /**
         * 解析椭圆数据
         * @param $data
         * @version Egret 3.0.3
         */
        TMXObject.prototype.parseEllipse = function ($data) {
            var _width = +$data.attributes.width || 32;
            var _height = +$data.attributes.height || 32;
            return [_width, _height];
        };
        /**
         * 解析多种对象（包括：椭圆，多边形，折线等）
         * @version Egret 3.0.3
         */
        TMXObject.prototype.parseTMXShapes = function () {
            var shapes = [];
            if (this._isEllipse) {
                var _ellipse = new tiled.Ellipse(0, 0, this.width, this.height);
                _ellipse.draw(this._color);
                shapes.push(_ellipse);
            }
            else if (this._isPolygon) {
                var _polygon = new tiled.Polygon(0, 0, this._points);
                _polygon.draw(this._color);
                shapes.push(_polygon);
            }
            else if (this._isPolyLine) {
                var _polyline = new tiled.PolyLine(0, 0, this._points);
                _polyline.draw(this._color);
                shapes.push(_polyline);
            }
            else {
                if (!this._gid) {
                    var _polygon = new tiled.Polygon(0, 0, [[0, 0], [this.width, 0], [this.width, this.height], [0, this.height]]);
                    _polygon.draw(this._color);
                    shapes.push(_polygon);
                }
            }
            if (this._orientation === "isometric") {
                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i];
                    shape.rotation = 45;
                    shape.scaleX = Math.SQRT1_2;
                    shape.scaleY = Math.SQRT1_2;
                }
            }
            return shapes;
        };
        /**
         * 设置Tile
         * @param tilesets TMXTileset实例
         * @version Egret 3.0.3
         */
        TMXObject.prototype.setTile = function (tilesets) {
            var tileset = tilesets.getTilesetByGid(this._gid);
            if (tileset) {
                var image = tileset.image;
                if (image) {
                    this._tile = new tiled.TMXTile(0, 0, this.gid, tileset.tilemap, tileset);
                    tileset.drawTile(this, tileset.tileoffset.x, tileset.tileoffset.y - tileset.tileheight, this._tile);
                }
            }
        };
        return TMXObject;
    }(egret.Sprite));
    tiled.TMXObject = TMXObject;
    __reflect(TMXObject.prototype, "tiled.TMXObject");
})(tiled || (tiled = {}));
