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

  console.log((0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("01:12")); // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:08"));
  // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:12"));
  // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:16"));
  // useEffect(
  //     () => {
  //         let timer1 = setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:08"));
  //         let timer2 = setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:12"));
  //         let timer3 = setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:16"));
  //         return () => {
  //             clearTimeout(timer1);
  //             clearTimeout(timer2);
  //             clearTimeout(timer3);
  //         };
  //     },
  //     []
  // );

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:08"));
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:12"));
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:16"));
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 13590);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 17220);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 20520);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 24120);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 28300);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 35890);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 43060);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 46430);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 54560);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 63762);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 75097);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 82139);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 85139);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 91139);
    setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, 95139);
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
          lineNumber: 56,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJjb25zb2xlIiwibG9nIiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFY0MsK0NBQVEsQ0FBQyxDQUFELENBRnRCO0FBQUEsTUFFakJDLFdBRmlCO0FBQUEsTUFFSkMsY0FGSTs7QUFJeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBcUIsQ0FBQyxPQUFELENBQWpDLEVBSndCLENBTXhCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQUk7QUFDVkMsY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0NJLHVGQUFxQixDQUFDLE9BQUQsQ0FBM0QsQ0FBVjtBQUNBRSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQ0ksdUZBQXFCLENBQUMsT0FBRCxDQUEzRCxDQUFWO0FBQ0FFLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDSSx1RkFBcUIsQ0FBQyxPQUFELENBQTNELENBQVY7QUFDQUUsY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0MsS0FBdEMsQ0FBVjtBQUNBTSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQyxLQUF0QyxDQUFWO0FBQ0FNLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDLEtBQXRDLENBQVY7QUFDQU0sY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0MsS0FBdEMsQ0FBVjtBQUNBTSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQyxLQUF0QyxDQUFWO0FBQ0FNLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDLEtBQXRDLENBQVY7QUFDQU0sY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0MsS0FBdEMsQ0FBVjtBQUNBTSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQyxLQUF0QyxDQUFWO0FBQ0FNLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDLEtBQXRDLENBQVY7QUFDQU0sY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0MsS0FBdEMsQ0FBVjtBQUNBTSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQyxLQUF0QyxDQUFWO0FBQ0FNLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDLEtBQXRDLENBQVY7QUFDQU0sY0FBVSxDQUFDO0FBQUEsYUFBTUwsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0MsS0FBdEMsQ0FBVjtBQUNBTSxjQUFVLENBQUM7QUFBQSxhQUFNTCxjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQyxLQUF0QyxDQUFWO0FBQ0FNLGNBQVUsQ0FBQztBQUFBLGFBQU1MLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDLEtBQXRDLENBQVY7QUFDSCxHQW5CUSxFQW1CUCxFQW5CTyxDQUFUO0FBcUJBLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUFLTyx5Q0FBSSxDQUFDUCxXQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSSw4REFBQywyREFBRDtBQUFrQixTQUFHLEVBQUMsaUJBQXRCO0FBQXdDLGNBQVE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F2RE07O0dBQU1GLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5iMTk2ZjA0Y2ExMGJlYjZiZDQwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHttaW51dGVzVG9NaWxsaXNlY29uZHN9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvbWludXRlc1RvTWlsbGlzZWNvbmRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMToxMlwiKSlcclxuXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDowOFwiKSk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxMlwiKSk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxNlwiKSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KFxyXG4gICAgLy8gICAgICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IHRpbWVyMSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgIC8vICAgICAgICAgbGV0IHRpbWVyMiA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjEyXCIpKTtcclxuICAgIC8vICAgICAgICAgbGV0IHRpbWVyMyA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjE2XCIpKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcjEpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyMik7XHJcbiAgICAvLyAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIzKTtcclxuICAgIC8vICAgICAgICAgfTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIFtdXHJcbiAgICAvLyApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxMlwiKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MTZcIikpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDEzNTkwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAxNzIyMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMjA1MjApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDI0MTIwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAyODMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMzU4OTApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDQzMDYwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA0NjQzMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNTQ1NjApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDYzNzYyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA3NTA5Nyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgODIxMzkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDg1MTM5KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA5MTEzOSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgOTUxMzkpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==