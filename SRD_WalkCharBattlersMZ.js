/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/SRD-MZ-Plugins-Ported-MNKR/refs/heads/main/SRD_WalkCharBattlersMZ.js
 * @plugindesc Allows developers to use Walk Character images as side-view battlers for Actors.
 * @author SumRndmDde (MZ port Munokura)
 *
 * @param Default Scale
 * @desc The default scale of the character images for battlers when one is not specified.
 * @default 1
 *
 * @param Use Battler Shadow?
 * @desc If 'true', then the Walk Character Battlers will use the Shadow image underneath them.
 * @default false
 *
 * @param Default Death Style
 * @desc The way an Actor with walk character battlers dies.
 * Choices are:  instant | fade | lay
 * @default lay
 *
 * @param Default Victory Motion
 * @desc The default motion used by Actors for when the party wins a battle.
 * @default down
 *
 * @param Default Enemy Weapon
 * @desc The default Weapon ID used by Walk Character Enemy Battlers. Set as "0" for none.
 * @default 0
 *
 * @param Fade Duration
 * @desc The duration of the death fading motion.
 * @default 48
 *
 * @param Lay Duration
 * @desc The duration of the death laying motion.
 * @default 24
 *
 * @help
 *
 * Walk Character Battlers
 * Version 1.02
 * SumRndmDde
 *
 *
 * This plugin allows developers to use Walk Character images as side-view 
 * battlers for Actors and Enemies.
 *
 *
 * ==============================================================================
 *  Actor/Enemy Notetags
 * ==============================================================================
 *
 * In order to set up the character image to function as a battler on an Actor
 * or Enemy, use the following notetags:
 *
 *
 *   <Walk Battler: [image-name]>
 *
 * Set "image-name" to the name of the image in the /img/characters/ folder to
 * be used as a battler. 
 *
 *
 *   <Walk Battler Index: [image-index]>
 *
 * Set "image-index" to the index (from 0 - 7) of the character in the image 
 * file. If the character image file is a "single character" image, you do not 
 * need to worry about using this notetag.
 *
 *
 *   <Walk Battler Scale: [scale]>
 *
 * Set "scale" to a value to represent how big the battler is scaled relative
 * to the original image. Setting this to 1 would make it the same size as the 
 * characters in the image. 2 would double the size, 0.5 would half it, etc.
 *
 *
 *   <Walk Battler Sleep: [image-name]>
 *
 * If you wish for the sleep and dead motion characters to have closed eyes, 
 * you can set a specific file to do so.
 *
 *
 *   <Walk Battler Sleep Index: [image-index]>
 *
 * The index within the Sleep Image that is used on sleep and dead motions
 *
 *
 * ==============================================================================
 *  Battle Death Type
 * ==============================================================================
 *
 * There are three death types that can be used when using Walk Character 
 * Battlers:
 *
 *  -  instant
 *  -  fade
 *  -  lay
 *
 *
 * These determine what happens to the sprite when the battler is knocked out.
 *
 * "Instant" instantly removes the sprite from the battle.
 *
 * "Fade" fades the sprite from the battle.
 *
 * "Lay" makes the sprite lay 90 degrees.
 *
 *
 *
 * These can be customized on a Actor/Enemy basis using the notetag:
 *
 *   <Walk Battler Death Type: [type]>
 *
 * Example:
 *
 *   <Walk Battler Death Type: lay>
 *
 *
 * ==============================================================================
 *  Victory Motion
 * ==============================================================================
 *
 * Since there's no standard "Victory" animation for Walking Characters, this
 * can be customized for Actors using the Parameter or the following Actor 
 * notetag:
 *
 *   <Walk Battler Victory Motion: [motion]>
 *
 * Example:
 *
 *   <Walk Battler Victory Motion: spin>
 *
 *
 * ==============================================================================
 *  Enemy Weapon
 * ==============================================================================
 *
 * If you wish to customize the weapon used by the Enemy use the following Enemy
 * notetag:
 *
 *   <Walk Battler Weapon ID: [weapon-id]>
 *
 * Example:
 *
 *   <Walk Battler Weapon ID: 2>
 *
 * The example will make it so the Enemy will show the sprite of Weapon ID 2
 * from the database.
 *
 *
 * ==============================================================================
 *  Edited Battler Motions
 * ==============================================================================
 *
 * As you can imagine, not all the battler motions can be replicated with simple
 * Walk Character sprites; however some of them can. Here is a list of them:
 *
 *  -  wait
 *  -  abnormal
 *  -  dying
 *  -  victory
 *  -  escape
 *  -  sleep
 *  -  dead
 *
 * All the other motions will use the same left-looking walking animation.
 *
 *
 * ==============================================================================
 *  New Battler Motions
 * ==============================================================================
 *
 * The following are new motions added to Actor Battlers:
 *
 *  -  up
 *  -  down
 *  -  right
 *  -  spin
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */
/*:ja
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/SRD-MZ-Plugins-Ported-MNKR/refs/heads/main/SRD_WalkCharBattlersMZ.js
 * @plugindesc 歩行キャラの画像をアクターや敵のSVバトラーとして使用できます。
 * @author SumRndmDde（改変：ムノクラ）
 *
 * @param Default Scale
 * @text デフォルト拡縮率
 * @desc デフォルトの拡縮率
 * @default 1
 *
 * @param Use Battler Shadow?
 * @text バトラーの影を表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 歩行キャラバトラーはその下の影の画像を表示
 * 表示:true / 非表示:false
 * @default false
 *
 * @param Default Death Style
 * @text デフォルトの戦闘不能スタイル
 * @type select
 * @option 即非表示
 * @value instant
 * @option フェード
 * @value fade
 * @option 横たわる
 * @value lay
 * @desc 歩行キャラバトラー使用アクターの戦闘不能の表示
 * 即非表示:instant / フェード:fade / 横たわる:lay
 * @default lay
 *
 * @param Default Victory Motion
 * @text デフォルト勝利モーション
 * @type select
 * @option 上
 * @value up
 * @option 下
 * @value down
 * @option 右
 * @value right
 * @option スピン
 * @value spin
 * @desc 戦闘勝利時のデフォルトのモーション
 * @default down
 *
 * @param Default Enemy Weapon
 * @text デフォルトの敵キャラ武器
 * @type number
 * @desc 歩行キャラ敵キャラバトラーが使用するデフォルトの武器ID
 * なしの場合"0"に設定
 * @default 0
 *
 * @param Fade Duration
 * @text フェード時間
 * @type number
 * @desc 死亡時のフェードモーションの時間
 * @default 48
 *
 * @param Lay Duration
 * @text 倒れる時間
 * @type number
 * @desc 倒れるモーションの時間
 * @default 24
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://x.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/walk-character-battlers/
 *
 *
 * Walk Character Battlers
 * Version 1.02
 * SumRndmDde
 *
 *
 * 歩行キャラの画像をアクターや敵のSVバトラーとして使用できます。
 *
 *
 * ==========================================================================
 *  アクター/敵キャラのメモタグ
 * ==========================================================================
 *
 * アクターや敵キャラの戦闘画像に歩行キャラを設定するには、
 * 以下のメモタグを使用します。
 *
 * 1.Walk Battlerタグ（必須）
 * <Walk Battler: [image-name]>
 * 'image-name'には、 /img/characters/ フォルダ内の画像の名前を設定します。
 * 
 * 2.Walk Battler Indexタグ（ケースにより必須）
 *   <Walk Battler Index: [image-index]>
 * 'image-index'には、キャラクター画像のインデックス(0～7まで)を設定します。
 * キャラクター画像ファイルが'single character'の画像であれば、
 * このメモタグの使用は気にする必要はありません。
 *
 * 
 * # デフォルト画像での設定例
 * <Walk Battler: Actor1>
 * <Walk Battler Index: 5>
 * この2行をメモ欄に記述すると、
 * MZデフォルトのアクターキャラであるケイシーが割り当てられます。
 * 
 * 
 * 3.Walk Battler Scaleタグ（任意）
 *   <Walk Battler Scale: [scale]>
 * 'scale'には、元の画像に対するバトラーの拡縮率を表す値を設定します。
 * これを1に設定すると、画像内の文字と同じサイズになります。
 * 2に設定すると2倍、0.5に設定すると半分になります。
 *
 * 4.Walk Battler Sleepタグ（任意）
 *   <Walk Battler Sleep: [image-name]>
 * 睡眠や戦闘不能モーションのキャラクターに目を閉じた状態にしたい場合、
 * 特定のファイルを設定しておくことで、そのような状態にすることができます。
 *
 *5.Walk Battler Sleep Index（任意）
 *   <Walk Battler Sleep Index: [image-index]>
 * 睡眠やデッドモーションで使用されているスリープイメージ内のインデックス
 * 指定方法は、2.Walk Battler Indexタグと同じです。
 *
 *
 * ==========================================================================
 *  バトル死亡タイプ
 * ==========================================================================
 *
 * 歩行キャラバトラーを使用する際に使用できる死亡タイプは3種類あります。
 *
 *  -  instant
 *  -  fade
 *  -  lay
 *
 *
 * これらの設定では、ノックアウトされた時、画像がどうなるかを決定します。
 *
 * 'Instant'は即座に非表示にします。
 *
 * 'Fade'は戦闘から画像をフェードさせます．
 *
 * 'Lay'は画像を90度寝かせます．
 *
 *
 * メモタグを使用して、アクター/エネミー毎にカスタマイズできます。
 *
 *
 *   <Walk Battler Death Type: [type]>
 *
 * 例:
 *   <Walk Battler Death Type: lay>
 *
 *
 * ==========================================================================
 *  勝利モーション
 * ==========================================================================
 *
 * 歩行キャラには標準的な'勝利'アニメーションがないので、
 * パラメータや以下のアクターのメモタグを使ってカスタマイズできます。
 *
 *   <Walk Battler Victory Motion: [motion]>
 *
 * 例:
 *   <Walk Battler Victory Motion: spin>
 *
 *
 * ==========================================================================
 *  敵の武器
 * ==========================================================================
 *
 * 敵キャラが使用する武器をカスタマイズしたい場合、
 * 以下の敵キャラのメモタグを使用してください。
 *
 *   <Walk Battler Weapon ID: [weapon-id]>
 *
 * 例:
 *   <Walk Battler Weapon ID: 2>
 *
 * この例では、データベースから武器ID2の画像が敵キャラに表示されます。
 *
 *
 * ==========================================================================
 *  バトラーモーションを編集
 * ==========================================================================
 *
 * 全てのバトラーの動きを歩行キャラの画像で再現できるわけではありませんが、
 * 中には再現できるものもあります。
 * 以下にそのリストを示します。
 *
 *  -  wait
 *  -  abnormal
 *  -  dying
 *  -  victory
 *  -  escape
 *  -  sleep
 *  -  dead
 *
 * 他のモーションは全て同じ左向きの歩行アニメーションを使用します。
 *
 *
 * ==========================================================================
 *  新しいバトラーモーション
 * ==========================================================================
 *
 * アクターバトラーに追加された新モーションは以下の通りです。
 *
 *  -  up
 *  -  down
 *  -  right
 *  -  spin
 *
 *
 * ==========================================================================
 *  ヘルプファイルの終わり
 * ==========================================================================
 *
 * ヘルプファイルの終わりへようこそ。
 *
 * 読んでくれてありがとう!
 * 質問があったり、このプラグインを楽しめたら、
 * 私のYouTubeチャンネルを登録してください!!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * 次の機会まで
 *   ~ SumRndmDde
 *
 * ==========================================================================
 *  謝辞
 * ==========================================================================
 * 移植方法をご教示くださった、DarkPlasma氏に感謝いたします。
 */

