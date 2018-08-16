var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lhj;
(function (lhj) {
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
            var str;
            var tempStr = "";
            var sign = "";
            if (num < 0) {
                num = -num;
                sign = "-";
            }
            var numArr;
            var uArr;
            numArr = [100000000, 10000, 1000];
            uArr = ["亿", "万", "千"];
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
        //金币显示方式：1.小于1万，直接纯数字显示；2.大于1万，使用单位万显示，保留小数点后两位；3.大于1亿，使用单位亿显示，保留小数点后两位；（如小数点后最后一位为0则去掉）
        ResUtil.simplifyNum = function (num) {
            var str;
            str = "" + num;
            if ((num >= 1e4 && num < 1e8) || (num <= -1e4 && num > -1e8)) {
                str = this.removeZero((num / 1e4).toFixed(2), "万");
            }
            if (num >= 1e8 || num <= -1e8) {
                str = this.removeZero((num / 1e8).toFixed(2), "亿");
            }
            return str;
        };
        ResUtil.removeZero = function (str, unit) {
            var string = str;
            if (str.charAt(str.length - 1) == "0") {
                string = string.substr(0, string.length - 1);
                if (string.charAt(string.length - 1) == "0") {
                    string = string.substr(0, string.length - 1);
                    if (string.charAt(string.length - 1) == ".") {
                        string = string.substr(0, string.length - 1);
                    }
                }
            }
            string += unit;
            return string;
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
        /**为了应对新的引擎，5.1.8以上，龙骨使用普通模式 默认开启动画缓存*/
        /**
         * @param groupName 	龙骨动画资源名
         * @param mcName 		动画名
         * @param armature		动画类型 DragonType.MovieClip | DragonType.ARMATURE
         * @param x 			位置 x
         * @param y 			位置 y
         * @param container 	动画添加到的显示容器
         * @param playTimes		播放次数
         * @param timeScale 	播放速度
         * @param key			动画唯一key，方便通过Key移除动画文件
         *
         */
        ResUtil.createDragon = function (groupName, mcName, armature, x, y, container, playTimes, timeScale, key) {
            var dragonbonesData = RES.getRes(groupName + "_ske_json");
            var textureData = RES.getRes(groupName + "_tex_json");
            var texture = RES.getRes(groupName + "_tex_png");
            var egretFactoryA = new dragonBones.EgretFactory();
            egretFactoryA.parseDragonBonesData(dragonbonesData);
            egretFactoryA.parseTextureAtlasData(textureData, texture);
            var movie = egretFactoryA.buildArmatureDisplay(armature);
            movie.armature.cacheFrameRate = 24;
            playTimes = playTimes ? playTimes : 0;
            movie.animation.play(mcName, playTimes);
            container.addChild(movie);
            movie.x = x;
            movie.y = y;
            return movie;
            //LobbyResUtil.createDragon("sz_LobbyHundred","newAnimation",uniLib.DragonType.ARMATURE)
        };
        /**
         * 创建骨骼动画
         * @param {string} dragonBoneData
         * @param {string} textureData
         * @param {string} texture
         * @param {string} armatureName
         * @param {number} x
         * @param {number} y
         * @param {number} scaleX
         * @param {number} scaleY
         * @returns {dragonBones.Armature}
         */
        ResUtil.createDragonBones = function (dragonBoneData, textureData, texture, armatureName, x, y, scaleX, scaleY) {
            var armature;
            if (egret.Capabilities.engineVersion > "5.0") {
                var dd = RES.getRes(dragonBoneData);
                var td = RES.getRes(textureData);
                var t = RES.getRes(texture);
                var factory = new dragonBones.EgretFactory();
                factory.parseDragonBonesData(dd);
                factory.parseTextureAtlasData(td, t);
                armature = factory.buildArmature(armatureName);
                armature.display.disableBatch();
            }
            else {
                armature = uniLib.DisplayUtils.createDragonBonesDisplay(dragonBoneData, textureData, texture, armatureName);
            }
            armature.display.x = x;
            armature.display.y = y;
            armature.display.scaleX = scaleX;
            armature.display.scaleY = scaleY;
            return armature;
        };
        return ResUtil;
    }());
    lhj.ResUtil = ResUtil;
    __reflect(ResUtil.prototype, "lhj.ResUtil");
})(lhj || (lhj = {}));
