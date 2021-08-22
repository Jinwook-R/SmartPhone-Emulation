/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* init area*/\\nbody {\\n    margin : 0;\\n}\\n\\n/*styling area*/\\nbody {\\n    background-color: rgb(55, 112, 218);\\n}\\n\\n.app {\\n    display:block;\\n}\\n\\n.header{\\n\\n    display: flex;\\n    justify-content: space-between;\\n    margin-top: 5px;\\n    margin: 5px 10px 0 10px;\\n    \\n}\\n\\n.timebar {\\n    display: inline-block;\\n    width: 300px;\\n    margin : 0 auto;\\n    color: white;\\n    text-align: center;\\n    font-size: 1.2em;    \\n    line-height: 1.8em;\\n}\\n\\n.button {\\n    background-color: white;\\n    height: 62px;\\n    display: inline-block;\\n    font: 'arial';\\n    line-height: 4.3em;\\n    padding: 0 1.2em;\\n    border-radius: 15px;\\n    margin: 20px;\\n    font-size: 15px;\\n    cursor: pointer;\\n}\\n\\n.header .button {\\n    background-color: white;\\n    color: skyblue;\\n    border: 3px solid;\\n    margin: 0;\\n    height: 30px;\\n    display: inline-block;\\n    font: 'arial';\\n    line-height: 1.6em;\\n    padding: 0 0.5em;\\n    border-radius: 8px;\\n    font-size: 20px;\\n    visibility: hidden;\\n}\\n\\n.timeSelectBar {\\n    margin-top: 10px;\\n    background-color: white;\\n    height: 50px;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 10px;\\n    \\n}\\n\\n.timeSelectBar .timeForm {\\n    margin-top: 13px;\\n}\\n\\n.timeSelectBar .save {\\n    margin-top: 10px;\\n    height: 30px;\\n\\n}\\n\\n.alarmOne {\\n    background-color: white;\\n    margin: 3px 0;\\n    height: 30px;\\n}\\n\\n.alarmOne .delete {\\n    color: red;\\n    background-color: transparent;\\n    border: 1px solid;\\n    border-radius: 2px;\\n}\\n\\n.dragButton.dragging {\\n    opacity: .3;\\n}\\n\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button {\\n    opacity: 1;\\n}\\n\\ninput[type=\\\"time\\\"]::-webkit-inner-spin-button {\\n    opacity: 1;\\n}\\n\\n.memoOne{\\n    background-color: white;\\n    line-height: 1.5em;\\n    height: 3em;       /* height is 2x line-height, so two lines will display */\\n    overflow: hidden  /* prevents extra lines from being visible */\\n}\\n\\n.inputForm{\\n   margin-top: 10px; \\n}\\n\\n.inputMemo{\\n    width: 100%;\\n    height: 50px;\\n\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://smartphone-emulation/./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://smartphone-emulation/./css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://smartphone-emulation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timebar.js */ \"./src/timebar.js\");\n/* harmony import */ var _appList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appList.js */ \"./src/appList.js\");\n/* harmony import */ var _alarm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alarm.js */ \"./src/alarm.js\");\n/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memo.js */ \"./src/memo.js\");\n/* harmony import */ var _picture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture.js */ \"./src/picture.js\");\n/* harmony import */ var _picture_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_picture_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\n\n\n\n\n\n\nclass App {\n\n    constructor($app){\n        this.app = $app;\n\n        this.timebar = new _timebar_js__WEBPACK_IMPORTED_MODULE_0__.default(this.app);\n        this.appList = new _appList_js__WEBPACK_IMPORTED_MODULE_1__.default(this.app, (appOne, appList) => {\n            \n            const className = appOne.className.split(' ')[1];\n            \n            if(className === 'alarmButton'){\n                this.alarm = new _alarm_js__WEBPACK_IMPORTED_MODULE_2__.default(this.app, appList);\n\n            }else if(className === 'memoButton'){\n                this.memo = new _memo_js__WEBPACK_IMPORTED_MODULE_3__.default(this.app, appList);\n            }else if(className === 'pictureButton'){\n\n                this.picture = new (_picture_js__WEBPACK_IMPORTED_MODULE_4___default())(this.app, appList);\n            }\n\n        });\n\n    }\n\n\n}\n\nconst $app = document.querySelector('.app');\n\nconst myApp = new App($app);\n\n\n\n//# sourceURL=webpack://smartphone-emulation/./src/App.js?");

/***/ }),

