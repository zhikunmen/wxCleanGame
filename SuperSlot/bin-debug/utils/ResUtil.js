var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var superslot;
(function (superslot) {
    /**
     *
     * @author
     *
     */
    var ResUtil = (function () {
        function ResUtil() {
        }
        /**
         * 获取url参数
         */
        ResUtil.getURLData = function () {
            if (!this.initParams) {
                this.initParams = {};
                var str = window.location.search;
                if (str == "") {
                    return;
                }
                if (str.charAt(0) == "?") {
                    str = str.slice(1);
                    ResUtil.trace("getURLData" + str);
                    var arr = str.split(/&/);
                    var paramArr;
                    for (var i = 0; i < arr.length; i++) {
                        paramArr = arr[i].split(/=/);
                        if (paramArr.length == 2) {
                            this.initParams[paramArr[0]] = paramArr[1];
                            ResUtil.trace("getURLData1" + paramArr[0], paramArr[1]);
                        }
                    }
                }
            }
            return this.initParams;
        };
        /**
         * @garr
         * 三张的数值规则
         * 先除，然后分割小数点前后，处理小数点后面，然后再拼接
         * @param {number} 要格式化的数字
         * @returns {string} 格式化后的字符串
         */
        ResUtil.sanzhangNumFormat = function (num) {
            if (num < 0) {
                return;
            }
            // if (!(TypeUtil.getType(num) === "number")) {
            //     console.error("wocao,不是个数字，它是个", TypeUtil.getType(num));
            //     return;
            // }
            if (num <= 10000) {
                return num + "";
            }
            var mod = 0;
            var sym = "";
            if (Math.abs(num) >= 10000 && Math.abs(num) < 100000000) {
                mod = 10000;
                sym = "万";
            }
            else {
                mod = 100000000;
                sym = "亿";
            }
            // let numStr = "" + (num / mod).toFixed(3);
            var numStr = ("" + (num / mod));
            if (numStr.lastIndexOf('.') != -1) {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 4);
            }
            else {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 5);
            }
            var before = numStr.split(".")[0];
            var after = numStr.split(".")[1];
            if (Number(after)) {
                var afterLength = (4 - before.length) > 0 ? 4 - before.length : 0;
                var afterArr = after.split("");
                afterArr.length = afterLength;
                after = afterArr.join("");
                var after2 = (Number("0." + after)).toString();
                after2 = Boolean(after2.split(".")[1]) ? "." + after2.toString().split(".")[1] : "";
                var final = before + after2 + sym;
                return final;
            }
            else {
                return before + sym;
            }
        };
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        ResUtil.createBitmapByName = function (name, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            result.smoothing = true;
            result.x = x;
            result.y = y;
            return result;
        };
        ResUtil.createTexture = function (name) {
            var texture = RES.getRes(name);
            return texture;
        };
        ResUtil.trace = function () {
            var str = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                str[_i] = arguments[_i];
            }
            uniLib.Console.log(str.join(","));
        };
        ResUtil.randRange = function (min, max) {
            var num = max - min;
            var randomNum = Math.floor(Math.random() * num);
            return min + randomNum;
        };
        /**
         * 格式化货币
         * @param currency 货币
         * @param num
         * @return String
         **/
        ResUtil.backToNumber = function (numStr) {
            var num;
            //            numStr=numStr.replace(SystemConsts.CURRENCY,"");
            var pattern = /,/g;
            numStr = numStr.replace(pattern, "");
            return Math.round(Number(numStr));
        };
        //字符串长度
        ResUtil.getCharLength = function (txt) {
            var byte = new egret.ByteArray();
            byte.writeUTF(txt);
            byte.position = 0;
            return byte.bytesAvailable;
        };
        /**
          通过json png
          创建MovieClip
        */
        ResUtil.createMovieClip = function (name, jsons, png) {
            var mc;
            var data = RES.getRes(jsons);
            var txtr = RES.getRes(png);
            var mcFactory = new egret.MovieClipDataFactory(data, txtr);
            mc = new egret.MovieClip(mcFactory.generateMovieClipData(name));
            mc.gotoAndStop(1);
            mc.name = name;
            return mc;
        };
        ResUtil.createTextFeild = function (color, align, text, size, x, y, width, isBold, space) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = -1; }
            if (isBold === void 0) { isBold = false; }
            if (space === void 0) { space = 0; }
            var tf = new egret.TextField();
            if (width != -1) {
                tf.width = width;
            }
            tf.fontFamily = "微软雅黑";
            tf.bold = isBold;
            tf.textColor = color;
            tf.textAlign = align;
            tf.text = text;
            tf.size = size;
            tf.lineSpacing = space;
            tf.x = x;
            tf.y = y;
            tf.multiline = false;
            return tf;
        };
        ResUtil.createFontText = function (text, x, y, width, font) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = -1; }
            if (!font) {
                font = RES.getRes("betTipText_fnt");
            }
            var tf = new egret.BitmapText();
            if (width != -1) {
                tf.width = width;
            }
            tf.font = font;
            tf.text = text;
            tf.x = x;
            tf.y = y;
            return tf;
        };
        ResUtil.createScroll = function (content, w, h, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var scrollView = new egret.ScrollView();
            scrollView.width = w;
            scrollView.height = h;
            scrollView.x = x;
            scrollView.y = y;
            scrollView.setContent(content);
            return scrollView;
        };
        /**
    * 从父级中移除显示对象（如显示对象为影片剪辑则停止）
    * @param dis
    *
    */
        ResUtil.removeFromParent = function (dis) {
            if (dis && dis.parent) {
                dis.parent.removeChild(dis);
            }
        };
        /**
        * 移除显示容器中的所有子集但不包括自己
        * @paramisContainer
        */
        ResUtil.removeAllChildren = function (disContainer) {
            while (disContainer.numChildren > 0) {
                this.removeFromParent(disContainer.getChildAt(0));
            }
        };
        /**
         * 改变Y轴变换之前是640
         */
        ResUtil.changeYAxis = function (num) {
            return uniLib.Global.screenHeight - (720 - num);
        };
        /**
         * 格式化货币
         * @param currency 货币
         * @param num
         * @return String
         **/
        ResUtil.currencyFormat = function (num, len) {
            if (len === void 0) { len = -1; }
            var str = Math.abs(num).toString();
            var sign = "";
            if (num < 0) {
                sign = "-";
            }
            var small = "";
            if (str.indexOf(".") > -1) {
                small = str.substring(str.indexOf("."), str.length);
                str = str.substring(0, str.indexOf("."));
            }
            if (len != -1) {
                while (str.length < len) {
                    str = "0" + str;
                }
            }
            var ary = str.split("");
            var leng = ary.length;
            var index = 1;
            for (var i = leng - 1; i > 0; i--, index++) {
                if ((index / 3) == 1) {
                    index = 0;
                    ary[i] = "," + ary[i];
                }
            }
            return sign + ary.join("") + small;
        };
        ResUtil.getTimeStr2 = function () {
            var date = new Date();
            var str = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " >>> ";
            return str;
        };
        ResUtil.numFormat = function (num, decimal) {
            if (decimal === void 0) { decimal = 0; }
            var str;
            var tempStr = "";
            var sign = "";
            if (num < 0) {
                num = -num;
                sign = "-";
            }
            var numArr;
            var uArr;
            numArr = [1000000000, 1000000, 1000];
            uArr = ["B", "M", "K"];
            str = String(num);
            for (var j = 0; j < numArr.length; j++) {
                if (num >= numArr[j]) {
                    tempStr = uArr[j];
                    if (decimal == -1) {
                        str = String(num / numArr[j]);
                    }
                    else {
                        str = String(this.setDot(num / numArr[j], decimal));
                    }
                    break;
                }
            }
            if (str.indexOf(".") != -1) {
                //如果小数点为0直接去掉
                for (var i = 0; i < decimal; i++) {
                    if (Number(str.charAt(str.length - 1)) == 0) {
                        if (i + 1 == decimal)
                            str = str.slice(0, str.length - 2);
                        else
                            str = str.slice(0, str.length - 1);
                    }
                }
                if (str.charAt(str.length - 1) == ".")
                    str = str.slice(0, str.length - 1);
            }
            return sign + str.concat(tempStr);
        };
        /**
         * 格式化数字
         */
        ResUtil.numFormat2 = function (num, decimal) {
            if (decimal === void 0) { decimal = 0; }
            if (num < 0) {
                return;
            }
            if (num <= 10000) {
                return num + "";
            }
            var mod = 0;
            var sym = "";
            if (Math.abs(num) >= 10000 && Math.abs(num) < 100000000) {
                mod = 10000;
                sym = "万";
            }
            else {
                mod = 100000000;
                sym = "亿";
            }
            // let numStr = "" + (num / mod).toFixed(3);
            var numStr = ("" + (num / mod));
            if (numStr.lastIndexOf('.') != -1) {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 4);
            }
            else {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 5);
            }
            var before = numStr.split(".")[0];
            var after = numStr.split(".")[1];
            if (Number(after)) {
                var afterLength = (4 - before.length) > 0 ? 4 - before.length : 0;
                var afterArr = after.split("");
                afterArr.length = afterLength;
                after = afterArr.join("");
                var after2 = (Number("0." + after)).toString();
                after2 = Boolean(after2.split(".")[1]) ? "." + after2.toString().split(".")[1] : "";
                var final = before + after2 + sym;
                return final;
            }
            else {
                return before + sym;
            }
        };
        ResUtil.setDot = function (num, decimal) {
            if (decimal === void 0) { decimal = -1; }
            if (decimal > 0) {
                return Math.floor(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
            }
            else if (decimal == 0) {
                return Math.floor(num);
            }
            return num;
        };
        /*玩家和自己金币显示方式，小于百万，直接纯数字显示；大于百万，使用万，最多显示4位，例如234.5万，2345万；大于亿，使用亿，最多显示4位。 */
        ResUtil.numberFormat = function (num) {
            var str;
            if (num <= 1e6) {
                str = "" + num;
            }
            else if (num > 1e6 && num <= 1e8) {
                str = (num / 1e4).toString();
                if (str.charAt(4) == ".") {
                    str = str.substr(0, 4) + "万";
                }
                else {
                    str = str.substr(0, 5) + "万";
                }
            }
            else {
                str = (num / 1e8).toString();
                if (str.charAt(4) == ".") {
                    str = str.substr(0, 4) + "亿";
                }
                else {
                    str = str.substr(0, 5) + "亿";
                }
            }
            return str;
        };
        ResUtil.getVipColor = function (vipLevel) {
            var color = 0xffffff;
            if (vipLevel > 6) {
                color = 0xff0000;
            }
            else if (vipLevel > 3) {
                color = 0x0000FF;
            }
            else if (vipLevel > 0) {
                color = 0xffff00;
            }
            else {
                color = 0xffffff;
            }
            return color;
        };
        // 格式化数字 1要格式化的数字 2 数字最低要求 3 计算单位为万时是否保留两位小数
        ResUtil.superslotNumFormat = function (num, lowestNum, isKeepTwoDecimal) {
            if (num < 0) {
                return;
            }
            // if (!(TypeUtil.getType(num) === "number")) {
            //     console.error("wocao,不是个数字，它是个", TypeUtil.getType(num));
            //     return;
            // }
            if (num <= lowestNum) {
                return num + "";
            }
            var mod = 0;
            var sym = "";
            if (Math.abs(num) >= 10000 && Math.abs(num) < 100000000) {
                mod = 10000;
                sym = "万";
            }
            else {
                mod = 100000000;
                sym = "亿";
            }
            // let numStr = "" + (num / mod).toFixed(3);
            var numStr = ("" + (num / mod));
            if (numStr.lastIndexOf('.') != -1) {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 4);
            }
            else {
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + 5);
            }
            var before = numStr.split(".")[0];
            var after = numStr.split(".")[1];
            if (Number(after)) {
                // let afterLength = (4 - before.length) > 0 ? 4 - before.length : 0;
                // let afterArr = after.split("");
                // afterArr.length = afterLength;
                // after = afterArr.join("").substring(0, 2);
                // let after2 = (Number("0." + after)).toString();
                // after2 = Boolean(after2.split(".")[1]) ? "." + after2.toString().split(".")[1] : ""
                if (sym == "万") {
                    if (isKeepTwoDecimal) {
                        if (after.length >= 2) {
                            after = after.substring(0, 2);
                        }
                        var final = before + "." + after + sym;
                        return final;
                    }
                    else {
                        return before + sym;
                    }
                }
                else {
                    if (after.length >= 2) {
                        after = after.substring(0, 2);
                    }
                    var final = before + "." + after + sym;
                    return final;
                }
            }
            else {
                if (before == "0")
                    return "0";
                return before + sym;
            }
        };
        // 字符串数字添加千位分隔符
        ResUtil.strFormatThousandsSeparator = function (formatStr) {
            if (formatStr.length >= 4 && formatStr.length <= 6) {
                var tmp1 = formatStr.substring(0, formatStr.length - 3);
                var tmp2 = formatStr.substr(formatStr.length - 3);
                formatStr = tmp1 + "," + tmp2;
            }
            else if (formatStr.length >= 7 && formatStr.length <= 9) {
                var tmp3 = formatStr.substring(0, formatStr.length - 6);
                var tmp4 = formatStr.substring(formatStr.length - 6, formatStr.length - 3);
                var tmp5 = formatStr.substr(formatStr.length - 3);
                formatStr = tmp3 + "," + tmp4 + "," + tmp5;
            }
            else {
                return formatStr;
            }
            return formatStr;
        };
        /**范围内获取整数随机数*/
        ResUtil.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        /**随机打乱数组中的每个元素*/
        ResUtil.shuffle = function (arr) {
            var _arr = arr.slice();
            for (var i = 0; i < _arr.length; i++) {
                var j = this.getRandomInt(0, i);
                // 将 _arr[i]与_arr中随机的项交换
                var t = _arr[i];
                _arr[i] = _arr[j];
                _arr[j] = t;
            }
            return _arr;
        };
        return ResUtil;
    }());
    superslot.ResUtil = ResUtil;
    __reflect(ResUtil.prototype, "superslot.ResUtil");
})(superslot || (superslot = {}));
