self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./app/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Player/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ "./node_modules/react-audio-player/dist/bundle.js");
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/minutesToMilliseconds */ "./app/functions/minutesToMilliseconds.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./app/components/Player/style.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./app/config.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\app\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Player = function Player() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      currentLine = _useState[0],
      setCurrentLine = _useState[1];

  var timestamps = ["00:08", "00:12", "00:16", "00:20"];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    timestamps.forEach(function (time) {
      setTimeout(function () {
        return setCurrentLine(currentLine + 1);
      }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(time));
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_5__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Player, "Wm9H+p0rL29+hGzSUKUCJElQfGA=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lc3RhbXBzIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsInRpbWUiLCJzZXRUaW1lb3V0IiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwic29uZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUl4QixNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5CO0FBT0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaRCxjQUFVLENBQUNFLE9BQVgsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFRO0FBQ3ZCQyxnQkFBVSxDQUFDO0FBQUEsZUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLE9BQUQsRUFBc0NPLHVGQUFxQixDQUFDRixJQUFELENBQTNELENBQVY7QUFDSCxLQUZEO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUFLRyx5Q0FBSSxDQUFDUixXQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSSw4REFBQywyREFBRDtBQUFrQixTQUFHLEVBQUMsaUJBQXRCO0FBQXdDLGNBQVE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0EzQk07O0dBQU1GLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5jYTBiNGJmY2Y5YWI4NTBiM2U0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kc30gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7c29uZ30gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudExpbmUsIHNldEN1cnJlbnRMaW5lXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgdGltZXN0YW1wcyA9IFtcclxuICAgICAgICBcIjAwOjA4XCIsXHJcbiAgICAgICAgXCIwMDoxMlwiLFxyXG4gICAgICAgIFwiMDA6MTZcIixcclxuICAgICAgICBcIjAwOjIwXCIsXHJcbiAgICBdXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUpPT57XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lKSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9