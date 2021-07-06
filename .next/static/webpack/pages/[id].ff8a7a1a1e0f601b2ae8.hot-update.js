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





var timeouts = [];
var timestamps = ["00:08", "00:12", "00:16", "00:20"];
var Player = function Player() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      currentLine = _useState[0],
      setCurrentLine = _useState[1];

  var handleCurrentLine = function handleCurrentLine() {
    setCurrentLine(currentLine + 1);
  }; // useEffect(()=>{
  //     for (let i = 0; i < timestamps.length; i++) {
  //         (function(index) {
  //             console.log(mtm(timestamps[index])/1000)
  //             let timeout = setTimeout(handleCurrentLine, mtm(timestamps[index]));
  //             timeouts.push(timeout)
  //         })(i);
  //     }
  //     return () => {
  //         clearTimeout(timeouts[currentLine-1])
  //     }
  // },[])
  // for (let i = 0; i < timestamps.length; i++) {
  //     (function(index) {
  //         console.log(mtm(timestamps[index])/1000)
  //         setTimeout(handleCurrentLine, mtm(timestamps[index]));
  //     })(i);
  // }
  // timestamps.forEach((time)=>{
  //     setTimeout(handleCurrentLine, mtm(time))
  // })
  // for(let i=0; i<timestamps.length; i++)
  // {
  //     setTimeout(handleCurrentLine, mtm(timestamps[i]))
  // }


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[0]));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[currentLine]));
  }, [currentLine]); // useEffect(()=>{
  //     return () => {
  //         clearTimeout(timeouts[currentLine-1])
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
          lineNumber: 71,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, _this);
};

_s(Player, "MvnBsWpTaOvyJk2wxVeAVfNSSYk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJoYW5kbGVDdXJyZW50TGluZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJtdG0iLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxJQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5CO0FBT08sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUt4QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJELGtCQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQWQ7QUFDSCxHQUZELENBTHdCLENBU3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVUsQ0FBQ0YsaUJBQUQsRUFBb0JHLHVGQUFHLENBQUNSLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBdkIsQ0FBVjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU0sa0RBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVUsQ0FBQ0YsaUJBQUQsRUFBb0JHLHVGQUFHLENBQUNSLFVBQVUsQ0FBQ0csV0FBRCxDQUFYLENBQXZCLENBQVY7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQsQ0F6Q3dCLENBNkN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUFLTSx5Q0FBSSxDQUFDTixXQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0E3RE07O0dBQU1GLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5mZjhhN2ExYTFlMGY2MDFiMmFlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xyXG5pbXBvcnQge21pbnV0ZXNUb01pbGxpc2Vjb25kcyBhcyBtdG19IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvbWludXRlc1RvTWlsbGlzZWNvbmRzXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQge3Nvbmd9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5cclxuY29uc3QgdGltZW91dHM6IEFycmF5PGFueT4gPSBbXVxyXG5cclxuY29uc3QgdGltZXN0YW1wcyA9IFtcclxuICAgIFwiMDA6MDhcIixcclxuICAgIFwiMDA6MTJcIixcclxuICAgIFwiMDA6MTZcIixcclxuICAgIFwiMDA6MjBcIixcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudExpbmUsIHNldEN1cnJlbnRMaW5lXSA9IHVzZVN0YXRlKDApXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUN1cnJlbnRMaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc3RhbXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobXRtKHRpbWVzdGFtcHNbaW5kZXhdKS8xMDAwKVxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tpbmRleF0pKTtcclxuICAgIC8vICAgICAgICAgICAgIHRpbWVvdXRzLnB1c2godGltZW91dClcclxuICAgIC8vICAgICAgICAgfSkoaSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0c1tjdXJyZW50TGluZS0xXSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFtdKVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXN0YW1wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhtdG0odGltZXN0YW1wc1tpbmRleF0pLzEwMDApXHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lc3RhbXBzW2luZGV4XSkpO1xyXG4gICAgLy8gICAgIH0pKGkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHRpbWVzdGFtcHMuZm9yRWFjaCgodGltZSk9PntcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZSkpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGZvcihsZXQgaT0wOyBpPHRpbWVzdGFtcHMubGVuZ3RoOyBpKyspXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbaV0pKVxyXG4gICAgLy8gfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1swXSkpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tjdXJyZW50TGluZV0pKVxyXG4gICAgfSwgW2N1cnJlbnRMaW5lXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2N1cnJlbnRMaW5lLTFdKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sW2N1cnJlbnRMaW5lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPiovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==