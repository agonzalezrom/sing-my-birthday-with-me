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
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    for (var i = 0; i < timestamps.length; i++) {
      (function (index) {
        console.log((0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[index]) / 1000);
        var timeout = setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[index]));
        timeouts.push(timeout);
      })(i);
    }
  }, []); // for (let i = 0; i < timestamps.length; i++) {
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
  // useEffect(() => {
  //     timestamps.forEach((time)=>{
  //         setTimeout(handleCurrentLine, mtm(time))
  //     })
  // }, [timestamps]);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return function () {
      clearTimeout(timeouts[currentLine]);
    };
  }, [currentLine]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container full-height",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-center full-height",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: _config__WEBPACK_IMPORTED_MODULE_4__.song[currentLine]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ0aW1lb3V0cyIsInRpbWVzdGFtcHMiLCJQbGF5ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMaW5lIiwic2V0Q3VycmVudExpbmUiLCJoYW5kbGVDdXJyZW50TGluZSIsInVzZUVmZmVjdCIsImkiLCJsZW5ndGgiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJtdG0iLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjbGVhclRpbWVvdXQiLCJzb25nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQW9CLEdBQUcsRUFBN0I7QUFFQSxJQUFNQyxVQUFVLEdBQUcsQ0FDZixPQURlLEVBRWYsT0FGZSxFQUdmLE9BSGUsRUFJZixPQUplLENBQW5CO0FBT08sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUt4QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJELGtCQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQWQ7QUFDSCxHQUZEOztBQUlBRyxrREFBUyxDQUFDLFlBQUk7QUFDVixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLFVBQVUsQ0FBQ1EsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsT0FBQyxVQUFTRSxLQUFULEVBQWdCO0FBQ2JDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyx1RkFBRyxDQUFDWixVQUFVLENBQUNTLEtBQUQsQ0FBWCxDQUFILEdBQXVCLElBQW5DO0FBQ0EsWUFBSUksT0FBTyxHQUFHQyxVQUFVLENBQUNULGlCQUFELEVBQW9CTyx1RkFBRyxDQUFDWixVQUFVLENBQUNTLEtBQUQsQ0FBWCxDQUF2QixDQUF4QjtBQUNBVixnQkFBUSxDQUFDZ0IsSUFBVCxDQUFjRixPQUFkO0FBQ0gsT0FKRCxFQUlHTixDQUpIO0FBS0g7QUFDSixHQVJRLEVBUVAsRUFSTyxDQUFULENBVHdCLENBbUJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFELGtEQUFTLENBQUMsWUFBSTtBQUNWLFdBQU8sWUFBTTtBQUNUVSxrQkFBWSxDQUFDakIsUUFBUSxDQUFDSSxXQUFELENBQVQsQ0FBWjtBQUNILEtBRkQ7QUFHSCxHQUpRLEVBSVAsQ0FBQ0EsV0FBRCxDQUpPLENBQVQ7QUFNQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS2MseUNBQUksQ0FBQ2QsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBekRNOztHQUFNRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uYWVkOTE0Yzc3OTU5NmQ3NzBkMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gXCJyZWFjdC1hdWRpby1wbGF5ZXJcIjtcclxuaW1wb3J0IHttaW51dGVzVG9NaWxsaXNlY29uZHMgYXMgbXRtfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL21pbnV0ZXNUb01pbGxpc2Vjb25kc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IHtzb25nfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IHRpbWVvdXRzOiBBcnJheTxhbnk+ID0gW11cclxuXHJcbmNvbnN0IHRpbWVzdGFtcHMgPSBbXHJcbiAgICBcIjAwOjA4XCIsXHJcbiAgICBcIjAwOjEyXCIsXHJcbiAgICBcIjAwOjE2XCIsXHJcbiAgICBcIjAwOjIwXCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRMaW5lLCBzZXRDdXJyZW50TGluZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDdXJyZW50TGluZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50TGluZShjdXJyZW50TGluZSsxKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXN0YW1wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG10bSh0aW1lc3RhbXBzW2luZGV4XSkvMTAwMClcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbaW5kZXhdKSk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQpXHJcbiAgICAgICAgICAgIH0pKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc3RhbXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG10bSh0aW1lc3RhbXBzW2luZGV4XSkvMTAwMClcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbaW5kZXhdKSk7XHJcbiAgICAvLyAgICAgfSkoaSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdGltZXN0YW1wcy5mb3JFYWNoKCh0aW1lKT0+e1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lKSlcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gZm9yKGxldCBpPTA7IGk8dGltZXN0YW1wcy5sZW5ndGg7IGkrKylcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tpXSkpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB0aW1lc3RhbXBzLmZvckVhY2goKHRpbWUpPT57XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lKSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSwgW3RpbWVzdGFtcHNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNbY3VycmVudExpbmVdKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRMaW5lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNlbnRlciBmdWxsLWhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57c29uZ1tjdXJyZW50TGluZV19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPVwiL2F1ZGlvL3NvbmcubXAzXCIgYXV0b1BsYXkvPiovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==