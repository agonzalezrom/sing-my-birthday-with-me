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

  var timestamps = ["00:08", "00:12", "00:16"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return timestamps.forEach(function (time, index) {
      var timer = setTimeout(function () {
        return setCurrentLine(index);
      }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)(time));
      console.log((0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)(time) / 6000);
      return function () {
        clearTimeout(timer);
      };
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lc3RhbXBzIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsInRpbWUiLCJpbmRleCIsInRpbWVyIiwic2V0VGltZW91dCIsIm1pbnV0ZXNUb01pbGxpc2Vjb25kcyIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBSXhCLE1BQU1DLFVBQVUsR0FBRyxDQUNmLE9BRGUsRUFFZixPQUZlLEVBR2YsT0FIZSxDQUFuQjtBQU1BQyxrREFBUyxDQUFDLFlBQU07QUFDWixXQUFPRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDckMsVUFBSUMsS0FBSyxHQUFHQyxVQUFVLENBQUM7QUFBQSxlQUFNUCxjQUFjLENBQUNLLEtBQUQsQ0FBcEI7QUFBQSxPQUFELEVBQThCRyx1RkFBcUIsQ0FBQ0osSUFBRCxDQUFuRCxDQUF0QjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsdUZBQXFCLENBQUNKLElBQUQsQ0FBckIsR0FBNEIsSUFBeEM7QUFDQSxhQUFPLFlBQU07QUFDVE8sb0JBQVksQ0FBQ0wsS0FBRCxDQUFaO0FBQ0gsT0FGRDtBQUdILEtBTk0sQ0FBUDtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS00seUNBQUksQ0FBQ2IsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUksOERBQUMsMkRBQUQ7QUFBa0IsU0FBRyxFQUFDLGlCQUF0QjtBQUF3QyxjQUFRO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBOUJNOztHQUFNRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uNGVmMTE5YWZjZmFjMDkzOGVlOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gXCJyZWFjdC1hdWRpby1wbGF5ZXJcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7c29uZ30gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7bWludXRlc1RvTWlsbGlzZWNvbmRzfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL21pbnV0ZXNUb01pbGxpc2Vjb25kc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRMaW5lLCBzZXRDdXJyZW50TGluZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IHRpbWVzdGFtcHMgPSBbXHJcbiAgICAgICAgXCIwMDowOFwiLFxyXG4gICAgICAgIFwiMDA6MTJcIixcclxuICAgICAgICBcIjAwOjE2XCJcclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGluZGV4KSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKHRpbWUpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWludXRlc1RvTWlsbGlzZWNvbmRzKHRpbWUpLzYwMDApXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jZW50ZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3NvbmdbY3VycmVudExpbmVdfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyIHNyYz1cIi9hdWRpby9zb25nLm1wM1wiIGF1dG9QbGF5Lz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=