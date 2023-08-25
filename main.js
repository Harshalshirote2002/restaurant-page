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






const body = document.querySelector('body');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVJQUF1STtBQUN2SSwySEFBMkg7QUFDM0gsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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O0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVTtBQUMxQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVTtBQUMxQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQixhQUFhLDREQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NoZWZQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvaW1hZ2UyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDEwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BRExhTStEaXNwbGF5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhc3Rvcm8rVGl0bGluZyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2aWdhdG9yLXRhYntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGZvbnQtZmFtaWx5OiAnQURMYU0gRGlzcGxheScsIGN1cnNpdmU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG59XG5cbi5uYXZpZ2F0b3ItdGFiIHB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2aWdhdG9yLXRhYiBwOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmlnYXRvci10YWIgLmFjdGl2ZS1mb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDcsIDI1NCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDsgICAgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MnB4O1xufVxuXG5oZWFkZXJ7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb3tcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5zZWFyY2gtYmFyLWltYWdle1xuICAgIHdpZHRoOiAzMnB4O1xufVxuXG4uc2VhcmNoe1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VhcmNoOmhvdmVye1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxubWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5tYWluIC5sb2NhdGlvbntcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5sb2NhdGlvbiBwOmZpcnN0LWNoaWxkLFxuLmNoZWYgcDpmaXJzdC1jaGlsZCxcbi5pdGVtIHA6Zmlyc3QtY2hpbGRcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2NhdGlvbiBwOmxhc3QtY2hpbGQsXG4uY2hlZiBwOmxhc3QtY2hpbGQsXG4uaXRlbSBwOmxhc3QtY2hpbGRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pdGVtLFxuLmNoZWZcbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYW5ub3VuY2VtZW50e1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FzdG9ybyBUaXRsaW5nJywgY3Vyc2l2ZTtcbn1cblxuZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmFie1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZhYjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICB9XG5cbiAgICAuc2VhcmNoe1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyNHB4KSB7XG4gICAgYm9keXtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubmF2aWdhdG9yLXRhYntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm5hdmlnYXRvci10YWIgcHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIGhlYWRlcntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgfVxuXG4gICAgaGVhZGVyIC5sb2dve1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWFyY2h7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAuaXRlbSxcbiAgICAuY2hlZlxuICAgIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlEQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7OztRQUdJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FzdG9ybytUaXRsaW5nJmRpc3BsYXk9c3dhcCcpO1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWFnZXMvaW1hZ2UyLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXZpZ2F0b3ItdGFie1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xcbiAgICBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5uYXZpZ2F0b3ItdGFiIHB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0b3ItdGFiIHA6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRvci10YWIgLmFjdGl2ZS1mb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ3LCAyNTQpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4OyAgICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIG1heC13aWR0aDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDQycHg7XFxufVxcblxcbmhlYWRlcntcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ297XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5zZWFyY2gtYmFyLWltYWdle1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubWFpbiAubG9jYXRpb257XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjIzLCAyNTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHA6Zmlyc3QtY2hpbGQsXFxuLmNoZWYgcDpmaXJzdC1jaGlsZCxcXG4uaXRlbSBwOmZpcnN0LWNoaWxkXFxue1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5sb2NhdGlvbiBwOmxhc3QtY2hpbGQsXFxuLmNoZWYgcDpsYXN0LWNoaWxkLFxcbi5pdGVtIHA6bGFzdC1jaGlsZFxcbntcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaXRlbSxcXG4uY2hlZlxcbntcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmFubm91bmNlbWVudHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmb250LWZhbWlseTogJ0Nhc3Rvcm8gVGl0bGluZycsIGN1cnNpdmU7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5mYWJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZmFiOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgaGVhZGVye1xcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB9XFxuXFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjRweCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdG9yLXRhYntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0b3ItdGFiIHB7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVye1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgLmxvZ297XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gICAgfVxcblxcbiAgICAuaXRlbSxcXG4gICAgLmNoZWZcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1hZ2UxIGZyb20gJy4vaW1hZ2VzL2xlYWRlcmJvYXJkMS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGVmcygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnQnKTtcblxuICAgIGxvZ28uc3JjID0gaW1hZ2UxO1xuICAgIGJvYXJkLnRleHRDb250ZW50PSdDaGVmcyBsZWFkZXJib2FyZCc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgY2hlZnMgPSBbJ1RvbScsICdNYXR0aGV3JywgJ0RhbicsICdKYWNrJywgJ1dpbGxpYW0nLCAnTWVnYW4nLCAnSmltJywgJ0tsYXVzJywgJ1NhcmFoJ107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NoZWYnKTtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkLnRleHRDb250ZW50ID0gYCMke2krMX1gO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gY2hlZnNbaV07XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBpbiBlb3Mgc2FlcGUgc2l0IGNvbW1vZGkgZGlzdGluY3RpbyBmdWdpYXQgZGVsZW5pdGksIGluY2lkdW50IHF1b3MgcXVhZXJhdC4gQWxpcXVhbSBjdWxwYSwgaXBzYSBpbmNpZHVudCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLic7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50PWBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEhhcnNoYWxTaGlyb3RlYDtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vSGFyc2hhbHNoaXJvdGUyMDAyJztcbiAgICBhLnRhcmdldD0nX2JsYW5rJztcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmFiJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcbiAgICBhLmFwcGVuZENoaWxkKGkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbiIsIndpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyA9IHtcImFzeW5jTG9hZGluZ1wiOntcImVuYWJsZWRcIjpmYWxzZX0sXCJhdXRvQTExeVwiOntcImVuYWJsZWRcIjp0cnVlfSxcImJhc2VVcmxcIjpcImh0dHBzOi8va2EtZi5mb250YXdlc29tZS5jb21cIixcImJhc2VVcmxLaXRcIjpcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbVwiLFwiZGV0ZWN0Q29uZmxpY3RzVW50aWxcIjpudWxsLFwiaWNvblVwbG9hZHNcIjp7fSxcImlkXCI6ODA3NjI2NzMsXCJsaWNlbnNlXCI6XCJmcmVlXCIsXCJtZXRob2RcIjpcImNzc1wiLFwibWluaWZ5XCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidG9rZW5cIjpcIjRjNTM2YTZiZDVcIixcInY0Rm9udEZhY2VTaGltXCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidjRzaGltXCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidjVGb250RmFjZVNoaW1cIjp7XCJlbmFibGVkXCI6ZmFsc2V9LFwidmVyc2lvblwiOlwiNS4xNS40XCJ9O1xuIWZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJraXQtbG9hZGVyXCIsdCk6dCgpfSgoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSl7dmFyIG49T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYocj1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn1mdW5jdGlvbiBlKGUpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBvPW51bGwhPWFyZ3VtZW50c1tuXT9hcmd1bWVudHNbbl06e307biUyP3QoT2JqZWN0KG8pLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtyKGUsdCxvW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG8pKTp0KE9iamVjdChvKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIG4odCl7cmV0dXJuKG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIHIodCxlLG4pe3JldHVybihlPWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQsZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHR8fG51bGw9PT10KXJldHVybiB0O3ZhciBuPXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1uKXt2YXIgcj1uLmNhbGwodCxlfHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpcmV0dXJuIHI7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09ZT9TdHJpbmc6TnVtYmVyKSh0KX0odCxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZT9lOlN0cmluZyhlKX0oZSkpaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1uLHR9ZnVuY3Rpb24gbyh0LGUpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSh0KXx8ZnVuY3Rpb24odCxlKXt2YXIgbj1udWxsPT10P251bGw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZihudWxsIT1uKXt2YXIgcixvLGksYyxhPVtdLHU9ITAsZj0hMTt0cnl7aWYoaT0obj1uLmNhbGwodCkpLm5leHQsMD09PWUpe2lmKE9iamVjdChuKSE9PW4pcmV0dXJuO3U9ITF9ZWxzZSBmb3IoOyEodT0ocj1pLmNhbGwobikpLmRvbmUpJiYoYS5wdXNoKHIudmFsdWUpLGEubGVuZ3RoIT09ZSk7dT0hMCk7fWNhdGNoKHQpe2Y9ITAsbz10fWZpbmFsbHl7dHJ5e2lmKCF1JiZudWxsIT1uLnJldHVybiYmKGM9bi5yZXR1cm4oKSxPYmplY3QoYykhPT1jKSlyZXR1cm59ZmluYWxseXtpZihmKXRocm93IG99fXJldHVybiBhfX0odCxlKXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGkodCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gaSh0LGUpfSh0LGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gaSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KGUpO248ZTtuKyspcltuXT10W25dO3JldHVybiByfWZ1bmN0aW9uIGModCxlKXt2YXIgbj1lJiZlLmFkZE9ufHxcIlwiLHI9ZSYmZS5iYXNlRmlsZW5hbWV8fHQubGljZW5zZStuLG89ZSYmZS5taW5pZnk/XCIubWluXCI6XCJcIixpPWUmJmUuZmlsZVN1ZmZpeHx8dC5tZXRob2QsYz1lJiZlLnN1YmRpcnx8dC5tZXRob2Q7cmV0dXJuIHQuYmFzZVVybCtcIi9yZWxlYXNlcy9cIisoXCJsYXRlc3RcIj09PXQudmVyc2lvbj9cImxhdGVzdFwiOlwidlwiLmNvbmNhdCh0LnZlcnNpb24pKStcIi9cIitjK1wiL1wiK3IrbytcIi5cIitpfWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1lfHxbXCJmYVwiXSxyPVwiLlwiK0FycmF5LnByb3RvdHlwZS5qb2luLmNhbGwobixcIiwuXCIpLG89dC5xdWVyeVNlbGVjdG9yQWxsKHIpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobywoZnVuY3Rpb24oZSl7dmFyIG49ZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3ZhciByPSFlLm5leHRFbGVtZW50U2libGluZ3x8IWUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcInNyLW9ubHlcIik7aWYobiYmcil7dmFyIG89dC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtvLmlubmVySFRNTD1uLG8uY2xhc3NMaXN0LmFkZChcInNyLW9ubHlcIiksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLGUubmV4dFNpYmxpbmcpfX0pKX12YXIgdSxmPWZ1bmN0aW9uKCl7fSxzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJnZvaWQgMCE9PWdsb2JhbC5wcm9jZXNzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0LGw9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRUaW1lb3V0OnNldEltbWVkaWF0ZSxkPVtdO2Z1bmN0aW9uIGgoKXtmb3IodmFyIHQ9MDt0PGQubGVuZ3RoO3QrKylkW3RdWzBdKGRbdF1bMV0pO2Q9W10sdT0hMX1mdW5jdGlvbiBtKHQsZSl7ZC5wdXNoKFt0LGVdKSx1fHwodT0hMCxsKGgsMCkpfWZ1bmN0aW9uIHAodCl7dmFyIGU9dC5vd25lcixuPWUuX3N0YXRlLHI9ZS5fZGF0YSxvPXRbbl0saT10LnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbyl7bj1cImZ1bGZpbGxlZFwiO3RyeXtyPW8ocil9Y2F0Y2godCl7ZyhpLHQpfX12KGkscil8fChcImZ1bGZpbGxlZFwiPT09biYmYihpLHIpLFwicmVqZWN0ZWRcIj09PW4mJmcoaSxyKSl9ZnVuY3Rpb24gdih0LGUpe3ZhciByO3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiKTtpZihlJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09PW4oZSkpKXt2YXIgbz1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gby5jYWxsKGUsKGZ1bmN0aW9uKG4pe3J8fChyPSEwLGU9PT1uP3kodCxuKTpiKHQsbikpfSksKGZ1bmN0aW9uKGUpe3J8fChyPSEwLGcodCxlKSl9KSksITB9fWNhdGNoKGUpe3JldHVybiByfHxnKHQsZSksITB9cmV0dXJuITF9ZnVuY3Rpb24gYih0LGUpe3QhPT1lJiZ2KHQsZSl8fHkodCxlKX1mdW5jdGlvbiB5KHQsZSl7XCJwZW5kaW5nXCI9PT10Ll9zdGF0ZSYmKHQuX3N0YXRlPVwic2V0dGxlZFwiLHQuX2RhdGE9ZSxtKEEsdCkpfWZ1bmN0aW9uIGcodCxlKXtcInBlbmRpbmdcIj09PXQuX3N0YXRlJiYodC5fc3RhdGU9XCJzZXR0bGVkXCIsdC5fZGF0YT1lLG0oUyx0KSl9ZnVuY3Rpb24gdyh0KXt0Ll90aGVuPXQuX3RoZW4uZm9yRWFjaChwKX1mdW5jdGlvbiBBKHQpe3QuX3N0YXRlPVwiZnVsZmlsbGVkXCIsdyh0KX1mdW5jdGlvbiBTKHQpe3QuX3N0YXRlPVwicmVqZWN0ZWRcIix3KHQpLCF0Ll9oYW5kbGVkJiZzJiZnbG9iYWwucHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsdC5fZGF0YSx0KX1mdW5jdGlvbiBPKHQpe2dsb2JhbC5wcm9jZXNzLmVtaXQoXCJyZWplY3Rpb25IYW5kbGVkXCIsdCl9ZnVuY3Rpb24gaih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIHJlc29sdmVyIFwiK3QrXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7aWYodGhpcyBpbnN0YW5jZW9mIGo9PSExKXRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7dGhpcy5fdGhlbj1bXSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCl7ZyhlLHQpfXRyeXt0KChmdW5jdGlvbih0KXtiKGUsdCl9KSxuKX1jYXRjaCh0KXtuKHQpfX0odCx0aGlzKX1qLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aixfc3RhdGU6XCJwZW5kaW5nXCIsX3RoZW46bnVsbCxfZGF0YTp2b2lkIDAsX2hhbmRsZWQ6ITEsdGhlbjpmdW5jdGlvbih0LGUpe3ZhciBuPXtvd25lcjp0aGlzLHRoZW46bmV3IHRoaXMuY29uc3RydWN0b3IoZiksZnVsZmlsbGVkOnQscmVqZWN0ZWQ6ZX07cmV0dXJuIWUmJiF0fHx0aGlzLl9oYW5kbGVkfHwodGhpcy5faGFuZGxlZD0hMCxcInJlamVjdGVkXCI9PT10aGlzLl9zdGF0ZSYmcyYmbShPLHRoaXMpKSxcImZ1bGZpbGxlZFwiPT09dGhpcy5fc3RhdGV8fFwicmVqZWN0ZWRcIj09PXRoaXMuX3N0YXRlP20ocCxuKTp0aGlzLl90aGVuLnB1c2gobiksbi50aGVufSxjYXRjaDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9fSxqLmFsbD1mdW5jdGlvbih0KXtpZighQXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLlwiKTtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7dmFyIHI9W10sbz0wO2Z1bmN0aW9uIGkodCl7cmV0dXJuIG8rKyxmdW5jdGlvbihuKXtyW3RdPW4sLS1vfHxlKHIpfX1mb3IodmFyIGMsYT0wO2E8dC5sZW5ndGg7YSsrKShjPXRbYV0pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnRoZW4/Yy50aGVuKGkoYSksbik6clthXT1jO298fGUocil9KSl9LGoucmFjZT1mdW5jdGlvbih0KXtpZighQXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLnJhY2UoKS5cIik7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe2Zvcih2YXIgcixvPTA7bzx0Lmxlbmd0aDtvKyspKHI9dFtvXSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIudGhlbj9yLnRoZW4oZSxuKTplKHIpfSkpfSxqLnJlc29sdmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwib2JqZWN0XCI9PT1uKHQpJiZ0LmNvbnN0cnVjdG9yPT09aj90Om5ldyBqKChmdW5jdGlvbihlKXtlKHQpfSkpfSxqLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7bih0KX0pKX07dmFyIEU9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOmo7ZnVuY3Rpb24gUCh0LGUpe3ZhciBuPWUuZmV0Y2gscj1lLlhNTEh0dHBSZXF1ZXN0LG89ZS50b2tlbixpPXQ7cmV0dXJuIG8mJiFmdW5jdGlvbih0KXtyZXR1cm4gdC5pbmRleE9mKFwia2l0LXVwbG9hZC5jc3NcIik+LTF9KHQpJiYoXCJVUkxTZWFyY2hQYXJhbXNcImluIHdpbmRvdz8oaT1uZXcgVVJMKHQpKS5zZWFyY2hQYXJhbXMuc2V0KFwidG9rZW5cIixvKTppPWkrXCI/dG9rZW49XCIrZW5jb2RlVVJJQ29tcG9uZW50KG8pKSxpPWkudG9TdHJpbmcoKSxuZXcgRSgoZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKW4oaSx7bW9kZTpcImNvcnNcIixjYWNoZTpcImRlZmF1bHRcIn0pLnRoZW4oKGZ1bmN0aW9uKHQpe2lmKHQub2spcmV0dXJuIHQudGV4dCgpO3Rocm93IG5ldyBFcnJvcihcIlwiKX0pKS50aGVuKChmdW5jdGlvbihlKXt0KGUpfSkpLmNhdGNoKGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygcil7dmFyIG89bmV3IHI7by5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLChmdW5jdGlvbigpe3RoaXMucmVzcG9uc2VUZXh0P3QodGhpcy5yZXNwb25zZVRleHQpOmUobmV3IEVycm9yKFwiXCIpKX0pKTtbXCJhYm9ydFwiLFwiZXJyb3JcIixcInRpbWVvdXRcIl0ubWFwKChmdW5jdGlvbih0KXtvLmFkZEV2ZW50TGlzdGVuZXIodCwoZnVuY3Rpb24oKXtlKG5ldyBFcnJvcihcIlwiKSl9KSl9KSksby5vcGVuKFwiR0VUXCIsaSksby5zZW5kKCl9ZWxzZXtlKG5ldyBFcnJvcihcIlwiKSl9fSkpfWZ1bmN0aW9uIF8odCxlLG4pe3ZhciByPXQ7cmV0dXJuW1svKHVybFxcKFwiPylcXC5cXC5cXC9cXC5cXC5cXC9cXC5cXC4vZyxmdW5jdGlvbih0LG4pe3JldHVyblwiXCIuY29uY2F0KG4pLmNvbmNhdChlKX1dLFsvKHVybFxcKFwiPylcXC5cXC5cXC93ZWJmb250cy9nLGZ1bmN0aW9uKHQscil7cmV0dXJuXCJcIi5jb25jYXQocikuY29uY2F0KGUsXCIvcmVsZWFzZXMvdlwiKS5jb25jYXQobixcIi93ZWJmb250c1wiKX1dLFsvKHVybFxcKFwiPylodHRwczpcXC9cXC9raXQtZnJlZShbXi5dKSpcXC5mb250YXdlc29tZVxcLmNvbS9nLGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJcIi5jb25jYXQobikuY29uY2F0KGUpfV1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPW8odCwyKSxuPWVbMF0saT1lWzFdO3I9ci5yZXBsYWNlKG4saSl9KSkscn1mdW5jdGlvbiBGKHQsbil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmZ1bmN0aW9uKCl7fSxvPW4uZG9jdW1lbnR8fG8saT1hLmJpbmQoYSxvLFtcImZhXCIsXCJmYWJcIixcImZhc1wiLFwiZmFyXCIsXCJmYWxcIixcImZhZFwiLFwiZmFrXCJdKTt0LmF1dG9BMTF5LmVuYWJsZWQmJnIoaSk7dmFyIHU9dC5zdWJzZXRQYXRoJiZ0LmJhc2VVcmwrXCIvXCIrdC5zdWJzZXRQYXRoLGY9W3tpZDpcImZhLW1haW5cIixhZGRPbjp2b2lkIDAsdXJsOnV9XTtpZih0LnY0c2hpbSYmdC52NHNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY0LXNoaW1zXCIsYWRkT246XCItdjQtc2hpbXNcIn0pLHQudjVGb250RmFjZVNoaW0mJnQudjVGb250RmFjZVNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY1LWZvbnQtZmFjZVwiLGFkZE9uOlwiLXY1LWZvbnQtZmFjZVwifSksdC52NEZvbnRGYWNlU2hpbSYmdC52NEZvbnRGYWNlU2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjQtZm9udC1mYWNlXCIsYWRkT246XCItdjQtZm9udC1mYWNlXCJ9KSwhdSYmdC5jdXN0b21JY29uc0Nzc1BhdGgpe3ZhciBzPXQuY3VzdG9tSWNvbnNDc3NQYXRoLmluZGV4T2YoXCJraXQtdXBsb2FkLmNzc1wiKT4tMT90LmJhc2VVcmxLaXQ6dC5iYXNlVXJsLGw9cytcIi9cIit0LmN1c3RvbUljb25zQ3NzUGF0aDtmLnB1c2goe2lkOlwiZmEta2l0LXVwbG9hZFwiLHVybDpsfSl9dmFyIGQ9Zi5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiBuZXcgRSgoZnVuY3Rpb24obyxpKXt2YXIgYT1yLnVybHx8Yyh0LHthZGRPbjpyLmFkZE9uLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksdT17aWQ6ci5pZH0sZj10LnN1YnNldD91OmUoZShlKHt9LG4pLHUpLHt9LHtiYXNlVXJsOnQuYmFzZVVybCx2ZXJzaW9uOnQudmVyc2lvbixpZDpyLmlkLGNvbnRlbnRGaWx0ZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gXyh0LGUuYmFzZVVybCxlLnZlcnNpb24pfX0pO1AoYSxuKS50aGVuKChmdW5jdGlvbih0KXtvKEModCxmKSl9KSkuY2F0Y2goaSl9KSl9KSk7cmV0dXJuIEUuYWxsKGQpfWZ1bmN0aW9uIEModCxlKXt2YXIgbj1lLmNvbnRlbnRGaWx0ZXJ8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHR9LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobih0LGUpKTtyZXR1cm4gci5hcHBlbmRDaGlsZChvKSxyLm1lZGlhPVwiYWxsXCIsZS5pZCYmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLGUuaWQpLGUmJmUuZGV0ZWN0aW5nQ29uZmxpY3RzJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJnIuc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSkscn1mdW5jdGlvbiBJKHQsbil7bi5hdXRvQTExeT10LmF1dG9BMTF5LmVuYWJsZWQsXCJwcm9cIj09PXQubGljZW5zZSYmKG4uYXV0b0ZldGNoU3ZnPSEwLG4uZmV0Y2hTdmdGcm9tPXQuYmFzZVVybCtcIi9yZWxlYXNlcy9cIisoXCJsYXRlc3RcIj09PXQudmVyc2lvbj9cImxhdGVzdFwiOlwidlwiLmNvbmNhdCh0LnZlcnNpb24pKStcIi9zdmdzXCIsbi5mZXRjaFVwbG9hZGVkU3ZnRnJvbT10LnVwbG9hZHNVcmwpO3ZhciByPVtdO3JldHVybiB0LnY0c2hpbS5lbmFibGVkJiZyLnB1c2gobmV3IEUoKGZ1bmN0aW9uKHIsbyl7UChjKHQse2FkZE9uOlwiLXY0LXNoaW1zXCIsbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxuKS50aGVuKChmdW5jdGlvbih0KXtyKFUodCxlKGUoe30sbikse30se2lkOlwiZmEtdjQtc2hpbXNcIn0pKSl9KSkuY2F0Y2gobyl9KSkpLHIucHVzaChuZXcgRSgoZnVuY3Rpb24ocixvKXtQKHQuc3Vic2V0UGF0aCYmdC5iYXNlVXJsK1wiL1wiK3Quc3Vic2V0UGF0aHx8Yyh0LHttaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciBvPVUodCxlKGUoe30sbikse30se2lkOlwiZmEtbWFpblwifSkpO3IoZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZ2b2lkIDAhPT1lLmF1dG9GZXRjaFN2Zz9lLmF1dG9GZXRjaFN2Zzp2b2lkIDAscj1lJiZ2b2lkIDAhPT1lLmF1dG9BMTF5P2UuYXV0b0ExMXk6dm9pZCAwO3ZvaWQgMCE9PXImJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvLWExMXlcIixyP1widHJ1ZVwiOlwiZmFsc2VcIik7biYmKHQuc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWF1dG8tZmV0Y2gtc3ZnXCIpKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtZmV0Y2gtc3ZnLWZyb21cIixlLmZldGNoU3ZnRnJvbSksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZldGNoLXVwbG9hZGVkLXN2Zy1mcm9tXCIsZS5mZXRjaFVwbG9hZGVkU3ZnRnJvbSkpO3JldHVybiB0fShvLG4pKX0pKS5jYXRjaChvKX0pKSksRS5hbGwocil9ZnVuY3Rpb24gVSh0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIikscj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KTtyZXR1cm4gbi5hcHBlbmRDaGlsZChyKSxuLnJlZmVycmVyUG9saWN5PVwic3RyaWN0LW9yaWdpblwiLGUuaWQmJm4uc2V0QXR0cmlidXRlKFwiaWRcIixlLmlkKSxlJiZlLmRldGVjdGluZ0NvbmZsaWN0cyYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZuLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLG59ZnVuY3Rpb24gVCh0KXt2YXIgZSxuPVtdLHI9ZG9jdW1lbnQsbz1yLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCxpPShvPy9ebG9hZGVkfF5jLzovXmxvYWRlZHxeaXxeYy8pLnRlc3Qoci5yZWFkeVN0YXRlKTtpfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZT1mdW5jdGlvbigpe2ZvcihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSksaT0xO2U9bi5zaGlmdCgpOyllKCl9KSxpP3NldFRpbWVvdXQodCwwKTpuLnB1c2godCl9ZnVuY3Rpb24gTCh0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgTXV0YXRpb25PYnNlcnZlciYmbmV3IE11dGF0aW9uT2JzZXJ2ZXIodCkub2JzZXJ2ZShkb2N1bWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KX10cnl7aWYod2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnKXt2YXIgaz13aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcseD17ZGV0ZWN0aW5nQ29uZmxpY3RzOmsuZGV0ZWN0Q29uZmxpY3RzVW50aWwmJm5ldyBEYXRlPD1uZXcgRGF0ZShrLmRldGVjdENvbmZsaWN0c1VudGlsKSxkZXRlY3Rpb25JZ25vcmVBdHRyOlwiZGF0YS1mYS1kZXRlY3Rpb24taWdub3JlXCIsZmV0Y2g6d2luZG93LmZldGNoLHRva2VuOmsudG9rZW4sWE1MSHR0cFJlcXVlc3Q6d2luZG93LlhNTEh0dHBSZXF1ZXN0LGRvY3VtZW50OmRvY3VtZW50fSxNPWRvY3VtZW50LmN1cnJlbnRTY3JpcHQsTj1NP00ucGFyZW50RWxlbWVudDpkb2N1bWVudC5oZWFkOyhmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm5cImpzXCI9PT10Lm1ldGhvZD9JKHQsZSk6XCJjc3NcIj09PXQubWV0aG9kP0YodCxlLChmdW5jdGlvbih0KXtUKHQpLEwodCl9KSk6dm9pZCAwfSkoayx4KS50aGVuKChmdW5jdGlvbih0KXt0Lm1hcCgoZnVuY3Rpb24odCl7dHJ5e04uaW5zZXJ0QmVmb3JlKHQsTT9NLm5leHRTaWJsaW5nOm51bGwpfWNhdGNoKGUpe04uYXBwZW5kQ2hpbGQodCl9fSkpLHguZGV0ZWN0aW5nQ29uZmxpY3RzJiZNJiZUKChmdW5jdGlvbigpe00uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoeC5kZXRlY3Rpb25JZ25vcmVBdHRyKSk7dmFyIHQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3JldHVybiBlJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJm4uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSksbi5zcmM9Yyh0LHtiYXNlRmlsZW5hbWU6XCJjb25mbGljdC1kZXRlY3Rpb25cIixmaWxlU3VmZml4OlwianNcIixzdWJkaXI6XCJqc1wiLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbn0oayx4KTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpfSkpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFwiRm9udCBBd2Vzb21lIEtpdDpcIixcIiBcIikuY29uY2F0KHQpKX0pKX19Y2F0Y2godCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChcIkZvbnQgQXdlc29tZSBLaXQ6XCIsXCIgXCIpLmNvbmNhdCh0KSl9fSkpOyIsImltcG9ydCBpbWFnZTEgZnJvbSAnLi9pbWFnZXMvaWNvbjMucG5nJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi9pbWFnZXMvbG9jYXRpb24xLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgc2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaCcpO1xuXG4gICAgbG9nby5zcmM9aW1hZ2UxO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3IEltYWdlKCk7XG4gICAgbG9jYXRpb24uc3JjID0gaW1hZ2UyO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItaW1hZ2UnKTtcbiAgICBzZWFyY2gudGV4dENvbnRlbnQgPSAnZmluZCB0aGUgbmVhcmVzdCBFYXRzLWEtTWF6aW5nJztcbiAgICBzZWFyY2guYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCB2ZW51ZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTXVtYmFpJyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdqdWh1IGJlYWNoIDE0NjEnLFxuICAgICAgICAgICAgc3BlY2lhbDogJ0xvcmVtIGlwc3VtIGRvbHJhdC4gQWxpcXVhbSBjdWxwYSwgaXBzYSBpbmNpZHVudCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdEZWxoaScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnZXZlcmdyZWVuIHBsYXphLCB3ZXN0IGRlbGhpJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdMb3JlbSBpcHN1bSBhLCBsb2NhbCBmcmVzaCBwaXp6ZXJpYS4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQmFuZ2Fsb3JlJyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdtZWdhIG1hbGwsIGRvd250b3duJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdncmVhdCBjcnVzdCBzYW5kd2ljaCwgQ3VtIGluIGVvcyBzYWVwZSBzaXQgY29tbW9kaWl0aSwgaW5jaWR1ZHVudCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdDYWxjdXR0YScsXG4gICAgICAgICAgICBhZGRyZXNzOiAnbWluaSBtYWxsLCBmbG91ciBmYWN0b3J5JyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtIGluIGVvcyBzYWVwZSBzaXQgY29tbW9kaSBkaXN0aW5jdGlvIGZ1Z2lhdCBkZWxlbml0aSwgaW5jaWR1bnQgcXVvcyBxdWFlcmF0LiBBbGlxdWFtIGN1bHBhLCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdDaGVubmFpJyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdtYXJpbmUgZHJpdmUgOTU0JyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICcgZWxpdC4gZHJpdmUgdGhydSBkaW5lci4gQWxpcXVhbSBjdWxwYSwgaXBzYSBpbmNpZHVudCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdQdW5lJyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdkZWNjYW4gcG9vbCAzMjEnLFxuICAgICAgICAgICAgc3BlY2lhbDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIGZyZXNoIGZydWl0IG1hcmtldCBpdXN0byBkb2xvcmUgYW1ldCByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdMdWNrbm93JyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdnYW5nYSBtYWxsLCB3ZXN0c2lkZScsXG4gICAgICAgICAgICBzcGVjaWFsOiAnTG9yZW0gaXBzdW0gd2hhdGV2ZXIgeW91IHdhbnQhIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVucHNhIGluY2lkdW50IGl1c3RvIGRvbG9yZSBhbWV0IHJlcHJlaGVuZGVyaXQgc3VudCBjb25zZXF1dW50dXIuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NvaW1iYXRvcmUnLFxuICAgICAgICAgICAgYWRkcmVzczogJ2tlc3QgcG9ydCwgbm9ydGhzaWRlJyxcbiAgICAgICAgICAgIHNwZWNpYWw6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtIGluIGVvcyBzYWVwZSBzaXRlbml0aSwgaW5jaWR1bnQgcXVvcyBxdWFlcmF0LiBBbGlxdWFtIGN1bHBhLCBlZ3lwdGlhbiB0YWNvcyB3aXRoIHNhdWNlISByZXByZWhlbmRlcml0IHN1bnQgY29uc2VxdXVudHVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb246ICdLb2xoYXB1cicsXG4gICAgICAgICAgICBhZGRyZXNzOiAnYWhlYWQgb2YgdGhlIG9uZSBiZWhpbmQnLFxuICAgICAgICAgICAgc3BlY2lhbDogJ05vdGhpbmcgbXVjaCBoZXJlLCBpdHMgcXVpdGUgYSBzbWFsbCB0b3duLiBqdXN0IHRoZS0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBpbiBlb3Mgc2FlcGUgc2l0IGNvbW1vZGkgZGlzdGluY3RpbyBmdWdpYXQgZGVsZW5pdGksIGluY2lkdW50IHF1b3MgcXVhZXJhdCdcbiAgICAgICAgfSxcblxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC50ZXh0Q29udGVudCA9IHZlbnVlc1tpXS5sb2NhdGlvbjtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IHZlbnVlc1tpXS5hZGRyZXNzO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdmVudWVzW2ldLnNwZWNpYWw7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IGltYWdlMSBmcm9tICcuL2ltYWdlcy9tZW51LnBuZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4vaW1hZ2VzL2ljb240LnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgc2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaCcpO1xuXG4gICAgbG9nby5zcmMgPSBpbWFnZTE7XG4gICAgY29uc3QgbWVudUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51TG9nby5zcmMgPSBpbWFnZTI7XG4gICAgc2VhcmNoLnRleHRDb250ZW50ID0gJ2VudGVyIHlvdXIgZmF2b3JpdGUgaXRlbSc7XG4gICAgbWVudUxvZ28uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1pbWFnZScpXG4gICAgc2VhcmNoLmFwcGVuZENoaWxkKG1lbnVMb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgaXRlbXMgPSBbJ1BpenphJywgJ0J1cmdlcicsICdTYW5kd2ljaCcsICdSb2xsJywgJ1B1ZGRpbmcnLCAnRnJpZXMnLCAnUGFuY2FrZScsICdDb2tlJywgJ0Nob2NvbGF0ZSddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ3ZhcmlhdGlvbnMnO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW0gaW4gZW9zIHNhZXBlIHNpdCBjb21tb2RpIGRpc3RpbmN0aW8gZnVnaWF0IGRlbGVuaXRpLCBpbmNpZHVudCBxdW9zIHF1YWVyYXQuIEFsaXF1YW0gY3VscGEsIGlwc2EgaW5jaWR1bnQgaXVzdG8gZG9sb3JlIGFtZXQgcmVwcmVoZW5kZXJpdCBzdW50IGNvbnNlcXV1bnR1ci4nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2ZvbnRhd2Vzb21lLmpzJztcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gJy4vbWFpblBhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51UGFnZS5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY29tbW9uRm9vdGVyLmpzJztcbmltcG9ydCBjcmVhdGVDaGVmcyBmcm9tICcuL2NoZWZQYWdlLmpzJztcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgY29udGFpbmVyID0gMDtcbmxldCBmb290ZXIgPSAwO1xubGV0IG5hdlRhYjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2VGFiKGZvY3VzKXtcbiAgICBuYXZUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2hlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNoZWZzLnRleHRDb250ZW50ID0gJ0NoZWZzJztcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG4gICAgY2hlZnMuY2xhc3NMaXN0LmFkZCgnY2hlZnMtcGFnZScpO1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluRXZlbnQpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51RXZlbnQpO1xuICAgIGNoZWZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlZnNFdmVudCk7XG4gICAgaWYoZm9jdXM9PSdtYWluLXBhZ2UnKXtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShtZW51LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1lbHNlIGlmKEFycmF5LmZyb20oY2hlZnMuY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlLWZvY3VzJykpe1xuICAgICAgICAgICAgY2hlZnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZm9jdXMnKTtcbiAgICB9ZWxzZSBpZihmb2N1cz09J21lbnUtcGFnZScpe1xuICAgICAgICBpZihBcnJheS5mcm9tKG1haW4uY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlLWZvY3VzJykpe1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZm9jdXMnKTtcbiAgICAgICAgfWVsc2UgaWYoQXJyYXkuZnJvbShjaGVmcy5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUtZm9jdXMnKSl7XG4gICAgICAgICAgICBjaGVmcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1mb2N1cycpO1xuICAgIH1lbHNlIGlmKGZvY3VzPT0nY2hlZnMtcGFnZScpe1xuICAgICAgICBpZihBcnJheS5mcm9tKG1haW4uY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlLWZvY3VzJykpe1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZm9jdXMnKTtcbiAgICAgICAgfWVsc2UgaWYoQXJyYXkuZnJvbShtZW51LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZS1mb2N1cycpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlZnMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWZvY3VzJyk7XG4gICAgfVxuICAgIG5hdlRhYi5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBuYXZUYWIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbmF2VGFiLmFwcGVuZENoaWxkKGNoZWZzKTtcbiAgICBuYXZUYWIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdG9yLXRhYicpO1xuICAgIHJldHVybiBuYXZUYWI7XG59XG5cbmZ1bmN0aW9uIG1haW5FdmVudCgpIHtcbiAgICBjb250YWluZXIgPSBjcmVhdGVNYWluKCk7XG4gICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG5hdlRhYiA9IGNyZWF0ZU5hdlRhYignbWFpbi1wYWdlJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZUYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIG1lbnVFdmVudCgpIHtcbiAgICBjb250YWluZXIgPSBjcmVhdGVNZW51KCk7XG4gICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG5hdlRhYiA9IGNyZWF0ZU5hdlRhYignbWVudS1wYWdlJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZUYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGNoZWZzRXZlbnQoKSB7XG4gICAgY29udGFpbmVyID0gY3JlYXRlQ2hlZnMoKTtcbiAgICBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgbmF2VGFiID0gY3JlYXRlTmF2VGFiKCdjaGVmcy1wYWdlJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZUYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbm1haW5FdmVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9