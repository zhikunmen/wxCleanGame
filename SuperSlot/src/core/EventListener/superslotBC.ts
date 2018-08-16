/**
* 监听事件管理器,方便处理监听移除，防止遗漏
*
* 监听语法：
* 
*       superslotBC.addEvent(this,dispatch,Event.COMPLETE,func);
*
* 只监听一次,事件回调后自动一出监听
*        superslotBC.addOnceEvent(this,dispatch,Event.COMPLETE,func);
*
* 移除监听的用法一共有8种：
* 	000 删除所有关于监听者的所有事件,通常在类销毁时使用一次 superslotBC.removeEvent(this);
* 	001 指定相同回调函数的所有监听 superslotBC.removeEvent(this,null,null,func);
* 	010 指定事件名的所有监听 superslotBC.removeEvent(this,null,Event.COMPLETE);
* 	011 指定事件名，指定回调函数的所有监听 superslotBC.removeEvent(this,null,Event.COMPLETE,func);
* 	100 删除指定通知者 和 监听者之间的所有监听 superslotBC.removeEvent(this,dispatch);
* 	101 删除通知者 和 监听者之间使用同一回调函数的所有监听 superslotBC.removeEvent(this,dispatch,null,func);
* 	110 删除通知者 和 监听者之间指定事件的所有监听 superslotBC.removeEvent(this,dispatch,Event.COMPLETE);
* 	111 明确删除指定的事件监听 superslotBC.removeEvent(this,dispatch,Event.COMPLETE,func);
*
*superslotBC历史：
* AS2 1.0(2008 - 1 - 26 AS2版) 
* AS3 1.0(2009) 版本需要在监听类内部申请BC_List用来存储时间信息。 
* AS3 2.0(2010) 版本所有事件信息都集中在superslotBC类中处理。 
* AS3 3.0(2011) 版本针对AS3特性，重写了一遍，性能大幅提升。 
* TS 1.0(2015) 版本针对ts特性，又重写了一遍，时代变化太快了。 
* @author 交流联系方式 442924754@qq.com 梦之神仔
**/
class superslotBC {
    constructor() {}
    /**
    * 已监听类作为索引分支存储监听队列
    */
    private static instanceslib: SuperSlotDictionary = new SuperSlotDictionary();
    /**
    * 临时监听队列
    */
    private static instances: any[][] = [];
    /**
    * 索引：使用监听时外面传递进来的this
    */
    private static KEY: number = 0;
    /**
    * 索引：被监听广播的对象
    */
    private static DISPATHCH: number = 1;
    /**
    * 索引：事件名
    */
    private static EVENT: number = 2;
    /**
    * 索引：监听广播所执行的函数
    */
    private static FUNCTION: number = 3;
    /**
    * 索引：冒泡阶段
    */
    private static USECAPTURE: number = 4;
    /**
    * 索引：监听收到广播的优先级
    */
    private static PRIORITY: number = 5;
    /**
    * 索引：是否弱引用
    */
    private static USEWEAKREFERENCE: number = 6;
    /**
    * addEvent (监听者, 通知者, 事件名称, 回调函数,冒泡阶段,优先级,是否弱引用)
    * superslotBC.addEvent(this,loader,Event.COMPLETE, fun);
    * 
    * @param key  监听者
    * @param dispatch  通知者
    * @param event  事件名称
    * @param func   回调函数
    * @param useCapture 冒泡阶段
    * @param priority   优先级
    * @param useWeakReference   是否弱引用
    */
    public static addEvent(key: any, dispatch: any, event: string, func: Function, useCapture: boolean = false, priority: number = 0, useWeakReference: boolean = false): void {
        if(!dispatch || !key || !event || !func)console.error("添加事件监听参数缺少:",superslotBC.addEvent.arguments);
        dispatch.addEventListener(event, func, key, useCapture, priority, useWeakReference);
        superslotBC.instances.push([key, dispatch, event, func, useCapture, priority, useWeakReference]);       
    }

    /**
    * 只监听到一次事件就删除监听，无需手动删除监听
    * 用法同addEvent方法.
    * 
    * @param key  监听者
    * @param dispatch  通知者
    * @param event  事件名称
    * @param func   回调函数
    * @param useCapture 冒泡阶段
    * @param priority   优先级
    * @param useWeakReference   是否弱引用
    */
    public static addOnceEvent(key: any, dispatch: any, event: string, func: Function, useCapture: boolean = false, priority: number = 0, useWeakReference: boolean = false): void {
        superslotBC.addEvent(key, dispatch, event, func, useCapture, priority, useWeakReference);
        var onceFun: Function =
            function (e: any): void {
                superslotBC.removeEvent(key, dispatch, event, onceFun, useCapture);
                superslotBC.removeEvent(key, dispatch, event, func, useCapture);
            };       
        superslotBC.addEvent(key, dispatch, event, onceFun, useCapture, priority, useWeakReference);        
    }


