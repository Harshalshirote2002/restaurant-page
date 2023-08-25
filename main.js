/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/image2.jpg */ "./src/images/image2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    /* border: 4px solid red; */
}

body{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}

.navigator-tab{
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: rgb(127, 223, 255);
}

.navigator-tab p{
    padding: 20px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navigator-tab .active-focus{
    background-color: rgb(246, 250, 254);
    border-top-left-radius: 15px;    
    border-top-right-radius: 15px;
}

.container{
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 4px solid black; */
    padding-top: 42px;
}

header{
    height: 30vh;
    width: calc(100% - 100px);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logo{
    font-size: 64px;
    font-weight: 900;
}

.search{
    height: 28px;
    width: 350px;
    border: 0px solid black;
    border-radius: 15px;
    font-size: 22px;
    place-content: center;
    padding-left: 10px;
    background-color: rgb(127, 223, 255);
    display: flex;
    align-items: flex-end;
    justify-content: left;
}

main{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

main .location{
    height: 250px;
    width: 250px;
    background-color: rgb(127, 223, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    font-size: 28px;
    border-radius: 20px;
}

.location p:first-child{
    font-size: 20px;
}

.location p:last-child{
    font-size: 14px;
}


footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    padding-top: 24px;
    padding-bottom: 10px;
}

.fab{
    color: black;
    transition: 0.3s ease-in-out;
    font-size: 24px;
}

.fab:hover{
    transform: rotate(360deg) scale(1.2);
}

.item{
    height: 250px;
    width: 500px;
    background-color: rgb(127, 223, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    font-size: 28px;
    border-radius: 20px;
}

.item p:first-child{
    font-size: 20px;
}

.item p:last-child{
    font-size: 14px;
}

.announcement{
    height: 28px;
    width: 350px;
    font-size: 22px;
    place-content: center;
    padding-left: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: left;
}

.chef{
    height: 250px;
    width: 500px;
    background-color: rgb(127, 223, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    font-size: 28px;
    border-radius: 20px;
}

.chef p:first-child{
    font-size: 20px;
}

.chef p:last-child{
    font-size: 14px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,yDAA+C;IAC/C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;IACpC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,QAAQ;IACR,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    /* border: 4px solid red; */\n}\n\nbody{\n    background-image: url(../src/images/image2.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-direction: column;\n}\n\n.navigator-tab{\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    background-color: rgb(127, 223, 255);\n}\n\n.navigator-tab p{\n    padding: 20px;\n    width: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.navigator-tab .active-focus{\n    background-color: rgb(246, 250, 254);\n    border-top-left-radius: 15px;    \n    border-top-right-radius: 15px;\n}\n\n.container{\n    max-width: 70vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* border: 4px solid black; */\n    padding-top: 42px;\n}\n\nheader{\n    height: 30vh;\n    width: calc(100% - 100px);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.logo{\n    font-size: 64px;\n    font-weight: 900;\n}\n\n.search{\n    height: 28px;\n    width: 350px;\n    border: 0px solid black;\n    border-radius: 15px;\n    font-size: 22px;\n    place-content: center;\n    padding-left: 10px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    align-items: flex-end;\n    justify-content: left;\n}\n\nmain{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n}\n\nmain .location{\n    height: 250px;\n    width: 250px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 28px;\n    border-radius: 20px;\n}\n\n.location p:first-child{\n    font-size: 20px;\n}\n\n.location p:last-child{\n    font-size: 14px;\n}\n\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    gap: 8px;\n    padding-top: 24px;\n    padding-bottom: 10px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n    font-size: 24px;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.2);\n}\n\n.item{\n    height: 250px;\n    width: 500px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 28px;\n    border-radius: 20px;\n}\n\n.item p:first-child{\n    font-size: 20px;\n}\n\n.item p:last-child{\n    font-size: 14px;\n}\n\n.announcement{\n    height: 28px;\n    width: 350px;\n    font-size: 22px;\n    place-content: center;\n    padding-left: 10px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: left;\n}\n\n.chef{\n    height: 250px;\n    width: 500px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 28px;\n    border-radius: 20px;\n}\n\n.chef p:first-child{\n    font-size: 20px;\n}\n\n.chef p:last-child{\n    font-size: 14px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/chefPage.js":
/*!*************************!*\
  !*** ./src/chefPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createChefs)
/* harmony export */ });
function createChefs() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const board = document.createElement('div');
    const logo = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo');
    board.classList.add('announcement');

    logo.textContent = 'GrubHubbub';
    board.textContent='Chefs leaderboard';
    header.appendChild(logo);
    header.appendChild(board);
    container.appendChild(header);

    const main = document.createElement('main');

    const chefs = ['Tom', 'Matthew', 'Dan', 'Jack', 'William', 'Megan', 'Jim', 'Klaus', 'Sarah'];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('chef');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = `#${i+1}`;
        address.textContent = chefs[i];
        content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.';
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}


/***/ }),

/***/ "./src/commonFooter.js":
/*!*****************************!*\
  !*** ./src/commonFooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(){
    const footer = document.createElement('footer');
    footer.textContent=`Copyright © ${new Date().getFullYear()} HarshalShirote2002`;
    const a = document.createElement('a');
    a.href = 'https://github.com/Harshalshirote2002';
    a.target='_blank';
    const i = document.createElement('i');
    i.classList.add('fab');
    i.classList.add('fa-github');
    a.appendChild(i);
    footer.appendChild(a);
    return footer
}



/***/ }),

