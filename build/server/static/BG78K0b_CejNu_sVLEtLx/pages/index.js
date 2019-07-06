module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2CCv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("8UsT"));
__export(__webpack_require__("Oygx"));
__export(__webpack_require__("fDON"));


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Wbk":
/***/ (function(module, exports) {

module.exports = require("react-icons/wi");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "67YH":
/***/ (function(module, exports) {



/***/ }),

/***/ "79GW":
/***/ (function(module, exports) {



/***/ }),

/***/ "8UsT":
/***/ (function(module, exports) {

module.exports.IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  }
]

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "OVTC":
/***/ (function(module, exports) {



/***/ }),

/***/ "OyQU":
/***/ (function(module, exports) {



/***/ }),

/***/ "Oygx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
var iconContext_1 = __webpack_require__("fDON");
function Tree2Element(tree) {
    return tree && tree.map(function (node, i) { return React.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child)); });
}
function GenIcon(data) {
    return function (props) { return (React.createElement(IconBase, __assign({ attr: __assign({}, data.attr) }, props), Tree2Element(data.child))); };
}
exports.GenIcon = GenIcon;
function IconBase(props) {
    var elem = function (conf) {
        var computedSize = props.size || conf.size || "1em";
        var className;
        if (conf.className)
            className = conf.className;
        if (props.className)
            className = (className ? className + ' ' : '') + props.className;
        var attr = props.attr, title = props.title, svgProps = __rest(props, ["attr", "title"]);
        return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, conf.attr, attr, svgProps, { className: className, style: __assign({ color: props.color || conf.color }, conf.style, props.style), height: computedSize, width: computedSize, xmlns: "http://www.w3.org/2000/svg" }),
            title && React.createElement("title", null, title),
            props.children));
    };
    return iconContext_1.IconContext !== undefined
        ? React.createElement(iconContext_1.IconContext.Consumer, null, function (conf) { return elem(conf); })
        : elem(iconContext_1.DefaultContext);
}
exports.IconBase = IconBase;


/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/index.js + 10 modules
var components = __webpack_require__("e+cM");

// EXTERNAL MODULE: ./pages/index.scss
var pages = __webpack_require__("kxKB");

// EXTERNAL MODULE: ./functions/getData.js
var getData = __webpack_require__("c8KZ");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./pages/index.js










 // 컴포넌트 불러오기


 // weather API 및 주소 API 에서 가공된 데이터 가져오기




var getNowDate = new Date();
var coords = [{
  lon: 127,
  lat: 37.583328,
  address: '서울'
}, {
  lon: 126.416107,
  lat: 37.450001,
  address: '인천'
}, {
  lon: 129.050003,
  lat: 35.133331,
  address: '부산'
}, {
  lon: 128.550003,
  lat: 35.799999,
  address: '대구'
}, {
  lon: 127.416672,
  lat: 36.333328,
  address: '대전'
}, {
  lon: 126.916672,
  lat: 35.166672,
  address: '광주'
}, {
  lon: 129.266663,
  lat: 35.566669,
  address: '울산'
}, {
  lon: 126.521942,
  lat: 33.50972,
  address: '제주'
}];

