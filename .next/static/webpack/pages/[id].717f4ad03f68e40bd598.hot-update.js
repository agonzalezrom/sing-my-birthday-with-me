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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./app/components/Player/style.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./app/config.ts");
/* harmony import */ var _functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/minutesToMilliseconds */ "./app/functions/minutesToMilliseconds.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\app\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Player = function Player() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      currentLine = _useState[0],
      setCurrentLine = _useState[1];

  var accumulated = 0;
  var timestamps = ["00:08", "00:12", "00:16"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (currentLine < timestamps.length) {
      var actual = (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)(timestamps[currentLine]);
      accumulated += actual;
      var current = currentLine > 0 ? accumulated - actual : actual;
      var timer = setTimeout(function () {
        return setCurrentLine(currentLine + 1);
      }, current);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [currentLine]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJhY2N1bXVsYXRlZCIsInRpbWVzdGFtcHMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJhY3R1YWwiLCJtaW51dGVzVG9NaWxsaXNlY29uZHMiLCJjdXJyZW50IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic29uZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUd4QixNQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsQ0FBbkI7QUFNQUMsa0RBQVMsQ0FBQyxZQUFNO0FBRVosUUFBR0osV0FBVyxHQUFDRyxVQUFVLENBQUNFLE1BQTFCLEVBQ0E7QUFDSSxVQUFJQyxNQUFNLEdBQUdDLHVGQUFxQixDQUFDSixVQUFVLENBQUNILFdBQUQsQ0FBWCxDQUFsQztBQUNBRSxpQkFBVyxJQUFJSSxNQUFmO0FBQ0EsVUFBSUUsT0FBTyxHQUFHUixXQUFXLEdBQUcsQ0FBZCxHQUFtQkUsV0FBVyxHQUFHSSxNQUFqQyxHQUEyQ0EsTUFBekQ7QUFDQSxVQUFJRyxLQUFLLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGVBQU1ULGNBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBcEI7QUFBQSxPQUFELEVBQXdDUSxPQUF4QyxDQUF0QjtBQUNBLGFBQU8sWUFBTTtBQUNURyxvQkFBWSxDQUFDRixLQUFELENBQVo7QUFDSCxPQUZEO0FBR0g7QUFFSixHQWJRLEVBYU4sQ0FBQ1QsV0FBRCxDQWJNLENBQVQ7QUFnQkEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtZLHlDQUFJLENBQUNaLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXBDTTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjcxN2Y0YWQwM2Y2OGU0MGJkNTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQge3Nvbmd9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kc30gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuICAgIGxldCBhY2N1bXVsYXRlZCA9IDBcclxuICAgIGNvbnN0IHRpbWVzdGFtcHMgPSBbXHJcbiAgICAgICAgXCIwMDowOFwiLFxyXG4gICAgICAgIFwiMDA6MTJcIixcclxuICAgICAgICBcIjAwOjE2XCJcclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjdXJyZW50TGluZTx0aW1lc3RhbXBzLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWwgPSBtaW51dGVzVG9NaWxsaXNlY29uZHModGltZXN0YW1wc1tjdXJyZW50TGluZV0pXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkICs9IGFjdHVhbFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGN1cnJlbnRMaW5lID4gMCA/IChhY2N1bXVsYXRlZCAtIGFjdHVhbCkgOiBhY3R1YWxcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSArIDEpLCBjdXJyZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2N1cnJlbnRMaW5lXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9