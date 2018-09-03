/*!
 * wxGameLib - d.ts for Description
 * @licence wxGameLib - v0.1.0 (2018-09-03)
 * qq:93749937 | Licence: helojo
 */
declare module wxgame {
    class Golbal {
        static appId: string;
        static secret: string;
        /**
         * @param appId 小游戏appid
         * @param secret 小游戏秘钥
         */
        static init(appId: string, secret: string): void;
        /**
         * @param jscode login回调成功的code
         */
        private static getSessionKeyOpenId(jscode);
    }
}
