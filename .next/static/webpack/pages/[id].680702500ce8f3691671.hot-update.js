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
/* harmony import */ var _functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/minutesToMilliseconds */ "./app/functions/minutesToMilliseconds.ts");
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
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    for (var i = 0; i < timestamps.length; i++) {
      console.log(i);
      setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[i]));
    }
  }, [timestamps]); // timestamps.forEach((time)=>{
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJoYW5kbGVDdXJyZW50TGluZSIsInVzZUVmZmVjdCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIm10bSIsInNvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUd4QixNQUFNQyxRQUFvQixHQUFHLEVBQTdCO0FBRUEsTUFBTUMsVUFBVSxHQUFHLENBQ2YsT0FEZSxFQUVmLE9BRmUsRUFHZixPQUhlLEVBSWYsT0FKZSxDQUFuQjs7QUFPQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJILGtCQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDSCxHQUZEOztBQUlBSyxrREFBUyxDQUFDLFlBQU07QUFDWixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFVBQVUsQ0FBQ0ksTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeENFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaO0FBQ0FJLGdCQUFVLENBQUNOLGlCQUFELEVBQW9CTyx1RkFBRyxDQUFDUixVQUFVLENBQUNHLENBQUQsQ0FBWCxDQUF2QixDQUFWO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ0gsVUFBRCxDQUxNLENBQVQsQ0FoQndCLENBd0J4QjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUFLUyx5Q0FBSSxDQUFDWixXQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F2RE07O0dBQU1GLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS42ODA3MDI1MDBjZThmMzY5MTY3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kcyBhcyBtdG19IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvbWludXRlc1RvTWlsbGlzZWNvbmRzXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQge3Nvbmd9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRMaW5lLCBzZXRDdXJyZW50TGluZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgdGltZW91dHM6IEFycmF5PGFueT4gPSBbXVxyXG5cclxuICAgIGNvbnN0IHRpbWVzdGFtcHMgPSBbXHJcbiAgICAgICAgXCIwMDowOFwiLFxyXG4gICAgICAgIFwiMDA6MTJcIixcclxuICAgICAgICBcIjAwOjE2XCIsXHJcbiAgICAgICAgXCIwMDoyMFwiLFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUN1cnJlbnRMaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lICsgMSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXN0YW1wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0aW1lc3RhbXBzXSlcclxuXHJcblxyXG4gICAgLy8gdGltZXN0YW1wcy5mb3JFYWNoKCh0aW1lKT0+e1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lKSlcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gZm9yKGxldCBpPTA7IGk8dGltZXN0YW1wcy5sZW5ndGg7IGkrKylcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tpXSkpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUpPT57XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lKSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSwgW3RpbWVzdGFtcHNdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNbY3VycmVudExpbmVdKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sW2N1cnJlbnRMaW5lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPiovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==