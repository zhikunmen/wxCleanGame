var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tiled;
(function (tiled) {
    var TMXUtils = (function () {
        function TMXUtils() {
        }
        /**
         * 快速创建TMX地图
         * @param $renderwidth 渲染宽（单位：像素）
         * @param $renderheight 渲染高（单位：像素）
         * @param $url tmx文件地址
         * @param $parentContainer 渲染容器
         * @param $onComplete 创建完成回去调
         * @param $thisObject 回调函数绑定this对象
         *
         * @version Egret 3.0.3
         */
        TMXUtils.create = function ($renderwidth, $renderheight, $url, $parentContainer, $onComplete, $thisObject) {
            if ($onComplete === void 0) { $onComplete = null; }
            if ($thisObject === void 0) { $thisObject = null; }
            RES.getResByUrl($url, function (data) {
                try {
                    var data = egret.XML.parse(data);
                }
                catch (e) {
                    throw new Error("tmx文件格式不正确！");
                }
                var tmxTileMap = new tiled.TMXTilemap($renderwidth, $renderheight, data, $url);
                tmxTileMap.render();
                $parentContainer.addChild(tmxTileMap);
                if ($onComplete)
                    $onComplete.apply($thisObject);
            }, this, RES.ResourceItem.TYPE_XML);
        };
        /**
         * 解码
         * @param data 数据
         * @param encoding 编码方式 目前暂时只支持XML、base64(无压缩)、csv解析
         * @param compression 压缩方式
         * @returns 返回解析后的数据列表
         *
         * @version Egret 3.0.3
         */
        TMXUtils.decode = function (data, encoding, compression) {
            compression = compression || "none";
            encoding = encoding || "none";
            var text = data.children[0].text;
            switch (encoding) {
                case "base64":
                    var decoded = tiled.Base64.decodeBase64AsArray(text, 4);
                    return (compression === "none") ? decoded : tiled.Base64.decompress(text, decoded, compression);
                    break;
                case "csv":
                    return tiled.Base64.decodeCSV(text);
                    break;
                case "none":
                    var datas = [];
                    for (var i = 0; i < data.children.length; i++) {
                        datas[i] = +data.children[i].attributes.gid;
                    }
                    return datas;
                    break;
                default:
                    throw new Error("未定义的编码:" + encoding);
                    break;
            }
        };
        /**
         * 将带"#"号的颜色字符串转换为16进制的颜色,例如：可将"#ff0000"转换为"0xff0000"
         * @param $color 要转换的颜色字符串
         * @returns 返回16进制的颜色值
         * @version Egret 3.0.3
         */
        TMXUtils.color16ToUnit = function ($color) {
            var colorStr = "0x" + $color.slice(1);
            return parseInt(colorStr, 16);
        };
        return TMXUtils;
    }());
    tiled.TMXUtils = TMXUtils;
    __reflect(TMXUtils.prototype, "tiled.TMXUtils");
})(tiled || (tiled = {}));
