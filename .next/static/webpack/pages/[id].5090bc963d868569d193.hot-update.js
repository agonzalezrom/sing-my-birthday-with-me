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

  console.log((0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("01:12"));
  setTimeout(function () {
    return setCurrentLine(currentLine + 1);
  }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:08"));
  setTimeout(function () {
    return setCurrentLine(currentLine + 1);
  }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:12"));
  setTimeout(function () {
    return setCurrentLine(currentLine + 1);
  }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:16")); // useEffect(()=>{
  // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:08"));
  // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:12"));
  // setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds("00:16"));
  // setTimeout(() => setCurrentLine(currentLine+1), 13590);
  // setTimeout(() => setCurrentLine(currentLine+1), 17220);
  // setTimeout(() => setCurrentLine(currentLine+1), 20520);
  // setTimeout(() => setCurrentLine(currentLine+1), 24120);
  // setTimeout(() => setCurrentLine(currentLine+1), 28300);
  // setTimeout(() => setCurrentLine(currentLine+1), 35890);
  // setTimeout(() => setCurrentLine(currentLine+1), 43060);
  // setTimeout(() => setCurrentLine(currentLine+1), 46430);
  // setTimeout(() => setCurrentLine(currentLine+1), 54560);
  // setTimeout(() => setCurrentLine(currentLine+1), 63762);
  // setTimeout(() => setCurrentLine(currentLine+1), 75097);
  // setTimeout(() => setCurrentLine(currentLine+1), 82139);
  // setTimeout(() => setCurrentLine(currentLine+1), 85139);
  // setTimeout(() => setCurrentLine(currentLine+1), 91139);
  // setTimeout(() => setCurrentLine(currentLine+1), 95139);
  // },[])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(Player, "DHq9AgmGnSdye8qMY7aeHnPa1Rk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJjb25zb2xlIiwibG9nIiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwic2V0VGltZW91dCIsInNvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFY0MsK0NBQVEsQ0FBQyxDQUFELENBRnRCO0FBQUEsTUFFakJDLFdBRmlCO0FBQUEsTUFFSkMsY0FGSTs7QUFJeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBcUIsQ0FBQyxPQUFELENBQWpDO0FBRUFDLFlBQVUsQ0FBQztBQUFBLFdBQU1KLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxHQUFELEVBQXNDSSx1RkFBcUIsQ0FBQyxPQUFELENBQTNELENBQVY7QUFDQUMsWUFBVSxDQUFDO0FBQUEsV0FBTUosY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEdBQUQsRUFBc0NJLHVGQUFxQixDQUFDLE9BQUQsQ0FBM0QsQ0FBVjtBQUNBQyxZQUFVLENBQUM7QUFBQSxXQUFNSixjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsR0FBRCxFQUFzQ0ksdUZBQXFCLENBQUMsT0FBRCxDQUEzRCxDQUFWLENBUndCLENBVXhCO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7O0FBRUEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtFLHlDQUFJLENBQUNOLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXpDTTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjUwOTBiYzk2M2Q4Njg1NjlkMTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQge3Nvbmd9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kc30gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRMaW5lLCBzZXRDdXJyZW50TGluZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAxOjEyXCIpKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjEyXCIpKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjE2XCIpKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDowOFwiKSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MTJcIikpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjE2XCIpKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAxMzU5MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMTcyMjApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDIwNTIwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAyNDEyMCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMjgzMDApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDM1ODkwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA0MzA2MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNDY0MzApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDU0NTYwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA2Mzc2Mik7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNzUwOTcpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDgyMTM5KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA4NTEzOSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgOTExMzkpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDk1MTM5KTtcclxuICAgIC8vIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jZW50ZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3NvbmdbY3VycmVudExpbmVdfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyIHNyYz1cIi9hdWRpby9zb25nLm1wM1wiIGF1dG9QbGF5Lz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=