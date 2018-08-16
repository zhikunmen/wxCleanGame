var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    var ArrayUtil = (function () {
        function ArrayUtil() {
        }
        /**
         *  合并数组 并返回新数组 [ arrA[0], arrB[0] ];
         * @param arrA
         * @param arrB
         * @return
         *
         */
        ArrayUtil.mergeArray = function (arrA, arrB) {
            var arrC = new Array();
            var len;
            if (arrA.length >= arrB.length) {
                len = arrA.length;
            }
            else {
                len = arrB.length;
            }
            for (var i = 0; i < len; i++) {
                if (arrA[i])
                    arrC.push(arrA[i]);
                if (arrB[i])
                    arrC.push(arrB[i]);
            }
            return arrC;
        };
        /**
         删除某数据
         arr 指定数组（可以是Array,也可以是Vector）
         value
        */
        ArrayUtil.removeByValue = function (arr, value) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                if (arr[i] == value) {
                    arr.splice(i, 1);
                    return arr;
                }
            }
            if (arr) {
                return arr;
            }
            else {
                return [];
            }
        };
        /**
         * 倒序删除
         */
        ArrayUtil.removeValue = function (arr, value) {
            var len = arr.length;
            for (var i = len - 1; i >= 0; i--) {
                if (arr[i] == value || (arr[i].cardId && arr[i].cardId == value)) {
                    arr.splice(i, 1);
                    return arr;
                }
            }
            if (arr) {
                return arr;
            }
            else {
                return [];
            }
        };
        /**
         元素是否在数组中
        */
        ArrayUtil.isInArray = function (element, arr) {
            var bool = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == element) {
                    return true;
                }
            }
            return bool;
        };
        ArrayUtil.numberResolveToArray = function (value, arr) {
            var result = [];
            var index = 0;
            for (var i = 0; i < arr.length; i++) {
                while (value >= arr[i]) {
                    result.push(arr[i]);
                    value = value - arr[i];
                }
                if (value == 0) {
                    break;
                }
            }
            return result;
        };
        /**深度复制数组*/
        ArrayUtil.deepcopy = function (obj) {
            var out = [], i = 0, len = obj.length;
            for (; i < len; i++) {
                if (obj[i] instanceof Array) {
                    out[i] = this.deepcopy(obj[i]);
                }
                else
                    out[i] = obj[i];
            }
            return out;
        };
        /**翻转一个数组，但不影响原数组*/
        ArrayUtil.reverse = function (source) {
            var arr = [];
            var len = source.length;
            for (var i = 0; i < len; i++) {
                arr.unshift(source[i]);
            }
            return arr;
        };
        return ArrayUtil;
    }());
    superslot.ArrayUtil = ArrayUtil;
    __reflect(ArrayUtil.prototype, "superslot.ArrayUtil");
})(superslot || (superslot = {}));
