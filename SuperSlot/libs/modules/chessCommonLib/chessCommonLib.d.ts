/*!
 * chessCommonLib - d.ts for Description
 * @licence chessCommonLib - v0.1.0 (2018-08-07)
 * qq:93749937 | Licence: helojo
 */
/**
 * 通用头像组件
 */
declare module chessCommonLib {
    class Head extends eui.Component implements eui.UIComponent {
        static PersonalImageAble: boolean;
        static DefaultHead: string;
        static DefaultIcon: boolean;
        static DefaulVip: boolean;
        static DefaulInfoBg: boolean;
        protected _headUrl: string;
        protected _frame: string;
        protected _vipAnim: string;
        protected avar_img: eui.Image;
        protected avarFrame_img: eui.Image;
        protected gift_icon: eui.Image;
        protected info_bg: eui.Image;
        protected anim: dragonBones.Movie;
        private static DefaultWH;
        constructor(skin?: string, w?: number, h?: number);
        protected partAdded(partName: string, instance: any): void;
        headUrl: string;
        frame: string;
        setVipAnim(resName: string, playName?: string, x?: number, y?: number): void;
        setHeadFrame(level: number, personInfo?: Cmd.PersonalImage[]): void;
        vipLevel: number;
        private headScale;
        protected childrenCreated(): void;
        destroy(): void;
    }
}

declare module chessCommonLib {
    /**
    * 初始化库
    * @method commonLib.init
    * @param param {any} 初始化参数
    */
    function init(param?: initOptions, callBack?: Function, thisObj?: any): void;
    function onExiteGame(e: uniLib.ZqEvent): void;
}

/**eui组件的父类 */
declare module chessCommonLib {
    class BaseEuiPanel extends eui.Component {
        /**
         * @param title 标题资源
         * @param width 宽度 不设置则用默认的
         * @param height 高度 不设置则用默认的
         * @param skin 自己设置的底板 不用大厅的底板
         */
        private _commonPanel;
        constructor(title?: string, width?: number, height?: number, skin?: string);
        protected childrenCreated(): void;
        protected initUI(): void;
        /**事件监听 */
        protected addEvent(): void;
        protected removeEvent(): void;
        protected destroy(): void;
    }
}

declare module chessCommonLib {
    class CommonPanel extends eui.Component {
        static exml: string;
        /**标题 */
        private _title;
        /**关闭按钮 */
        private _closeBtn;
        private _titleStr;
        private _width;
        private _height;
        constructor(title?: string, width?: number, height?: number, skin?: string);
        protected childrenCreated(): void;
        protected initUI(): void;
        protected addEvent(): void;
        protected removeEvent(): void;
        protected destroy(): void;
        protected btnClick(evt: egret.TouchEvent): void;
        static setDefaultSkin(skin: any): void;
    }
}

declare module chessCommonLib {
    class SysMsgImportant extends eui.Component {
        private _msgTxt;
        private _noticeArr;
        private _msgContain;
        private _noticePanel;
        private _vipIcon;
        private _worldchat;
        private _buffer;
        private _defaultMsg;
        private _loop;
        _isHundred: boolean;
        private _isDestroy;
        constructor(isHundred?: boolean);
        protected childrenCreated(): void;
        initUI(): void;
        private removeListen();
        private clickHandle(evt);
        setDefaultMsg(msg: string): void;
        setLoop(value: boolean): void;
        private noticeTest();
        private startScroll();
        private scrollNext();
        private scrollEnd();
        private onNoticeCome(e);
        private operateText(notice);
        destroy(): void;
        createTextFeild(): egret.TextField;
    }
}

declare module chessCommonLib {
    class SysMsgMc extends eui.Component {
        private _msgTxt;
        private _noticeArr;
        private _msgContain;
        private _noticePanel;
        private _vipIcon;
        private _worldchat;
        private _buffer;
        private _defaultMsg;
        private _loop;
        private _isDestroy;
        _isHundred: boolean;
        static isShowWorldChat: boolean;
        constructor(isHundred?: boolean);
        protected childrenCreated(): void;
        initUI(): void;
        private removeListen();
        private clickHandle(evt);
        setDefaultMsg(msg: string): void;
        setLoop(value: boolean): void;
        private noticeTest();
        private startScroll();
        private scrollNext();
        private scrollEnd();
        private onNoticeCome(e);
        private operateText(notice);
        destroy(): void;
        createTextFeild(): egret.TextField;
    }
}

/**
 * @author garr
 */
declare module chessCommonLib {
    /**排行榜单个item
     * 主要过程
     * 1，通过formatTxt提取计算图文排版，得出每一行计算后要显示的内容，
     * 2.根据每一行显示的内容数组，创建对象，进行显示
     * 3.用chat_lb控制排版显示
     */
    class chatComponent extends egret.Sprite {
        private str;
        private offsetX;
        private offsetY;
        private Nickname;
        private preStr;
        private emoj;
        /**表情数组 */
        private emojArr;
        /**是否换行 */
        private isMutiLine;
        /**是否是换行，通过一个测试的textWidth判断 */
        private testLable;
        /**存储文本数组 */
        private textArr;
        /**存储整个内容数组 */
        private contentArr;
        private _MaxWidth;
        private _height;
        private _nickName;
        /**当前行所占用宽度 */
        private inlineWidth;
        private data;
        constructor(data: any);
        private init();
        /**
         * @param length 一行的宽度，需要显示指定,不指定默认720
         */
        showContent(length?: number): egret.Sprite;
        /**传入分割好的字符串数组和图片表情数组
         * 根据分割规则，字符串数组每个元素和图片表情数组是通过插入合并
         * eg 字符串数组：[1,3,5]
         *    图片表情数组 [2,4,6]
         *    合并产生完成内容 [1,2,3,4,5,6]
         */
        private formatTxt(strArr, emojArr);
        private toNumber(data);
        private sliceArray(array);
        /**获取对应的内容 */
        private getContent(data);
        /**获取资源名 */
        private getRes(index);
        private getColor(str);
        /**获取颜色的高阶版，由服务器控制颜色输出
         * 格式为<1>
         */
        private getHighOderColor(str);
    }
}

/**
 *
 * @author
 *
 */
declare module chessCommonLib {
    class ChatEventConsts {
        constructor();
        static SEND_SMILEY: string;
        /**聊天信息初始化 */
        static CHAT_INIT: string;
        /**新的世界聊天信息广播 */
        static WORLD_MSG: string;
        /**新的聊天信息广播游戏内 */
        static WORLD_MSG_INGAME: string;
        /**新的世界聊天信息对自己 */
        static WORLD_MSG_SELF: string;
        /**新的世界聊天信息对自己失败 */
        static WORLD_MSG_SELF_FAIL: string;
    }
    class ZhiMaEventConsts {
        constructor();
        /**获取个人信息 */
        static GET_USERINFO: string;
        /**送礼 */
        static SEND_GIFT_NOTICE: string;
        /**语音 */
        static VOICE_NOTICE: string;
        /**录音时间到 */
        static RECORD_TIME_OUT: string;
        /**发送录音 */
        static SEND_RECORD: string;
    }
}

/**
 *
 * @author
 *
 */
declare module chessCommonLib {
    class ChatEventDispatcher extends egret.EventDispatcher {
        constructor();
        private static _instance;
        static readonly instance: ChatEventDispatcher;
    }
}

declare module chessCommonLib {
    class CommonVariable {
        private static instance;
        ExmlMap: any;
        /**用于管理需要显示红点的按钮的偏移距离 */
        PositionMap: any;
        /**传入需要的socketName数组，游戏一般需要同
         * 时传入uniLib和大厅模块名，大厅一般只需要传入对应的module名
         * 按照[0]是游戏内，[1]是大厅socket的顺序，
         * 当是大厅，则[0]是大厅，[1]不需要
        */
        socketName: string[];
        /**用于存储聊天信息，目前用于三张 */
        chatInfo: Cmd.CommonChatInfo;
        /**是否显示急速夺宝 */
        showTreasure: boolean;
        /**否显示时时彩 */
        showSsc: boolean;
        /**下注限制的判断 */
        betLimit: boolean;
        /**个人信息 由大厅初始化*/
        selfUserInfo: any;
        constructor();
        static getInstance(): CommonVariable;
        private init();
        /**
         * 字符串长度处理
         * @param {string}
         */
        static handleString(str: string, len?: number): string;
        /**
         * 获取字符串实际长度
         * @param {string}
         */
        static getStrRealLength(str: string): number;
        /**数组的push重写 */
        static add(data: any, arr: Array<any>): void;
        /**下注时候判断是否能够下注
    * @param userInfo  用户信息
    * @param callBack  不能下注时候的回调
    * originPlatId  是原始微信登陆后再绑定手机号的情况
    *
    */
        betHandle(userInfo: any, callBack: any): Promise<{}>;
    }
}

/**
 * @author
 */
declare module chessCommonLib {
    class LobbyChatFaceComponent extends eui.Component {
        private page1Point1;
        private page1Point2;
        private page2Point1;
        private page2Point2;
        scroll: eui.Scroller;
        private sTime;
        private startX;
        private movX;
        private isMove;
        private page;
        private timeBo;
        private jianTime;
        private pagWidth;
        private maxPag;
        private faceList;
        private faceList1;
        private arrCol1;
        private arrCol2;
        constructor();
        private init();
        private moveStar(timeStamp);
        private onTouchEnd(e);
        private onTouchBegin(e);
        private onScrollEnd();
        private bo;
        private test();
        private MovePanel();
        /**下方小圆点控制 */
        private pointHandle(page);
    }
}

declare module chessCommonLib {
    /**进入标准场的界面 */
    class LobbyChatFaceItem extends eui.ItemRenderer {
        private faceIcon;
        private faceid;
        constructor();
        protected childrenCreated(): void;
        protected dataChanged(): void;
        /**显示详情 */
        private showDetail();
    }
}

/**
 * @author garr
 *   /**
   *━━━━━━神兽出没━━━━━━
   *     ┏┓　　　┏┓
   * 　 ┏┛┻━━━┛┻┓  + +
   *
   *  　┃　　　　　　　┃
   *  　┃　　　━　　　┃ ++ + + +
   * 　  ████━████ ┃+
   *    ┃　　　　　　　┃
   *    ┃　　　┻　　　┃
   *    ┃　　　　　　┃
   * 　  ┗━┓　　　┏━┛  Code is far away from bug with the animal protecting
   *       ┃　　　┃    神兽保佑,代码无bug
   *       ┃　　　┃
   *       ┃　　　┃
   *       ┃　　　┗━━━┓
   * 　　　 ┃　　　　　　　┣┓
   *       ┃　　　　　　　┏┛
   *       ┗┓┓┏━┳┓┏┛
   *       　┃┫┫　┃┫┫
   *         ┗┻┛　┗┻┛
 */
declare module chessCommonLib {
    /**排行榜单个item
     * 主要过程
     * 1，通过formatTxt提取计算图文排版，得出每一行计算后要显示的内容，
     * 2.根据每一行显示的内容数组，创建对象，进行显示
     * 3.用chat_lb控制排版显示
     */
    class LobbyChatListItem extends eui.ItemRenderer {
        private chat_lb;
        private name_lb;
        private vipIcon;
        private str;
        private offsetX;
        private offsetY;
        private Nickname;
        private preStr;
        private emoj;
        /**表情数组 */
        private emojArr;
        /**是否换行 */
        private isMutiLine;
        /**是否是换行，通过一个测试的textWidth判断 */
        private testLable;
        /**存储文本数组 */
        private textArr;
        /**存储整个内容数组 */
        private contentArr;
        private _MaxWidth;
        private _height;
        private _nickName;
        /**当前行所占用宽度 */
        private inlineWidth;
        constructor();
        protected childrenCreated(): void;
        protected dataChanged(): void;
        /**传入分割好的字符串数组和图片表情数组
         * 根据分割规则，字符串数组每个元素和图片表情数组是通过插入合并
         * eg 字符串数组：[1,3,5]
         *    图片表情数组 [2,4,6]
         *    合并产生完成内容 [1,2,3,4,5,6]
         */
        private formatTxt(strArr, emojArr);
        private toNumber(data);
        private sliceArray(array);
        /**获取对应的内容 */
        private getContent(data);
        /**获取资源名 */
        private getRes(index);
        private getColor(str);
        /**获取颜色的高阶版，由服务器控制颜色输出，后期可以配表扩充
         * 格式为<1>
         */
        private getHighOderColor(str);
    }
}

declare module chessCommonLib {
    /**排行榜单个item
     * 主要过程
     * 1，通过formatTxt提取计算图文排版，得出每一行计算后要显示的内容，
     * 2.根据每一行显示的内容数组，创建对象，进行显示
     * 3.用chat_lb控制排版显示
     */
    class LobbyChatListItemTemp extends eui.ItemRenderer {
        private chat_lb;
        private name_lb;
        private vipIcon;
        private str;
        private offsetX;
        private offsetY;
        private Nickname;
        private preStr;
        private emoj;
        /**表情数组 */
        private emojArr;
        /**是否换行 */
        private isMutiLine;
        /**是否是换行，通过一个测试的textWidth判断 */
        private testLable;
        /**存储文本数组 */
        private textArr;
        /**存储整个内容数组 */
        private contentArr;
        private _MaxWidth;
        private _height;
        /**当前行所占用宽度 */
        private inlineWidth;
        constructor();
        protected childrenCreated(): void;
        protected dataChanged(): void;
        private formatTxt(strArr, emojArr);
        private toNumber(data);
        private sliceArray(array, size);
        /**获取对应的内容 */
        private getContent(data);
    }
}

declare module chessCommonLib {
    /**大厅聊天面板 */
    class LobbyChatPanel extends eui.Component {
        private chatSend;
        private chatClose;
        private sendClock;
        private hornNum;
        private chatFaceIcon;
        private chatContentLable;
        private chatFacePanel;
        loadingTip: egret.tween.TweenGroup;
        private loading_img;
        private sendDisable;
        private hornIcon;
        private send_word;
        private chatScroll;
        private chatList;
        private isTour;
        private arrCol;
        private chatData;
        /**控制按钮上倒计时 */
        private _countTime;
        private counTime;
        private tempTimer;
        private tempTimer2;
        private touchMask;
        /**是否被禁言 */
        private isForbidden;
        constructor();
        protected childrenCreated(): void;
        private uiCompHandler();
        protected init(): void;
        private isInGame();
        /**每次弹出调用 */
        initView(): void;
        protected addEvent(): void;
        protected removeEvent(): void;
        /**初始化请求聊天信息 */
        getChatData(): void;
        /**初始化数据 */
        private initData(e);
        private showRender();
        /**点击发送 */
        private sendChatMsg();
        /**新的聊天信息自己 */
        private onGetSZchatInfoself(e);
        /**自己返回失败 */
        private selfFail();
        /**控制按钮上倒计时 */
        private onTimer();
        /**控制按钮上倒计时 */
        private timerComFunc();
        /**新加的聊天信息 */
        private onGetSZchatInfo(e);
        /**空白消息 ,为了解决eui布局测量误差   1：添加一条空白信息 2:移除最上面的空白信息*/
        private layoutRefresh(num);
        /**显示表情面板 */
        private showFacePanel();
        private showFaceText(event);
        private onChang(e);
        /**当输入框内容为空，置灰发布按钮 */
        private BtnHandle();
        /**根据时间戳排序 */
        private sortByTimestamp();
        /**控制未加载前缓动动画 */
        private cartonControl(boo);
        /**关闭当前面板 */
        chatCloseHander(): void;
        destroy(): void;
        private hidephonevc();
        /**显示错误提示 */
        private showFailToast();
        /***这个负责彻底销毁调用 */
        dispose(): void;
    }
}