/***/ "./src/fontawesome.js":
/*!****************************!*\
  !*** ./src/fontawesome.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":false},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"id":80762673,"license":"free","method":"css","minify":{"enabled":true},"token":"4c536a6bd5","v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"v5FontFaceShim":{"enabled":false},"version":"5.15.4"};
!function(t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}((function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(t){f=!0,o=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(f)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,c=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+c+"/"+r+o+"."+i}function a(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var u,f=function(){},s="undefined"!=typeof __webpack_require__.g&&void 0!==__webpack_require__.g.process&&"function"==typeof __webpack_require__.g.process.emit,l="undefined"==typeof setImmediate?setTimeout:setImmediate,d=[];function h(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);d=[],u=!1}function m(t,e){d.push([t,e]),u||(u=!0,l(h,0))}function p(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){g(i,t)}}v(i,r)||("fulfilled"===n&&b(i,r),"rejected"===n&&g(i,r))}function v(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(n){r||(r=!0,e===n?y(t,n):b(t,n))}),(function(e){r||(r=!0,g(t,e))})),!0}}catch(e){return r||g(t,e),!0}return!1}function b(t,e){t!==e&&v(t,e)||y(t,e)}function y(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(A,t))}function g(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(S,t))}function w(t){t._then=t._then.forEach(p)}function A(t){t._state="fulfilled",w(t)}function S(t){t._state="rejected",w(t),!t._handled&&s&&__webpack_require__.g.process.emit("unhandledRejection",t._data,t)}function O(t){__webpack_require__.g.process.emit("rejectionHandled",t)}function j(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof j==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){g(e,t)}try{t((function(t){b(e,t)}),n)}catch(t){n(t)}}(t,this)}j.prototype={constructor:j,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(f),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&s&&m(O,this)),"fulfilled"===this._state||"rejected"===this._state?m(p,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},j.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new j((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var c,a=0;a<t.length;a++)(c=t[a])&&"function"==typeof c.then?c.then(i(a),n):r[a]=c;o||e(r)}))},j.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new j((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},j.resolve=function(t){return t&&"object"===n(t)&&t.constructor===j?t:new j((function(e){e(t)}))},j.reject=function(t){return new j((function(e,n){n(t)}))};var E="function"==typeof Promise?Promise:j;function P(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(t){return t.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new E((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function _(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function F(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.document||o,i=a.bind(a,o,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&r(i);var u=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,f=[{id:"fa-main",addOn:void 0,url:u}];if(t.v4shim&&t.v4shim.enabled&&f.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&f.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&f.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!u&&t.customIconsCssPath){var s=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,l=s+"/"+t.customIconsCssPath;f.push({id:"fa-kit-upload",url:l})}var d=f.map((function(r){return new E((function(o,i){var a=r.url||c(t,{addOn:r.addOn,minify:t.minify.enabled}),u={id:r.id},f=t.subset?u:e(e(e({},n),u),{},{baseUrl:t.baseUrl,version:t.version,id:r.id,contentFilter:function(t,e){return _(t,e.baseUrl,e.version)}});P(a,n).then((function(t){o(C(t,f))})).catch(i)}))}));return E.all(d)}function C(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function I(t,n){n.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",n.fetchUploadedSvgFrom=t.uploadsUrl);var r=[];return t.v4shim.enabled&&r.push(new E((function(r,o){P(c(t,{addOn:"-v4-shims",minify:t.minify.enabled}),n).then((function(t){r(U(t,e(e({},n),{},{id:"fa-v4-shims"})))})).catch(o)}))),r.push(new E((function(r,o){P(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||c(t,{minify:t.minify.enabled}),n).then((function(t){var o=U(t,e(e({},n),{},{id:"fa-main"}));r(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,n))})).catch(o)}))),E.all(r)}function U(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function T(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function L(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var k=window.FontAwesomeKitConfig,x={detectingConflicts:k.detectConflictsUntil&&new Date<=new Date(k.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:k.token,XMLHttpRequest:window.XMLHttpRequest,document:document},M=document.currentScript,N=M?M.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?I(t,e):"css"===t.method?F(t,e,(function(t){T(t),L(t)})):void 0})(k,x).then((function(t){t.map((function(t){try{N.insertBefore(t,M?M.nextSibling:null)}catch(e){N.appendChild(t)}})),x.detectingConflicts&&M&&T((function(){M.setAttributeNode(document.createAttribute(x.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=c(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(k,x);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
function createMain() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.textContent = 'GrubHubbub';
    search.textContent = 'find a GrubHubbub near you';
    header.appendChild(logo);
    header.appendChild(search);
    container.appendChild(header);

    const main = document.createElement('main');

    const locations = ['Mumbai', 'Delhi', 'Kolkata', 'Bangalore', 'Pune', 'Chennai', 'Kolhapur', 'Lucknow', 'Coimbatore'];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('location');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = locations[i];
        address.textContent = 'address';
        content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.';
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.textContent = 'GrubHubbub';
    search.textContent = 'enter your favorite item';
    header.appendChild(logo);
    header.appendChild(search);
    container.appendChild(header);

    const main = document.createElement('main');

    const items = ['Pizza', 'Burger', 'Sandwich', 'Roll', 'Pudding', 'Fries', 'Pancake', 'Coke', 'Chocolate'];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('item');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = items[i];
        address.textContent = 'variations';
        content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.';
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}


/***/ }),

