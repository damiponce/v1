exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 8795:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_NavLink; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./cursor/Context.js
var Context = __webpack_require__(6202);
// EXTERNAL MODULE: ./cursor/utils.js
var utils = __webpack_require__(8765);
;// CONCATENATED MODULE: ./cursor/WithHover.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/* harmony default export */ var WithHover = ((Component, type, config) => (_ref) => {
  let {
    passThroughRef
  } = _ref,
      props = _objectWithoutProperties(_ref, ["passThroughRef"]);

  const context = (0,external_react_.useContext)(Context/* default */.Z);
  const {
    selectedElement,
    pos
  } = context;
  const {
    0: hovering,
    1: setHovering
  } = (0,external_react_.useState)(false);

  const handleMouseEnter = e => {
    if (!context.selectedElementSet) return;
    let result = {
      el: e.currentTarget,
      type,
      config: _objectSpread({}, config)
    };

    if (type == 'text') {
      let computed = window.getComputedStyle(e.currentTarget).fontSize;
      result.config.textSize = parseFloat(computed.replace('px'));
    }

    context.selectedElementSet(result);
    setHovering(true);
  };

  const handleMouseLeave = (_ref2) => {
    let {
      pageX,
      pageY
    } = _ref2,
        e = _objectWithoutProperties(_ref2, ["pageX", "pageY"]);

    if (!context.removeSelectedElement) return;
    context.removeSelectedElement();
    setHovering(false);
  };

  let styles;

  if (hovering && selectedElement.el && selectedElement.type == 'block') {
    const amount = selectedElement.config.hoverOffset ? selectedElement.config.hoverOffset : 2;
    const relativePos = (0,utils.getRelativePosition)(pos, selectedElement.el);
    const xMid = selectedElement.el.offsetWidth / 2;
    const yMid = selectedElement.el.offsetHeight / 2;
    const xMove = (relativePos.x - xMid) / selectedElement.el.offsetHeight * amount;
    const yMove = (relativePos.y - yMid) / selectedElement.el.offsetHeight * amount;
    styles = {
      transform: `translate(${xMove}px, ${yMove}px)`
    };
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: styles,
    ref: passThroughRef
  }, props));
});
;// CONCATENATED MODULE: ./components/NavLink.js


function NavLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NavLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NavLink_ownKeys(Object(source), true).forEach(function (key) { NavLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NavLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NavLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Container = (external_styled_components_default()).div`
    width: max-content;
    padding: 8px 16px;
    position: relative;
    font-size: 0;
    z-index: 70000;
`;

const NavLink = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, NavLink_objectSpread({}, props));
};

/* harmony default export */ var components_NavLink = (WithHover(NavLink, 'block'));

/***/ }),

/***/ 6202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)("light"));

/***/ }),

/***/ 8765:
/***/ (function(module) {

const getRelativePosition = (pageCoords, element) => {
  return {
    // x: pageCoords.x - element.offsetLeft,
    // y: pageCoords.y - element.offsetTop + window.pageYOffset
    x: pageCoords.x - element.offsetLeft,
    y: pageCoords.y - element.getBoundingClientRect().top
  };
};

module.exports = {
  getRelativePosition
};

/***/ }),

/***/ 2208:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "styles_main__2Z1qn",
	"pageLinksGroup": "styles_pageLinksGroup__3McWl",
	"pageLink": "styles_pageLink__1q4h-",
	"socialLinks": "styles_socialLinks__2e9bi",
	"socialIcon": "styles_socialIcon__1VGDZ"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;