declare module Cmd {
    /**
 * 聊天信息初始化
 */
    function OnGetCommonChatInfoLobby_S(rev: Cmd.GetCommonChatInfoLobby_S): void;
    /**
 * 聊天返回只对自己
 */
    function OnLobbyCommonChatLobby_S(rev: Cmd.LobbyCommonChatLobby_S): void;
    /**
     * 聊天返回广播
     */
    function OnLobbyCommonChatLobby_Brd(rev: Cmd.LobbyCommonChatLobby_Brd): void;
}

/**
 *
 * @author
 *
 */
declare module chessCommonLib {
    class ChatImageItem extends egret.Sprite {
        private content;
        private labeTxt;
        constructor(name: string);
        private createBitmap(name);
        destory(): void;
    }
}

/**
 *
 * @author
 *
 */
declare module chessCommonLib {
    class ChatWordItem extends eui.Component {
        private content;
        private labeTxt;
        constructor(content: any, isSpecil?: boolean);
        private createTextLabel(ale, size);
        destory(): void;
    }
}


declare module chessCommonLib {
    class ChatList extends eui.Component {
        private chatType_btn;
        private labelDisplay;
        private send_bt;
        private chat_scr;
        private chat_etxt;
        private chat_lst;
        private _data;
        private _chatBtns;
        private _chatDropBtns;
        /**
         * 选择按钮组
         */
        private chat_select_grp;
        /**
         * 喇叭按钮
         */
        labaDrop_btn: eui.Button;
        /**
         * 房间按钮
         */
        roomDrop_btn: eui.Button;
        labaType_btn: eui.Button;
        roomType_btn: eui.Button;
        private _currentChatType;
        /**
         * 喇叭数量
         */
        private _hornNum;
        constructor();
        protected childrenCreated(): void;
        private chatListItemRendererFunc(item);
        private showChatTypeSelectGrp(page);
        private hideChatTypeSelectGrp();
        currentChatType: Cmd.CHAT_TYPE;
        /**
         * 更新用户列表
         */
        update(): void;
        reset(): void;
        addEvents(): void;
        private onShowDropHandle(e);
        private onTouchChatTypeHandle(e);
        /**
         * 更新喇叭数量,这么写只是为了移除事件监听
         */
        sethornNum(e: uniLib.ZqEvent): void;
        /**
         * 更新喇叭数量
         */
        hornNum: number;
        /**
         * 获取到聊天信息
         */
        private onGetChatInfo(e);
        private onSendHandler(e);
        private onVoiceHandle(e);
        private onVoiceEndHandle(e);
        data: Cmd.UI_CommonChat_Brd[];
        private refreshView();
        private changeChatType();
        /**
         * 滚动到底部
         */
        private scroll2Bottom();
        private onChang(e);
        destroy(): void;
    }
}

declare module chessCommonLib {
    class ChatListItemRenderer extends eui.ItemRenderer {
        private avar_img;
        private vip_img;
        private name_txt;
        private time_txt;
        private chat_txt;
        constructor();
        protected childrenCreated(): void;
        private showUserinfoPanel();
        private removeListen();
        protected dataChanged(): void;
        private changeTimeToStr;
        private getNumStr;
    }
}

declare module chessCommonLib {
    /**
     * 聊天LIST喇叭ITEM
     */
    class ChatListLabaItemRenderer extends eui.ItemRenderer {
        private notice_lb;
        private chat_laba_vip_img;
        constructor();
        protected childrenCreated(): void;
        protected dataChanged(): void;
    }
}

declare module chessCommonLib {
    class ChatUserEvent {
        /**
         * 聊天信息事件
         */
        static CHAT_INFO: string;
        /**
     * 喇叭数量改变
     */
        static HORN_CHANGE: string;
        /**
         * 从舞台移动到边上
         */
        static MOVE_LEFT: string;
        /**
         * 从边上移动舞台
         */
        static MOVE_RIGHT: string;
        /**
         * 无座玩家总数
         */
        static CHAT_USER_COUNT: string;
        /**
         * 座位人数改变
         */
        static SEATNUM_CHANGE: string;
    }
}

declare module chessCommonLib {
    class ChatUserView extends eui.Component {
        /**
         * 聊天按钮
         */
        private chat_btn;
        /**
         * 无座玩家按钮
         */
        private noseat_btn;
        private mess_count;
        private chatAnim;
        /**
         * 按钮组
         */
        private btns;
        /**
         * 选中的按钮
         */
        private _curentBtn;
        /**
         * 正在显示的页
         */
        private _currentView;
        /**
         * 无座玩家UI
         */
        private _userList;
        /**
         * 聊天UI
         */
        private _chatListView;
        /**
         * 当前显示页的枚举值
         */
        private _currentPage;
        private _userListSkin;
        /** */
        private bg_layer;
        private _isMove;
        /**
         * @description    参数列表
         * @param {number} defaultPage默认打开页面，1聊天，2：无座列表
         * @param {string} skin面板皮肤。
         * @param {string} chatSkin聊天面板皮肤。
         * @param {string} userListSkin无座列表面板皮肤。
         */
        constructor(defaultPage?: CHAT_PAGE, skinType?: number);
        protected childrenCreated(): void;
        private getUserList();
        onChatReady(page: CHAT_PAGE): void;
        private onGetChatInfo(e);
        private onUserCount(e);
        private onChatBtnHandler(evt);
        /**
         * 设置喇叭数量
         */
        hornNum: number;
        /**点击空白聊天框隐藏 */
        private onTouch(evt);
        /**点击按钮移动到舞台 */
        private onClick(evt);
        /**点击空白聊天框隐藏 */
        private moveLeft(evt);
        /**点击按钮移动到舞台 */
        private moveRight(evt);
        destroy(): void;
    }
    enum CHAT_PAGE {
        /**
         * 聊天
         */
        CHAT = 1,
        /**
         * 无座玩家
         */
        NOSEAT = 2,
    }
}
declare module Cmd {
    /**
     * 发送聊天返回
     */
    function OnUI_CommonChat_S(rev: Cmd.UI_CommonChat_S): void;
    /**
     * 聊天消息
     */
    function OnUI_CommonChat_Brd(rev: Cmd.UI_CommonChat_Brd): void;
    function OnUI_VoiceChat_S(rev: Cmd.UI_VoiceChat_S): void;
    function OnUI_VoiceChat_Brd(rev: Cmd.UI_VoiceChat_Brd): void;
}

declare module chessCommonLib {
    class ChatVo {
        constructor();
        chatType: Cmd.CHAT_TYPE;
        data: any;
    }
}

declare module chessCommonLib {
    class UserItemRenderer extends eui.ItemRenderer {
        private vip_img;
        private avar_img;
        private frame_img;
        private name_lb;
        private gold_lb;
        constructor();
        protected childrenCreated(): void;
        private showUserinfoPanel();
        private removeListen();
        protected dataChanged(): void;
    }
}

declare module chessCommonLib {
    class UserList extends eui.Component {
        private noseat_lst;
        private _data;
        private loading_img;
        loadingTip: egret.tween.TweenGroup;
        constructor();
        protected childrenCreated(): void;
        data: Cmd.RoomUserInfo[];
        private refreshView();
        /**
         * 更新用户列表
         */
        update(): void;
        reset(): void;
        private getUserList();
        destroy(): void;
    }
}

/**
 * 百人头像组件(暂时只是把头像公共显示统一，后续需要统一头像vo信息)
 */
declare module chessCommonLib {
    class BrSeat extends eui.Component implements eui.UIComponent {
        /**
         * 昵称文本框
         */
        nickName_lbl: eui.Label;
        /**
         * 筹码文本框
         */
        chips_lbl: eui.BitmapLabel;
        /**
         * 文字背景
         */
        lb_bg_img: eui.Image;
        /**
         * 空座位时
         */
        empty_bg: eui.Image;
        head: chessCommonLib.Head;
        static CHIPCHANCE: boolean;
        private DEFAULT_BG;
        constructor(skin?: string, w?: number, h?: number);
        protected childrenCreated(): void;
        stand(): void;
        sit(vo: BrSeatVo): void;
        updateSeat(vo: BrSeatVo): void;
        nickName: string;
        chips: number;
        setHeadFrame(level: number, personInfo?: Cmd.PersonalImage[]): void;
    }
}

declare module chessCommonLib {
    class BrSeatVo extends uniLib.Reflect {
        constructor(obj?: any);
        /**
         * 用户ID
         */
        uid: number;
        /**
         * 头像URL
         */
        headUrl: string;
        /**
         * 昵称
         */
        nickName: string;
        /**
         * 筹码
         */
        remainder: number;
        /**
         * vip等级
         */
        vipLevel: number;
        /**
         * 十二生肖动画
         */
        personalImage: Cmd.PersonalImage[];
    }
}

declare module chessCommonLib {
    class GameTaskButton extends eui.Component {
        game_task: eui.Button;
        private progress_text;
        private light_rotate;
        gameId: number;
        constructor(gameid?: number);
        private addEvents();
        private onRemoveFromStage(evt);
        private removeEvents();
        private onTouchHandle(e);
        private onEventHandler(evt);
        protected childrenCreated(): void;
        private startRoate();
        private stopRoate();
        destroy(): void;
    }
}

declare module chessCommonLib {
    class ShiShiCaiButton extends eui.Component {
        private _ratote;
        private _timer;
        private timer;
        private _data;
        constructor();
        protected childrenCreated(): void;
        private addEvent();
        private onRemoveFromStage(evt);
        private removeEvent();
        private touchHandle();
        private getSscStatus(evt);
        /**
         * 更新时间
         */
        private runTime();
        destroy(): void;
    }
}

/**
 * 统一风格面板
 */
declare module chessCommonLib {
    class Panel {
        constructor();
    }
}

declare module chessCommonLib {
    class TabBar extends eui.TabBar implements eui.UIComponent {
        private _menuCollection;
        private _containerOrThis;
        private _index;
        private _currentPage;
        private _items;
        constructor();
        setdata(menuArray: any, containerOrThis?: any, index?: number): void;
        private onMenuItemTap(e);
        private showItem(vo);
        itemsSkin: any;
        protected childrenCreated(): void;
        destroy(): void;
    }
    class TabBarVO {
        /**
         * 排序
         */
        index: number;
        /**
         * 显示文本
         */
        label: string;
        /**
         * 类或函数
         */
        cls: any;
        func: any;
        skin: TabBarLst;
    }
    /**
     * tabBar
     */
    enum TabBarLst {
        FIRST = 0,
        LAST = 1,
    }
}

declare module chessCommonLib {
    class TabBarItemCenter extends eui.ItemRenderer {
        labelDisplay: eui.Label;
        blabelDisplay: eui.BitmapLabel;
        constructor();
        dataChanged(): void;
    }
}

declare module chessCommonLib {
    class TabBarItemLeft extends eui.ItemRenderer {
        labelDisplay: eui.Label;
        blabelDisplay: eui.BitmapLabel;
        constructor();
        dataChanged(): void;
    }
}

declare module chessCommonLib {
    class TabBarItemRight extends eui.ItemRenderer {
        labelDisplay: eui.Label;
        blabelDisplay: eui.BitmapLabel;
        constructor();
        dataChanged(): void;
    }
}

declare module Cmd {
    /**
    * 个人信息数据返回
    */
    function OnGetPersonalPanel_S(rev: Cmd.GetPersonalPanel_S): void;
    /**
     * 礼物广播
     */
    function OnSendGiftRoomCmd_Brd(rev: Cmd.SendGiftRoomCmd_Brd): void;
    /**
     * 礼物失败返回
     */
    function OnSendGiftRoomCmd_S(rev: Cmd.SendGiftRoomCmd_S): void;
    function OnVoiceChat_Brd(rev: Cmd.VoiceChat_Brd): void;
}

declare module chessCommonLib {
    /**
     * 动画 聊天
     */
    class zm_ChatPanel extends BaseEuiPanel {
        private _root;
        private _content;
        private sendBtn;
        private textField;
        private chatScroller;
        private chatGroup;
        private faceScroller;
        private faceGroup;
        private _ShortTalkArr;
        constructor(ShortTalkArr: string[]);
        protected initUI(): void;
        onChatGroupTap(e: egret.TouchEvent): void;
        onFaceGroupTap(e: egret.TouchEvent): void;
        private onTouchTap(e);
        private sendClickHandler(e);
        destroy(): void;
    }
}

declare module chessCommonLib {
    class zm_GiftAnItem extends egret.DisplayObjectContainer {
        private _giftId;
        private _effectMc;
        constructor();
        initUI(): void;
        giftId: number;
        private onAnimationEvent();
        private index;
        play(): void;
        destory(): void;
    }
}

declare module chessCommonLib {
    class zm_HelpPanel extends BaseEuiPanel {
        private _titleTxt;
        private _typeTxt;
        private _contentTxt;
        private _typetext;
        private _contenttext;
        private _titletext;
        constructor(titletxt: string, typetxt: string, contentTxt: string);
        protected childrenCreated(): void;
        protected initUI(): void;
        private loadTable();
        destory(): void;
    }
}

declare namespace chessCommonLib {
    type zm_SetPanelEvtDate = {
        index?: number;
        resName?: string;
        evtType: string;
    };
    enum zm_SetPanelBtnType {
        BtnMusic = 0,
        BtnSound = 1,
        BtnLocalSound = 2,
    }
    class zm_SetPanel extends BaseEuiPanel {
        static SetPanelEvtOccur: string;
        private static BgResName;
        private static LocalSoundStatus;
        static SetPanelEvtTypeMusicOff: string;
        static SetPanelEvtTypeMusicOn: string;
        static SetPanelEvtTypeSoundOff: string;
        static SetPanelEvtTypeSoundOn: string;
        static SetPanelEvtTypeLocalSoundOff: string;
        static SetPanelEvtTypeLocalSoundOn: string;
        static SetPanelEvtChBg: string;
        leftBtn: eui.Image;
        rightBtn: eui.Image;
        private musicBtn;
        private soundBtn;
        private localSoundBtn;
        private _bgResArr;
        private _index;
        private _bgImgArr;
        private _imgGroup;
        constructor(bgResArr: string[]);
        protected createChildren(): void;
        private onComplete();
        protected initUI(): void;
        private onSoundHandle(evt);
        disableBtn(btnType: number): void;
        private onBgCh(evt);
        /**
         *
         * @param {eui.Image} img  //要缓动的图片
         * @param {boolean} direct //0:向左缓动,1:向右缓动
         * @param {number} nextIndex//下一个index
         * @param {boolean} sendEvt//是否派发换壁纸事件

         */
        private moveEffect(img, direct, nextIndex, sendEvt);
        protected removeEvent(): void;
    }
}