/***/ "./src/alarm.js":
/*!**********************!*\
  !*** ./src/alarm.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\n\nclass Alarm {\n\n    constructor(app, appList) {\n        \n        this.appList = appList;\n        this.app = app;\n        this.alarm = document.createElement('div');\n        this.alarm.setAttribute('class','alarm');\n        \n        this.beforeRender();\n        this.render();\n    }\n\n    beforeRender() {\n        if(localStorage.getItem('alarm')){\n\n            this.alarm.innerHTML = localStorage.getItem('alarm');\n            this.app.appendChild(this.alarm);\n            \n            if(document.querySelector('.timeSelectBar')){\n                document.querySelector('.timeSelectBar').remove();\n            }\n\n            const alarmContents = document.querySelectorAll('.alarmOne');\n\n            alarmContents.forEach((e) => {\n                const contents = e.textContent.split(' ');\n\n                const ampm = contents[0];\n                const hour = contents[1].substring(0,1);\n                const minute = contents[2].substring(0,2);\n                \n                const alarmOne = document.createElement('div');\n                alarmOne.setAttribute('class','alarmOne');\n                \n                alarmOne.textContent = `${ampm} ${hour}시 ${minute}분`;\n\n                const deleteButton = e.childNodes[1];\n                deleteButton.setAttribute('class','delete');\n                deleteButton.setAttribute('type','button');\n                deleteButton.value = '삭제';\n                \n                deleteButton.addEventListener('click', (e) => {\n                    e.target.parentNode.remove();\n                    localStorage.setItem('alarm',this.alarm.innerHTML);\n                });\n\n                let timeChecker = setInterval(() => {\n                    let checkHour = hour;\n                    if(ampm === '오후'){\n                        checkHour = String(12+ Number(hour));\n                    }\n                    const now     = new Date();\n                    const hours   = now.getHours();\t// 시간\n                    const minutes = now.getMinutes();\t// 분\n                    \n                    if(checkHour == hours && minute == minutes){\n                        alarmOne.remove();\n                        localStorage.setItem('alarm',this.alarm.innerHTML);\n                        clearInterval(timeChecker);\n                    }\n                },1000);\n            });\n        }\n    }\n\n    render() {\n        \n        const headerButton = document.querySelectorAll('.header.button');\n\n        headerButton.forEach((e) => {\n            e.style.visibility = 'visible';\n\n            if(e.className === 'header button back'){\n\n                e.addEventListener('click', () => {\n                    this.alarm.remove();\n                    this.app.appendChild(this.appList);\n                    e.style.visibility = 'hidden';\n                    document.querySelector('.new').style.visibility = 'hidden';\n                    \n                });\n\n            }else if(e.className === 'header button new'){\n                \n                e.addEventListener('click',(e) => {\n                    \n                    const timeSelectBar = document.createElement('div');\n                    timeSelectBar.setAttribute('class', 'timeSelectBar');\n                    \n                    timeSelectBar.innerHTML = `\n                    <div class='timeForm'>\n                        <select class='ampm' size=\"1\">\n                            <option value=\"오전\">오전</option>\n                            <option value=\"오후\">오후</option>\n                        </select>                \n                        <input class='hour' type=\"number\" min=\"1\" max=\"12\" step=\"1\" value=\"1\" required>\n                        <input class='minute' type=\"number\" min=\"00\" max=\"59\" step=\"10\" value=\"00\" required>\n                    </div>\n                    <input class='save' type=\"button\" value=\"저장\">`;\n\n                    this.alarm.insertAdjacentElement('afterbegin', timeSelectBar);\n                    this.saveButton = document.querySelector('.save');\n                                        \n                    this.saveButton.addEventListener('click', () => {\n\n                        const $ampm = document.querySelector('.ampm');\n                        const ampm = $ampm.options[$ampm.selectedIndex].value;\n                        \n                        const hour = document.querySelector('.hour').value;\n                        const minute = document.querySelector('.minute').value;\n                        \n                        const alarmOne = document.createElement('div');\n                        alarmOne.setAttribute('class','alarmOne');\n                        \n                        alarmOne.textContent = `${ampm} ${hour}시 ${minute}분`;\n                        \n                        const deleteButton = document.createElement('input');\n                        deleteButton.setAttribute('class','delete');\n                        deleteButton.setAttribute('type','button');\n                        deleteButton.value = '삭제';\n                        \n                        deleteButton.addEventListener('click', (e) => {\n                            e.target.parentNode.remove();\n                            localStorage.setItem('alarm',this.alarm.innerHTML);\n                        });\n\n                        let timeChecker = setInterval(() => {\n                            let checkHour = hour;\n                            if(ampm === '오후'){\n                                checkHour = String(12+ Number(hour));\n                            }\n                            const now = new Date();\n                            const hours   = now.getHours();\t// 시간\n                            const minutes = now.getMinutes();\t// 분\n                            \n                            if(checkHour == hours && minute == minutes){\n                                alarmOne.remove();\n                                localStorage.setItem('alarm',this.alarm.innerHTML);\n                                clearInterval(timeChecker);\n                            }\n                        },1000);\n                        \n                        alarmOne.appendChild(deleteButton);\n                        this.alarm.appendChild(alarmOne);\n\n                        timeSelectBar.remove();\n                        localStorage.setItem('alarm',this.alarm.innerHTML);\n                    });\n\n                });\n            }\n        });\n\n\n        this.app.appendChild(this.alarm);\n\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alarm);\n\n//# sourceURL=webpack://smartphone-emulation/./src/alarm.js?");

/***/ }),

