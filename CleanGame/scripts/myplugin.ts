/**
 * 示例自定义插件，您可以查阅 http://developer.egret.com/cn/2d/projectConfig/cmdExtensionPluginin/ 
 * 了解如何开发一个自定义插件
 */
export class CustomPlugin implements plugins.Command {
    private timeStamp: number; //时间戳
    private modifyInitial: Array<string> = []; //保存修改过的库文件 js 文件名字
    private modifyGame: Array<string> = []; //保存修改过的 main 文件 js 文件名字
    private manifestPath: string; //保存 manifest 路径
    constructor() {
        this.timeStamp = Date.now();
    }
    async onFile(file: plugins.File) {
        if (file.extname == ".js") {
            let pos = file.path.lastIndexOf(".");
            let pre = file.path.slice(0, pos);
            file.path = pre + this.timeStamp + "." + file.extname;
            if (file.basename.indexOf("main.min") >= 0) {
                this.modifyGame.push(file.relative);
            } else {
                this.modifyInitial.push(file.relative);
            }
        }
        if (file.basename.indexOf("manifest.json") >= 0) {
            this.manifestPath = file.relative;
        }
        return file;
    }


    async onFinish(commandContext: plugins.CommandContext) {
        let obj = {
            initial: this.modifyInitial,
            game: this.modifyGame
        };
        const serialize = JSON.stringify(obj);
        commandContext.createFile(this.manifestPath, new Buffer(serialize));
    }
}