declare module chessCommonLib {
    class zm_UserInfoPanel extends BaseEuiPanel {
        private _uid;
        private _head_img;
        private _head;
        private _ip_lbl;
        private _id_lbl;
        private _gps_lbl;
        private _bean_lbl;
        private _name_lbl;
        private _diamond_lbl;
        private _gender_img;
        private _giftId;
        private _gift_group;
        private _data;
        constructor(uid: number);
        protected childrenCreated(): void;
        protected initUI(): void;
        private loadTable();
        protected addEvent(): void;
        protected removeEvent(): void;
        private showUserInfo(data);
        private sendGiftHandle(evt);
        destory(): void;
    }
    class zm_GiftItem extends eui.ItemRenderer {
        private _gift_img;
        private _gift_name;
        constructor();
        protected dataChanged(): void;
        destory(): void;
    }
}

declare module chessCommonLib {
    class zm_VoiceChat extends egret.DisplayObjectContainer {
        private _startBtn;
        private _recording;
        private _voiceArr;
        private _curPosY;
        private _soundValue;
        constructor(normal: string, down: string, x: number, y: number);
        private initUI(normal, down, x, y);
        getWidth(): number;
        getHeight(): number;
        private recordEvent(evt);
        private startRecord(evt);
        private _isCancel;
        private checkCancel(evt);
        private stopRecord(evt?);
        private onRecordBack(obj);
        private getContainer();
        destory(): void;
    }
    class VoiceMc extends egret.DisplayObjectContainer {
        private _soundIcon;
        private _bg;
        private _timer;
        private _soundTime;
        private _startTime;
        private _timeTxt;
        private _ifFlip;
        constructor();
        private initUI();
        private onTimer(evt);
        private stopTimer();
        flip(): void;
        setData(vo: VoiceDataVo): void;
        private playEndBack(obj);
        destory(): void;
    }
    class RecordingMc extends egret.DisplayObjectContainer {
        private _moving;
        private _time;
        private _startTimer;
        private _startTime;
        private _maxTime;
        private _msTime;
        constructor();
        private initUI();
        startTimer(): void;
        stopTimer(): number;
        private onTimer(evt);
        dispose(): void;
    }
    class VoiceDataVo {
        url: string;
        nickName: string;
        time: number;
        uid: number;
        status: number;
        text: string;
        constructor();
    }
}

declare module chessCommonLib {
    /**
     * 公共组
     */
    class GrpConsts {
        /**
         * VIP资源组
         */
        static CHESS_COMMON_VIP: string;
        /**
         * 头像组
         */
        static CHESS_COMMON_HEAD: string;
        /**
         * head
         */
        static CHESS_COMMON_TEST: string;
        /**
         * chat
         */
        static CHESS_COMMON_CHAT: string;
        /**
         * chat3
         */
        static CHESS_COMMON_CHAT3: string;
        /**
         * 礼物音效
         */
        static CHESS_COMMON_GIFT_SOUND: string;
        /**
        * VIP等级动画
        */
        static CHESS_COMMON_ANIM_VIP: string;
        /**
         * 其他资源
         */
        static CHESS_COMMON_OTHER: string;
        /**
         * 三张
         */
        static CHESS_COMMON_SANZHANG: string;
        static CHESS_COMMON_ZHIMA: string;
        static CHESS_COMMON_ZHIMA_MAHJONG_RESULT: string;
        /**
         * 表情聊天
         */
        static CHESS_COMMON_EMOJCHAT: string;
        /**
         * 礼物动画
         */
        static CHESS_COMMON_GIFT_EFFECT: string;
        constructor();
    }
}

declare module chessCommonLib {
    /**
     * 公共模块
     */
    class CommonModelEvent {
        /**
         * 用户信息模块
         */
        static USERINFO: string;
        /**
         * 商城
         */
        static SHOP: string;
        /**
         * 福利
         */
        static FULI: string;
        /**
         * 活动
         */
        static ACTIVITY: string;
        /**
         * 任务
         */
        static TASK: string;
        /**
         * 保险箱
         */
        static SAFEBOX: string;
        /**
         * 邮件
         */
        static MAIL: string;
        /**
         * VIP
         */
        static VIP: string;
        /**
         * 公告牌
         */
        static NOTICE: string;
        /**
         * 聊天
         */
        static CHAT: string;
        /**
         * 救济金
         */
        static FREECHIP: string;
        /**
         * 红包
         */
        static REDPACKAGE: string;
        /**
         * 好友
         */
        static FRIEND: string;
        /**
         * 排行榜
         */
        static RANK: string;
        /**
         *请求游戏进度数据
         */
        static REQUEST_TASK_SCHEDULE: string;
        /**
         *返回游戏进度数据
         */
        static RESPOND_TASK_SCHEDULE: string;
        /**
         *请求时时彩信息
         */
        static REQUEST_SHISHICAI_INFO: string;
        /**
         *返回时时彩信息
         */
        static RESPOND_SHISHICAI_INFO: string;
        /**
         * 广告牌点击
         */
        static SYSMSG_CLICK: string;
        /**
         * 对局流水
         */
        static GAME_WATER: string;
        /**
         * 游戏帮助
         */
        static GAME_HELP: string;
        /**
         * 时时彩
         */
        static SSC: string;
        /**
         *喜从天降活动广播
         */
        static SUPRISE_GIFT_CMD_BRD: string;
        /**
         *喜从天降充值成功
         */
        static SUPRISE_GIFT_RECHARGED: string;
        /**
         *打开福袋暴击红包
         */
        static BAOJI_REDPACK: string;
        /**
         *打开无座玩家面板
         */
        static NO_SEAT_USER: string;
        /**
         *游戏调用大厅设置
         */
        static GAME_SETTING: string;
    }
}

declare module chessCommonLib {
    class ConfigMgr {
        constructor();
        private static _instance;
        static getInstance(): ConfigMgr;
        private loginData;
        /**
         * 获取登录配置
         */
        getLoginCfg(tag?: string): any;
        sign: any;
        /**道具表 */
        goods: any;
        /**商城物品 */
        shop: any;
        /**每日任务 充值任务等 */
        task: any;
        /**游戏配置列表 */
        lobbyGameList: any;
        /**游戏列表 */
        gameList: any;
        /**限时活动 */
        limit: any;
        /**幸运翻翻翻 */
        luck: any;
        /**游戏玩法列表 */
        playTypeList: any;
        headMc: any;
        /**
         * vip配置
         */
        vip: any;
        private _tableInited;
        /**游戏内周边功能显示控制 */
        gameOptions: gameOptions;
        tableInited(): boolean;
        /**
         * 初始化配置
         */
        initTables(): void;
        /**获取玩法列表 */
        getPlayTypeDes: (id: number) => string;
        /**所有玩法id 转换desc  这个传入的参数就是玩法列表，目前的使用方法是
         * chessCommonLib.ConfigMgr.getInstance().getPlayTypeByList(game.RoomInfo.getInstance().playTypeList);
         * 其中game是mahjongClientLib里面的
         * @author garr
         * 2018-5-28
        */
        getPlayTypeByList(playTypeList: number[]): string;
        /**
         * 通过签到ID获取任务配置
         */
        getSignCfgById(lobbyId: number): table.TableSignIn;
        /**
         * 通过任务ID获取任务配置
         */
        getTaskCfgById(taskId: number): table.LobbyTaskConfig;
        /**
         * 通过shopID获取商城配置
         */
        getShopCfgById(shopId: number): table.TableShopConfig;
        /**
         * 通过goodId获取物品配置
         */
        getGoodCfgById(goodId: number): table.TableGoodsConfig;
        /**
         * 通过goodId获取限时优惠配置
         */
        getLimitCfgById(limitId: number): table.TableLimitOfferConfig;
        /**
         * 通过gameId获取游戏列表配置
         */
        getGameListCfgById(gameId: number): table.TableLobbyGameList;
        /**
         * 通过游戏ID获得游戏配置项
         */
        getGameCfgById(gameId: number): table.gameList;
        /**
         * 通过vip等级获得vip
         */
        getVipByLevel(level?: number): table.TableVip;
        /**
         * 通过id获取头像动画
         */
        getheadMcById(id?: number): table.headMc;
        getNameColor(level: number): number;
        /**
         * 获取gamelist配置
         */
        getGameListCfg(remoteBack?: Function, thisObj?: any): table.gameList;
    }
}

declare module chessCommonLib {
    /**
     * 公用模块
     */
    class ModuleMgr {
        constructor();
        private static _instance;
        private _loadingCls;
        skinType: number;
        isFullScreen: boolean;
        static getInstance(): ModuleMgr;
        /**
         * 打开确认框
         */
        showConfirm(info: string, title?: string, oktxt?: string, okFunc?: Function, caltxt?: string, calFunc?: Function, thisObj?: any, cotainer?: egret.DisplayObjectContainer): void;
    }
}

declare module chessCommonLib {
    /**
     * 轻提示
     */
    class PublicTipMgr {
        private static instance;
        constructor();
        static getInstance(): PublicTipMgr;
        /**
         * 房费提示
         */
        private _tipsPanel;
        showTipsShow(msg: string): void;
        destory(): void;
        private getContainer();
        private showList;
        showMildWarnShow(msg: string): void;
        private removeStage(evt);
    }
    class MildAlertVC extends egret.Sprite {
        private _bg;
        private _text;
        constructor();
        private initUI();
        /**
         *
         * @param message
         *
         */
        setText(message: string): void;
        private showDelay();
        destory(): void;
    }
}

declare module chessCommonLib {
    class UserInfoMgr {
        private static _data;
        /**
         * 用户ID
         */
        static uid: number;
        /**
         * 用户ID
         */
        static nickName: string;
        /**
         * 所属平台ID
         */
        static platId: number;
        /**
         * 用户ID
         */
        static subPlatId: string;
        /**
         * 用户筹码
         */
        private static _chips;
        /**
         * 金币  ---  捕鱼大厅金币<捕鱼大厅专用>
         */
        private static _goldChips;
        /**
         * 体验币 ---  捕鱼大厅体验币<捕鱼大厅专用>
         */
        private static _freeChips;
        /**
         * 用户头像地址
         */
        private static _headUrl;
        /**
         * 性别
         */
        static gender: string;
        /**
         * email
         */
        static email: string;
        /**
        * 个性签名
        */
        static signature: string;
        /**
        * 奖券数量
        */
        static _giftCoupon: number;
        /**
         * 用户等级
         */
        static level: number;
        /**
        * 在线礼包时间 为-1时没有礼包可领
        */
        private static _ol_Time;
        /**
         * 聊天计时
        */
        private static _isClick;
        /**
        * 银行存款
        */
        static _bankChips: number;
        static sumRecharge: number;
        static total_ol_Time: number;
        /**
        * 房卡
        */
        static _fangka: number;
        /**
         * 钻石
         */
        static _diamond: number;
        /**
        * 在线礼包时间
        */
        /**
        * 在线礼包时间
        */
        static ol_Time: number;
        static fangka: number;
        static isClick: boolean;
        static diamond: number;
        /**
         * 是否显示滑动： 0:不显示; 1：右滑; 2：左滑
         */
        static slipStatus: number;
        static readonly data: Cmd.UserBaseInfo;
        static init(info: any, initGold?: boolean): void;
        /**
         * VIP等级
         */
        static vipLevel: number;
        static chips: number;
        /**捕鱼大厅金币 */
        /**捕鱼大厅金币 */
        static goldChips: number;
        /**
         * 体验币
         */
        /**
         * 体验币
         */
        static freeChips: number;
        /**
         * 头像
         */
        /**
        * 头像
        */
        static headUrl: string;
        /**
         * 第三方平台积分余额
         */
        private static _platPoint;
        static platPoint: number;
        static bankChips: number;
        static nickname: string;
        /**
        *获取奖券数量
        */
        static giftCoupon: number;
    }
}

declare module chessCommonLib {
    class gameOptions {
        /**
        * 左侧滑动聊天
        */
        leftChat: boolean;
        /**
        * 广告跑马灯
        */
        notice: boolean;
        /**
        * 商城购买
        */
        market: boolean;
        /**
         * 游戏任务
         */
        task: boolean;
        /**
        * 银行（保险箱）
        */
        bank: boolean;
        /**
        * 排行榜
        */
        rank: boolean;
        /**
        * 时时彩
        */
        ssc: boolean;
        /**
        * 福袋
        */
        fupack: boolean;
        /**
        * 个人信息面板
        */
        user: boolean;
        /**
         * 喇叭 屏蔽房间和大厅的和喇叭相关的东西
         */
        horn: boolean;
        /**
        *  麻将分享按钮
        */
        share: boolean;
        /**
       *  大厅模式，true 可以退回到大厅的，false 不能退回到大厅
       */
        lobbyMode: boolean;
    }
}

declare module chessCommonLib {
    class initOptions {
        /**
         * 资源配置URL
         */
        resConfig: string;
        /**
         * 皮肤配置
         */
        thmConfig: string;
        /**
         * 资源根目录
         */
        resRoot: string;
        /**
         * 启用远程资源模式 默认为true
         */
        remoteMode: boolean;
        /**
        * 是否全屏
        */
        static isFullScreen: boolean;
        static fullScreen(): void;
    }
}