/***/ "./src/images/image2.jpg":
/*!*******************************!*\
  !*** ./src/images/image2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22ef05daa31ca0f70ed1.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _fontawesome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontawesome.js */ "./src/fontawesome.js");
/* harmony import */ var _fontawesome_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage.js */ "./src/mainPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _commonFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commonFooter.js */ "./src/commonFooter.js");
/* harmony import */ var _chefPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chefPage.js */ "./src/chefPage.js");






const body = document.querySelector('body');
let container = 0;
let footer = 0;
let navTab;

function createNavTab(focus){
    navTab = document.createElement('div');
    const main = document.createElement('p');
    const menu = document.createElement('p');
    const chefs = document.createElement('p');
    main.textContent = 'MainPage';
    menu.textContent = 'Menu';
    chefs.textContent = 'Chefs';
    main.classList.add('main-page');
    menu.classList.add('menu-page');
    chefs.classList.add('chefs-page');
    main.addEventListener('click', mainEvent);
    menu.addEventListener('click', menuEvent);
    chefs.addEventListener('click', chefsEvent);
    if(focus=='main-page'){
        if(Array.from(menu.classList).includes('active-focus')){
            menu.classList.remove('active-focus');
        }else if(Array.from(chefs.classList).includes('active-focus')){
            chefs.classList.remove('active-focus');
        }
        main.classList.add('active-focus');
    }else if(focus=='menu-page'){
        if(Array.from(main.classList).includes('active-focus')){
            main.classList.remove('active-focus');
        }else if(Array.from(chefs.classList).includes('active-focus')){
            chefs.classList.remove('active-focus');
        }
        menu.classList.add('active-focus');
    }else if(focus=='chefs-page'){
        if(Array.from(main.classList).includes('active-focus')){
            main.classList.remove('active-focus');
        }else if(Array.from(menu.classList).includes('active-focus')){
            menu.classList.remove('active-focus');
        }
        chefs.classList.add('active-focus');
    }
    navTab.appendChild(main);
    navTab.appendChild(menu);
    navTab.appendChild(chefs);
    navTab.classList.add('navigator-tab');
    return navTab;
}

