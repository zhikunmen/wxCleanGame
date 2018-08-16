﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
/// Generated from: room.proto

module Cmd {
	/**
	 * 玩家基本信息，用于显示头像
	 */
	export class UserBriefInfo {
		uid: number;
		headurl: string;
		/**
		 * 昵称
		 */
		nickname: string;
		/**
		 * 性别
		 */
		gender: string;
		/**
		 * vip等级
		 */
		viplevel: number;
		/**
		 * 金币
		 */
		chips: number;
		/**
		 * 战绩
		 */
		profit: number;
		GetType(): string { return 'Cmd.UserBriefInfo'; }
	}
	/**
	 * 进入游戏
	 */
	export class EnterGameCmd_C {
		GetType(): string { return 'Cmd.EnterGameCmd_C'; }
	}
	export class EnterGameCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		/**
		 * 自己
		 */
		myinfo: UserBriefInfo;
		/**
		 * 游戏信息
		 */
		gameinfo: GameInfo;
		/**
		 * 下注筹码
		 */
		betchips: number[];
		GetType(): string { return 'Cmd.EnterGameCmd_S'; }
	}
	/**
	 * 游戏信息
	 */
	export class GameInfo {
		/**
		 * 转轮
		 */
		whells: WhellItem[];
		/**
		 * 快速旋转
		 */
		isfast: boolean;
		/**
		 * 免费游戏
		 */
		isfree: boolean;
		/**
		 * 剩余局数
		 */
		freenum: number;
		GetType(): string { return 'Cmd.GameInfo'; }
	}
	/**
	 * 轮子
	 */
	export class WhellItem {
		/**
		 * 元素id
		 */
		reels: number[];
		GetType(): string { return 'Cmd.WhellItem'; }
	}
	/**
	 * 退出游戏
	 */
	export class ExitGameCmd_C {
		GetType(): string { return 'Cmd.ExitGameCmd_C'; }
	}
	export class ExitGameCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		GetType(): string { return 'Cmd.ExitGameCmd_S'; }
	}
	/**
	 * 改变旋转速度
	 */
	export class SetSpeedCmd_C {
		/**
		 * 快速旋转
		 */
		isfast: boolean;
		GetType(): string { return 'Cmd.SetSpeedCmd_C'; }
	}
	export class SetSpeedCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		/**
		 * 快速旋转
		 */
		isfast: boolean;
		GetType(): string { return 'Cmd.SetSpeedCmd_S'; }
	}
	/**
	 * 下注
	 */
	export class BetRequestCmd_C {
		/**
		 * 最大押注
		 */
		maxbet: boolean;
		/**
		 * 下注额
		 */
		betchips: number;
		/**
		 * 自动下注
		 */
		autobet: boolean;
		GetType(): string { return 'Cmd.BetRequestCmd_C'; }
	}
	export class BetRequestCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		/**
		 * 下注额
		 */
		betchips: number;
		/**
		 * 剩余金币
		 */
		chips: number;
		GetType(): string { return 'Cmd.BetRequestCmd_S'; }
	}
	export class CancelAutoBetCmd_C {
		GetType(): string { return 'Cmd.CancelAutoBetCmd_C'; }
	}
	export class CancelAutoBetCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		GetType(): string { return 'Cmd.CancelAutoBetCmd_S'; }
	}
	/**
	 * 转轮结果
	 */
	export class WhellResultCmd_S {
		/**
		 * 第一排元素索引
		 */
		idxs: number[];
		/**
		 * 1，3列是否都有bonus
		 */
		bonus: boolean;
		GetType(): string { return 'Cmd.WhellResultCmd_S'; }
	}
	/**
	 * 开奖
	 */
	export class LotteryCmd_S {
		/**
		 * 开奖元素
		 */
		lotitems: LotteryItem[];
		/**
		 * 总奖金
		 */
		lotchips: number;
		/**
		 * 开奖后玩家金币
		 */
		chips: number;
		/**
		 * 是否大奖
		 */
		bigwin: boolean;
		/**
		 * 是否触发特殊奖励
		 */
		bonus: boolean;
		GetType(): string { return 'Cmd.LotteryCmd_S'; }
	}
	/**
	 * 开奖元素
	 */
	export class LotteryItem {
		/**
		 * 连线元素
		 */
		linereels: number[];
		/**
		 * 奖金
		 */
		lotchips: number;
		GetType(): string { return 'Cmd.LotteryItem'; }
	}
	/**
	 * 特殊奖励
	 */
	export class SpecLotCmd_S {
		GetType(): string { return 'Cmd.SpecLotCmd_S'; }
	}
	/**
	 * 选取宝箱
	 */
	export class PickSpecLotCmd_C {
		/**
		 * 宝箱id
		 */
		specitem: number;
		GetType(): string { return 'Cmd.PickSpecLotCmd_C'; }
	}
	export class PickSpecLotCmd_S {
		/**
		 * 返回码
		 */
		ret: number;
		/**
		 * 描述
		 */
		desc: string;
		/**
		 * 触发免费游戏
		 */
		freegame: boolean;
		/**
		 * 奖金
		 */
		reward: number;
		/**
		 * 开奖后玩家金币
		 */
		chips: number;
		GetType(): string { return 'Cmd.PickSpecLotCmd_S'; }
	}
	/**
	 * 进入免费游戏
	 */
	export class FreeGameCmd_S {
		/**
		 * 游戏信息
		 */
		gameinfo: GameInfo;
		GetType(): string { return 'Cmd.FreeGameCmd_S'; }
	}
}