declare module Cmd {
    enum CodeEnum {
        /**
         * 成功
         */
        SUCCESS = 0,
    }
    /**
     * ---------------------------------公共模块----------------------------//
     */
    enum CommonModel {
        /**
         * 充值
         */
        RECHARGE = 1,
        /**
         * 在线礼包
         */
        ONLINE_GIFT = 2,
        /**
         * 背包
         */
        BAG = 3,
        /**
         * 活动中心
         */
        ACTIVITY = 4,
        /**
         * 个人信息
         */
        MY = 5,
        /**
         * 大厅底部菜单
         */
        LOBBY_MAIN_MENU = 6,
        /**
         * 游戏头部聊天
         */
        TOP_CHAT = 7,
        /**
         * 查看玩家信息
         */
        USERINFO = 8,
        /**
         * 兑换话费卡
         */
        EXCHANGE_PHONECARD = 9,
        /**
         * 大厅公告
         */
        LOBBY_NOTICE = 10,
        /**
         * 设置
         */
        LOBBY_SETTING = 11,
    }
    /**
     * 聊天广播类型
     */
    enum CHAT_TYPE {
        /**
         * 房间消息
         */
        ROOM = 1,
        /**
         * 喇叭消息
         */
        HORN = 2,
        /**
         * 语音消息
         */
        VOICE = 3,
    }
    /**
     * ---------------------------------公共消息----------------------------//
     * 游戏发送给大厅
     */
    enum CommonEvent_G2L {
        /**
         * 领取在线礼包
         */
        GET_ONLIEN_GIFT = 1,
    }
    /**
     * 大厅发送给游戏
     */
    enum CommonEvent_L2G {
        /**
         * 在线礼包时间更新
         */
        GET_ONLIEN_GIFT_TIME = 1,
        /**
         * 在线礼包时间完成
         */
        ON_ONLIEN_GIFT_TIME_END = 2,
        /**
         * 设置面板
         */
        ON_SETTING = 3,
        /**
         * 设置面板
         */
        ON_HELP = 4,
    }
    /**
     * 玩家在线状态
     */
    enum OnlineState {
        /**
         * 离线
         */
        OnlineState_Offline = 0,
        /**
         * 在线
         */
        OnlineState_Online = 1,
        /**
         * 网络差
         */
        OnlineState_Slow = 2,
        /**
         * 离开,切后台
         */
        OnlineState_Leave = 3,
        /**
         * 电话中
         */
        OnlineState_Calling = 4,
        /**
         * 托管状态
         */
        OnlineState_Hosting = 5,
        /**
         * 排队中,匹配号用
         */
        OnlineState_Waiting = 6,
        /**
         * 游戏中,匹配号用
         */
        OnlineState_Gameing = 7,
    }
    /**
     * 房间类型
     */
    enum RoomType {
        /**
         * 普通房间
         */
        RoomType_Normal = 0,
        /**
         * 快速匹配房
         */
        RoomType_Quick = 1,
        /**
         * 练习场
         */
        RoomType_Learn = 2,
        /**
         * 匹配号生成房,roomid==globalroomid
         */
        RoomType_Match = 3,
    }
    /**
     * ****好友相关****
     */
    enum MsgType {
        /**
         * 底部菜单-&gt;商城
         */
        Shop = 1,
        /**
         * 底部菜单-&gt;好友
         */
        Friend = 2,
        /**
         * 底部菜单-&gt;救济金
         */
        Alms = 3,
        /**
         * 底部菜单-&gt;活动
         */
        Activity = 4,
        /**
         * 底部菜单-&gt;任务
         */
        DaysTask = 5,
        /**
         * 底部菜单-&gt;更多
         */
        More = 6,
        /**
         * 底部菜单-&gt;摇钱树
         */
        MoneyTree = 7,
        /**
         * 通知
         */
        Notice = 8,
        /**
         * 俱乐部
         */
        Club = 9,
        /**
         * 战绩
         */
        Statistics = 10,
        /**
         * 底部菜单-&gt;商城-&gt;礼品屋
         */
        GiftHouse = 100,
        /**
         * 底部菜单-&gt;好友-&gt;好友消息
         */
        FriendMsg = 200,
        /**
         * 底部菜单-&gt;好友-&gt;好友请求
         */
        FriendReq = 201,
        /**
         * 底部菜单-&gt;救济金-&gt;领取救济金
         */
        GetAlms = 300,
        /**
         * 俱乐部牌局
         */
        ClubGame = 301,
        /**
         * 俱乐部成员
         */
        ClubMember = 302,
        /**
         * 俱乐部申请
         */
        ClubApply = 303,
        ClubTransit = 304,
        /**
         * 底部菜单-&gt;活动-&gt;每日签到
         */
        Act_DaySign = 400,
        /**
         * 底部菜单-&gt;活动-&gt;幸运翻翻翻
         */
        Act_TurnCard = 401,
        /**
         * 底部菜单-&gt;活动-&gt;幸运大转盘
         */
        Act_TurnTable = 402,
        /**
         * 底部菜单-&gt;任务-&gt;挑战任务
         */
        Task_fight = 500,
        /**
         * 底部菜单-&gt;任务-&gt;充值任务
         */
        Task_TurnTable = 501,
        /**
         * 底部菜单-&gt;任务-&gt;每日任务
         */
        Task_EveryDay = 502,
        /**
         * 底部菜单-&gt;任务-&gt;成就任务
         */
        Task_Once = 503,
        /**
         * 底部菜单-&gt;更多-&gt;公告
         */
        Task_Notice = 600,
        /**
         * 底部菜单-&gt;更多-&gt;魅力值
         */
        Task_Charm = 601,
        /**
         * 底部菜单-&gt;更多-&gt;邮件
         */
        Task_NewMail = 602,
        /**
         * 底部菜单-&gt;更多-&gt;vip
         */
        Task_VIP = 603,
        /**
         * 底部菜单-&gt;摇钱树-&gt;领取金币
         */
        Task_MoneyTree = 701,
    }
    /**
     * 容器更新操作符
     */
    enum UpdateOperator {
        /**
         * 全部覆盖
         */
        Replace = 1,
        /**
         * 追加或更新
         */
        Update = 2,
        /**
         * 删除
         */
        Delete = 3,
        /**
         * 站起
         */
        StandUp = 4,
    }
    /**
     * 牌型
     */
    enum PokerTupleType {
        /**
         * 散牌
         */
        Tuple_None = 0,
        /**
         * 爆玖	三张3组成的牌型
         */
        Tuple_Baojiu = 1,
        /**
         * 炸弹	任意三张一样的牌
         */
        Tuple_Bomb = 2,
        /**
         * 三公	三张花牌（J、Q、K）组成的牌型
         */
        Tuple_Treble = 3,
        /**
         * 9点	点数相加，个位数为9
         */
        Tuple_Nine = 4,
        /**
         * 8点	点数相加，个位数为8
         */
        Tuple_Eight = 5,
        /**
         * 7点	点数相加，个位数为7
         */
        Tuple_Seven = 6,
    }
    /**
     * 定庄方式
     */
    enum BankerType {
        /**
         * 无庄家，即大吃小
         */
        Banker_None = 1,
        /**
         * 房主坐庄
         */
        Banker_Owner = 2,
        /**
         * 抢庄
         */
        Banker_Any = 3,
    }
    /**
     * 下注基本信息
     */
    class BetItem {
        /**
         * 下指定位置 天地玄黄 分别为 1/2/3/4
         */
        betId: number;
        /**
         * 筹码
         */
        chips: number;
        /**
         * 输赢筹码
         */
        profit: number;
        GetType(): string;
        Populate($other?: any): BetItem;
    }
    /**
     * 房间内玩家信息
     */
    class RoomUserInfo {
        uid: number;
        headUrl: string;
        /**
         * 昵称
         */
        nickName: string;
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 如果为0就是站着
         */
        seatId: number;
        /**
         * 玩家当前筹码
         */
        remainder: number;
        /**
         * 玩家本局已下注信息
         */
        userBet: BetItem[];
        /**
         * 性别
         */
        gender: string;
        /**
         * 奖券
         */
        giftCoupon: number;
        /**
         * 个性签名
         */
        signature: string;
        /**
         * vip等级
         */
        vipLevel: number;
        /**
         * 当前赢得的金币，刚进去为0
         */
        curWinProfit: number;
        /**
         * 喇叭
         */
        horn: number;
        /**
         * 玩家当前钻石
         */
        diamond: number;
        /**
         * 正在使用的个人形象 2017.11.15好彩真人需求
         */
        personalImage: PersonalImage[];
        GetType(): string;
        Populate($other?: any): RoomUserInfo;
    }
    class UI_CommonChat_C {
        words: string;
        /**
         * 普通聊天不发这个字段，广播发1
         */
        brdType: CHAT_TYPE;
        GetType(): string;
        Populate($other?: any): UI_CommonChat_C;
    }
    class UI_CommonChat_S {
        resultCode: number;
        desc: string;
        /**
         * 剩余喇叭数量，需要时候才发
         */
        horn: number;
        GetType(): string;
        Populate($other?: any): UI_CommonChat_S;
    }
    class UI_CommonChat_Brd {
        uid: number;
        words: string;
        headUrl: string;
        nickName: string;
        /**
         * 字符串+vip等级
         */
        vipLevel: string;
        /**
         * 时间戳
         */
        time: number;
        seatId: number;
        /**
         * 1-普通聊天 2-小喇叭
         */
        brdType: CHAT_TYPE;
        GetType(): string;
        Populate($other?: any): UI_CommonChat_Brd;
    }
    /**
     * 语音聊天
     */
    class UI_VoiceChat_C {
        /**
         * 语音时长
         */
        time: string;
        /**
         * 对应文字
         */
        words: string;
        /**
         * 对应地址
         */
        url: string;
        GetType(): string;
        Populate($other?: any): UI_VoiceChat_C;
    }
    class UI_VoiceChat_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        GetType(): string;
        Populate($other?: any): UI_VoiceChat_S;
    }
    class UI_VoiceChat_Brd {
        /**
         * 语音时长
         */
        time: string;
        /**
         * 对应文字
         */
        words: string;
        /**
         * 对应地址
         */
        url: string;
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 发送语音的玩家id
         */
        uid: number;
        GetType(): string;
        Populate($other?: any): UI_VoiceChat_Brd;
    }
    /**
     * 请求无座玩家列表
     */
    class UI_GetNotSeatUserListRoomCmd_C {
        /**
         * 当前请求第几页数据
         */
        curPage: number;
        GetType(): string;
        Populate($other?: any): UI_GetNotSeatUserListRoomCmd_C;
    }
    /**
     * 请求无座玩家列表
     */
    class UI_GetNotSeatUserListRoomCmd_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        /**
         * 当前页数
         */
        curPage: number;
        /**
         * 玩家列表 每次最多返回20个
         */
        users: RoomUserInfo[];
        GetType(): string;
        Populate($other?: any): UI_GetNotSeatUserListRoomCmd_S;
    }
    /**
     * 大厅公共聊天
     */
    class LobbyCommonChatLobby_C {
        /**
         * 聊天内容
         */
        chatInfo: string;
        GetType(): string;
        Populate($other?: any): LobbyCommonChatLobby_C;
    }
    /**
     * 大厅公共聊天返回
     */
    class LobbyCommonChatLobby_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 描述
         */
        desc: string;
        /**
         * 剩余时间
         */
        remainder: number;
        /**
         * 剩余喇叭
         */
        horn: number;
        GetType(): string;
        Populate($other?: any): LobbyCommonChatLobby_S;
    }
    /**
     * 聊天广播
     */
    class LobbyCommonChatLobby_Brd {
        /**
         * 聊天信息
         */
        info: CommonChatInfo;
        /**
         * 聊天类型，1：大厅内喇叭，2：游戏内
         */
        type: number;
        GetType(): string;
        Populate($other?: any): LobbyCommonChatLobby_Brd;
    }
    /**
     * 聊天信息
     */
    class CommonChatInfo {
        /**
         * 玩家昵称
         */
        nickName: string;
        /**
         * 玩家vip等级
         */
        vipLevel: number;
        /**
         * 聊天内容
         */
        chatInfo: string;
        uid: number;
        /**
         * 座位号
         */
        seatId: number;
        /**
         * 1：喇叭来自大厅
         */
        type: number;
        /**
         * 时间戳
         */
        timestamp: number;
        GetType(): string;
        Populate($other?: any): CommonChatInfo;
    }
    /**
     * 获取世界聊天信息
     */
    class GetCommonChatInfoLobby_C {
        GetType(): string;
        Populate($other?: any): GetCommonChatInfoLobby_C;
    }
    /**
     * 获取世界聊天信息返回
     */
    class GetCommonChatInfoLobby_S {
        /**
         * 聊天信息
         */
        info: CommonChatInfo[];
        /**
         * 自己的喇叭数目
         */
        horn: number;
        /**
         * 自己的状态，1：游客；2：其他
         */
        state: number;
        GetType(): string;
        Populate($other?: any): GetCommonChatInfoLobby_S;
    }
    /**
     * 房间属性
     */
    class roomPropObj {
        /**
         * 1:房间局数 3:人数模式 4:支付模式 5:游金倍数 101:鬼牌模式(0无鬼 1 2) 102:打捆(金华)
         */
        id: number;
        value: number;
        GetType(): string;
        Populate($other?: any): roomPropObj;
    }
    class RoomState {
        /**
         * 配置出牌倒计时
         */
        outCount: number;
        /**
         * 配置操作牌倒计时
         */
        opCount: number;
        /**
         * 进入房间id
         */
        roomId: number;
        /**
         * 玩家基础信息
         */
        userInfoSet: UserBaseInfo[];
        /**
         * 房间类型RoomType,0表示正常放假,1表示快速匹配场,2表示练习场
         */
        roomType: number;
        /**
         * 所有已准备玩家uid
         */
        prepareSet: number[];
        /**
         * 音效音乐等设置信息
         */
        setInfo: SetInfo;
        /**
         * 房间属性,带kv属性的
         */
        roomProps: roomPropObj[];
        /**
         * 玩法属性,只是开关类型的
         */
        props: number[];
        /**
         * 剩余解散房间的时间秒
         */
        dissoveTime: number;
        /**
         * 对赌类型 1:金币 2:钻石
         */
        gambletype: number;
        /**
         * 金币场底注
         */
        betchips: number;
        /**
         * 是否是暗杠, 1非暗杠 2暗杠
         */
        darkBar: number;
        /**
         * 金币场输赢上限
         */
        winLimit: number;
        /**
         * 进入房间matchId
         */
        matchId: number;
        /**
         * 底注
         */
        bottomPoint: number;
        /**
         * 入场
         */
        enteringPoint: number;
        /**
         * 离场
         */
        leavingPoint: number;
        /**
         * 最小匹配分
         */
        minMatchPoint: number;
        GetType(): string;
        Populate($other?: any): RoomState;
    }
    /**
     * 匹配组成员信息
     */
    class MatchGroupMemberInfo {
        uid: number;
        nickname: string;
        /**
         * 空或0表示游客,1表示白名单,2表示黑名单
         */
        type: number;
        /**
         * 状态,OnlineState
         */
        state: number;
        /**
         * 积分
         */
        score: number;
        /**
         * 申请加入时使用,冗余
         */
        matchId: number;
        /**
         * 头像url,茶馆要用
         */
        headUrl: string;
        /**
         * 输次
         */
        loseNum: number;
        /**
         * 赢次
         */
        winNum: number;
        /**
         * VIP等级
         */
        vip: number;
        /**
         * 当天大赢次
         */
        bigWinNum: number;
        /**
         * 总上桌次数
         */
        playNum: number;
        /**
         * 昨日积分
         */
        lastScore: number;
        /**
         * 上下分
         */
        matchPoint: number;
        /**
         * 成长属性,西安先用
         */
        growth: GrowthAttr;
        /**
         * 本周积分
         */
        scoreWeek: number;
        /**
         * 本月积分
         */
        scoreMon: number;
        /**
         * 总积分
         */
        scoreAll: number;
        /**
         * 备注
         */
        desc: string;
        /**
         * 微信联系方式
         */
        wechat: string;
        /**
         * 金豆场用
         */
        chips: number;
        /**
         * 总投注额
         */
        allBets: number;
        /**
         * 所在房间号,茶馆和比赛用
         */
        roomId: number;
        /**
         * 备注(sz使用)
         */
        note: string;
        /**
         * 税收贡献
         */
        tax: number;
        /**
         * 成员类型(sz使用) 1:群主 2:副群主 3:普通成员
         */
        membertype: number;
        GetType(): string;
        Populate($other?: any): MatchGroupMemberInfo;
    }
    /**
     * 匹配组房间信息
     */
    class MathGroupRoomInfo {
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 成员信息
         */
        list: MatchGroupMemberInfo[];
        /**
         * 开启时间unix sec
         */
        beginTime: number;
        /**
         * 结束时间unix sec
         */
        endTime: number;
        /**
         * 当前局数
         */
        curGameNbr: number;
        /**
         * 最大局数
         */
        gameNbr: number;
        /**
         * 游戏id
         */
        gameId: number;
        /**
         * 分享数据,ActiveCreateRoomCmd_C时用,山寨下
         */
        shareInfo: ShareInfo;
        /**
         * 当前房间内人数
         */
        curUserNbr: number;
        /**
         * 最大房间内人数
         */
        userNbr: number;
        /**
         * globalRoomId
         */
        gid: number;
        /**
         * 不填或0表示准备中,1表示已开局,2表示已结束
         */
        state: number;
        /**
         * 玩法描述
         */
        playTypeDesc: string;
        GetType(): string;
        Populate($other?: any): MathGroupRoomInfo;
    }
    /**
     * 分享信息
     */
    class ShareInfo {
        /**
         * 标题
         */
        title: string;
        /**
         * 内容
         */
        content: string;
        /**
         * 分享地址
         */
        webPageUrl: string;
        /**
         * 二维码
         */
        codeUrl: string;
        GetType(): string;
        Populate($other?: any): ShareInfo;
    }
    /**
     * 邮寄地址
     */
    class DeliverAddr {
        /**
         * 邮政编码,可不要
         */
        code: number;
        /**
         * 收件人姓名
         */
        name: string;
        /**
         * 收件人电话
         */
        phone: string;
        /**
         * 收件详细地址
         */
        addr: string;
        /**
         * 微信
         */
        wechat: string;
        /**
         * qq 2017.11.15好彩真人添加
         */
        qq: string;
        /**
         * 邮箱 2017.11.15好彩真人添加
         */
        mail: string;
        GetType(): string;
        Populate($other?: any): DeliverAddr;
    }
    class flowerObj {
        id: number;
        num: number;
        GetType(): string;
        Populate($other?: any): flowerObj;
    }
    class njU {
        /**
         * 当前分数
         */
        curP: number;
        /**
         * 南京麻将总点数
         */
        tolP: number;
        GetType(): string;
        Populate($other?: any): njU;
    }
    /**
     * 比赛场入场券相关
     */
    class ticketObj {
        /**
         * 入场券id
         */
        ticketId: number;
        /**
         * 场次id
         */
        playId: number;
        /**
         * 数量
         */
        count: number;
        GetType(): string;
        Populate($other?: any): ticketObj;
    }
    /**
     * 比赛场勋章相关
     */
    class medalObj {
        /**
         * 勋章id
         */
        medalId: number;
        /**
         * 数量
         */
        count: number;
        GetType(): string;
        Populate($other?: any): medalObj;
    }
    /**
     * 魅力值相关
     */
    class usercpObj {
        id: number;
        count: number;
        GetType(): string;
        Populate($other?: any): usercpObj;
    }
    /**
     * 聊天消息
     */
    class ChatInfo {
        /**
         * 聊天类型
         */
        chatType: number;
        /**
         * 文字/语音对应的文字
         */
        words: string;
        /**
         * 语音时长
         */
        time: string;
        /**
         * 语音对应地址
         */
        url: string;
        /**
         * 表情id
         */
        emojiId: number;
        /**
         * 发送者
         */
        fromUid: number;
        /**
         * 接收者
         */
        toUid: number;
        /**
         * 时间戳
         */
        sendTime: number;
        GetType(): string;
        Populate($other?: any): ChatInfo;
    }
    /**
     * 商品
     */
    class Goods {
        goodsId: number;
        goodsNum: number;
        GetType(): string;
        Populate($other?: any): Goods;
    }
    /**
     * 成长属性,让每个账号变的有成长性,可部分规避无门槛逃单问题
     */
    class GrowthAttr {
        /**
         * 本周上桌次数
         */
        playNumWeek: number;
        /**
         * 本月上桌次数
         */
        playNumMon: number;
        /**
         * 总上桌次数0-100新手,100-1000资深,...
         */
        playNumAll: number;
        /**
         * 本周获胜次数
         */
        winNumWeek: number;
        /**
         * 本月获胜次数
         */
        winNumMon: number;
        /**
         * 总获胜次数0-100新手,100-1000资深,...
         */
        winNumAll: number;
        /**
         * 本周获胜次数
         */
        bigWinNumWeek: number;
        /**
         * 本月获胜次数
         */
        bigWinNumMon: number;
        /**
         * 总获胜次数0-100新手,100-1000资深,...
         */
        bigWinNumAll: number;
        /**
         * 胜率winNumAll/playNumAll
         */
        winRate: number;
        /**
         * 本周上桌次数排名
         */
        playOrderWeek: number;
        /**
         * 本月上桌次数排名
         */
        playOrderMon: number;
        /**
         * 总上桌次数0-100新手,100-1000资深,...
         */
        playOrderAll: number;
        /**
         * 本周获胜次数排名
         */
        winOrderWeek: number;
        /**
         * 本月获胜次数排名
         */
        winOrderMon: number;
        /**
         * 总获胜次数0-100新手,100-1000资深,...
         */
        winOrderAll: number;
        /**
         * 本周获胜次数排名
         */
        bigWinOrderWeek: number;
        /**
         * 本月获胜次数排名
         */
        bigWinOrderMon: number;
        /**
         * 总获胜次数0-100新手,100-1000资深,...
         */
        bigWinOrderAll: number;
        /**
         * 商城积分
         */
        shopPoint: number;
        /**
         * 奖池积分
         */
        jackpot: number;
        GetType(): string;
        Populate($other?: any): GrowthAttr;
    }
    /**
     * 玩家充值信息
     */
    class RechargeInfo {
        /**
         * 累计充值
         */
        totalRecharge: number;
        /**
         * 月充值
         */
        monthRecharge: number;
        /**
         * 日充值
         */
        dayRecharge: number;
        GetType(): string;
        Populate($other?: any): RechargeInfo;
    }
    class RequestVideoRoomCmd_CS {
        uid: number;
        GetType(): string;
        Populate($other?: any): RequestVideoRoomCmd_CS;
    }
    /**
     * 视频聊天结果
     */
    class VideoRoomResultCmd_CS {
        uid: number;
        /**
         * 1.接受视频聊天  2.关闭视频聊天
         */
        code: number;
        GetType(): string;
        Populate($other?: any): VideoRoomResultCmd_CS;
    }
    /**
     * 系统弹框消息,目前用来控制版本,其他地方也可以用
     */
    class MessageBoxLobbyCmd_S {
        /**
         * 弹窗类型,1表示重启系统框
         */
        type: number;
        /**
         * 弹框内容
         */
        desc: string;
        /**
         * 标题
         */
        title: string;
        /**
         * 按钮,不填默认就是确定
         */
        btn1: string;
        /**
         * 按钮,不填就没有
         */
        btn2: string;
        /**
         * 按钮,不填就没有
         */
        btn3: string;
        GetType(): string;
        Populate($other?: any): MessageBoxLobbyCmd_S;
    }
    /**
     * 拥有的时效性道具
     */
    class TimeGoods {
        /**
         * 对应道具表的id (玩家购买后对应的道具id)
         */
        id: number;
        /**
         * 剩余的有效天数
         */
        timeDay: number;
        /**
         * 过期时间戳(秒级的)
         */
        outTime: number;
        /**
         * 对应商城表的id (2018.03.15) 之后的购买全部使用这个字段
         */
        shopId: number;
        GetType(): string;
        Populate($other?: any): TimeGoods;
    }
    /**
     * 正在使用个人形象
     */
    class PersonalImage {
        /**
         * 1头像框(暂时只有头像框)
         */
        typ: number;
        /**
         * 0不使用 1购买道具 2vip特有
         */
        optyp: number;
        /**
         * 购买道具对应的id
         */
        id: number;
        /**
         * vip特有对应的vip等级
         */
        vip: number;
        GetType(): string;
        Populate($other?: any): PersonalImage;
    }
    /**
     * 玩家所拥有的充值优惠 (2018.03.16好彩金币场系列需求)
     */
    class RechargeDiscounts {
        /**
         * 商品Id
         */
        shopId: number;
        /**
         * 优惠加成 rate=1就相当于在基础上再加送1份
         */
        rate: number;
        GetType(): string;
        Populate($other?: any): RechargeDiscounts;
    }
    class SubGameInfo {
        /**
         * 游戏id
         */
        gameId: number;
        /**
         * 总局数
         */
        totalRound: number;
        /**
         * 胜率
         */
        winRate: number;
        /**
         * 连赢局数
         */
        winStreak: number;
        /**
         * 单局赢取金币
         */
        winChips: number;
        GetType(): string;
        Populate($other?: any): SubGameInfo;
    }
    class CharmInfo {
        giftNum: number;
        giftsId: number;
        GetType(): string;
        Populate($other?: any): CharmInfo;
    }
    /**
     * 基础数据
     */
    class UserBaseInfo {
        uid: number;
        headurl: string;
        nickname: string;
        gender: string;
        /**
         * 房卡模式 zoneType=2
         */
        card: number;
        /**
         * 钻石模式 zoneType=4
         */
        diamond: number;
        platId: number;
        subPlatId: string;
        ip: string;
        /**
         * 上级代理 如果没有返回0
         */
        parent: number;
        vip: number;
        /**
         * 积分
         */
        points: number;
        seatId: number;
        /**
         * 为了方便放这里,在线状态OnlineState
         */
        onlineState: number;
        /**
         * 为了方便放这里,准备状态
         */
        bReady: number;
        /**
         * 为了方便放这里,当前立着的手牌数量
         */
        handCardNum: number;
        flower: flowerObj[];
        nickName: string;
        headUrl: string;
        /**
         * uid的索引
         */
        sid: number;
        /**
         * 纬度
         */
        lat: number;
        /**
         * 经度
         */
        lng: number;
        /**
         * 南京麻将使用下注
         */
        nju: njU;
        /**
         * 金币
         */
        chips: number;
        /**
         * 入场券
         */
        ticket: ticketObj[];
        /**
         * 勋章
         */
        medal: medalObj[];
        /**
         * 单局飘分
         */
        multiPiao: number;
        /**
         * 个性签名
         */
        signature: string;
        /**
         * 是否是新玩家 0:不是 1:是
         */
        isNew: number;
        /**
         * 游戏局数
         */
        playNum: number;
        /**
         * 保险箱的钱数 金币
         */
        bankMoney: number;
        /**
         * 是否修改过昵称 1:修改过(好彩真人的需求)
         */
        isChangeName: number;
        /**
         * 魅力值(好彩真人)
         */
        usercp: number;
        /**
         * 魅力值的具体信息(好彩真人)
         */
        usercpObj: usercpObj[];
        /**
         * 是否为好友 1:是好友(请求其他用户信息的标志，好彩真人的需求)
         */
        isFriend: number;
        /**
         * 奖券
         */
        giftCoupon: number;
        /**
         * 最后一条聊天记录(好彩真人好友系统使用)
         */
        lastMsg: ChatInfo;
        /**
         * 礼品券(好彩真人麻将,金币场赢家有几率获得)
         */
        giftVoucher: number;
        /**
         * 手机号(好彩真人麻将,为nil表示未绑定)
         */
        phonenumber: string;
        /**
         * 特殊分
         */
        specialpoints: number;
        /**
         * 赢三张头衔
         */
        title: string;
        /**
         * 赢三张喇叭(好彩金币系列也使用这个字段表示喇叭 2018.03.23)
         */
        horn: number;
        /**
         * 地理位置信息
         */
        loc: string;
        /**
         * 成长属性,西安先用
         */
        growth: GrowthAttr;
        /**
         * 玩家充值
         */
        recharge: RechargeInfo;
        /**
         * 正在使用的个人形象 2017.11.15好彩真人需求
         */
        personalImage: PersonalImage[];
        /**
         * 玩家所拥有的优惠商品 2018.03.16好彩需求
         */
        discounts: RechargeDiscounts[];
        /**
         * 保险箱 钻石
         */
        bankDiamond: number;
        /**
         * 金币
         */
        remainder: number;
        charmInfo: CharmInfo[];
        /**
         * 子游戏信息
         */
        subGameInfo: SubGameInfo[];
        /**
         * 总魅力值
         */
        charm: number;
        /**
         * 详细地址
         */
        address: string;
        /**
         * 是否显示yy渠道的实名认证按钮
         */
        isAnti: boolean;
        /**
         * 是否好彩代理商
         */
        haocaiAgent: boolean;
        /**
         * 炸弹数量
         */
        bomb: number;
        GetType(): string;
        Populate($other?: any): UserBaseInfo;
    }
    /**
     * 修改玩家信息
     */
    class UserBaseInfoUpdateCmd_C {
        baseInfo: UserBaseInfo;
        GetType(): string;
        Populate($other?: any): UserBaseInfoUpdateCmd_C;
    }
    /**
     * 请求解散房间
     */
    class RequestDissolveRoom_C {
        GetType(): string;
        Populate($other?: any): RequestDissolveRoom_C;
    }
    class RequestDissolveRoom_S {
        resultCode: number;
        desc: string;
        /**
         * 在线玩家人数
         */
        userNum: number;
        GetType(): string;
        Populate($other?: any): RequestDissolveRoom_S;
    }
    class RequestDissolveRoom_Brd {
        /**
         * 请求解散房间的玩家uid
         */
        uid: number;
        /**
         * 等待倒计时
         */
        waitTime: number;
        GetType(): string;
        Populate($other?: any): RequestDissolveRoom_Brd;
    }
    /**
     * 回应解散房间
     */
    class ReplyDissolveRoom_C {
        /**
         * 1表示同意
         */
        isAgree: number;
        GetType(): string;
        Populate($other?: any): ReplyDissolveRoom_C;
    }
    class ReplyDissolveRoom_S {
        resultCode: number;
        desc: string;
        GetType(): string;
        Populate($other?: any): ReplyDissolveRoom_S;
    }
    class ReplyDissolveRoom_Brd {
        uid: number;
        /**
         * 1表示同意
         */
        isAgree: number;
        GetType(): string;
        Populate($other?: any): ReplyDissolveRoom_Brd;
    }
    /**
     * 成功解散房间
     */
    class SuccessDissolveRoom_Brd {
        /**
         * 所有同意解散的玩家昵称
         */
        agreeUsers: string[];
        /**
         * 所有不同意解散的玩家称
         */
        disagreeUsers: string[];
        /**
         * 是否解散成功
         */
        bOk: boolean;
        GetType(): string;
        Populate($other?: any): SuccessDissolveRoom_Brd;
    }
    /**
     * 主动上报客户端IP
     */
    class ClientIpCmd_C {
        ip: number;
        port: number;
        /**
         * 127.0.0.1
         */
        ipstr: string;
        /**
         * 127.0.0.1:1000
         */
        ipport: string;
        GetType(): string;
        Populate($other?: any): ClientIpCmd_C;
    }
    /**
     * 通知前端上发获取经度纬度
     */
    class GetGPSLocationCmd_S {
        GetType(): string;
        Populate($other?: any): GetGPSLocationCmd_S;
    }
    /**
     * gps获取经度纬度
     */
    class GetGPSLocationCmd_C {
        /**
         * 纬度
         */
        lat: number;
        /**
         * 经度
         */
        lng: number;
        /**
         * 详细地址
         */
        address: string;
        GetType(): string;
        Populate($other?: any): GetGPSLocationCmd_C;
    }
    /**
     * gps获取经度纬度广播
     */
    class GetGPSLocationCmd_Brd {
        /**
         * 玩家id
         */
        uid: number;
        /**
         * 纬度
         */
        lat: number;
        /**
         * 经度
         */
        lng: number;
        /**
         * 详细地址
         */
        address: number;
        GetType(): string;
        Populate($other?: any): GetGPSLocationCmd_Brd;
    }
    class IpGPS {
        /**
         * 玩家id
         */
        uid: number;
        /**
         * 纬度
         */
        lat: number;
        /**
         * 经度
         */
        lng: number;
        ip: number;
        /**
         * 127.0.0.1
         */
        ipstr: string;
        GetType(): string;
        Populate($other?: any): IpGPS;
    }
    /**
     * 请求ip和gps获取经度纬度
     */
    class RequestIpGPSCmd_C {
        /**
         * 房间id,默认不填就是请求自己的
         */
        roomId: number;
        GetType(): string;
        Populate($other?: any): RequestIpGPSCmd_C;
    }
    /**
     * 返回ip和gps获取经度纬度
     */
    class ReturnIpAndGPSCmd_S {
        /**
         * 位置信息
         */
        list: IpGPS[];
        GetType(): string;
        Populate($other?: any): ReturnIpAndGPSCmd_S;
    }
    class JsonCompressKey {
        key: string;
        /**
         * 嵌套描述
         */
        json: JsonCompressKey[];
        GetType(): string;
        Populate($other?: any): JsonCompressKey;
    }
    /**
     * json压缩约定消息
     */
    class JsonCompressNullUserPmd_CS {
        key: string;
        json: JsonCompressKey[];
        /**
         * 0表示不省略,1表示省略,默认不省略,default省略,{} ,&quot;&quot;,0
         */
        omit: number;
        /**
         * 0表示重置,1表示添加
         */
        add: number;
        /**
         * 消息列表
         */
        msglist: string[];
        GetType(): string;
        Populate($other?: any): JsonCompressNullUserPmd_CS;
    }
    /**
     * 语音聊天
     */
    class VoiceChat_C {
        /**
         * 语音时长
         */
        time: string;
        /**
         * 对应文字
         */
        words: string;
        /**
         * 对应地址
         */
        url: string;
        roomId: number;
        GetType(): string;
        Populate($other?: any): VoiceChat_C;
    }
    class VoiceChat_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        GetType(): string;
        Populate($other?: any): VoiceChat_S;
    }
    class VoiceChat_Brd {
        /**
         * 语音时长
         */
        time: string;
        /**
         * 对应文字
         */
        words: string;
        /**
         * 对应地址
         */
        url: string;
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 发送语音的玩家id
         */
        uid: number;
        GetType(): string;
        Populate($other?: any): VoiceChat_Brd;
    }
    class VoiceObj {
        /**
         * 语音时长
         */
        time: string;
        /**
         * 对应文字
         */
        words: string;
        /**
         * 对应地址
         */
        url: string;
        /**
         * 发送聊天的玩家id
         */
        uid: number;
        /**
         * 发送聊天时的时间
         */
        timestamp: string;
        GetType(): string;
        Populate($other?: any): VoiceObj;
    }
    /**
     * 语音记录
     */
    class VoiceChatRecord_C {
        GetType(): string;
        Populate($other?: any): VoiceChatRecord_C;
    }
    class VoiceChatRecord_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        /**
         * 语音记录
         */
        records: VoiceObj[];
        GetType(): string;
        Populate($other?: any): VoiceChatRecord_S;
    }
    class CommonChat_C {
        /**
         * 语音id
         */
        voiceId: number;
        /**
         * 文字聊天内容
         */
        words: string;
        roomId: number;
        GetType(): string;
        Populate($other?: any): CommonChat_C;
    }
    class CommonChat_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        GetType(): string;
        Populate($other?: any): CommonChat_S;
    }
    class CommonChat_Brd {
        /**
         * 语音id
         */
        voiceId: number;
        /**
         * 发送语音的玩家id
         */
        uid: number;
        /**
         * 文字聊天内容
         */
        words: string;
        GetType(): string;
        Populate($other?: any): CommonChat_Brd;
    }
    class SetInfo {
        /**
         * 音效 false:关 true:开
         */
        sound: boolean;
        /**
         * 音乐 false:关 true:开
         */
        music: boolean;
        /**
         * 音控 false:关 true:开
         */
        control: boolean;
        /**
         * 方言 1:普能话 2:龙岩话
         */
        dialect: number;
        GetType(): string;
        Populate($other?: any): SetInfo;
    }
    /**
     * 音效音乐设置
     */
    class SoundSet_C {
        /**
         * 音效音乐等设置信息
         */
        setInfo: SetInfo;
        GetType(): string;
        Populate($other?: any): SoundSet_C;
    }
    /**
     * 获取玩家头像
     */
    class GetUserHeadList_C {
        /**
         * 玩家id
         */
        uid: number;
        /**
         * 玩家id
         */
        uidList: number[];
        GetType(): string;
        Populate($other?: any): GetUserHeadList_C;
    }
    class UserHead {
        /**
         * 玩家id
         */
        uid: number;
        headUrl: string;
        GetType(): string;
        Populate($other?: any): UserHead;
    }
    class GetUserHeadList_S {
        /**
         * 玩家列表
         */
        headList: UserHead[];
        GetType(): string;
        Populate($other?: any): GetUserHeadList_S;
    }
    /**
     * 获取玩家列表信息
     */
    class GetUserList_C {
        GetType(): string;
        Populate($other?: any): GetUserList_C;
    }
    class GetUserList_S {
        /**
         * 玩家列表
         */
        userSet: UserBaseInfo[];
        GetType(): string;
        Populate($other?: any): GetUserList_S;
    }
    /**
     * 请求玩家面板信息
     */
    class GetPersonalPanel_C {
        /**
         * 玩家id
         */
        uid: number;
        GetType(): string;
        Populate($other?: any): GetPersonalPanel_C;
    }
    class GetPersonalPanel_S {
        /**
         * 玩家基本信息
         */
        userInfo: UserBaseInfo;
        resultCode: number;
        GetType(): string;
        Populate($other?: any): GetPersonalPanel_S;
    }
    /**
     * 通知客户端可以显示准备按钮
     */
    class ShowPrepareBtnRoom_S {
        GetType(): string;
        Populate($other?: any): ShowPrepareBtnRoom_S;
    }
    /**
     * 通知客户端可以显示提前开始按钮了
     */
    class ShowChangeUserNbrRoom_S {
        GetType(): string;
        Populate($other?: any): ShowChangeUserNbrRoom_S;
    }
    /**
     * 请求切换房间人数
     */
    class RequestChangeUserNbrRoom_C {
        resultCode: number;
        desc: string;
        GetType(): string;
        Populate($other?: any): RequestChangeUserNbrRoom_C;
    }
    /**
     * 请求切换房间人数
     */
    class RequestChangeUserNbrRoom_Brd {
        uid: number;
        /**
         * 目标人数
         */
        userNbr: number;
        resultCode: number;
        desc: string;
        GetType(): string;
        Populate($other?: any): RequestChangeUserNbrRoom_Brd;
    }
    class ReturnChangeUserNbrRoom_C {
        /**
         * 1表示同意
         */
        isAgree: number;
        /**
         * 目标人数
         */
        userNbr: number;
        resultCode: number;
        desc: string;
        GetType(): string;
        Populate($other?: any): ReturnChangeUserNbrRoom_C;
    }
    class ReturnChangeUserNbrRoom_Brd {
        uid: number;
        /**
         * 1表示同意 没有及不同意
         */
        isAgree: number;
        GetType(): string;
        Populate($other?: any): ReturnChangeUserNbrRoom_Brd;
    }
    /**
     * 请求刷新座位积分
     */
    class UpdatePointSeatRoom_S {
        uid: number;
        /**
         * 可能是积分,金币或者钻石
         */
        point: number;
        GetType(): string;
        Populate($other?: any): UpdatePointSeatRoom_S;
    }
    /**
     * 请求换坐
     */
    class RequestChangeSeatRoom_C {
        seatid: number;
        GetType(): string;
        Populate($other?: any): RequestChangeSeatRoom_C;
    }
    /**
     * 请求换坐给对方客户端
     */
    class RequestChangeSeatRoom_S {
        /**
         * 玩家id
         */
        fromuid: number;
        GetType(): string;
        Populate($other?: any): RequestChangeSeatRoom_S;
    }
    /**
     * 对方回应,成功后直接操作
     */
    class ReturnChangeSeatRoom_C {
        /**
         * 玩家id
         */
        fromuid: number;
        /**
         * 1表示同意
         */
        isAgree: number;
        GetType(): string;
        Populate($other?: any): ReturnChangeSeatRoom_C;
    }
    /**
     * 百人场//
     *  庄家配置
     */
    class bankerConfig {
        selectChips: number[];
        lowestBankerChips: number;
        GetType(): string;
        Populate($other?: any): bankerConfig;
    }
    /**
     * 房间信息
     */
    class RoomInfo {
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 玩家人数上限
         */
        maxUser: number;
        /**
         * 房间名称
         */
        roomName: string;
        /**
         * 最低携带
         */
        lowestCarry: number;
        /**
         * 最低下注
         */
        lowestBet: number;
        /**
         * 桌子最多可以坐的人数
         */
        maxSeat: number;
        /**
         * 最少申请上庄金币
         */
        bankerConfig: bankerConfig;
        /**
         * 开房玩家uid
         */
        ownerId: number;
        /**
         * 房间配置
         */
        roomCfg: RoomCfg;
        /**
         * 玩家信息
         */
        userInfo: UserInfo[];
        /**
         * 底分
         */
        basePoint: number;
        /**
         * 准备倒计时(毫秒)
         */
        readyTime: number;
        /**
         * 对赌类型(1金币 2钻石)
         */
        gambletype: number;
        /**
         * 房间类型(1匹配房 2好友房)
         */
        roomtype: number;
        GetType(): string;
        Populate($other?: any): RoomInfo;
    }
    /**
     * 用户信息
     */
    class UserInfo {
        uid: number;
        /**
         * 头像
         */
        headUrl: string;
        /**
         * 昵称
         */
        nickName: string;
        /**
         * 如果为0就是站着
         */
        seatId: number;
        /**
         * 性别
         */
        gender: string;
        ip: string;
        /**
         * 在线状态OnlineState
         */
        onlineState: number;
        /**
         * 钻石
         */
        diamond: number;
        /**
         * 积分
         */
        points: number;
        /**
         * 是否准备
         */
        bReady: boolean;
        /**
         * 地理位置
         */
        location: string;
        GetType(): string;
        Populate($other?: any): UserInfo;
    }
    /**
     * 房间配置
     */
    class RoomCfg {
        /**
         * 最大人数
         */
        maxPlayer: number;
        /**
         * 游戏局数
         */
        roundNum: number;
        /**
         * 定庄方式(大吃小、房主坐庄、抢庄)
         */
        bankerType: BankerType;
        /**
         * 最小牌型倍率(点两倍、8点两倍)
         */
        basePokerType: PokerTupleType;
        /**
         * 爆玖
         */
        bBaojiu: boolean;
        /**
         * 公牌大小王
         */
        bJoker: boolean;
        /**
         * 庄吃闲
         */
        bBankerWin: boolean;
        /**
         * 所有能下注的点数
         */
        betPoint: number[];
        /**
         * 下注倍率
         */
        betTimes: number;
        GetType(): string;
        Populate($other?: any): RoomCfg;
    }
    /**
     * +
     */
    class RankInfo {
        /**
         * 玩家id
         */
        uid: number;
        /**
         * 玩家昵称
         */
        nickname: string;
        /**
         * 头像地址
         */
        headUrl: string;
        /**
         * 排行值
         */
        point: number;
        /**
         * 玩家上一局输
         */
        profit: number;
        /**
         * 玩家总成绩
         */
        totalProfit: number;
        GetType(): string;
        Populate($other?: any): RankInfo;
    }
    /**
     * 请求排行榜
     */
    class GetRankingListRoomCmd_C {
        GetType(): string;
        Populate($other?: any): GetRankingListRoomCmd_C;
    }
    class GetRankingListRoomCmd_S {
        /**
         * 返回码
         */
        resultCode: number;
        /**
         * 信息
         */
        desc: string;
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 排行榜数据
         */
        rankInfo: RankInfo[];
        GetType(): string;
        Populate($other?: any): GetRankingListRoomCmd_S;
    }
    /**
     * 排行榜广播
     */
    class GetRankingListRoomCmd_Brd {
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 排行榜数据
         */
        rankInfo: RankInfo[];
        GetType(): string;
        Populate($other?: any): GetRankingListRoomCmd_Brd;
    }
    /**
     *  C-&gt;S 托管请求
     *  S-&gt;C 托管状态更新
     */
    class HostUpdateRoomCmd_CS {
        yesOrNo: boolean;
        uid: number;
        opList: number[];
        /**
         * 0表示取消托管,1表示普通托管,2表示高智商托管
         */
        hostType: number;
        GetType(): string;
        Populate($other?: any): HostUpdateRoomCmd_CS;
    }
    /**
     *  Echo应答,服务器探测玩家是否活着
     *  TODO,还未使用,待升级
     */
    class ServerEchoRoomCmd_SC {
        /**
         * echo标志
         */
        id: number;
        /**
         * echo描述,原封不动返回
         */
        desc: string;
        GetType(): string;
        Populate($other?: any): ServerEchoRoomCmd_SC;
    }
    /**
     *  Echo应答,客户端探测服务器
     *  TODO,还未使用,待升级
     */
    class ClientEchoRoomCmd_SC {
        /**
         * echo标志
         */
        id: number;
        /**
         * echo描述,原封不动返回
         */
        desc: string;
        GetType(): string;
        Populate($other?: any): ClientEchoRoomCmd_SC;
    }
    /**
     * 在线状态更新
     */
    class OnlineStateRoomCmd_S {
        uid: number;
        state: OnlineState;
        GetType(): string;
        Populate($other?: any): OnlineStateRoomCmd_S;
    }
    /**
     *  C-&gt;S 离开房间请求
     *  S-&gt;C 离开房间通知
     */
    class LeaveRoomCmd_CS {
        uid: number;
        roomId: number;
        GetType(): string;
        Populate($other?: any): LeaveRoomCmd_CS;
    }
    /**
     *  C-&gt;S 准备/取消准备请求
     *  S-&gt;C 更新准备状态
     */
    class ReadyUpdateRoomCmd_CS {
        yesOrNo: boolean;
        uid: number;
        GetType(): string;
        Populate($other?: any): ReadyUpdateRoomCmd_CS;
    }
    /**
     * 系统通知
     */
    class SysMessageCmd_S {
        msgType: SysMessageCmd_S.MsgType;
        /**
         * 文本
         */
        msg: string;
        code: number;
        GetType(): string;
        Populate($other?: any): SysMessageCmd_S;
    }
    module SysMessageCmd_S {
        enum MsgType {
            /**
             * 文本消息
             */
            Text = 1,
            /**
             * 解散房间
             */
            DissolveRoom = 2,
            /**
             * 返回到大厅
             */
            BackToLobby = 3,
            /**
             * 提前开局
             */
            StartInAdvance = 4,
            /**
             * 弹框
             */
            Bounce = 5,
            /**
             * 余额不足
             */
            NotEnoughMoney = 6,
            /**
             * 创建房间成功
             */
            CreateRoom = 7,
            /**
             * 重新进入大厅
             */
            EnterLobby = 8,
        }
    }
    /**
     *  C-&gt;S 查询服务器当前逻辑时间
     *  S-&gt;C 服务器当前逻辑时间
     */
    class GameTimeSyncCmd_CS {
        /**
         * unix时间戳
         */
        stamp: number;
        GetType(): string;
        Populate($other?: any): GameTimeSyncCmd_CS;
    }
    /**
     * 请求更换房间消息
     */
    class ChangeRoomCmd_C {
        GetType(): string;
        Populate($other?: any): ChangeRoomCmd_C;
    }
    /**
     * 换座
     */
    class ChangeSeatRoomCmd_C {
        /**
         * 目标座位
         */
        pos: number;
        GetType(): string;
        Populate($other?: any): ChangeSeatRoomCmd_C;
    }
    /**
     * +
     */
    class GiftsInfo {
        /**
         * 发送玩家Id
         */
        fromUid: number;
        /**
         * 接收玩家Id
         */
        toUid: number;
        /**
         * 礼物Id
         */
        giftsId: number;
        /**
         * 礼物数量
         */
        giftsNum: number;
        GetType(): string;
        Populate($other?: any): GiftsInfo;
    }
    /**
     * 送礼
     */
    class SendGiftRoomCmd_C {
        /**
         * 礼物内容
         */
        gift: GiftsInfo;
        roomId: number;
        GetType(): string;
        Populate($other?: any): SendGiftRoomCmd_C;
    }
    class SendGiftRoomCmd_S {
        resultCode: number;
        gift: GiftsInfo;
        GetType(): string;
        Populate($other?: any): SendGiftRoomCmd_S;
    }
    class SendGiftRoomCmd_Brd {
        /**
         * 送礼玩家
         */
        gift: GiftsInfo;
        /**
         * 玩家剩余钻石
         */
        diamond: number[];
        GetType(): string;
        Populate($other?: any): SendGiftRoomCmd_Brd;
    }
    /**
     * 大厅送礼 客户端大厅相同的协议会有问题
     */
    class SendGiftLobbyCmd_C {
        /**
         * 礼物内容
         */
        gift: GiftsInfo;
        GetType(): string;
        Populate($other?: any): SendGiftLobbyCmd_C;
    }
    class SendGiftLobbyCmd_S {
        resultCode: number;
        gift: GiftsInfo;
        userInfo: UserBaseInfo;
        GetType(): string;
        Populate($other?: any): SendGiftLobbyCmd_S;
    }
    /**
     * 离开房间
     */
    class LeaveRoomCmd_C {
        /**
         * 离开状态 0 返回大厅 1 暂时离开 2 断线
         */
        state: number;
        /**
         * 玩家roodid
         */
        roomId: number;
        GetType(): string;
        Populate($other?: any): LeaveRoomCmd_C;
    }
    class LeaveRoomCmd_S {
        resultCode: number;
        /**
         * 返回码
         */
        ret: number;
        desc: string;
        isOutRoom: boolean;
        GetType(): string;
        Populate($other?: any): LeaveRoomCmd_S;
    }
    /**
     * 广播玩家离开房间
     */
    class LeaveRoomCmd_Brd {
        resultCode: number;
        desc: string;
        uid: number;
        state: number;
        /**
         * 房间id
         */
        roomId: number;
        /**
         * 玩家座位
         */
        seatId: number;
        GetType(): string;
        Populate($other?: any): LeaveRoomCmd_Brd;
    }
    /**
     * 认输
     */
    class GiveupRoomCmd_C {
        /**
         * 认输数量,认输时需要输入认输数量
         */
        num: number;
        GetType(): string;
        Populate($other?: any): GiveupRoomCmd_C;
    }
    /**
     *  发起视频聊天
     *  C-&gt;S 请求视频聊天
     *  S-&gt;C 请求视频聊天通知
     */
    class VideoChatRequestCmd_CS {
        uid: number;
        GetType(): string;
        Populate($other?: any): VideoChatRequestCmd_CS;
    }
    /**
     *  C-&gt;S 请求视频聊天回复请求
     *  S-&gt;C 请求视频聊天回复通知
     */
    class VideoChatReturnCmd_CS {
        uid: number;
        /**
         * 是否接受
         */
        result: boolean;
        GetType(): string;
        Populate($other?: any): VideoChatReturnCmd_CS;
    }
    /**
     *  C-&gt;S 视频聊天关闭请求
     *  S-&gt;C 视频聊天关闭通知
     */
    class VideoChatShutdownCmd_CS {
        uid: number;
        GetType(): string;
        Populate($other?: any): VideoChatShutdownCmd_CS;
    }
    /**
     * 玩法数据
     */
    class Playing {
        id: Playing.PlayId;
        value: number;
        GetType(): string;
        Populate($other?: any): Playing;
    }
    module Playing {
        /**
         * 玩法id
         */
        enum PlayId {
            /**
             * 小盲
             */
            Smallblind = 1,
            /**
             * 牌局规则 1 普通局 2 SNG
             */
            Regulation = 2,
            /**
             * 座位数
             */
            SeatNum = 3,
            /**
             * 前注
             */
            Ante = 4,
            /**
             * 升盲速度
             */
            BlindLength = 5,
            /**
             * 初始盲注
             */
            StartChips = 6,
            /**
             * 速度
             */
            Speed = 7,
            /**
             * 时长
             */
            Duration = 8,
            /**
             * 俱乐部id, 代表从俱乐部创建的牌局
             */
            ClubId = 9,
            /**
             * 报名费
             */
            EntryFee = 10,
            /**
             * 强制盲注
             */
            ForceBlind = 10447,
            /**
             * 控制带入
             */
            ControlEntry = 10448,
            /**
             * 保险
             */
            Insurance = 10449,
            GPS = 96,
            /**
             * 相同ip不可进入
             */
            IPEnter = 100,
            /**
             * 控制玩家报名
             */
            ControlSignUp = 10489,
            /**
             * 文本聊天
             */
            TextChat = 10490,
            /**
             * 语言聊天
             */
            VoiceChat = 10491,
            /**
             * 捐献金比例
             */
            ContributionRate = 10561,
        }
    }
    class TexasConfig {
        /**
         * 房间名称
         */
        name: string;
        roomId: number;
        /**
         * 房间唯一id
         */
        globalRoomId: number;
        /**
         * 创建时间
         */
        createdAt: number;
        /**
         * 奖金 废弃
         */
        prize: number[];
        /**
         * 报名人
         */
        signList: UserBaseInfo[];
        /**
         * 涨盲
         */
        blindLine: number[];
        /**
         * 人数
         */
        userNum: number;
        owner: UserBaseInfo;
        /**
         * 是否开始
         */
        isStart: boolean;
        clubName: string;
        /**
         * 玩法列表
         */
        playList: Playing[];
        /**
         * 盲注等级
         */
        blineLevel: number;
        leftSec: number;
        /**
         * 表格id
         */
        tableId: number;
        /**
         * 名义上的奖金
         */
        prizeNameList: number[];
        /**
         * 实际获得的奖金
         */
        prizeGiveList: number[];
        GetType(): string;
        Populate($other?: any): TexasConfig;
    }
    /**
     * 聊天消息内容
     */
    class ChatMessageInfo {
        /**
         * 文本/表情/语音url
         */
        msg: string;
        /**
         * 聊天内容类型
         */
        msgType: ChatMessageInfo.MsgType;
        /**
         * 时间
         */
        time: number;
        /**
         * 语音时长
         */
        voiceTime: number;
        /**
         * 发言人ID
         */
        speakerUid: number;
        /**
         * 发言人名字
         */
        speakerName: string;
        /**
         * 发言人头像
         */
        speakerHeadUrl: string;
        /**
         * 频道ID
         */
        channelId: number;
        /**
         * 好友ID
         */
        friendUid: number;
        /**
         * 频道类型
         */
        channelType: ChatMessageInfo.ChannelType;
        GetType(): string;
        Populate($other?: any): ChatMessageInfo;
    }
    module ChatMessageInfo {
        /**
         * 聊天内容类型
         */
        enum MsgType {
            /**
             * 文本
             */
            Text = 1,
            /**
             * 语音
             */
            Voice = 2,
            /**
             * 表情
             */
            Face = 3,
            /**
             * 德州扑克创建房间信息
             */
            TexasConfig = 4,
        }
    }
    module ChatMessageInfo {
        /**
         * 聊天频道
         */
        enum ChannelType {
            /**
             * 房间
             */
            Room = 1,
            /**
             * 俱乐部
             */
            Club = 2,
            /**
             * 两个好友聊天
             */
            Friend = 3,
        }
    }
    /**
     *  C-&gt;S 聊天消息
     *  S-&gt;C 聊天消息
     */
    class ChatCmd_CS {
        chat: ChatMessageInfo;
        chatList: ChatMessageInfo[];
        GetType(): string;
        Populate($other?: any): ChatCmd_CS;
    }
    /**
     * 撤回一张牌,回放用
     */
    class RecallOneCardMahjongCmd_S {
        uid: number;
        /**
         * 撤回的牌
         */
        thisId: number;
        GetType(): string;
        Populate($other?: any): RecallOneCardMahjongCmd_S;
    }
    /**
     * 地址
     */
    class Address {
        /**
         * 国家
         */
        country: string;
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        GetType(): string;
        Populate($other?: any): Address;
    }
    class ClubInfo {
        clubId: number;
        /**
         * 地址
         */
        address: Address;
        name: string;
        memberList: ClubInfo.Member[];
        /**
         * 创建者
         */
        founder: number;
        /**
         * 创建时间
         */
        createdAt: number;
        /**
         * 签名
         */
        signature: string;
        /**
         * 成员人数上限
         */
        memberLimit: number;
        /**
         * 人数
         */
        memberNum: number;
        /**
         * 俱乐部头像
         */
        headurl: string;
        /**
         * 创建者信息
         */
        founderInfo: UserBaseInfo;
        /**
         * 公告
         */
        announcement: string;
        /**
         * 职位权限
         */
        postPermission: ClubInfo.PostPermission[];
        /**
         * 基金
         */
        fund: number;
        myMember: ClubInfo.Member;
        GetType(): string;
        Populate($other?: any): ClubInfo;
    }
    module ClubInfo {
        /**
         * 权限
         */
        enum Permission {
            /**
             * 开局
             */
            CreateRoom = 1,
            /**
             * 审核成员申请
             */
            MemeberJoin = 2,
            /**
             * 查看报表
             */
            CheckReport = 3,
        }
    }
    module ClubInfo {
        /**
         * 职位
         */
        enum Post {
            Man = 1000,
            Admin = 2000,
            Founder = 3000,
        }
    }
    module ClubInfo {
        /**
         * 成员
         */
        class Member {
            user: UserBaseInfo;
            /**
             * 职位
             */
            post: ClubInfo.Post;
            clubId: number;
            /**
             * 消息
             */
            msg: string;
            /**
             * 筹码
             */
            chips: number;
            /**
             * 总利润
             */
            profit: number;
            /**
             * 捐献金
             */
            contribution: number;
            /**
             * 手数
             */
            hand: number;
            /**
             * 创建时间
             */
            createdAt: number;
            /**
             * 战绩
             */
            statistics: StatisticsRoundData;
            GetType(): string;
            Populate($other?: any): Member;
        }
    }
    module ClubInfo {
        /**
         * 职位所拥有的权限
         */
        class PostPermission {
            post: ClubInfo.Post;
            permission: ClubInfo.Permission[];
            GetType(): string;
            Populate($other?: any): PostPermission;
        }
    }
    module ClubInfo {
        /**
         * 转账
         */
        class Transition {
            id: number;
            /**
             * 申请人
             */
            user: UserBaseInfo;
            /**
             * 数量
             */
            num: number;
            /**
             * true 转进 false 转出
             */
            inOrOut: boolean;
            /**
             * 申请时间
             */
            createdAt: number;
            clubId: number;
            /**
             * 0 未处理 1 同意 2 不同意
             */
            deal: number;
            /**
             * 审核人
             */
            dealer: UserBaseInfo;
            GetType(): string;
            Populate($other?: any): Transition;
        }
    }
    /**
     * 分页
     */
    class Page {
        /**
         * 第几页
         */
        current: number;
        /**
         * 每页的数量
         */
        num: number;
        GetType(): string;
        Populate($other?: any): Page;
    }
    /**
     * 数据更新通知
     */
    class DataUpdateNotifyCmd_S {
        update: MsgType;
        clubId: number;
        GetType(): string;
        Populate($other?: any): DataUpdateNotifyCmd_S;
    }
    /**
     * 玩家牌局押注数据
     */
    class StatisticsRoundData {
        uid: number;
        /**
         * 多长时间内
         */
        days: number;
        /**
         * 玩法 废弃
         */
        play: number;
        user: UserBaseInfo;
        /**
         * 牌局规则
         */
        regulation: number;
        /**
         *  押注元数据
         *  参与的房间数
         */
        gameNum: number;
        /**
         * 手数
         */
        hand: number;
        /**
         * allin 赢的次数
         */
        allinWin: number;
        /**
         * allin 次数
         */
        allin: number;
        /**
         * 入池数
         */
        inpot: number;
        /**
         * 翻牌前加注数
         */
        flopRaise: number;
        /**
         *  计算后的概率
         *  入池率
         */
        vpip: number;
        /**
         * 翻牌前加注率
         */
        prf: number;
        /**
         * ALL-IN胜率
         */
        allinWinRate: number;
        /**
         *  金钱数据
         *  带入的筹码
         */
        bring: number;
        /**
         * 盈亏
         */
        profit: number;
        /**
         * 保险买入
         */
        insBuy: number;
        /**
         * 保险利润
         */
        insProfit: number;
        /**
         * 奖金
         */
        prize: number;
        /**
         * 带出
         */
        out: number;
        /**
         * 捐献金
         */
        contribution: number;
        /**
         *  名次
         *  冠军数
         */
        firstPlace: number;
        /**
         * 亚军数
         */
        secondPlace: number;
        /**
         * 季军数
         */
        thirdPlace: number;
        /**
         * 名次
         */
        place: number;
        GetType(): string;
        Populate($other?: any): StatisticsRoundData;
    }
}

