void !(function () {
	class ImageManager {
		static images = [
			["xskutsu_debug", "https://cdn.glitch.global/848d3799-d354-4abf-bb8c-5b5d945c4c0b/47bf8351-b76c-4454-b928-88eac5f4be16.image.png?v=1743203589612"],
			["xskutsu_badge", "https://cdn.glitch.global/848d3799-d354-4abf-bb8c-5b5d945c4c0b/9318399c-fcfb-48e3-9a72-a8ab498b085b.image.png?v=1743460247751"]
		];
		static elements = new Map();
		static loadImages() {
			this.elements.clear();
			for (let i = 0; i < this.images.length; i++) {
				const data = this.images[i];
				const element = new Image();
				element.src = data[1];
				element.crossOrigin = "anonymous";
				element.onload = () => {
					this.elements.set(data[0], element);
				};
			}
		}

		static get(key) {
			return this.elements.get(key);
		}

		static isReady(key) {
			return this.elements.has(key);
		}
	}
	const themes = new Map([
		["classic", { teal: "#8EFFFB", lgreen: "#85E37D", orange: "#FC7676", yellow: "#FFEB8E", lavender: "#B58EFF", pink: "#F177DD", vlgrey: "#CDCDCD", lgrey: "#999999", guiwhite: "#FFFFFF", black: "#525252", blue: "#00B0E1", green: "#00E06C", red: "#F04F54", gold: "#FFE46B", purple: "#768CFC", magenta: "#BE7FF5", grey: "#999999", dgrey: "#545454", white: "#C0C0C0", guiblack: "#000000", border: 0.5 }],
		["normal", { teal: "#7ADBBC", lgreen: "#B9E87E", orange: "#E7896D", yellow: "#FDF380", lavender: "#B58EFD", pink: "#EF99C3", vlgrey: "#E8EBF7", lgrey: "#AA9F9E", guiwhite: "#FFFFFF", black: "#484848", blue: "#3CA4CB", green: "#8ABC3F", red: "#E03E41", gold: "#EFC74B", purple: "#8D6ADF", magenta: "#CC669C", grey: "#A7A7AF", dgrey: "#726F6F", white: "#DBDBDB", guiblack: "#000000", border: 0.65 }],
		["desert", { teal: "#76C1BB", lgreen: "#AAD35D", orange: "#dd8322", yellow: "#FFD993", lavender: "#939FFF", pink: "#a179a4", vlgrey: "#d0b7ac", lgrey: "#7F7F7F", guiwhite: "#543c2c", black: "#373834", blue: "#669cb7", green: "#1fbd6b", red: "#d86475", gold: "#ecb913", purple: "#8035b6", magenta: "#a76c9b", grey: "#71523d", dgrey: "#494954", white: "#f3b48b", guiblack: "#000000", border: 0.5 }],
		["abyss", { teal: "#7a7a7a", lgreen: "#aa0808", orange: "#291d19", yellow: "#FDF380", lavender: "#4a3f5a", pink: "#3a2c33", vlgrey: "#1c1c1c", lgrey: "#231f1f", guiwhite: "#c70a0a", black: "#0f0f0f", blue: "#0d1011", green: "#10120d", red: "#1e1010", gold: "#211d12", purple: "#191325", magenta: "#150910", grey: "#141414", dgrey: "#211537", white: "#000000", guiblack: "#000000", border: 0.5 }],
		["diepio", { teal: "#8efffb", lgreen: "#85e37d", orange: "#fc7677", yellow: "#ffeb8e", lavender: "#b68eff", pink: "#f177dd", vlgrey: "#e8ebf7", lgrey: "#999999", guiwhite: "#ffffff", black: "#555555", blue: "#00b2e1", green: "#00e16e", red: "#f14e54", gold: "#ffe869", purple: "#768dfc", magenta: "#bf7ff5", grey: "#999999", dgrey: "#726f6f", white: "#cdcdcd", guiblack: "#000000", border: 0.5 }],
		["dark", { teal: "#8975B7", lgreen: "#1BA01F", orange: "#C46748", yellow: "#B2B224", lavender: "#7D56C5", pink: "#B24FAE", vlgrey: "#1E1E1E", lgrey: "#3C3A3A", guiwhite: "#000000", black: "#E5E5E5", blue: "#379FC6", green: "#30B53B", red: "#FF6C6E", gold: "#FFC665", purple: "#9673E8", magenta: "#C8679B", grey: "#635F5F", dgrey: "#73747A", white: "#11110F", guiblack: "#FFFFFF", border: 0.15 }],
		["natural", { teal: "#76C1BB", lgreen: "#AAD35D", orange: "#E09545", yellow: "#FFD993", lavender: "#939FFF", pink: "#D87FB2", vlgrey: "#C4B6B6", lgrey: "#7F7F7F", guiwhite: "#FFFFFF", black: "#373834", blue: "#4F93B5", green: "#00B659", red: "#E14F65", gold: "#E5BF42", purple: "#8053A0", magenta: "#B67CAA", grey: "#998F8F", dgrey: "#494954", white: "#A5B2A5", guiblack: "#000000", border: 0.2 }],
		["forest", { teal: "#884AA5", lgreen: "#8C9B3E", orange: "#D16A80", yellow: "#97596D", lavender: "#499855", pink: "#60294F", vlgrey: "#DDC6B8", lgrey: "#7E949E", guiwhite: "#FFFFE8", black: "#665750", blue: "#807BB6", green: "#A1BE55", red: "#E5B05B", gold: "#FF4747", purple: "#BAC674", magenta: "#BA78D1", grey: "#998866", dgrey: "#529758", white: "#7DA060", guiblack: "#000000", border: 0.7 }],
		["midnight", { teal: "#2B9098", lgreen: "#4BAA5D", orange: "#345678", yellow: "#CDC684", lavender: "#89778E", pink: "#A85C90", vlgrey: "#CCCCCC", lgrey: "#A7B2B7", guiwhite: "#BAC6FF", black: "#091F28", blue: "#123455", green: "#098765", red: "#000013", gold: "#566381", purple: "#743784", magenta: "#B29098", grey: "#555555", dgrey: "#649EB7", white: "#444444", guiblack: "#000000", border: 0.6 }],
		["desert", { teal: "#87CEEB", lgreen: "#9ACD32", orange: "#FF7F50", yellow: "#F4A460", lavender: "#DDA0DD", pink: "#FFB6C1", vlgrey: "#F5F5DC", lgrey: "#D2B48C", guiwhite: "#FFFFF0", black: "#4B3A26", blue: "#B8860B", green: "#8FBC8F", red: "#CD5C5C", gold: "#FFA500", purple: "#9370DB", magenta: "#C71585", grey: "#BDB76B", dgrey: "#8B4513", white: "#FDF5E6", guiblack: "#654321", border: 0.4 }],
		["pastel", { teal: "#A0E7E5", lgreen: "#B4F8C8", orange: "#FFDDAA", yellow: "#FFFACD", lavender: "#D5AAFF", pink: "#F7C5CC", vlgrey: "#F8F8FF", lgrey: "#E6E6FA", guiwhite: "#FFFFFF", black: "#6A6A6A", blue: "#A7CEE3", green: "#C1E1C1", red: "#FFB6B3", gold: "#FFE4B5", purple: "#C3B1E1", magenta: "#E7BBE3", grey: "#D3D3D3", dgrey: "#A9A9A9", white: "#F5F5F5", guiblack: "#404040", border: 0.25 }],
		["grayscale", { teal: "#B0B0B0", lgreen: "#C0C0C0", orange: "#A0A0A0", yellow: "#D0D0D0", lavender: "#B8B8B8", pink: "#C8C8C8", vlgrey: "#F5F5F5", lgrey: "#E0E0E0", guiwhite: "#FFFFFF", black: "#333333", blue: "#909090", green: "#A8A8A8", red: "#808080", gold: "#D8D8D8", purple: "#989898", magenta: "#A5A5A5", grey: "#BEBEBE", dgrey: "#707070", white: "#E8E8E8", guiblack: "#000000", border: 0.5 }],
		["candy", { teal: "#AFEEEE", lgreen: "#98FB98", orange: "#FFDAB9", yellow: "#FFFFE0", lavender: "#E6E6FA", pink: "#FFB6C1", vlgrey: "#FFF0F5", lgrey: "#FFE4E1", guiwhite: "#FFFFFF", black: "#4B0082", blue: "#87CEFA", green: "#90EE90", red: "#FF6347", gold: "#FFEC8B", purple: "#DDA0DD", magenta: "#EE82EE", grey: "#D3D3D3", dgrey: "#A9A9A9", white: "#FFFFFF", guiblack: "#2F4F4F", border: 0.3 }],
		["retro", { teal: "#00F0FF", lgreen: "#FF44CC", orange: "#FF9900", yellow: "#FFF056", lavender: "#9D65FF", pink: "#FF6B97", vlgrey: "#1A1033", lgrey: "#2A1855", guiwhite: "#00F0FF", black: "#FFF056", blue: "#4D7FFF", green: "#33FF99", red: "#FF5555", gold: "#FFCC00", purple: "#B57EDC", magenta: "#F553A0", grey: "#443377", dgrey: "#6644AA", white: "#251548", guiblack: "#0F051F", border: 0.6 }],
		["arctic", { teal: "#A0D2DB", lgreen: "#C0E8EF", orange: "#F8DDA4", yellow: "#FFFACD", lavender: "#B4C5E4", pink: "#D8DEE9", vlgrey: "#F0F8FF", lgrey: "#E6F2FF", guiwhite: "#FFFFFF", black: "#3B4252", blue: "#81A1C1", green: "#8FBCBB", red: "#BF616A", gold: "#EBCB8B", purple: "#B48EAD", magenta: "#C6A9D9", grey: "#D8DEE9", dgrey: "#4C566A", white: "#ECEFF4", guiblack: "#2E3440", border: 0.75 }],
		["sepia", { teal: "#A0947C", lgreen: "#B8AC91", orange: "#D4B781", yellow: "#EADCA6", lavender: "#B7A892", pink: "#C9AD9A", vlgrey: "#F5F5DC", lgrey: "#E8DDCB", guiwhite: "#FAF0E6", black: "#4B3A26", blue: "#9C8C70", green: "#AFAF8F", red: "#AE7A60", gold: "#D2B48C", purple: "#9F8F7D", magenta: "#B5937E", grey: "#BDAE9A", dgrey: "#705C41", white: "#E0D2B4", guiblack: "#3D2B1F", border: 0.45 }]
	]);
	let color = themes.get(themes.keys().next().value);
	//const upgradeColors = [color.teal, color.lgreen, color.orange, color.yellow, color.lavender, color.pink, color.vlgrey, color.gold, color.magenta];
  //GRADIENT UPGRADE TEST
  let messages = [];
	class Setting {
		static key = "xskt_setting_";
		constructor(name, version, description, data, callback = value => { }) {
			this.name = name;
			this.version = version;
			this.description = description;
			this.data = data;
			this.callback = callback;
			this.key = `${Setting.key}${name.replaceAll(" ", "_").toLowerCase()}`;
			const storage = JSON.parse(localStorage.getItem(this.key) ?? JSON.stringify([this.data.default, this.version]));
			this._value = storage[1] === this.version && this.isValid(storage[0]) ? storage[0] : this.data.default;
		}
		save() {
			localStorage.setItem(this.key, JSON.stringify([this._value, this.version]));
		}
		set value(value) {
			this._value = value;
			this.save();
			this.callback(this);
		}
		get value() {
			return this._value;
		}
		reset() {
			this.value = this.data.default;
		}
		isValid(value) {
			switch (this.data.type) {
				case "boolean": {
					if (typeof value !== "boolean") return false;
					return true;
				};
				case "string": {
					if (typeof value !== "string") return false;
					if (value.length > this.data.maxLength) return false;
					return true;
				};
				case "list": {
					if (typeof value !== "number") return false;
					if (value !== (value | 0)) return false;
					if (value >= this.data.values.length || value < 0) return false;
					return true;
				};
				case "integer": {
					if (typeof value !== "number") return false;
					if (isNaN(value)) return false;
					if (value !== (value | 0)) return false;
					if (value < this.data.min || value > this.data.max) return false;
					return true;
				};
				case "decimal": {
					if (typeof value !== "number") return false;
					if (isNaN(value)) return false;
					if (value < this.data.min || value > this.data.max) return false;
					return true;
				};
				default: {
					console.warn(`Setting ${this.key} has type ${this.data.type}, which isn't valid.`);
					return false;
				};
			}
		}
		static majorVersion = "v1";
	}
	if (localStorage.getItem(`${Setting.key}major_version`) !== Setting.majorVersion) {
		localStorage.clear();
		localStorage.setItem(`${Setting.key}major_version`, Setting.majorVersion);
	}
	const config = {
		screenshotMode: new Setting("Screenshot Mode", 1, "Hides the user interface and adjusts camera zoom for screenshots.", {
			type: "boolean",
			default: false
		}),
    /*
		pointyShapes: new Setting("Pointy Shapes", 2, "Renders certain polygonal shapes with sharp vertices instead of rounded corners.", {
			type: "boolean",
			default: false
		}),
    */
		crispEdges: new Setting("Crisp Edges", 1, "Disables graphical anti-aliasing, resulting in sharper, pixelated edges.", {
			type: "boolean",
			default: false
		}, setting => document.getElementById("gameCanvas").style.imageRendering = setting.value ? "pixelated" : "auto"),
		firebird: new Setting("Firebird", 1, "Enables client-side motion prediction to compensate for network latency.", {
			type: "boolean",
			default: true
		}),
		blurPatch: new Setting("Blur Patch", 1, "Applies a fix for a blurring issue some users may have.", {
			type: "boolean",
			default: false
		}, () => window.onresize?.()),
		nestTint: new Setting("Nest Tint", 1, "Toggles the application of a color tint to Nest regions.", {
			type: "boolean",
			default: true
		}),
		redDamage: new Setting("Red Damage", 1, "Makes the damage tint red instead of white.", {
			type: "boolean",
			default: false
		}),
		noMessages: new Setting("Hide Messages", 1, "Toggles the visibility of in-game chat messages and server notifications.", {
			type: "boolean",
			default: false
		}),
		selfRender: new Setting("Render Nameplate", 1, "Controls the visibility of your own player nameplate.", {
			type: "boolean",
			default: false
		}),
		autoLevel: new Setting("Auto Level-Up", 1, "Automatically holds the N key.", {
			type: "boolean",
			default: true
		}),
		gridRender: new Setting("Render Grid", 1, "Toggles the visibility of the background grid.", {
			type: "boolean",
			default: true
		}),
		showToken: new Setting("Show Token Field", 1, "Toggles the visibility of the developer token input field on the main screen.", {
			type: "boolean",
			default: true
		}, setting => {
			const element = document.getElementById("input-token");
			if (element) element.style.display = setting.value ? "block" : "none";
		}),
		debugInfo: new Setting("Show Debug Info", 1, "Toggles the on-screen display of technical debugging information.", {
			type: "boolean",
			default: false
		}),
		spoopies: new Setting("Spoopies", 1, "Debug name for entities with an invalid name.", {
			type: "string",
			default: "a spoopy 👻",
			maxLength: 28
		}),
		shaders: new Setting("Shaders", 1, "Provides the game varius graphical effects.", {
			type: "list",
			default: 0,
			values: ["none", "3d", "dynamic 3d"]
		}),
		theme: new Setting("Theme", 1, "Selects the overall color scheme for the game.", {
			type: "list",
			default: 0,
			values: [...themes.keys()]
		}, setting => color = themes.get(setting.data.values[setting.value])),
		borderStyle: new Setting("Border Style", 1, "Selects the visual rendering style for the borders around entities.", {
			type: "list",
			default: 0,
			values: ["normal", "light", "dark", "neon"]
		}),
		font: new Setting("Font Family", 1, "Selects the typeface used for rendering text.", {
			type: "list",
			default: 0,
			values: ['"Ubuntu", sans-serif', '"Arial", sans-serif', '"Verdana", sans-serif', '"Tahoma", sans-serif', '"Trebuchet MS", sans-serif', '"Times New Roman", serif', '"Georgia", serif', '"Garamond", serif', '"Courier New", monospace', '"Brush Script MT", cursive']
		}),
		borderWidth: new Setting("Border Width.", 1, "Adjusts the default thickness of borders around entities.", {
			type: "decimal",
			display: "input",
			default: 6,
			min: 0.01,
			max: 20
		}),
		borderWidthMin: new Setting("Minimum Border Width.", 1, "Defines the minimum rendered thickness for entity borders.", {
			type: "decimal",
			display: "input",
			default: 3,
			min: 0.01,
			max: 20
		}),
		fontSize: new Setting("Font Size", 1, "Adjusts the base size for rendering text elements.", {
			type: "integer",
			display: "input",
			default: 5,
			min: 0,
			max: 10
		}, messages.forEach(m => m.len = null)),
		fontStrokeRatio: new Setting("Font Stroke Ratio", 1, "Adjusts the thickness of text outlines relative to the font size.", {
			type: "decimal",
			display: "input",
			default: 1,
			min: 0,
			max: 2
		}),
		uiscale: new Setting("UI Scale", 1, "Adjusts the overall size scaling of the UI.", {
			type: "decimal",
			display: "input",
			default: 1.0,
			min: 0.5,
			max: 1.5
		}, () => window.onresize?.())
	};
	class ServerManager {
		static servers = null;
		static container = document.getElementById("server-select");
		static server = null;

		static async loadServerData(server, elements) {
			try {
				console.log(`${server.protocol}//${server.url}/status.json`);
				const response = await fetch(`${server.protocol}//${server.url}/status.json`);
				const data = await response.json();
				elements[0].textContent = data.players === 1 ? `${data.players} Player` : `${data.players} Players`;
				elements[1].textContent = data.mode;
			} catch (error) {
				console.warn(`Failed to retrieve data for server:`, server);
				elements[0].textContent = "Error";
				elements[1].textContent = "";
			}
		}

		static onSelectEvent(element, server) {
			for (const other of this.container.children) {
				other.classList.remove("server-select-selected");
			}
			element.classList.add("server-select-selected");
			this.server = server;
		}

		static async loadServers() {
      const response = await fetch("./servers.json");
      this.servers = await response.json();
			for (let i = 0; i < this.servers.length; i++) {
				const server = this.servers[i];
				const holder = document.createElement("div");
				holder.classList.add("server-select-item");
				holder.addEventListener("click", () => this.onSelectEvent(holder, server));
				const name = document.createElement("span");
				name.textContent = server.name;
				holder.appendChild(name);
				const players = document.createElement("span");
				players.textContent = "Loading...";
				holder.appendChild(players);
				const mode = document.createElement("span");
				mode.textContent = "Loading...";
				holder.appendChild(mode);
				this.container.appendChild(holder);
				this.loadServerData(server, [players, mode]);
				if (i === 0) {
					holder.classList.add("server-select-selected");
					this.server = server;
				}
			}
		}
	}
	class TipManager {
		static entries = [
			"You can change options in the settings menu.",
			"Died to a disconnect or a bad bot spawn? Join our Discord for a score restore.",
			"Some holidays have their own limited time seasonal tanks!",
			"If you find a bug, report it in our Discord server so we can fix it!",
			"Check out the credits menu!",
			"Press the U key to open up the class tree!",
			"Jekyll was here.",
			"xskutsu was here.",
			"Our Discord is a great place to get involved with the game.",
			"Some tanks have additional functionality that may not be obvious on first glance.",
			"Some bosses have modified AI that causes them to fight in unexpected ways.",
			"I found the splash screen text.",
			"Teaming in FFA is frowned upon.",
			"Witch hunting is bannable.",
			"Multiboxing is bannable.",
			"Spawnkilling is bannable.",
			"Teaming in FFA is frowned upon, but when taken to the extremes, you can be punished.",
			"Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
			"Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban.",
			"Spawnkilling is when you camp near a freshly spawned player without giving them a chance to react. This is frowned upon and repeat offenses will be punished.",
      
			"It is rumoured that a portal was seen opening as 3 shadowy figures stepped through.",
			"There is a fourth one that has yet to show itself.",
			"They will fight back.",
			"There exist many realms, this is but one of them.",
			"It's true, I'm afraid.. All those nightmares, and my grandfather's tales.. it's all true.",
			"He couldn't explain them. Nobody believed him. But the longer he was aware of these events, the more he began to see.",
			"I don't know it's name, but my imagination fills out it's otherworldly silhouette for my consciousness to be driven mad whilst I sleep.",
			"Their only purpose seems to be to destroy our work, but that seems altogether too tame..",
			"Nobody knows if Doctor Haaron is still alive.",
			"Untold secrets lie within the body of the crystal behemoth.",
			"He has waited countless millennia.",
			"They say that long ago there used to be another race of tanks.",
			"The Taurus branch is able to summon portals to a dimension full of bullets.",
			"The technique of dimensional breaching was pioneered by a powerful bullet elemental who crossed over to this world."
		];

		static message = "Somebody forgot to run the choose function :)";

		static choose() {
			this.message = this.entries[Math.floor(this.entries.length * Math.random())];
		}
	}
	const aesthetics = [
		{},
		{ color: () => mixColors("#A020F0", "#FF69B4", (Math.sin(performance.now() / 500 * Math.PI) + 1) / 2), badge: "xskutsu_badge", shader3d: true }
	];
	"use strict";
	const global = {
		finalScore: Smoothbar(0, 4),
		finalLifetime: Smoothbar(0, 5),
		finalKills: [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)],
		finalkillers: [],
		finalKillers: [],
		KEY_ESC: 27,
		KEY_ENTER: 13,
		KEY_LEFT: 65,
		KEY_UP: 87,
		KEY_RIGHT: 68,
		KEY_DOWN: 83,
		KEY_LEFT_ARROW: 37,
		KEY_UP_ARROW: 38,
		KEY_RIGHT_ARROW: 39,
		KEY_DOWN_ARROW: 40,
		KEY_UPGRADE_MAX: 77,
		KEY_AUTO_SPIN: 67,
		KEY_AUTO_FIRE: 69,
		KEY_OVER_RIDE: 82,
		KEY_UPGRADE_ATK: 49,
		KEY_UPGRADE_HTL: 50,
		KEY_UPGRADE_SPD: 51,
		KEY_UPGRADE_STR: 52,
		KEY_UPGRADE_PEN: 53,
		KEY_UPGRADE_DAM: 54,
		KEY_UPGRADE_RLD: 55,
		KEY_UPGRADE_MOB: 56,
		KEY_UPGRADE_RGN: 57,
		KEY_UPGRADE_SHI: 48,
		KEY_MOUSE_0: 32,
		KEY_MOUSE_1: 86,
		KEY_MOUSE_2: 16,
		KEY_LEVEL_UP: 78,
		KEY_FUCK_YOU: 192,
		KEY_RECORD: 90,
		KEY_UPGRADE_TREE: 85,
		message: "Connecting",
		KEY_TELEPORT: 84,
		KEY_ABILITY_2: 17,
		KEY_FUCK_YOU: 192,
		KEY_KILL_MOUSE: 75,
		CHAT_KEY: 70,
		DEV_CHAT_KEY: 220,
		KEY_RESET_LIFE: 189,
		SWITCH_TANK: 16,
		PASSIVE_MODE: 80,
		FOVtoggle: 16,
		SPAWN_ENTITY: 79,
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
		gameWidth: 0,
		gameHeight: 0,
		gameStartedDOM: false,
		upgradeFadeState: {
			lastFullyFadedIndex: 0
		},
		xoffset: -0,
		yoffset: -0,
		gameStart: false,
		disconnected: false,
		died: false,
		kicked: false,
		continuity: false,
		startPingTime: 0,
		toggleMassState: 0,
		backgroundColor: "#f2fbff",
		lineColor: "#000000"
	};
	const metrics = {
		latency: 0,
		lag: 0,
		framesPerSecond: 60,
		updatetime: 0,
		lastlag: 0,
		lastrender: 0,
		rendergap: 0,
		lastuplink: 0,
	};
	const util = (function (exports = {}) {
		exports.lerp = (a, b, x) => a + x * (b - a);
		exports.lerpAngle = (a, b, x) => Math.atan2(exports.lerp(Math.sin(a), Math.sin(b), x), exports.lerp(Math.cos(a), Math.cos(b), x));
		exports.lerpFps = (a, b, rate) => {
			const dt = 1 / metrics.framesPerSecond;
			const alpha = 1 - Math.exp(-rate * dt);
			return a + alpha * (b - a);
		};
		exports.lerpAngleFps = (a, b, rate) => {
			const dt = 1 / metrics.framesPerSecond;
			const alpha = 1 - Math.exp(-rate * dt);
			return Math.atan2(
				exports.lerp(Math.sin(a), Math.sin(b), alpha),
				exports.lerp(Math.cos(a), Math.cos(b), alpha)
			);
		};
		exports.handleLargeNumber = (a, cullZeroes = false) => {
			if (cullZeroes && a == 0) {
				return "";
			}
			if (a < Math.pow(10, 3)) {
				return "" + a.toFixed(0);
			}
			if (a < Math.pow(10, 6)) {
				return (a / Math.pow(10, 3)).toFixed(2) + "k";
			}
			if (a < Math.pow(10, 9)) {
				return (a / Math.pow(10, 6)).toFixed(2) + "m";
			}
			if (a < Math.pow(10, 12)) {
				return (a / Math.pow(10, 9)).toFixed(2) + "b";
			}
			if (a < Math.pow(10, 15)) {
				return (a / Math.pow(10, 12)).toFixed(2) + "t";
			}
			return (a / Math.pow(10, 15)).toFixed(2) + "q";
		};
		exports.timeForHumans = (x) => {
			let seconds = x % 60;
			x /= 60;
			x = Math.floor(x);
			let minutes = x % 60;
			x /= 60;
			x = Math.floor(x);
			let hours = x % 24;
			x /= 24;
			x = Math.floor(x);
			let days = x;
			let y = "";

			function weh(z, text) {
				if (z) {
					y = y + (y === "" ? "" : ", ") + z + " " + text + (z > 1 ? "s" : "");
				}
			}
			weh(days, "day");
			weh(hours, "hour");
			weh(minutes, "minute");
			weh(seconds, "second");
			if (y === "") {
				y = "less than a second";
			}
			return y;
		};
		exports.addArticle = (string) => {
			return /[aeiouAEIOU]/.test(string[0]) ? "an " + string : "a " + string;
		};
		exports.formatLargeNumber = (x) => {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		};
		exports.pullJSON = async function (filename) {
			const response = await fetch(ServerManager.server.protocol + "//" + ServerManager.server.url + "/" + filename + ".json");
			return await response.json();
		};
		return exports;
	})();
	const mixColorCache = new Map();
	function mixColors(primary, secondary, amount) {
		const key = `${primary}${secondary}${amount.toFixed(2)}`;
		if (mixColorCache.has(key)) return mixColorCache.get(key);
		const pr = parseInt(primary.slice(1), 16);
		const sr = parseInt(secondary.slice(1), 16);
		const hex = `#${(
			1 << 24
			| Math.floor(util.lerp((pr >> 16) & 255, (sr >> 16) & 255, amount)) << 16
			| Math.floor(util.lerp((pr >> 8) & 255, (sr >> 8) & 255, amount)) << 8
			| Math.floor(util.lerp(pr & 255, sr & 255, amount))
		).toString(16).slice(1)}`;
		mixColorCache.set(key, hex);
		return hex;
	}
  
  const upgradeColors = [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25].map( (i) => mixColors("#000000", "#AA00FF", i) )  //GRADIENT UPGRADE TEST

	function getColor(colorNumber) {
		if (typeof colorNumber === "string") return colorNumber;
		switch (colorNumber) {
			case 0:
				return color.teal;
			case 1:
				return color.lgreen;
			case 2:
				return color.orange;
			case 3:
				return color.yellow;
			case 4:
				return color.lavender;
			case 5:
				return color.pink;
			case 6:
				return color.vlgrey;
			case 7:
				return color.lgrey;
			case 8:
				return color.guiwhite;
			case 9:
				return color.black;
			case 10:
				return color.blue;
			case 11:
				return color.green;
			case 12:
				return color.red;
			case 13:
				return color.gold;
			case 14:
				return color.purple;
			case 15:
				return color.magenta;
			case 16:
				return color.grey;
			case 17:
				return color.dgrey;
			case 18:
				return color.white;
			case 19:
				return color.guiblack;
			case 31:
				return "#226ef6";
			case 32:
				return "#ff1000";
			case 33:
				return "#ff9000";
			case 34:
				return "#00e00b";
			case 35:
				return "#ffd300";
			case 36:
				return mixColors(
					["#ff1000", "#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf"][
					Math.floor((Date.now() / 850) % 6)
					],
					["#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf", "#ff1000"][
					Math.floor((Date.now() / 850) % 6)
					],
					(Date.now() / 850) % 1);
			case 38:
				return "#3b46e8";
			case 39:
				return "#484848";
			case 50:
				return "#484444";
			case 55:
				return "#ffe599";
			case 56:
				return "#171a1d";
			case 68:
				return "#737070";
			case 73:
				return "#ceaf3e";
			case 77:
				return "#fcb72b";
			case 78:
				return "#0b5394";
			case 79:
				return "#e03e41";
			case 84:
				return "#86c8ed";
			case 86:
				return 400 > Date.now() % 800 ? color.dgrey : "#ff0000";
			case 87:
				return 400 > Date.now() % 800 ? "#ff0000" : color.dgrey;
			case 90:
				return "#1F4788";
			case 94:
				return "#5E5E5E";
			case 111:
				return "#351c75";
			case 120:
				return "#8e7cc3";
			case 121:
				return "#351c75";
			case 122:
				return mixColors("#A020F0", "#FF69B4", (Math.sin(performance.now() / 500 * Math.PI) + 1) / 2);
			case 123:
				return mixColors("#76a5af", "#313436", (Math.sin(performance.now() / 1100 * Math.PI) + 1) / 2); // TERRAFORMER CYAN (DIMMING)
			default:
				return mixColors("#FF0000", "#000000", (Math.sin(performance.now() / 1000 * Math.PI) + 1) / 2);
		}
	}

	function getZoneColor(b) {
		switch (b) {
			case "bas1":
			case "bap1":
			case "dom1":
			case "dbc1":
			case "mbc1":
				return color.blue;
			case "bas2":
			case "bap2":
			case "dom2":
			case "dbc2":
			case "mbc2":
				return color.green;
			case "bas3":
			case "bap3":
			case "dom3":
			case "dbc3":
			case "mbc3":
				return color.red;
			case "bas4":
			case "bap4":
			case "dom4":
			case "dbc4":
			case "mbc4":
				return color.pink;
			case "domx":
			case "dom0":
			case "dbc0":
			case "mbc0":
				return color.yellow;
			case "port":
				return color.guiblack;
			case "edge":
				return mixColors(color.white, color.guiblack, 1 / 3);
			case "dor1":
				return color.vl;
			case "nest":
				return config.nestTint.value ? color.lavender : color.white;
			case "lost":
				return "#1c1c1c";
			default:
				return color.white;
		}
	}

	function setColor(givenColor, context = ctx) {
		switch (config.borderStyle.value) {
			case 0:
				context.fillStyle = givenColor;
				context.strokeStyle = mixColors(givenColor, color.black, color.border);
				break;
			case 1:
				context.fillStyle = givenColor;
				context.strokeStyle = color.white;
				break;
			case 2:
				context.fillStyle = givenColor;
				context.strokeStyle = color.black;
				break;
			case 3:
				context.fillStyle = mixColors(givenColor, color.black, color.border);
				context.strokeStyle = givenColor;
				break;
		}
	}
	let mockups = [];
	let mockupsLoaded = false;

	function getEntityImageFromMockup(index, color = mockups[index].color) {
		let mockup = mockups[index];
		return {
			time: 0,
			index: index,
			x: mockup.x,
			y: mockup.y,
			vx: 0,
			vy: 0,
			size: mockup.size,
			realSize: mockup.realSize,
			color: color,
			render: {
				alpha: 1,
				status: {
					getFade: () => {
						return 1;
					},
					getColor: () => {
						return "#FFFFFF";
					},
					getBlend: () => {
						return 0;
					},
					health: {
						get: () => {
							return 1;
						},
					},
					shield: {
						get: () => {
							return 1;
						},
					},
				},
			},
			facing: mockup.facing,
			shape: mockup.shape,
			name: mockup.name,
			score: 0,
			tiggle: 0,
			layer: mockup.layer,
			guns: {
				length: mockup.guns.length,
				getPositions: () => {
					let a = [];
					mockup.guns.forEach(() => a.push(0));
					return a;
				},
				update: () => { },
			},
			turrets: mockup.turrets.map((t) => {
				let o = getEntityImageFromMockup(t.index);
				o.realSize = (o.realSize / o.size) * mockup.size * t.sizeFactor;
				o.size = mockup.size * t.sizeFactor;
				o.angle = t.angle;
				o.offset = t.offset;
				o.direction = t.direction;
				o.facing = t.direction + t.angle;
				return o;
			}),
		};
	}
	class UpgradeTree {
		static START_LABEL = "Basic";
		static startLabelDefault = this.START_LABEL;
		static iconScale = 1;
		static iconSize = 60;
		static iconMargin = 20;
		static startMockup = null;
		static icons = null;
		static lines = null;
		static renderScroll = 0;
		static scroll = 0;
		static selectedIcon = null;
		static hoveredIcon = null;
		static doHover = true;
		static isOpen = false;
		static searchQuery = "";
		static tree = [];
		static position = {
			x: 0,
			y: 0
		};
		static topY = 0;
		static maxXafterChildLayout = 0;
		static inputElement = document.createElement("input");
		static layoutRecursiveFor(treeEntry, hIndex, vIndex) {
			const mockup = mockups.find(m => m.index === treeEntry.index);
			const currentIconX = this.position.x;
			const currentIconY = this.position.y;
			this.icons.push({
				x: currentIconX,
				y: currentIconY,
				mockup: mockup,
				color: upgradeColors[(hIndex + vIndex) % upgradeColors.length]
			});
			if (this.topY < currentIconY + this.iconSize) this.topY = currentIconY + this.iconSize;
			this.maxXafterChildLayout = currentIconX;
			if (treeEntry.upgrades.length === 0) {
				return currentIconX + this.iconSize;
			}
			const parentPosition = {
				x: currentIconX,
				y: currentIconY
			};
			const parentCenterY = parentPosition.y + this.iconSize / 2;
			const childBaseY = parentPosition.y + this.iconSize + this.iconMargin;
			vIndex++;
			let firstChildCenterX = 0;
			let lastChildCenterX = 0;
			let currentChildStartX = parentPosition.x;
			for (let i = 0; i < treeEntry.upgrades.length; i++) {
				const upgrade = treeEntry.upgrades[i];
				const childTreeEntry = this.tree[upgrade.treeIndex];
				let childX = currentChildStartX;
				this.position.x = childX;
				const tierSkip = (vIndex < upgrade.tier) ? (upgrade.tier - vIndex) : 0;
				const childY = childBaseY + tierSkip * (this.iconSize + this.iconMargin);
				this.position.y = childY;
				const childCenterX = childX + this.iconSize / 2;
				if (i === 0) {
					firstChildCenterX = childCenterX;
				}
				lastChildCenterX = childCenterX;
				this.lines.push({
					x1: childCenterX,
					y1: (i === 0) ? parentPosition.y + this.iconSize : parentCenterY,
					x2: childCenterX,
					y2: childY
				});
				const childMaxX = this.layoutRecursiveFor(childTreeEntry, hIndex + i, vIndex + tierSkip);
				currentChildStartX = childMaxX + this.iconMargin;
				this.maxXafterChildLayout = Math.max(this.maxXafterChildLayout, childMaxX);
			}
			if (treeEntry.upgrades.length > 1) {
				this.lines.push({
					x1: firstChildCenterX + this.iconSize / 2,
					y1: parentCenterY,
					x2: lastChildCenterX,
					y2: parentCenterY
				});
			}
			return Math.max(parentPosition.x + this.iconSize, this.maxXafterChildLayout);
		}

		static createTree() {
			const mockupMap = new Map(mockups.map(m => [m.index, m]));
			this.tree = [];
			const searchQuery = this.searchQuery;
			const requiredIndices = new Set();
			const nodesToSearchFrom = new Set();
		
			const isAncestor = (parentMap, nodeIndex, ancestorCandidateIndex) => {
				const visited = new Set();
				const queue = [nodeIndex];
				visited.add(nodeIndex);
				while (queue.length > 0) {
					const current = queue.shift();
					if (current === ancestorCandidateIndex) {
						return true;
					}
					const parents = parentMap.get(current) || new Set();
					for (const parent of parents) {
						if (!visited.has(parent)) {
							visited.add(parent);
							queue.push(parent);
						}
					}
				}
				return false;
			};
		
			if (!searchQuery) {
				const addedMockupIndices = new Map();
				const parentMap = new Map(); // Track parent-child relationships in the tree
				const queue = [];
				if (!this.startMockup) {
					console.error("Start mockup is missing.");
					return;
				}
				const startTreeIndex = 0;
				this.tree.push({
					index: this.startMockup.index,
					upgrades: []
				});
				addedMockupIndices.set(this.startMockup.index, startTreeIndex);
				queue.push(this.startMockup);
				while (queue.length > 0) {
					const currentOriginalMockup = queue.shift();
					const currentTreeIndex = addedMockupIndices.get(currentOriginalMockup.index);
					const currentTreeEntry = this.tree[currentTreeIndex];
					if (!currentOriginalMockup.upgrades || !Array.isArray(currentOriginalMockup.upgrades)) continue;
					for (const upgrade of currentOriginalMockup.upgrades) {
						const nextOriginalIndex = upgrade.index;
						const nextOriginalMockup = mockupMap.get(nextOriginalIndex);
						if (!nextOriginalMockup) continue;
						let nextTreeIndex;
						if (addedMockupIndices.has(nextOriginalIndex)) {
							nextTreeIndex = addedMockupIndices.get(nextOriginalIndex);
							// Check if adding this upgrade would create a cycle
							if (isAncestor(parentMap, currentTreeIndex, nextTreeIndex)) {
								// console.warn(`Circular upgrade from ${currentOriginalMockup.index} to ${nextOriginalIndex} prevented.`);
								continue;
							}
						} else {
							nextTreeIndex = this.tree.length;
							this.tree.push({
								index: nextOriginalIndex,
								upgrades: []
							});
							addedMockupIndices.set(nextOriginalIndex, nextTreeIndex);
							queue.push(nextOriginalMockup);
						}
						// Add the upgrade link
						currentTreeEntry.upgrades.push({
							realIndex: nextOriginalIndex,
							treeIndex: nextTreeIndex,
							tier: upgrade.tier
						});
						// Update parentMap
						if (!parentMap.has(nextTreeIndex)) {
							parentMap.set(nextTreeIndex, new Set());
						}
						parentMap.get(nextTreeIndex).add(currentTreeIndex);
					}
				}
				return;
			}
		
			// Code for when there's a search query
			mockups.forEach(m => {
				if (m.name && m.name.toLowerCase().includes(searchQuery)) {
					nodesToSearchFrom.add(m.index);
				}
			});
			const parentMapOriginal = new Map(); // Parent map for original mockup hierarchy
			const buildParentMapQueue = [this.startMockup.index];
			const visitedForParentMap = new Set([this.startMockup.index]);
			while (buildParentMapQueue.length > 0) {
				const currentIndex = buildParentMapQueue.shift();
				const currentMockup = mockupMap.get(currentIndex);
				if (!currentMockup || !currentMockup.upgrades) continue;
				for (const upgrade of currentMockup.upgrades) {
					const childIndex = upgrade.index;
					if (!parentMapOriginal.has(childIndex)) {
						parentMapOriginal.set(childIndex, new Set());
					}
					parentMapOriginal.get(childIndex).add(currentIndex);
					if (!visitedForParentMap.has(childIndex)) {
						visitedForParentMap.add(childIndex);
						buildParentMapQueue.push(childIndex);
					}
				}
			}
			const ancestorQueue = [...nodesToSearchFrom];
			while (ancestorQueue.length > 0) {
				const currentIndex = ancestorQueue.shift();
				if (requiredIndices.has(currentIndex) || !mockupMap.has(currentIndex)) continue;
				requiredIndices.add(currentIndex);
				if (parentMapOriginal.has(currentIndex)) {
					parentMapOriginal.get(currentIndex).forEach(parentIndex => {
						if (!requiredIndices.has(parentIndex)) {
							ancestorQueue.push(parentIndex);
						}
					});
				}
			}
			if (!requiredIndices.has(this.startMockup.index) && nodesToSearchFrom.size > 0) {
				console.warn("Search results found, but root node is not an ancestor. Tree might be disconnected.");
				this.tree = [];
				return;
			}
			if (requiredIndices.size === 0) {
				return;
			}
			const addedMockupIndices = new Map();
			const treeParentMap = new Map(); // Track parent-child in the tree
			const queue = [];
			if (requiredIndices.has(this.startMockup.index)) {
				const startTreeIndex = 0;
				this.tree.push({
					index: this.startMockup.index,
					upgrades: []
				});
				addedMockupIndices.set(this.startMockup.index, startTreeIndex);
				queue.push(this.startMockup);
			} else {
				console.error("Root node is required but missing.");
				return;
			}
			while (queue.length > 0) {
				const currentOriginalMockup = queue.shift();
				const currentTreeIndex = addedMockupIndices.get(currentOriginalMockup.index);
				const currentTreeEntry = this.tree[currentTreeIndex];
				if (!currentOriginalMockup.upgrades || !Array.isArray(currentOriginalMockup.upgrades)) continue;
				for (const upgrade of currentOriginalMockup.upgrades) {
					const nextOriginalIndex = upgrade.index;
					if (!requiredIndices.has(nextOriginalIndex)) continue;
					const nextOriginalMockup = mockupMap.get(nextOriginalIndex);
					if (!nextOriginalMockup) continue;
					let nextTreeIndex;
					if (addedMockupIndices.has(nextOriginalIndex)) {
						nextTreeIndex = addedMockupIndices.get(nextOriginalIndex);
						// Check for cycle
						if (isAncestor(treeParentMap, currentTreeIndex, nextTreeIndex)) {
							console.warn(`Circular upgrade from ${currentOriginalMockup.index} to ${nextOriginalIndex} prevented.`);
							continue;
						}
					} else {
						nextTreeIndex = this.tree.length;
						this.tree.push({
							index: nextOriginalIndex,
							upgrades: []
						});
						addedMockupIndices.set(nextOriginalIndex, nextTreeIndex);
						queue.push(nextOriginalMockup);
					}
					currentTreeEntry.upgrades.push({
						realIndex: nextOriginalIndex,
						treeIndex: nextTreeIndex,
						tier: upgrade.tier
					});
					// Update treeParentMap
					if (!treeParentMap.has(nextTreeIndex)) {
						treeParentMap.set(nextTreeIndex, new Set());
					}
					treeParentMap.get(nextTreeIndex).add(currentTreeIndex);
				}
			}
		}
		
		static generateData(searchQuery = this.inputElement.value) {
			this.startMockup = mockups[mockups.findIndex(m => m.name === this.START_LABEL)];
			this.icons = [];
			this.lines = [];
			this.position.x = 0;
			this.position.y = 0;
			this.maxXafterChildLayout = 0;
			this.searchQuery = searchQuery.toLowerCase().trim();
			this.tree = [];
			this.iconSize = 60 * this.iconScale;
			this.iconMargin = 20 * this.iconScale;
			this.topY = 0;
			this.createTree(this.startMockup);
			if (this.tree.length > 0) this.layoutRecursiveFor(this.tree[0], 0, 0);
			this.position.x = 0;
			this.position.y = 0;
		}
		static update() {
			let maxX = 0;
			if (this.icons && this.icons.length > 0) {
				maxX = this.icons.reduce((max, icon) => Math.max(max, icon.x + this.iconSize + this.iconMargin), 0) - this.iconSize / 2 - this.iconMargin;
			}
			if (this.scroll > maxX) this.scroll = maxX;
			if (this.scroll < 0) this.scroll = 0;
			this.renderScroll = util.lerpFps(this.renderScroll, this.scroll, 20);
		}
		static canUpgradeToo(startMockupIndex, targetMockupIndex) {
			const mockupMap = new Map(mockups.map(m => [m.index, m]));
			const startMockup = mockupMap.get(startMockupIndex);
			const targetMockup = mockupMap.get(targetMockupIndex);
			if (!startMockup || !targetMockup) {
				return null;
			}
			if (startMockupIndex === targetMockupIndex) {
				return [startMockupIndex];
			}
			const queue = [startMockupIndex];
			const visited = new Set([startMockupIndex]);
			const parentMap = new Map();
			parentMap.set(startMockupIndex, null);
			let found = false;
			while (queue.length > 0) {
				const currentIndex = queue.shift();
				const currentMockup = mockupMap.get(currentIndex);
				if (!currentMockup || !currentMockup.upgrades || !Array.isArray(currentMockup.upgrades)) {
					continue;
				}
				for (const upgrade of currentMockup.upgrades) {
					const nextIndex = upgrade.index;
					if (mockupMap.has(nextIndex) && !visited.has(nextIndex)) {
						visited.add(nextIndex);
						parentMap.set(nextIndex, currentIndex);
						queue.push(nextIndex);
						if (nextIndex === targetMockupIndex) {
							found = true;
							break;
						}
					}
				}
				if (found) {
					break;
				}
			}
			if (found) {
				const path = [];
				let current = targetMockupIndex;
				while (current !== null) {
					path.push(current);
					current = parentMap.get(current);
				}
				return path.reverse();
			} else {
				return null;
			}
		}
	}

	global.clickables = (() => {
		let Region = (() => {
			function Clickable() {
				let region = {
					x: 0,
					y: 0,
					w: 0,
					h: 0,
				};
				let active = false;
				return {
					get region() {
						return region;
					},
					get active() {
						return active;
					},
					set: (x, y, w, h) => {
						region.x = x;
						region.y = y;
						region.w = w;
						region.h = h;
						active = true;
					},
					check: (target) => {
						let dx = Math.round(target.x - region.x);
						let dy = Math.round(target.y - region.y);
						return active && dx >= 0 && dy >= 0 && dx <= region.w && dy <= region.h
					},
					hide: () => {
						active = false;
					},
				};
			}
			return (size) => {
				let data = [];
				for (let i = 0; i < size; i++) {
					data.push(Clickable());
				}
				return {
					get data() {
						return data;
					},
					place: (index, ...a) => {
						if (index >= data.length) {
							console.log(index);
							console.log(data);
							throw new Error("Trying to reference a clickable outside a region!");
						}
						data[index].set(...a);
					},
					hide: () => {
						data.forEach((r) => r.hide());
					},
					check: (x) => {
						return data.findIndex((r) => {
							return r.check(x);
						});
					},
				};
			};
		})();
		return {
			stat: Region(10),
			upgrade: Region(30),
			hover: Region(1),
			skipUpgrades: Region(1),
			upgradeTreePanel: Region(1),
			upgradeTreePanelButtons: Region(3),
			upgradeTreeBottomRow: Region(5)
		};
	})();
	global.statHover = false;
	global.upgradeHover = false;
	const player = {
		id: -1,
		x: global.screenWidth / 2,
		y: global.screenHeight / 2,
		vx: 0,
		vy: 0,
		renderx: global.screenWidth / 2,
		rendery: global.screenHeight / 2,
		renderv: 1,
		slip: 0,
		view: 1,
		time: 0,
		screenWidth: global.screenWidth,
		screenHeight: global.screenHeight,
		namecolor: "#ffffff",
		lastx: 0,
		lasty: 0,
		name: "",
		lastUpdate: 0,
		time: 0,
		rendershiftx: 0,
		rendershifty: 0
	};
	const Integrate = class {
		constructor(dataLength) {
			this.dataLength = dataLength;
			this.elements = {};
		}
		update(delta, index = 0) {
			let deletedLength = delta[index++];
			for (let i = 0; i < deletedLength; i++) delete this.elements[delta[index++]];
			let updatedLength = delta[index++];
			for (let i = 0; i < updatedLength; i++) {
				let id = delta[index++];
				let data = delta.slice(index, index + this.dataLength);
				index += this.dataLength;
				this.elements[id] = data;
			}
			return index;
		}
		entries() {
			return Object.entries(this.elements).map(([id, data]) => ({
				id: +id,
				data,
			}));
		}
	};
	function calculateGCD(a, b) {
		a = Math.abs(Math.round(a));
		b = Math.abs(Math.round(b));
		if (b === 0) {
			return a;
		}
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
	function findOptimalGridSize(cellWidthRatio, cellHeightRatio, targetGridSize) {
		if (cellWidthRatio <= 0 || cellHeightRatio <= 0) {
			console.warn("Cell dimensions must be positive.");
			return targetGridSize > 0 ? targetGridSize : 30;
		}
		if (targetGridSize <= 0) {
			console.warn("Target grid size must be positive.");
			return (cellWidthRatio + cellHeightRatio) / 2 / 4 || 30;
		}
		const SCALE = 1e7;
		const cw_int = Math.round(cellWidthRatio * SCALE);
		const ch_int = Math.round(cellHeightRatio * SCALE);
		if (cw_int === 0 || ch_int === 0) {
			console.warn("Scaled cell dimensions resulted in zero.");
			return targetGridSize;
		}
		const gcd_int = calculateGCD(cw_int, ch_int);
		if (gcd_int === 0) {
			console.warn("GCD calculation resulted in zero.");
			return targetGridSize;
		}
		const baseGrid = gcd_int / SCALE;
		if (baseGrid <= 1e-9) {
			console.warn("Base grid size is extremely small.");
			return targetGridSize;
		}
		const m_ideal = baseGrid / targetGridSize;
		let m1, m2;
		if (m_ideal <= 0) {
			m1 = 1;
			m2 = 1;
		} else {
			m1 = Math.max(1, Math.floor(m_ideal));
			m2 = Math.max(1, Math.ceil(m_ideal));
		}
		const gridSize1 = baseGrid / m1;
		const gridSize2 = baseGrid / m2;
		let optimalGridSize;
		if (m1 === m2) {
			optimalGridSize = gridSize1;
		} else {
			const diff1 = Math.abs(gridSize1 - targetGridSize);
			const diff2 = Math.abs(gridSize2 - targetGridSize);
			if (diff1 <= diff2) {
				optimalGridSize = gridSize1;
			} else {
				optimalGridSize = gridSize2;
			}
		}
		if (optimalGridSize < 1e-9) {
			console.warn("Calculated optimal grid size is extremely small, returning target.");
			return targetGridSize;
		}
		return optimalGridSize;
	}
	const Minimap = class {
		constructor(speed = 250) {
			this.speed = speed;
			this.map = {};
			this.lastUpdate = Date.now();
		}
		update(elements) {
			this.lastUpdate = Date.now();
			for (let [key, value] of Object.entries(this.map))
				if (value.now) {
					value.old = value.now;
					value.now = null;
				} else {
					delete this.map[key];
				}
			for (let element of elements)
				if (this.map[element.id]) {
					this.map[element.id].now = element;
				} else {
					this.map[element.id] = {
						old: null,
						now: element,
					};
				}
		}
		get() {
			let state = Math.min(1, (Date.now() - this.lastUpdate) / this.speed);
			let stateOld = 1 - state;
			return Object.values(this.map).map(({
				old,
				now
			}) => {
				if (!now) return {
					type: old.type,
					id: old.id,
					x: old.x,
					y: old.y,
					color: old.color,
					size: old.size,
					alpha: stateOld,
				};
				if (!old) return {
					type: now.type,
					id: now.id,
					x: now.x,
					y: now.y,
					color: now.color,
					size: now.size,
					alpha: state,
				};
				return {
					type: now.type,
					id: now.id,
					x: state * now.x + stateOld * old.x,
					y: state * now.y + stateOld * old.y,
					color: now.color,
					size: state * now.size + stateOld * old.size,
					alpha: 1,
				};
			});
		}
	};
	const Entry = class {
		constructor(to) {
			this.score = Smoothbar(0, 10);
			this.update(to);
		}
		update(to) {
			this.name = to.name.slice(7);
			this.nameColor = to.name.slice(0, 7);
			this.bar = to.bar;
			this.color = to.color;
			this.index = to.index;
			this.score.set(to.score);
			this.old = false;
		}
		publish() {
			let ref = mockups[this.index];
			return {
				image: getEntityImageFromMockup(this.index, this.color),
				position: ref.position,
				barColor: getColor(this.bar),
				label: this.name.length > 0 ? this.name + " - " + ref.name : ref.name,
				score: this.score.get(),
				nameColor: this.nameColor,
			};
		}
	};
	const Leaderboard = class {
		constructor() {
			this.entries = {};
		}
		get() {
			let out = [];
			let max = 1;
			for (let value of Object.values(this.entries)) {
				let data = value.publish();
				out.push(data);
				if (data.score > max) max = data.score;
			}
			out.sort((a, b) => b.score - a.score);
			return {
				data: out,
				max,
			};
		}
		update(elements) {
			elements.sort((a, b) => b.score - a.score);
			for (let value of Object.values(this.entries)) value.old = true;
			for (let element of elements)
				if (this.entries[element.id]) this.entries[element.id].update(element);
				else this.entries[element.id] = new Entry(element);
			for (let [id, value] of Object.entries(this.entries))
				if (value.old) delete this.entries[id];
		}
	};
	let entities = [],
		users = [],
		minimapAllInt = new Integrate(5),
		minimapTeamInt = new Integrate(3),
		leaderboardInt = new Integrate(5),
		leaderboard = new Leaderboard(),
		minimap = new Minimap(200),
		upgradeSpin = 0,
		messageFade = 0,
		newMessage = 0,
		lastPing = 0,
		renderTimes = 0,
		updateTimes = 0,
		target = {
			x: 0,
			y: 0,
		},
		roomSetup = [
			["norm"]
		],
		roomSpeed = 0,
		roomIdealGridSize = 300;
	const gui = {
		getStatNames: (num) => {
			switch (num) {
				case 1:
					return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Engine Acceleration;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				case 2:
					return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Respawn Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				case 3:
					return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Max Drone Count;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				case 4:
					return "Body Damage;Max Health;Swarm Speed;Swarm Health;Swarm Penetration;Swarm Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				case 5:
					return "Body Damage;Max Health;Placement Speed;Trap Health;Trap Penetration;Trap Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				case 6:
					return "Body Damage;Max Health;Weapon Speed;Weapon Health;Weapon Penetration;Weapon Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
				default:
					return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
			}
		},
		skills: [{
			amount: 0,
			color: "purple",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "pink",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "blue",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "lgreen",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "red",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "yellow",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "green",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "teal",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "gold",
			cap: 1,
			softcap: 1,
		}, {
			amount: 0,
			color: "orange",
			cap: 1,
			softcap: 1,
		},],
		points: 0,
		upgrades: [],
		playerid: -1,
		__s: (() => {
			let truscore = 0;
			let levelscore = 0;
			let deduction = 0;
			let level = 0;
			let score = Smoothbar(0, 10);
			return {
				setScore: (s) => {
					if (s) {
						score.set(s);
						if (deduction > score.get()) {
							level = 0;
							deduction = 0;
						}
					} else {
						score = Smoothbar(0, 10);
						level = 0;
					}
				},
				update: () => {
					levelscore = Math.ceil(1.8 * Math.pow(level + 1, 1.8) - 2 * level + 1);
					if (score.get() - deduction >= levelscore) {
						deduction += levelscore;
						level += 1;
					}
				},
				getProgress: () => {
					return levelscore ? Math.min(1, Math.max(0, (score.get() - deduction) / levelscore)) : 0;
				},
				getScore: () => score.get(),
				getLevel: () => {
					return level;
				},
			};
		})(),
		type: 0,
		fps: 0,
		color: 0,
		accel: 0,
		topspeed: 1,
	};
	global.clearUpgrades = () => {
		global.upgradeFadeState.lastFullyFadedIndex = 0;
		gui.upgrades = [];
	};
	const getRatio = () => {
		return Math.max(global.screenWidth / player.renderv,
			(global.screenHeight / player.renderv / 9) * 16);
	};
	function exportTankImage(isBig, mockup, col = mockup.color === 16 ? gui.color : mockup.color) {
		function cropImageFromCanvas(context) {
			// https://stackoverflow.com/a/22267731 (cleaned up a bit)
			const canvas = context.canvas;
			const pixelPositions = { x: [], y: [] };
			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			let width = canvas.width;
			let height = canvas.height;
			let index = 0;
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					index = (y * width + x) * 4;
					if (imageData.data[index + 3] > 0) {
						pixelPositions.x.push(x);
						pixelPositions.y.push(y);
					}
				}
			}
			pixelPositions.x.sort(function (a, b) { return a - b });
			pixelPositions.y.sort(function (a, b) { return a - b });
			const n = pixelPositions.x.length - 1;
			width = 1 + pixelPositions.x[n] - pixelPositions.x[0];
			height = 1 + pixelPositions.y[n] - pixelPositions.y[0];
			const cut = context.getImageData(pixelPositions.x[0], pixelPositions.y[0], width, height);
			canvas.width = width;
			canvas.height = height;
			context.putImageData(cut, 0, 0);
			return canvas;
		}
		const resolution = isBig ? 8192 : 2048;
		const ratio = isBig ? 20 : 5;
		const canvas = document.createElement("canvas");
		canvas.width = resolution;
		canvas.height = resolution;
		const ctx = canvas.getContext("2d");
		const angle = -Math.PI / 4;
		const picture = getEntityImageFromMockup(mockup.index, col);
		const position = mockup.position;
		const scale = resolution * 0.25 / position.axis;
		const offset = scale * position.middle.x;
		const xx = resolution / 2 - offset * Math.cos(angle);
		const yy = resolution / 2 - offset * Math.sin(angle);
		drawEntity(xx, yy, picture, ratio, scale / picture.size / ratio, angle, true, undefined, undefined, ctx);
		cropImageFromCanvas(ctx).toBlob(function (blob) {
			const url = URL.createObjectURL(blob);
			window.open(url, "_blank");
		}, "image/png");
	}
	global.target = target;
	global.player = player;
	global.canUpgrade = false;
	global.canSkill = false;
	global.message = "";
	global.time = 0;
	global.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgentData);
	const serverName = "AJax Arras";
	class Canvas {
		constructor() {
			this.directionLock = false;
			this.target = global.target;
			this.reenviar = true;
			this.socket = global.socket;
			this.directions = [];
			const self = this;
			this.statMaxing = false;
			this.cv = document.getElementById("gameCanvas");
			this.cv.width = global.screenWidth;
			this.cv.height = global.screenHeight;
			this.cv.tabIndex = 0;
			this.cv.addEventListener("mousemove", this.gameInput, false);
			this.cv.addEventListener("keydown", this.keyboardDown, false);
			this.cv.addEventListener("keyup", this.keyboardUp, false);
			this.cv.addEventListener("mousedown", this.mouseDown, false);
			this.cv.addEventListener("mouseup", this.mouseUp, false);
			this.cv.addEventListener("wheel", function (event) {
				UpgradeTree.scroll += event.deltaY * 5;
			});
			this.cv.parent = self;
			global.canvas = this;
		}
		keyboardDown(event) {
			if (!global.gameStart) return;
			switch (event.keyCode) {
				case 13:
					if (global.died) this.parent.socket.talk("s", global.playerName, 0);
					global.died = false;
					break;
				case global.KEY_UPGRADE_MAX:
					this.statMaxing = true;
					break;
				case global.KEY_UP_ARROW:
					break
				case global.KEY_UP:
					this.parent.socket.cmd.set(0, true);
					break;
				case global.KEY_DOWN_ARROW:
					break;
				case global.KEY_DOWN:
					this.parent.socket.cmd.set(1, true);
					break;
				case global.KEY_LEFT_ARROW:
					if (UpgradeTree.isOpen) UpgradeTree.scroll -= (UpgradeTree.iconSize + UpgradeTree.iconMargin) * 10 / UpgradeTree.iconScale;
					break;
				case global.KEY_LEFT:
					this.parent.socket.cmd.set(2, true);
					break;
				case global.KEY_RIGHT_ARROW:
					if (UpgradeTree.isOpen) UpgradeTree.scroll += (UpgradeTree.iconSize + UpgradeTree.iconMargin) * 10 / UpgradeTree.iconScale;
					break;
				case global.KEY_RIGHT:
					this.parent.socket.cmd.set(3, true);
					break;
				case global.KEY_MOUSE_0:
					this.parent.socket.cmd.set(4, true);
					break;
				case global.KEY_MOUSE_1:
					this.parent.socket.cmd.set(5, true);
					break;
				case global.KEY_MOUSE_2:
					this.parent.socket.cmd.set(6, true);
					break;
				case global.KEY_ABILITY_2:
					this.parent.socket.cmd.set(7, true);
					break;
				case global.KEY_LEVEL_UP:
					this.parent.socket.talk("L");
					break;
				case global.KEY_FUCK_YOU:
					this.parent.socket.talk("0");
					break;
				case global.KEY_KILL_MOUSE:
					this.parent.socket.talk("Kill");
					break;
				case global.SPAWN_ENTITY:
					this.parent.socket.talk("SPAWNENTITY");
					break;
				case global.PASSIVE_MODE:
					this.parent.socket.talk("PassiveMode");
					break;
				case global.KEY_TELEPORT:
					this.parent.socket.talk("T");
					break;
				case global.KEY_RESET_LIFE:
					this.parent.socket.talk("resetLife");
					break;
			}
			if (!event.repeat) {
				switch (event.keyCode) {
					case global.KEY_UPGRADE_TREE:
						if (!global.died) {
							UpgradeTree.isOpen = !UpgradeTree.isOpen;
							if (UpgradeTree.isOpen) {
								if (UpgradeTree.tree.length === 0) {
									UpgradeTree.generateData();
								};
								messages.push({ text: "Use arrow keys or scroll to pan upgrade tree.", status: 2, alpha: 0, time: Date.now(), color: color.guiblack });
								messages.push({ text: "Click on an icon to view information sidebar.", status: 2, alpha: 0, time: Date.now(), color: color.guiblack });
								messages.push({ text: "Click on blank space to close sidebar.", status: 2, alpha: 0, time: Date.now(), color: color.guiblack });
								messages.push({ text: "Press U to close.", status: 2, alpha: 0, time: Date.now(), color: color.guiblack });
							}
						}
						break;
					case global.KEY_AUTO_SPIN:
						this.parent.socket.talk("t", 0);
						break;
					case global.KEY_AUTO_FIRE:
						this.parent.socket.talk("t", 1);
						break;
					case global.KEY_OVER_RIDE:
						this.parent.socket.talk("t", 2);
						break;
					case global.CHAT_KEY:
						const message = window.prompt("Type your message:");
						if (message) this.parent.socket.talk("ChatSystem", message);
						break;
					case global.DEV_CHAT_KEY:
						const devmessage = window.prompt("Type message:");
						if (message) this.parent.socket.talk("DevChatSystem", devmessage);
						break;
					case global.SWITCH_TANK:
						this.parent.socket.talk("ChangeTankOne"),
							this.parent.socket.talk("a");
						break;
					case global.KEY_RECORD:
						if (document.getElementById("gameCanvas").captureStream && window.MediaRecorder)
							if (this.videoRecorder) switch (this.videoRecorder.state) {
								case "inactive":
									messages.push({
										text: "Recorder started!",
										status: 2,
										alpha: 0,
										time: Date.now(),
										color: color.black
									});
									this.videoRecorder.start();
									break;
								case "recording":
									messages.push({
										text: "Recorder stopped! Saving file...",
										status: 2,
										alpha: 0,
										time: Date.now(),
										color: color.black
									}),
										this.videoRecorder.stop();
							}
							else {
								let e = [];
								this.videoRecorder = new MediaRecorder(document.getElementById("gameCanvas").captureStream(60));
								this.videoRecorder.ondataavailable = (a) => e.push(a.data);
								this.videoRecorder.onstop = () => {
									let a = new Blob(e, {
										type: this.videoRecorder.mimeType,
									});
									e.length = 0;
									let k = URL.createObjectURL(a),
										q = document.createElement("a");
									q.style.display = "none";
									q.setAttribute("download", "video.webm");
									q.setAttribute("href", k);
									document.body.appendChild(q);
									setTimeout(() => {
										URL.revokeObjectURL(k);
										document.body.removeChild(q);
									}, 100);
									q.click();
								};
								messages.push({
									text: "Recorder initiated and started!",
									status: 2,
									alpha: 0,
									time: Date.now(),
									color: color.black
								});
								this.videoRecorder.start();
							} else messages.push({
								text: "Media recorder not supported in this browser!",
								status: 2,
								alpha: 0,
								time: Date.now(),
								color: color.black
							});
						break;
				}
				if (global.canSkill) {
					let times = this.statMaxing ? 12 : 1;
					do switch (event.keyCode) {
						case global.KEY_UPGRADE_ATK:
							this.parent.socket.talk("x", 0);
							break;
						case global.KEY_UPGRADE_HTL:
							this.parent.socket.talk("x", 1);
							break;
						case global.KEY_UPGRADE_SPD:
							this.parent.socket.talk("x", 2);
							break;
						case global.KEY_UPGRADE_STR:
							this.parent.socket.talk("x", 3);
							break;
						case global.KEY_UPGRADE_PEN:
							this.parent.socket.talk("x", 4);
							break;
						case global.KEY_UPGRADE_DAM:
							this.parent.socket.talk("x", 5);
							break;
						case global.KEY_UPGRADE_RLD:
							this.parent.socket.talk("x", 6);
							break;
						case global.KEY_UPGRADE_MOB:
							this.parent.socket.talk("x", 7);
							break;
						case global.KEY_UPGRADE_RGN:
							this.parent.socket.talk("x", 8);
							break;
						case global.KEY_UPGRADE_SHI:
							this.parent.socket.talk("x", 9);
							break;
					}
					while (--times);
				}
			}
		}
		keyboardUp(event) {
			if (!global.gameStart) return;
			switch (event.keyCode) {
				case global.KEY_UPGRADE_MAX:
					this.statMaxing = false;
					break;
				case global.KEY_UP_ARROW:
				case global.KEY_UP:
					this.parent.socket.cmd.set(0, false);
					break;
				case global.KEY_DOWN_ARROW:
				case global.KEY_DOWN:
					this.parent.socket.cmd.set(1, false);
					break;
				case global.KEY_LEFT_ARROW:
				case global.KEY_LEFT:
					this.parent.socket.cmd.set(2, false);
					break;
				case global.KEY_RIGHT_ARROW:
				case global.KEY_RIGHT:
					this.parent.socket.cmd.set(3, false);
					break;
				case global.KEY_MOUSE_0:
					this.parent.socket.cmd.set(4, false);
					break;
				case global.KEY_MOUSE_1:
					this.parent.socket.cmd.set(5, false);
					break;
				case global.KEY_MOUSE_2:
					this.parent.socket.cmd.set(6, false);
					break;
				case global.KEY_ABILITY_2:
					this.parent.socket.cmd.set(7, false);
					break;
			}
		}
		mouseDown(mouse) {
			if (!global.gameStart) return;
			switch (mouse.button) {
				case 0:
					let mpos = {
						x: mouse.clientX * devicePixelRatio / global.uiRatio,
						y: mouse.clientY * devicePixelRatio / global.uiRatio
					};
					if (UpgradeTree.isOpen) {
						if (UpgradeTree.doHover) {
							UpgradeTree.selectedIcon = UpgradeTree.hoveredIcon;
						}
						switch (global.clickables.upgradeTreeBottomRow.check(mpos)) {
							case 0:
								try { document.body.appendChild(UpgradeTree.inputElement); } catch (e) { }
								UpgradeTree.inputElement.style.position = 'absolute';
								UpgradeTree.inputElement.style.left = '-9999px';
								UpgradeTree.inputElement.onblur = () => document.body.removeChild(UpgradeTree.inputElement);
								UpgradeTree.inputElement.onkeydown = e => {
									if (e.key === "Enter") canvas.cv.focus();
								}
								UpgradeTree.inputElement.oninput = () => UpgradeTree.generateData();
								setTimeout(() => {
									UpgradeTree.inputElement.focus();
								}, 0);
								break;
							case 1:
								UpgradeTree.START_LABEL = mockups[gui.type].name;
								UpgradeTree.generateData();
								break;
							case 2:
								UpgradeTree.START_LABEL = UpgradeTree.startLabelDefault;
								UpgradeTree.inputElement.value = "";
								UpgradeTree.generateData();
								break;
							case 3:
								UpgradeTree.iconScale = Math.min(1.7, UpgradeTree.iconScale + 0.1);
								UpgradeTree.generateData();
								break;
							case 4:
								UpgradeTree.iconScale = Math.max(0.4, UpgradeTree.iconScale - 0.1);
								UpgradeTree.generateData();
								break;
						}
						switch (global.clickables.upgradeTreePanelButtons.check(mpos)) {
							case 0:
								if (UpgradeTree.selectedIcon != null) exportTankImage(true, UpgradeTree.selectedIcon.mockup);
								break;
							case 1:
								if (UpgradeTree.selectedIcon != null) exportTankImage(false, UpgradeTree.selectedIcon.mockup);
								break;
							case 2:
								if (UpgradeTree.selectedIcon == null) break;
								if (gui.type === UpgradeTree.selectedIcon.mockup.index) {
									messages.push({ text: `You already are this tank, silly!`, status: 2, alpha: 0, time: Date.now(), color: color.red });
									break;
								}
								const path = UpgradeTree.canUpgradeToo(gui.type, UpgradeTree.selectedIcon.mockup.index);
								if (path === null) {
									messages.push({ text: `No path found from ${mockups[gui.type].name} to ${UpgradeTree.selectedIcon.mockup.name}.`, status: 2, alpha: 0, time: Date.now(), color: color.red });
									break;
								}
								messages.push({ text: `Path from ${mockups[gui.type].name} to ${UpgradeTree.selectedIcon.mockup.name} found, trying to upgrade...`, status: 2, alpha: 0, time: Date.now(), color: color.lgreen });
								messages.push({ text: path.map(e => mockups[e].name).join(" -> "), status: 2, alpha: 0, time: Date.now(), color: color.lgreen });
								for (let i = 0; i < path.length; i++) {
									this.parent.socket.talk("U", path[i]);
								};
								break;
						}
						break;
					}
					let statIndex = global.clickables.stat.check(mpos);
					if (statIndex !== -1) this.parent.socket.talk("x", statIndex);
					else if (global.clickables.skipUpgrades.check(mpos) !== -1) global.clearUpgrades();
					else {
						let upgradeIndex = global.clickables.upgrade.check(mpos);
						if (upgradeIndex !== -1) this.parent.socket.talk("U", upgradeIndex);
						else this.parent.socket.cmd.set(4, true);
					}
					break;
				case 1:
					this.parent.socket.cmd.set(5, true);
					break;
				case 2:
					this.parent.socket.cmd.set(6, true);
					break;
			}
		}
		mouseUp(mouse) {
			if (!global.gameStart) return;
			switch (mouse.button) {
				case 0:
					this.parent.socket.cmd.set(4, false);
					break;
				case 1:
					this.parent.socket.cmd.set(5, false);
					break;
				case 2:
					this.parent.socket.cmd.set(6, false);
					break;
			}
		}
		gameInput(mouse) {
			const mpos = {
				x: mouse.clientX * devicePixelRatio / global.uiRatio,
				y: mouse.clientY * devicePixelRatio / global.uiRatio
			};
			if (UpgradeTree.isOpen) {
				UpgradeTree.doHover = global.clickables.upgradeTreePanel.check(mpos) === -1;
			}
			if (!global.gameStart) return;
			this.parent.target.x = mpos.x - global.screenWidth / 2;
			this.parent.target.y = mpos.y - global.screenHeight / 2;
			global.target = this.parent.target;
			global.statHover = global.clickables.hover.check(mpos) === 0;
			global.socket.cmd.makeDirty();
		}
	}
	const canvas = new Canvas();
	const c = canvas.cv;
	const ctx = c.getContext("2d");

	function isInView(x, y, r, mid = false) {
		let ratio = getRatio();
		r += 6;
		if (mid) {
			ratio *= 2;
			return (x > -global.screenWidth / ratio - r && x < global.screenWidth / ratio + r && y > -global.screenHeight / ratio - r && y < global.screenHeight / ratio + r);
		}
		return (x > -r && x < global.screenWidth / ratio + r && y > -r && y < global.screenHeight / ratio + r);
	}

	function Smoothbar(value, speed, sharpness = 3) {
		let time = Date.now();
		let display = value;
		let oldvalue = value;
		return {
			set: (val) => {
				if (value !== val) {
					oldvalue = display;
					value = val;
					time = Date.now();
				}
			},
			get: () => {
				let timediff = (Date.now() - time) / 1000;
				display = timediff < speed ? oldvalue + (value - oldvalue) * Math.pow(timediff / speed, 1 / sharpness) : value;
				return display;
			},
		};
	}
	const sync = [];
	let clockDiff = 0;
	let serverStart = 0;
	const lag = (() => {
		let lags = [];
		return {
			get: () => {
				if (!lags.length) return 0;
				let sum = lags.reduce(function (a, b) {
					return a + b;
				});
				return sum / lags.length;
			},
			add: (l) => {
				lags.push(l);
				if (lags.length > 60) {
					lags.splice(0, 1);
				}
			},
		};
	})();
	const getNow = () => {
		return Date.now() - clockDiff - serverStart;
	};
	const socketInit = (() => {
		window.WebSocket = window.WebSocket;
		const protocol = (() => {
			const u32 = new Uint32Array(1);
			const c32 = new Uint8Array(u32.buffer);
			const u16 = new Uint16Array(1);
			const c16 = new Uint8Array(u16.buffer);
			let f32 = new Float32Array(u32.buffer);
			const flushRepeats = (repeat, lastTypeCode, headerCodes) => {
				while (repeat > 19) {
					headerCodes.push(0b1110, 15);
					repeat -= 19;
				}
				if (repeat === 1) headerCodes.push(lastTypeCode);
				else if (repeat === 2) headerCodes.push(0b1100);
				else if (repeat === 3) headerCodes.push(0b1101);
				else if (repeat < 20 && repeat > 0) {
					headerCodes.push(0b1110, repeat - 4);
				}
			};
			const encode = (message) => {
				const headers = [];
				const headerCodes = [];
				let contentSize = 0;
				let lastTypeCode = 0b1111;
				let repeatTypeCount = 0;
				const msgLen = message.length;
				for (let i = 0; i < msgLen; i++) {
					const block = message[i];
					let typeCode = 0;
					if (block === 0 || block === false) {
						typeCode = 0b0000;
					} else if (block === 1 || block === true) {
						typeCode = 0b0001;
					} else if (typeof block === "number") {
						if (!Number.isInteger(block) || block < -0x100000000 || block >= 0x100000000) {
							typeCode = 0b1000;
							contentSize += 4;
						} else if (block >= 0) {
							if (block < 0x100) {
								typeCode = 0b0010;
								contentSize++;
							} else if (block < 0x10000) {
								typeCode = 0b0100;
								contentSize += 2;
							} else {
								typeCode = 0b0110;
								contentSize += 4;
							}
						} else {
							if (block >= -0x100) {
								typeCode = 0b0011;
								contentSize++;
							} else if (block >= -0x10000) {
								typeCode = 0b0101;
								contentSize += 2;
							} else {
								typeCode = 0b0111;
								contentSize += 4;
							}
						}
					} else if (typeof block === "string") {
						let hasUnicode = false;
						const len = block.length;
						for (let j = 0; j < len; j++) {
							const code = block.charCodeAt(j);
							if (code > 0xff) {
								hasUnicode = true;
							} else if (code === 0) {
								console.error("Null containing string", block);
								throw new Error("Null containing string");
							}
						}
						if (!hasUnicode && len <= 1) {
							typeCode = 0b1001;
							contentSize++;
						} else if (hasUnicode) {
							typeCode = 0b1011;
							contentSize += len * 2 + 2;
						} else {
							typeCode = 0b1010;
							contentSize += len + 1;
						}
					} else {
						console.error("Unencodable data type", block);
						throw new Error("Unencodable data type");
					}
					headers.push(typeCode);
					if (typeCode === lastTypeCode) {
						repeatTypeCount++;
					} else {
						headerCodes.push(lastTypeCode);
						if (repeatTypeCount > 0) {
							flushRepeats(repeatTypeCount, lastTypeCode, headerCodes);
						}
						repeatTypeCount = 0;
						lastTypeCode = typeCode;
					}
				}
				headerCodes.push(lastTypeCode);
				if (repeatTypeCount > 0) {
					flushRepeats(repeatTypeCount, lastTypeCode, headerCodes);
				}
				headerCodes.push(0b1111);
				if (headerCodes.length & 1) headerCodes.push(0b1111);
				const headerBytes = headerCodes.length >> 1;
				const output = new Uint8Array(headerBytes + contentSize);
				for (let i = 0; i < headerCodes.length; i += 2) {
					output[i >> 1] = (headerCodes[i] << 4) | headerCodes[i + 1];
				}
				let index = headerBytes;
				for (let i = 0; i < msgLen; i++) {
					const block = message[i];
					switch (headers[i]) {
						case 0b0000:
						case 0b0001:
							break;
						case 0b0010:
						case 0b0011:
							output[index++] = block;
							break;
						case 0b0100:
						case 0b0101:
							u16[0] = block;
							output.set(c16, index);
							index += 2;
							break;
						case 0b0110:
						case 0b0111:
							u32[0] = block;
							output.set(c32, index);
							index += 4;
							break;
						case 0b1000:
							f32[0] = block;
							output.set(c32, index);
							index += 4;
							break;
						case 0b1001:
							output[index++] = block.length === 0 ? 0 : block.charCodeAt(0);
							break;
						case 0b1010: {
							const len = block.length;
							for (let j = 0; j < len; j++) {
								output[index++] = block.charCodeAt(j);
							}
							output[index++] = 0;
							break;
						}
						case 0b1011: {
							const len = block.length;
							for (let j = 0; j < len; j++) {
								const charCode = block.charCodeAt(j);
								output[index++] = charCode & 0xff;
								output[index++] = charCode >> 8;
							}
							output[index++] = 0;
							output[index++] = 0;
							break;
						}
					}
				}
				return output;
			};
			const decode = (packet) => {
				const data = new Uint8Array(packet);
				if ((data[0] >> 4) !== 0b1111) return null;
				const headers = [];
				let lastTypeCode = 0b1111;
				let index = 0;
				let consumedHalf = true;
				while (true) {
					if (index >= data.length) return null;
					let typeCode = data[index];
					if (consumedHalf) {
						typeCode &= 0b1111;
						index++;
					} else {
						typeCode >>= 4;
					}
					consumedHalf = !consumedHalf;
					if ((typeCode & 0b1100) === 0b1100) {
						if (typeCode === 0b1111) {
							if (consumedHalf) index++;
							break;
						}
						let repeat = typeCode - 10;
						if (typeCode === 0b1110) {
							if (index >= data.length) return null;
							let repeatCode = data[index];
							if (consumedHalf) {
								repeatCode &= 0b1111;
								index++;
							} else {
								repeatCode >>= 4;
							}
							consumedHalf = !consumedHalf;
							repeat += repeatCode;
						}
						for (let i = 0; i < repeat; i++) {
							headers.push(lastTypeCode);
						}
					} else {
						headers.push(typeCode);
						lastTypeCode = typeCode;
					}
				}
				const output = [];
				const headerCount = headers.length;
				for (let i = 0; i < headerCount; i++) {
					switch (headers[i]) {
						case 0b0000:
							output.push(0);
							break;
						case 0b0001:
							output.push(1);
							break;
						case 0b0010:
							output.push(data[index++]);
							break;
						case 0b0011:
							output.push(data[index++] - 0x100);
							break;
						case 0b0100:
							c16[0] = data[index++];
							c16[1] = data[index++];
							output.push(u16[0]);
							break;
						case 0b0101:
							c16[0] = data[index++];
							c16[1] = data[index++];
							output.push(u16[0] - 0x10000);
							break;
						case 0b0110:
							c32[0] = data[index++];
							c32[1] = data[index++];
							c32[2] = data[index++];
							c32[3] = data[index++];
							output.push(u32[0]);
							break;
						case 0b0111:
							c32[0] = data[index++];
							c32[1] = data[index++];
							c32[2] = data[index++];
							c32[3] = data[index++];
							output.push(u32[0] - 0x100000000);
							break;
						case 0b1000:
							c32[0] = data[index++];
							c32[1] = data[index++];
							c32[2] = data[index++];
							c32[3] = data[index++];
							output.push(f32[0]);
							break;
						case 0b1001: {
							const byte = data[index++];
							output.push(byte === 0 ? "" : String.fromCharCode(byte));
							break;
						}
						case 0b1010: {
							let str = "";
							let b;
							while ((b = data[index++])) {
								str += String.fromCharCode(b);
							}
							output.push(str);
							break;
						}
						case 0b1011: {
							let str = "";
							let b;
							while ((b = data[index++] | (data[index++] << 8))) {
								str += String.fromCharCode(b);
							}
							output.push(str);
							break;
						}
					}
				}
				return output;
			};
			return {
				encode,
				decode
			};
		})();
		const convert = (() => {
			const get = (() => {
				let index = 0,
					crawlData = [];
				return {
					peek: (offset = 0) => {
						const peekIndex = index + offset;
						return peekIndex < crawlData.length ? crawlData[peekIndex] : undefined;
					},
					next: () => {
						if (index >= crawlData.length) {
							console.error("Data stream:", crawlData);
							throw new Error(`Trying to crawl past the end of the provided data! Index: ${index}, Length: ${crawlData.length}`);
						}
						const value = crawlData[index];
						index++;
						return value;
					},
					all: () => crawlData.slice(index),
					take: (amount) => {
						if (amount < 0) {
							throw new Error("Cannot take a negative amount.");
						}
						const newIndex = index + amount;
						if (newIndex > crawlData.length) {
							console.error("Data stream:", crawlData);
							throw new Error(`Trying to take(${amount}) past the end of the provided data! Index: ${index}, New Index: ${newIndex}, Length: ${crawlData.length}`);
						}
						index = newIndex;
					},
					set: (data) => {
						if (!Array.isArray(data)) {
							throw new Error("Invalid data type passed to get.set(). Expected array.");
						}
						crawlData = data;
						index = 0;
					},
					remaining: () => crawlData.length - index,
				};
			})();
			let entitiesMap = new Map();
			return {
				begin: (data) => get.set(data),
				data: (() => {
					const process = (() => {
						const GunContainer = (() => {
							function physics(g) {
								g.isUpdated = true;
								const motion = g.motion;
								let position = g.position;
								if (motion !== 0 || position !== 0) {
									const recoilForce = -0.2 * position;
									g.motion += recoilForce;
									position += g.motion;
									if (position < 0) {
										position = 0;
										g.motion = -g.motion;
									}
									if (g.motion > 0) {
										g.motion *= 0.5;
									}
									g.position = position;
								}
							}
							return (n) => {
								const a = new Array(n);
								for (let i = 0; i < n; i++) {
									a[i] = {
										motion: 0,
										position: 0,
										isUpdated: true,
									};
								}
								const length = a.length;
								return {
									getPositions: () => a.map((g) => g.position),
									update: () => {
										for (let i = 0; i < length; i++) {
											physics(a[i]);
										}
									},
									fire: (i, power) => {
										if (i >= 0 && i < length) {
											const gun = a[i];
											if (gun.isUpdated) {
												gun.motion += Math.sqrt(power) / 20;
											}
											gun.isUpdated = false;
										} else {
											console.warn(`Gun fire index ${i} out of bounds (length ${length})`);
										}
									},
									length: length,
								};
							};
						})();

						function Status() {
							let state = "normal";
							let time = getNow();
							let lastStateChangeTime = time;
							return {
								set: (val) => {
									if (val !== state || state === "injured") {
										if (state !== "dying") {
											lastStateChangeTime = getNow();
										}
										state = val;
									}
								},
								getFade: () => {
									if (state === "dying" || state === "killed") {
										const elapsed = getNow() - lastStateChangeTime;
										return Math.max(0, 1 - Math.min(1, elapsed / 300));
									}
									return 1;
								},
								getColor: () => {
									return config.redDamage.value ? "#FF0000" : "#FFFFFF";
								},
								getBlend: () => {
									const now = getNow();
									const elapsed = now - lastStateChangeTime;
									if (state === "normal" || state === "dying") {
										return 0;
									}
									let blend = 1 - Math.min(1, elapsed / 80);
									if (state === "injured" && elapsed > 500) {
										state = "normal";
										return 0;
									}
									return blend;
								},
								update: () => {
									if (state === "injured" && (getNow() - lastStateChangeTime > 500)) {
										state = "normal";
									}
								},
								getState: () => state,
							};
						}

						function processGunsAndTurrets(target, isNewOrIndexChanged) {
							const gunDataLength = get.next();
							if (isNewOrIndexChanged || !target.guns) {
								target.guns = GunContainer(gunDataLength);
							} else if (gunDataLength !== target.guns.length) {
								console.error("Entity:", target);
								throw new Error(`Mismatch between data gun number (${gunDataLength}) and remembered gun number (${target.guns.length})!`);
							}
							const gunController = target.guns;
							const expectedGunFirings = gunDataLength * 2;
							if (get.remaining() < expectedGunFirings) {
								throw new Error("Insufficient data for gun firings.");
							}
							for (let i = 0; i < gunDataLength; i++) {
								const time = get.next();
								const power = get.next();
								if (time > player.lastUpdate - metrics.rendergap) {
									gunController.fire(i, power);
								}
							}
							const turretDataLength = get.next();
							if (isNewOrIndexChanged || !target.turrets) {
								target.turrets = new Array(turretDataLength);
								for (let i = 0; i < turretDataLength; i++) {
									target.turrets[i] = process();
								}
							} else {
								if (target.turrets.length !== turretDataLength) {
									console.error("Entity:", target);
									throw new Error(`Mismatch between data turret number (${turretDataLength}) and remembered turret number (${target.turrets.length})!`);
								}
								for (let i = 0; i < turretDataLength; i++) {
									target.turrets[i] = process(target.turrets[i]);
								}
							}
						}
						return (existingInstance = null) => {
							const type = get.next();
							let z;
							let isNew = !existingInstance;
							if (type & 0x01) {
								z = existingInstance || {};
								z.facing = get.next();
								z.layer = get.next();
								processGunsAndTurrets(z, isNew);
							} else {
								z = existingInstance || {};
								const id = get.next();
								if (!isNew && z.id !== id) {
									console.error(`Entity ID mismatch: Map had ${z.id}, stream has ${id}. Treating as new.`);
									z = {};
									isNew = true;
								}
								z.id = id;
								let indexChanged = false;
								if (!isNew) {
									if (!z.render) {
										console.warn("Existing entity missing render object, creating.", z);
										z.render = {
											status: Status(),
											health: Smoothbar(0, 0.5, 5),
											shield: Smoothbar(0, 0.5, 5)
										};
									}
									z.render.draws = true;
									z.render.lastx = z.x;
									z.render.lasty = z.y;
									z.render.lastvx = z.vx;
									z.render.lastvy = z.vy;
									z.render.lastf = z.facing;
									z.render.lastRender = player.time;
								}
								const newIndex = get.next();
								if (!isNew && z.index !== newIndex) {
									indexChanged = true;
								}
								const oldIndex = z.index;
								z.index = newIndex;
								z.x = get.next();
								z.y = get.next();
								z.vx = get.next();
								z.vy = get.next();
								z.size = get.next();
								z.facing = get.next();
								z.vfacing = get.next();
								z.twiggle = get.next();
								z.layer = get.next();
								z.color = get.next();
								const previousHealth = isNew ? 1.0 : z.health;
								const previousShield = isNew ? 1.0 : z.shield;
								z.health = get.next() / 255;
								z.shield = get.next() / 255;
								z.alpha = get.next() / 255;
								z.drawsHealth = !!(type & 0x02);
								z.nameplate = !!(type & 0x04);
								if (z.nameplate) {
									z.name = get.next();
									z.namecolor = z.name.substring(0, 7);
									z.aesthetic = get.next();
									z.name = z.name.slice(7);
									z.score = get.next();
								} else {
									if (!isNew) {
										z.name = "";
										z.score = 0;
										z.namecolor = "#FFFFFF";
										z.aesthetic = 0;
									}
								}
								if (isNew) {
									z.renderSize = 1;
									z.render = {
										alpha: 1,
										draws: false,
										expandsWithDeath: z.drawsHealth,
										lastRender: player.time,
										x: z.x,
										y: z.y,
										lastx: z.x,
										lasty: z.y,
										lastvx: z.vx,
										lastvy: z.vy,
										lastf: z.facing,
										f: z.facing,
										h: z.health,
										s: z.shield,
										interval: metrics.rendergap,
										slip: 0,
										status: Status(),
										health: Smoothbar(z.health, 0.5, 5),
										shield: Smoothbar(z.shield, 0.5, 5),
										size: z.size / 2
									};
								} else {
									if (z.health < previousHealth || z.shield < previousShield) {
										z.render.status.set("injured");
									} else if (z.render.status.getFade() !== 1) {
										if (z.health > 0) {
											z.render.status.set("normal");
										}
									}
									z.render.health.set(z.health);
									z.render.shield.set(z.shield);
									z.render.status.update();
								}
								const refreshGunsAndTurrets = isNew || indexChanged;
								processGunsAndTurrets(z, refreshGunsAndTurrets);
								z.oldIndex = oldIndex;
							}
							return z;
						};
					})();
					return () => {
						const output = [];
						const currentFrameEntityIds = new Set();
						const entityCount = get.next();
						if (entityCount > get.remaining()) {
							console.error(`Stream claims ${entityCount} entities, but only ${get.remaining()} data points remain.`);
							return;
						}
						for (let i = 0; i < entityCount; i++) {
							const type = get.peek();
							if (type === undefined) {
								console.error(`Unexpected end of data stream processing entity ${i + 1}/${entityCount}.`);
								break;
							}
							if (type & 0x01) {
								console.warn("Top-level turret found in stream. Processing and discarding.");
								process();
							} else {
								const id = get.peek(1);
								if (id === undefined) {
									console.error(`Unexpected end of data stream peeking for ID of entity ${i + 1}/${entityCount}.`);
									break;
								}
								const existingEntity = entitiesMap.get(id);
								const processedEntity = process(existingEntity);
								if (processedEntity && processedEntity.id != null) {
									currentFrameEntityIds.add(processedEntity.id);
									entitiesMap.set(processedEntity.id, processedEntity);
								} else {
									console.error("Process() did not return a valid entity instance for the main loop.", {
										peekedType: type,
										peekedId: id
									});
								}
							}
						}
						for (const [id, entity] of entitiesMap.entries()) {
							if (currentFrameEntityIds.has(id)) {
								output.push(entity);
							} else {
								if (entity.render && entity.render.status) {
									const currentStatus = entity.render.status.getState();
									if (currentStatus !== 'killed') {
										entity.render.status.set(entity.health > 0 ? "dying" : "killed");
									}
									if (entity.render.status.getFade() > 0 && isInView(entity.render.x - player.renderx, entity.render.y - player.rendery, entity.size, true)) {
										output.push(entity);
									} else {
										entitiesMap.delete(id);
									}
								} else {
									console.warn("Entity missing render/status object during dead entity check, removing.", entity);
									entitiesMap.delete(id);
								}
							}
						}
						entities = output;
						entities.sort((a, b) => {
							let sort = a.layer - b.layer;
							if (sort === 0) {
								sort = b.id - a.id;
							}
							if (sort === 0 && a.id !== b.id) {
								console.error("Duplicate entity detected after sort:", a, b);
								throw new Error("Sorting resulted in non-unique entity order (same layer and ID?).");
							}
							return sort;
						});
					};
				})(),
				gui: () => {
					const index = get.next();
					const indices = {
						topspeed: !!(index & 0x0100),
						accel: !!(index & 0x0080),
						skills: !!(index & 0x0040),
						statsdata: !!(index & 0x0020),
						upgrades: !!(index & 0x0010),
						points: !!(index & 0x0008),
						score: !!(index & 0x0004),
						label: !!(index & 0x0002),
						fps: !!(index & 0x0001),
					};
					if (indices.fps) {
						gui.fps = get.next();
					}
					if (indices.label) {
						gui.type = get.next();
						gui.color = get.next();
						gui.playerid = get.next();
					}
					if (indices.score) {
						gui.__s.setScore(get.next());
					}
					if (indices.points) {
						gui.points = get.next();
					}
					if (indices.upgrades) {
						global.clearUpgrades();
						for (let i = 0, len = get.next(); i < len; i++) {
							gui.upgrades.push({
								model: get.next(),
								opacity: 0,
								color: upgradeColors[i % upgradeColors.length]
							});
						}
					}
					if (indices.statsdata) {
						for (let i = 9; i >= 0; i--) {
							gui.skills[i].name = get.next();
							gui.skills[i].cap = get.next();
							gui.skills[i].softcap = get.next();
						}
					}
					if (indices.skills) {
						let skk = parseInt(get.next(), 36).toString(16).padStart(10, '0');
						for (let i = 0; i < 10; i++) {
							gui.skills[i].amount = parseInt(skk[i], 16);
						}
					}
					if (indices.accel) {
						gui.accel = get.next();
					}
					if (indices.topspeed) {
						gui.topspeed = get.next();
					}
				},
				broadcast: () => {
					const all = get.all();
					let bytesConsumed = minimapAllInt.update(all);
					bytesConsumed = minimapTeamInt.update(all, bytesConsumed);
					bytesConsumed = leaderboardInt.update(all, bytesConsumed);
					get.take(bytesConsumed);
					const widthRatio = global.gameWidth / 255;
					const heightRatio = global.gameHeight / 255;
					const map = [];
					for (const {
						id,
						data
					}
						of minimapAllInt.entries()) {
						map.push({
							id,
							type: data[0],
							x: data[1] * widthRatio,
							y: data[2] * heightRatio,
							color: data[3],
							size: data[4],
						});
					}
					for (const {
						id,
						data
					}
						of minimapTeamInt.entries()) {
						map.push({
							id,
							type: 0,
							x: data[0] * widthRatio,
							y: data[1] * heightRatio,
							color: data[2],
							size: 0,
						});
					}
					minimap.update(map);
					const entries = [];
					for (const {
						id,
						data
					}
						of leaderboardInt.entries()) {
						entries.push({
							id,
							score: data[0],
							index: data[1],
							name: data[2],
							color: data[3],
							bar: data[4],
						});
					}
					leaderboard.update(entries);
				},
			};
		})();
		const messageColorRegex = /^\$\[(#[0-9A-Fa-f]{6})\$\]/;
		return (port) => {
			const socket = new WebSocket((ServerManager.server.protocol === "http:" ? "ws:" : "wss:") + "//" + ServerManager.server.url);
			socket.binaryType = "arraybuffer";
			socket.open = false;
			socket.cmd = (() => {
				const commands = [false, false, false, false, false, false, false, false];
				let dirty = false;
				return {
					set: (index, value) => {
						if (commands[index] !== value) {
							commands[index] = value;
							dirty = true;
						}
					},
					makeDirty: () => dirty = true,
					talk: function () {
						if (!dirty) return;
						dirty = false;
						let commandByte = 0;
						for (let i = 0; i < 8; i++) {
							if (commands[i]) {
								commandByte |= (1 << i);
							}
						}
						const ratio = getRatio();
						const targetX = Math.round(canvas.target.x / ratio);
						const targetY = Math.round(canvas.target.y / ratio);
						socket.talk("C", targetX, targetY, commandByte);
					},
					check: () => dirty,
					getMotion: () => ({
						x: (commands[3] ? 1 : 0) - (commands[2] ? 1 : 0),
						y: (commands[1] ? 1 : 0) - (commands[0] ? 1 : 0),
					}),
					commands: commands
				};
			})();
			socket.talk = function (...message) {
				if (socket.readyState === WebSocket.OPEN) {
					socket.send(protocol.encode(message));
				} else {
					console.warn("Socket not open, message not sent:", message);
					return 1;
				}
			};
			socket.onopen = function socketOpen() {
				socket.open = true;
				global.message = "That token is invalid, expired, or already in use on this server. Please try another one!";
				socket.talk("k", global.playerKey);
				console.log("Token submitted to the server for validation.");
				socket.ping = (payload) => {
					socket.talk("p", payload);
				};
				if (socket.commandCycle) clearInterval(socket.commandCycle);
				socket.commandCycle = setInterval(() => {
					socket.cmd.talk();
				}, 40);
			};
			socket.onmessage = function socketMessage(message) {
				const m = protocol.decode(message.data);
				if (m === -1 || !Array.isArray(m)) {
					console.error("Malformed packet received:", message.data);
					throw new Error("Malformed packet.");
				}
				if (m.length === 0) {
					console.warn("Received empty packet.");
					return;
				}
				const messageType = m.splice(0, 1)[0];
				switch (messageType) {
					case "w":
						if (m[0]) {
							console.log("Server accepted token. Sending spawn request.");
							socket.talk("s", global.playerName, 0);
							global.message = "";
						} else {
							console.error("Server rejected token or welcome failed.");
						}
						break;
					case "R":
						if (m.length < 5) {
							console.error("Invalid room setup packet:", m);
							return;
						}
						global.gameWidth = m[0];
						global.gameHeight = m[1];
						try {
							roomSetup = JSON.parse(m[2]);
							serverStart = JSON.parse(m[3]);
							roomIdealGridSize = findOptimalGridSize(roomSetup[0].length * 10, roomSetup.length * 10, 30);
						} catch (e) {
							console.error("Failed to parse room setup JSON:", e, m[2], m[3]);
							return;
						}
						global.roomSpeed = m[4];
						console.log("Room data received. Dimensions:", global.gameWidth, "x", global.gameHeight);
						global.message = "";
						global.gameStart = true;
						for (let i = 0; i < 60; i++) {
							socket.talk("L");
						}
						break;
					case "c":
						if (m.length < 4) {
							console.error("Invalid camera force move packet:", m);
							return;
						}
						player.renderx = player.x = m[0];
						player.rendery = player.y = m[1];
						player.renderv = player.view = m[2];
						player.namecolor = m[3];
						console.log("Camera snapped to:", m[0], m[1], "View:", m[2]);
						break;
					case "S": {
						global.died = false;
						if (m.length < 2) {
							console.error("Invalid clock sync packet:", m);
							return;
						}
						const clientTime = m[0];
						const serverTime = m[1];
						const now = getNow();
						const latency = (now - clientTime) / 2;
						const delta = now - (serverTime + latency);
						if (!Array.isArray(sync)) sync = [];
						sync.push({
							delta,
							latency
						});
						if (sync.length < 10) {
							setTimeout(() => {
								socket.talk("S", getNow());
							}, 50);
							global.message = `Syncing clocks (${sync.length}/10)...`;
						} else {
							sync.sort((a, b) => a.latency - b.latency);
							const medianLatency = sync[Math.floor(sync.length / 2)].latency;
							let variance = 0;
							sync.forEach(e => {
								const diff = e.latency - medianLatency;
								variance += diff * diff;
							});
							const stdDevLatency = Math.sqrt(variance / sync.length);
							let sumDelta = 0;
							let validSamples = 0;
							sync.forEach(e => {
								if (Math.abs(e.latency - medianLatency) < stdDevLatency) {
									sumDelta += e.delta;
									validSamples++;
								}
							});
							if (validSamples < 3) {
								console.warn("Few valid sync samples, using median delta.");
								sync.sort((a, b) => a.delta - b.delta);
								clockDiff = Math.round(sync[Math.floor(sync.length / 2)].delta);
							} else {
								clockDiff = Math.round(sumDelta / validSamples);
							}
							console.log("Sync complete. Latency (median):", medianLatency.toFixed(1), "ms. Clock difference:", clockDiff, "ms.");
							console.log("Sync samples:", sync);
							global.gameStart = true;
							global.message = "";
						}
						break;
					}
					case "m": {
						if (m.length < 1) {
							console.error("Invalid message packet:", m);
							return;
						}
						const rawMessage = m[0];
						const match = rawMessage.match(messageColorRegex);
						const text = rawMessage.replace(messageColorRegex, "");
						const messageColor = match ? match[1] : color.black;
						if (!Array.isArray(messages)) messages = [];
						messages.push({
							text: text,
							status: 2,
							alpha: 0,
							time: Date.now(),
							color: messageColor,
						});
						break;
					}
					case "u": {
						if (m.length < 6) {
							console.error("Invalid uplink packet:", m);
							return;
						}
						const camtime = m[0];
						if (camtime > player.lastUpdate) {
							const now = getNow();
							lag.add(now - camtime);
							player.time = camtime + lag.get();
							metrics.rendergap = camtime - player.lastUpdate;
							if (metrics.rendergap <= 0) {
								console.warn(`Render gap non-positive: ${metrics.rendergap}. camtime: ${camtime}, lastUpdate: ${player.lastUpdate}`);
							}
							player.lastUpdate = camtime;
							const entityData = m.slice(6);
							convert.begin(entityData);
							convert.gui();
							convert.data();
							player.lastx = player.x;
							player.lasty = player.y;
							player.lastvx = player.vx;
							player.lastvy = player.vy;
							player.x = m[1];
							player.y = m[2];
							player.vx = global.died ? 0 : m[4];
							player.vy = global.died ? 0 : m[5];
							player.view = m[3];
							if (isNaN(player.renderx)) {
								player.renderx = player.x;
							}
							if (isNaN(player.rendery)) {
								player.rendery = player.y;
							}
							if (isNaN(player.renderv) || player.renderv === 0) {
								player.renderv = player.view > 0 ? player.view : 2000;
							}
							metrics.lastlag = metrics.lag;
							metrics.lag = lag.get();
							metrics.lastuplink = now;
							updateTimes++;
						} else {
							console.log(`Skipping old data. Last update: ${player.lastUpdate}, packet time: ${camtime}.`);
						}
						socket.talk("d", player.lastUpdate);
						socket.cmd.talk();
						break;
					}
					case "b": {
						convert.begin(m);
						convert.broadcast();
						break;
					}
					case "p": {
						if (m.length < 1) {
							console.error("Invalid ping packet:", m);
							return;
						}
						metrics.latency = global.time - m[0];
						break;
					}
					case "F": {
						UpgradeTree.isOpen = false;
						global.finalScore = Smoothbar(0, 4);
						global.finalScore.set(m[0]);
						global.finalLifetime = Smoothbar(0, 5);
						global.finalLifetime.set(m[1]);
						global.finalKills = [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)];
						global.finalKills[0].set(m[2]);
						global.finalKills[1].set(m[3]);
						global.finalKills[2].set(m[4]);
						global.finalKillers = [];
						const killerCount = m[5];
						if (m.length < 6 + killerCount) {
							console.error("Invalid killer list in final score packet:", m);
							return;
						}
						for (let i = 0; i < killerCount; i++) {
							global.finalKillers.push(m[6 + i]);
						}
						global.died = true;
						window.onbeforeunload = () => false;
						break;
					}
					case "K":
						UpgradeTree.isOpen = false;
						console.warn("Kicked from server. Message:", m[0]);
						global.message = `Kicked: ${m[0] || 'No reason specified.'}`;
						window.onbeforeunload = () => false;
						global.died = true;
						global.disconnected = true;
						socket.close();
						break;
					default:
						console.error(`Unknown message type received: ${messageType}`, m);
						throw new Error(`Unknown message index: ${messageType}`);
				}
			};
			socket.onclose = function socketClose(event) {
				if (!socket.open && global.disconnected) return;
				TipManager.choose();
				socket.open = false;
				global.disconnected = true;
				console.log(`Socket closed. Code: ${event.code}, Reason: ${event.reason || 'N/A'}`);
				if (socket.commandCycle) {
					clearInterval(socket.commandCycle);
					socket.commandCycle = null;
				}
				window.onbeforeunload = () => false;
				if (!global.died) {
					global.message = "Disconnected from server.";
				}
			};
			socket.onerror = function socketError(error) {
				console.error("WebSocket error:", error);
				if (!global.message) {
					global.message = "Socket error. Connection lost.";
				}
				if (socket.readyState !== WebSocket.CLOSED) {
					socket.close();
				}
				global.disconnected = true;
			};
			return socket;
		};
	})();

	function startGame(playerNameInput, playerKeyInput) {
		if (global.gameStartedDOM) {
			console.warn("startGame called after game already started.");
			return;
		}
		TipManager.choose();
		const resize = () => {
			global.uiRatio = (Math.min(innerWidth * window.devicePixelRatio, innerHeight * window.devicePixelRatio) / 1010) * config.uiscale.value;
			c.width = global.screenWidth = window.innerWidth * window.devicePixelRatio;
			c.height = global.screenHeight = window.innerHeight * window.devicePixelRatio;
			global.screenWidth = (global.screenWidth / global.uiRatio) | 0;
			global.screenHeight = (global.screenHeight / global.uiRatio) | 0;
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			if (config.blurPatch.value) ctx.translate(0.5, 0.5);
			ctx.scale(global.uiRatio, global.uiRatio);
		};
		window.onresize = resize;
		resize();
		const menuElement = document.getElementById("menu");
		const backgroundElement = document.getElementById("background");
		const canvasElement = canvas.cv;
		menuElement.classList.remove("menu-open");
		backgroundElement.classList.add("background-close");
		canvasElement.focus();
		setTimeout(() => {
			menuElement.remove();
			backgroundElement.remove();
			canvasElement.focus();
		}, 700);
		global.gameStartedDOM = true;
		global.playerName = playerNameInput;
		player.name = playerNameInput;
		global.playerKey = playerKeyInput;
		localStorage.setItem("input-name", playerNameInput);
		localStorage.setItem("input-token", playerKeyInput);
		if (!global.socket) {
			global.socket = socketInit(3000);
		}
		canvas.socket = global.socket;
		if (!global.animLoopHandle) {
			animloop();
		}
		window.onbeforeunload = () => true;
		util.pullJSON("mockups").then((data) => {
			mockups = data;
			mockupsLoaded = true;
		}).catch(error => {
			console.error("Failed to load mockups:", error);
		});
		ImageManager.loadImages();
	}

	function clearScreen(clearColor, alpha) {
		ctx.fillStyle = clearColor;
		ctx.globalAlpha = alpha;
		ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
		ctx.globalAlpha = 1;
	}

	function measureText(text, fontSize) {
		ctx.font = `bold ${fontSize + config.fontSize.value - 4}px ${config.font.data.values[config.font.value]}`;
		return ctx.measureText(text).width;
	}

	function splitText(text, maxLength, dash = "-", doMeasure = false) {
		const words = text.split(/\s+/);
		const output = [];
		let currentLine = "";
		for (let i = 0; i < words.length; i++) {
			let word = words[i];
			if (word.length > maxLength) {
				words.splice(i + 1, 0, `${dash}${word.slice(maxLength - dash.length)}`);
				word = `${word.slice(0, maxLength - dash.length)}${dash}`;
			}
			const line = currentLine.length === 0 ? word : `${currentLine} ${word}`;
			if (line.length > maxLength) {
				output.push(currentLine);
				currentLine = word;
			} else {
				currentLine = line;
			}
		}
		output.push(currentLine);
		return output;
	}

	function drawText(text, x, y, fontSize, fillColor, alignment = "left", alpha = 1, doStroke = true) {
		ctx.font = `bold ${fontSize + config.fontSize.value - 4}px ${config.font.data.values[config.font.value]}`;
		ctx.textAlign = alignment;
		ctx.textBaseline = "middle";
		ctx.globalAlpha = alpha;
		ctx.strokeStyle = color.black;
		ctx.fillStyle = fillColor;
		if (config.fontStrokeRatio.value !== 0 && doStroke) {
			ctx.lineWidth = Math.max(3, fontSize / 5) * 1.05 * config.fontStrokeRatio.value;
			ctx.strokeText(text, x, y);
		}
		ctx.fillText(text, x, y);
	}

	function drawGuiRect(x, y, length, height, stroke = false) {
		switch (stroke) {
			case true:
				ctx.strokeRect(x, y, length, height);
				break;
			case false:
				ctx.fillRect(x, y, length, height);
				break;
		}
	}

	function drawGuiCircle(x, y, radius, stroke = false) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		stroke ? ctx.stroke() : ctx.fill();
	}

	function drawGuiLine(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
		ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
		ctx.closePath();
		ctx.stroke();
	}

	function drawBar(x1, x2, y, width, color) {
		ctx.beginPath();
		ctx.lineTo(x1, y);
		ctx.lineTo(x2, y);
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.closePath();
		ctx.stroke();
	}
	const TAU = Math.PI * 2;

	function drawPoly(centerX, centerY, radius, sides, angle = 0, fill = true, context = ctx) {
		if (sides === -1) return;
		const sidesIsNumber = typeof sides === "number";
		if (sidesIsNumber && sides > 0 && sides % 2 === 0) {
			angle += Math.PI / sides;
		}
		if (!sides && sides !== 0) {
			const fillColor = context.fillStyle;
			const strokeColor = context.strokeStyle;
			context.beginPath();
			context.arc(centerX, centerY, radius + context.lineWidth / 2, 0, TAU);
			context.arc(centerX, centerY, Math.max(0, radius), 0, TAU, true);
			context.fillStyle = strokeColor;
			context.fill();
			if (radius > 0) {
				context.beginPath();
				context.arc(centerX, centerY, Math.max(radius, 1), 0, TAU);
				context.fillStyle = fillColor;
				context.fill();
			}
			return;
		} else if (sides === 0) {
			const fillColor = context.fillStyle;
			const strokeColor = context.strokeStyle;
			context.beginPath();
			context.arc(centerX, centerY, radius + context.lineWidth / 2, 0, TAU);
			context.arc(centerX, centerY, Math.max(0, radius), 0, TAU, true);
			context.fillStyle = strokeColor;
			context.fill();
			if (radius > 0) {
				context.beginPath();
				context.arc(centerX, centerY, Math.max(radius, 1), 0, TAU);
				context.fillStyle = fillColor;
				context.fill();
			}
			return;
		} else if (typeof sides === "string") {
			if (ImageManager.isReady(sides)) {
				context.save();
				context.translate(centerX, centerY);
				context.rotate(angle);
				const diameter = radius * 2;
				context.drawImage(ImageManager.get(sides), -radius, -radius, diameter, diameter);
				context.restore();
			} else {
				const path = new Path2D(sides);
				context.save();
				context.translate(centerX, centerY);
				context.scale(radius, radius);
				if (radius !== 0) context.lineWidth /= radius;
				context.rotate(angle);
				context.stroke(path);
				if (fill) context.fill(path);
				context.restore();
			}
			return;
		} else {
			context.beginPath();
			if (Array.isArray(sides)) {
				const cosAngle = Math.cos(angle);
				const sinAngle = Math.sin(angle);
				let firstPoint = true;
				for (let i = 0; i < sides.length; i++) {
					const [x, y] = sides[i];
					const rotatedX = x * cosAngle - y * sinAngle;
					const rotatedY = y * cosAngle + x * sinAngle;
					const finalX = centerX + radius * rotatedX;
					const finalY = centerY + radius * rotatedY;
					if (firstPoint) {
						context.moveTo(finalX, finalY);
						firstPoint = false;
					} else {
						context.lineTo(finalX, finalY);
					}
				}
			} else if (sidesIsNumber && sides < 0) {
				const numPoints = -sides;
				const dip = 1 - 6 / (numPoints * numPoints);
				let currentAngle = angle + (numPoints % 2 === 0) * Math.PI / sides;
				let currentX = centerX + radius * Math.cos(currentAngle);
				let currentY = centerY + radius * Math.sin(currentAngle);
				context.moveTo(currentX, currentY);
				const step = TAU / numPoints;
				for (let i = 0; i < numPoints; i++) {
					const halfTheta = currentAngle + step * 0.5;
					const nextTheta = currentAngle + step;
					const cpX = centerX + radius * dip * Math.cos(halfTheta);
					const cpY = centerY + radius * dip * Math.sin(halfTheta);
					const nextX = centerX + radius * Math.cos(nextTheta);
					const nextY = centerY + radius * Math.sin(nextTheta);
					context.quadraticCurveTo(cpX, cpY, nextX, nextY);
					currentAngle = nextTheta;
				}
			} else if (sidesIsNumber && sides === 600) {
				const angleOffset = Math.PI / 6 + angle + 0.385;
				const scaledRadius = radius * 1.1;
				const step = TAU / 6;
				for (let i = 0; i < 6; i++) {
					const theta = i * step;
					const finalAngle = angleOffset + theta;
					const x = centerX + scaledRadius * Math.cos(finalAngle);
					const y = centerY + scaledRadius * Math.sin(finalAngle);
					context.lineTo(x, y);
				}
			} else if (sidesIsNumber && sides > 0) {
				const step = TAU / sides;
				let startAngle = angle;
				context.moveTo(centerX + radius * Math.cos(startAngle), centerY + radius * Math.sin(startAngle));
				for (let i = 1; i < sides; i++) {
					const currentAngle = startAngle + i * step;
					context.lineTo(centerX + radius * Math.cos(currentAngle), centerY + radius * Math.sin(currentAngle));
				}
			}
			context.closePath();
			context.stroke();
			context.fill();
		}
	}

	function drawGun(x, y, length, height, aspect, angle, shape, context = ctx) {
		const aPos = aspect >= 0;
		const h0 = aPos ? height * aspect : height;
		const h1 = aPos ? height : -height * aspect;
		const r0 = Math.atan2(h0, length);
		const r1 = Math.atan2(h1, length);
		const l0 = Math.hypot(length, h0);
		const l1 = Math.hypot(length, h1);
		const angle1 = angle + r0;
		const angle2 = angle + Math.PI - r1;
		const angle3 = angle + Math.PI + r1;
		const angle4 = angle - r0;
		const cos1 = Math.cos(angle1),
			sin1 = Math.sin(angle1);
		const cos2 = Math.cos(angle2),
			sin2 = Math.sin(angle2);
		const cos3 = Math.cos(angle3),
			sin3 = Math.sin(angle3);
		const cos4 = Math.cos(angle4),
			sin4 = Math.sin(angle4);
		context.beginPath();
		switch (shape) {
			case 0: {
				context.lineTo(x + l0 * cos1, y + l0 * sin1);
				context.lineTo(x + l1 * cos2, y + l1 * sin2);
				context.lineTo(x + l1 * cos3, y + l1 * sin3);
				context.lineTo(x + l0 * cos4, y + l0 * sin4);
			};
				break;
			case 1: {
        context.ellipse(x - Math.cos(angle) * height, y - Math.sin(angle) * height, length, height, angle, 0, 2 * Math.PI);
        if (aspect < 1) context.ellipse(x - Math.cos(angle) * height, y - Math.sin(angle) * height, length * (1 - aspect), height * (1 - aspect), angle, 0, 2 * Math.PI);
			};
				break;
			case 2: {
        context.lineTo(x + l1 * cos2, y + l1 * sin2);
				context.lineTo(x + l1 * cos3, y + l1 * sin3);
				context.lineTo(x + l0 * cos4, y + l0 * sin4);
      };
        break;
			case 3: {
				context.lineTo(x + l0 * cos1, y + l0 * sin1);
				context.lineTo(x + l1 * cos2, y + l1 * sin2);
				context.lineTo(x + l1 * cos3, y + l1 * sin3);
			};
				break;
		}
    context.closePath();
		context.stroke();
		context.fill("evenodd");
	}

	function drawEntity(x, y, instance, ratio, scale = 1, rot = 0, turretsObeyRot = false, turretInfo = null, render = instance.render, context = ctx) {
		const mockup = mockups[instance.index];
		const source = turretInfo ?? instance;
		const status = render.status;
		const fadeAlpha = turretInfo ? 1 : status.getFade() * render.alpha;
		const statusBlend = status.getBlend();
		const statusColor = status.getColor();
		const drawSize = scale * ratio * instance.size;
		if (source.turrets.length !== mockup.turrets.length) {
			throw new Error("Mismatch turret number with mockup");
		}
		if (source.guns.length !== mockup.guns.length) {
			throw new Error("Mismatch guns number with mockup");
		}
		context.save();
		context.lineJoin = "round" //config.pointyShapes.value ? "miter" : "round";
		context.globalAlpha *= fadeAlpha;
		context.lineWidth = Math.max(0.01, Math.max(config.borderWidthMin.value, ratio * config.borderWidth.value));
		let shadowColorStrokeStyle = false;
		switch (config.shaders.value) {
			case 1:
				shadowColorStrokeStyle = true;
				context.shadowBlur = 0;
				context.shadowOffsetX = 3.5 * ratio;
				context.shadowOffsetY = 3.5 * ratio;
				break;
			case 2:
				shadowColorStrokeStyle = true;
				context.shadowBlur = 0;
				context.shadowOffsetX = (global.screenWidth / 2 - x) * 0.012;
				context.shadowOffsetY = (global.screenHeight / 2 - y) * 0.012;
				context.shadowOffsetX = context.shadowOffsetX > 0 ? Math.min(context.shadowOffsetX, 3.5) * ratio : Math.max(context.shadowOffsetX, -3.5) * ratio;
				context.shadowOffsetY = context.shadowOffsetY > 0 ? Math.min(context.shadowOffsetY, 3.5) * ratio : Math.max(context.shadowOffsetY, -3.5) * ratio;
				break;
		}
		const _drawGun = (mGun, gunPos) => {
			if (mGun.alpha <= 0.01) return;
			const aspect = mGun.aspect;
			const angle = mGun.angle + rot;
			const position = gunPos / (aspect === 1 ? 2 : 1);
			const xx = x + drawSize * (mGun.offset * Math.cos(mGun.direction + angle) + (mGun.length / 2 - position) * Math.cos(angle));
			const yy = y + drawSize * (mGun.offset * Math.sin(mGun.direction + angle) + (mGun.length / 2 - position) * Math.sin(angle));
			const length = drawSize * (mGun.length / 2 - (aspect === 1 ? position * 2 : 0));
			const width = (drawSize * mGun.width) / 2;
			setColor(mixColors(getColor(mGun.color), statusColor, statusBlend), context);
			if (shadowColorStrokeStyle) context.shadowColor = context.strokeStyle;
			context.save();
			context.globalAlpha *= mGun.alpha;
			drawGun(xx, yy, length, width, aspect, angle, mGun.shape, context);
			context.restore();
		};
		const _drawTurret = (mTurret, sTurret) => {
			const turretDirection = mTurret.direction;
			const turretAngle = mTurret.angle;
			const turretOffset = mTurret.offset;
			const turretSize = mTurret.size;
			const turretSizeFactor = mTurret.sizeFactor;
			const angle = turretDirection + turretAngle + rot;
			const length = turretOffset * drawSize;
			const turretX = x + length * Math.cos(angle);
			const turretY = y + length * Math.sin(angle);
			const currentFacing = sTurret.facing;
			let facingToUse = currentFacing;
			const previousLerped = sTurret.lerpedFacing;
			if (previousLerped !== undefined) {
				facingToUse = config.firebird ? util.lerpAngleFps(previousLerped, currentFacing, 30, true) : currentFacing;
			}
			sTurret.lerpedFacing = facingToUse;
			const turretDrawScale = turretSize === 0 ? 0 : (drawSize / ratio / turretSize * turretSizeFactor);
			const turretRot = facingToUse + (turretsObeyRot ? rot : 0);
			drawEntity(turretX, turretY, mTurret, ratio, turretDrawScale, turretRot, turretsObeyRot, sTurret, render, context);
		};
		const mockupTurrets = mockup.turrets;
		const sourceTurrets = source.turrets;
		const mockupGuns = mockup.guns;
		for (let i = 0; i < mockupTurrets.length; i++) {
			const mTurret = mockupTurrets[i];
			if (mTurret.layer === 0) {
				_drawTurret(mTurret, sourceTurrets[i]);
			}
		}
		source.guns.update();
		const gunPositions = source.guns.getPositions();
		for (let i = 0; i < mockupGuns.length; i++) {
			const mGun = mockupGuns[i];
			if (!mGun.renderTop) {
				_drawGun(mGun, gunPositions[i]);
			}
		}
		setColor(mixColors(getColor(instance.color), statusColor, statusBlend), context);
		if (shadowColorStrokeStyle) context.shadowColor = context.strokeStyle;
		const bodyDrawSize = mockup.size === 0 ? 0 : (drawSize / mockup.size * mockup.realSize);
		drawPoly(x, y, bodyDrawSize, mockup.shape, rot, true, context);
		for (let i = 0; i < mockupGuns.length; i++) {
			const mGun = mockupGuns[i];
			if (mGun.renderTop) {
				_drawGun(mGun, gunPositions[i]);
			}
		}
		for (let i = 0; i < mockupTurrets.length; i++) {
			const mTurret = mockupTurrets[i];
			if (mTurret.layer === 1) {
				_drawTurret(mTurret, sourceTurrets[i]);
			}
		}
		context.restore();
	}

	function drawHealth(x, y, instance, ratio) {
		const render = instance.render;
		const size = instance.size * ratio;
		const m = mockups[instance.index];
		const realSize = m.size === 0 ? 0 : (size / m.size) * m.realSize;
		const fade = render.status.getFade();
		const finalAlpha = fade * fade * render.alpha;
		ctx.globalAlpha = finalAlpha;
		if (instance.drawsHealth) {
			const health = render.health.get();
			const shield = render.shield.get();
			if (health < 1 || shield < 1) {
				const barY = y + 1.1 * realSize + 15;
				const barLeft = x - size;
				const barWidth = size * 2;
				drawBar(barLeft, barLeft + barWidth, barY, 8, color.black);
				const healthWidth = barWidth * Math.max(0, health);
				drawBar(barLeft, barLeft + healthWidth, barY, 3, color.lgreen);
				const positiveShield = Math.max(0, shield);
				if (positiveShield > 0) {
					const shieldWidth = barWidth * positiveShield;
					drawBar(barLeft, barLeft + shieldWidth, barY, 3, color.teal);
				}
			}
		}
		if ((instance.nameplate && instance.id !== gui.playerid || config.selfRender.value) && !config.screenshotMode.value) {
			let nameToDraw;
			let nameColorToUse;
			const instanceName = instance.name;
			if (instanceName !== "\u0000") {
				nameToDraw = instanceName;
				nameColorToUse = instance.namecolor;
			} else {
				nameToDraw = config.spoopies.value;
				nameColorToUse = color.lavender;
			}
			const baseTextY = y - realSize;
			const nameY = baseTextY - 34;
			const scoreY = baseTextY - 16;
			const scoreText = util.handleLargeNumber(instance.score, true);
			const aesthetic = aesthetics[instance.aesthetic];
			if (aesthetic.badge) {
				const size = 18;
				if (ImageManager.isReady(aesthetic.badge)) {
					ctx.drawImage(ImageManager.get(aesthetic.badge), x - size * 1.2 - measureText(instance.name, 16) / 2, y - realSize - 30 + 4 - size, size, size);
				}
			}
			if (aesthetic.color) {
				nameColorToUse = aesthetic.color();
			}
			drawText(nameToDraw, x, nameY, 16, nameColorToUse, "center", finalAlpha);
			drawText(scoreText, x, scoreY, 8, nameColorToUse, "center", finalAlpha);
		}
		ctx.globalAlpha = 1;
	}
	const gameDraw = (() => {
		const statMenu = Smoothbar(0, 0.7, 1.5);
		const upgradeMenu = Smoothbar(0, 2, 3);

		function graphOptimized() {
			const data = [];
			let i = 0;
			let p = 0;
			let normY = 0;
			let cachedHeightOverRange = 0;
			let cachedHeightMaxOverRange = 0;
			return (point, x, y, w, h, col) => {
				data.push(point);
				if (data.length > w) {
					data.shift();
				}
				const dataLen = data.length;
				if (dataLen === 0) return;
				let min = data[0],
					max = data[0];
				for (i = 1; i < dataLen; i++) {
					p = data[i];
					if (p < min) min = p;
					else if (p > max) max = p;
				}
				const range = max - min;
				if (range === 0) {
					return;
				}
				cachedHeightOverRange = h / range;
				cachedHeightMaxOverRange = max * cachedHeightOverRange;
				if (max > 0 && min < 0) {
					drawBar(x, x + w, y + cachedHeightMaxOverRange, 2, color.guiwhite);
				}
				ctx.beginPath();
				p = data[0];
				normY = y + cachedHeightMaxOverRange - (p * cachedHeightOverRange);
				ctx.moveTo(x, normY);
				for (i = 1; i < dataLen; i++) {
					p = data[i];
					normY = y + cachedHeightMaxOverRange - (p * cachedHeightOverRange);
					ctx.lineTo(x + i, normY);
				}
				ctx.lineWidth = 1;
				ctx.strokeStyle = col;
				ctx.stroke();
			};
		}
		const timingGraph = graphOptimized(),
			lagGraph = graphOptimized(),
			gapGraph = graphOptimized();
		const ska = (() => {
			const log5 = Math.log(5);

			function make(x) {
				return Math.log(4 * x + 1) / log5;
			}
			let a = [];
			const limit = 18 * 2;
			for (let i = 0; i < limit; i++) {
				a.push(make(i / 9));
			}
			return (x) => a[x];
		})();
		let upgradeSpin = 0;
		return (ratio) => {
			const screenWidth = global.screenWidth;
			const screenHeight = global.screenHeight;
			const screenWidthHalf = screenWidth / 2;
			const screenHeightHalf = screenHeight / 2;
			const gameWidth = global.gameWidth;
			const gameHeight = global.gameHeight;
			const playerID = gui.playerid;
			const currentUpgradeHover = global.upgradeHover;
			const currentGuiUpgrades = gui.upgrades;
			const currentGuiType = gui.type;
			const currentGuiColor = gui.color;
			renderTimes++;
			let GRAPHDATA = 0;
			let px, py;
			{
				player.renderx = config.firebird.value ? util.lerpFps(player.renderx, player.x, 16) : player.x;
				player.rendery = config.firebird.value ? util.lerpFps(player.rendery, player.y, 16) : player.y;
				px = ratio * player.renderx;
				py = ratio * player.rendery;
			} {
				clearScreen(color.white, 1);
				clearScreen(color.guiblack, 0.1);
				const roomW = roomSetup[0].length;
				const roomH = roomSetup.length;
				if (roomW === 0 || roomH === 0) return;
				const cellWidthRatio = ratio * gameWidth / roomW;
				const cellHeightRatio = ratio * gameHeight / roomH;
				const offsetX = screenWidthHalf - px;
				const offsetY = screenHeightHalf - py;
				if (cellWidthRatio === 0 || cellHeightRatio === 0) return;
				const j_min_world = -offsetX / cellWidthRatio;
				const j_max_world = (screenWidth - offsetX) / cellWidthRatio;
				const i_min_world = -offsetY / cellHeightRatio;
				const i_max_world = (screenHeight - offsetY) / cellHeightRatio;
				const j_start = Math.max(0, Math.floor(j_min_world));
				const j_end = Math.min(roomW, Math.ceil(j_max_world));
				const i_start = Math.max(0, Math.floor(i_min_world));
				const i_end = Math.min(roomH, Math.ceil(i_max_world));
				for (let i = i_start; i < i_end; i++) {
					const row = roomSetup[i];
					const cellTopUnclipped = i * cellHeightRatio + offsetY;
					for (let j = j_start; j < j_end; j++) {
						const cell = row[j];
						const cellLeftUnclipped = j * cellWidthRatio + offsetX;
						const left = Math.max(0, cellLeftUnclipped);
						const top = Math.max(0, cellTopUnclipped);
						const right = Math.min(screenWidth, cellLeftUnclipped + cellWidthRatio);
						const bottom = Math.min(screenHeight, cellTopUnclipped + cellHeightRatio);
						const width = right - left;
						const height = bottom - top;
						if (width > 0 && height > 0) {
							ctx.fillStyle = mixColors(getZoneColor(cell), color.white, 0.75);
							ctx.fillRect(left, top, width, height);
						}
					}
				}
				if (config.gridRender.value) {
					ctx.globalAlpha = 0.2;
					ctx.lineWidth = 1;
					ctx.strokeStyle = mixColors(color.white, color.guiblack, 0.22);
					const gridsize = roomIdealGridSize * ratio;
					const startX = offsetX % gridsize;
					const startY = offsetY % gridsize;
					const gridStartX = startX < 0 ? startX + gridsize : startX;
					const gridStartY = startY < 0 ? startY + gridsize : startY;
					for (let x = gridStartX; x < screenWidth; x += gridsize) {
						ctx.beginPath();
						ctx.moveTo(x, 0);
						ctx.lineTo(x, screenHeight);
						ctx.stroke();
					}
					for (let y = gridStartY; y < screenHeight; y += gridsize) {
						ctx.beginPath();
						ctx.moveTo(0, y);
						ctx.lineTo(screenWidth, y);
						ctx.stroke();
					}
					ctx.globalAlpha = 1;
				}
			} {
				const screenOffsetX = screenWidthHalf - px;
				const screenOffsetY = screenHeightHalf - py;
				const commands = global.socket.cmd.commands;
				entities.forEach(function entityDrawingCombinedLoop(instance) {
					const render = instance.render;
					if (!render.draws) {
						return;
					}
					const isMe = instance.id === playerID;
					if (config.firebird.value) {
						render.x = util.lerpFps(render.x, instance.x + instance.vx, 16);
						render.y = util.lerpFps(render.y, instance.y + instance.vy, 16);
					} else {
						render.x = instance.x;
						render.y = instance.y;
					}
					render.alpha = instance.alpha//util.lerpFps(render.alpha, instance.alpha, 0.1);
					render.f = isMe && !instance.twiggle ? Math.atan2(target.y, target.x) : util.lerpAngleFps(render.f, instance.facing, 30);
					const entityX = ratio * render.x + screenOffsetX;
					const entityY = ratio * render.y + screenOffsetY;
					if (isMe) {
						player.rendershiftx = ratio * instance.render.x - px;
						player.rendershiftx = ratio * instance.render.y - py;
					}
					drawEntity(entityX, entityY, instance, ratio, 1.1, render.f);
					const healthBarX = ratio * render.x + screenOffsetX;
					const healthBarY = ratio * render.y + screenOffsetY;
					drawHealth(healthBarX, healthBarY, instance, ratio);
				});
				ctx.globalAlpha = 1;
			}
			if (UpgradeTree.isOpen) {
				UpgradeTree.update();
				clearScreen(color.black, 0.5);
				ctx.strokeStyle = color.black;
				ctx.lineWidth = 4;
				const angle = Math.PI / -4;
				const iconSize = UpgradeTree.iconSize;
				const halfIconSize = iconSize / 2;
				const scroll = UpgradeTree.renderScroll;
				const currentGuiColorMaybe = currentGuiColor;
				const targetX = canvas.target.x + screenWidthHalf
				const targetY = canvas.target.y + screenHeightHalf;
				const hoveredFontSize = 20;
				UpgradeTree.hoveredIcon = null;
				for (let i = 0; i < UpgradeTree.icons.length; i++) {
					const icon = UpgradeTree.icons[i];
					const x = icon.x - scroll + screenWidthHalf;
					const y = icon.y - UpgradeTree.topY / 2 + screenHeightHalf;
					if (x + iconSize <= 0 || y + iconSize <= 0 || x >= screenWidth || y >= screenHeight) {
						continue;
					}
					ctx.fillStyle = icon.color;
					ctx.fillRect(x, y, iconSize, iconSize);
					const mockup = icon.mockup;
					const picture = getEntityImageFromMockup(mockup.index, mockup.color === 16 ? currentGuiColorMaybe : mockup.color);
					if (!picture || picture.size <= 0 || !mockup.position || mockup.position.axis === 0) {
						continue;
					}
					/*const position = mockup.position;
					const scaleMultiplier = iconSize * 0.75 / 0.8 / position.axis;
					const finalScale = scaleMultiplier / picture.size;
					const offset = scaleMultiplier * position.middle.x;
					const entityX = x + halfIconSize - offset * Math.cos(angle);
					const entityY = y + halfIconSize - offset * Math.sin(angle);
					drawEntity(entityX, entityY, picture, 0.8, finalScale, angle, true);*/
					const position = mockup.position;
					const scale = iconSize * 0.75 / position.axis;
					const offset = scale * position.middle.x;
					const xx = x + halfIconSize - offset * Math.cos(angle);
					const yy = y + halfIconSize - offset * Math.sin(angle);
					drawEntity(xx, yy, picture, 0.8, scale / picture.size / 0.8, angle, true);
					ctx.strokeRect(x, y, iconSize, iconSize);
					if (UpgradeTree.doHover && targetX >= x && targetY >= y && targetX <= x + iconSize && targetY <= y + iconSize) {
						ctx.globalAlpha = 0.25;
						ctx.fillStyle = color.guiblack;
						ctx.fillRect(x, y, iconSize, iconSize);
						ctx.globalAlpha = 1;
						UpgradeTree.hoveredIcon = icon;
					}
				}
				const xmin = 0;
				const ymin = 0;
				const xmax = screenWidth;
				const ymax = screenHeight;
				const INSIDE = 0;
				const LEFT = 1;
				const RIGHT = 2;
				const BOTTOM = 4;
				const TOP = 8;
				function computeOutCode(x, y) {
					let code = INSIDE;
					if (x < xmin) code |= LEFT;
					else if (x > xmax) code |= RIGHT;
					if (y < ymin) code |= TOP;
					else if (y > ymax) code |= BOTTOM;
					return code;
				}
				ctx.beginPath();
				for (let i = 0; i < UpgradeTree.lines.length; i++) {
					const line = UpgradeTree.lines[i];
					let x1 = line.x1 - scroll + screenWidthHalf;
					let y1 = line.y1 - UpgradeTree.topY / 2 + screenHeightHalf;
					let x2 = line.x2 - scroll + screenWidthHalf;
					let y2 = line.y2 - UpgradeTree.topY / 2 + screenHeightHalf;
					let outcode1 = computeOutCode(x1, y1);
					let outcode2 = computeOutCode(x2, y2);
					let accept = false;
					while (true) {
						if (!(outcode1 | outcode2)) {
							accept = true;
							break;
						} else if (outcode1 & outcode2) {
							break;
						} else {
							let x, y;
							const outcodeOut = outcode1 || outcode2;
							if (outcodeOut & TOP) {
								x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
								y = ymin;
							} else if (outcodeOut & BOTTOM) {
								x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
								y = ymax;
							} else if (outcodeOut & RIGHT) {
								y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
								x = xmax;
							} else if (outcodeOut & LEFT) {
								y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
								x = xmin;
							} else {
								break;
							}
							if (outcodeOut === outcode1) {
								x1 = x;
								y1 = y;
								outcode1 = computeOutCode(x1, y1);
							} else {
								x2 = x;
								y2 = y;
								outcode2 = computeOutCode(x2, y2);
							}
						}
					}
					if (accept) {
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2);
						ctx.stroke();
					}
				}
				if (UpgradeTree.hoveredIcon !== null) {
					const padding = 8;
					const icon = UpgradeTree.hoveredIcon;
					const textWidth = measureText(icon.mockup.name, hoveredFontSize);
					ctx.fillStyle = color.lgrey;
					ctx.beginPath();
					ctx.rect(targetX, targetY - hoveredFontSize - padding * 2, textWidth + padding * 2, hoveredFontSize + padding * 2);
					ctx.fill();
					ctx.stroke();
					ctx.save();
					drawText(icon.mockup.name, targetX + padding, targetY - hoveredFontSize / 2 - padding, hoveredFontSize, color.guiwhite, "left");
					ctx.restore();
				}
				const panelMargin = 20;
				const panelPadding = 30;
				const panelWidth = 450;
				const panelHeight = screenHeight - panelMargin * 2;
				const panelX = screenWidth - panelWidth - panelMargin;
				if (UpgradeTree.selectedIcon !== null) {
					const icon = UpgradeTree.selectedIcon;
					let contentY = panelMargin + panelPadding;
					ctx.fillStyle = color.lgrey;
					ctx.beginPath();
					ctx.rect(panelX, panelMargin, panelWidth, panelHeight);
					global.clickables.upgradeTreePanel.place(0, panelX, panelMargin, panelWidth, panelHeight);
					ctx.globalAlpha = 0.75;
					ctx.fill();
					ctx.globalAlpha = 1;
					ctx.stroke();

					ctx.save();
					drawText(icon.mockup.name, panelWidth / 2 + panelX, contentY, 30, color.guiwhite, "center");
					contentY += 30;
					ctx.restore();

					const angle = (performance.now() / 650) % (Math.PI * 2);
					const iconSize = panelWidth - panelPadding * 2;
					const iconX = panelX + panelPadding;
					ctx.fillStyle = icon.color;
					ctx.fillRect(iconX, contentY, iconSize, iconSize);
					ctx.strokeRect(iconX, contentY, iconSize, iconSize);
					const mockup = icon.mockup;
					const picture = getEntityImageFromMockup(mockup.index, mockup.color === 16 ? currentGuiColor : mockup.color);
					const position = mockup.position;
					const scale = (iconSize * 0.7) / position.axis;
					const offset = scale * position.middle.x;
					const xx = iconX + iconSize / 2 - offset * Math.cos(angle);
					const yy = contentY + iconSize / 2 - offset * Math.sin(angle);
					drawEntity(xx, yy, picture, 2, scale / picture.size / 2, angle, true);
					contentY += iconSize + panelPadding;

					const buttonHeight = 50;
					contentY = panelHeight - buttonHeight;
					for (let i = 0; i < 3; i++) {
						ctx.fillStyle = color.vlgrey;
						ctx.beginPath();
						ctx.rect(panelX + panelMargin, contentY, panelWidth - panelMargin * 2, buttonHeight);
						ctx.fill();
						ctx.stroke();
						global.clickables.upgradeTreePanelButtons.place(i, panelX + panelMargin, contentY, panelWidth - panelMargin * 2, buttonHeight);
						ctx.save();
						drawText(["Download Image 4x", "Download Image", "Upgrade to Tank"][i], panelX + panelWidth / 2, contentY + buttonHeight / 2, buttonHeight * 0.5, color.guiwhite, "center");
						ctx.restore();
						contentY -= panelMargin + buttonHeight;
					}
				}

				const spacing = 20;
				const buttonSize = 60;
				const searchWidth = 500;
				let contentX = Math.min(screenWidthHalf - searchWidth / 2, panelX - panelWidth - panelMargin - searchWidth / 2 - panelMargin * 2);
				const margin = screenHeight - buttonSize - 20;
				ctx.fillStyle = UpgradeTree.tree.length === 0 ? color.red : color.vlgrey;
				ctx.strokeStyle = document.activeElement === UpgradeTree.inputElement ? color.guiwhite : color.black;
				ctx.lineWidth = 4;
				ctx.beginPath();
				ctx.rect(contentX, margin, searchWidth, buttonSize);
				ctx.fill();
				ctx.stroke();
				drawText(UpgradeTree.inputElement.value.length === 0 ? "Search..." : UpgradeTree.inputElement.value, contentX + searchWidth / 2, margin + buttonSize / 2, buttonSize * 0.5, color.dgrey, "center", 1, false);
				global.clickables.upgradeTreeBottomRow.place(0, contentX, margin, searchWidth, buttonSize);
				
				const rootButtonWidth = 300;
				ctx.fillStyle = color.lgrey;
				ctx.strokeStyle = color.black;
				ctx.lineWidth = 4;
				ctx.beginPath();
				ctx.rect(contentX - spacing - rootButtonWidth, margin, rootButtonWidth, buttonSize);
				ctx.fill();
				ctx.stroke();
				drawText("Root from current", contentX - spacing - rootButtonWidth / 2, margin + buttonSize / 2, buttonSize * 0.5, color.guiwhite, "center");
				global.clickables.upgradeTreeBottomRow.place(1, contentX - spacing - rootButtonWidth, margin, rootButtonWidth, buttonSize);
				
				contentX += searchWidth + spacing;
				for (let i = 0; i < 3; i++) {
					ctx.fillStyle = i === 0 ? color.red : color.lgrey;
					ctx.strokeStyle = color.black;
					ctx.lineWidth = 4;
					ctx.beginPath();
					ctx.rect(contentX, margin, buttonSize, buttonSize);
					ctx.fill();
					ctx.stroke();
					drawText("x+-"[i], contentX + buttonSize / 2, margin + buttonSize / 2, buttonSize * 0.6, color.guiwhite, "center");
					global.clickables.upgradeTreeBottomRow.place(i + 2, contentX, margin, buttonSize, buttonSize);
					contentX += spacing + buttonSize;
				}
			} else {
				global.clickables.upgradeTreePanel.hide();
				global.clickables.upgradeTreePanelButtons.hide();
				global.clickables.upgradeTreeBottomRow.hide();
			}
			if (config.screenshotMode.value) {
				metrics.lastrender = getNow();
				return;
			}
			let alcoveSize = 0.11;
			let spacing = 16;
			gui.__s.update();
			let lb = leaderboard.get();
			let maxScore = lb.max;
			if (config.noMessages.value) {
				if (messages.length !== 0) {
					messages.length = 0;
				}
			} else {
				let vspacing = 4;
				let height = 18;
				const heightHalf = height / 2;
				const heightMinus4 = height - 4;
				const x = screenWidthHalf;
				let y = spacing;
				const now = Date.now();
				for (let i = messages.length - 1; i >= 0; i--) {
					let msg = messages[i];
					let text = msg.text;
					if (msg.len == null) {
						msg.len = measureText(text, heightMinus4);
					}
					const msgLen = msg.len;
					const msgLenHalf = msgLen / 2;
					const msgAlpha = msg.alpha;
					ctx.globalAlpha = 0.5 * msgAlpha;
					drawBar(x - msgLenHalf, x + msgLenHalf, y + heightHalf, height, msg.color);
					ctx.globalAlpha = Math.min(1, msgAlpha);
					drawText(text, x, y + heightHalf, heightMinus4, color.guiwhite, "center", 1);
					const iterHeight = height + vspacing;
					y += iterHeight;
					if (msg.status > 1) {
						y -= iterHeight * (1 - Math.sqrt(msgAlpha));
						msg.status -= 0.05;
						msg.alpha += 0.05;
					} else if (i === 0 && (messages.length > 4 || now - msg.time > 10000)) {
						msg.status -= 0.05;
						msg.alpha -= 0.05;
						if (msg.alpha <= 0) {
							messages.splice(0, 1);
						}
					}
				}
				ctx.globalAlpha = 1;
			}
			if (UpgradeTree.isOpen) {
				metrics.lastrender = getNow();
				return;
			}
			{
				global.canSkill = !!gui.points;
				statMenu.set(0 + (global.canSkill || global.died || global.statHover));
				global.clickables.stat.hide();
				let vspacing = 4;
				let height = 15;
				let gap = 35;
				let len = alcoveSize * global.screenWidth;
				let save = len;
				let x = -spacing - 2 * len + statMenu.get() * (2 * spacing + 2 * len);
				let y = global.screenHeight - spacing - height;
				let ticker = 11;
				let namedata = gui.getStatNames(mockups[gui.type].statnames || -1);
				gui.skills.forEach(function drawASkillBar(skill) {
					ticker--;
					let name = namedata[ticker - 1],
						level = skill.amount,
						col = color[skill.color],
						cap = skill.softcap,
						maxLevel = skill.cap;
					if (cap) {
						len = save;
						let max = 9,
							extension = cap > max,
							blocking = cap < maxLevel;
						if (extension) {
							max = cap;
						}
						drawBar(x + height / 2, x - height / 2 + len * ska(cap), y + height / 2, height + 2, color.black);
						drawBar(x + height / 2, x + height / 2 + (len - gap) * ska(cap), y + height / 2, height - 3, color.grey);
						drawBar(x + height / 2, x + height / 2 + (len - gap) * ska(level), y + height / 2, height - 3.5, col);
						if (blocking) {
							ctx.lineWidth = 1;
							ctx.strokeStyle = color.grey;
							for (let j = cap + 1; j < max; j++) {
								drawGuiLine(x + (len - gap) * ska(j), y + 1.5, x + (len - gap) * ska(j), y - 3 + height);
							}
						}
						ctx.strokeStyle = color.black;
						ctx.lineWidth = 1;
						for (let j = 1; j < level + 1; j++) {
							drawGuiLine(x + (len - gap) * ska(j), y + 1.5, x + (len - gap) * ska(j), y - 3 + height);
						}
						len = save * ska(max);
						let textcolor = level == maxLevel ? col : !gui.points || (cap !== maxLevel && level == cap) ? color.grey : color.guiwhite;
						drawText(name, Math.round(x + len / 2) + 0.5, y + height / 2, height - 5, textcolor, "center", true);
						drawText("[" + (ticker % 10) + "]", Math.round(x + len - height * 0.25) - 1.5, y + height / 2, height - 5, textcolor, "right", true);
						if (textcolor === color.guiwhite) {
							global.clickables.stat.place(ticker - 1, x, y, len, height);
						}
						if (level) {
							drawText(textcolor === col ? "MAX" : "+" + level, Math.round(x + len + 4) + 0.5, y + height / 2, height - 5, col, "left", true);
						}
						y -= height + vspacing;
					}
				});
				global.clickables.hover.place(0, 0, y, 0.8 * len, 0.8 * (global.screenHeight - y));
				if (gui.points !== 0) {
					drawText("x" + gui.points, Math.round(x + len - 2) + 0.5, Math.round(y + height - 8) + 0.5, 20, color.guiwhite, "right");
				}
			} {
				let vspacing = 4;
				let len = 1.65 * alcoveSize * screenWidth;
				let height = 25;
				const heightHalf = height / 2;
				const heightMinus3 = height - 3;
				const heightMinus3_5 = height - 3.5;
				const heightMinus4 = height - 4;
				const lenHalf = len / 2;
				let x = (screenWidth - len) / 2;
				let y = screenHeight - spacing - height;
				ctx.lineWidth = 1;
				const progress = gui.__s.getProgress();
				const expBarEndX = x + len * progress;
				drawBar(x, x + len, y + heightHalf, height + 2, color.black);
				drawBar(x, x + len, y + heightHalf, heightMinus3, color.grey);
				drawBar(x, expBarEndX, y + heightHalf, heightMinus3_5, color.gold);
				const levelText = "Level " + gui.__s.getLevel() + " " + mockups[currentGuiType].name;
				drawText(levelText, x + lenHalf, y + heightHalf, heightMinus4, color.guiwhite, "center", 1);
				height = 14;
				const scoreHeightHalf = height / 2;
				const scoreHeightMinus2 = height - 2;
				const scoreHeightMinus3 = height - 3;
				const scoreHeightMinus3_5 = height - 3.5;
				y -= height + vspacing;
				const scoreBarStartX = x + len * 0.1;
				const scoreBarEndX = x + len * 0.9;
				const scoreRatio = maxScore ? Math.min(1, gui.__s.getScore() / maxScore) : 1;
				const scoreBarColorEndX = scoreBarStartX + (len * 0.8) * scoreRatio;
				drawBar(scoreBarStartX, scoreBarEndX, y + scoreHeightHalf, height + 2, color.black);
				drawBar(scoreBarStartX, scoreBarEndX, y + scoreHeightHalf, scoreHeightMinus3, color.grey);
				drawBar(scoreBarStartX, scoreBarColorEndX, y + scoreHeightHalf, scoreHeightMinus3_5, color.green);
				const scoreText = "Score: " + util.handleLargeNumber(gui.__s.getScore());
				drawText(scoreText, x + lenHalf, y + scoreHeightHalf, scoreHeightMinus2, color.guiwhite, "center", 1);
				ctx.lineWidth = 4;
				const nameX = Math.round(x + lenHalf) + 0.5;
				const nameY = Math.round(y - 14 - vspacing) + 0.5;
				drawText(player.name, nameX, nameY, 32, player.namecolor, "center");
			} {
				let len = alcoveSize * screenWidth;
				let height = len;
				let x = screenWidth - len - spacing;
				let y = screenHeight - height - spacing;
				ctx.globalAlpha = 0.5;
				const roomW = roomSetup[0].length;
				const roomH = roomSetup.length;
				const mapCellWidth = len / roomW;
				const mapCellHeight = height / roomH;
				let iy = y;
				roomSetup.forEach((row) => {
					let ix = x;
					row.forEach((cell) => {
						ctx.fillStyle = getZoneColor(cell, false);
						drawGuiRect(ix, iy, mapCellWidth, mapCellHeight);
						ix += mapCellWidth;
					});
					iy += mapCellHeight;
				});
				ctx.fillStyle = color.grey;
				drawGuiRect(x, y, len, height);
				const gameWidthInv = 1 / gameWidth;
				const mapScaleX = len * gameWidthInv;
				const mapScaleY = height * gameWidthInv;
				minimap.get().forEach(entity => {
					const entityMapX = x + entity.x * mapScaleX;
					const entityMapY = y + entity.y * mapScaleY;
					ctx.fillStyle = mixColors(getColor(entity.color), color.black, 0.3);
					ctx.globalAlpha = 1;
					const entitySizeMap = entity.size * mapScaleX;
					if (entity.type === 2) {
						const mapSizeWithPadding = 2 * entitySizeMap + 0.2;
						drawGuiRect(entityMapX - entitySizeMap - 0.4, entityMapY - entitySizeMap - 1, mapSizeWithPadding, mapSizeWithPadding);
					} else if (entity.type === 1) {
						drawGuiCircle(entityMapX, entityMapY, entitySizeMap + 0.2);
					} else if (entity.id !== playerID) {
						drawGuiCircle(entityMapX, entityMapY, 2);
					}
				});
				ctx.globalAlpha = 1;
				let textYBase = y + 30;
				const textX = x + len;
				ctx.lineWidth = 1;
				ctx.strokeStyle = color.black;
				const playerMapX = x + player.x * mapScaleX - 1;
				const playerMapY = y + player.y * mapScaleY - 1;
				drawGuiRect(playerMapX, playerMapY, 3, 3, true);
				ctx.lineWidth = 3;
				ctx.fillStyle = color.black;
				drawGuiRect(x, y, len, height, true);
				if (config.debugInfo.value) {
					const graphY = y - 40;
					const graphHeight = 30;
					textYBase -= graphHeight + 8;
					drawGuiRect(x, graphY, len, graphHeight);
					lagGraph(lag.get(), x, graphY, len, graphHeight, color.teal);
					gapGraph(metrics.rendergap, x, graphY, len, graphHeight, color.pink);
					timingGraph(GRAPHDATA, x, graphY, len, graphHeight, color.yellow);
					const textFontSize = 10;
					const textLineHeight = 14;
					drawText("Prediction: " + Math.round(GRAPHDATA) + "ms", textX, textYBase - 50 - 5 * textLineHeight, textFontSize, color.guiwhite, "right");
					drawText("Update Rate: " + metrics.updatetime + "Hz", textX, textYBase - 50 - 4 * textLineHeight, textFontSize, color.guiwhite, "right");
					drawText("Latency: " + metrics.latency + "ms", textX, textYBase - 50 - 3 * textLineHeight, textFontSize, color.guiwhite, "right");
					drawText("Client FPS: " + metrics.framesPerSecond, textX, textYBase - 50 - 2 * textLineHeight, textFontSize, color.guiwhite, "right");
					const fps = gui.fps;
					const serverSpeedText = "Server Speed: " + (100 * fps).toFixed(2) + "%" + (fps === 1 ? "" : " OVERLOADED!");
					const serverSpeedColor = fps === 1 ? color.guiwhite : color.orange;
					drawText(serverSpeedText, textX, textYBase - 50 - 1 * textLineHeight, textFontSize, serverSpeedColor, "right");
				}
				drawText(serverName, textX, textYBase - 45, 15, "#9673E8", "right");
			} {
				let leaderboardSizeMultiplier = 1.25;
				let vspacing = 5;
				const baseLen = alcoveSize * screenWidth;
				let len = baseLen + 15 * leaderboardSizeMultiplier;
				let height = 13 * leaderboardSizeMultiplier;
				const heightHalf = height / 2;
				const heightHeader = height + 2;
				const heightText = height / 1.25 / leaderboardSizeMultiplier;
				const entityImageOffset = 1.5 * height;
				let x = screenWidth - len - spacing - 8 * leaderboardSizeMultiplier;
				let y = spacing + height + 14 * leaderboardSizeMultiplier;
				const headerX = Math.round(x + len / 2) + 0.5;
				const headerY = Math.round(y - 12) + 0.5;
				drawText("Leaderboard", headerX, headerY, heightHeader, color.guiwhite, "center");
				lb.data.forEach((entry) => {
					const score = entry.score;
					const barColor = entry.barColor;
					const barShift = Math.min(1, score / maxScore);
					const barEndX = x + len * barShift;
					const currentY = y + heightHalf;
					drawBar(x, x + len, currentY, height + 2.5, color.black);
					drawBar(x, x + len, currentY, height - 3, color.grey);
					drawBar(x, barEndX, currentY, height - 3.5, barColor);
					const entryText = entry.label + ": " + util.handleLargeNumber(Math.round(score));
					const textX = x + len / 2;
					drawText(entryText, textX, currentY, heightText, entry.nameColor, "center", 1);
					const position = entry.position;
					const image = entry.image;
					const scale = height / position.axis;
					const scaleSq = scale * scale;
					const scaleOverSize = scaleSq / image.size;
					const offset = scale * position.middle.x * 0.707;
					const xx = x - entityImageOffset - offset;
					const yy = y + heightHalf + offset;
					drawEntity(xx, yy, image, 1 / scale, scaleOverSize, -Math.PI / 4, true);
					y += vspacing + height;
				});
			} {
				global.canUpgrade = currentGuiUpgrades.length !== 0;
				upgradeMenu.set(0 + (global.canUpgrade || currentUpgradeHover));
				global.clickables.upgrade.hide();
				if (global.canUpgrade) {
					let internalSpacing = 12;
					let len = ((alcoveSize * screenWidth) / 2) * 1;
					let height = len;
					const heightHalf = height * 0.5;
					const height_06 = height * 0.6;
					const height_04 = height * 0.4;
					const height_01 = height / 8;
					const heightTextSize = height_01 - 2.55;
					const scaleBase = 0.6 * len;
					const lenHalf = len * 0.5;
					let x = 1 * 2 * spacing - spacing;
					const xStart = x;
					let y = spacing;
					let yo = y;
					let xxx = 0;
					let ticker = 0;
					upgradeSpin += 0.01;
					const upgradeCos = Math.cos(upgradeSpin);
					const upgradeSin = Math.sin(upgradeSpin);
					let i = 0;
					currentGuiUpgrades.forEach(function drawAnUpgrade(data) {
						if (global.upgradeFadeState.lastFullyFadedIndex === i) {
							data.opacity += 0.2;
							if (data.opacity >= 0.98) {
								data.opacity = 1;
								global.upgradeFadeState.lastFullyFadedIndex++;
							}
						}
						const model = data.model;
						if (y > yo) yo = y;
						xxx = x;
						global.clickables.upgrade.place(i++, x, y, len, height);
						ctx.globalAlpha = 0.5 * data.opacity;
						//ctx.fillStyle = data.color;  
            ctx.fillStyle = mixColors("#000000", "#AA00FF", (Math.cos(x/7 - upgradeSpin) + 1) / 2)  //GRADIENT UPGRADE TEST
						drawGuiRect(x, y, len, height);
						ctx.globalAlpha = 0.1 * data.opacity;
						drawGuiRect(x, y, len, height_06);
						ctx.fillStyle = color.black;
						drawGuiRect(x, y + height_06, len, height_04);
						ctx.globalAlpha = data.opacity;
						const mockup = mockups[model];
						const col = mockup.color === 16 ? currentGuiColor : mockup.color;
						const picture = getEntityImageFromMockup(model, col);
						const position = mockup.position;
						const scale = scaleBase / position.axis;
						const offset = scale * position.middle.x;
						const xx = x + lenHalf - offset * upgradeCos;
						const yy = y + heightHalf - offset * upgradeSin;
						picture.render.alpha = data.opacity;
						drawEntity(xx, yy, picture, 1, scale / picture.size, upgradeSpin, true);
						drawText(picture.name, x + lenHalf, y + height - 10, heightTextSize, color.guiwhite, "center", data.opacity);
						ctx.strokeStyle = color.black;
						ctx.globalAlpha = 0.9 * data.opacity;
						ctx.lineWidth = 4;
						drawGuiRect(x, y, len, height, true);
						if (++ticker % 7 === 0) {
							x = xStart;
							y += height + internalSpacing;
						} else {
							x += 1 * (len + internalSpacing);
						}
					});
					ctx.globalAlpha = global.upgradeFadeState.lastFullyFadedIndex === i ? 1 : 0;
					let h = 14;
					const hHalf = h / 2;
					const hMinus2 = h - 2;
					let msg = "Don't Upgrade";
					let m = measureText(msg, h - 3) + 10;
					const mHalf = m / 2;
					let xo = xStart;
					let skipX = xo + (xxx + len + internalSpacing - xo) / 2;
					skipX = xStart + (xxx + len + internalSpacing - xStart) / 2;
					skipX = xStart + (xxx + len - xStart) / 2;
					skipX = xo + (xxx + len + internalSpacing - xo) / 2;
					skipX = xStart + (xxx + len + internalSpacing - xStart) / 2;
					let skipY = yo + height + internalSpacing;
					drawBar(skipX - mHalf, skipX + mHalf, skipY + hHalf, h + 5, color.black);
					drawBar(skipX - mHalf, skipX + mHalf, skipY + hHalf, h, color.white);
					drawText(msg, skipX, skipY + hHalf, hMinus2, color.guiwhite, "center", ctx.globalAlpha);
					global.clickables.skipUpgrades.place(0, skipX - mHalf, skipY, m, h);
				} else {
					global.clickables.skipUpgrades.hide();
				}
				ctx.globalAlpha = 1;
			}
			metrics.lastrender = getNow();
		};
	})();
	const gameDrawDead = (() => {
		let getKills = () => {
			let finalKills = [
				Math.round(global.finalKills[0].get()),
				Math.round(global.finalKills[1].get()),
				Math.round(global.finalKills[2].get()),
			];
			let b = finalKills[0] + 0.5 * finalKills[1] + 3 * finalKills[2];
			return (
				(b === 0 ? "🌼" : b < 4 ? "🎯" : b < 8 ? "💥" : b < 15 ? "💢" : b < 25 ? "🔥" : b < 50 ? "💣" : b < 75 ? "👺" : b < 100 ? "🌶️" : "💯") + (finalKills[0] || finalKills[1] || finalKills[2] ? " " + (finalKills[0] ? finalKills[0] + " kills" : "") + (finalKills[0] && finalKills[1] ? " and " : "") + (finalKills[1] ? finalKills[1] + " assists" : "") + ((finalKills[0] || finalKills[1]) && finalKills[2] ? " and " : "") + (finalKills[2] ? finalKills[2] + " visitors defeated" : "") : " A true pacifist") + ".");
		};
		let getDeath = () => {
			let txt = "";
			if (global.finalKillers.length) {
				txt = "🔪 Succumbed to";
				global.finalKillers.forEach((e) => {
					txt += " " + util.addArticle(mockups[e].name) + " and";
				});
				txt = txt.slice(0, -4) + ".";
			} else {
				txt += "🤷 Well that was kinda dumb huh";
			}
			return txt;
		};
		return () => {
			clearScreen(color.black, 0.25);
			let x = global.screenWidth / 2,
				y = global.screenHeight / 2 - 50;
			let picture = getEntityImageFromMockup(gui.type, gui.color),
				len = 140,
				position = mockups[gui.type].position,
				scale = len / position.axis,
				xx = global.screenWidth / 2 - scale * position.middle.x * 0.707,
				yy = global.screenHeight / 2 - 35 + scale * position.middle.x * 0.707;
			drawEntity(xx - 190 - len / 2, yy - 10, picture, 1.5,
				(0.5 * scale) / picture.realSize, -Math.PI / 4, true);
			drawText("lol you died", x, y - 80, 8, color.guiwhite, "center");
			drawText("Level " + gui.__s.getLevel() + " " + mockups[gui.type].name, x - 170, y - 30, 24, color.guiwhite);
			drawText("Final score: " + util.formatLargeNumber(Math.round(global.finalScore.get())), x - 170, y + 14, 50, color.guiwhite);
			drawText("⌚ Survived for " + util.timeForHumans(Math.round(global.finalLifetime.get())) + ".", x - 170, y + 55, 16, color.guiwhite);
			drawText(getKills(), x - 170, y + 77, 16, color.guiwhite);
			drawText(getDeath(), x - 170, y + 99, 16, color.guiwhite);
			drawText("Press enter to play again!", x, y + 147, 16, color.guiwhite, "center");
		};
	})();
	const gameDrawBeforeStart = (() => {
		return (message) => {
			clearScreen(color.white, 0.5);
			drawText(message, global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center");
			drawText(TipManager.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, "center");
		};
	})();
	const gameDrawDisconnected = (() => {
		return () => {
			clearScreen(mixColors(color.red, color.guiblack, 0.3), 0.25);
			drawText("Disconnected.", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center");
			drawText(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, "center");
			drawText(TipManager.message, global.screenWidth / 2, global.screenHeight / 2 + 60, 15, color.orange, "center");
		};
	})();

	function animloop() {
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		player.renderv += (player.view * (config.screenshotMode.value ? 0.25 : 1) - player.renderv) / 30;
		const ratio = getRatio();
		if (global.gameStart && !global.disconnected) {
			global.time = getNow();
			if (global.time - lastPing > 1000) {
				global.socket.ping(global.time);
				lastPing = global.time;
				metrics.framesPerSecond = renderTimes * (window.fpsoverride ?? 1);
				renderTimes = 0;
				metrics.updatetime = updateTimes;
				updateTimes = 0;
			}
			metrics.lag = global.time - player.time;
		}

		if (global.gameStart && mockupsLoaded) {
			gameDraw(ratio);
		} else if (!global.disconnected) {
			gameDrawBeforeStart(mockupsLoaded ? "Connecting..." : "Fetching mockups...");
		}
		if (global.died) {
			gameDrawDead();
		}
		if (global.disconnected) {
			gameDrawDisconnected();
		}
		if (config.debugInfo.value) {
			ctx.fillStyle = "#FF0000";
			for (const region in global.clickables) {
				for (const clickable of global.clickables[region].data) {
					ctx.globalAlpha = clickable.active ? 0.5 : 0.1;
					const region = clickable.region;
					ctx.fillRect(region.x, region.y, region.w, region.h);
				}
			}
		}
		global.animLoopHandle = window.requestAnimationFrame(animloop);
	}
	window.addEventListener("load", function () {
		document.getElementById("menu").classList.add("menu-open");
		const nameInput = document.getElementById("input-name");
		nameInput.value = localStorage.getItem("input-name") ?? "";
		const tokenInput = document.getElementById("input-token");
		tokenInput.value = localStorage.getItem("input-token") ?? "";
		const playButton = document.getElementById("button-play");
		playButton.addEventListener("click", () => startGame(nameInput.value, tokenInput.value));
		nameInput.addEventListener("keypress", function (event) {
			if (event.key === "Enter") {
				startGame(nameInput.value, tokenInput.value);
			}
		});
		ServerManager.loadServers();
	});
	window.addEventListener("load", async function () {
		const response = await fetch("./changelog.md");
		const text = await response.text();
		const container = document.getElementById("menu-changelog");
		const superHeaderElement = document.createElement("h1");
		superHeaderElement.textContent = "Changelog";
		container.appendChild(superHeaderElement);
		let ticker = 0;
		for (let line of text.split("\n").slice(0)) {
			if (line.startsWith("# ")) {
				if (ticker++ === 10) break;
				const match = line.trim().match(/^# UPDATE (\d+\/\d+\/\d+) - (.+)$/);
				const headerElement = document.createElement("span");
				headerElement.textContent = `UPDATE ${match[1]}`;
				container.appendChild(headerElement);
				const titleElement = document.createElement("span");
				titleElement.textContent = match[2];
				container.appendChild(titleElement);
				continue;
			}
			const element = document.createElement("p");
			element.textContent = `• ${line.slice(2)}`;
			container.appendChild(element);
		}
		const restElement = document.createElement("a");
		restElement.textContent = "View all";
		restElement.href = "./changelog.md";
		restElement.target = "_blank";
		container.appendChild(restElement);
	});
	window.addEventListener("load", function () {
		const container = this.document.getElementById("settings-content-container");
		let offset = 500;
		for (const [key, setting] of Object.entries(config)) {
			setTimeout(() => {
				const holderElement = document.createElement("div");
				holderElement.classList.add("setting");
				const labelElement = document.createElement("span");
				labelElement.classList.add("setting-label");
				labelElement.textContent = setting.name;
				let controlElement;
				const controlId = `setting-${key}`;
				const descriptionElement = document.createElement("p");
				descriptionElement.classList.add("setting-description");
				descriptionElement.textContent = setting.description;
				switch (setting.data.type) {
					case "boolean":
						controlElement = document.createElement("input");
						controlElement.addEventListener("change", function () {
							const value = controlElement.checked;
							if (setting.isValid(value)) {
								setting.value = value;
							}
						});
						controlElement.type = "checkbox";
						controlElement.checked = setting.value;
						controlElement.classList.add("setting-control", "setting-control-checkbox");
						descriptionElement.textContent += `\nDefault: ${setting.data.default ? "ON" : "OFF"}`;
						break;
					case "string":
						controlElement = document.createElement("input");
						controlElement.addEventListener("input", function () {
							const value = controlElement.value;
							if (setting.isValid(value)) {
								setting.value = value;
							}
						});
						controlElement.addEventListener("blur", function () {
							const value = controlElement.value;
							if (!setting.isValid(value)) {
								controlElement.value = setting.data.default;
							}
						});
						controlElement.type = "text";
						controlElement.value = setting.value;
						controlElement.placeholder = setting.data.default;
						if (setting.data.maxLength) {
							controlElement.maxLength = setting.data.maxLength;
						}
						controlElement.classList.add("setting-control", "setting-control-text");
						descriptionElement.textContent += `\nDefault: ${setting.data.default} Max Length: ${setting.data.maxLength}`;
						break;
					case "list":
						controlElement = document.createElement("select");
						controlElement.addEventListener("change", function () {
							const value = parseInt(controlElement.value);
							if (setting.isValid(value)) {
								setting.value = value;
							}
						});
						controlElement.classList.add("setting-control", "setting-control-select");
						setting.data.values.forEach((value, index) => {
							const option = document.createElement("option");
							option.value = index;
							option.textContent = value;
							if (index === setting.value) {
								option.selected = true;
							}
							controlElement.appendChild(option);
						});
						descriptionElement.textContent += `\nDefault: ${setting.data.values[setting.data.default]}`;
						break;
					case "integer":
					case "decimal":
						controlElement = document.createElement("input");
						controlElement.addEventListener("input", function () {
							const value = parseFloat(controlElement.value);
							if (setting.isValid(value)) {
								setting.value = value;
							}
						});
						controlElement.addEventListener("blur", function () {
							const value = parseFloat(controlElement.value);
							if (!setting.isValid(value)) controlElement.value = `${setting.data.type === "decimal" ? setting.value.toFixed(2) : setting.value}`;
						});
						const step = (setting.data.type === "integer") ? 1 : (setting.data.step || 0.01);
						if (setting.data.display === "slider") {
							controlElement.type = "range";
							controlElement.classList.add("setting-control", "setting-control-range");
							controlElement.step = step;
						} else {
							controlElement.type = "number";
							if (setting.data.type === "integer") {
								controlElement.classList.add("setting-control", "setting-control-number");
								controlElement.step = 1;
							} else {
								controlElement.classList.add("setting-control", "setting-control-decimal");
								controlElement.step = step;
							}
						}
						if (setting.data.min !== undefined) {
							controlElement.min = setting.data.min;
						}
						if (setting.data.max !== undefined) {
							controlElement.max = setting.data.max;
						}
						if (setting.data.type === "integer") {
							controlElement.value = `${setting.value}`;
							controlElement.placeholder = `${setting.data.default}`;
							descriptionElement.textContent += `\nDefault: ${setting.data.default} Range: [${setting.data.min} - ${setting.data.max}]`;
						} else {
							controlElement.value = `${setting.value.toFixed(2)}`;
							controlElement.placeholder = `${setting.data.default.toFixed(2)}`;
							descriptionElement.textContent += `\nDefault: ${setting.data.default} Range: [${setting.data.min.toFixed(2)} - ${setting.data.max.toFixed(2)}]`;
						}
						break;
					default:
						console.warn(`Unsupported setting type: ${setting.data.type} for key ${key}`);
						controlElement = document.createElement('span');
						controlElement.textContent = `[Unsupported Type: ${setting.data.type}]`;
						controlElement.style.color = 'red';
				}
				if (controlElement) {
					controlElement.id = controlId;
				}
				holderElement.appendChild(labelElement);
				if (controlElement) {
					holderElement.appendChild(controlElement);
				}
				holderElement.appendChild(descriptionElement);
				container.appendChild(holderElement);
				setting.callback(setting);
			}, offset += 100);
		}
	});
	window.addEventListener("load", function () {
		const button = document.getElementById("settings-menu-button");
		const container = document.getElementById("settings-menu");
		button.onclick = function () {
			if (container.classList.contains("menu-open")) {
				container.classList.remove("menu-open");
				button.blur();
				canvas.cv.focus();
				canvas.cv.setAttribute("tabindex", "0");
				setTimeout(() => canvas.cv.focus(), 20);
			} else {
				container.classList.add("menu-open");
				if (global.socket) {
					for (let i = 0; i < global.socket.cmd.commands.length; i++) {
						global.socket.cmd.set(i, false);
					}
				}
			}
		}
	});
})();