    /**
    * 移除监听的用法一共有8种：
    * 	000 删除所有关于监听者的所有事件,通常在类销毁时使用一次 superslotBC.removeEvent(this);
    * 	001 指定相同回调函数的所有监听 superslotBC.removeEvent(this,null,null,func);
    * 	010 指定事件名的所有监听 superslotBC.removeEvent(this,null,Event.COMPLETE);
    * 	011 指定事件名，指定回调函数的所有监听 superslotBC.removeEvent(this,null,Event.COMPLETE,func);
    * 	100 删除指定通知者 和 监听者之间的所有监听 superslotBC.removeEvent(this,dispatch);
    * 	101 删除通知者 和 监听者之间使用同一回调函数的所有监听 superslotBC.removeEvent(this,dispatch,null,func);
    * 	110 删除通知者 和 监听者之间指定事件的所有监听 superslotBC.removeEvent(this,dispatch,Event.COMPLETE);
    * 	111 明确删除指定的事件监听 superslotBC.removeEvent(this,dispatch,Event.COMPLETE,func);
    *
    * @param key  监听者
    * @param dispatch  通知者
    * @param event  事件名称
    * @param func   回调函数
    * @param useCapture 冒泡阶段
    */
    public static removeEvent(key: any, dispatch: any = null, event: string = null, func: Function = null, useCapture: boolean = false): void
    {
        if (!key) {
            console.error("监听者参数不能为空！",superslotBC.removeEvent.arguments);
            return;
        }
        var infos: any[];
        var instances: any[][];
        var instances_lib: SuperSlotDictionary = superslotBC.instanceslib;        
        var type: number = 0; 
        var prevkey: any;
        var instances_arr: any[][];
        var hasClear: boolean = true;
        dispatch ? type |= 4 : 0;
        event ? type |= 2 : 0;
        func ? type |= 1 : 0;
        var removeEventFun: () => void = function (): void {      
            hasClear = true;      
            switch (type) {
                case 0/*000*/:
                    infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    
                    break;
                case 1/*001*/:
                    if (infos[superslotBC.FUNCTION] == func) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 2/*010*/:
                    if (infos[superslotBC.EVENT] == event) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 3/*011*/:
                    if (infos[superslotBC.EVENT] == event && infos[superslotBC.FUNCTION] == func) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 4/*100*/:
                    if (infos[superslotBC.DISPATHCH] == dispatch) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 5/*101*/:
                    if (infos[superslotBC.DISPATHCH] == dispatch && infos[superslotBC.FUNCTION] == func) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 6/*110*/:
                    if (infos[superslotBC.DISPATHCH] == dispatch && infos[superslotBC.EVENT] == event) {
                        infos[superslotBC.DISPATHCH].removeEventListener(infos[superslotBC.EVENT], infos[superslotBC.FUNCTION], key, infos[superslotBC.USECAPTURE]);
                    } else {
                        hasClear = false;
                    }
                    break;
                case 7/*111*/:
                    if (infos[superslotBC.DISPATHCH] == dispatch && infos[superslotBC.EVENT] == event && infos[superslotBC.FUNCTION] == func) {
                        infos[superslotBC.DISPATHCH].removeEventListener(event, func, key, useCapture);
                    } else {
                        hasClear = false;
                    }
                    break;                
            }           
        }
        
        var len: number;
        var i: number;    
        instances = instances_lib.get(key);
        if (instances) {           
            len = instances.length;
            for (i = len - 1; i >= 0; i--) {
                infos = instances[i];               
                removeEventFun();
                if (hasClear) {
                    instances.splice(i, 1); 
                }
            }
            if (!instances.length) {
                instances_lib.del(key);
            }             
        }       
       
        instances = superslotBC.instances;
        len = instances.length;
        instances = instances.reverse();
        for (i = len - 1; i >= 0; i--)
        {
            infos = instances[i]; 
            if (infos[superslotBC.KEY] == key) {
                removeEventFun();
            } else {
                hasClear = false;
            }    
            if (hasClear) {
                instances.pop();
            }else{
                if (prevkey == infos[superslotBC.KEY]) {
                    instances_arr.push(instances.pop());
                } else {
                    prevkey = instances[instances.length - 1][superslotBC.KEY];
                    instances_arr = instances_lib.get(prevkey);
                    if (!instances_arr) {
                        instances_arr = [instances.pop()];
                        instances_lib.add(infos[superslotBC.KEY], instances_arr);
                    } else {
                        instances_arr.push(instances.pop());
                    }
                }
            }
        }          
    }	
}