declare module table {
    /**
     * FILE: 大厅每日任务.xlsx SHEET: task
     */
    class LobbyTaskConfig {
        /**
         * 序列
         */
        id: number;
        /**
         * 任务标题
         */
        taskTitle: string;
        /**
         * 任务描述
         */
        taskDesc: string;
        /**
         * 任务类型
         */
        taskType: number;
        /**
         * 是否显示进度条
         */
        progressType: number;
        /**
         * 游戏ID
         */
        gameId: number[];
        /**
         * 任务参数
         */
        taskCondition: number;
        /**
         * 领取次数
         */
        rewardNum: number;
        /**
         * 图标
         */
        taskIcon: string;
        /**
         * 奖励
         */
        taskReward: LobbyTaskConfig.TaskRewardItem[];
        /**
         * 是否显示
         */
        isOnList: number;
        GetType(): string;
    }
    module LobbyTaskConfig {
        class TaskRewardItem {
            goodId: number;
            goodNbr: number;
        }
    }
}

declare module table {
    /**
     * FILE: 表情礼物表.xlsx SHEET: 礼物 KEY: giftId
     */
    class TableGift {
        /**
         * id
         */
        giftId: number;
        /**
         * name
         */
        giftName: string;
        /**
         * chips
         */
        giftCost: number;
        /**
         * charm
         */
        giftCharm: number;
        GetType(): string;
    }
}

