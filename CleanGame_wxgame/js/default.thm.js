var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/gameSkin/CannonSkin.exml'] = window.CannonSkin = (function (_super) {
	__extends(CannonSkin, _super);
	var CannonSkin$Skin1 = 	(function (_super) {
		__extends(CannonSkin$Skin1, _super);
		function CannonSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","addp_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CannonSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "add_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CannonSkin$Skin1;
	})(eui.Skin);

	function CannonSkin() {
		_super.call(this);
		this.skinParts = ["cannon"];
		
		this.height = 202;
		this.width = 338;
		this.elementsContent = [this.cannon_i(),this._Button1_i(),this._BitmapLabel1_i()];
	}
	var _proto = CannonSkin.prototype;

	_proto.cannon_i = function () {
		var t = new eui.Image();
		this.cannon = t;
		t.bottom = 15;
		t.horizontalCenter = 8;
		t.source = "about_png";
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.x = 207;
		t.y = 144;
		t.skinName = CannonSkin$Skin1;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "num_fnt";
		t.text = "20";
		t.x = 151;
		t.y = 162;
		return t;
	};
	return CannonSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/ChatItemSkin.exml'] = window.ChatItemSkin = (function (_super) {
	__extends(ChatItemSkin, _super);
	function ChatItemSkin() {
		_super.call(this);
		this.skinParts = ["wordLabel"];
		
		this.height = 124;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.wordLabel_i()];
	}
	var _proto = ChatItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(22,5,133,37);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.wordLabel_i = function () {
		var t = new eui.Label();
		this.wordLabel = t;
		t.height = 92;
		t.text = "标签";
		t.textColor = 0x1F5110;
		t.width = 444;
		t.x = 15;
		t.y = 18;
		return t;
	};
	return ChatItemSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/ChatSkin.exml'] = window.ChatSkin = (function (_super) {
	__extends(ChatSkin, _super);
	function ChatSkin() {
		_super.call(this);
		this.skinParts = ["inputWord","sendBtn","group"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.inputWord_i(),this.sendBtn_i(),this._Image1_i(),this._Scroller1_i()];
	}
	var _proto = ChatSkin.prototype;

	_proto.inputWord_i = function () {
		var t = new eui.TextInput();
		this.inputWord = t;
		t.height = 50;
		t.width = 336;
		t.x = 46;
		t.y = 876;
		return t;
	};
	_proto.sendBtn_i = function () {
		var t = new eui.Button();
		this.sendBtn = t;
		t.label = "发送";
		t.x = 428;
		t.y = 878;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 706;
		t.scale9Grid = new egret.Rectangle(2,2,8,7);
		t.source = "button_up_png";
		t.width = 546;
		t.x = 46;
		t.y = 104;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 662;
		t.width = 496;
		t.x = 72;
		t.y = 128;
		t.viewport = this.group_i();
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		return t;
	};
	return ChatSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/ClickButtonSkin.exml'] = window.ClickButtonSkin = (function (_super) {
	__extends(ClickButtonSkin, _super);
	function ClickButtonSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [];
		this.icon_i();
		
		this.states = [
			new eui.State ("down",
				[
					new eui.AddItems("icon","",0,""),
					new eui.SetProperty("icon","width",100),
					new eui.SetProperty("icon","height",100),
					new eui.SetProperty("icon","x",0),
					new eui.SetProperty("icon","y",0),
					new eui.SetProperty("","width",100),
					new eui.SetProperty("","height",100)
				])
			,
			new eui.State ("up",
				[
					new eui.AddItems("icon","",0,""),
					new eui.SetProperty("icon","width",100),
					new eui.SetProperty("icon","height",100),
					new eui.SetProperty("icon","y",0),
					new eui.SetProperty("icon","x",0),
					new eui.SetProperty("","width",100),
					new eui.SetProperty("","height",100)
				])
		];
	}
	var _proto = ClickButtonSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 100;
		t.source = "button_up_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ClickButtonSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/GameEnterDlgSkin.exml'] = window.GameEnterDlgSkin = (function (_super) {
	__extends(GameEnterDlgSkin, _super);
	function GameEnterDlgSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","goImg","descLabel","lvLabel"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this._Image3_i(),this.goImg_i(),this._Image4_i(),this.descLabel_i(),this._Image5_i(),this.lvLabel_i()];
	}
	var _proto = GameEnterDlgSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg4_png";
		t.x = 64;
		t.y = 248;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgBlack3_png";
		t.y = 434;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_json.btn_close";
		t.x = 462;
		t.y = 282;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 62;
		t.horizontalCenter = 0;
		t.source = "start_wintj_png";
		t.width = 220;
		t.y = 375;
		return t;
	};
	_proto.goImg_i = function () {
		var t = new eui.Image();
		this.goImg = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(52,55,2,2);
		t.source = "btn_json.reborn_timer";
		t.width = 260;
		t.y = 694;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "start_title_png";
		t.touchEnabled = false;
		t.y = 714;
		return t;
	};
	_proto.descLabel_i = function () {
		var t = new eui.Label();
		this.descLabel = t;
		t.height = 104;
		t.horizontalCenter = 0;
		t.text = "30步内获得900分";
		t.width = 295;
		t.y = 480;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "game_level_png";
		t.x = 234;
		t.y = 281;
		return t;
	};
	_proto.lvLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.lvLabel = t;
		t.font = "num1_fnt";
		t.text = "12";
		t.x = 324;
		t.y = 283;
		return t;
	};
	return GameEnterDlgSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/GameMissionProgressSkin.exml'] = window.GameMissionProgressSkin = (function (_super) {
	__extends(GameMissionProgressSkin, _super);
	function GameMissionProgressSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 28;
		this.width = 188;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = GameMissionProgressSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "mission_rateoff_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "mission_rateon_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return GameMissionProgressSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/GameProgressSkin.exml'] = window.GameProgressSkin = (function (_super) {
	__extends(GameProgressSkin, _super);
	function GameProgressSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 16;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = GameProgressSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "game_star_progress_on_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return GameProgressSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/GameUISkin.exml'] = window.GameUISkin = (function (_super) {
	__extends(GameUISkin, _super);
	function GameUISkin() {
		_super.call(this);
		this.skinParts = ["top","pauseBtn","progress","star1","star3","star2","stepScore","targetScore","score","lv","gold"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this._Group2_i()];
	}
	var _proto = GameUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129.33;
		t.width = 641.33;
		t.x = -3;
		t.y = -9;
		t.elementsContent = [this.top_i(),this.pauseBtn_i(),this._Image1_i(),this._Image2_i(),this.progress_i(),this.star1_i(),this.star3_i(),this.star2_i(),this._Image3_i(),this.stepScore_i(),this.targetScore_i(),this.score_i(),this._Image4_i()];
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Image();
		this.top = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_top_png";
		t.x = 3;
		t.y = 9;
		return t;
	};
	_proto.pauseBtn_i = function () {
		var t = new eui.Image();
		this.pauseBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_btn_pause_png";
		t.x = 561;
		t.y = 16;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_star_progress_off_png";
		t.x = 103;
		t.y = 94;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_step_png";
		t.x = 295;
		t.y = 13;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.ProgressBar();
		this.progress = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "GameProgressSkin";
		t.value = 50;
		t.x = 123;
		t.y = 100;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_rate1_off_png";
		t.x = 219;
		t.y = 80;
		return t;
	};
	_proto.star3_i = function () {
		var t = new eui.Image();
		this.star3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_rate3_off_png";
		t.x = 462;
		t.y = 80;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_rate2_off_png";
		t.x = 341;
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "score_png";
		t.x = 460;
		t.y = 12;
		return t;
	};
	_proto.stepScore_i = function () {
		var t = new eui.BitmapLabel();
		this.stepScore = t;
		t.font = "num1_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.x = 310;
		t.y = 41;
		return t;
	};
	_proto.targetScore_i = function () {
		var t = new eui.BitmapLabel();
		this.targetScore = t;
		t.font = "num2_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.x = 84;
		t.y = 44;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.BitmapLabel();
		this.score = t;
		t.font = "num2_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.x = 455;
		t.y = 44;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_target_title_png";
		t.width = 113;
		t.x = 84;
		t.y = 12;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1;
		t.height = 96.97;
		t.width = 630.3;
		t.x = 3;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.lv_i(),this._Image7_i(),this.gold_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "foot_bg_png";
		t.x = -3;
		t.y = 6.000000000000114;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "buy_coin1_png";
		t.x = 404;
		t.y = 25;
		return t;
	};
	_proto.lv_i = function () {
		var t = new eui.BitmapLabel();
		this.lv = t;
		t.font = "num1_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "3";
		t.x = 108;
		t.y = 42;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_level_png";
		t.x = 30;
		t.y = 38.000000000000114;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.BitmapLabel();
		this.gold = t;
		t.font = "num2_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "111111";
		t.x = 481;
		t.y = 45.000000000000114;
		return t;
	};
	return GameUISkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/IndexButtonSkin.exml'] = window.IndexButtonSkin = (function (_super) {
	__extends(IndexButtonSkin, _super);
	function IndexButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","lvLabel","icon"];
		
		this.height = 90;
		this.width = 90;
		this.elementsContent = [this.bg_i(),this.lvLabel_i(),this.icon_i()];
	}
	var _proto = IndexButtonSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "selet_g_black_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lvLabel_i = function () {
		var t = new eui.Label();
		this.lvLabel = t;
		t.horizontalCenter = 0.5;
		t.text = "1";
		t.y = 18;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "npc_avt_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = -1;
		t.y = -90;
		return t;
	};
	return IndexButtonSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/IndexGroupSkin.exml'] = window.IndexGroupSkin = (function (_super) {
	__extends(IndexGroupSkin, _super);
	function IndexGroupSkin() {
		_super.call(this);
		this.skinParts = ["btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10","btn11","btn12","btn13"];
		
		this.height = 2600;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IndexGroupSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 2600;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i(),this.btn11_i(),this.btn12_i(),this.btn13_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "worldmap_1_jpg";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 1961;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "worldmap_2_jpg";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 1321;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "worldmap_3_jpg";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 682;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "worldmap_4_jpg";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "worldmap_5_jpg";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new IndexButton();
		this.btn1 = t;
		t.lv = 1;
		t.skinName = "IndexButtonSkin";
		t.x = 297;
		t.y = 181;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new IndexButton();
		this.btn2 = t;
		t.lv = 2;
		t.skinName = "IndexButtonSkin";
		t.x = 313;
		t.y = 359;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new IndexButton();
		this.btn3 = t;
		t.lv = 3;
		t.skinName = "IndexButtonSkin";
		t.x = 216;
		t.y = 519;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new IndexButton();
		this.btn4 = t;
		t.lv = 4;
		t.skinName = "IndexButtonSkin";
		t.x = 262;
		t.y = 708;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new IndexButton();
		this.btn5 = t;
		t.lv = 5;
		t.skinName = "IndexButtonSkin";
		t.x = 371;
		t.y = 971;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new IndexButton();
		this.btn6 = t;
		t.lv = 6;
		t.skinName = "IndexButtonSkin";
		t.x = 221;
		t.y = 1264;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new IndexButton();
		this.btn7 = t;
		t.lv = 7;
		t.skinName = "IndexButtonSkin";
		t.x = 372;
		t.y = 1439;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new IndexButton();
		this.btn8 = t;
		t.lv = 8;
		t.skinName = "IndexButtonSkin";
		t.x = 265;
		t.y = 1663;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new IndexButton();
		this.btn9 = t;
		t.lv = 9;
		t.skinName = "IndexButtonSkin";
		t.x = 370;
		t.y = 1850;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new IndexButton();
		this.btn10 = t;
		t.lv = 10;
		t.skinName = "IndexButtonSkin";
		t.x = 134;
		t.y = 2035;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new IndexButton();
		this.btn11 = t;
		t.lv = 11;
		t.skinName = "IndexButtonSkin";
		t.x = 427;
		t.y = 2152;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new IndexButton();
		this.btn12 = t;
		t.lv = 12;
		t.skinName = "IndexButtonSkin";
		t.x = 186;
		t.y = 2257;
		return t;
	};
	_proto.btn13_i = function () {
		var t = new IndexButton();
		this.btn13 = t;
		t.lv = 13;
		t.skinName = "IndexButtonSkin";
		t.x = 96;
		t.y = 2465;
		return t;
	};
	return IndexGroupSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/IndexSceneSkin.exml'] = window.IndexSceneSkin = (function (_super) {
	__extends(IndexSceneSkin, _super);
	function IndexSceneSkin() {
		_super.call(this);
		this.skinParts = ["list"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Scroller1_i()];
	}
	var _proto = IndexSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.fillColor = 0xE52626;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	return IndexSceneSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/IndexTopSkin.exml'] = window.IndexTopSkin = (function (_super) {
	__extends(IndexTopSkin, _super);
	function IndexTopSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = IndexTopSkin.prototype;

	return IndexTopSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/IndexUISkin.exml'] = window.IndexUISkin = (function (_super) {
	__extends(IndexUISkin, _super);
	function IndexUISkin() {
		_super.call(this);
		this.skinParts = ["top","gold","heart","addHeartBtn","addGoldBtn"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.top_i(),this._Image1_i(),this._Image2_i(),this.gold_i(),this.heart_i(),this.addHeartBtn_i(),this.addGoldBtn_i()];
	}
	var _proto = IndexUISkin.prototype;

	_proto.top_i = function () {
		var t = new eui.Image();
		this.top = t;
		t.source = "selet_topbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "selet_heart_png";
		t.x = 26;
		t.y = 8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "buy_coin1_png";
		t.x = 390;
		t.y = 3;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.BitmapLabel();
		this.gold = t;
		t.font = "num2_fnt";
		t.text = "0";
		t.x = 468;
		t.y = 22;
		return t;
	};
	_proto.heart_i = function () {
		var t = new eui.BitmapLabel();
		this.heart = t;
		t.font = "num2_fnt";
		t.text = "0";
		t.x = 90;
		t.y = 22;
		return t;
	};
	_proto.addHeartBtn_i = function () {
		var t = new eui.Image();
		this.addHeartBtn = t;
		t.source = "btn_json.selet_add";
		t.x = 176;
		t.y = 10;
		return t;
	};
	_proto.addGoldBtn_i = function () {
		var t = new eui.Image();
		this.addGoldBtn = t;
		t.source = "btn_json.selet_add";
		t.x = 552;
		t.y = 10;
		return t;
	};
	return IndexUISkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/LeanCloudTestSkin.exml'] = window.LeanCloudTestSkin = (function (_super) {
	__extends(LeanCloudTestSkin, _super);
	function LeanCloudTestSkin() {
		_super.call(this);
		this.skinParts = ["btn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.btn_i()];
	}
	var _proto = LeanCloudTestSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "按钮";
		t.x = 166;
		t.y = 362;
		return t;
	};
	return LeanCloudTestSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/LogoinSkin.exml'] = window.LogoinSkin = (function (_super) {
	__extends(LogoinSkin, _super);
	function LogoinSkin() {
		_super.call(this);
		this.skinParts = ["sky","bird1","bird2","clounLeft","sea","water2","water1","boat2","boat1","cloudRight","mountain","beach","logo","fruit1","fruit3","fruit2","fruit5","fruit4","treeGroup","beganBtn"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.sky_i(),this.bird1_i(),this.bird2_i(),this.clounLeft_i(),this.sea_i(),this.water2_i(),this.water1_i(),this.boat2_i(),this.boat1_i(),this.cloudRight_i(),this.mountain_i(),this.beach_i(),this._Group1_i(),this.treeGroup_i(),this.beganBtn_i()];
	}
	var _proto = LogoinSkin.prototype;

	_proto.sky_i = function () {
		var t = new eui.Rect();
		this.sky = t;
		t.bottom = 0;
		t.fillColor = 0x29BDF6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bird1_i = function () {
		var t = new eui.Image();
		this.bird1 = t;
		t.source = "birl2_png";
		t.verticalCenter = -83.5;
		t.x = 317;
		return t;
	};
	_proto.bird2_i = function () {
		var t = new eui.Image();
		this.bird2 = t;
		t.source = "birl_png";
		t.verticalCenter = -173.5;
		t.x = 126;
		return t;
	};
	_proto.clounLeft_i = function () {
		var t = new eui.Image();
		this.clounLeft = t;
		t.source = "output_cloud_png";
		t.verticalCenter = -66;
		t.x = -232;
		return t;
	};
	_proto.sea_i = function () {
		var t = new eui.Image();
		this.sea = t;
		t.source = "output_sea_png";
		t.verticalCenter = 195;
		t.x = -4;
		return t;
	};
	_proto.water2_i = function () {
		var t = new eui.Image();
		this.water2 = t;
		t.source = "output_sea1_png";
		t.verticalCenter = 85.5;
		t.x = 37;
		return t;
	};
	_proto.water1_i = function () {
		var t = new eui.Image();
		this.water1 = t;
		t.source = "output_sea2_png";
		t.verticalCenter = 187;
		t.x = 9;
		return t;
	};
	_proto.boat2_i = function () {
		var t = new eui.Image();
		this.boat2 = t;
		t.source = "output_ship1_png";
		t.verticalCenter = 110;
		t.x = 124;
		return t;
	};
	_proto.boat1_i = function () {
		var t = new eui.Image();
		this.boat1 = t;
		t.source = "output_ship2_png";
		t.verticalCenter = 38.5;
		t.x = 370;
		return t;
	};
	_proto.cloudRight_i = function () {
		var t = new eui.Image();
		this.cloudRight = t;
		t.source = "could2_png";
		t.verticalCenter = -128;
		t.x = 403;
		return t;
	};
	_proto.mountain_i = function () {
		var t = new eui.Image();
		this.mountain = t;
		t.source = "start_dao_png";
		t.verticalCenter = -128.5;
		t.x = -2;
		return t;
	};
	_proto.beach_i = function () {
		var t = new eui.Image();
		this.beach = t;
		t.bottom = 2;
		t.source = "output_beach_png";
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.top = 62;
		t.width = 640;
		t.x = 0;
		t.elementsContent = [this.logo_i(),this.fruit1_i(),this.fruit3_i(),this.fruit2_i(),this.fruit5_i(),this.fruit4_i(),this._Label1_i()];
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.horizontalCenter = 0;
		t.source = "l2_png";
		t.visible = false;
		t.y = 76;
		return t;
	};
	_proto.fruit1_i = function () {
		var t = new eui.Image();
		this.fruit1 = t;
		t.rotation = -15;
		t.source = "ap_png";
		t.x = 36;
		t.y = 39;
		return t;
	};
	_proto.fruit3_i = function () {
		var t = new eui.Image();
		this.fruit3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "gp_png";
		t.x = 159;
		t.y = 25;
		return t;
	};
	_proto.fruit2_i = function () {
		var t = new eui.Image();
		this.fruit2 = t;
		t.rotation = 15;
		t.source = "bb_png";
		t.x = 113;
		t.y = 0;
		return t;
	};
	_proto.fruit5_i = function () {
		var t = new eui.Image();
		this.fruit5 = t;
		t.rotation = 15;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "lm_png";
		t.x = 494;
		t.y = 198;
		return t;
	};
	_proto.fruit4_i = function () {
		var t = new eui.Image();
		this.fruit4 = t;
		t.source = "wm_png";
		t.x = 422;
		t.y = 189;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 87.33;
		t.size = 38;
		t.text = "祎娃儿消时";
		t.textAlign = "center";
		t.textColor = 0x7a687c;
		t.verticalAlign = "middle";
		t.width = 536.67;
		t.x = 49.33;
		t.y = 102;
		return t;
	};
	_proto.treeGroup_i = function () {
		var t = new eui.Group();
		this.treeGroup = t;
		t.bottom = 3;
		t.height = 200;
		t.width = 200;
		t.x = 1;
		return t;
	};
	_proto.beganBtn_i = function () {
		var t = new eui.Image();
		this.beganBtn = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 98;
		t.source = "btn_json.open_btn_st";
		t.verticalCenter = 174;
		t.x = 328;
		return t;
	};
	return LogoinSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/LoseLayerSkin.exml'] = window.LoseLayerSkin = (function (_super) {
	__extends(LoseLayerSkin, _super);
	function LoseLayerSkin() {
		_super.call(this);
		this.skinParts = ["btnAgain","closeBtn"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnAgain_i(),this.closeBtn_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
	}
	var _proto = LoseLayerSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "lose_bg_png";
		t.x = 56;
		t.y = 235;
		return t;
	};
	_proto.btnAgain_i = function () {
		var t = new eui.Image();
		this.btnAgain = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,56,2,2);
		t.source = "btn_json.reborn_timer";
		t.width = 280;
		t.y = 542;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_json.btn_close";
		t.x = 497;
		t.y = 250;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -4.5;
		t.source = "lose_title_png";
		t.y = 177;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "再接再厉";
		t.y = 408;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "再来一次";
		t.touchEnabled = false;
		t.y = 578;
		return t;
	};
	return LoseLayerSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/PauseLayerSkin.exml'] = window.PauseLayerSkin = (function (_super) {
	__extends(PauseLayerSkin, _super);
	function PauseLayerSkin() {
		_super.call(this);
		this.skinParts = ["bg1","btn1","btn2","btn3"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg1_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this._Image1_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = PauseLayerSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.horizontalCenter = 0;
		t.source = "bg1_png";
		t.x = 10;
		t.y = 217;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,56,2,2);
		t.source = "btn_json.reborn_timer";
		t.width = 280;
		t.y = 334;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,56,2,2);
		t.source = "btn_json.reborn_timer";
		t.width = 280;
		t.y = 446;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,56,2,2);
		t.source = "btn_json.reborn_timer";
		t.width = 280;
		t.y = 558;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pause_b1_png";
		t.touchEnabled = false;
		t.y = 365;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pause_b2_png";
		t.touchEnabled = false;
		t.y = 479;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pause_b3_png";
		t.touchEnabled = false;
		t.y = 593;
		return t;
	};
	return PauseLayerSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/ResLoadingSkin.exml'] = window.ResLoadingSkin = (function (_super) {
	__extends(ResLoadingSkin, _super);
	function ResLoadingSkin() {
		_super.call(this);
		this.skinParts = ["circle","textLabel"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.circle_i(),this.textLabel_i()];
	}
	var _proto = ResLoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Image();
		this.circle = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 45;
		t.source = "circle_png";
		t.x = 320;
		t.y = 480;
		return t;
	};
	_proto.textLabel_i = function () {
		var t = new eui.Label();
		this.textLabel = t;
		t.horizontalCenter = 0;
		t.text = "0/0";
		t.verticalCenter = 0;
		return t;
	};
	return ResLoadingSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/TestSkin.exml'] = window.TestSkin = (function (_super) {
	__extends(TestSkin, _super);
	function TestSkin() {
		_super.call(this);
		this.skinParts = ["btn","label"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.btn_i(),this.label_i()];
	}
	var _proto = TestSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "按钮";
		t.x = 219;
		t.y = 516;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.text = "标签";
		t.textColor = 0xB50B0B;
		t.x = 160;
		t.y = 164;
		return t;
	};
	return TestSkin;
})(eui.Skin);generateEUI.paths['resource/gameSkin/WinUISkin.exml'] = window.WinUISkin = (function (_super) {
	__extends(WinUISkin, _super);
	function WinUISkin() {
		_super.call(this);
		this.skinParts = ["bg1","bg2","starBg","star3","star2","star1","socker","nice","btn1Bg","btn2Bg","btn3Bg","numLabel"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg1_i(),this.bg2_i(),this.starBg_i(),this.star3_i(),this.star2_i(),this.star1_i(),this.socker_i(),this.nice_i(),this.btn1Bg_i(),this._Image1_i(),this.btn2Bg_i(),this._Image2_i(),this.btn3Bg_i(),this._Image3_i(),this.numLabel_i()];
	}
	var _proto = WinUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.horizontalCenter = 0;
		t.source = "bg1_png";
		t.y = 207;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.horizontalCenter = -10;
		t.source = "bgBlack3_png";
		t.y = 423;
		return t;
	};
	_proto.starBg_i = function () {
		var t = new eui.Image();
		this.starBg = t;
		t.horizontalCenter = 0;
		t.source = "star_empty_png";
		t.y = 254;
		return t;
	};
	_proto.star3_i = function () {
		var t = new eui.Image();
		this.star3 = t;
		t.rotation = 15;
		t.source = "star_png";
		t.x = 404;
		t.y = 245;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.source = "star_png";
		t.x = 250;
		t.y = 250;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.rotation = -15;
		t.source = "star_png";
		t.x = 98;
		t.y = 282;
		return t;
	};
	_proto.socker_i = function () {
		var t = new eui.Image();
		this.socker = t;
		t.horizontalCenter = 0;
		t.source = "win_score_png";
		t.y = 450;
		return t;
	};
	_proto.nice_i = function () {
		var t = new eui.Image();
		this.nice = t;
		t.horizontalCenter = 0;
		t.source = "win_title_png";
		t.y = 143;
		return t;
	};
	_proto.btn1Bg_i = function () {
		var t = new eui.Image();
		this.btn1Bg = t;
		t.source = "btn_json.reborn_timer";
		t.x = 135;
		t.y = 618;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "btn_json.win_btn_menu";
		t.touchEnabled = false;
		t.x = 165;
		t.y = 646;
		return t;
	};
	_proto.btn2Bg_i = function () {
		var t = new eui.Image();
		this.btn2Bg = t;
		t.source = "btn_json.reborn_timer";
		t.x = 268;
		t.y = 618;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "btn_json.win_btn_retry";
		t.touchEnabled = false;
		t.x = 301;
		t.y = 646;
		return t;
	};
	_proto.btn3Bg_i = function () {
		var t = new eui.Image();
		this.btn3Bg = t;
		t.source = "btn_json.reborn_timer";
		t.x = 401;
		t.y = 618;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "btn_json.win_btn_next";
		t.touchEnabled = false;
		t.x = 430;
		t.y = 650;
		return t;
	};
	_proto.numLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.numLabel = t;
		t.font = "num1_fnt";
		t.horizontalCenter = 0;
		t.text = "100";
		t.y = 506;
		return t;
	};
	return WinUISkin;
})(eui.Skin);