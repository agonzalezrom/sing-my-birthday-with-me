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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var timer1 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:08"));
    return function () {
      clearTimeout(timer1);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var timer1 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:12"));
    return function () {
      clearTimeout(timer1);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var timer1 = setTimeout(function () {
      return setCurrentLine(currentLine + 1);
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_5__.minutesToMilliseconds)("00:16"));
    return function () {
      clearTimeout(timer1);
    };
  }, []); // useEffect(()=>{
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
          lineNumber: 72,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, _this);
};

_s(Player, "IFvVms1dpPpaFcNWeDXiTOKkcuI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJjb25zb2xlIiwibG9nIiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwidXNlRWZmZWN0IiwidGltZXIxIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFY0MsK0NBQVEsQ0FBQyxDQUFELENBRnRCO0FBQUEsTUFFakJDLFdBRmlCO0FBQUEsTUFFSkMsY0FGSTs7QUFJeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBcUIsQ0FBQyxPQUFELENBQWpDLEVBSndCLENBTXhCO0FBQ0E7QUFDQTs7QUFFQUMsa0RBQVMsQ0FDTCxZQUFNO0FBQ0YsUUFBSUMsTUFBTSxHQUFHQyxVQUFVLENBQUM7QUFBQSxhQUFNTixjQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQXBCO0FBQUEsS0FBRCxFQUFzQ0ksdUZBQXFCLENBQUMsT0FBRCxDQUEzRCxDQUF2QjtBQUNBLFdBQU8sWUFBTTtBQUNUSSxrQkFBWSxDQUFDRixNQUFELENBQVo7QUFDSCxLQUZEO0FBR0gsR0FOSSxFQU9MLEVBUEssQ0FBVDtBQVVBRCxrREFBUyxDQUNMLFlBQU07QUFDRixRQUFJQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGFBQU1OLGNBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBcEI7QUFBQSxLQUFELEVBQXNDSSx1RkFBcUIsQ0FBQyxPQUFELENBQTNELENBQXZCO0FBQ0EsV0FBTyxZQUFNO0FBQ1RJLGtCQUFZLENBQUNGLE1BQUQsQ0FBWjtBQUNILEtBRkQ7QUFHSCxHQU5JLEVBT0wsRUFQSyxDQUFUO0FBVUFELGtEQUFTLENBQ0wsWUFBTTtBQUNGLFFBQUlDLE1BQU0sR0FBR0MsVUFBVSxDQUFDO0FBQUEsYUFBTU4sY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLEtBQUQsRUFBc0NJLHVGQUFxQixDQUFDLE9BQUQsQ0FBM0QsQ0FBdkI7QUFDQSxXQUFPLFlBQU07QUFDVEksa0JBQVksQ0FBQ0YsTUFBRCxDQUFaO0FBQ0gsS0FGRDtBQUdILEdBTkksRUFPTCxFQVBLLENBQVQsQ0E5QndCLENBd0N4QjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKOztBQUVBLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUFLRyx5Q0FBSSxDQUFDVCxXQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSSw4REFBQywyREFBRDtBQUFrQixTQUFHLEVBQUMsaUJBQXRCO0FBQXdDLGNBQVE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F2RU07O0dBQU1GLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS45ODE1YzI2NzVjM2YxYTcyNjI5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHttaW51dGVzVG9NaWxsaXNlY29uZHN9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvbWludXRlc1RvTWlsbGlzZWNvbmRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMToxMlwiKSlcclxuXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDowOFwiKSk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxMlwiKSk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxNlwiKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyMSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjA4XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcjEpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW11cclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyMSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjEyXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcjEpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW11cclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyMSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjE2XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcjEpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW11cclxuICAgICk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKFwiMDA6MDhcIikpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyhcIjAwOjEyXCIpKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHMoXCIwMDoxNlwiKSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMTM1OTApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDE3MjIwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAyMDUyMCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgMjQxMjApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDI4MzAwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCAzNTg5MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNDMwNjApO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDQ2NDMwKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA1NDU2MCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgNjM3NjIpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDc1MDk3KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA4MjEzOSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgODUxMzkpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSksIDkxMTM5KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCA5NTEzOSk7XHJcbiAgICAvLyB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9