declare module table {
    /**
     * FILE: 道具.xlsx SHEET: 道具
     */
    class TableGoodsConfig {
        /**
         * 序号
         */
        id: number;
        /**
         * ID
         */
        goodId: number;
        /**
         * 物品名称
         */
        goodName: string;
        /**
         * 物品类型
         */
        goodType: number;
        /**
         * 物品介绍
         */
        goodDesc: string;
        /**
         * 物品icon
         */
        goodIcon: string;
        /**
         * 显示
         */
        isShow: number;
        /**
         * 使用方式
         */
        useType: string;
        /**
         * 礼包配置
         */
        giftGoods: TableGoodsConfig.GiftGoodsItem[];
        /**
         * 出售价格
         */
        price: number;
        GetType(): string;
    }
    module TableGoodsConfig {
        class GiftGoodsItem {
            goodId: number;
            goodNbr: number;
        }
    }
}

declare module table {
    /**
     * FILE: 限时优惠.xlsx SHEET: config
     */
    class TableLimitOfferConfig {
        id: number;
        /**
         * 档位
         */
        stalls: number;
        /**
         * 优惠条件
         */
        shopIds: number[];
        /**
         * 开始时间
         */
        startTime: string;
        /**
         * 结束时间
         */
        endTime: string;
        GetType(): string;
    }
}