var pages_cardlist = function cardlist(arr) {
  var listItems = arr.map(function (obj) {
    return external_react_default.a.createElement(link_default.a, {
      as: "forecast/".concat(obj.lat, "/").concat(obj.lon),
      href: "forecast?lat=".concat(obj.lat, "&lon=").concat(obj.lon),
      key: "".concat(obj.lat, "_").concat(obj.lon)
    }, external_react_default.a.createElement("a", {
      className: "item"
    }, external_react_default.a.createElement(components["i" /* MainPlacesCard */], {
      key: "".concat(obj.lat, "_").concat(obj.lon),
      locationTitle: obj.address,
      locationSub: obj.subaddress,
      weatherType: obj.type,
      temperature: obj.temp,
      sunrise: obj.sunrise,
      sunset: obj.sunset
    })));
  });
  return external_react_default.a.createElement("div", {
    className: "cardList"
  }, listItems);
};

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      isLoaded: false,
      time: Object(getData["b" /* _getDateString */])(getNowDate),
      error: null,
      card: [],
      cardCount: 9
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // 현재 위치(좌표) 확인해서 API 에서 가공된 데이터 가져오기
      navigator.geolocation.getCurrentPosition(
      /*#__PURE__*/
      function () {
        var _ref = Object(asyncToGenerator["a" /* default */])(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(position) {
          var index, obj;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  index = 0;

                case 1:
                  if (!(index < 9)) {
                    _context.next = 24;
                    break;
                  }

                  obj = null;

                  if (!(index === 0)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 6;
                  return Object(getData["a" /* _getCardLocaInfo */])(position.coords.latitude, position.coords.longitude);

                case 6:
                  obj = _context.sent;

                  _this2.setState({
                    card: [{
                      lat: position.coords.latitude,
                      lon: position.coords.longitude,
                      address: obj.address,
                      subaddress: '현재 위치',
                      temp: obj.temp,
                      type: obj.weatherType,
                      sunrise: obj.sunrise,
                      sunset: obj.sunset
                    }]
                  });

                  _context.next = 21;
                  break;

                case 10:
                  if (!(index === 8)) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 13;
                  return Object(getData["a" /* _getCardLocaInfo */])(coords[index - 1].lat, coords[index - 1].lon);

                case 13:
                  obj = _context.sent;

                  _this2.setState({
                    card: [].concat(_toConsumableArray(_this2.state.card), [{
                      lat: coords[index - 1].lat,
                      lon: coords[index - 1].lon,
                      address: coords[index - 1].address,
                      subaddress: '대한민국',
                      temp: obj.temp,
                      type: obj.weatherType,
                      sunrise: obj.sunrise,
                      sunset: obj.sunset
                    }]),
                    isLoaded: true
                  });

                  _context.next = 21;
                  break;

                case 17:
                  _context.next = 19;
                  return Object(getData["a" /* _getCardLocaInfo */])(coords[index - 1].lat, coords[index - 1].lon);

                case 19:
                  obj = _context.sent;

                  _this2.setState({
                    card: [].concat(_toConsumableArray(_this2.state.card), [{
                      lat: coords[index - 1].lat,
                      lon: coords[index - 1].lon,
                      address: coords[index - 1].address,
                      subaddress: '대한민국',
                      temp: obj.temp,
                      type: obj.weatherType,
                      sunrise: obj.sunrise,
                      sunset: obj.sunset
                    }])
                  });

                case 21:
                  index++;
                  _context.next = 1;
                  break;

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), function (error) {
        _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state;
      return external_react_default.a.createElement("div", null, state.isLoaded ? external_react_default.a.createElement("div", {
        className: "list"
      }, external_react_default.a.createElement(components["h" /* MainHeader */], {
        nowTime: state.time
      }), pages_cardlist(state.card)) : state.error ? external_react_default.a.createElement("div", {
        className: "list"
      }, external_react_default.a.createElement(components["h" /* MainHeader */], {
        nowTime: state.time
      }), external_react_default.a.createElement(components["g" /* MainErrorCard */], null)) : external_react_default.a.createElement("div", {
        className: "list"
      }, external_react_default.a.createElement(components["h" /* MainHeader */], {
        nowTime: state.time
      }), external_react_default.a.createElement("p", {
        style: {
          textAlign: 'center',
          color: 'white',
          margin: 'auto'
        }
      }, "\uB85C\uB529\uC911...")));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (Object(router_["withRouter"])(pages_Index));

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WO7n":
/***/ (function(module, exports) {



/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c8KZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _getForecastNowInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _getDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _getForecastNext5Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getCardLocaInfo; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");


// forecast.js 현재 날씨 정보 가져오기
var _getForecastNowInfo =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(lat, lon) {
    var weatherNow, address;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _getWeatherNow(lat, lon);

          case 2:
            weatherNow = _context.sent;
            // 주소의 경우 한국이면 다음 지도 사용
            // 아닌 경우 날씨 API 에서 제공하는 이름 그대로 사용
            address = null;

            if (!(lat >= 33 && lat <= 43 && lon >= 124 && lon <= 132)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return _getAddr(lat, lon);

          case 7:
            address = _context.sent;
            _context.next = 11;
            break;

          case 10:
            address = weatherNow.name;

          case 11:
            return _context.abrupt("return", {
              address: address,
              weatherType: _changeWCode(weatherNow.weather[0].id),
              temp: Math.floor(weatherNow.main.temp),
              humidity: weatherNow.main.humidity,
              windSpeed: weatherNow.wind.speed,
              windDeg: weatherNow.wind.deg,
              // 일출, 일몰 데이터의 경우 초 단위 데이터가 들어옴
              // Date.now() 는 단위가 밀리초여서 비교가 불가능
              // *1000 을 통해 밀리초로 변경
              sunrise: weatherNow.sys.sunrise * 1000,
              sunset: weatherNow.sys.sunset * 1000,
              rain: weatherNow.rain
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _getForecastNowInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _getDateString = function _getDateString(date) {
  var dateText = date.toLocaleString('ko-KR');
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var hoursText;

  if (hours === 0) {
    hoursText = "\uC624\uC804 12:";
  } else if (hours < 10) {
    hoursText = "\uC624\uC804 0".concat(hours, ":");
  } else if (hours < 12) {
    hoursText = "\uC624\uC804 ".concat(hours, ":");
  } else if (hours === 12) {
    hoursText = "\uC624\uD6C4 12:";
  } else if (hours < 22) {
    hoursText = "\uC624\uD6C4 0".concat(hours - 12, ":");
  } else {
    hoursText = "\uC624\uD6C4 0".concat(hours - 12, ":");
  }

  if (minutes < 10) {
    return "".concat(dateText.substr(0, 11), " ").concat(hoursText, "0").concat(minutes);
  } else {
    return "".concat(dateText.substr(0, 11), " ").concat(hoursText).concat(minutes);
  }
}; // forecast.js 미래 날씨 예측 정보 가저오기

var _getForecastNext5Info =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(lat, lon) {
    var weatherNext5, list;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _getWeatherNext5(lat, lon);

          case 2:
            weatherNext5 = _context2.sent;
            list = weatherNext5.list.map(function (obj) {
              var date = new Date(obj.dt * 1000);
              return {
                dt: obj.dt * 1000,
                dt_month: date.getMonth() + 1,
                dt_day: date.getDate(),
                dt_hours: date.getHours(),
                weatherType: _changeWCode(obj.weather[0].id),
                temp: Math.floor(obj.main.temp),
                rain: obj.rain === undefined ? 0 : obj.rain['3h']
              };
            });
            return _context2.abrupt("return", list);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _getForecastNext5Info(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 메인 페이지 현재 날씨 정보 가져오기

var _getCardLocaInfo =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(lat, lon) {
    var weatherNow, address;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _getWeatherNow(lat, lon);

          case 2:
            weatherNow = _context3.sent;
            address = null;

            if (!(lat >= 33 && lat <= 43 && lon >= 124 && lon <= 132)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 7;
            return _getAddr(lat, lon);

          case 7:
            address = _context3.sent;
            _context3.next = 11;
            break;

          case 10:
            address = weatherNow.name;

          case 11:
            return _context3.abrupt("return", {
              address: address,
              temp: Math.floor(weatherNow.main.temp),
              weatherType: _changeWCode(weatherNow.weather[0].id),
              sunrise: weatherNow.sys.sunrise * 1000,
              sunset: weatherNow.sys.sunset * 1000
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function _getCardLocaInfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // weather type code 를 text 로 변경

var _changeWCode = function _changeWCode(id) {
  if (id >= 200 && id < 300) {
    return 'Thunderstorm';
  } else if (id >= 300 && id < 400) {
    return 'Drizzle';
  } else if (id >= 500 && id < 600) {
    return 'Rain';
  } else if (id >= 600 && id < 700) {
    return 'Snow';
  } else if (id >= 700 && id < 800) {
    return 'Atmosphere';
  } else if (id === 800) {
    return 'Clear';
  } else if (id > 800 && id < 900) {
    return 'Clouds';
  } else {
    throw new Error('날씨 코드가 이상해!');
  }
}; // 좌표 위치


var _getAddr =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(lat, lon) {
    var address;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=".concat(lon, "&y=").concat(lat), {
              headers: {
                Authorization: "KakaoAK ".concat("87fbfced5e60485e49838e6f25b99861")
              }
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.documents[0].address_name;
            });

          case 2:
            address = _context4.sent;
            return _context4.abrupt("return", address);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function _getAddr(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // 현재 날씨


var _getWeatherNow =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(lat, lon) {
    var weather;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&APPID=").concat("59c393b03e080c261debf8f17784f0c4", "&units=metric")).then(function (response) {
              return response.json();
            });

          case 2:
            weather = _context5.sent;
            return _context5.abrupt("return", weather);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function _getWeatherNow(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // 미래 5일 날씨 예보


var _getWeatherNext5 =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(lat, lon) {
    var weather;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lon, "&APPID=").concat("59c393b03e080c261debf8f17784f0c4", "&units=metric")).then(function (response) {
              return response.json();
            });

          case 2:
            weather = _context6.sent;
            return _context6.abrupt("return", weather);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function _getWeatherNext5(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/react-icons/lib/cjs/index.js
var cjs = __webpack_require__("2CCv");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// EXTERNAL MODULE: ./components/MainHeader.scss
var components_MainHeader = __webpack_require__("w2nv");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/MainHeader.js






var MainHeader_MainHeader = function MainHeader(_ref) {
  var nowTime = _ref.nowTime;
  return external_react_default.a.createElement("div", {
    className: "MainHeader",
    style: {
      color: '#f1f1f1'
    }
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2em',
      color: '#f1f1f1'
    }
  }, external_react_default.a.createElement(md_["MdLocationOn"], null)))), external_react_default.a.createElement("p", {
    className: "MainHeader_text"
  }, "\uC704\uCE58"), external_react_default.a.createElement("p", {
    className: "MainHeader_time"
  }, nowTime));
};

/* harmony default export */ var components_MainHeader_0 = (MainHeader_MainHeader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// EXTERNAL MODULE: external "react-icons/wi"
var wi_ = __webpack_require__("4Wbk");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./functions/changeWeatherData.js



 // 날씨에 맞는 아이콘 내보내기

var changeWeatherData_WeatherTypeIconWithHours = function WeatherTypeIconWithHours(props) {
  var type = props.type;

  var timeInMs = now_default()();

  if (type === 'Thunderstorm') {
    return external_react_default.a.createElement(wi_["WiThunderstorm"], null);
  } else if (type === 'Drizzle') {
    return external_react_default.a.createElement(wi_["WiSleet"], null);
  } else if (type === 'Rain') {
    return external_react_default.a.createElement(wi_["WiRaindrops"], null);
  } else if (type === 'Snow') {
    return external_react_default.a.createElement(wi_["WiSnow"], null);
  } else if (type === 'Atmosphere') {
    if (timeInMs >= props.sunrise && timeInMs <= props.sunset) {
      return external_react_default.a.createElement(wi_["WiDayHaze"], null);
    } else {
      return external_react_default.a.createElement(wi_["WiNightFog"], null);
    }
  } else if (type === 'Clear') {
    if (timeInMs >= props.sunrise && timeInMs <= props.sunset) {
      return external_react_default.a.createElement(wi_["WiDaySunny"], null);
    } else {
      return external_react_default.a.createElement(wi_["WiNightClear"], null);
    }
  } else if (type === 'Clouds') {
    return external_react_default.a.createElement(wi_["WiCloud"], null);
  } else {
    console.log('아이콘 에러인데요??');
    return external_react_default.a.createElement(fa_["FaExclamationTriangle"], null);
  }
}; // 날씨에 맞는 카드 및 글씨 색 내보내기

var changeWeatherData_WeatherTypeColorWithHours = function WeatherTypeColorWithHours(type, sunrise, sunset) {
  var timeInMs = now_default()();

  if (type === 'Thunderstorm') {
    return {
      bgColor: '#8D23A9',
      textColor: '#f1f1f1',
      shadow: '0 0.5px 0.2px #5b0079'
    };
  } else if (type === 'Drizzle') {
    return {
      bgColor: '#7da9ff',
      textColor: '#333',
      shadow: '0 1px 6px #467acb'
    };
  } else if (type === 'Rain') {
    return {
      bgColor: '#457AD1',
      textColor: '#f1f1f1',
      shadow: '0 1px 6px #004f9f'
    };
  } else if (type === 'Snow') {
    return {
      bgColor: '#FAFAFC',
      textColor: '#333',
      shadow: '0 1px 6px #c7c7c9'
    };
  } else if (type === 'Atmosphere') {
    return {
      bgColor: '#b9c2d0',
      textColor: '#333',
      shadow: '0 1px 6px #89929f'
    };
  } else if (type === 'Clear') {
    if (timeInMs >= sunrise && timeInMs <= sunset) {
      return {
        bgColor: '#f8bc25',
        textColor: '#333',
        shadow: '0 1px 6px #c08c00'
      };
    } else {
      return {
        bgColor: '#575d80',
        textColor: '#f1f1f1',
        shadow: '0 1px 6px #2c3453'
      };
    }
  } else if (type === 'Clouds') {
    return {
      bgColor: '#89929f',
      textColor: '#f1f1f1',
      shadow: '0 1px 6px #5c6471'
    };
  } else {
    console.log('색 변경 에러인데요??');
    return {
      bgColor: '#EE5E5E',
      textColor: '#f1f1f1',
      shadow: '0 1px 6px #b62a34'
    };
  }
};
var changeWeatherData_WeatherTypeIconWithForecast = function WeatherTypeIconWithForecast(_ref) {
  var array = _ref.array;
  var findArr = ['Rain', 'Drizzle', 'Thunderstorm', 'Snow'];
  var findWeatherType = array.find(function (obj) {
    return findArr.includes(obj.weatherType);
  });

  if (findWeatherType === undefined) {
    if (array[0].weatherType === 'Atmosphere') {
      return external_react_default.a.createElement(wi_["WiDayHaze"], null);
    } else if (array[0].weatherType === 'Clear') {
      return external_react_default.a.createElement(wi_["WiDaySunny"], null);
    } else if (array[0].weatherType === 'Clouds') {
      return external_react_default.a.createElement(wi_["WiCloud"], null);
    } else {
      console.log('아이콘 에러인데요??');
      return external_react_default.a.createElement(fa_["FaExclamationTriangle"], null);
    }
  } else {
    if (findWeatherType.weatherType === 'Thunderstorm') {
      return external_react_default.a.createElement(wi_["WiThunderstorm"], null);
    } else if (findWeatherType.weatherType === 'Drizzle') {
      return external_react_default.a.createElement(wi_["WiSleet"], null);
    } else if (findWeatherType.weatherType === 'Rain') {
      return external_react_default.a.createElement(wi_["WiRaindrops"], null);
    } else if (findWeatherType.weatherType === 'Snow') {
      return external_react_default.a.createElement(wi_["WiSnow"], null);
    } else {
      console.log('아이콘 에러인데요??');
      return external_react_default.a.createElement(fa_["FaExclamationTriangle"], null);
    }
  }
};
var WeatherTypeColorWithForecast = function WeatherTypeColorWithForecast(array) {
  var findArr = ['Rain', 'Drizzle', 'Thunderstorm', 'Snow'];
  var findWeatherType = array.find(function (obj) {
    return findArr.includes(obj.weatherType);
  });

  if (findWeatherType === undefined) {
    if (array[0].weatherType === 'Atmosphere') {
      return {
        bgColor: '#b9c2d0',
        textColor: '#333',
        shadow: '0 1px 6px #89929f'
      };
    } else if (array[0].weatherType === 'Clear') {
      return {
        bgColor: '#f8bc25',
        textColor: '#333',
        shadow: '0 1px 6px #c08c00'
      };
    } else if (array[0].weatherType === 'Clouds') {
      return {
        bgColor: '#89929f',
        textColor: '#f1f1f1',
        shadow: '0 1px 6px #5c6471'
      };
    } else {
      console.log('색 변경 에러인데요??');
      return {
        bgColor: '#EE5E5E',
        textColor: '#f1f1f1',
        shadow: '0 1px 6px #b62a34'
      };
    }
  } else {
    if (findWeatherType.weatherType === 'Thunderstorm') {
      return {
        bgColor: '#8D23A9',
        textColor: '#f1f1f1',
        shadow: '0 0.5px 0.2px #5b0079'
      };
    } else if (findWeatherType.weatherType === 'Drizzle') {
      return {
        bgColor: '#7da9ff',
        textColor: '#333',
        shadow: '0 1px 6px #467acb'
      };
    } else if (findWeatherType.weatherType === 'Rain') {
      return {
        bgColor: '#457AD1',
        textColor: '#f1f1f1',
        shadow: '0 1px 6px #004f9f'
      };
    } else if (findWeatherType.weatherType === 'Snow') {
      return {
        bgColor: '#FAFAFC',
        textColor: '#333',
        shadow: '0 1px 6px #c7c7c9'
      };
    } else {
      console.log('색 변경 에러인데요??');
      return {
        bgColor: '#EE5E5E',
        textColor: '#f1f1f1',
        shadow: '0 1px 6px #b62a34'
      };
    }
  }
}; // 날씨 텍스트 한글 변경

var WeatherTypeText = function WeatherTypeText(type) {
  if (type === 'Thunderstorm') {
    return '뇌우';
  } else if (type === 'Drizzle') {
    return '이슬비';
  } else if (type === 'Rain') {
    return '비';
  } else if (type === 'Snow') {
    return '눈';
  } else if (type === 'Atmosphere') {
    return '안개';
  } else if (type === 'Clear') {
    return '맑음';
  } else if (type === 'Clouds') {
    return '흐림';
  } else {
    console.log('날씨 텍스트 에러인데요??');
    return '알수 없음';
  }
}; // 바람 방향 숫자 -> 한글 변경
// N 348.75 - 11.25
// NNE 11.25 - 33.75
// NE 33.75 - 56.25
// ENE 56.25 - 78.75
// E 78.75 - 101.25
// ESE 101.25 - 123.75
// SE 123.75 - 146.25
// SSE 146.25 - 168.75
// S 168.75 - 191.25
// SSW 191.25 - 213.75
// SW 213.75 - 236.25
// WSW 236.25 - 258.75
// W 258.75 - 281.25
// WNW 281.25 - 303.75
// NW 303.75 - 326.25
// NNW 326.25 - 348.75

var WindDegreeToText = function WindDegreeToText(degree) {
  if (degree >= 11.25 && degree < 33.75) {
    return '북북동';
  } else if (degree >= 33.75 && degree < 56.25) {
    return '북동';
  } else if (degree >= 56.25 && degree < 78.75) {
    return '동북동';
  } else if (degree >= 78.75 && degree < 101.25) {
    return '동';
  } else if (degree >= 101.25 && degree < 123.75) {
    return '동남동';
  } else if (degree >= 123.75 && degree < 146.25) {
    return '남동';
  } else if (degree >= 146.25 && degree < 168.75) {
    return '남남동';
  } else if (degree >= 168.75 && degree < 191.25) {
    return '남';
  } else if (degree >= 191.25 && degree < 213.75) {
    return '남남서';
  } else if (degree >= 213.75 && degree < 236.25) {
    return '남서';
  } else if (degree >= 236.25 && degree < 258.75) {
    return '서남서';
  } else if (degree >= 258.75 && degree < 281.25) {
    return '서';
  } else if (degree >= 281.25 && degree < 303.75) {
    return '서북서';
  } else if (degree >= 303.75 && degree < 326.25) {
    return '북서';
  } else if (degree >= 326.25 && degree < 348.75) {
    return '북북서';
  } else if (degree >= 348.75 && degree < 361 || degree >= 0 && degree < 11.25) {
    return '북';
  } else {
    console.log('바람 값이 이상한데요?');
    return '-';
  }
}; // sunrise 및 sunset 시간 변경

var millisecondsToTime = function millisecondsToTime(ms) {
  var date = new Date(ms);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return "".concat(hours < 10 ? "0".concat(hours) : hours, ":").concat(minutes < 10 ? "0".concat(minutes) : minutes);
};
// EXTERNAL MODULE: ./components/MainPlacesCard.scss
var components_MainPlacesCard = __webpack_require__("67YH");

// CONCATENATED MODULE: ./components/MainPlacesCard.js








 // TODO: constructor 사용시 문제점 확인

var MainPlacesCard_MainPlacesCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(MainPlacesCard, _React$Component);

  function MainPlacesCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MainPlacesCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MainPlacesCard).call(this, props));
    _this.state = changeWeatherData_WeatherTypeColorWithHours(props.weatherType, props.sunrise, props.sunset);
    return _this;
  }

  Object(createClass["a" /* default */])(MainPlacesCard, [{
    key: "render",
    value: function render() {
      var bgColor = {
        background: this.state.bgColor,
        color: this.state.textColor
      };
      return external_react_default.a.createElement("div", {
        className: "place_card",
        style: bgColor
      }, external_react_default.a.createElement("div", {
        className: "place_card_left"
      }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
        value: {
          size: '4em'
        }
      }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithHours, {
        type: this.props.weatherType,
        sunrise: this.props.sunrise,
        sunset: this.props.sunset
      })), external_react_default.a.createElement("p", {
        className: "location_title"
      }, this.props.locationTitle), external_react_default.a.createElement("p", {
        className: "location_sub"
      }, this.props.locationSub)), external_react_default.a.createElement("div", {
        className: "place_card_right"
      }, external_react_default.a.createElement("p", {
        className: "temperature"
      }, this.props.temperature, "\u02DA")));
    }
  }]);

  return MainPlacesCard;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/MainErrorCard.js










var MainErrorCard_MainErrorCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(MainErrorCard, _React$Component);

  function MainErrorCard() {
    Object(classCallCheck["a" /* default */])(this, MainErrorCard);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MainErrorCard).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MainErrorCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "place_card",
        style: {
          background: '#EE5E5E'
        }
      }, external_react_default.a.createElement("div", {
        className: "place_card_errorIcon"
      }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
        value: {
          size: '3.5em',
          color: '#f1f1f1'
        }
      }, external_react_default.a.createElement(fa_["FaExclamationTriangle"], null))), external_react_default.a.createElement("div", {
        className: "place_card_errorText"
      }, external_react_default.a.createElement("p", {
        className: "error_title"
      }, "\uD604\uC7AC \uC704\uCE58\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), external_react_default.a.createElement("p", {
        className: "error_sub"
      }, "\uC704\uCE58 \uC815\uBCF4\uB97C \uD5C8\uC6A9\uD574\uC8FC\uC138\uC694.")));
    }
  }]);

  return MainErrorCard;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/ForecastHeader.scss
