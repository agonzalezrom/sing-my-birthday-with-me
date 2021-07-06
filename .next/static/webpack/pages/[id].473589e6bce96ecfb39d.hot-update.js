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
    var t1 = setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[0]));
    timeouts.push(t1);
    var t2 = setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[1]));
    timeouts.push(t2);
    var t3 = setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[2]));
    timeouts.push(t3);
    var t4 = setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(timestamps[3]));
    timeouts.push(t4);
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
          lineNumber: 52,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJoYW5kbGVDdXJyZW50TGluZSIsInVzZUVmZmVjdCIsInQxIiwic2V0VGltZW91dCIsIm10bSIsInB1c2giLCJ0MiIsInQzIiwidDQiLCJjbGVhclRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBR3hCLE1BQU1DLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5COztBQU9BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1Qkgsa0JBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBZDtBQUNILEdBRkQ7O0FBSUFLLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxRQUFNQyxFQUFFLEdBQUdDLFVBQVUsQ0FBQ0gsaUJBQUQsRUFBb0JJLHVGQUFHLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBdkIsQ0FBckI7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNILEVBQWQ7QUFDQSxRQUFNSSxFQUFFLEdBQUdILFVBQVUsQ0FBQ0gsaUJBQUQsRUFBb0JJLHVGQUFHLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBdkIsQ0FBckI7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNDLEVBQWQ7QUFDQSxRQUFNQyxFQUFFLEdBQUdKLFVBQVUsQ0FBQ0gsaUJBQUQsRUFBb0JJLHVGQUFHLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBdkIsQ0FBckI7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNFLEVBQWQ7QUFDQSxRQUFNQyxFQUFFLEdBQUdMLFVBQVUsQ0FBQ0gsaUJBQUQsRUFBb0JJLHVGQUFHLENBQUNMLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBdkIsQ0FBckI7QUFDQUQsWUFBUSxDQUFDTyxJQUFULENBQWNHLEVBQWQ7QUFFSCxHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBUCxrREFBUyxDQUFDLFlBQUk7QUFDVixXQUFPLFlBQU07QUFDVFEsa0JBQVksQ0FBQ1gsUUFBUSxDQUFDRixXQUFXLEdBQUMsQ0FBYixDQUFULENBQVo7QUFDSCxLQUZEO0FBR0gsR0FKUSxFQUlQLENBQUNBLFdBQUQsQ0FKTyxDQUFUO0FBTUEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtjLHlDQUFJLENBQUNkLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWxETTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjQ3MzU4OWU2YmNlOTZlY2ZiMzlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7bWludXRlc1RvTWlsbGlzZWNvbmRzIGFzIG10bX0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7c29uZ30gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudExpbmUsIHNldEN1cnJlbnRMaW5lXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCB0aW1lb3V0czogQXJyYXk8YW55PiA9IFtdXHJcblxyXG4gICAgY29uc3QgdGltZXN0YW1wcyA9IFtcclxuICAgICAgICBcIjAwOjA4XCIsXHJcbiAgICAgICAgXCIwMDoxMlwiLFxyXG4gICAgICAgIFwiMDA6MTZcIixcclxuICAgICAgICBcIjAwOjIwXCIsXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ3VycmVudExpbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUpPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lKS8xMDAwKVxyXG4gICAgICAgIC8vICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKHRpbWUpKVxyXG4gICAgICAgIC8vICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgY29uc3QgdDEgPSBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1swXSkpXHJcbiAgICAgICAgdGltZW91dHMucHVzaCh0MSlcclxuICAgICAgICBjb25zdCB0MiA9IHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lc3RhbXBzWzFdKSlcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKHQyKVxyXG4gICAgICAgIGNvbnN0IHQzID0gc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbMl0pKVxyXG4gICAgICAgIHRpbWVvdXRzLnB1c2godDMpXHJcbiAgICAgICAgY29uc3QgdDQgPSBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1szXSkpXHJcbiAgICAgICAgdGltZW91dHMucHVzaCh0NClcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2N1cnJlbnRMaW5lLTFdKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRMaW5lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==