var SRD = SRD || {};
SRD.WalkCharBattlers = SRD.WalkCharBattlers || {};

var Imported = Imported || {};
Imported["SumRndmDde Walk Character Battlers"] = 1.02;

function Sprite_WalkCharEnemy() {
	this.initialize.apply(this, arguments);
}

(function (_) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.WalkCharBattler
	//-----------------------------------------------------------------------------

	const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
	const params = PluginManager.parameters(pluginName);

	_.scale = parseFloat(params['Default Scale']);
	_.shadow = String(params['Use Battler Shadow?']).trim().toLowerCase() === 'true';
	_.deathStyle = String(params['Default Death Style']).toLowerCase();
	_.victoryMotion = String(params['Default Victory Motion']).toLowerCase();
	_.enemyWeapon = parseInt(params['Default Enemy Weapon']);
	_.collpaseDuration = parseInt(params['Lay Duration']);
	_.fadeDuration = parseInt(params['Fade Duration']);

	_.loadNotetags = function (data, isActor) {
		const tag1 = /<Walk\s*Battler\s*:\s*(.*)\s*>/im;
		const tag2 = /<Walk\s*Battler\s*Index\s*:\s*(.*)\s*>/im;
		const tag3 = /<Walk\s*Battler\s*Scale\s*:\s*(.*)\s*>/im;
		const tag4 = /<Walk\s*Battler\s*Sleep:\s*(.*)\s*>/im;
		const tag5 = /<Walk\s*Battler\s*Sleep\s*Index:\s*(.*)\s*>/im;
		const tag6 = /<Walk\s*Battler\s*Death\s*Type\s*:\s*(.*)\s*>/im;
		const tagA = /<Walk\s*Battler\s*Victory\s*Motion\s*:\s*(.*)\s*>/im;
		const tagE = /<Walk\s*Battler\s*Weapon\s*ID\s*:\s*(.*)\s*>/im;
		for (let i = 1; i < data.length; i++) {
			const battler = data[i];
			if (battler) {
				if (battler.note.match(tag1)) {
					battler._wcb_battler = String(RegExp.$1);
					ImageManager.loadCharacter(battler._wcb_battler);
				}
				if (battler.note.match(tag2)) {
					battler._wcb_battlerIndex = parseInt(RegExp.$1);
				}
				if (battler.note.match(tag3)) {
					battler._wcb_battlerScale = parseFloat(RegExp.$1);
				}
				if (battler.note.match(tag4)) {
					battler._wcb_battlerSleep = String(RegExp.$1);
					ImageManager.loadCharacter(battler._wcb_battlerSleep);
				}
				if (battler.note.match(tag5)) {
					battler._wcb_battlerSleepIndex = parseInt(RegExp.$1);
				}
				if (battler.note.match(tag6)) {
					battler._wcb_battlerDeath = String(RegExp.$1).toLowerCase();
				}
				if (isActor) {
					if (battler.note.match(tagA)) {
						battler._wcb_victoryMotion = String(RegExp.$1).toLowerCase();
					}
				} else {
					if (battler.note.match(tagE)) {
						battler._wcb_battlerWeapon = parseInt(RegExp.$1);
					}
				}
			}
		}
	};

	//-----------------------------------------------------------------------------
	// DataManager
	//-----------------------------------------------------------------------------

	let notetagsLoaded = false;
	const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function () {
		if (!_DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
		if (!notetagsLoaded) {
			_.loadNotetags($dataActors, true);
			_.loadNotetags($dataEnemies, false);
			notetagsLoaded = true;
		}
		return true;
	};

	//-----------------------------------------------------------------------------
	// Game_Actor
	//-----------------------------------------------------------------------------

	const _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
	Game_Battler.prototype.initMembers = function () {
		_Game_Battler_initMembers.apply(this, arguments);
		this._walkBattlerMotion = '';
	};

	Game_Battler.prototype.isWalkBattler = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		return !!(battler._wcb_battler);
	};

	Game_Battler.prototype.walkBattlerName = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		if (this.walkBattlerIsSleep()) {
			return battler._wcb_battlerSleep;
		}
		return battler._wcb_battler;
	};

	Game_Battler.prototype.walkBattlerIsSleep = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		return (battler._wcb_battlerSleep && (this._walkBattlerMotion === 'sleep' ||
			(this._walkBattlerMotion === 'dead' && this.walkBattlerDeath() === 'lay')));
	};

	Game_Battler.prototype.walkBattlerIndex = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		if (this.walkBattlerIsSleep()) {
			return (battler._wcb_battlerSleepIndex) ? battler._wcb_battlerSleepIndex : 0;
		}
		return (battler._wcb_battlerIndex) ? battler._wcb_battlerIndex : 0;
	};

	Game_Battler.prototype.walkBattlerScale = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		return (battler._wcb_battlerScale) ? battler._wcb_battlerScale : _.scale;
	};

	Game_Battler.prototype.walkBattlerDeath = function () {
		const battler = (this.isEnemy()) ? this.enemy() : this.actor();
		return (battler._wcb_battlerDeath) ? battler._wcb_battlerDeath : _.deathStyle;
	};

	if (Imported.YEP_BattleEngineCore) {
		const _Game_Battler_requestMotionRefresh = Game_Battler.prototype.requestMotionRefresh;
		Game_Battler.prototype.requestMotionRefresh = function () {
			_Game_Battler_requestMotionRefresh.apply(this, arguments);
			if (this.isDead() && this.battler()._walkBattlerMotion !== 'dead') {
				this.requestMotion('dead');
			}
		};
	}

	//-----------------------------------------------------------------------------
	// Game_Actor
	//-----------------------------------------------------------------------------

	Game_Actor.prototype.walkBattlerVictory = function () {
		const battler = this.actor();
		return (battler._wcb_victoryMotion) ? battler._wcb_victoryMotion : _.victoryMotion;
	};

	const _Game_Actor_performVictory = Game_Actor.prototype.performVictory;
	Game_Actor.prototype.performVictory = function () {
		if (this.isWalkBattler()) {
			if (this.canMove()) {
				this.requestMotion(this.walkBattlerVictory());
			}
		} else {
			_Game_Actor_performVictory.apply(this, arguments);
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Enemy
	//-----------------------------------------------------------------------------

	Game_Battler.prototype.walkBattlerWeapon = function () {
		const battler = this.enemy();
		return (battler._wcb_battlerWeapon) ? battler._wcb_battlerWeapon : _.enemyWeapon;
	};

	Game_Enemy.prototype.weapons = function () {
		const id = this.walkBattlerWeapon();
		return (id) ? [$dataWeapons[id]] : [];
	};

	const _Game_Enemy_isUndecided = Game_Enemy.prototype.isUndecided;
	Game_Enemy.prototype.isUndecided = function () {
		if (this.isWalkBattler()) {
			return true;
		}
		return _Game_Enemy_isUndecided.apply(this, arguments);
	};

	const _Game_Enemy_performAction = Game_Enemy.prototype.performAction;
	Game_Enemy.prototype.performAction = function (action) {
		if (this.isWalkBattler()) {
			Game_Actor.prototype.performAction.call(this, action);
		} else {
			_Game_Enemy_performAction.apply(this, arguments);
		}
	};

	Game_Enemy.prototype.performAttack = function () {
		const weapons = this.weapons();
		const wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
		const attackMotion = $dataSystem.attackMotions[wtypeId];
		if (attackMotion) {
			if (attackMotion.type === 0) {
				this.requestMotion('thrust');
			} else if (attackMotion.type === 1) {
				this.requestMotion('swing');
			} else if (attackMotion.type === 2) {
				this.requestMotion('missile');
			}
			this.startWeaponAnimation(attackMotion.weaponImageId);
		}
	};

	const _Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
	Game_Enemy.prototype.performDamage = function () {
		if (this.isWalkBattler()) {
			Game_Actor.prototype.performDamage.call(this);
		} else {
			_Game_Enemy_performDamage.apply(this, arguments);
		}
	};

	const _Game_Enemy_performEvasion = Game_Enemy.prototype.performEvasion;
	Game_Enemy.prototype.performEvasion = function () {
		if (this.isWalkBattler()) {
			Game_Actor.prototype.performEvasion.call(this);
		} else {
			_Game_Enemy_performEvasion.apply(this, arguments);
		}
	};

	const _Game_Enemy_performMagicEvasion = Game_Enemy.prototype.performMagicEvasion;
	Game_Enemy.prototype.performMagicEvasion = function () {
		if (this.isWalkBattler()) {
			Game_Actor.prototype.performMagicEvasion.call(this);
		} else {
			_Game_Enemy_performMagicEvasion.apply(this, arguments);
		}
	};

	const _Game_Enemy_performCounter = Game_Enemy.prototype.performCounter;
	Game_Enemy.prototype.performCounter = function () {
		if (this.isWalkBattler()) {
			Game_Actor.prototype.performCounter.call(this);
		} else {
			_Game_Enemy_performCounter.apply(this, arguments);
		}
	};

	Game_Enemy.prototype.performVictory = function () {
		if (this.canMove()) {
			this.requestMotion('victory');
		}
	};

	Game_Enemy.prototype.performEscape = function () {
		if (this.canMove()) {
			this.requestMotion('escape');
		}
	};

	//-----------------------------------------------------------------------------
	// Sprite_Actor
	//-----------------------------------------------------------------------------

	Sprite_Actor.MOTIONS.up = { index: 0, loop: true };
	Sprite_Actor.MOTIONS.down = { index: 0, loop: true };
	Sprite_Actor.MOTIONS.right = { index: 0, loop: true };
	Sprite_Actor.MOTIONS.left = { index: 0, loop: true };
	Sprite_Actor.MOTIONS.spin = { index: 0, loop: true };

	const _Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
	Sprite_Actor.prototype.initMembers = function () {
		_Sprite_Actor_initMembers.apply(this, arguments);
		this._walkBattlerCollapse = 0;
		this._walkBattlerCollapseType = _.deathStyle;
		this._walkBattlerDead = false;
		this._walkBattlerSleep = 0;
		this._walkBattlerRevive = 0;
		this._walkBattlerSpin = 1;
		this._walkBattlerDirection = 1;
	};

	const _Sprite_Actor_updateMain = Sprite_Actor.prototype.updateMain;
	Sprite_Actor.prototype.updateMain = function () {
		_Sprite_Actor_updateMain.apply(this, arguments);
		if (this._walkBattlerCollapse > 0) {
			if (this._walkBattlerCollapseType === 'lay') {
				this.updateWalkCharacterLayCollapse();
			} else if (this._walkBattlerCollapseType === 'instant') {
				this.opacity = 0;
				this._walkBattlerCollapse = 0;
			} else {
				this.updateWalkCharacterCollapse();
			}
		}
		if (this._walkBattlerSleep > 0) this.updateWalkCharacterLaySleep();
		if (this._walkBattlerRevive > 0) this.updateWalkCharacterLayRevive();
	};

	const _Sprite_Actor_startMotion = Sprite_Actor.prototype.startMotion;
	Sprite_Actor.prototype.startMotion = function (motionType) {
		if (this._battler.isWalkBattler()) {
			if (motionType === 'dead' && this._walkBattlerMotion !== motionType) {
				if (this._walkBattlerCollapseType === 'lay') {
					this._walkBattlerCollapse = _.collpaseDuration;
				} else if (this._walkBattlerCollapseType === 'instant') {
					this._walkBattlerCollapse = 5;
				} else {
					this._walkBattlerCollapse = _.fadeDuration;
				}
				this._appeard = false;
				this._walkBattlerDead = true;
			} else if (motionType === 'sleep' && this._motion !== Sprite_Actor.MOTIONS[motionType]) {
				this._walkBattlerSleep = _.collpaseDuration;
				this._walkBattlerDead = true;
			}
			if ((this._walkBattlerMotion === 'dead' || this._walkBattlerMotion === 'sleep') &&
				this._walkBattlerMotion !== motionType) {
				this._appeard = true;
				this._walkBattlerDead = false;
				this._walkBattlerRevive = _.collpaseDuration;
			}
			this._walkBattlerMotion = motionType;
			if (this._battler) {
				this._battler._walkBattlerMotion = motionType;
			}
		}
		_Sprite_Actor_startMotion.apply(this, arguments);
	};

	const _Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
	Sprite_Actor.prototype.setBattler = function (battler) {
		_Sprite_Actor_setBattler.apply(this, arguments);
		if (battler && battler.isWalkBattler()) {
			if (!_.shadow) this.removeChild(this._shadowSprite);
			this._walkBattlerCollapseType = battler.walkBattlerDeath();
		}
	};

	Sprite_Actor.prototype.updateWalkCharacterCollapse = function () {
		// this.blendMode = Graphics.BLEND_ADD;
		this.setBlendColor([255, 64, 64, 128]);
		this.opacity *= this._walkBattlerCollapse / (this._walkBattlerCollapse + 1);
		this._walkBattlerCollapse--;
		this.blendMode = PIXI.BLEND_MODES.ADD;	//DarkPlasma
	};

	Sprite_Actor.prototype.updateWalkCharacterLayCollapse = function () {
		if (this._walkBattlerCollapse > (_.collpaseDuration / 2)) {
			this._mainSprite.y -= 0.5;
		} else {
			this._mainSprite.y += 0.5;
		}
		this._mainSprite.x -= (this._mainSprite.width / (_.collpaseDuration * 2))
		this._mainSprite.rotation = -((Math.PI / 2) * ((this._walkBattlerCollapse - _.collpaseDuration) / _.collpaseDuration));
		this._walkBattlerCollapse--;
	};

	Sprite_Actor.prototype.updateWalkCharacterLaySleep = function () {
		if (this._walkBattlerSleep > (_.collpaseDuration / 2)) {
			this._mainSprite.y -= 0.5;
		} else {
			this._mainSprite.y += 0.5;
		}
		this._mainSprite.x -= (this._mainSprite.width / (_.collpaseDuration * 2))
		this._mainSprite.rotation = -((Math.PI / 2) * ((this._walkBattlerSleep - _.collpaseDuration) / _.collpaseDuration));
		this._walkBattlerSleep--;
	};

	Sprite_Actor.prototype.updateWalkCharacterLayRevive = function () {
		if (this._walkBattlerRevive > (_.collpaseDuration / 2)) {
			this._mainSprite.y += 0.5;
		} else {
			this._mainSprite.y -= 0.5;
		}
		this._mainSprite.x += (this._mainSprite.width / (_.collpaseDuration * 2))
		this._mainSprite.rotation = ((Math.PI / 2) * ((this._walkBattlerRevive) / _.collpaseDuration));
		this._walkBattlerRevive--;
		if (this._walkBattlerRevive === 0) this._mainSprite.rotation = 0;
	};

	const _Sprite_Actor_updateBitmap = Sprite_Actor.prototype.updateBitmap;
	Sprite_Actor.prototype.updateBitmap = function () {
		if (this._battler.isWalkBattler()) {
			Sprite_Battler.prototype.updateBitmap.call(this);
			const name = this._battler.walkBattlerName();
			if (this._battlerName !== name) {
				this._battlerName = name;
				this._walkCharacterIndex = this._battler.walkBattlerIndex();
				this._isBigWalkCharacter = ImageManager.isBigCharacter(name);
				this.setupWalkCharacterBitmap(name);
			}
		} else {
			_Sprite_Actor_updateBitmap.apply(this, arguments);
		}
	};

	Sprite_Actor.prototype.setupWalkCharacterBitmap = function (name) {
		const scale = this._battler.walkBattlerScale();
		const source = ImageManager.loadCharacter(name);
		const width = source.width * scale;
		const height = source.height * scale;
		this._mainSprite.bitmap = new Bitmap(width, height);
		this._mainSprite.bitmap.blt(source, 0, 0, source.width, source.height, 0, 0, width, height);
	};

	const _Sprite_Actor_updateFrame = Sprite_Actor.prototype.updateFrame;
	Sprite_Actor.prototype.updateFrame = function () {
		if (this._battler.isWalkBattler()) {
			Sprite_Battler.prototype.updateFrame.call(this);
			const bitmap = this._mainSprite.bitmap;
			if (bitmap) {
				const i = this._walkCharacterIndex;
				let j = (this._pattern < 3) ? this._pattern : 1;
				if (this._walkBattlerDead || this._walkBattlerMotion === 'wait') j = 1;
				let dir = this._walkBattlerDirection;
				if (this._walkBattlerMotion === 'escape' || this._walkBattlerMotion === 'right') {
					dir = 2;
				} else if (this._walkBattlerMotion === 'victory' || this._walkBattlerMotion === 'up') {
					dir = 3;
				} else if (this._walkBattlerMotion === 'down') {
					dir = 0;
				} else if (this._walkBattlerMotion === 'spin') {
					dir = this._walkBattlerSpin;
				}
				let cw;
				let ch;
				let cx;
				let cy;
				if (this._isBigWalkCharacter) {
					cw = bitmap.width / 3;
					ch = bitmap.height / 4;
					cx = j;
					cy = dir;
				} else {
					cw = bitmap.width / 12;
					ch = bitmap.height / 8;
					cx = j + ((i > 3) ? ((i - 4) * 3) : (i * 3));
					cy = dir + ((i > 3) ? 4 : 0);
				}
				this._mainSprite.setFrame(cx * cw, (cy * ch), cw, ch);
			}
		} else {
			_Sprite_Actor_updateFrame.apply(this, arguments);
		}
	};

	const _Sprite_Actor_updateMotionCount = Sprite_Actor.prototype.updateMotionCount;
	Sprite_Actor.prototype.updateMotionCount = function () {
		if (this._battler.isWalkBattler()) {
			if (this._motion && ++this._motionCount >= this.motionSpeed()) {
				this._pattern = (this._pattern + 1) % 4;
				this._motionCount = 0;
				if (this._walkBattlerMotion === 'spin') this._walkBattlerSpin += (this._walkBattlerSpin === 3) ? -3 : 1;
			}
		} else {
			_Sprite_Actor_updateMotionCount.apply(this, arguments);
		}
	};

	const _Sprite_Actor_motionSpeed = Sprite_Actor.prototype.motionSpeed;
	Sprite_Actor.prototype.motionSpeed = function () {
		if (this._battler.isWalkBattler() && (this._walkBattlerMotion === 'abnormal' ||
			this._walkBattlerMotion === 'dying')) {
			return _Sprite_Actor_motionSpeed.apply(this, arguments) * 2;
		} else if (this._battler.isWalkBattler() && (this._walkBattlerMotion === 'escape')) {
			return _Sprite_Actor_motionSpeed.apply(this, arguments) / 2;
		}
		return _Sprite_Actor_motionSpeed.apply(this, arguments);
	};

	//-----------------------------------------------------------------------------
	// Sprite_WalkCharEnemy
	//-----------------------------------------------------------------------------

	Sprite_WalkCharEnemy.prototype = Object.create(Sprite_Actor.prototype);
	Sprite_WalkCharEnemy.prototype.constructor = Sprite_WalkCharEnemy;

	Sprite_WalkCharEnemy.prototype.initMembers = function () {
		Sprite_Actor.prototype.initMembers.call(this);
		this._walkBattlerDirection = 2;
	};

	Sprite_WalkCharEnemy.prototype.createWeaponSprite = function () {
		Sprite_Actor.prototype.createWeaponSprite.call(this);
		this._weaponSprite.scale.x *= (-1);
		this._weaponSprite.x += 20;
	};

	Sprite_WalkCharEnemy.prototype.setBattler = function (battler) {
		Sprite_Actor.prototype.setBattler.call(this, battler);
		this.setHome(battler.screenX(), battler.screenY());
		this._enemy = battler;
	};

	Sprite_WalkCharEnemy.prototype.startMove = function (x, y, duration) {
		Sprite_Actor.prototype.startMove.call(this, -x, y, duration);
	};

	if (Imported.YEP_BattleEngineCore) {
		Sprite_Actor.prototype.moveToStartPosition = function () {
			if (BattleManager._bypassMoveToStartLocation) return;
			if ($gameSystem.isSideView() && this._checkAliveStatus) {
				this.startMove(0, 0, 0);
			}
		};
	}

	Sprite_WalkCharEnemy.prototype.update = function () {
		Sprite_Actor.prototype.update.call(this);
		if (this._enemy) {
			this.updateEffect();
		}
	};

	Sprite_WalkCharEnemy.prototype.setupEffect = function () {
		if (this._appeared && this._enemy.isEffectRequested()) {
			this.startEffect(this._enemy.effectType());
			this._enemy.clearEffect();
		}
		if (!this._appeared && this._enemy.isAlive()) {
			this.startEffect('appear');
		} else if (this._appeared && this._enemy.isHidden()) {
			this.startEffect('disappear');
		}
	};

	Sprite_WalkCharEnemy.prototype.startEffect = function (effectType) {
		this._effectType = effectType;
		switch (this._effectType) {
			case 'appear':
				this.startAppear();
				break;
			case 'disappear':
				this.startDisappear();
				break;
			case 'whiten':
				this.startWhiten();
				break;
			case 'blink':
				this.startBlink();
				break;
			case 'collapse':
				this.startCollapse();
				break;
			case 'bossCollapse':
				this.startBossCollapse();
				break;
			case 'instantCollapse':
				this.startInstantCollapse();
				break;
		}
		this.revertToNormal();
	};

	Sprite_WalkCharEnemy.prototype.startAppear = function () {
		this._effectDuration = 16;
		this._appeared = true;
	};

	Sprite_WalkCharEnemy.prototype.startDisappear = function () {
		this._effectDuration = 32;
		this._appeared = false;
	};

	Sprite_WalkCharEnemy.prototype.startWhiten = function () {
		this._effectDuration = 16;
	};

	Sprite_WalkCharEnemy.prototype.startBlink = function () {
		this._effectDuration = 20;
	};

	Sprite_WalkCharEnemy.prototype.startCollapse = function () {
		this._effectDuration = 32;
		this._appeared = false;
	};

	Sprite_WalkCharEnemy.prototype.startBossCollapse = function () {
		this._effectDuration = this.bitmap.height;
		this._appeared = false;
	};

	Sprite_WalkCharEnemy.prototype.startInstantCollapse = function () {
		this._effectDuration = 16;
		this._appeared = false;
	};

	Sprite_WalkCharEnemy.prototype.updateEffect = function () {
		this.setupEffect();
		if (this._effectDuration > 0) {
			this._effectDuration--;
			switch (this._effectType) {
				case 'whiten':
					this.updateWhiten();
					break;
				case 'blink':
					this.updateBlink();
					break;
				case 'appear':
					this.updateAppear();
					break;
				case 'disappear':
					this.updateDisappear();
					break;
				case 'collapse':
					this.updateCollapse();
					break;
				case 'bossCollapse':
					this.updateBossCollapse();
					break;
				case 'instantCollapse':
					this.updateInstantCollapse();
					break;
			}
			if (this._effectDuration === 0) {
				this._effectType = null;
			}
		}
	};

	Sprite_WalkCharEnemy.prototype.isEffecting = function () {
		return this._effectType !== null;
	};

	Sprite_WalkCharEnemy.prototype.revertToNormal = function () {
		this._shake = 0;
		this.blendMode = 0;
		this.opacity = 255;
		this.setBlendColor([0, 0, 0, 0]);
	};

	Sprite_WalkCharEnemy.prototype.updateWhiten = function () {
		const alpha = 128 - (16 - this._effectDuration) * 10;
		this.setBlendColor([255, 255, 255, alpha]);
	};

	Sprite_WalkCharEnemy.prototype.updateBlink = function () {
		this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
	};

	Sprite_WalkCharEnemy.prototype.updateAppear = function () {
		this.opacity = (16 - this._effectDuration) * 16;
	};

	Sprite_WalkCharEnemy.prototype.updateDisappear = function () {
		this.opacity = 256 - (32 - this._effectDuration) * 10;
	};

	Sprite_WalkCharEnemy.prototype.updateCollapse = function () {
		this.blendMode = Graphics.BLEND_ADD;
		this.setBlendColor([255, 128, 128, 128]);
		this.opacity *= this._effectDuration / (this._effectDuration + 1);
		this.blendMode = PIXI.BLEND_MODES.ADD;	//DarkPlasma
	};

	Sprite_WalkCharEnemy.prototype.updateBossCollapse = function () {
		this._shake = this._effectDuration % 2 * 4 - 2;
		// this.blendMode = Graphics.BLEND_ADD;
		this.blendMode = PIXI.BLEND_MODES.ADD;	//DarkPlasma
		this.opacity *= this._effectDuration / (this._effectDuration + 1);
		this.setBlendColor([255, 255, 255, 255 - this.opacity]);
		if (this._effectDuration % 20 === 19) {
			SoundManager.playBossCollapse2();
		}
	};

	Sprite_WalkCharEnemy.prototype.updateInstantCollapse = function () {
		this.opacity = 0;
	};

	Sprite_WalkCharEnemy.prototype.damageOffsetX = function () {
		return 0;
	};

	Sprite_WalkCharEnemy.prototype.damageOffsetY = function () {
		return -8;
	};

	if (Imported.YEP_BattleEngineCore) {

		Sprite_WalkCharEnemy.prototype.preSpriteInitialize = function (battler) {
			Sprite_Battler.prototype.preSpriteInitialize.call(this, battler);
			this._visualSelect = Yanfly.Param.BECEnemySelect;
			if (this._visualSelect) this.createVisualSelectWindow();
		};

		Yanfly.BEC.Sprite_WalkCharEnemy_update = Sprite_WalkCharEnemy.prototype.update;
		Sprite_WalkCharEnemy.prototype.update = function () {
			Yanfly.BEC.Sprite_WalkCharEnemy_update.call(this);
			this.addVisualSelectWindow();
		};

		Sprite_WalkCharEnemy.prototype.addVisualSelectWindow = function () {
			if (!this._visualSelect) return;
			if (this._addedVisualSelect) return;
			if (!SceneManager._scene) return;
			const scene = SceneManager._scene;
			if (!scene._windowLayer) return;
			this._addedVisualSelect = true;
			scene.addChild(this._visualSelectWindow);
		};

		Sprite_WalkCharEnemy.prototype.createVisualSelectWindow = function () {
			this._visualSelectWindow = new Window_EnemyVisualSelect();
		};

		Yanfly.BEC.Sprite_WalkCharEnemy_setBattler = Sprite_WalkCharEnemy.prototype.setBattler;
		Sprite_WalkCharEnemy.prototype.setBattler = function (battler) {
			Yanfly.BEC.Sprite_WalkCharEnemy_setBattler.call(this, battler);
			if (this._visualSelectWindow) this._visualSelectWindow.setBattler(battler);
		};

	}

	//-----------------------------------------------------------------------------
	// Spriteset_Battle
	//-----------------------------------------------------------------------------

	const _Spriteset_Battle_createEnemies = Spriteset_Battle.prototype.createEnemies;
	Spriteset_Battle.prototype.createEnemies = function () {
		_Spriteset_Battle_createEnemies.apply(this, arguments);
		const enemies = $gameTroop.members();
		const sprites = this._enemySprites;
		for (let i = 0; i < enemies.length; i++) {
			if (enemies[i].isWalkBattler()) {
				this._battleField.removeChild(sprites[i]);
				sprites[i] = new Sprite_WalkCharEnemy(enemies[i]);
				this._battleField.addChild(sprites[i]);
			}
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Party
	//-----------------------------------------------------------------------------

	const _Game_Party_requestMotionRefresh = Game_Party.prototype.requestMotionRefresh;
	Game_Party.prototype.requestMotionRefresh = function () {
		_Game_Party_requestMotionRefresh.apply(this, arguments);
		$gameTroop.requestMotionRefresh();
	};

	//-----------------------------------------------------------------------------
	// Game_Troop
	//-----------------------------------------------------------------------------

	Game_Troop.prototype.requestMotionRefresh = function () {
		this.members().forEach(function (enemy) {
			enemy.requestMotionRefresh();
		});
	};

})(SRD.WalkCharBattlers);