/***/ "./src/appList.js":
/*!************************!*\
  !*** ./src/appList.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\n\nclass AppList {\n\n    constructor($app,onClick){\n\n        this.app = $app;\n        this.render();\n        this.onClick = onClick;\n        this.handlePageChange();\n        this.handleDragAndDrop();\n    }\n\n    setLocalStorage(){\n        localStorage.setItem('appList',this.appList.innerHTML);\n    }\n\n    render(){\n        this.appList = document.createElement('div');\n        this.appList.setAttribute('class', 'appList');\n\n        if(localStorage.getItem('appList')){\n            this.appList.innerHTML = localStorage.getItem('appList');\n        }else{\n\n            this.makeAppOne('알람', 'alarmButton');\n            this.makeAppOne('메모', 'memoButton');\n            this.makeAppOne('사진', 'pictureButton');\n        }\n        \n        this.app.appendChild(this.appList);\n    }\n\n    makeAppOne(appName, className){\n        \n        const appOne = document.createElement('a');\n\n        appOne.setAttribute('class', `button ${className}`);\n        appOne.setAttribute('draggable', 'true'); \n        appOne.textContent = appName;\n        this.appList.appendChild(appOne);\n    }\n\n    handlePageChange(handlePageChangeCallBack){\n\n        const dragButtons = document.querySelectorAll('.button');\n\n        dragButtons.forEach(dragButton => {\n            dragButton.addEventListener('click', (e) => {\n                this.setLocalStorage('appList',this.appList);\n                this.onClick(e.target, this.appList);\n                this.appList.remove();\n            })\n        });\n    }\n\n    handleDragAndDrop(){\n        \n        const dragButtons = document.querySelectorAll('.button');\n        \n        dragButtons.forEach( dragButton => {\n            dragButton.addEventListener('dragstart', () => {\n                dragButton.classList.add('dragging');\n            });   \n\n            dragButton.addEventListener('dragend', () => {\n                dragButton.classList.remove('dragging');\n                this.setLocalStorage();\n            });\n        });\n\n        this.appList.addEventListener('dragover', e => {\n            e.preventDefault();\n            const afterElement = this.getDragAfterElement(e.clientX);\n            const dragButton = document.querySelector('.dragging');\n            if(!afterElement){\n                this.appList.appendChild(dragButton) //가장 오른쪽에 저장    \n            }else{\n                this.appList.insertBefore(dragButton, afterElement)\n            }\n        })\n    }\n\n    getDragAfterElement(x) {\n        const draggableElements = [...this.appList.querySelectorAll('.button:not(.dragging)')];\n        return draggableElements.reduce((closest, child) => {\n\n            const box = child.getBoundingClientRect();\n            const offset = x - box.left - box.width / 2\n            \n            if (offset < 0 && offset > closest.offset){\n\n                return {element : child}\n            }else{\n                return closest\n            }\n\n        }, {offset: Number.NEGATIVE_INFINITY}).element\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppList);\n\n\n//# sourceURL=webpack://smartphone-emulation/./src/appList.js?");

/***/ }),