function mainEvent() {
    container = (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    body.textContent = '';
    navTab = createNavTab('main-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

function menuEvent() {
    container = (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    body.textContent = '';
    navTab = createNavTab('menu-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

function chefsEvent() {
    container = (0,_chefPage_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    body.textContent = '';
    navTab = createNavTab('chefs-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

mainEvent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVTtBQUMxQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVTtBQUMxQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NoZWZQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvaW1hZ2UyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCByZWQ7ICovXG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXZpZ2F0b3ItdGFie1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xufVxuXG4ubmF2aWdhdG9yLXRhYiBwe1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmlnYXRvci10YWIgLmFjdGl2ZS1mb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNTAsIDI1NCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDsgICAgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIHBhZGRpbmctdG9wOiA0MnB4O1xufVxuXG5oZWFkZXJ7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb3tcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlYXJjaHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5tYWluIC5sb2NhdGlvbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubG9jYXRpb24gcDpmaXJzdC1jaGlsZHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2NhdGlvbiBwOmxhc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbmZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5mYWJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmFiOmhvdmVye1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbn1cblxuLml0ZW17XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLml0ZW0gcDpmaXJzdC1jaGlsZHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pdGVtIHA6bGFzdC1jaGlsZHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hbm5vdW5jZW1lbnR7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbi5jaGVme1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jaGVmIHA6Zmlyc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hlZiBwOmxhc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlEQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltYWdlcy9pbWFnZTIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdmlnYXRvci10YWJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xcbn1cXG5cXG4ubmF2aWdhdG9yLXRhYiBwe1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdG9yLXRhYiAuYWN0aXZlLWZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNTAsIDI1NCk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7ICAgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBibGFjazsgKi9cXG4gICAgcGFkZGluZy10b3A6IDQycHg7XFxufVxcblxcbmhlYWRlcntcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ297XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW4gLmxvY2F0aW9ue1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gcDpsYXN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZmFie1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmZhYjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uaXRlbXtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLml0ZW0gcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaXRlbSBwOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmFubm91bmNlbWVudHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4uY2hlZntcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNoZWYgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2hlZiBwOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoZWZzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudCcpO1xuXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdHcnViSHViYnViJztcbiAgICBib2FyZC50ZXh0Q29udGVudD0nQ2hlZnMgbGVhZGVyYm9hcmQnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGNoZWZzID0gWydUb20nLCAnTWF0dGhldycsICdEYW4nLCAnSmFjaycsICdXaWxsaWFtJywgJ01lZ2FuJywgJ0ppbScsICdLbGF1cycsICdTYXJhaCddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjaGVmJyk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC50ZXh0Q29udGVudCA9IGAjJHtpKzF9YDtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGNoZWZzW2ldO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudD1gQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIYXJzaGFsU2hpcm90ZTIwMDJgO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9IYXJzaGFsc2hpcm90ZTIwMDInO1xuICAgIGEudGFyZ2V0PSdfYmxhbmsnO1xuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYWInKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xuICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXJcbn1cblxuIiwid2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnID0ge1wiYXN5bmNMb2FkaW5nXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcImF1dG9BMTF5XCI6e1wiZW5hYmxlZFwiOnRydWV9LFwiYmFzZVVybFwiOlwiaHR0cHM6Ly9rYS1mLmZvbnRhd2Vzb21lLmNvbVwiLFwiYmFzZVVybEtpdFwiOlwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tXCIsXCJkZXRlY3RDb25mbGljdHNVbnRpbFwiOm51bGwsXCJpY29uVXBsb2Fkc1wiOnt9LFwiaWRcIjo4MDc2MjY3MyxcImxpY2Vuc2VcIjpcImZyZWVcIixcIm1ldGhvZFwiOlwiY3NzXCIsXCJtaW5pZnlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ0b2tlblwiOlwiNGM1MzZhNmJkNVwiLFwidjRGb250RmFjZVNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NHNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NUZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjpmYWxzZX0sXCJ2ZXJzaW9uXCI6XCI1LjE1LjRcIn07XG4hZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImtpdC1sb2FkZXJcIix0KTp0KCl9KChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIGUoZSl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIG89bnVsbCE9YXJndW1lbnRzW25dP2FyZ3VtZW50c1tuXTp7fTtuJTI/dChPYmplY3QobyksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3IoZSx0LG9bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobykpOnQoT2JqZWN0KG8pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobyx0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gbih0KXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gcih0LGUsbil7cmV0dXJuKGU9ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8bnVsbD09PXQpcmV0dXJuIHQ7dmFyIG49dFtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PW4pe3ZhciByPW4uY2FsbCh0LGV8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcilyZXR1cm4gcjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT1lP1N0cmluZzpOdW1iZXIpKHQpfSh0LFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6U3RyaW5nKGUpfShlKSlpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1mdW5jdGlvbiBvKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe3ZhciBuPW51bGw9PXQ/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ0W1N5bWJvbC5pdGVyYXRvcl18fHRbXCJAQGl0ZXJhdG9yXCJdO2lmKG51bGwhPW4pe3ZhciByLG8saSxjLGE9W10sdT0hMCxmPSExO3RyeXtpZihpPShuPW4uY2FsbCh0KSkubmV4dCwwPT09ZSl7aWYoT2JqZWN0KG4pIT09bilyZXR1cm47dT0hMX1lbHNlIGZvcig7ISh1PShyPWkuY2FsbChuKSkuZG9uZSkmJihhLnB1c2goci52YWx1ZSksYS5sZW5ndGghPT1lKTt1PSEwKTt9Y2F0Y2godCl7Zj0hMCxvPXR9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPW4ucmV0dXJuJiYoYz1uLnJldHVybigpLE9iamVjdChjKSE9PWMpKXJldHVybn1maW5hbGx5e2lmKGYpdGhyb3cgb319cmV0dXJuIGF9fSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gaSh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20odCk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpKHQsZSl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gYyh0LGUpe3ZhciBuPWUmJmUuYWRkT258fFwiXCIscj1lJiZlLmJhc2VGaWxlbmFtZXx8dC5saWNlbnNlK24sbz1lJiZlLm1pbmlmeT9cIi5taW5cIjpcIlwiLGk9ZSYmZS5maWxlU3VmZml4fHx0Lm1ldGhvZCxjPWUmJmUuc3ViZGlyfHx0Lm1ldGhvZDtyZXR1cm4gdC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL1wiK2MrXCIvXCIrcitvK1wiLlwiK2l9ZnVuY3Rpb24gYSh0LGUpe3ZhciBuPWV8fFtcImZhXCJdLHI9XCIuXCIrQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChuLFwiLC5cIiksbz10LnF1ZXJ5U2VsZWN0b3JBbGwocik7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvLChmdW5jdGlvbihlKXt2YXIgbj1lLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dmFyIHI9IWUubmV4dEVsZW1lbnRTaWJsaW5nfHwhZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Itb25seVwiKTtpZihuJiZyKXt2YXIgbz10LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO28uaW5uZXJIVE1MPW4sby5jbGFzc0xpc3QuYWRkKFwic3Itb25seVwiKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sZS5uZXh0U2libGluZyl9fSkpfXZhciB1LGY9ZnVuY3Rpb24oKXt9LHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmdm9pZCAwIT09Z2xvYmFsLnByb2Nlc3MmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQsbD1cInVuZGVmaW5lZFwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlP3NldFRpbWVvdXQ6c2V0SW1tZWRpYXRlLGQ9W107ZnVuY3Rpb24gaCgpe2Zvcih2YXIgdD0wO3Q8ZC5sZW5ndGg7dCsrKWRbdF1bMF0oZFt0XVsxXSk7ZD1bXSx1PSExfWZ1bmN0aW9uIG0odCxlKXtkLnB1c2goW3QsZV0pLHV8fCh1PSEwLGwoaCwwKSl9ZnVuY3Rpb24gcCh0KXt2YXIgZT10Lm93bmVyLG49ZS5fc3RhdGUscj1lLl9kYXRhLG89dFtuXSxpPXQudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXtuPVwiZnVsZmlsbGVkXCI7dHJ5e3I9byhyKX1jYXRjaCh0KXtnKGksdCl9fXYoaSxyKXx8KFwiZnVsZmlsbGVkXCI9PT1uJiZiKGksciksXCJyZWplY3RlZFwiPT09biYmZyhpLHIpKX1mdW5jdGlvbiB2KHQsZSl7dmFyIHI7dHJ5e2lmKHQ9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpO2lmKGUmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfHxcIm9iamVjdFwiPT09bihlKSkpe3ZhciBvPWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXJldHVybiBvLmNhbGwoZSwoZnVuY3Rpb24obil7cnx8KHI9ITAsZT09PW4/eSh0LG4pOmIodCxuKSl9KSwoZnVuY3Rpb24oZSl7cnx8KHI9ITAsZyh0LGUpKX0pKSwhMH19Y2F0Y2goZSl7cmV0dXJuIHJ8fGcodCxlKSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBiKHQsZSl7dCE9PWUmJnYodCxlKXx8eSh0LGUpfWZ1bmN0aW9uIHkodCxlKXtcInBlbmRpbmdcIj09PXQuX3N0YXRlJiYodC5fc3RhdGU9XCJzZXR0bGVkXCIsdC5fZGF0YT1lLG0oQSx0KSl9ZnVuY3Rpb24gZyh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShTLHQpKX1mdW5jdGlvbiB3KHQpe3QuX3RoZW49dC5fdGhlbi5mb3JFYWNoKHApfWZ1bmN0aW9uIEEodCl7dC5fc3RhdGU9XCJmdWxmaWxsZWRcIix3KHQpfWZ1bmN0aW9uIFModCl7dC5fc3RhdGU9XCJyZWplY3RlZFwiLHcodCksIXQuX2hhbmRsZWQmJnMmJmdsb2JhbC5wcm9jZXNzLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIix0Ll9kYXRhLHQpfWZ1bmN0aW9uIE8odCl7Z2xvYmFsLnByb2Nlc3MuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIix0KX1mdW5jdGlvbiBqKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgcmVzb2x2ZXIgXCIrdCtcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtpZih0aGlzIGluc3RhbmNlb2Ygaj09ITEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTt0aGlzLl90aGVuPVtdLGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0KXtnKGUsdCl9dHJ5e3QoKGZ1bmN0aW9uKHQpe2IoZSx0KX0pLG4pfWNhdGNoKHQpe24odCl9fSh0LHRoaXMpfWoucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpqLF9zdGF0ZTpcInBlbmRpbmdcIixfdGhlbjpudWxsLF9kYXRhOnZvaWQgMCxfaGFuZGxlZDohMSx0aGVuOmZ1bmN0aW9uKHQsZSl7dmFyIG49e293bmVyOnRoaXMsdGhlbjpuZXcgdGhpcy5jb25zdHJ1Y3RvcihmKSxmdWxmaWxsZWQ6dCxyZWplY3RlZDplfTtyZXR1cm4hZSYmIXR8fHRoaXMuX2hhbmRsZWR8fCh0aGlzLl9oYW5kbGVkPSEwLFwicmVqZWN0ZWRcIj09PXRoaXMuX3N0YXRlJiZzJiZtKE8sdGhpcykpLFwiZnVsZmlsbGVkXCI9PT10aGlzLl9zdGF0ZXx8XCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGU/bShwLG4pOnRoaXMuX3RoZW4ucHVzaChuKSxuLnRoZW59LGNhdGNoOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX19LGouYWxsPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXt2YXIgcj1bXSxvPTA7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gbysrLGZ1bmN0aW9uKG4pe3JbdF09biwtLW98fGUocil9fWZvcih2YXIgYyxhPTA7YTx0Lmxlbmd0aDthKyspKGM9dFthXSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGhlbj9jLnRoZW4oaShhKSxuKTpyW2FdPWM7b3x8ZShyKX0pKX0sai5yYWNlPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLlwiKTtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7Zm9yKHZhciByLG89MDtvPHQubGVuZ3RoO28rKykocj10W29dKSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci50aGVuP3IudGhlbihlLG4pOmUocil9KSl9LGoucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09PW4odCkmJnQuY29uc3RydWN0b3I9PT1qP3Q6bmV3IGooKGZ1bmN0aW9uKGUpe2UodCl9KSl9LGoucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtuKHQpfSkpfTt2YXIgRT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2U6ajtmdW5jdGlvbiBQKHQsZSl7dmFyIG49ZS5mZXRjaCxyPWUuWE1MSHR0cFJlcXVlc3Qsbz1lLnRva2VuLGk9dDtyZXR1cm4gbyYmIWZ1bmN0aW9uKHQpe3JldHVybiB0LmluZGV4T2YoXCJraXQtdXBsb2FkLmNzc1wiKT4tMX0odCkmJihcIlVSTFNlYXJjaFBhcmFtc1wiaW4gd2luZG93PyhpPW5ldyBVUkwodCkpLnNlYXJjaFBhcmFtcy5zZXQoXCJ0b2tlblwiLG8pOmk9aStcIj90b2tlbj1cIitlbmNvZGVVUklDb21wb25lbnQobykpLGk9aS50b1N0cmluZygpLG5ldyBFKChmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pbihpLHttb2RlOlwiY29yc1wiLGNhY2hlOlwiZGVmYXVsdFwifSkudGhlbigoZnVuY3Rpb24odCl7aWYodC5vaylyZXR1cm4gdC50ZXh0KCk7dGhyb3cgbmV3IEVycm9yKFwiXCIpfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3QoZSl9KSkuY2F0Y2goZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbz1uZXcgcjtvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsKGZ1bmN0aW9uKCl7dGhpcy5yZXNwb25zZVRleHQ/dCh0aGlzLnJlc3BvbnNlVGV4dCk6ZShuZXcgRXJyb3IoXCJcIikpfSkpO1tcImFib3J0XCIsXCJlcnJvclwiLFwidGltZW91dFwiXS5tYXAoKGZ1bmN0aW9uKHQpe28uYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbigpe2UobmV3IEVycm9yKFwiXCIpKX0pKX0pKSxvLm9wZW4oXCJHRVRcIixpKSxvLnNlbmQoKX1lbHNle2UobmV3IEVycm9yKFwiXCIpKX19KSl9ZnVuY3Rpb24gXyh0LGUsbil7dmFyIHI9dDtyZXR1cm5bWy8odXJsXFwoXCI/KVxcLlxcLlxcL1xcLlxcLlxcL1xcLlxcLi9nLGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJcIi5jb25jYXQobikuY29uY2F0KGUpfV0sWy8odXJsXFwoXCI/KVxcLlxcLlxcL3dlYmZvbnRzL2csZnVuY3Rpb24odCxyKXtyZXR1cm5cIlwiLmNvbmNhdChyKS5jb25jYXQoZSxcIi9yZWxlYXNlcy92XCIpLmNvbmNhdChuLFwiL3dlYmZvbnRzXCIpfV0sWy8odXJsXFwoXCI/KWh0dHBzOlxcL1xcL2tpdC1mcmVlKFteLl0pKlxcLmZvbnRhd2Vzb21lXFwuY29tL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGU9byh0LDIpLG49ZVswXSxpPWVbMV07cj1yLnJlcGxhY2UobixpKX0pKSxyfWZ1bmN0aW9uIEYodCxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ZnVuY3Rpb24oKXt9LG89bi5kb2N1bWVudHx8byxpPWEuYmluZChhLG8sW1wiZmFcIixcImZhYlwiLFwiZmFzXCIsXCJmYXJcIixcImZhbFwiLFwiZmFkXCIsXCJmYWtcIl0pO3QuYXV0b0ExMXkuZW5hYmxlZCYmcihpKTt2YXIgdT10LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGgsZj1be2lkOlwiZmEtbWFpblwiLGFkZE9uOnZvaWQgMCx1cmw6dX1dO2lmKHQudjRzaGltJiZ0LnY0c2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjQtc2hpbXNcIixhZGRPbjpcIi12NC1zaGltc1wifSksdC52NUZvbnRGYWNlU2hpbSYmdC52NUZvbnRGYWNlU2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjUtZm9udC1mYWNlXCIsYWRkT246XCItdjUtZm9udC1mYWNlXCJ9KSx0LnY0Rm9udEZhY2VTaGltJiZ0LnY0Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1mb250LWZhY2VcIixhZGRPbjpcIi12NC1mb250LWZhY2VcIn0pLCF1JiZ0LmN1c3RvbUljb25zQ3NzUGF0aCl7dmFyIHM9dC5jdXN0b21JY29uc0Nzc1BhdGguaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xP3QuYmFzZVVybEtpdDp0LmJhc2VVcmwsbD1zK1wiL1wiK3QuY3VzdG9tSWNvbnNDc3NQYXRoO2YucHVzaCh7aWQ6XCJmYS1raXQtdXBsb2FkXCIsdXJsOmx9KX12YXIgZD1mLm1hcCgoZnVuY3Rpb24ocil7cmV0dXJuIG5ldyBFKChmdW5jdGlvbihvLGkpe3ZhciBhPXIudXJsfHxjKHQse2FkZE9uOnIuYWRkT24sbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSx1PXtpZDpyLmlkfSxmPXQuc3Vic2V0P3U6ZShlKGUoe30sbiksdSkse30se2Jhc2VVcmw6dC5iYXNlVXJsLHZlcnNpb246dC52ZXJzaW9uLGlkOnIuaWQsY29udGVudEZpbHRlcjpmdW5jdGlvbih0LGUpe3JldHVybiBfKHQsZS5iYXNlVXJsLGUudmVyc2lvbil9fSk7UChhLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe28oQyh0LGYpKX0pKS5jYXRjaChpKX0pKX0pKTtyZXR1cm4gRS5hbGwoZCl9ZnVuY3Rpb24gQyh0LGUpe3ZhciBuPWUuY29udGVudEZpbHRlcnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdH0scj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKHQsZSkpO3JldHVybiByLmFwcGVuZENoaWxkKG8pLHIubWVkaWE9XCJhbGxcIixlLmlkJiZyLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmci5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxyfWZ1bmN0aW9uIEkodCxuKXtuLmF1dG9BMTF5PXQuYXV0b0ExMXkuZW5hYmxlZCxcInByb1wiPT09dC5saWNlbnNlJiYobi5hdXRvRmV0Y2hTdmc9ITAsbi5mZXRjaFN2Z0Zyb209dC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL3N2Z3NcIixuLmZldGNoVXBsb2FkZWRTdmdGcm9tPXQudXBsb2Fkc1VybCk7dmFyIHI9W107cmV0dXJuIHQudjRzaGltLmVuYWJsZWQmJnIucHVzaChuZXcgRSgoZnVuY3Rpb24ocixvKXtQKGModCx7YWRkT246XCItdjQtc2hpbXNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3IoVSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS12NC1zaGltc1wifSkpKX0pKS5jYXRjaChvKX0pKSksci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AodC5zdWJzZXRQYXRoJiZ0LmJhc2VVcmwrXCIvXCIrdC5zdWJzZXRQYXRofHxjKHQse21pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7dmFyIG89VSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS1tYWluXCJ9KSk7cihmdW5jdGlvbih0LGUpe3ZhciBuPWUmJnZvaWQgMCE9PWUuYXV0b0ZldGNoU3ZnP2UuYXV0b0ZldGNoU3ZnOnZvaWQgMCxyPWUmJnZvaWQgMCE9PWUuYXV0b0ExMXk/ZS5hdXRvQTExeTp2b2lkIDA7dm9pZCAwIT09ciYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG8tYTExeVwiLHI/XCJ0cnVlXCI6XCJmYWxzZVwiKTtuJiYodC5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtYXV0by1mZXRjaC1zdmdcIikpLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC1zdmctZnJvbVwiLGUuZmV0Y2hTdmdGcm9tKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtZmV0Y2gtdXBsb2FkZWQtc3ZnLWZyb21cIixlLmZldGNoVXBsb2FkZWRTdmdGcm9tKSk7cmV0dXJuIHR9KG8sbikpfSkpLmNhdGNoKG8pfSkpKSxFLmFsbChyKX1mdW5jdGlvbiBVKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKSxyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpO3JldHVybiBuLmFwcGVuZENoaWxkKHIpLG4ucmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luXCIsZS5pZCYmbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGUuaWQpLGUmJmUuZGV0ZWN0aW5nQ29uZmxpY3RzJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJm4uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSksbn1mdW5jdGlvbiBUKHQpe3ZhciBlLG49W10scj1kb2N1bWVudCxvPXIuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsLGk9KG8/L15sb2FkZWR8XmMvOi9ebG9hZGVkfF5pfF5jLykudGVzdChyLnJlYWR5U3RhdGUpO2l8fHIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlPWZ1bmN0aW9uKCl7Zm9yKHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKSxpPTE7ZT1uLnNoaWZ0KCk7KWUoKX0pLGk/c2V0VGltZW91dCh0LDApOm4ucHVzaCh0KX1mdW5jdGlvbiBMKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyJiZuZXcgTXV0YXRpb25PYnNlcnZlcih0KS5vYnNlcnZlKGRvY3VtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfXRyeXtpZih3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcpe3ZhciBrPXdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyx4PXtkZXRlY3RpbmdDb25mbGljdHM6ay5kZXRlY3RDb25mbGljdHNVbnRpbCYmbmV3IERhdGU8PW5ldyBEYXRlKGsuZGV0ZWN0Q29uZmxpY3RzVW50aWwpLGRldGVjdGlvbklnbm9yZUF0dHI6XCJkYXRhLWZhLWRldGVjdGlvbi1pZ25vcmVcIixmZXRjaDp3aW5kb3cuZmV0Y2gsdG9rZW46ay50b2tlbixYTUxIdHRwUmVxdWVzdDp3aW5kb3cuWE1MSHR0cFJlcXVlc3QsZG9jdW1lbnQ6ZG9jdW1lbnR9LE09ZG9jdW1lbnQuY3VycmVudFNjcmlwdCxOPU0/TS5wYXJlbnRFbGVtZW50OmRvY3VtZW50LmhlYWQ7KGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVyblwianNcIj09PXQubWV0aG9kP0kodCxlKTpcImNzc1wiPT09dC5tZXRob2Q/Rih0LGUsKGZ1bmN0aW9uKHQpe1QodCksTCh0KX0pKTp2b2lkIDB9KShrLHgpLnRoZW4oKGZ1bmN0aW9uKHQpe3QubWFwKChmdW5jdGlvbih0KXt0cnl7Ti5pbnNlcnRCZWZvcmUodCxNP00ubmV4dFNpYmxpbmc6bnVsbCl9Y2F0Y2goZSl7Ti5hcHBlbmRDaGlsZCh0KX19KSkseC5kZXRlY3RpbmdDb25mbGljdHMmJk0mJlQoKGZ1bmN0aW9uKCl7TS5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSh4LmRldGVjdGlvbklnbm9yZUF0dHIpKTt2YXIgdD1mdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIGUmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxuLnNyYz1jKHQse2Jhc2VGaWxlbmFtZTpcImNvbmZsaWN0LWRldGVjdGlvblwiLGZpbGVTdWZmaXg6XCJqc1wiLHN1YmRpcjpcImpzXCIsbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxufShrLHgpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfSkpfX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFwiRm9udCBBd2Vzb21lIEtpdDpcIixcIiBcIikuY29uY2F0KHQpKX19KSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJylcbiAgICBzZWFyY2guY2xhc3NMaXN0LmFkZCgnc2VhcmNoJyk7XG5cbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ0dydWJIdWJidWInO1xuICAgIHNlYXJjaC50ZXh0Q29udGVudCA9ICdmaW5kIGEgR3J1Ykh1YmJ1YiBuZWFyIHlvdSc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFsnTXVtYmFpJywgJ0RlbGhpJywgJ0tvbGthdGEnLCAnQmFuZ2Fsb3JlJywgJ1B1bmUnLCAnQ2hlbm5haScsICdLb2xoYXB1cicsICdMdWNrbm93JywgJ0NvaW1iYXRvcmUnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkLnRleHRDb250ZW50ID0gbG9jYXRpb25zW2ldO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ2FkZHJlc3MnO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgc2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaCcpO1xuXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdHcnViSHViYnViJztcbiAgICBzZWFyY2gudGV4dENvbnRlbnQgPSAnZW50ZXIgeW91ciBmYXZvcml0ZSBpdGVtJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgaXRlbXMgPSBbJ1BpenphJywgJ0J1cmdlcicsICdTYW5kd2ljaCcsICdSb2xsJywgJ1B1ZGRpbmcnLCAnRnJpZXMnLCAnUGFuY2FrZScsICdDb2tlJywgJ0Nob2NvbGF0ZSddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ3ZhcmlhdGlvbnMnO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2ZvbnRhd2Vzb21lLmpzJztcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gJy4vbWFpblBhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51UGFnZS5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY29tbW9uRm9vdGVyLmpzJztcbmltcG9ydCBjcmVhdGVDaGVmcyBmcm9tICcuL2NoZWZQYWdlLmpzJztcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgY29udGFpbmVyID0gMDtcbmxldCBmb290ZXIgPSAwO1xubGV0IG5hdlRhYjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2VGFiKGZvY3VzKXtcbiAgICBuYXZUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2hlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICdNYWluUGFnZSc7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjaGVmcy50ZXh0Q29udGVudCA9ICdDaGVmcyc7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuICAgIGNoZWZzLmNsYXNzTGlzdC5hZGQoJ2NoZWZzLXBhZ2UnKTtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkV2ZW50KTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUV2ZW50KTtcbiAgICBjaGVmcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWZzRXZlbnQpO1xuICAgIGlmKGZvY3VzPT0nbWFpbi1wYWdlJyl7XG4gICAgICAgIGlmKEFycmF5LmZyb20obWVudS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUtZm9jdXMnKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9ZWxzZSBpZihBcnJheS5mcm9tKGNoZWZzLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIGNoZWZzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWZvY3VzJyk7XG4gICAgfWVsc2UgaWYoZm9jdXM9PSdtZW51LXBhZ2UnKXtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShtYWluLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1lbHNlIGlmKEFycmF5LmZyb20oY2hlZnMuY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlLWZvY3VzJykpe1xuICAgICAgICAgICAgY2hlZnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZm9jdXMnKTtcbiAgICB9ZWxzZSBpZihmb2N1cz09J2NoZWZzLXBhZ2UnKXtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShtYWluLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1lbHNlIGlmKEFycmF5LmZyb20obWVudS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUtZm9jdXMnKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWZzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1mb2N1cycpO1xuICAgIH1cbiAgICBuYXZUYWIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbmF2VGFiLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdlRhYi5hcHBlbmRDaGlsZChjaGVmcyk7XG4gICAgbmF2VGFiLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRvci10YWInKTtcbiAgICByZXR1cm4gbmF2VGFiO1xufVxuXG5mdW5jdGlvbiBtYWluRXZlbnQoKSB7XG4gICAgY29udGFpbmVyID0gY3JlYXRlTWFpbigpO1xuICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBuYXZUYWIgPSBjcmVhdGVOYXZUYWIoJ21haW4tcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBtZW51RXZlbnQoKSB7XG4gICAgY29udGFpbmVyID0gY3JlYXRlTWVudSgpO1xuICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBuYXZUYWIgPSBjcmVhdGVOYXZUYWIoJ21lbnUtcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBjaGVmc0V2ZW50KCkge1xuICAgIGNvbnRhaW5lciA9IGNyZWF0ZUNoZWZzKCk7XG4gICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG5hdlRhYiA9IGNyZWF0ZU5hdlRhYignY2hlZnMtcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5tYWluRXZlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==