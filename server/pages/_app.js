(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ 6334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-device-detect"
var external_react_device_detect_namespaceObject = require("react-device-detect");;
;// CONCATENATED MODULE: external "polished"
var external_polished_namespaceObject = require("polished");;
;// CONCATENATED MODULE: external "gsap"
var external_gsap_namespaceObject = require("gsap");;
// EXTERNAL MODULE: ./cursor/Context.js
var Context = __webpack_require__(6202);
// EXTERNAL MODULE: ./cursor/utils.js
var utils = __webpack_require__(8765);
;// CONCATENATED MODULE: ./cursor/Cursor.js








const Debug = (external_styled_components_default()).div`
    background: #0f04;
    width: 100vw;
    position: fixed;
    z-index: 10000;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 8px 16px;
    > * {
        min-width: 200px;
    }
`;
const Cursor = (external_styled_components_default()).div`
    width: 24px;
    height: 24px;
    position: fixed;
    background: ${({
  theme
}) => (0,external_polished_namespaceObject.transparentize)(0.5, '#bbbbbb')};
    border-radius: 12px;
    z-index: 69420;
    pointer-events: none;

    transition: opacity 0.3s;
    &.block {
        border-radius: 4px;
    }
    &.text {
        height: 30px;
        width: 3px;
        border-radius: 1px;
    }
    &.pressing {
        opacity: 0.5;
        transition: opacity 0s;
    }
`;

const CursorContainer = ({
  debug
}) => {
  const {
    pos,
    selectedElement,
    status,
    pressing,
    setStatus
  } = (0,external_react_.useContext)(Context/* default */.Z);
  const cursorRef = (0,external_react_.useRef)();
  let baseStyles = {
    left: pos.x - 12,
    top: pos.y - 12,
    width: '24px',
    height: '24px'
  }; // when the selectedElement or status changes

  (0,external_react_.useEffect)(() => {
    if (!selectedElement.el) return;

    if (status == 'entering' || status == 'shifting') {
      if (selectedElement.type == 'block') {
        external_gsap_namespaceObject.gsap.to(cursorRef.current, {
          duration: 0.5,
          ease: 'elastic.out(1, 1)',
          left: selectedElement.el.offsetLeft,
          top: selectedElement.el.getBoundingClientRect().top,
          height: selectedElement.el.offsetHeight + 'px',
          width: selectedElement.el.offsetWidth + 'px',
          borderRadius: '4px',
          onComplete: () => {
            setStatus('entered');
          }
        });
      }
    } else if (status == 'exiting') {
      // kill all current animations for the block and clear the props it has added
      external_gsap_namespaceObject.gsap.killTweensOf(cursorRef.current);
    }
  }, [selectedElement, status]);
  (0,external_react_.useEffect)(() => {
    // general exit handling
    if (status == 'exiting' && !selectedElement.el) {
      external_gsap_namespaceObject.gsap.killTweensOf(cursorRef.current);
      external_gsap_namespaceObject.gsap.to(cursorRef.current, {
        duration: 0.5,
        ease: 'elastic.out(1, .5)',
        width: '24px',
        height: '24px',
        x: 0,
        y: 0,
        left: pos.x - 12,
        top: pos.y - 12,
        borderRadius: '12px',
        onComplete: () => {
          setStatus('');
        }
      });
    } else if ((status == 'entering' || status == 'shifting') && selectedElement.type == 'text') {
      // text cursor handling
      const {
        textSize
      } = selectedElement.config;
      external_gsap_namespaceObject.gsap.killTweensOf(cursorRef.current);
      external_gsap_namespaceObject.gsap.to(cursorRef.current, {
        duration: 0.5,
        ease: 'elastic.out(1, 1)',
        height: textSize,
        width: '3px',
        x: 12,
        y: textSize / -2 + 10,
        borderRadius: '1px',
        onComplete: () => {
          setStatus('entered');
        }
      });
    }
  }, [pos]);

  if (selectedElement.el) {
    const amount = 5;
    const relativePos = (0,utils.getRelativePosition)(pos, selectedElement.el);
    const xMid = selectedElement.el.clientWidth / 2;
    const yMid = selectedElement.el.clientHeight / 2;
    const xMove = (relativePos.x - xMid) / selectedElement.el.clientWidth * amount;
    const yMove = (relativePos.y - yMid) / selectedElement.el.clientHeight * amount;

    if (selectedElement.type == 'block') {
      baseStyles = {
        left: selectedElement.el.offsetLeft + xMove,
        top: selectedElement.el.getBoundingClientRect().top + yMove,
        height: selectedElement.el.offsetHeight + 'px',
        width: selectedElement.el.offsetWidth + 'px'
      };
    }
  }

  let shapeClass = selectedElement.el && !(status == 'entering' || status == 'shifting') && selectedElement.type;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [debug && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Debug, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: JSON.stringify({
          pos
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: JSON.stringify({
          status
        })
      }), selectedElement.el ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: 'pos: ' + JSON.stringify(pos.y) + '  |  ' + 'offTop: ' + JSON.stringify(selectedElement.el.offsetTop) + '  |  ' + 'scroll: ' + JSON.stringify(window.pageYOffset) + '  |  ' + 'relPos: ' + JSON.stringify((0,utils.getRelativePosition)(pos, selectedElement.el).y) + '  |  ' + 'boundTop: ' + JSON.stringify(selectedElement.el.getBoundingClientRect().top)
      }) : null]
    }), /*#__PURE__*/jsx_runtime_.jsx(Cursor, {
      ref: cursorRef,
      style: baseStyles,
      className: [shapeClass, pressing && 'pressing']
    })]
  });
};

