var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 对象存储器,可根据字符名称和对象作为标签名来存储的数据.
* 建议"get"一次后缓存好数据不要频繁使用"get对象key","字符key"不影响
* 支持用对象作为key存储数据.
* @author 交流联系方式 442924754@qq.com 梦之神仔
*/
var SuperSlotDictionary = (function () {
    function SuperSlotDictionary() {
        /**
         * 字典计数器
         */
        this._count = 0;
        this._maps = {};
        this._hashMaps = {};
        this._objKeys = [];
        this._objDatum = [];
    }
    /**
     * 添加指定类型的数据
     * @param key 可以是对象、字符、数字
     * @param data 任何类型
     */
    SuperSlotDictionary.prototype.add = function (key, data) {
        if (typeof (key) != "object") {
            if (!this._maps[key]) {
                this._count++;
            }
            this._maps[key] = data;
        }
        else if (key instanceof egret.HashObject) {
            if (!this._hashMaps[key.hashCode]) {
                this._count++;
            }
            this._hashMaps[key.hashCode] = [key, data];
        }
        else {
            var index = this._objKeys.lastIndexOf(key);
            if (index == -1) {
                this._objKeys.push(key);
                this._objDatum.push(data);
                this._count++;
            }
            else {
                this._objDatum[index] = data;
            }
        }
    };
    /**
     * 删除指定类型的全部数据
     * @param key  可以是对象、字符、数字
     *
     */
    SuperSlotDictionary.prototype.del = function (key) {
        var index;
        if (typeof (key) != "object") {
            if (this._maps[key]) {
                delete this._maps[key];
                this._count--;
            }
        }
        else if (key instanceof egret.HashObject) {
            if (this._hashMaps[key.hashCode]) {
                delete this._hashMaps[key.hashCode];
                this._count--;
            }
        }
        else {
            index = this._objKeys.lastIndexOf(key);
            if (index != -1) {
                this._objKeys.splice(index, 1);
                this._objDatum.splice(index, 1);
                this._count--;
            }
        }
    };
    /**
     * 获取存储中的数据,对象作为key实际上需要进行遍历索引，所以在同一个字典中尽量不要添加过多的key会影响性能,
     * 建议get一次后缓存好数据不要频繁使用get对象key,字符key不影响
     * @param key 可以是对象、字符、数字
     * @return
     */
    SuperSlotDictionary.prototype.get = function (key) {
        if (typeof (key) != "object") {
            if (!this._maps[key]) {
                return null;
            }
            return this._maps[key];
        }
        else if (key instanceof egret.HashObject) {
            if (!this._hashMaps[key.hashCode]) {
                return null;
            }
            return this._hashMaps[key.hashCode][1];
        }
        else {
            var index = this._objKeys.lastIndexOf(key);
            if (index != -1) {
                return this._objDatum[index];
            }
            return null;
        }
    };
    /**
     * 检查是否有该类型的数据存在
     * @param key 可以是对象、字符、数字
     * @return
     */
    SuperSlotDictionary.prototype.has = function (key) {
        if (typeof (key) != "object") {
            return this._maps[key] ? true : false;
        }
        else if (key instanceof egret.HashObject) {
            return this._hashMaps[key.hashCode] ? true : false;
        }
        else {
            var index = this._objKeys.lastIndexOf(key);
            if (index != -1) {
                return true;
            }
            return false;
        }
    };
    Object.defineProperty(SuperSlotDictionary.prototype, "count", {
        /**
         *  获取字典中储存数据的个数
         *
         */
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 对字典中的每一项执行函数，用该函数可以省去for循环，
     * 允许回调函数中删除当前正在执行的key，
     * 但是删除字典中的其他key可能会出现少遍历或重复遍历的情况.
     *
     */
    SuperSlotDictionary.prototype.forEach = function (callback, thisObject) {
        if (thisObject === void 0) { thisObject = null; }
        var name, arr;
        for (name in this._maps) {
            callback.call(thisObject, name, this._maps[name]);
        }
        for (name in this._hashMaps) {
            arr = this._hashMaps[name];
            callback.call(thisObject, arr[0], arr[1]);
        }
        for (var j = 0; j < this._objKeys.length; j++) {
            var key = this._objKeys[j];
            callback.call(thisObject, this._objKeys[j], this._objDatum[j]);
            if (key != this._objKeys[j]) {
                j--;
            }
        }
    };
    Object.defineProperty(SuperSlotDictionary.prototype, "elements", {
        /**
         *  获取字典中储存key和data的队列
         *
         */
        get: function () {
            var _list = [];
            var name, arr;
            for (name in this._maps) {
                _list.push({ key: name, data: this._maps[name] });
            }
            for (name in this._hashMaps) {
                arr = this._hashMaps[name];
                _list.push({ key: arr[0], data: arr[1] });
            }
            var len = this._objKeys.length;
            for (var j = 0; j < len; j++) {
                _list.push({ key: this._objKeys[j], data: this._objDatum[j] });
            }
            return _list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperSlotDictionary.prototype, "keys", {
        /**
         *  获取字典中储存key队列
         *
         */
        get: function () {
            var _list = [];
            var name;
            for (name in this._maps) {
                _list.push(name);
            }
            for (name in this._hashMaps) {
                _list.push(this._hashMaps[name][0]);
            }
            _list = _list.concat(this._objKeys);
            return _list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperSlotDictionary.prototype, "datum", {
        /**
         *  获取字典中储存data的队列
         *
         */
        get: function () {
            var _list = [];
            var name;
            for (name in this._maps) {
                _list.push(this._maps[name]);
            }
            for (name in this._hashMaps) {
                _list.push(this._hashMaps[name][1]);
            }
            _list = _list.concat(this._objDatum);
            return _list;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  打印字典中的所有数据
     *
     */
    SuperSlotDictionary.prototype.destroy = function () {
        this._maps = {};
        this._hashMaps = {};
        this._objKeys.length = 0;
        this._objDatum.length = 0;
    };
    /**
     *  打印字典中的所有数据
     *
     */
    SuperSlotDictionary.prototype.dump = function () {
        var name, arr;
        for (name in this._maps) {
            console.log("key:", name, "---> data:", this._maps[name]);
        }
        for (name in this._hashMaps) {
            arr = this._hashMaps[name];
            console.log("key:", arr[0], "---> data:", arr[1]);
        }
        var len = this._objKeys.length;
        for (var j = 0; j < len; j++) {
            console.log("key:", typeof (this._objKeys[j]), " ---> data:", this._objDatum[j]);
        }
    };
    return SuperSlotDictionary;
}());
__reflect(SuperSlotDictionary.prototype, "SuperSlotDictionary");
