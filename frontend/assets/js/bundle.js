/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aula 33 - POO interfaces and class/index.ts":
/*!*********************************************************!*\
  !*** ./src/aula 33 - POO interfaces and class/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Video = void 0;\n// classe video deve ter os métodos play, pause e startevents, por que implementa o type VideoPlayerProtocol. Além de só ser istanciada com um objeto que tenha os atributos do type VideoPlayerElements.\nclass Video {\n    constructor(HTMLElements) {\n        this.buttonPlay = HTMLElements.buttonPlay;\n        this.buttonStop = HTMLElements.buttonStop;\n        this.videoPlayer = HTMLElements.videoPlayer;\n    }\n    play() {\n        this.videoPlayer.play();\n    }\n    pause() {\n        this.videoPlayer.pause();\n    }\n    startEvents() {\n        this.buttonPlay.addEventListener(\"click\", () => {\n            if (this.videoPlayer.paused) {\n                this.play();\n                this.buttonPlay.textContent = \"Pause\";\n                return;\n            }\n            this.pause();\n            this.buttonPlay.textContent = \"Play\";\n        });\n        this.buttonStop.addEventListener(\"click\", () => {\n            this.pause();\n            this.videoPlayer.currentTime = 0;\n            this.buttonPlay.textContent = \"Play\";\n        });\n    }\n}\nexports.Video = Video;\nconst protocols = {\n    buttonPlay: document.querySelector(\".play\"),\n    buttonStop: document.querySelector(\".stop\"),\n    videoPlayer: document.querySelector(\"video\"),\n};\nconst video = new Video(protocols);\nvideo.startEvents();\n\n\n//# sourceURL=webpack://typescript/./src/aula_33_-_POO_interfaces_and_class/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/aula 33 - POO interfaces and class/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;