/* harmony default export */ var cursor_Cursor = (CursorContainer);
;// CONCATENATED MODULE: ./cursor/Provider.js






const GlobalStyle = external_styled_components_.createGlobalStyle`
  body, input, textarea, a {
    ${({
  showingCursor
}) => !showingCursor && `
      cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAADUlEQVQYV2P4//8/IwAI/QL/+TZZdwAAAABJRU5ErkJggg=='),
      url(cursor.png),
      none; 
    `}
  }
`;

const Provider = ({
  debug,
  children
}) => {
  const {
    0: mousePos,
    1: setMousePos
  } = (0,external_react_.useState)({
    x: 0,
    y: 0
  });
  const {
    0: selectedElement,
    1: selectedElementSet
  } = (0,external_react_.useState)({
    el: null
  });
  const {
    0: status,
    1: setStatus
  } = (0,external_react_.useState)('');
  const {
    0: pressing,
    1: setPressing
  } = (0,external_react_.useState)(false);
  const {
    0: showingCursor,
    1: showingCursorSet
  } = (0,external_react_.useState)(false);

  const handleMouseMove = ({
    pageX,
    pageY
  }) => {
    setMousePos({
      x: pageX,
      y: pageY - window.pageYOffset
    });
  };

  const context = {
    pos: mousePos,
    selectedElementSet: element => {
      selectedElementSet(element);

      if (!selectedElement.el) {
        setStatus('entering');
      } else {
        setStatus('shifting');
      }
    },
    removeSelectedElement: () => {
      setStatus('exiting');
      selectedElementSet({
        el: null
      });
    },
    setStatus: setStatus,
    status: status,
    selectedElement,
    pressing,
    toggleCursor: () => showingCursorSet(!showingCursor),
    showingCursor: showingCursor
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onMouseMove: handleMouseMove,
    onMouseDown: () => setPressing(true),
    onMouseUp: () => setPressing(false),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Context/* default.Provider */.Z.Provider, {
      value: context,
      children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {
        showingCursor: showingCursor
      }), /*#__PURE__*/jsx_runtime_.jsx(cursor_Cursor, {
        debug: debug
      }), children]
    })
  });
};

/* harmony default export */ var cursor_Provider = (Provider);
;// CONCATENATED MODULE: ./components/Providers.js







const Providers = ({
  children
}) => {
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setMounted(true);
  }, []);
  const body = external_react_device_detect_namespaceObject.isBrowser ? /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(cursor_Provider, {
      "not-debug": true,
      children: children
    })
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [children, " "]
  });

  if (!mounted) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        visibility: 'hidden'
      },
      children: body
    });
  }

  return body;
};

/* harmony default export */ var components_Providers = (Providers);
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyApp extends app.default {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx(components_Providers, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    });
  }

}

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544], function() { return __webpack_exec__(6334); });
module.exports = __webpack_exports__;

})();