var components_ForecastHeader = __webpack_require__("79GW");

// CONCATENATED MODULE: ./components/ForecastHeader.js






var ForecastHeader_ForecastHeader = function ForecastHeader(_ref) {
  var address = _ref.address,
      nowTime = _ref.nowTime;
  return external_react_default.a.createElement("div", {
    className: "ForecastHeader",
    style: {
      color: 'white'
    }
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2em',
      color: 'white'
    }
  }, external_react_default.a.createElement(md_["MdKeyboardBackspace"], null)))), external_react_default.a.createElement("p", {
    className: "ForecastHeader_text"
  }, address), external_react_default.a.createElement("p", {
    className: "ForecastHeader_time"
  }, nowTime));
};

/* harmony default export */ var components_ForecastHeader_0 = (ForecastHeader_ForecastHeader);
// EXTERNAL MODULE: ./components/ForecastNowcard.scss
var components_ForecastNowcard = __webpack_require__("WO7n");

// CONCATENATED MODULE: ./components/ForecastNowcard.js
 // Icon 설정 파일

 // 날씨에 맞는 아이콘 가져오기

 // 디자인 circle 가져오기

 // 날씨데이터에 따른 데이터 가공 함수 모음

 // css



var ForecastNowcard_ForecastNowcard = function ForecastNowcard(_ref) {
  var weatherType = _ref.weatherType,
      temp = _ref.temp,
      humidity = _ref.humidity,
      windSpeed = _ref.windSpeed,
      windDeg = _ref.windDeg,
      sunrise = _ref.sunrise,
      sunset = _ref.sunset,
      rain = _ref.rain,
      time = _ref.time;
  var style = changeWeatherData_WeatherTypeColorWithHours(weatherType, sunrise, sunset);
  var bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  var shadow = {
    boxShadow: style.shadow
  };
  return external_react_default.a.createElement("div", {
    className: "forecast_card_now",
    style: bgColor
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_now_Top",
    style: shadow
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_now_Top_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '4em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithHours, {
    type: weatherType,
    sunrise: sunrise,
    sunset: sunset
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_now_Top_center"
  }, external_react_default.a.createElement("p", {
    className: "timeTitle"
  }, "\uC9C0\uAE08"), external_react_default.a.createElement("p", {
    className: "weatherTitle"
  }, WeatherTypeText(weatherType))), external_react_default.a.createElement("div", {
    className: "forecast_card_now_Top_right"
  }, external_react_default.a.createElement("p", {
    className: "temperatureTitle"
  }, temp, "\u02DA"))), external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom"
  }, weatherType === 'Rain' || weatherType === 'Drizzle' ? external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiRain"], null)), external_react_default.a.createElement("p", {
    className: "numberText1"
  }, rain === undefined ? 0 : rain['1h'], " mm"), external_react_default.a.createElement("p", {
    className: "subText1"
  }, "\uAC15\uC218\uB7C9")) : weatherType === 'Snow' ? external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiHumidity"], null)), external_react_default.a.createElement("p", {
    className: "numberText1"
  }, humidity, " %"), external_react_default.a.createElement("p", {
    className: "subText1"
  }, "\uC2B5\uB3C4")) : external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiHumidity"], null)), external_react_default.a.createElement("p", {
    className: "numberText1"
  }, humidity, " %"), external_react_default.a.createElement("p", {
    className: "subText1"
  }, "\uC2B5\uB3C4")), external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiStrongWind"], null)), external_react_default.a.createElement("p", {
    className: "numberText2"
  }, windSpeed, " m/s"), external_react_default.a.createElement("p", {
    className: "subText2"
  }, WindDegreeToText(windDeg))), time >= sunrise && time <= sunset ? external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiSunset"], null)), external_react_default.a.createElement("p", {
    className: "numberText3"
  }, millisecondsToTime(sunset)), external_react_default.a.createElement("p", {
    className: "subText3"
  }, "\uC77C\uBAB0")) : external_react_default.a.createElement("div", {
    className: "forecast_card_now_Bottom_item"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '2.5em',
      className: 'nowBottom_icon'
    }
  }, external_react_default.a.createElement(wi_["WiSunrise"], null)), external_react_default.a.createElement("p", {
    className: "numberText3"
  }, millisecondsToTime(sunrise)), external_react_default.a.createElement("p", {
    className: "subText3"
  }, "\uC77C\uCD9C"))), external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      color: '#fdfdfd',
      className: 'forecast_card_now_bottomcircle'
    }
  }, external_react_default.a.createElement(fa_["FaCircle"], null)));
};

