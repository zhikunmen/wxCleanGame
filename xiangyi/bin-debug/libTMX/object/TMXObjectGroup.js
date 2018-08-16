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
    var TMXObjectGroup = (function (_super) {
        __extends(TMXObjectGroup, _super);
        /**
         * 创建1个对象组
         * @param data 数据
         * @param orientation 渲染方向
         * @param tilesets TMXTilset实例
         * @param z 对象组所在的层
         * @version Egret 3.0.3
         */
        function TMXObjectGroup(data, orientation, tilesets, z) {
            var _this = _super.call(this) || this;
            _this._name = data.attributes.name;
            _this._opacity = (typeof data.attributes.opacity !== "undefined") ? +data.attributes.opacity : 1;
            _this._draworder = data.attributes.draworder;
            _this._color = data.attributes.color ? (tiled.TMXUtils.color16ToUnit(data.attributes.color)) : tiled.TMXConstants.DEFAULT_COLOR;
            _this._orientaion = orientation;
            _this._tilesets = tilesets;
            _this._z = z;
            _this.visible = (typeof data.attributes.visible !== "undefined") ? Boolean(+data.attributes.visible) : true;
            _this._objects = [];
            _this._objectHash = {};
            _this._childrens = data.children;
            return _this;
        }
        Object.defineProperty(TMXObjectGroup.prototype, "name", {
            /**
             * 对象组名称
             * @version Egret 3.0.3
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        TMXObjectGroup.prototype.draw = function () {
            if (this._childrens) {
                for (var i = 0; i < this._childrens.length; i++) {
                    var object = new tiled.TMXObject(this._childrens[i], this._orientaion, this._tilesets, this._z, this._color);
                    object.alpha = this._opacity;
                    this._objects[i] = object;
                    this.addChild(object);
                    this._objectHash[object.id] = object;
                }
            }
        };
        /**
         * 渲染
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.render = function () {
        };
        /**
         * 销毁
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.destory = function () {
            this._objects = null;
        };
        /**
         * 根据对象id获取TMXObject实例
         * @param id 对象id，在tmx数据中是由tiled工具生成的
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.getObjectById = function (id) {
            return this._objectHash[id];
        };
        /**
         * 根据对象id移除TMXObject实例
         * @param id 对象id，在tmx数据中是由tiled工具生成的
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.removeObjectById = function (id) {
            var object = this.getObjectById(id);
            if (object && object.parent)
                object.parent.removeChild(object);
        };
        /**
         * 根据对象id显示或者隐藏对象
         * @param id 对象id，在tmx数据中是由tiled工具生成的
         * @param visible 是否显示
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.showHideObjectById = function (id, visible) {
            var object = this.getObjectById(id);
            if (object)
                object.visible = true;
        };
        /**
         * 获取对象组中对象长度
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.getObjectCount = function () {
            return this._objects.length;
        };
        /**
         * 根据索引获取TMXObject实例
         * @param index 对象所在对象组中的索引
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.getObjectByIndex = function (index) {
            return this._objects[index];
        };
        /**
         * 根据索引移除对象
         * @param index  对象所在对象组中的索引
         * @version Egret 3.0.3
         */
        TMXObjectGroup.prototype.removeObjectByIndex = function (index) {
            var object = this.getObjectByIndex(index);
            if (object && object.parent)
                object.parent.removeChild(object);
        };
        return TMXObjectGroup;
    }(egret.Sprite));
    tiled.TMXObjectGroup = TMXObjectGroup;
    __reflect(TMXObjectGroup.prototype, "tiled.TMXObjectGroup");
})(tiled || (tiled = {}));
//# sourceMappingURL=TMXObjectGroup.js.map