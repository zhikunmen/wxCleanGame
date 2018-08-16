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
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        var _this = _super.call(this) || this;
        //字典使用对象作为key引用存储数据.对象作为key实际上需要进行遍历索引，所以在同一个字典中尽量不要添加过多的key会影响性能.
        var dic = new SuperSlotDictionary();
        var arr1 = ["我是数组"];
        var obj2 = getObj(1); // = { name: "我是对象" };
        //************ 性能优化方案,给对象赋值hasCode来提高数据存取效率****************************************
        //没有hasCode的对象查找需要进行队列遍历查找,字段数据量不大的话性能影响不大
        function getObj(mode) {
            var obj;
            switch (mode) {
                case 1:
                    //方案1:如果obj对象转换为 egret.HashObject
                    obj = new egret.HashObject();
                    obj.name = "我是对象";
                    break;
                case 2:
                    //方案2:给上面的对象动态赋值hashCode
                    obj.hashCode = new egret.HashObject().hashCode;
                    break;
                case 3:
                    //方案3:直接修改引擎对象计数器,并赋值给obj对象,这种方式最优.
                    //但是是直接都用了引擎私有变量,如果引擎后面版本修改了变量名,模块也要升级的话,这里相应得调整.
                    obj.hashCode = ++egret.$hashCount;
                    break;
                default:
                    obj = { name: "我是对象" };
                    break;
            }
            return obj;
        }
        //****************************************************************************************************
        var str3 = "我是字符";
        //添加到字典
        dic.add(arr1, arr1);
        dic.add(obj2, obj2);
        dic.add(str3, str3);
        //打印字典内部的数据
        dic.dump();
        //申明一个广播对象“dispatchSprite”,这里可以是任何继承自egret.EventDispatcher的实例对象.   
        _this.dispatchSprite = new egret.Sprite();
        //添加一个自动会移除监听事件
        //上面独立声明一个是为了更容易理解,其实可以直接superslotBC.addOnceEvent(this, this,....)自身的广播事件.
        superslotBC.addOnceEvent(_this, _this.dispatchSprite, egret.Event.ENTER_FRAME, _this.onEnterFrameOnce);
        //创建和监听一个Timer事件
        var timer = new egret.Timer(50);
        superslotBC.addEvent(_this, timer, egret.TimerEvent.TIMER, _this.onEnterTimer);
        timer.start();
        return _this;
    }
    /**
    * dispatchSprite的帧事件
    */
    Demo.prototype.onEnterFrame = function (event, index) {
        console.log("我是函数:", index);
    };
    /**
    * 只执行一次的dispatchSprite的帧事件
    */
    Demo.prototype.onEnterFrameOnce = function (event) {
        var _this = this;
        console.log("我只执行了一次.");
        //生成3个代理函数的监听
        for (var i = 0; i < 3; i++) {
            superslotBC.addEvent(this, this.dispatchSprite, egret.Event.ENTER_FRAME, SuperSlotDelegateUtil.create(this, this.onEnterFrame, i + ""));
        }
        setTimeout(function () {
            //移除3个匿名代理函数
            superslotBC.removeEvent(_this, _this.dispatchSprite, egret.Event.ENTER_FRAME);
            console.log("3个匿名代理函数被移除事件了.");
            //新增加一个事件，100秒后一起移除.
            superslotBC.addEvent(_this, _this.dispatchSprite, egret.Event.ENTER_FRAME, SuperSlotDelegateUtil.create(_this, _this.onEnterFrame, "新来的！"));
            setTimeout(function () {
                //移除所有该类的监听
                superslotBC.removeEvent(_this);
                console.log("所有该类的监听移除了.");
            }, 100);
        }, 200);
    };
    /**
    * timer事件
    */
    Demo.prototype.onEnterTimer = function (event) {
        console.log("我是Timer的事件.");
    };
    return Demo;
}(egret.DisplayObjectContainer));
__reflect(Demo.prototype, "Demo");