/* harmony default export */ var components_ForecastNowcard_0 = (ForecastNowcard_ForecastNowcard);
// EXTERNAL MODULE: ./components/ForecastLinecard.scss
var components_ForecastLinecard = __webpack_require__("OVTC");

// CONCATENATED MODULE: ./components/ForecastLinecard.js
 // css




var ForecastLinecard_ForecastLinecard = function ForecastLinecard(_ref) {
  var text = _ref.text,
      weatherType = _ref.weatherType;
  return external_react_default.a.createElement("div", {
    className: "forecast_lineCard"
  }, external_react_default.a.createElement("div", {
    className: "forecast_lineCard_line"
  }), external_react_default.a.createElement("div", {
    className: "forecast_lineCard_left"
  }), text === '잠시 후' ? external_react_default.a.createElement("div", {
    className: "forecast_lineCard_right"
  }, external_react_default.a.createElement("p", {
    className: "nextTimeTitle"
  }, text), external_react_default.a.createElement("p", {
    className: "nextWeatherTitle"
  }, WeatherTypeText(weatherType))) : external_react_default.a.createElement("div", {
    className: "forecast_lineCard_right"
  }, external_react_default.a.createElement("p", {
    className: "nextTimeTitle"
  }, text)));
};

/* harmony default export */ var components_ForecastLinecard_0 = (ForecastLinecard_ForecastLinecard);
// EXTERNAL MODULE: ./components/ForecastNext24.scss
var components_ForecastNext24 = __webpack_require__("pS1v");

