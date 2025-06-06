/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/SRD-MZ-Plugins-Ported-MNKR/refs/heads/main/SRD_TitleMapBackgroundMZ.js
 * @plugindesc Allows developers to set a map to be used as the background of their title screen.
 * @author SumRndmDde
 *
 * @param Map ID
 * @desc The ID of the map used in the Title Screen.
 * @default 1
 *
 * @help
 *
 * Title Map Background
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin allows developers to set a map to be used as the background of 
 * their title screen.
 *
 * Simply set the "Map ID" Parameter to the map you wish to use on the title.
 *
 * This map will play out normally like any map would within the game.
 * Events will act/move through the map, and all the animated tiles will be
 * animated.
 *
 *
 * ==============================================================================
 *  Setting up a Camera
 * ==============================================================================
 *
 * Now, an important thing to keep in mind about the Title-Map is that it will
 * not have the Player within it. Instead, the "camera" will be positioned in
 * the top-left of the map. However, you can set up an event to act as the 
 * position the camera will focus on, similar to how the camera focuses on the 
 * player during the game.
 *
 * Simply use the notetag:
 *
 *   <Title Map Camera>
 *
 * inside the notebox of an event within the Title-Map, and the camera will
 * follow that event around in the title screen.
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
 */
/*:ja
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/SRD-MZ-Plugins-Ported-MNKR/refs/heads/main/SRD_TitleMapBackgroundMZ.js
 * @plugindesc タイトル画面の背景にマップを使用できます。
 * @author SumRndmDde（改変：ムノクラ）
 *
 * @param Map ID
 * @text マップID
 * @type number
 * @min 1
 * @desc タイトル画面で使用するマップID
 * @default 1
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://x.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/title-map-background/
 *
 *
 * Title Map Background
 * Version 1.01
 * SumRndmDde
 *
 *
 * タイトル画面の背景にマップを使用できます。
 *
 * 'Map ID'パラメータに、タイトルに使用したいマップを設定します。
 *
 * このマップは、ゲーム内の他のマップと同じように動作します。
 * イベントは、マップを介して行動/移動し、
 * 全てのアニメーションタイルがアニメーション化されます。
 *
 *
 * ==========================================================================
 *  カメラの設定
 * ==========================================================================
 *
 * タイトルマップの注意点ですが、
 * タイトルマップにはプレイヤーは含まれていません。
 * デフォルトでは、'カメラ'がマップの左上に配置されます。
 * 
 * ゲーム中にカメラがプレイヤーにフォーカスするように、
 * イベントにカメラがフォーカスする設定が可能です。
 *
 * 下記のメモタグを使います。
 *
 * <Title Map Camera>
 *
 * タイトルマップ内に作成したイベントのメモ欄の中に入れると、
 * カメラはタイトル画面内でそのイベントを追いかけます。
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
 */

var SRD = SRD || {};
SRD.TitleMapBackground = SRD.TitleMapBackground || {};

var Imported = Imported || {};
Imported["SumRndmDde Title Map Background"] = 1.01;

function Scene_TitleMapBackground() {
	this.initialize.apply(this, arguments);
}

