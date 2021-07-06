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
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return timestamps.forEach(function (time) {
      console.log((0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(time) / 1000);
      var timeout = setTimeout(function () {
        return setCurrentLine(currentLine + 1);
      }, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_2__.minutesToMilliseconds)(time));
      timeouts.push(timeout);
    });
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
          lineNumber: 39,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/audio/song.mp3",
      autoPlay: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJ1c2VFZmZlY3QiLCJmb3JFYWNoIiwidGltZSIsImNvbnNvbGUiLCJsb2ciLCJtaW51dGVzVG9NaWxsaXNlY29uZHMiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjbGVhclRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBR3hCLE1BQU1DLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5CO0FBT0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFdBQU9ELFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVE7QUFDOUJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBcUIsQ0FBQ0gsSUFBRCxDQUFyQixHQUE0QixJQUF4QztBQUNBLFVBQU1JLE9BQU8sR0FBR0MsVUFBVSxDQUFDO0FBQUEsZUFBTVYsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFwQjtBQUFBLE9BQUQsRUFBc0NTLHVGQUFxQixDQUFDSCxJQUFELENBQTNELENBQTFCO0FBQ0FKLGNBQVEsQ0FBQ1UsSUFBVCxDQUFjRixPQUFkO0FBQ0gsS0FKTSxDQUFQO0FBTUgsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBTixrREFBUyxDQUFDLFlBQUk7QUFDVixXQUFPLFlBQU07QUFDVFMsa0JBQVksQ0FBQ1gsUUFBUSxDQUFDRixXQUFXLEdBQUMsQ0FBYixDQUFULENBQVo7QUFDSCxLQUZEO0FBR0gsR0FKUSxFQUlQLENBQUNBLFdBQUQsQ0FKTyxDQUFUO0FBTUEsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQUtjLHlDQUFJLENBQUNkLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JLDhEQUFDLDJEQUFEO0FBQWtCLFNBQUcsRUFBQyxpQkFBdEI7QUFBd0MsY0FBUTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXJDTTs7R0FBTUYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLmE2YTAxYTc0NzBlNzYyNmVlZjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7bWludXRlc1RvTWlsbGlzZWNvbmRzfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL21pbnV0ZXNUb01pbGxpc2Vjb25kc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHRpbWVvdXRzOiBBcnJheTxhbnk+ID0gW11cclxuXHJcbiAgICBjb25zdCB0aW1lc3RhbXBzID0gW1xyXG4gICAgICAgIFwiMDA6MDhcIixcclxuICAgICAgICBcIjAwOjEyXCIsXHJcbiAgICAgICAgXCIwMDoxNlwiLFxyXG4gICAgICAgIFwiMDA6MjBcIixcclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1pbnV0ZXNUb01pbGxpc2Vjb25kcyh0aW1lKS8xMDAwKVxyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKSwgbWludXRlc1RvTWlsbGlzZWNvbmRzKHRpbWUpKVxyXG4gICAgICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2N1cnJlbnRMaW5lLTFdKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRMaW5lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==