// CONCATENATED MODULE: ./components/ForecastNext24.js
 // Icon 설정 파일

 // 디자인 circle 가져오기

 // 날씨데이터에 따른 데이터 가공 함수 모음


 // 다음 24시간의 날씨 변화를 감지해서 날씨가 바뀔 때만 array 에 저장

var forecastReducer = function forecastReducer(accumulator, value, index, array) {
  if (accumulator[0] === undefined) {
    accumulator.push(value);
  } else if (accumulator[accumulator.length - 1].weatherType !== value.weatherType) {
    accumulator.push(value);
  }

  return accumulator;
}; // 24시간동안 감지된 날씨 변화를 텍스트로 바꾸기


var ForecastNext24_next24Textloop = function next24Textloop(arr) {
  if (arr.length === 1) {
    return WeatherTypeText(arr[0].weatherType);
  } else if (arr.length === 2) {
    return arr.map(function (value, index) {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else {
        if (value.dt_hours === 0) {
          return " \uB0B4\uC77C \uC624\uC804 12\uC2DC\uBD80\uD130 ".concat(WeatherTypeText(value.weatherType));
        } else if (value.dt_hours < 12) {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uC804 ").concat(value.dt_hours, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        } else if (value.dt_hours === 12) {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(value.dt_hours, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        } else {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(value.dt_hours - 12, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        }
      }
    }).toString();
  } else if (arr.length === 3) {
    var weatherText1 = WeatherTypeText(arr[0].weatherType);
    var weatherText2, weatherText3, twoPeriods2;

    if (arr[1].dt_hours === 0) {
      weatherText2 = " \uB0B4\uC77C \uC624\uC804 12\uC2DC ~";
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours < 12) {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uC804 ").concat(arr[1].dt_hours, "\uC2DC ~");
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours === 12) {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[1].dt_hours, "\uC2DC ~");
      twoPeriods2 = '오후';
    } else {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[1].dt_hours - 12, "\uC2DC ~");
      twoPeriods2 = '오후';
    }

    if (arr[2].dt_hours === 0) {
      weatherText3 = " \uB0B4\uC77C \uC624\uC804 12\uC2DC";
    } else if (arr[2].dt_hours < 12) {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " ").concat(twoPeriods2 === '오전' ? "" : " \uC624\uC804", " ").concat(arr[2].dt_hours, "\uC2DC");
    } else if (arr[2].dt_hours === 12) {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[2].dt_hours, "\uC2DC");
    } else {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " ").concat(twoPeriods2 === '오후' ? "" : " \uC624\uD6C4", " ").concat(arr[2].dt_hours - 12, "\uC2DC");
    }

    if (arr[0].weatherType === arr[2].weatherType) {
      return "".concat(weatherText1, ",").concat(weatherText2).concat(weatherText3, " ").concat(WeatherTypeText(arr[1].weatherType));
    } else {
      return "".concat(weatherText1, ",").concat(weatherText2).concat(weatherText3, " ").concat(WeatherTypeText(arr[1].weatherType), ", \uC774\uD6C4 ").concat(WeatherTypeText(arr[2].weatherType));
    }
  } else {
    var weatherTime = arr.map(function (value, index) {
      if (value.dt_hours === 0) {
        return {
          twoPeriods: '오전',
          day: value.dt_day,
          hours: 12
        };
      } else if (value.dt_hours < 12) {
        return {
          twoPeriods: '오전',
          day: value.dt_day,
          hours: value.dt_hours
        };
      } else if (value.dt_hours === 12) {
        return {
          twoPeriods: '오후',
          day: value.dt_day,
          hours: 12
        };
      } else {
        return {
          twoPeriods: '오후',
          day: value.dt_day,
          hours: value.dt_hours - 12
        };
      }
    });
    return arr.map(function (value, index) {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else if (index < weatherTime.length - 1) {
        if (value.dt_day !== weatherTime[index - 1].day) {
          return " \uB0B4\uC77C ".concat(weatherTime[index].twoPeriods, " ").concat(weatherTime[index].hours, "\uC2DC ~ ").concat(weatherTime[index].day === weatherTime[index + 1].day ? "".concat(weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods ? "" : "".concat(weatherTime[index + 1].twoPeriods)) : "".concat(weatherTime[index + 1].twoPeriods), " ").concat(weatherTime[index + 1].hours, "\uC2DC \uC0AC\uC774 ").concat(WeatherTypeText(value.weatherType));
        } else {
          return " ".concat(weatherTime[index].twoPeriods, " ").concat(weatherTime[index].hours, "\uC2DC ~ ").concat(weatherTime[index].day === weatherTime[index + 1].day ? "".concat(weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods ? "" : "".concat(weatherTime[index + 1].twoPeriods)) : "\uB0B4\uC77C ".concat(weatherTime[index + 1].twoPeriods), " ").concat(weatherTime[index + 1].hours, "\uC2DC \uC0AC\uC774 ").concat(WeatherTypeText(value.weatherType));
        }
      } else {
        return " \uC774\uD6C4 ".concat(WeatherTypeText(value.weatherType));
      }
    }).toString();
  }
};

