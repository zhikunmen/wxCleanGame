
module superslot{
    export class GameUtil{
        /**
        * 给字符串转变为
        * 三位带一个逗号 字符串形式
        * */
        public static getStringByChips(chips: string): string {
            if (chips == "0" || chips == "" || chips == null) return "0";
            var reg: RegExp = /(\d)(?=(?:\d{3})+\b)/g;
            var str: string = chips.replace(reg, "$1,");
            return str;
        }

        public static getChipsFromString(chips: string): number {
            while (chips.indexOf(",") != -1) {
                chips = chips.replace(",", "");
            }
            var num: number = parseInt(chips);

            return num;
        }
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
         * @return dragonBones.EgretArmatureDisplay
         */
           public static createDragon(groupName, mcName, armature, x?, y?, container?, playTimes?, timeScale?, key?) {
            let dragonbonesData = RES.getRes(groupName+"_ske_json");
            let textureData = RES.getRes(groupName+"_tex_json");
            let texture = RES.getRes(groupName+"_tex_png");
            let egretFactoryA = new dragonBones.EgretFactory();
            egretFactoryA.parseDragonBonesData(dragonbonesData);
            egretFactoryA.parseTextureAtlasData(textureData, texture);
            var movie = egretFactoryA.buildArmatureDisplay(armature);
             movie.armature.cacheFrameRate = 24;
            playTimes = playTimes?playTimes:0
            movie.animation.play(mcName,playTimes);
            container.addChild(movie);
            movie.x = x;
            movie.y = y;
            return movie
            //LobbyResUtil.createDragon("sz_LobbyHundred","newAnimation",uniLib.DragonType.ARMATURE)
        }
    }
}