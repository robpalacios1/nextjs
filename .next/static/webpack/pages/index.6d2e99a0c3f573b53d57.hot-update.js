webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\robpa\\OneDrive\\Escritorio\\nextproject\\components\\Users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Users(props) {
  var _this = this;

  return __jsx("ul", {
    className: "list-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.users.map(function (user) {
    return __jsx("li", {
      className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
      key: user.id,
      onClick: function onClick(event) {
        return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/users/[id]', "users/".concat(user.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 29
      }
    }, user.first_name, " ", user.last_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 29
      }
    }, "Email: ", user.email)), __jsx("img", {
      src: user.avatar,
      alt: user.first_name + user.last_name,
      style: {
        borderRadius: '50%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }));
  }));
}

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiLCJldmVudCIsIlJvdXRlciIsInB1c2giLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsU0FDSTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLFdBQ2hCO0FBQUksZUFBUyxFQUFDLDBGQUFkO0FBQXlHLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFuSDtBQUF1SCxhQUFPLEVBQUUsaUJBQUFDLEtBQUs7QUFBQSxlQUFJQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixrQkFBb0NKLElBQUksQ0FBQ0MsRUFBekMsRUFBSjtBQUFBLE9BQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxJQUFJLENBQUNLLFVBQVYsT0FBdUJMLElBQUksQ0FBQ00sU0FBNUIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVdOLElBQUksQ0FBQ08sS0FBaEIsQ0FGSixDQURKLEVBS0k7QUFDSSxTQUFHLEVBQUVQLElBQUksQ0FBQ1EsTUFEZDtBQUVJLFNBQUcsRUFBRVIsSUFBSSxDQUFDSyxVQUFMLEdBQWtCTCxJQUFJLENBQUNNLFNBRmhDO0FBR0ksV0FBSyxFQUFFO0FBQUNHLG9CQUFZLEVBQUU7QUFBZixPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixDQURnQjtBQUFBLEdBQXBCLENBRlIsQ0FESjtBQW1CSDs7S0FwQlFiLEs7QUFzQk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMmU5OWEwYzNmNTczYjUzZDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBVc2Vycyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy51c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBrZXk9e3VzZXIuaWR9IG9uQ2xpY2s9e2V2ZW50ID0+IFJvdXRlci5wdXNoKCcvdXNlcnMvW2lkXScsIGB1c2Vycy8ke3VzZXIuaWR9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=