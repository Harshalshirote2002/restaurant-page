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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
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
    justify-content: flex-end;
    background-color: rgb(127, 223, 255);
    font-family: 'ADLaM Display', cursive;
    position: sticky;
    top: 0;
}

.navigator-tab p{
    padding: 20px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navigator-tab p:hover{
    cursor: pointer;
}

.navigator-tab .active-focus{
    background-color: rgb(240, 247, 254);
    border-top-left-radius: 25px;    
    border-top-right-radius: 25px;
}

.container{
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 30vh;
    z-index: -1;
}

.search-bar-image{
    width: 32px;
}

.search{
    height: 28px;
    width: 350px;
    border-radius: 25px;
    font-size: 22px;
    background-color: rgb(127, 223, 255);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: start;
    gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
}

.search:hover{
    cursor: text;
}

main{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 20px;
}

main .location{
    height: 200px;
    width: 250px;
    background-color: rgb(127, 223, 255);
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 15px;
    padding: 10px;
    font-size: 28px;
    border-radius: 20px;
}

.location p:first-child,
.chef p:first-child,
.item p:first-child
{
    font-size: 20px;
}

.location p:last-child,
.chef p:last-child,
.item p:last-child
{
    font-size: 14px;
}

.item,
.chef
{
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

.announcement{
    width: 350px;
    font-size: 32px;
    padding-left: 10px;
    display: flex;
    align-items: flex-end;
    font-family: 'Castoro Titling', cursive;
}

footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    padding-top: 24px;
    padding-bottom: 10px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    font-size: 24px;
}

.fab{
    color: black;
    transition: 0.3s ease-in-out;
    font-size: 24px;
}

.fab:hover{
    transform: rotate(360deg) scale(1.2);
}

@media (max-width: 1000px) {
    header{
        height: 30vh;
    }

    .search{
        font-size: 0.8em;
    }
}

@media (max-width: 724px) {
    body{
        align-items: center;
    }

    .navigator-tab{
        justify-content: center;
    }

    .navigator-tab p{
        width: 120px;
    }

    header{
        flex-direction: column;
        gap: 10px;
        height: 10vh;
    }

    header .logo{
        display: none;
    }

    .search{
        font-size: 0.8em;
        width: 250px;
        padding-right: 24px;
    }

    .item,
    .chef
    {
        width: 250px;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAIA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yDAA+C;IAC/C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,oCAAoC;IACpC,qCAAqC;IACrC,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;IACR,2CAA2C;AAC/C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,QAAQ;IACR,iBAAiB;IACjB,oBAAoB;IACpB,2CAA2C;IAC3C,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,sBAAsB;QACtB,SAAS;QACT,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,YAAY;QACZ,mBAAmB;IACvB;;IAEA;;;QAGI,YAAY;IAChB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-image: url(../src/images/image2.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-direction: column;\n}\n\n.navigator-tab{\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    background-color: rgb(127, 223, 255);\n    font-family: 'ADLaM Display', cursive;\n    position: sticky;\n    top: 0;\n}\n\n.navigator-tab p{\n    padding: 20px;\n    width: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.navigator-tab p:hover{\n    cursor: pointer;\n}\n\n.navigator-tab .active-focus{\n    background-color: rgb(240, 247, 254);\n    border-top-left-radius: 25px;    \n    border-top-right-radius: 25px;\n}\n\n.container{\n    max-width: 70vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 42px;\n}\n\nheader{\n    height: 30vh;\n    width: calc(100% - 100px);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.logo{\n    height: 30vh;\n    z-index: -1;\n}\n\n.search-bar-image{\n    width: 32px;\n}\n\n.search{\n    height: 28px;\n    width: 350px;\n    border-radius: 25px;\n    font-size: 22px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: start;\n    gap: 8px;\n    font-family: 'Barlow Condensed', sans-serif;\n}\n\n.search:hover{\n    cursor: text;\n}\n\nmain{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 24px;\n    padding: 20px;\n}\n\nmain .location{\n    height: 200px;\n    width: 250px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 15px;\n    padding: 10px;\n    font-size: 28px;\n    border-radius: 20px;\n}\n\n.location p:first-child,\n.chef p:first-child,\n.item p:first-child\n{\n    font-size: 20px;\n}\n\n.location p:last-child,\n.chef p:last-child,\n.item p:last-child\n{\n    font-size: 14px;\n}\n\n.item,\n.chef\n{\n    height: 250px;\n    width: 500px;\n    background-color: rgb(127, 223, 255);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 28px;\n    border-radius: 20px;\n}\n\n.announcement{\n    width: 350px;\n    font-size: 32px;\n    padding-left: 10px;\n    display: flex;\n    align-items: flex-end;\n    font-family: 'Castoro Titling', cursive;\n}\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    gap: 8px;\n    padding-top: 24px;\n    padding-bottom: 10px;\n    font-family: 'Barlow Condensed', sans-serif;\n    font-weight: 600;\n    font-size: 24px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n    font-size: 24px;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.2);\n}\n\n@media (max-width: 1000px) {\n    header{\n        height: 30vh;\n    }\n\n    .search{\n        font-size: 0.8em;\n    }\n}\n\n@media (max-width: 724px) {\n    body{\n        align-items: center;\n    }\n\n    .navigator-tab{\n        justify-content: center;\n    }\n\n    .navigator-tab p{\n        width: 120px;\n    }\n\n    header{\n        flex-direction: column;\n        gap: 10px;\n        height: 10vh;\n    }\n\n    header .logo{\n        display: none;\n    }\n\n    .search{\n        font-size: 0.8em;\n        width: 250px;\n        padding-right: 24px;\n    }\n\n    .item,\n    .chef\n    {\n        width: 250px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_leaderboard1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/leaderboard1.png */ "./src/images/leaderboard1.png");


function createChefs() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const board = document.createElement('div');
    const logo = new Image();

    container.classList.add('container');
    logo.classList.add('logo');
    board.classList.add('announcement');

    logo.src = _images_leaderboard1_png__WEBPACK_IMPORTED_MODULE_0__;
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
    footer.textContent=`Copyright © ${new Date().getFullYear()} HarshalShirote`;
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
/* harmony import */ var _images_icon3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon3.png */ "./src/images/icon3.png");
/* harmony import */ var _images_location1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/location1.png */ "./src/images/location1.png");



function createMain() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = new Image();
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.src=_images_icon3_png__WEBPACK_IMPORTED_MODULE_0__;
    const location = new Image();
    location.src = _images_location1_png__WEBPACK_IMPORTED_MODULE_1__;
    location.classList.add('search-bar-image');
    search.textContent = 'find the nearest Eats-a-Mazing';
    search.appendChild(location);
    header.appendChild(logo);
    header.appendChild(search);
    container.appendChild(header);

    const main = document.createElement('main');

    const venues = [
        {
            location: 'Mumbai',
            address: 'juhu beach 1461',
            special: 'Lorem ipsum dolrat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Delhi',
            address: 'evergreen plaza, west delhi',
            special: 'Lorem ipsum a, local fresh pizzeria.'
        },
        {
            location: 'Bangalore',
            address: 'mega mall, downtown',
            special: 'great crust sandwich, Cum in eos saepe sit commodiiti, incidudunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Calcutta',
            address: 'mini mall, flour factory',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa,'
        },
        {
            location: 'Chennai',
            address: 'marine drive 954',
            special: ' elit. drive thru diner. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Pune',
            address: 'deccan pool 321',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. fresh fruit market iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Lucknow',
            address: 'ganga mall, westside',
            special: 'Lorem ipsum whatever you want! distinctio fugiat deleniti, incidunpsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Coimbatore',
            address: 'kest port, northside',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe siteniti, incidunt quos quaerat. Aliquam culpa, egyptian tacos with sauce! reprehenderit sunt consequuntur.'
        },
        {
            location: 'Kolhapur',
            address: 'ahead of the one behind',
            special: 'Nothing much here, its quite a small town. just the- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat'
        },

    ];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('location');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = venues[i].location;
        address.textContent = venues[i].address;
        content.textContent = venues[i].special;
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
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_icon4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon4.png */ "./src/images/icon4.png");



function createMenu() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = new Image();
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.src = _images_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    const menuLogo = new Image();
    menuLogo.src = _images_icon4_png__WEBPACK_IMPORTED_MODULE_1__;
    search.textContent = 'enter your favorite item';
    menuLogo.classList.add('search-bar-image')
    search.appendChild(menuLogo);
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

/***/ "./src/images/icon3.png":
/*!******************************!*\
  !*** ./src/images/icon3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0ee3a5bc11cf433f64b.png";

/***/ }),

