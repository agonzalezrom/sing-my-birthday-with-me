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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\app\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Player = function Player() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      currentLine = _useState[0],
      setCurrentLine = _useState[1];

  var timeouts = [];
  var timestamps = ["00:08", "00:12", "00:16", "00:20"];

  var handleCurrentLine = function handleCurrentLine() {
    setCurrentLine(currentLine + 1);
  }; // useEffect(()=>{
  //     setInterval(handleCurrentLine, 1000)
  //     setInterval(handleCurrentLine, 1000)
  //     setInterval(handleCurrentLine, 1000)
  // },[])


  var _loop = function _loop(i) {
    (function (index) {
      setTimeout(handleCurrentLine, i * 1000);
    })(i);
  };

  for (var i = 1; i <= 3; i++) {
    _loop(i);
  } // timestamps.forEach((time)=>{
  //     setTimeout(handleCurrentLine, mtm(time))
  // })
  // for(let i=0; i<timestamps.length; i++)
  // {
  //     setTimeout(handleCurrentLine, mtm(timestamps[i]))
  // }
  // useEffect(() => {
  //     timestamps.forEach((time)=>{
  //         setTimeout(handleCurrentLine, mtm(time))
  //     })
  // }, [timestamps]);
  // useEffect(()=>{
  //     return () => {
  //         clearTimeout(timeouts[currentLine])
  //     }
  // },[currentLine])


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJoYW5kbGVDdXJyZW50TGluZSIsImkiLCJpbmRleCIsInNldFRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBR3hCLE1BQU1DLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5COztBQU9BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1Qkgsa0JBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBZDtBQUNILEdBRkQsQ0Fad0IsQ0FnQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXBCd0IsNkJBc0JmSyxDQXRCZTtBQXVCcEIsS0FBQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2JDLGdCQUFVLENBQUNILGlCQUFELEVBQW9CQyxDQUFDLEdBQUcsSUFBeEIsQ0FBVjtBQUNILEtBRkQsRUFFR0EsQ0FGSDtBQXZCb0I7O0FBc0J4QixPQUFLLElBQUlBLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksQ0FBckIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFBQSxVQUFwQkEsQ0FBb0I7QUFJNUIsR0ExQnVCLENBNEJ4QjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS0cseUNBQUksQ0FBQ1IsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUksOERBQUMsMkRBQUQ7QUFBa0IsU0FBRyxFQUFDLGlCQUF0QjtBQUF3QyxjQUFRO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBM0RNOztHQUFNRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uYjkxNjZkNDBiMDVlMWE3M2Q5NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gXCJyZWFjdC1hdWRpby1wbGF5ZXJcIjtcclxuaW1wb3J0IHttaW51dGVzVG9NaWxsaXNlY29uZHMgYXMgbXRtfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL21pbnV0ZXNUb01pbGxpc2Vjb25kc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHRpbWVvdXRzOiBBcnJheTxhbnk+ID0gW11cclxuXHJcbiAgICBjb25zdCB0aW1lc3RhbXBzID0gW1xyXG4gICAgICAgIFwiMDA6MDhcIixcclxuICAgICAgICBcIjAwOjEyXCIsXHJcbiAgICAgICAgXCIwMDoxNlwiLFxyXG4gICAgICAgIFwiMDA6MjBcIixcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDdXJyZW50TGluZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKGhhbmRsZUN1cnJlbnRMaW5lLCAxMDAwKVxyXG4gICAgLy8gICAgIHNldEludGVydmFsKGhhbmRsZUN1cnJlbnRMaW5lLCAxMDAwKVxyXG4gICAgLy8gICAgIHNldEludGVydmFsKGhhbmRsZUN1cnJlbnRMaW5lLCAxMDAwKVxyXG4gICAgLy8gfSxbXSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcclxuICAgICAgICAoZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgaSAqIDEwMDApO1xyXG4gICAgICAgIH0pKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRpbWVzdGFtcHMuZm9yRWFjaCgodGltZSk9PntcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZSkpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGZvcihsZXQgaT0wOyBpPHRpbWVzdGFtcHMubGVuZ3RoOyBpKyspXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbaV0pKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGltZXN0YW1wcy5mb3JFYWNoKCh0aW1lKT0+e1xyXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZSkpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH0sIFt0aW1lc3RhbXBzXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2N1cnJlbnRMaW5lXSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFtjdXJyZW50TGluZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jZW50ZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3NvbmdbY3VycmVudExpbmVdfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyIHNyYz1cIi9hdWRpby9zb25nLm1wM1wiIGF1dG9QbGF5Lz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=