declare module table {
    /**
     * FILE: 创建房间选项.xlsx SHEET: 麻将大厅设置
     */
    class TableLobbyGameList {
        /**
         * 大厅ID
         */
        id: number;
        /**
         * 描述
         */
        desc: string;
        /**
         * 好彩系列
         */
        isHaocai: number;
        /**
         * 好牌网系列
         */
        isHaopaiwang: number;
        /**
         * 俱乐部默认授权
         */
        clubPower: number;
        /**
         * 无好友房的游戏
         */
        friendRoom: number[];
        /**
         * 俱乐部备注
         */
        clubRemark: number;
        /**
         * 保险箱最低金额
         */
        bankLimit: number;
        /**
         * 红包开奖提现额度
         */
        openLimit: number;
        /**
         * 创建面板全屏
         */
        createFullscreen: number;
        /**
         * 创建面板标签
         */
        createTag: number;
        /**
         * 新游戏
         */
        newGame: number[];
        /**
         * 2.5D
         */
        twoPointFive: number[];
        /**
         * 区域选择
         */
        areaChoice: number[];
        /**
         * 返回大厅需要钻石
         */
        lobbyDiamond: number;
        /**
         * 初始金币
         */
        iniGold: number;
        /**
         * 初始钻石
         */
        iniDiamond: number;
        /**
         * 房间管理
         */
        roomManage: number;
        /**
         * 定位开启
         */
        PositioningOpen: number;
        /**
         * 初始房卡
         */
        iniRoomCard: number;
        /**
         * 喇叭消耗
         */
        speakerCost: number[];
        /**
         * 需下载游戏
         */
        downloadGame: number[];
        /**
         * 转充值局数
         */
        changeRoundNum: number;
        /**
         * 推荐返钻
         */
        returnDiamond: number;
        /**
         * 大厅麻将资源名
         */
        lobbyMahjongSourceName: string;
        /**
         * 邀请码送钻
         */
        inviteDiamond: number;
        /**
         * 代理商类型
         */
        agentType: number;
        /**
         * 充值实名
         */
        chargeRealname: number;
        /**
         * 任务ID
         */
        missionId: number[];
        /**
         * 是否开启金币分享
         */
        openShareCoin: number;
        /**
         * 百人场
         */
        hundredList: number[];
        /**
         * 练习场类型
         */
        exerciseType: number;
        /**
         * 金币场
         */
        coinList: TableLobbyGameList.CoinListItem[];
        /**
         * 游戏任务
         */
        gameTask: TableLobbyGameList.GameTaskItem[];
        /**
         * 游戏选择
         */
        mahjongList: number[];
        /**
         * 隐藏的游戏
         */
        invisibleList: number[];
        /**
         * 练习场场次数据
         */
        exerciseList: TableLobbyGameList.ExerciseListItem[];
        /**
         * 绑定优惠
         */
        bindList: number[];
        /**
         * 商品
         */
        shopList: number[];
        /**
         * 微信商品
         */
        wechatshopList: number[];
        /**
         * 首充礼包
         */
        firstCharge: number[];
        /**
         * 领取方式
         */
        payment: number;
        /**
         * 礼物
         */
        giftList: number[];
        /**
         * 练习场场次展示
         */
        exerciseLabelList: TableLobbyGameList.ExerciseLabelListItem[];
        /**
         * 大厅签到
         */
        sign: number[];
        /**
         * 分享送钻
         */
        share: number[];
        /**
         * 免费游戏
         */
        freeList: number[];
        /**
         * 好彩图标
         */
        haocaiIcon: number[];
        /**
         * 老友图标
         */
        laoyouIcon: number[];
        /**
         * 分享标题
         */
        shareTitle: string;
        /**
         * 新链接
         */
        newLink: string;
        /**
         * 不要练习场
         */
        noPractice: number;
        /**
         * 练习场扣钻
         */
        pracFee: number;
        /**
         * 托管模式
         */
        autoMode: number;
        /**
         * 礼物付费
         */
        giftCost: number;
        /**
         * 分享头
         */
        shareFirst: string;
        /**
         * 分享内容
         */
        shareContent: string;
        GetType(): string;
    }
    module TableLobbyGameList {
        class CoinListItem {
            gameId: number;
            sceneId: number[];
        }
    }
    module TableLobbyGameList {
        class GameTaskItem {
            gameId: number;
            taskId: number[];
        }
    }
    module TableLobbyGameList {
        class ExerciseListItem {
            id: number;
            bet: number;
            type: number;
            minLimit: number;
            maxLimit: number;
            cost: number;
        }
    }
    module TableLobbyGameList {
        class ExerciseLabelListItem {
            id: number;
            name: string;
            bet: string;
            limit: string;
        }
    }
}

