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
var LeanCloudTest = (function (_super) {
    __extends(LeanCloudTest, _super);
    function LeanCloudTest() {
        var _this = _super.call(this) || this;
        _this.skinName = "LeanCloudTestSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    LeanCloudTest.prototype.addStage = function () {
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn, this);
    };
    LeanCloudTest.prototype.onBtn = function () {
        // 应用 ID，用来识别应用
        var APP_ID = 'PgJ6NThEgme493wrvexghyRA-gzGzoHsz';
        // 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
        var APP_KEY = 'yuLVnbbIvDbh2xXg85iDJHtr';
        // 初始化
        /*

        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
        var TestObject = AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.save({
            testabc: 'abc123'
        }).then(function() {
            alert('LeanCloud works!');
        }).catch(function(err) {
            alert('error:' + err);
        });
         */
    };
    return LeanCloudTest;
}(eui.Component));
__reflect(LeanCloudTest.prototype, "LeanCloudTest");