var ForecastNext24_ForecastNext24 = function ForecastNext24(_ref) {
  var forecast = _ref.forecast,
      sunrise = _ref.sunrise,
      sunset = _ref.sunset;
  var next24Info = forecast.reduce(forecastReducer, []);
  var style = WeatherTypeColorWithForecast(next24Info);
  var bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  return external_react_default.a.createElement("div", {
    className: "forecast_card_next24",
    style: bgColor
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      color: '#fdfdfd',
      className: 'forecast_card_next24_topcircle'
    }
  }, external_react_default.a.createElement(fa_["FaCircle"], null)), external_react_default.a.createElement("div", {
    className: "forecast_card_next24_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '3.5em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithForecast, {
    array: next24Info
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_next24_right"
  }, external_react_default.a.createElement("p", {
    className: "tomorrowTimeTitle"
  }, "\uB2E4\uC74C 24\uC2DC\uAC04"), external_react_default.a.createElement("p", {
    className: "tomorrowWeatherTitle"
  }, ForecastNext24_next24Textloop(next24Info))), external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      color: '#fdfdfd',
      className: 'forecast_card_next24_bottomcircle'
    }
  }, external_react_default.a.createElement(fa_["FaCircle"], null)));
};

/* harmony default export */ var components_ForecastNext24_0 = (ForecastNext24_ForecastNext24);
// EXTERNAL MODULE: ./components/Forecast4dayscard.scss
var components_Forecast4dayscard = __webpack_require__("OyQU");

// CONCATENATED MODULE: ./components/Forecast4dayscard.js




 // 다음 24시간의 날씨 변화를 감지해서 날씨가 바뀔 때만 array 에 저장

var Forecast4dayscard_forecastReducer = function forecastReducer(accumulator, value, index, array) {
  if (accumulator[0] === undefined) {
    accumulator.push(value);
  } else if (accumulator[accumulator.length - 1].weatherType !== value.weatherType) {
    accumulator.push(value);
  }

  return accumulator;
}; // 24시간동안 감지된 날씨 변화를 텍스트로 바꾸기


