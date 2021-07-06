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

  var timeouts = [];
  var timestamps = ["00:08", "00:12", "00:16", "00:20"];

  var handleCurrentLine = function handleCurrentLine() {
    setCurrentLine(currentLine + 1);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // return timestamps.forEach((time)=>{
    //     console.log(minutesToMilliseconds(time)/1000)
    //     const timeout = setTimeout(() => setCurrentLine(currentLine+1), minutesToMilliseconds(time))
    //     timeouts.push(timeout)
    // })
    var timeout1 = setTimeout(function () {
      return handleCurrentLine;
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[0]));
    timeouts.push(timeout1);
    var timeout2 = setTimeout(function () {
      return handleCurrentLine;
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[1]));
    timeouts.push(timeout2);
    var timeout3 = setTimeout(function () {
      return handleCurrentLine;
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[2]));
    timeouts.push(timeout3);
    var timeout4 = setTimeout(function () {
      return handleCurrentLine;
    }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[3]));
    timeouts.push(timeout4);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return function () {
      clearTimeout(timeouts[currentLine - 1]);
    };
  }, [currentLine]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_5__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJoYW5kbGVDdXJyZW50TGluZSIsInVzZUVmZmVjdCIsInRpbWVvdXQxIiwic2V0VGltZW91dCIsIm1pbnV0ZXNUb01pbGxpc2Vjb25kcyIsInB1c2giLCJ0aW1lb3V0MiIsInRpbWVvdXQzIiwidGltZW91dDQiLCJjbGVhclRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBR3hCLE1BQU1DLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5COztBQU9BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1Qkgsa0JBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBZDtBQUNILEdBRkQ7O0FBSUFLLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGFBQU1ILGlCQUFOO0FBQUEsS0FBRCxFQUEwQkksdUZBQXFCLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBL0MsQ0FBM0I7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNILFFBQWQ7QUFFQSxRQUFNSSxRQUFRLEdBQUdILFVBQVUsQ0FBQztBQUFBLGFBQU1ILGlCQUFOO0FBQUEsS0FBRCxFQUEwQkksdUZBQXFCLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBL0MsQ0FBM0I7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNDLFFBQWQ7QUFFQSxRQUFNQyxRQUFRLEdBQUdKLFVBQVUsQ0FBQztBQUFBLGFBQU1ILGlCQUFOO0FBQUEsS0FBRCxFQUEwQkksdUZBQXFCLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBL0MsQ0FBM0I7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNFLFFBQWQ7QUFFQSxRQUFNQyxRQUFRLEdBQUdMLFVBQVUsQ0FBQztBQUFBLGFBQU1ILGlCQUFOO0FBQUEsS0FBRCxFQUEwQkksdUZBQXFCLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBL0MsQ0FBM0I7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNHLFFBQWQ7QUFFSCxHQW5CUSxFQW1CTixFQW5CTSxDQUFUO0FBcUJBUCxrREFBUyxDQUFDLFlBQUk7QUFDVixXQUFPLFlBQU07QUFDVFEsa0JBQVksQ0FBQ1gsUUFBUSxDQUFDRixXQUFXLEdBQUMsQ0FBYixDQUFULENBQVo7QUFDSCxLQUZEO0FBR0gsR0FKUSxFQUlQLENBQUNBLFdBQUQsQ0FKTyxDQUFUO0FBTUEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtjLHlDQUFJLENBQUNkLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXJETTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjAxZjRlNjc5Y2Y4YmMzMjYwODg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7bWludXRlc1RvTWlsbGlzZWNvbmRzfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL21pbnV0ZXNUb01pbGxpc2Vjb25kc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHRpbWVvdXRzOiBBcnJheTxhbnk+ID0gW11cclxuXHJcbiAgICBjb25zdCB0aW1lc3RhbXBzID0gW1xyXG4gICAgICAgIFwiMDA6MDhcIixcclxuICAgICAgICBcIjAwOjEyXCIsXHJcbiAgICAgICAgXCIwMDoxNlwiLFxyXG4gICAgICAgIFwiMDA6MjBcIixcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDdXJyZW50TGluZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRpbWVzdGFtcHMuZm9yRWFjaCgodGltZSk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWludXRlc1RvTWlsbGlzZWNvbmRzKHRpbWUpLzEwMDApXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnRMaW5lKGN1cnJlbnRMaW5lKzEpLCBtaW51dGVzVG9NaWxsaXNlY29uZHModGltZSkpXHJcbiAgICAgICAgLy8gICAgIHRpbWVvdXRzLnB1c2godGltZW91dClcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lb3V0MSA9IHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlQ3VycmVudExpbmUsIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lc3RhbXBzWzBdKSlcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQxKVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lb3V0MiA9IHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlQ3VycmVudExpbmUsIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lc3RhbXBzWzFdKSlcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQyKVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lb3V0MyA9IHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlQ3VycmVudExpbmUsIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lc3RhbXBzWzJdKSlcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQzKVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lb3V0NCA9IHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlQ3VycmVudExpbmUsIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lc3RhbXBzWzNdKSlcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQ0KVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNbY3VycmVudExpbmUtMV0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY3VycmVudExpbmVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9