declare module table {
    /**
     * FILE: 玩法配置.xlsx SHEET: 玩法配置 KEY: id
     */
    class TablePlayTypeList {
        id: number;
        /**
         * 描述
         */
        desc: string;
        /**
         * 分类
         */
        playType: number;
        /**
         * 玩法类型描述
         */
        playTypedesc: string;
        /**
         * 父类
         */
        parent: number;
        /**
         * 按钮样式
         */
        buttonType: number;
        /**
         * 互斥
         */
        exclude: number[];
        /**
         * 同步
         */
        interact: number[];
        GetType(): string;
    }
}

declare module table {
    /**
     * FILE: 道具.xlsx SHEET: 商城
     */
    class TableShopConfig {
        /**
         * 序号
         */
        shopId: number;
        /**
         * 商城类型
         */
        shopType: number;
        /**
         * 物品名称
         */
        shopName: string;
        /**
         * 物品
         */
        shopGoods: TableShopConfig.ShopGoodsItem;
        /**
         * 售价类别
         */
        priceType: number;
        /**
         * 售价
         */
        price: number;
        /**
         * 首充奖励
         */
        firstShopGoods: TableShopConfig.FirstShopGoodsItem;
        /**
         * 是否上架
         */
        onShelve: number;
        iconId: number;
        /**
         * 是否在商城显示
         */
        isShow: number;
        /**
         * 购买次数
         */
        buyNbr: number;
        iapppayId: number;
        payPlatId: number;
        GetType(): string;
    }
    module TableShopConfig {
        /**
         * 物品
         */
        class ShopGoodsItem {
            goodId: number;
            goodNbr: number;
        }
    }
    module TableShopConfig {
        /**
         * 首充奖励
         */
        class FirstShopGoodsItem {
            goodId: number;
            goodNbr: number;
        }
    }
}

declare module table {
    /**
     * FILE: 周边系统.xlsx SHEET: 签到 KEY: lobbyId
     */
    class TableSignIn {
        /**
         * 序号
         */
        id: number;
        /**
         * 大厅ID
         */
        lobbyId: number;
        /**
         * 图标
         */
        icon: number[];
        /**
         * 签到奖励
         */
        signReward: TableSignIn.SignRewardItem[];
        /**
         * 累计奖励
         */
        cumulativeReward: TableSignIn.CumulativeRewardItem[];
        /**
         * 好彩累计话费券
         */
        goodluckCallCoupon: TableSignIn.GoodluckCallCouponItem[];
        GetType(): string;
    }
    module TableSignIn {
        class SignRewardItem {
            dayNum: number;
            reward: TableSignIn.SignRewardItem.RewardItem;
        }
    }
    module TableSignIn {
        module SignRewardItem {
            class RewardItem {
                goodsId: number;
                count: number;
            }
        }
    }
    module TableSignIn {
        class CumulativeRewardItem {
            cumulativeNum: number;
            reward: TableSignIn.CumulativeRewardItem.RewardItem;
        }
    }
    module TableSignIn {
        module CumulativeRewardItem {
            class RewardItem {
                goodsId: number;
                count: number;
            }
        }
    }
    module TableSignIn {
        class GoodluckCallCouponItem {
            cumulativeNum: number;
            reward: TableSignIn.GoodluckCallCouponItem.RewardItem;
        }
    }
    module TableSignIn {
        module GoodluckCallCouponItem {
            class RewardItem {
                goodsId: number;
                count: number;
            }
        }
    }
}

declare module table {
    /**
     * FILE: Vip资源表.xlsx SHEET: Sheet1
     */
    class TableVip {
        id: number;
        /**
         * 大厅ID
         */
        lobbyId: number;
        /**
         * VIP等级
         */
        level: number;
        /**
         * 头像框
         */
        head_frame: string;
        /**
         * 大ICON
         */
        icon_big: string;
        /**
         * 小ICON
         */
        icon_small: string;
        /**
         * 昵称颜色
         */
        nickNameColor: string;
        /**
         * 头像动画ID
         */
        head_mc: number;
        GetType(): string;
    }
}

declare module table {
    /**
     * FILE: gameList.xlsx SHEET: gameList
     */
    class gameList {
        id: number;
        gameId: number;
        gameDoc: string;
        gameName: string;
        gameDes: string;
        gameTag: string;
        gameTheme: string;
        gameResConfigUrl: string;
        gameResRoot: string;
        preLoad: string;
        gameCodeUrl: string;
        gameIconUrl: string;
        gameIconUrl_gxpj: string;
        gameShareUrl: string;
        markIconUrl: string;
        selectScene: number;
        /**
         * 包大小
         */
        gameSize: string;
        stageScaleMode: string;
        GetType(): string;
    }
}

declare module table {
    /**
     * FILE: 头像框动画表.xlsx SHEET: Sheet1
     */
    class headMc {
        id: number;
        /**
         * 头像动画
         */
        head_mc: string[];
        GetType(): string;
    }
}

declare module chessCommonLib {
    class FashionDataUtils {
        constructor();
        /**
         * 获取个性头像Id
         */
        static getPersonHeadMcId(personInfo: Cmd.PersonalImage[]): number;
        /**
         * 获取VIP设置等级
         */
        static getPersonVipLevel(personInfo: Cmd.PersonalImage[]): number;
    }
}

declare module chessCommonLib {
    class LoadGameTipUtil {
        private static _loadingCls;
        static fastGameId: number;
        static gameScaleY: number;
        static offsetX: number;
        static ExitTipText: string;
        /**显示退出和取消按钮文字显示 */
        static showExitConfrimTxt: boolean;
        private static _positionDic;
        /**
         * 设置loadingUI
         */
        static loadingCls: any;
        /**
         * 游戏加载按钮注册响应事件
         * @param ui
         * @param gameId
         * @param x
         * @param y
         * @param loadend  显示对象或者回调处理函数
         */
        static reg(ui: egret.DisplayObjectContainer, gameId?: number, x?: number, y?: number, loadend?: any, thisObj?: any): void;
        private static _loadingGameId;
        static readonly loadingGameId: number;
        static loadGameById(ui: egret.DisplayObjectContainer, gameId: number, loadend?: any, x?: number, y?: number, d?: number): void;
        static isLoadingOther(): boolean;
        /**
         * 加载游戏
         */
        static loadGame(gameId: number, succ: Function, fail: Function, process: Function, thisObj: any): void;
        private static _currentLoadGame;
        private static onTouchHandle(e);
        private static onProcess(per);
        private static onLoadGame();
        private static onLoadFail();
        static destroy(): void;
    }
    /**
     * 加载位置
     */
    class LoadGameVo {
        ui: egret.DisplayObjectContainer;
        position: egret.Point;
        gameId: number;
        loadend: any;
        thisObj: any;
    }
}

declare module chessCommonLib {
    class LoadPanelTipMgr {
        private static _instance;
        static getInstance(): LoadPanelTipMgr;
        private _loadPanelVo;
        loadRes(resouceId?: string, succ?: Function, needH5Load?: boolean): void;
        private onResourceProgress(per);
        private onResourceLoadComplete(evt);
        private onResourceLoadError(evt);
        isLoading(): boolean;
    }
}

declare module chessCommonLib {
    class NumberUtil {
        constructor();
        /**货币规格 */
        static numberFormat(num: any): string;
        /**
         * 格式化数字
         */
        static numFormat2(num: number): string;
        /**获取JavaScript类型 */
        static getType(o: any): any;
    }
}

declare module chessCommonLib {
    class ResLoadUitl {
        static Enable: boolean;
        private static isLoad;
        static load(grp: string[]): void;
        private static removeEvent();
        private static onUniLibResLoadComplete(event);
        static hasLoad(): boolean;
        private static onUniLibResLoadError(event);
    }
}

declare module chessCommonLib {
    class SendGiftUtils {
        constructor();
        /**
         * 发送礼物     giftId礼物编号      receivePos终点位置      sendPos起始位置
         */
        static sendGift(giftId: number, receivePos: egret.Point, sendPos: egret.Point, container?: egret.DisplayObjectContainer, animationName?: string): void;
    }
}