/***/ "./src/images/icon4.png":
/*!******************************!*\
  !*** ./src/images/icon4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca1460e7a17e0ba85b81.png";

/***/ }),

/***/ "./src/images/icon5.png":
/*!******************************!*\
  !*** ./src/images/icon5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6c1cb60ff59a170be3ca.png";

/***/ }),

/***/ "./src/images/image2.jpg":
/*!*******************************!*\
  !*** ./src/images/image2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22ef05daa31ca0f70ed1.jpg";

/***/ }),

/***/ "./src/images/leaderboard1.png":
/*!*************************************!*\
  !*** ./src/images/leaderboard1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c66fd85c7482f14bff25.png";

/***/ }),

/***/ "./src/images/location1.png":
/*!**********************************!*\
  !*** ./src/images/location1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3b8b017b576dae10edd.png";

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "27a8d17ec40b2d8c48b4.png";

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
/* harmony import */ var _images_icon5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon5.png */ "./src/images/icon5.png");







const body = document.querySelector('body');
const head = document.querySelector('head');
const link = document.createElement('link');
link.rel='icon';
link.type='image/png';
link.href=_images_icon5_png__WEBPACK_IMPORTED_MODULE_6__;
head.appendChild(link);
let container = 0;
let footer = 0;
let navTab;

