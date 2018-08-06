var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Animation = (function () {
    function Animation() {
    }
    Animation.makeAni = function (effectFile) {
        var json = RES.getRes(effectFile + "_json");
        var texture = RES.getRes(effectFile + "_png");
        if (!json || !texture) {
            egret.log("[Animation] �����ļ������� " + effectFile);
            return null;
        }
        else {
            var effectMcFactory = new egret.MovieClipDataFactory(json, texture);
            var effectMc = new egret.MovieClip(effectMcFactory.generateMovieClipData("ani"));
            effectMc.frameRate = 10;
            return effectMc;
        }
    };
    Animation.makeParticle = function (file) {
        //var texture = RES.getRes(file.toString() + "_png");
        //var config = RES.getRes(file.toString() + "_json");
        //if (texture && config) {
        //    var p:particle.GravityParticleSystem = new particle.GravityParticleSystem(texture, config);
        //    p.start();
        //    return p;
        //} else {
        //    return null;
        //}
    };
    return Animation;
}());
__reflect(Animation.prototype, "Animation");
//# sourceMappingURL=Animation.js.map