var Forecast4dayscard_ForecastTextloop = function ForecastTextloop(arr) {
  if (arr.length === 1) {
    return WeatherTypeText(arr[0].weatherType);
  } else if (arr.length === 2) {
    return arr.map(function (value, index) {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else {
        if (value.dt_hours === 0) {
          return " \uB0B4\uC77C \uC624\uC804 12\uC2DC\uBD80\uD130 ".concat(WeatherTypeText(value.weatherType));
        } else if (value.dt_hours < 12) {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uC804 ").concat(value.dt_hours, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        } else if (value.dt_hours === 12) {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(value.dt_hours, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        } else {
          return "".concat(value.dt_day !== arr[index - 1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(value.dt_hours - 12, "\uC2DC\uBD80\uD130 ").concat(WeatherTypeText(value.weatherType));
        }
      }
    }).toString();
  } else if (arr.length === 3) {
    var weatherText1 = WeatherTypeText(arr[0].weatherType);
    var weatherText2, weatherText3, twoPeriods2;

    if (arr[1].dt_hours === 0) {
      weatherText2 = " \uB0B4\uC77C \uC624\uC804 12\uC2DC ~";
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours < 12) {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uC804 ").concat(arr[1].dt_hours, "\uC2DC ~");
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours === 12) {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[1].dt_hours, "\uC2DC ~");
      twoPeriods2 = '오후';
    } else {
      weatherText2 = "".concat(arr[1].dt_day !== arr[0].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[1].dt_hours - 12, "\uC2DC ~");
      twoPeriods2 = '오후';
    }

    if (arr[2].dt_hours === 0) {
      weatherText3 = " \uB0B4\uC77C \uC624\uC804 12\uC2DC";
    } else if (arr[2].dt_hours < 12) {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " ").concat(twoPeriods2 === '오전' ? "" : " \uC624\uC804", " ").concat(arr[2].dt_hours, "\uC2DC");
    } else if (arr[2].dt_hours === 12) {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " \uC624\uD6C4 ").concat(arr[2].dt_hours, "\uC2DC");
    } else {
      weatherText3 = "".concat(arr[2].dt_day !== arr[1].dt_day ? " \uB0B4\uC77C" : "", " ").concat(twoPeriods2 === '오후' ? "" : " \uC624\uD6C4", " ").concat(arr[2].dt_hours - 12, "\uC2DC");
    }

    if (arr[0].weatherType === arr[2].weatherType) {
      return "".concat(weatherText1, ",").concat(weatherText2).concat(weatherText3, " ").concat(WeatherTypeText(arr[1].weatherType));
    } else {
      return "".concat(weatherText1, ",").concat(weatherText2).concat(weatherText3, " ").concat(WeatherTypeText(arr[1].weatherType), ", \uC774\uD6C4 ").concat(WeatherTypeText(arr[2].weatherType));
    }
  } else {
    var weatherTime = arr.map(function (value, index) {
      if (value.dt_hours === 0) {
        return {
          twoPeriods: '오전',
          day: value.dt_day,
          hours: 12
        };
      } else if (value.dt_hours < 12) {
        return {
          twoPeriods: '오전',
          day: value.dt_day,
          hours: value.dt_hours
        };
      } else if (value.dt_hours === 12) {
        return {
          twoPeriods: '오후',
          day: value.dt_day,
          hours: 12
        };
      } else {
        return {
          twoPeriods: '오후',
          day: value.dt_day,
          hours: value.dt_hours - 12
        };
      }
    });
    return arr.map(function (value, index) {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else if (index < weatherTime.length - 1) {
        if (value.dt_day !== weatherTime[index - 1].day) {
          return " \uB0B4\uC77C ".concat(weatherTime[index].twoPeriods, " ").concat(weatherTime[index].hours, "\uC2DC ~ ").concat(weatherTime[index].day === weatherTime[index + 1].day ? "".concat(weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods ? "" : "".concat(weatherTime[index + 1].twoPeriods)) : "".concat(weatherTime[index + 1].twoPeriods), " ").concat(weatherTime[index + 1].hours, "\uC2DC \uC0AC\uC774 ").concat(WeatherTypeText(value.weatherType));
        } else {
          return " ".concat(weatherTime[index].twoPeriods, " ").concat(weatherTime[index].hours, "\uC2DC ~ ").concat(weatherTime[index].day === weatherTime[index + 1].day ? "".concat(weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods ? "" : "".concat(weatherTime[index + 1].twoPeriods)) : "\uB0B4\uC77C ".concat(weatherTime[index + 1].twoPeriods), " ").concat(weatherTime[index + 1].hours, "\uC2DC \uC0AC\uC774 ").concat(WeatherTypeText(value.weatherType));
        }
      } else {
        return " \uC774\uD6C4 ".concat(WeatherTypeText(value.weatherType));
      }
    }).toString();
  }
}; // 가장 낮은 온도와 가장 높은 온도 뽑아내기


var tempReducer = function tempReducer(accumulator, obj, index, array) {
  if (accumulator[0] === undefined) {
    accumulator[0] = obj.temp;
    accumulator[1] = obj.temp;
  } else if (accumulator[0] > obj.temp) {
    accumulator[0] = obj.temp;
  } else if (accumulator[1] < obj.temp) {
    accumulator[1] = obj.temp;
  }

  return accumulator;
};

var Forecast4dayscard_Forecast4dayscard = function Forecast4dayscard(_ref) {
  var forecast = _ref.forecast,
      today = _ref.today;
  // 넘어온 날씨 예보 정보를 날짜별로 추리기
  var forecast_classifi = [];

  var _loop = function _loop(i) {
    var lastday = new Date(today.getYear(), today.getMonth(), 0).getDate();
    var dayCheck = void 0;
    var dayCount = today.getDate() + i;

    if (dayCount > lastday) {
      dayCheck = dayCount - lastday;
    } else {
      dayCheck = dayCount;
    }

    forecast_classifi.push(forecast.filter(function (obj) {
      return obj.dt_day === dayCheck;
    }));
  };

  for (var i = 1; i < 5; i++) {
    _loop(i);
  }

  var forecast_textInfo = forecast_classifi.map(function (arr) {
    return arr.reduce(Forecast4dayscard_forecastReducer, []);
  });
  var forecast_tempInfo = forecast_classifi.map(function (arr) {
    return arr.reduce(tempReducer, []);
  }); // 각 날짜별 색 설정

  var bgColor = [];

  for (var _i = 0, _forecast_classifi = forecast_classifi; _i < _forecast_classifi.length; _i++) {
    var arr = _forecast_classifi[_i];
    var style = WeatherTypeColorWithForecast(arr);
    bgColor.push({
      background: style.bgColor,
      color: style.textColor,
      boxShadow: style.shadow
    });
  }

  return external_react_default.a.createElement("div", {
    className: "forecast_card_4days"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      color: '#fdfdfd',
      className: 'forecast_card_4days_topcircle'
    }
  }, external_react_default.a.createElement(fa_["FaCircle"], null)), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayTop",
    style: bgColor[0]
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayTop_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '3.5em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithForecast, {
    array: forecast_classifi[0]
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayTop_center"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayTop_center_timeTitle"
  }, "\uB0B4\uC77C (", forecast_classifi[0][0].dt_day, "\uC77C)"), external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayTop_center_weatherTitle"
  }, Forecast4dayscard_ForecastTextloop(forecast_textInfo[0]))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayTop_right"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayTop_right_tempTitle"
  }, forecast_tempInfo[0][0], "\u02DA| ", forecast_tempInfo[0][1], "\u02DA\xA0"))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day",
    style: bgColor[1]
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '3.5em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithForecast, {
    array: forecast_classifi[1]
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_center"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_center_timeTitle"
  }, "\uBAA8\uB808(", forecast_classifi[1][0].dt_day, "\uC77C)"), external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_center_weatherTitle"
  }, Forecast4dayscard_ForecastTextloop(forecast_textInfo[1]))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_right"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_right_tempTitle"
  }, forecast_tempInfo[1][0], "\u02DA| ", forecast_tempInfo[1][1], "\u02DA\xA0"))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day",
    style: bgColor[2]
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '3.5em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithForecast, {
    array: forecast_classifi[2]
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_center"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_center_timeTitle"
  }, forecast_textInfo[2][0].dt_day, "\uC77C"), external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_center_weatherTitle"
  }, Forecast4dayscard_ForecastTextloop(forecast_textInfo[2]))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_day_right"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_day_right_tempTitle"
  }, forecast_tempInfo[2][0], "\u02DA| ", forecast_tempInfo[2][1], "\u02DA\xA0"))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayBottom",
    style: bgColor[3]
  }, external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayBottom_left"
  }, external_react_default.a.createElement(cjs["IconContext"].Provider, {
    value: {
      size: '3.5em'
    }
  }, external_react_default.a.createElement(changeWeatherData_WeatherTypeIconWithForecast, {
    array: forecast_classifi[3]
  }))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayBottom_center"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayBottom_center_timeTitle"
  }, forecast_classifi[3][0].dt_day, "\uC77C"), external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayBottom_center_weatherTitle"
  }, Forecast4dayscard_ForecastTextloop(forecast_textInfo[3]))), external_react_default.a.createElement("div", {
    className: "forecast_card_4days_dayBottom_right"
  }, external_react_default.a.createElement("p", {
    className: "forecast_card_4days_dayBottom_right_tempTitle"
  }, forecast_tempInfo[3][0], "\u02DA| ", forecast_tempInfo[3][1], "\u02DA\xA0"))));
};

