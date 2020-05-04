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

/***/ "../../packages/stars/component.js":
/*!*******************************************************************************!*\
  !*** /Users/mateuszchrzonstowski/IdeaProjects/ux/packages/stars/component.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stars; });\nclass Stars extends HTMLElement {\n    static register() {\n        customElements.define('m3-stars', Stars);\n    }\n\n    constructor() {\n        super();\n        this.full = Stars.full;\n        this.empty = Stars.empty;\n        this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        const currentValue = +this.getAttribute('current') || 0;\n        this.shadowRoot.innerHTML = `\n        <style>:host{display:inline-block}span:before{position:absolute;content:'${this.full}';width:${currentValue%1}em;overflow:hidden}</style>\n        ${getStarsString(parseInt(this.getAttribute('max')) || 0, currentValue, this.full, this.empty)}`;\n    }\n}\n\nStars.full = '★';\nStars.empty = '☆';\n\n// future private method with private fields:\nfunction getStarsString(max, current, full, empty) {\n    if (current > max) {\n        current = max;\n    }\n    const currentRounded = Math.ceil(current);\n    const starsArr = range(currentRounded - 1)\n        .map(() => full);\n    starsArr.push(`<span>${empty}</span>`);\n    range(max - currentRounded)\n        .forEach(() => starsArr.push(empty));\n    return starsArr.join('');\n}\n\nfunction range(x) {\n    return [...Array(x).keys()];\n}\n\n\n//# sourceURL=webpack:////Users/mateuszchrzonstowski/IdeaProjects/ux/packages/stars/component.js?");

/***/ }),

/***/ "../../packages/stars/index.js":
/*!***************************************************************************!*\
  !*** /Users/mateuszchrzonstowski/IdeaProjects/ux/packages/stars/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"../../packages/stars/component.js\");\n\n\n_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register();\n\n\n//# sourceURL=webpack:////Users/mateuszchrzonstowski/IdeaProjects/ux/packages/stars/index.js?");

/***/ }),

/***/ "../../packages/switch/component.js":
/*!********************************************************************************!*\
  !*** /Users/mateuszchrzonstowski/IdeaProjects/ux/packages/switch/component.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Switch; });\nclass CheckboxWrapper extends HTMLElement {\n    constructor() {\n        super();\n        this.input = document.createElement('input');\n        this.input.type = 'checkbox';\n        this.input.style.display = 'none';\n    }\n\n    get checked() {\n        return this.isTrue('checked');\n    }\n\n    set checked(value) {\n        const bool = !!value;\n        if (bool === this.checked) return;\n        this.input.checked = bool;\n        bool ? this.setAttribute('checked', '') : this.removeAttribute('checked');\n        this.setAttribute('aria-checked', bool.toString());\n        this.dispatchEvent(new Event('change', {bubbles: true}));\n    }\n\n    isTrue(attr) {\n        // when binding to attribute, we can get 'false' (e.g. React binds to attributes)\n        return this.hasAttribute(attr) && this.getAttribute(attr) !== 'false';\n    }\n\n    connectedCallback() {\n        const changeState = (event) => {\n            event.preventDefault();\n            this.checked = !this.checked;\n        }\n        // Firefox - click propagates\n        // Chrome - click = just component\n        this.addEventListener('click', changeState);\n        this.addEventListener('keydown', event => {\n            if (event.code.toLowerCase() === 'space' || event.keyCode === 32) {\n                changeState(event);\n            }\n        });\n        setupLabelClickFor(this);\n        if (this.hasAttribute('name')) {\n            this.input.name = this.getAttribute('name');\n        }\n        if (this.hasAttribute('value')) {\n            this.input.value = this.getAttribute('value');\n        }\n        this.appendChild(this.input);\n        this.input.checked = this.checked;\n        this.setAttribute('aria-checked', this.checked.toString())\n        if (!this.hasAttribute('role')) {\n            this.setAttribute('role', 'checkbox');\n        }\n        if (!this.hasAttribute('tabindex')) {\n            this.setAttribute('tabindex', '0');\n        }\n    }\n}\n\nfunction setupLabelClickFor(component) {\n    if (component.parentElement && component.parentElement instanceof HTMLLabelElement) {\n        component.input.addEventListener('change', (event) => {\n            event.stopPropagation();\n        });\n        // Firefox - clicks inner input when clicking its label\n        // Chrome - clicks component when clicking its label\n        component.input.addEventListener('click', (event) => {\n            event.stopPropagation();\n            component.checked = !component.checked;\n        });\n    }\n    const id = component.hasAttribute('id') ? component.getAttribute('id') : component.id;\n    const label = (id && document.querySelector(`label[for=\"${id}\"]`))\n        || (component.hasAttribute('aria-labelledby') && document.getElementById(component.getAttribute('aria-labelledby')));\n    if (label) {\n        label.addEventListener('click', (event) => {\n            // Chrome was clicking twice when label[for]\n            event.preventDefault();\n            component.click()\n        });\n    }\n}\n\nclass Switch extends CheckboxWrapper {\n    static get formAssociated() {\n        return true;\n    }\n\n    static register() {\n        customElements.define('m3-switch', Switch);\n    }\n\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        super.connectedCallback();\n        this.shadowRoot.innerHTML = `\n            <div class=\"slider${this.round ? ' round' : ''}\"></div>\n            <style>:host{position:relative;display:inline-block;width:2em;height:1em}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#333333;transition:0.4s}.slider::before{position:absolute;content:\"\";height:calc(1em - 4px);width:calc(1em - 4px);left:2px;bottom:2px;background-color:white;transition:0.4s}:host([aria-checked=\"true\"])>.slider{background-color:var(--m3-switch-color, #4fd69c)}:host([aria-checked=\"true\"])>.slider::before{transform:translateX(1em)}.slider.round{border-radius:34px}.slider.round::before{border-radius:50%}</style>\n        `;\n    }\n\n    get round() {\n        return this.isTrue('round');\n    }\n}\n\n\n//# sourceURL=webpack:////Users/mateuszchrzonstowski/IdeaProjects/ux/packages/switch/component.js?");

/***/ }),

/***/ "../../packages/switch/index.js":
/*!****************************************************************************!*\
  !*** /Users/mateuszchrzonstowski/IdeaProjects/ux/packages/switch/index.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"../../packages/switch/component.js\");\n\n\n_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register();\n\n\n//# sourceURL=webpack:////Users/mateuszchrzonstowski/IdeaProjects/ux/packages/switch/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mat3e_ux_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mat3e-ux/switch */ \"../../packages/switch/index.js\");\n/* harmony import */ var _mat3e_ux_stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mat3e-ux/stars */ \"../../packages/stars/index.js\");\n/* harmony import */ var _mat3e_ux_stars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mat3e-ux/stars/component */ \"../../packages/stars/component.js\");\n\n\n\n\n_mat3e_ux_stars_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].empty = '💀';\n_mat3e_ux_stars_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].full = '😄';\ncustomElements.define('m3-emoji', class extends _mat3e_ux_stars_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });