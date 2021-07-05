exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 3445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8058);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2208);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8795);










function Layout({
  children
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let header = document.getElementById('js-header');
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-burger');
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle((_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active));
      header.classList.toggle((_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().height));
    });
    let cursor = document.getElementById('js-cursor');

    window.onscroll = function () {
      stickNavBar();
      cursor.style.marginTop = window.pageYOffset;
    }; // Get the offset position of the navbar


    var sticky = header.offsetTop; // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

    function stickNavBar() {
      if (window.pageYOffset >= sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
      className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
      id: "js-header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          style: {
            padding: 8
          },
          id: "js-cursor",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/dp-logo.svg",
              width: "30",
              height: "20",
              alt: ""
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().spacer)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        style: {
          padding: 8
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().burger),
          id: "js-burger",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/burger-menu.svg",
            width: "30",
            height: "20",
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().links),
        id: "js-menu",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/photography",
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "Fotograf\xEDa"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/design",
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "Dise\xF1o"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/coding",
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "Programaci\xF3n"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/about",
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "Sobre m\xED"
            })
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "footer",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon) + ' ' + (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().copy),
        children: "\xA9 Dami\xE1n Ponce 2021 "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialLinks),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "mailto:dami.ponce8@gmail.com",
            target: "_blank",
            rel: "noreferrer",
            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon),
            children: "Email"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "https://github.com/damiponce",
            target: "_blank",
            rel: "noreferrer",
            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon),
            children: "GitHub"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "https://www.linkedin.com/in/damianponce/",
            target: "_blank",
            rel: "noreferrer",
            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon),
            children: "LinkedIn"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "https://www.instagram.com/damiponce28/",
            target: "_blank",
            rel: "noreferrer",
            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon),
            children: "Instagram"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "https://twitter.com/damiponce28",
            target: "_blank",
            rel: "noreferrer",
            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcon),
            children: "Twitter"
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 8058:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "layout_container__3sC0E",
	"header": "layout_header__3KufH",
	"copy": "layout_copy__2qsHr",
	"logo": "layout_logo__23MG9",
	"burger": "layout_burger__1aZ55",
	"links": "layout_links__1p18F",
	"link": "layout_link__1Xz6R",
	"height": "layout_height__3QpvT",
	"active": "layout_active__1bOK4",
	"spacer": "layout_spacer__rvO52"
};


/***/ })

};
;