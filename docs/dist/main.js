/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mat3e_ux_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mat3e-ux/switch */ \"./node_modules/@mat3e-ux/switch/index.js\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/@mat3e-ux/switch/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@mat3e-ux/switch/component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Switch; });\nclass CheckboxWrapper extends HTMLElement {\n    constructor() {\n        super();\n        this.input = document.createElement('input');\n        this.input.type = 'checkbox';\n        if (this.hasAttribute('name')) {\n            this.input.name = this.getAttribute('name');\n        }\n    }\n\n    get checked() {\n        return this.isTrue('checked');\n    }\n\n    set checked(value) {\n        const bool = !!value;\n        if (bool === this.checked) return;\n        this.input.checked = bool;\n        bool ? this.setAttribute('checked', '') : this.removeAttribute('checked');\n        this.dispatchEvent(new Event('change', {bubbles: true}));\n    }\n\n    isTrue(attr) {\n        // when binding to attribute, we can get 'false' (e.g. React binds to attributes)\n        return this.hasAttribute(attr) && this.getAttribute(attr) !== 'false';\n    }\n}\n\nclass Switch extends CheckboxWrapper {\n    static register() {\n        customElements.define('m3-switch', Switch);\n    }\n\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        this.input.checked = this.checked;\n        this.shadowRoot.innerHTML = `\n            <div class=\"slider${this.round ? ' round' : ''}\"></div>\n            <style>:host{position:relative;display:inline-block;width:2em;height:1em}input{display:none}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#333333;transition:0.4s}.slider::before{position:absolute;content:\"\";height:calc(1em - 4px);width:calc(1em - 4px);left:2px;bottom:2px;background-color:white;transition:0.4s}input:checked+.slider{background-color:var(--m3-switch-color, #4fd69c)}input:focus+.slider{box-shadow:0 0 1px var(--m3-switch-color, #4fd69c)}input:checked+.slider::before{transform:translateX(1em)}.slider.round{border-radius:34px}.slider.round::before{border-radius:50%}</style>\n        `;\n        this.shadowRoot.prepend(this.input);\n        this.onclick = (e) => {\n            e.preventDefault();\n            this.checked = !this.checked;\n        }\n    }\n\n    get round() {\n        return this.isTrue('round');\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@mat3e-ux/switch/component.js?");

/***/ }),

/***/ "./node_modules/@mat3e-ux/switch/index.js":
/*!************************************************!*\
  !*** ./node_modules/@mat3e-ux/switch/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./node_modules/@mat3e-ux/switch/component.js\");\n\n\n_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register();\n\n\n//# sourceURL=webpack:///./node_modules/@mat3e-ux/switch/index.js?");

/***/ })

/******/ });