(function (_) {

	"use strict";

	const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
	const params = PluginManager.parameters(pluginName);

	//-----------------------------------------------------------------------------
	// SRD.TitleMapBackground
	//-----------------------------------------------------------------------------

	_.mapId = parseInt(params['Map ID']);

	//-----------------------------------------------------------------------------
	// Game_Map
	//-----------------------------------------------------------------------------

	Game_Map.prototype.setDisplayPosWOParallax = function (x, y) {
		if (this.isLoopHorizontal()) {
			this._displayX = x.mod(this.width());
		} else {
			const endX = this.width() - this.screenTileX();
			this._displayX = endX < 0 ? endX / 2 : x.clamp(0, endX);
		}
		if (this.isLoopVertical()) {
			this._displayY = y.mod(this.height());
		} else {
			const endY = this.height() - this.screenTileY();
			this._displayY = endY < 0 ? endY / 2 : y.clamp(0, endY);
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_TitleMapBackground
	//-----------------------------------------------------------------------------

	Scene_TitleMapBackground.prototype = Object.create(Scene_Map.prototype);
	Scene_TitleMapBackground.prototype.constructor = Scene_TitleMapBackground;

	Scene_TitleMapBackground.prototype.create = function () {
		Scene_Base.prototype.create.call(this);
	};

	Scene_TitleMapBackground.prototype.createSpriteset = function () {
		this._spriteset = new Spriteset_TitleMapBackground();
		this.addChild(this._spriteset);
	};

	Scene_TitleMapBackground.prototype.onMapLoaded = function () {
		this.createDisplayObjects();
	};

	Scene_TitleMapBackground.prototype.updateMain = function () {
		const active = this.isActive();
		$gameMap.update(active);
		//$gamePlayer.update(active);
		$gameTimer.update(active);
		$gameScreen.update();
	};

	Scene_TitleMapBackground.prototype.stop = function () {
		Scene_Base.prototype.stop.call(this);
		this._mapNameWindow.close();
	};

	Scene_TitleMapBackground.prototype.updateTransferPlayer = function () { };
	Scene_TitleMapBackground.prototype.updateDestination = function () { };
	Scene_TitleMapBackground.prototype.processMapTouch = function () { };
	Scene_TitleMapBackground.prototype.updateEncounter = function () { };
	Scene_TitleMapBackground.prototype.updateScene = function () { };
	Scene_TitleMapBackground.prototype.updateCallMenu = function () { };

	//-----------------------------------------------------------------------------
	// Spriteset_TitleMapBackground
	//-----------------------------------------------------------------------------

	function Spriteset_TitleMapBackground() {
		this.initialize.apply(this, arguments);
	}

	Spriteset_TitleMapBackground.prototype = Object.create(Spriteset_Map.prototype);
	Spriteset_TitleMapBackground.prototype.constructor = Spriteset_TitleMapBackground;

	const _Spriteset_TitleMapBackground_initialize = Spriteset_TitleMapBackground.prototype.initialize;
	Spriteset_TitleMapBackground.prototype.initialize = function () {
		_Spriteset_TitleMapBackground_initialize.apply(this, arguments);
		const events = $gameMap.events();
		if (events.length === 0) this._titleCameraId = 0;
		for (let i = 0; i < events.length; i++) {
			if (events[i].event().note.match(/<Title\s*Map\s*Camera>/i)) {
				this._titleCameraId = (i + 1);
				break;
			}
		}
	};

	Spriteset_TitleMapBackground.prototype.updateTilemap = function () {
		if (this._titleCameraId) {
			const event = $gameMap.event(this._titleCameraId);
			if (!event) return;
			const x = event._realX;
			const y = event._realY;
			$gameMap.setDisplayPosWOParallax(x - this.centerX(), y - this.centerY());
			this._tilemap.origin.x = $gameMap.displayX() * $gameMap.tileWidth();
			this._tilemap.origin.y = $gameMap.displayY() * $gameMap.tileHeight();
		} else {
			this._tilemap.origin.x = 0;
			this._tilemap.origin.y = 0;
		}
	};

	Spriteset_TitleMapBackground.prototype.centerX = function () {
		return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0;
	};

	Spriteset_TitleMapBackground.prototype.centerY = function () {
		return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0;
	};

	//-----------------------------------------------------------------------------
	// Scene_Title
	//-----------------------------------------------------------------------------

	const _Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function () {
		_Scene_Title_create.apply(this, arguments);
		this.removeChild(this._backSprite1);
		this.removeChild(this._backSprite2)
		DataManager.loadMapData(_.mapId);
	};

	const _Scene_Title_update = Scene_Title.prototype.update;
	Scene_Title.prototype.update = function () {
		_Scene_Title_update.apply(this, arguments);
		if (this.isActive()) this.updateMapFusionScene();
	};

	Scene_Title.prototype.updateMapFusionScene = function () {
		if ($dataMap && !this._loadedMap) {
			DataManager.createGameObjects();
			$gameMap.setup(_.mapId);
			this._mapFusion = new Scene_TitleMapBackground();
			this._mapFusion.create();
			SceneManager.onSceneCreate();
			this._loadedMap = true;
		}
		if (this._mapFusion && this._loadedMap) {
			if (!this._sceneStarted && this._mapFusion.isReady()) {
				this._mapFusion.start();
				this._mapFusion.update();
				this._sceneStarted = true;
				this.addChildAt(this._mapFusion, 0);
				SceneManager.onSceneStart();
			}
		}
	};

	const _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
	Scene_Title.prototype.commandNewGame = function () {
		this._mapFusionSnap = new Sprite();
		this._mapFusionSnap.bitmap = Bitmap.snap(this._mapFusion);
		this.addChildAt(this._mapFusionSnap, 0);
		this.removeChild(this._mapFusion);
		_Scene_Title_commandNewGame.apply(this, arguments);
	};

})(SRD.TitleMapBackground);