function createNavTab(focus){
    navTab = document.createElement('div');
    const main = document.createElement('p');
    const menu = document.createElement('p');
    const chefs = document.createElement('p');
    main.textContent = 'Home';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVJQUF1STtBQUN2SSwySEFBMkg7QUFDM0gsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0RBQVU7QUFDMUIsYUFBYSw0REFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0RBQVU7QUFDMUIsYUFBYSw0REFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0RBQVc7QUFDM0IsYUFBYSw0REFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jaGVmUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tbW9uRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb250YXdlc29tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2ltYWdlMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QURMYU0rRGlzcGxheSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXN0b3JvK1RpdGxpbmcmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdmlnYXRvci10YWJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcbiAgICBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4ubmF2aWdhdG9yLXRhYiBwe1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmlnYXRvci10YWIgcDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZpZ2F0b3ItdGFiIC5hY3RpdmUtZm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ3LCAyNTQpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7ICAgIFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuXG4uY29udGFpbmVye1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNDJweDtcbn1cblxuaGVhZGVye1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc2VhcmNoLWJhci1pbWFnZXtcbiAgICB3aWR0aDogMzJweDtcbn1cblxuLnNlYXJjaHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cblxuLnNlYXJjaDpob3ZlcntcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbm1haW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxubWFpbiAubG9jYXRpb257XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubG9jYXRpb24gcDpmaXJzdC1jaGlsZCxcbi5jaGVmIHA6Zmlyc3QtY2hpbGQsXG4uaXRlbSBwOmZpcnN0LWNoaWxkXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9jYXRpb24gcDpsYXN0LWNoaWxkLFxuLmNoZWYgcDpsYXN0LWNoaWxkLFxuLml0ZW0gcDpsYXN0LWNoaWxkXG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaXRlbSxcbi5jaGVmXG57XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmFubm91bmNlbWVudHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBmb250LWZhbWlseTogJ0Nhc3Rvcm8gVGl0bGluZycsIGN1cnNpdmU7XG59XG5cbmZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZhYntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mYWI6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgaGVhZGVye1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgfVxuXG4gICAgLnNlYXJjaHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjRweCkge1xuICAgIGJvZHl7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm5hdmlnYXRvci10YWJ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYXZpZ2F0b3ItdGFiIHB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG5cbiAgICBoZWFkZXJ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgIH1cblxuICAgIGhlYWRlciAubG9nb3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2VhcmNoe1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLml0ZW0sXG4gICAgLmNoZWZcbiAgICB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5REFBK0M7SUFDL0Msc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBOzs7UUFHSSxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDEwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BRExhTStEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhc3Rvcm8rVGl0bGluZyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2ltYWdlMi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2aWdhdG9yLXRhYntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6ICdBRExhTSBEaXNwbGF5JywgY3Vyc2l2ZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ubmF2aWdhdG9yLXRhYiBwe1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdG9yLXRhYiBwOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0b3ItdGFiIC5hY3RpdmUtZm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0NywgMjU0KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDsgICAgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0MnB4O1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dve1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1pbWFnZXtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5zZWFyY2h7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNlYXJjaDpob3ZlcntcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW4gLmxvY2F0aW9ue1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIyMywgMjU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5sb2NhdGlvbiBwOmZpcnN0LWNoaWxkLFxcbi5jaGVmIHA6Zmlyc3QtY2hpbGQsXFxuLml0ZW0gcDpmaXJzdC1jaGlsZFxcbntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gcDpsYXN0LWNoaWxkLFxcbi5jaGVmIHA6bGFzdC1jaGlsZCxcXG4uaXRlbSBwOmxhc3QtY2hpbGRcXG57XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLml0ZW0sXFxuLmNoZWZcXG57XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5hbm5vdW5jZW1lbnR7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZm9udC1mYW1pbHk6ICdDYXN0b3JvIFRpdGxpbmcnLCBjdXJzaXZlO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZmFie1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmZhYjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIGhlYWRlcntcXG4gICAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgfVxcblxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzI0cHgpIHtcXG4gICAgYm9keXtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5hdmlnYXRvci10YWJ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdG9yLXRhYiBwe1xcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlcntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIC5sb2dve1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0sXFxuICAgIC5jaGVmXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltYWdlMSBmcm9tICcuL2ltYWdlcy9sZWFkZXJib2FyZDEucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2hlZnMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50Jyk7XG5cbiAgICBsb2dvLnNyYyA9IGltYWdlMTtcbiAgICBib2FyZC50ZXh0Q29udGVudD0nQ2hlZnMgbGVhZGVyYm9hcmQnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGNoZWZzID0gWydUb20nLCAnTWF0dGhldycsICdEYW4nLCAnSmFjaycsICdXaWxsaWFtJywgJ01lZ2FuJywgJ0ppbScsICdLbGF1cycsICdTYXJhaCddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjaGVmJyk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC50ZXh0Q29udGVudCA9IGAjJHtpKzF9YDtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGNoZWZzW2ldO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudD1gQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIYXJzaGFsU2hpcm90ZWA7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0hhcnNoYWxzaGlyb3RlMjAwMic7XG4gICAgYS50YXJnZXQ9J19ibGFuayc7XG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhYicpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViJyk7XG4gICAgYS5hcHBlbmRDaGlsZChpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG4iLCJ3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcgPSB7XCJhc3luY0xvYWRpbmdcIjp7XCJlbmFibGVkXCI6ZmFsc2V9LFwiYXV0b0ExMXlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJiYXNlVXJsXCI6XCJodHRwczovL2thLWYuZm9udGF3ZXNvbWUuY29tXCIsXCJiYXNlVXJsS2l0XCI6XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb21cIixcImRldGVjdENvbmZsaWN0c1VudGlsXCI6bnVsbCxcImljb25VcGxvYWRzXCI6e30sXCJpZFwiOjgwNzYyNjczLFwibGljZW5zZVwiOlwiZnJlZVwiLFwibWV0aG9kXCI6XCJjc3NcIixcIm1pbmlmeVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInRva2VuXCI6XCI0YzUzNmE2YmQ1XCIsXCJ2NEZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY0c2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY1Rm9udEZhY2VTaGltXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcInZlcnNpb25cIjpcIjUuMTUuNFwifTtcbiFmdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwia2l0LWxvYWRlclwiLHQpOnQoKX0oKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gZShlKXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgbz1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj90KE9iamVjdChvKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cihlLHQsb1t0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvKSk6dChPYmplY3QobykpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBuKHQpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiByKHQsZSxuKXtyZXR1cm4oZT1mdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0LGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0fHxudWxsPT09dClyZXR1cm4gdDt2YXIgbj10W1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09bil7dmFyIHI9bi5jYWxsKHQsZXx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiByO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PWU/U3RyaW5nOk51bWJlcikodCl9KHQsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpTdHJpbmcoZSl9KGUpKWluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7dmFyIG49bnVsbD09dD9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9bil7dmFyIHIsbyxpLGMsYT1bXSx1PSEwLGY9ITE7dHJ5e2lmKGk9KG49bi5jYWxsKHQpKS5uZXh0LDA9PT1lKXtpZihPYmplY3QobikhPT1uKXJldHVybjt1PSExfWVsc2UgZm9yKDshKHU9KHI9aS5jYWxsKG4pKS5kb25lKSYmKGEucHVzaChyLnZhbHVlKSxhLmxlbmd0aCE9PWUpO3U9ITApO31jYXRjaCh0KXtmPSEwLG89dH1maW5hbGx5e3RyeXtpZighdSYmbnVsbCE9bi5yZXR1cm4mJihjPW4ucmV0dXJuKCksT2JqZWN0KGMpIT09YykpcmV0dXJufWZpbmFsbHl7aWYoZil0aHJvdyBvfX1yZXR1cm4gYX19KHQsZSl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBpKHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpcmV0dXJuIGkodCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGkodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBjKHQsZSl7dmFyIG49ZSYmZS5hZGRPbnx8XCJcIixyPWUmJmUuYmFzZUZpbGVuYW1lfHx0LmxpY2Vuc2UrbixvPWUmJmUubWluaWZ5P1wiLm1pblwiOlwiXCIsaT1lJiZlLmZpbGVTdWZmaXh8fHQubWV0aG9kLGM9ZSYmZS5zdWJkaXJ8fHQubWV0aG9kO3JldHVybiB0LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvXCIrYytcIi9cIityK28rXCIuXCIraX1mdW5jdGlvbiBhKHQsZSl7dmFyIG49ZXx8W1wiZmFcIl0scj1cIi5cIitBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKG4sXCIsLlwiKSxvPXQucXVlcnlTZWxlY3RvckFsbChyKTtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sKGZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt2YXIgcj0hZS5uZXh0RWxlbWVudFNpYmxpbmd8fCFlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJzci1vbmx5XCIpO2lmKG4mJnIpe3ZhciBvPXQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7by5pbm5lckhUTUw9bixvLmNsYXNzTGlzdC5hZGQoXCJzci1vbmx5XCIpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxlLm5leHRTaWJsaW5nKX19KSl9dmFyIHUsZj1mdW5jdGlvbigpe30scz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZ2b2lkIDAhPT1nbG9iYWwucHJvY2VzcyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCxsPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0VGltZW91dDpzZXRJbW1lZGlhdGUsZD1bXTtmdW5jdGlvbiBoKCl7Zm9yKHZhciB0PTA7dDxkLmxlbmd0aDt0KyspZFt0XVswXShkW3RdWzFdKTtkPVtdLHU9ITF9ZnVuY3Rpb24gbSh0LGUpe2QucHVzaChbdCxlXSksdXx8KHU9ITAsbChoLDApKX1mdW5jdGlvbiBwKHQpe3ZhciBlPXQub3duZXIsbj1lLl9zdGF0ZSxyPWUuX2RhdGEsbz10W25dLGk9dC50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pe249XCJmdWxmaWxsZWRcIjt0cnl7cj1vKHIpfWNhdGNoKHQpe2coaSx0KX19dihpLHIpfHwoXCJmdWxmaWxsZWRcIj09PW4mJmIoaSxyKSxcInJlamVjdGVkXCI9PT1uJiZnKGkscikpfWZ1bmN0aW9uIHYodCxlKXt2YXIgcjt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIik7aWYoZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PT1uKGUpKSl7dmFyIG89ZS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uY2FsbChlLChmdW5jdGlvbihuKXtyfHwocj0hMCxlPT09bj95KHQsbik6Yih0LG4pKX0pLChmdW5jdGlvbihlKXtyfHwocj0hMCxnKHQsZSkpfSkpLCEwfX1jYXRjaChlKXtyZXR1cm4gcnx8Zyh0LGUpLCEwfXJldHVybiExfWZ1bmN0aW9uIGIodCxlKXt0IT09ZSYmdih0LGUpfHx5KHQsZSl9ZnVuY3Rpb24geSh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShBLHQpKX1mdW5jdGlvbiBnKHQsZSl7XCJwZW5kaW5nXCI9PT10Ll9zdGF0ZSYmKHQuX3N0YXRlPVwic2V0dGxlZFwiLHQuX2RhdGE9ZSxtKFMsdCkpfWZ1bmN0aW9uIHcodCl7dC5fdGhlbj10Ll90aGVuLmZvckVhY2gocCl9ZnVuY3Rpb24gQSh0KXt0Ll9zdGF0ZT1cImZ1bGZpbGxlZFwiLHcodCl9ZnVuY3Rpb24gUyh0KXt0Ll9zdGF0ZT1cInJlamVjdGVkXCIsdyh0KSwhdC5faGFuZGxlZCYmcyYmZ2xvYmFsLnByb2Nlc3MuZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLHQuX2RhdGEsdCl9ZnVuY3Rpb24gTyh0KXtnbG9iYWwucHJvY2Vzcy5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLHQpfWZ1bmN0aW9uIGoodCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSByZXNvbHZlciBcIit0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO2lmKHRoaXMgaW5zdGFuY2VvZiBqPT0hMSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO3RoaXMuX3RoZW49W10sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQpe2coZSx0KX10cnl7dCgoZnVuY3Rpb24odCl7YihlLHQpfSksbil9Y2F0Y2godCl7bih0KX19KHQsdGhpcyl9ai5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmosX3N0YXRlOlwicGVuZGluZ1wiLF90aGVuOm51bGwsX2RhdGE6dm9pZCAwLF9oYW5kbGVkOiExLHRoZW46ZnVuY3Rpb24odCxlKXt2YXIgbj17b3duZXI6dGhpcyx0aGVuOm5ldyB0aGlzLmNvbnN0cnVjdG9yKGYpLGZ1bGZpbGxlZDp0LHJlamVjdGVkOmV9O3JldHVybiFlJiYhdHx8dGhpcy5faGFuZGxlZHx8KHRoaXMuX2hhbmRsZWQ9ITAsXCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGUmJnMmJm0oTyx0aGlzKSksXCJmdWxmaWxsZWRcIj09PXRoaXMuX3N0YXRlfHxcInJlamVjdGVkXCI9PT10aGlzLl9zdGF0ZT9tKHAsbik6dGhpcy5fdGhlbi5wdXNoKG4pLG4udGhlbn0sY2F0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX0sai5hbGw9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS5cIik7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe3ZhciByPVtdLG89MDtmdW5jdGlvbiBpKHQpe3JldHVybiBvKyssZnVuY3Rpb24obil7clt0XT1uLC0tb3x8ZShyKX19Zm9yKHZhciBjLGE9MDthPHQubGVuZ3RoO2ErKykoYz10W2FdKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aGVuP2MudGhlbihpKGEpLG4pOnJbYV09YztvfHxlKHIpfSkpfSxqLnJhY2U9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIsbz0wO288dC5sZW5ndGg7bysrKShyPXRbb10pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnRoZW4/ci50aGVuKGUsbik6ZShyKX0pKX0sai5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT09bih0KSYmdC5jb25zdHJ1Y3Rvcj09PWo/dDpuZXcgaigoZnVuY3Rpb24oZSl7ZSh0KX0pKX0sai5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe24odCl9KSl9O3ZhciBFPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZTpqO2Z1bmN0aW9uIFAodCxlKXt2YXIgbj1lLmZldGNoLHI9ZS5YTUxIdHRwUmVxdWVzdCxvPWUudG9rZW4saT10O3JldHVybiBvJiYhZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xfSh0KSYmKFwiVVJMU2VhcmNoUGFyYW1zXCJpbiB3aW5kb3c/KGk9bmV3IFVSTCh0KSkuc2VhcmNoUGFyYW1zLnNldChcInRva2VuXCIsbyk6aT1pK1wiP3Rva2VuPVwiK2VuY29kZVVSSUNvbXBvbmVudChvKSksaT1pLnRvU3RyaW5nKCksbmV3IEUoKGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbiluKGkse21vZGU6XCJjb3JzXCIsY2FjaGU6XCJkZWZhdWx0XCJ9KS50aGVuKChmdW5jdGlvbih0KXtpZih0Lm9rKXJldHVybiB0LnRleHQoKTt0aHJvdyBuZXcgRXJyb3IoXCJcIil9KSkudGhlbigoZnVuY3Rpb24oZSl7dChlKX0pKS5jYXRjaChlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBvPW5ldyByO28uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwoZnVuY3Rpb24oKXt0aGlzLnJlc3BvbnNlVGV4dD90KHRoaXMucmVzcG9uc2VUZXh0KTplKG5ldyBFcnJvcihcIlwiKSl9KSk7W1wiYWJvcnRcIixcImVycm9yXCIsXCJ0aW1lb3V0XCJdLm1hcCgoZnVuY3Rpb24odCl7by5hZGRFdmVudExpc3RlbmVyKHQsKGZ1bmN0aW9uKCl7ZShuZXcgRXJyb3IoXCJcIikpfSkpfSkpLG8ub3BlbihcIkdFVFwiLGkpLG8uc2VuZCgpfWVsc2V7ZShuZXcgRXJyb3IoXCJcIikpfX0pKX1mdW5jdGlvbiBfKHQsZSxuKXt2YXIgcj10O3JldHVybltbLyh1cmxcXChcIj8pXFwuXFwuXFwvXFwuXFwuXFwvXFwuXFwuL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XSxbLyh1cmxcXChcIj8pXFwuXFwuXFwvd2ViZm9udHMvZyxmdW5jdGlvbih0LHIpe3JldHVyblwiXCIuY29uY2F0KHIpLmNvbmNhdChlLFwiL3JlbGVhc2VzL3ZcIikuY29uY2F0KG4sXCIvd2ViZm9udHNcIil9XSxbLyh1cmxcXChcIj8paHR0cHM6XFwvXFwva2l0LWZyZWUoW14uXSkqXFwuZm9udGF3ZXNvbWVcXC5jb20vZyxmdW5jdGlvbih0LG4pe3JldHVyblwiXCIuY29uY2F0KG4pLmNvbmNhdChlKX1dXS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1vKHQsMiksbj1lWzBdLGk9ZVsxXTtyPXIucmVwbGFjZShuLGkpfSkpLHJ9ZnVuY3Rpb24gRih0LG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpmdW5jdGlvbigpe30sbz1uLmRvY3VtZW50fHxvLGk9YS5iaW5kKGEsbyxbXCJmYVwiLFwiZmFiXCIsXCJmYXNcIixcImZhclwiLFwiZmFsXCIsXCJmYWRcIixcImZha1wiXSk7dC5hdXRvQTExeS5lbmFibGVkJiZyKGkpO3ZhciB1PXQuc3Vic2V0UGF0aCYmdC5iYXNlVXJsK1wiL1wiK3Quc3Vic2V0UGF0aCxmPVt7aWQ6XCJmYS1tYWluXCIsYWRkT246dm9pZCAwLHVybDp1fV07aWYodC52NHNoaW0mJnQudjRzaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1zaGltc1wiLGFkZE9uOlwiLXY0LXNoaW1zXCJ9KSx0LnY1Rm9udEZhY2VTaGltJiZ0LnY1Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NS1mb250LWZhY2VcIixhZGRPbjpcIi12NS1mb250LWZhY2VcIn0pLHQudjRGb250RmFjZVNoaW0mJnQudjRGb250RmFjZVNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY0LWZvbnQtZmFjZVwiLGFkZE9uOlwiLXY0LWZvbnQtZmFjZVwifSksIXUmJnQuY3VzdG9tSWNvbnNDc3NQYXRoKXt2YXIgcz10LmN1c3RvbUljb25zQ3NzUGF0aC5pbmRleE9mKFwia2l0LXVwbG9hZC5jc3NcIik+LTE/dC5iYXNlVXJsS2l0OnQuYmFzZVVybCxsPXMrXCIvXCIrdC5jdXN0b21JY29uc0Nzc1BhdGg7Zi5wdXNoKHtpZDpcImZhLWtpdC11cGxvYWRcIix1cmw6bH0pfXZhciBkPWYubWFwKChmdW5jdGlvbihyKXtyZXR1cm4gbmV3IEUoKGZ1bmN0aW9uKG8saSl7dmFyIGE9ci51cmx8fGModCx7YWRkT246ci5hZGRPbixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLHU9e2lkOnIuaWR9LGY9dC5zdWJzZXQ/dTplKGUoZSh7fSxuKSx1KSx7fSx7YmFzZVVybDp0LmJhc2VVcmwsdmVyc2lvbjp0LnZlcnNpb24saWQ6ci5pZCxjb250ZW50RmlsdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIF8odCxlLmJhc2VVcmwsZS52ZXJzaW9uKX19KTtQKGEsbikudGhlbigoZnVuY3Rpb24odCl7byhDKHQsZikpfSkpLmNhdGNoKGkpfSkpfSkpO3JldHVybiBFLmFsbChkKX1mdW5jdGlvbiBDKHQsZSl7dmFyIG49ZS5jb250ZW50RmlsdGVyfHxmdW5jdGlvbih0LGUpe3JldHVybiB0fSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4odCxlKSk7cmV0dXJuIHIuYXBwZW5kQ2hpbGQobyksci5tZWRpYT1cImFsbFwiLGUuaWQmJnIuc2V0QXR0cmlidXRlKFwiaWRcIixlLmlkKSxlJiZlLmRldGVjdGluZ0NvbmZsaWN0cyYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZyLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLHJ9ZnVuY3Rpb24gSSh0LG4pe24uYXV0b0ExMXk9dC5hdXRvQTExeS5lbmFibGVkLFwicHJvXCI9PT10LmxpY2Vuc2UmJihuLmF1dG9GZXRjaFN2Zz0hMCxuLmZldGNoU3ZnRnJvbT10LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvc3Znc1wiLG4uZmV0Y2hVcGxvYWRlZFN2Z0Zyb209dC51cGxvYWRzVXJsKTt2YXIgcj1bXTtyZXR1cm4gdC52NHNoaW0uZW5hYmxlZCYmci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AoYyh0LHthZGRPbjpcIi12NC1zaGltc1wiLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7cihVKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLXY0LXNoaW1zXCJ9KSkpfSkpLmNhdGNoKG8pfSkpKSxyLnB1c2gobmV3IEUoKGZ1bmN0aW9uKHIsbyl7UCh0LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGh8fGModCx7bWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxuKS50aGVuKChmdW5jdGlvbih0KXt2YXIgbz1VKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLW1haW5cIn0pKTtyKGZ1bmN0aW9uKHQsZSl7dmFyIG49ZSYmdm9pZCAwIT09ZS5hdXRvRmV0Y2hTdmc/ZS5hdXRvRmV0Y2hTdmc6dm9pZCAwLHI9ZSYmdm9pZCAwIT09ZS5hdXRvQTExeT9lLmF1dG9BMTF5OnZvaWQgMDt2b2lkIDAhPT1yJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtYXV0by1hMTF5XCIscj9cInRydWVcIjpcImZhbHNlXCIpO24mJih0LnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1hdXRvLWZldGNoLXN2Z1wiKSksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZldGNoLXN2Zy1mcm9tXCIsZS5mZXRjaFN2Z0Zyb20pLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC11cGxvYWRlZC1zdmctZnJvbVwiLGUuZmV0Y2hVcGxvYWRlZFN2Z0Zyb20pKTtyZXR1cm4gdH0obyxuKSl9KSkuY2F0Y2gobyl9KSkpLEUuYWxsKHIpfWZ1bmN0aW9uIFUodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpLHI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCk7cmV0dXJuIG4uYXBwZW5kQ2hpbGQociksbi5yZWZlcnJlclBvbGljeT1cInN0cmljdC1vcmlnaW5cIixlLmlkJiZuLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxufWZ1bmN0aW9uIFQodCl7dmFyIGUsbj1bXSxyPWRvY3VtZW50LG89ci5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwsaT0obz8vXmxvYWRlZHxeYy86L15sb2FkZWR8Xml8XmMvKS50ZXN0KHIucmVhZHlTdGF0ZSk7aXx8ci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGU9ZnVuY3Rpb24oKXtmb3Ioci5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpLGk9MTtlPW4uc2hpZnQoKTspZSgpfSksaT9zZXRUaW1lb3V0KHQsMCk6bi5wdXNoKHQpfWZ1bmN0aW9uIEwodCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXImJm5ldyBNdXRhdGlvbk9ic2VydmVyKHQpLm9ic2VydmUoZG9jdW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9dHJ5e2lmKHdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyl7dmFyIGs9d2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnLHg9e2RldGVjdGluZ0NvbmZsaWN0czprLmRldGVjdENvbmZsaWN0c1VudGlsJiZuZXcgRGF0ZTw9bmV3IERhdGUoay5kZXRlY3RDb25mbGljdHNVbnRpbCksZGV0ZWN0aW9uSWdub3JlQXR0cjpcImRhdGEtZmEtZGV0ZWN0aW9uLWlnbm9yZVwiLGZldGNoOndpbmRvdy5mZXRjaCx0b2tlbjprLnRva2VuLFhNTEh0dHBSZXF1ZXN0OndpbmRvdy5YTUxIdHRwUmVxdWVzdCxkb2N1bWVudDpkb2N1bWVudH0sTT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LE49TT9NLnBhcmVudEVsZW1lbnQ6ZG9jdW1lbnQuaGVhZDsoZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuXCJqc1wiPT09dC5tZXRob2Q/SSh0LGUpOlwiY3NzXCI9PT10Lm1ldGhvZD9GKHQsZSwoZnVuY3Rpb24odCl7VCh0KSxMKHQpfSkpOnZvaWQgMH0pKGsseCkudGhlbigoZnVuY3Rpb24odCl7dC5tYXAoKGZ1bmN0aW9uKHQpe3RyeXtOLmluc2VydEJlZm9yZSh0LE0/TS5uZXh0U2libGluZzpudWxsKX1jYXRjaChlKXtOLmFwcGVuZENoaWxkKHQpfX0pKSx4LmRldGVjdGluZ0NvbmZsaWN0cyYmTSYmVCgoZnVuY3Rpb24oKXtNLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKHguZGV0ZWN0aW9uSWdub3JlQXR0cikpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gZSYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZuLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLG4uc3JjPWModCx7YmFzZUZpbGVuYW1lOlwiY29uZmxpY3QtZGV0ZWN0aW9uXCIsZmlsZVN1ZmZpeDpcImpzXCIsc3ViZGlyOlwianNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG59KGsseCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX0pKX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChcIkZvbnQgQXdlc29tZSBLaXQ6XCIsXCIgXCIpLmNvbmNhdCh0KSl9KSl9fWNhdGNoKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfX0pKTsiLCJpbXBvcnQgaW1hZ2UxIGZyb20gJy4vaW1hZ2VzL2ljb24zLnBuZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4vaW1hZ2VzL2xvY2F0aW9uMS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gnKTtcblxuICAgIGxvZ28uc3JjPWltYWdlMTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uLnNyYyA9IGltYWdlMjtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWltYWdlJyk7XG4gICAgc2VhcmNoLnRleHRDb250ZW50ID0gJ2ZpbmQgdGhlIG5lYXJlc3QgRWF0cy1hLU1hemluZyc7XG4gICAgc2VhcmNoLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgdmVudWVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsb2NhdGlvbjogJ011bWJhaScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnanVodSBiZWFjaCAxNDYxJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdMb3JlbSBpcHN1bSBkb2xyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnRGVsaGknLFxuICAgICAgICAgICAgYWRkcmVzczogJ2V2ZXJncmVlbiBwbGF6YSwgd2VzdCBkZWxoaScsXG4gICAgICAgICAgICBzcGVjaWFsOiAnTG9yZW0gaXBzdW0gYSwgbG9jYWwgZnJlc2ggcGl6emVyaWEuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsb2NhdGlvbjogJ0JhbmdhbG9yZScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnbWVnYSBtYWxsLCBkb3dudG93bicsXG4gICAgICAgICAgICBzcGVjaWFsOiAnZ3JlYXQgY3J1c3Qgc2FuZHdpY2gsIEN1bSBpbiBlb3Mgc2FlcGUgc2l0IGNvbW1vZGlpdGksIGluY2lkdWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2FsY3V0dGEnLFxuICAgICAgICAgICAgYWRkcmVzczogJ21pbmkgbWFsbCwgZmxvdXIgZmFjdG9yeScsXG4gICAgICAgICAgICBzcGVjaWFsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBpbiBlb3Mgc2FlcGUgc2l0IGNvbW1vZGkgZGlzdGluY3RpbyBmdWdpYXQgZGVsZW5pdGksIGluY2lkdW50IHF1b3MgcXVhZXJhdC4gQWxpcXVhbSBjdWxwYSwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2hlbm5haScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnbWFyaW5lIGRyaXZlIDk1NCcsXG4gICAgICAgICAgICBzcGVjaWFsOiAnIGVsaXQuIGRyaXZlIHRocnUgZGluZXIuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnUHVuZScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnZGVjY2FuIHBvb2wgMzIxJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtIGluIGVvcyBzYWVwZSBzaXQgY29tbW9kaSBkaXN0aW5jdGlvIGZ1Z2lhdCBkZWxlbml0aSwgaW5jaWR1bnQgcXVvcyBxdWFlcmF0LiBmcmVzaCBmcnVpdCBtYXJrZXQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTHVja25vdycsXG4gICAgICAgICAgICBhZGRyZXNzOiAnZ2FuZ2EgbWFsbCwgd2VzdHNpZGUnLFxuICAgICAgICAgICAgc3BlY2lhbDogJ0xvcmVtIGlwc3VtIHdoYXRldmVyIHlvdSB3YW50ISBkaXN0aW5jdGlvIGZ1Z2lhdCBkZWxlbml0aSwgaW5jaWR1bnBzYSBpbmNpZHVudCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdDb2ltYmF0b3JlJyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdrZXN0IHBvcnQsIG5vcnRoc2lkZScsXG4gICAgICAgICAgICBzcGVjaWFsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBpbiBlb3Mgc2FlcGUgc2l0ZW5pdGksIGluY2lkdW50IHF1b3MgcXVhZXJhdC4gQWxpcXVhbSBjdWxwYSwgZWd5cHRpYW4gdGFjb3Mgd2l0aCBzYXVjZSEgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnS29saGFwdXInLFxuICAgICAgICAgICAgYWRkcmVzczogJ2FoZWFkIG9mIHRoZSBvbmUgYmVoaW5kJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdOb3RoaW5nIG11Y2ggaGVyZSwgaXRzIHF1aXRlIGEgc21hbGwgdG93bi4ganVzdCB0aGUtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQnXG4gICAgICAgIH0sXG5cbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgICAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmQudGV4dENvbnRlbnQgPSB2ZW51ZXNbaV0ubG9jYXRpb247XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSB2ZW51ZXNbaV0uYWRkcmVzcztcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHZlbnVlc1tpXS5zcGVjaWFsO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBpbWFnZTEgZnJvbSAnLi9pbWFnZXMvbWVudS5wbmcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuL2ltYWdlcy9pY29uNC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gnKTtcblxuICAgIGxvZ28uc3JjID0gaW1hZ2UxO1xuICAgIGNvbnN0IG1lbnVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUxvZ28uc3JjID0gaW1hZ2UyO1xuICAgIHNlYXJjaC50ZXh0Q29udGVudCA9ICdlbnRlciB5b3VyIGZhdm9yaXRlIGl0ZW0nO1xuICAgIG1lbnVMb2dvLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItaW1hZ2UnKVxuICAgIHNlYXJjaC5hcHBlbmRDaGlsZChtZW51TG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGl0ZW1zID0gWydQaXp6YScsICdCdXJnZXInLCAnU2FuZHdpY2gnLCAnUm9sbCcsICdQdWRkaW5nJywgJ0ZyaWVzJywgJ1BhbmNha2UnLCAnQ29rZScsICdDaG9jb2xhdGUnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmQudGV4dENvbnRlbnQgPSBpdGVtc1tpXTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICd2YXJpYXRpb25zJztcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtIGluIGVvcyBzYWVwZSBzaXQgY29tbW9kaSBkaXN0aW5jdGlvIGZ1Z2lhdCBkZWxlbml0aSwgaW5jaWR1bnQgcXVvcyBxdWFlcmF0LiBBbGlxdWFtIGN1bHBhLCBpcHNhIGluY2lkdW50IGl1c3RvIGRvbG9yZSBhbWV0IHJlcHJlaGVuZGVyaXQgc3VudCBjb25zZXF1dW50dXIuJztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9mb250YXdlc29tZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tICcuL21haW5QYWdlLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudVBhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2NvbW1vbkZvb3Rlci5qcyc7XG5pbXBvcnQgY3JlYXRlQ2hlZnMgZnJvbSAnLi9jaGVmUGFnZS5qcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ltYWdlcy9pY29uNS5wbmcnO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xubGluay5yZWw9J2ljb24nO1xubGluay50eXBlPSdpbWFnZS9wbmcnO1xubGluay5ocmVmPWljb247XG5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xubGV0IGNvbnRhaW5lciA9IDA7XG5sZXQgZm9vdGVyID0gMDtcbmxldCBuYXZUYWI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdlRhYihmb2N1cyl7XG4gICAgbmF2VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGNoZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjaGVmcy50ZXh0Q29udGVudCA9ICdDaGVmcyc7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuICAgIGNoZWZzLmNsYXNzTGlzdC5hZGQoJ2NoZWZzLXBhZ2UnKTtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkV2ZW50KTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUV2ZW50KTtcbiAgICBjaGVmcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWZzRXZlbnQpO1xuICAgIGlmKGZvY3VzPT0nbWFpbi1wYWdlJyl7XG4gICAgICAgIGlmKEFycmF5LmZyb20obWVudS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUtZm9jdXMnKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9ZWxzZSBpZihBcnJheS5mcm9tKGNoZWZzLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIGNoZWZzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWZvY3VzJyk7XG4gICAgfWVsc2UgaWYoZm9jdXM9PSdtZW51LXBhZ2UnKXtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShtYWluLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1lbHNlIGlmKEFycmF5LmZyb20oY2hlZnMuY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlLWZvY3VzJykpe1xuICAgICAgICAgICAgY2hlZnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZm9jdXMnKTtcbiAgICB9ZWxzZSBpZihmb2N1cz09J2NoZWZzLXBhZ2UnKXtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShtYWluLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1lbHNlIGlmKEFycmF5LmZyb20obWVudS5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUtZm9jdXMnKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWZzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1mb2N1cycpO1xuICAgIH1cbiAgICBuYXZUYWIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbmF2VGFiLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdlRhYi5hcHBlbmRDaGlsZChjaGVmcyk7XG4gICAgbmF2VGFiLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRvci10YWInKTtcbiAgICByZXR1cm4gbmF2VGFiO1xufVxuXG5mdW5jdGlvbiBtYWluRXZlbnQoKSB7XG4gICAgY29udGFpbmVyID0gY3JlYXRlTWFpbigpO1xuICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBuYXZUYWIgPSBjcmVhdGVOYXZUYWIoJ21haW4tcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBtZW51RXZlbnQoKSB7XG4gICAgY29udGFpbmVyID0gY3JlYXRlTWVudSgpO1xuICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBuYXZUYWIgPSBjcmVhdGVOYXZUYWIoJ21lbnUtcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBjaGVmc0V2ZW50KCkge1xuICAgIGNvbnRhaW5lciA9IGNyZWF0ZUNoZWZzKCk7XG4gICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG5hdlRhYiA9IGNyZWF0ZU5hdlRhYignY2hlZnMtcGFnZScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2VGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5tYWluRXZlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==