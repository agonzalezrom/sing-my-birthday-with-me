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
    var st1 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:08"));
    var st2 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:12"));
    var st4 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:16")); // setTimeout(() => setCurrentLine(currentLine+1), 13590);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJjb25zb2xlIiwibG9nIiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwidXNlRWZmZWN0Iiwic3QxIiwic2V0VGltZW91dCIsInN0MiIsInN0NCIsInNvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFY0MsK0NBQVEsQ0FBQyxDQUFELENBRnRCO0FBQUEsTUFFakJDLFdBRmlCO0FBQUEsTUFFSkMsY0FGSTs7QUFJeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBcUIsQ0FBQyxPQUFELENBQWpDLEVBSndCLENBTXhCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQUk7QUFDVixRQUFJQyxHQUFHLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGFBQU1OLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDSSx1RkFBcUIsQ0FBQyxPQUFELENBQTNELENBQXBCO0FBQ0EsUUFBSUksR0FBRyxHQUFHRCxVQUFVLENBQUM7QUFBQSxhQUFNTixjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQ0ksdUZBQXFCLENBQUMsT0FBRCxDQUEzRCxDQUFwQjtBQUNBLFFBQUlLLEdBQUcsR0FBR0YsVUFBVSxDQUFDO0FBQUEsYUFBTU4sY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0NJLHVGQUFxQixDQUFDLE9BQUQsQ0FBM0QsQ0FBcEIsQ0FIVSxDQUlWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBbkJRLEVBbUJQLEVBbkJPLENBQVQ7QUFxQkEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtNLHlDQUFJLENBQUNWLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXZETTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjlmYjFhY2RkYmJlYTVlZTRkNjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQge3Nvbmd9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kc30gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRMaW5lLCBzZXRDdXJyZW50TGluZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAxOjEyXCIpKVxyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjEyXCIpKTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjE2XCIpKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoXHJcbiAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgdGltZXIxID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MDhcIikpO1xyXG4gICAgLy8gICAgICAgICBsZXQgdGltZXIyID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MTJcIikpO1xyXG4gICAgLy8gICAgICAgICBsZXQgdGltZXIzID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MTZcIikpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyMSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIyKTtcclxuICAgIC8vICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcjMpO1xyXG4gICAgLy8gICAgICAgICB9O1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgW11cclxuICAgIC8vICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IHN0MSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgICAgICBsZXQgc3QyID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MTJcIikpO1xyXG4gICAgICAgIGxldCBzdDQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxNlwiKSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMTM1OTApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDE3MjIwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAyMDUyMCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMjQxMjApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDI4MzAwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAzNTg5MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNDMwNjApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDQ2NDMwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA1NDU2MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNjM3NjIpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDc1MDk3KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA4MjEzOSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgODUxMzkpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDkxMTM5KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA5NTEzOSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9