/***/ "./src/memo.js":
/*!*********************!*\
  !*** ./src/memo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Memo {\n\n    constructor(app, appList){\n\n        this.app = app;\n        this.appList = appList;\n        this.memo = document.createElement('div');\n        this.memo.setAttribute('class','memo');\n        this.app.appendChild(this.memo)\n        this.beforeRender();\n        this.render();\n    }\n\n    beforeRender() {\n        \n        if(localStorage.getItem('memo')){\n\n            this.memo.innerHTML = localStorage.getItem('memo');\n            // this.app.appendChild(this.memo);\n            \n            if(document.querySelector('.inputForm')){\n                document.querySelector('.inputForm').remove();\n            }\n\n            const memoContents = document.querySelectorAll('.memoOne');\n            memoContents.forEach((e) => {\n                e.addEventListener('click',(e)=>{\n                    const otherMemoOne = document.querySelectorAll('.memoOne');\n                    for(const one of otherMemoOne){\n                        one.style.height = '3em';\n                    }\n                    e.target.style.height= '100%';\n\n                })\n            });\n        }\n        \n    }\n\n    render() {\n        \n        const headerButton = document.querySelectorAll('.header.button');\n        headerButton.forEach((e) => {\n            e.style.visibility = 'visible';\n\n            if(e.className === 'header button back'){\n\n                e.addEventListener('click',() => {\n\n                    this.memo.remove();\n                    this.app.appendChild(this.appList);\n                    e.style.visibility = 'hidden';\n                    document.querySelector('.new').style.visibility = 'hidden';\n                });\n\n            }else if(e.className === 'header button new'){\n                console.log(this.appList);\n                e.addEventListener('click', (e) => {\n                    \n                    const inputForm = document.createElement('div');\n                    inputForm.setAttribute('class', 'inputForm');\n                    \n                    inputForm.innerHTML = `<input class='inputMemo' type=\"text\" placeholder=\"메모를 입력하세요\">`;\n                    \n                    this.memo.insertAdjacentElement('afterbegin', inputForm);\n                    \n                    \n                    const inputMemo = document.querySelector('.inputMemo');\n                    \n                    inputForm.addEventListener('keyup', (e) => {\n                        \n                        if(e.key === 'Enter'){\n                            console.log(inputMemo.value);\n                            const memoOne = document.createElement('p');\n                            memoOne.setAttribute('class','memoOne');\n\n                            memoOne.innerText = inputMemo.value;\n                            \n                            memoOne.addEventListener(\"click\", (e)=>{\n                                \n                                const otherMemoOne = document.querySelectorAll('.memoOne');\n                                for(const one of otherMemoOne){\n                                    one.style.height = '3em';\n                                }\n                                e.target.style.height= '100%';\n                            });\n\n                            this.memo.appendChild(memoOne);\n                            inputForm.remove();\n                            localStorage.setItem('memo',this.memo.innerHTML);\n                        }\n                    \n                    });\n\n                });\n                \n            }\n        });\n\n        \n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memo);\n\n//# sourceURL=webpack://smartphone-emulation/./src/memo.js?");

/***/ }),

/***/ "./src/picture.js":
/*!************************!*\
  !*** ./src/picture.js ***!
  \************************/
/***/ (() => {

eval("class Picture{\n\n    constructor(app, appList){\n        this.app = app;\n        this.appList = appList;\n        this.pictureBar = document.createElement('div');\n        this.pictureBar.setAttribute('class','pictureBar');\n        this.app.appendChild(this.pictureBar)\n        // this.beforeRender();\n        // this.render();\n        console.log('!!!!!!!!!!!!');\n    }\n\n\n\n\n\n}\n\n//# sourceURL=webpack://smartphone-emulation/./src/picture.js?");

/***/ }),

/***/ "./src/timebar.js":
/*!************************!*\
  !*** ./src/timebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\n\nclass TimeBar {\n\n    constructor($app, timeSetter){\n        this.app = $app;\n        this.timeSetter = timeSetter;\n        this.render();\n    }\n\n    render(){\n\n        const header = document.createElement('nav');\n        header.setAttribute('class', 'header');\n\n        const backButton = document.createElement('a');\n        backButton.setAttribute('class', 'header button back');\n        backButton.textContent = 'BACK';\n\n        const timebar = document.createElement('div');\n        timebar.setAttribute('class', 'timebar');\n        \n        const newButton = document.createElement('a');\n        newButton.setAttribute('class', 'header button new');\n        newButton.textContent = 'NEW';\n\n        header.appendChild(backButton);\n        header.appendChild(timebar);\n        header.appendChild(newButton);\n\n        setInterval(() => { \n            const now = new Date();\n            timebar.textContent = this.makeTime(now);\n        }, 1000);\n\n        this.app.appendChild(header);\n\n\n    }\n\n    makeTime(now){\n\n        const year    = now.getFullYear();\t// 연도\n        const month   = now.getMonth();\n        const date    = now.getDate();\t// 일\n        const hours   = now.getHours();\t// 시간\n        const minutes = now.getMinutes();\t// 분\n        const seconds = now.getSeconds();\t// 초\n\n        return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeBar);\n\n//# sourceURL=webpack://smartphone-emulation/./src/timebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;