/* harmony default export */ var components_Forecast4dayscard_0 = (Forecast4dayscard_Forecast4dayscard);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: external "chartjs-plugin-datalabels"
var external_chartjs_plugin_datalabels_ = __webpack_require__("lLkP");

// CONCATENATED MODULE: ./components/ForecastChart.js








var legendOpts = {
  display: true,
  position: 'top',
  fullWidth: true,
  labels: {
    fontColor: '#f1f1f1'
  }
};

var ForecastChart_ForecastChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ForecastChart, _Component);

  function ForecastChart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ForecastChart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ForecastChart).call(this, props));
    _this.state = {
      data: {
        datasets: [{
          type: 'bar',
          label: '강수량',
          data: _this.props.forecast.map(function (obj) {
            return obj.rain;
          }),
          fill: false,
          backgroundColor: '#457AD1',
          borderColor: '#457AD1',
          hoverBackgroundColor: '#457AD1',
          hoverBorderColor: '#457AD1',
          yAxisID: 'y-axis-2',
          datalabels: {
            display: true,
            align: 'top',
            anchor: 'end',
            backgroundColor: '#457AD1',
            borderColor: '#457AD1',
            borderRadius: 4,
            borderWidth: 2,
            color: '#f1f1f1'
          }
        }, {
          type: 'line',
          label: '기온',
          data: _this.props.forecast.map(function (obj) {
            return obj.temp;
          }),
          fill: false,
          borderColor: '#f8bc25',
          backgroundColor: '#f8bc25',
          pointBorderColor: '#f8bc25',
          pointBackgroundColor: '#f8bc25',
          pointHoverBackgroundColor: '#f8bc25',
          pointHoverBorderColor: '#f8bc25',
          yAxisID: 'y-axis-1',
          datalabels: {
            display: true,
            align: 'top',
            anchor: 'end',
            backgroundColor: '#f8bc25',
            borderColor: '#f8bc25',
            borderRadius: 4,
            borderWidth: 2,
            color: '#333'
          }
        }]
      },
      options: {
        responsive: true,
        elements: {
          line: {
            fill: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontColor: '#f1f1f1',
              fontSize: '16'
            },
            gridLines: {
              display: false
            },
            labels: _this.props.forecast.map(function (obj) {
              if (obj.dt_hours === 0) {
                return "\uC624\uC804 12\uC2DC";
              } else if (obj.dt_hours < 12) {
                return "\uC624\uC804 ".concat(obj.dt_hours, "\uC2DC");
              } else if (obj.dt_hours === 12) {
                return "\uC624\uD6C4 ".concat(obj.dt_hours, "\uC2DC");
              } else {
                return "\uC624\uD6C4 ".concat(obj.dt_hours - 12, "\uC2DC");
              }
            })
          }],
          yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: {
              fontColor: '#f1f1f1',
              fontSize: '16'
            },
            gridLines: {
              display: false
            },
            labels: {
              show: true
            },
            scaleLabel: {
              display: true,
              fontColor: '#f1f1f1',
              fontSize: 16,
              labelString: '기온'
            }
          }, {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100
            }
          }]
        }
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ForecastChart, [{
    key: "render",
    value: function render() {
      var state = this.state;
      return external_react_default.a.createElement("div", {
        className: "forecast_chart"
      }, external_react_default.a.createElement("h2", {
        style: {
          color: '#f1f1f1',
          textAlign: 'center'
        }
      }, "\uB2E4\uC74C 24\uC2DC\uAC04 \uAE30\uC628 \uBC0F \uAC15\uC218\uB7C9"), external_react_default.a.createElement(external_react_chartjs_2_["Bar"], {
        data: state.data,
        options: state.options,
        legend: legendOpts
      }));
    }
  }]);

  return ForecastChart;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport MainHeader */__webpack_require__.d(__webpack_exports__, "h", function() { return components_MainHeader_0; });
/* concated harmony reexport MainPlacesCard */__webpack_require__.d(__webpack_exports__, "i", function() { return MainPlacesCard_MainPlacesCard; });
/* concated harmony reexport MainErrorCard */__webpack_require__.d(__webpack_exports__, "g", function() { return MainErrorCard_MainErrorCard; });
/* concated harmony reexport ForecastHeader */__webpack_require__.d(__webpack_exports__, "c", function() { return components_ForecastHeader_0; });
/* concated harmony reexport ForecastNowcard */__webpack_require__.d(__webpack_exports__, "f", function() { return components_ForecastNowcard_0; });
/* concated harmony reexport ForecastLinecard */__webpack_require__.d(__webpack_exports__, "d", function() { return components_ForecastLinecard_0; });
/* concated harmony reexport ForecastNext24 */__webpack_require__.d(__webpack_exports__, "e", function() { return components_ForecastNext24_0; });
/* concated harmony reexport Forecast4dayscard */__webpack_require__.d(__webpack_exports__, "a", function() { return components_Forecast4dayscard_0; });
/* concated harmony reexport ForecastChart */__webpack_require__.d(__webpack_exports__, "b", function() { return ForecastChart_ForecastChart; });










/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fDON":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
exports.DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined,
};
exports.IconContext = React.createContext && React.createContext(exports.DefaultContext);


/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "kxKB":
/***/ (function(module, exports) {



/***/ }),

/***/ "lLkP":
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-datalabels");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pS1v":
/***/ (function(module, exports) {



/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w2nv":
/***/ (function(module, exports) {



/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ })

/******/ });