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
var ResLoading = (function (_super) {
    __extends(ResLoading, _super);
    function ResLoading() {
        var _this = _super.call(this) || this;
        _this.loadGroups = []; //要加载的组
        _this.skinName = "ResLoadingSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    ResLoading.prototype.addStage = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    ResLoading.prototype.update = function () {
        this.circle.rotation += 3;
    };
    ResLoading.prototype.load = function (groups, callback) {
        egret.log("[ResLoading] 加载组:" + groups);
        this.index = 0;
        this.loadGroups = groups;
        this.callback = callback;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup(this.loadGroups[this.index]);
    };
    ResLoading.prototype.isAllLoaded = function () {
        var b = true;
        for (var i = 0; i < this.loadGroups.length; i++) {
            b = b && RES.isGroupLoaded(this.loadGroups[i]);
        }
        return b;
    };
    ResLoading.prototype.loadFinish = function () {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        if (this.parent) {
            this.parent.removeChild(this);
        }
        if (this.callback) {
            this.callback.exec();
        }
    };
    ResLoading.prototype.onResourceLoadComplete = function (event) {
        var b = this.isAllLoaded();
        egret.log("[LoadingCircle] group " + event.groupName + " loaded");
        if (b) {
            this.loadFinish();
        }
        else {
            this.index++;
            RES.loadGroup(this.loadGroups[this.index]);
        }
    };
    ResLoading.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    ResLoading.prototype.onResourceProgress = function (event) {
        this.setProgress(event.itemsLoaded, event.itemsTotal);
        //var item = event.resItem;
        //console.log(event.groupName + "[" + event.itemsLoaded + "/" + event.itemsTotal + "]:" + item.url);
    };
    ResLoading.prototype.setProgress = function (current, total) {
        this.textLabel.text = current + "/" + total;
    };
    return ResLoading;
}(eui.Component));
__reflect(ResLoading.prototype, "ResLoading");
//# sourceMappingURL=ResLoading.js.map