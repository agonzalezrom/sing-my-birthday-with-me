self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "BirthdayPage": function() { return /* binding */ BirthdayPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/Player */ "./app/components/Player/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\pages\\[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();



var __N_SSP = true;
var BirthdayPage = function BirthdayPage(_ref) {
  _s();

  var name = _ref.name,
      age = _ref.age;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      start = _useState[0],
      setStart = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: !start ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row mt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-12 vh-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex justify-content-center align-content-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return setStart(true);
              },
              className: "btn btn-primary",
              children: "\xA1Canta conmigo!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Player__WEBPACK_IMPORTED_MODULE_2__.Player, {
      name: name,
      age: age
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }, _this)
  }, void 0, false);
};

_s(BirthdayPage, "hM4UynQH41sInJUxkXDYnffbzsU=");

_c = BirthdayPage;
/* harmony default export */ __webpack_exports__["default"] = (BirthdayPage);

var _c;

$RefreshReg$(_c, "BirthdayPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3giXSwibmFtZXMiOlsiQmlydGhkYXlQYWdlIiwibmFtZSIsImFnZSIsInVzZVN0YXRlIiwic3RhcnQiLCJzZXRTdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUzs7QUFBQSxrQkFFZkMsK0NBQVEsQ0FBQyxLQUFELENBRk87QUFBQSxNQUVsQ0MsS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBSXpDLHNCQUNJO0FBQUEsY0FDSyxDQUFDRCxLQUFELGdCQUNHO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxvREFBZjtBQUFBLG1DQUNJO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFJQyxRQUFRLENBQUMsSUFBRCxDQUFaO0FBQUEsZUFBakI7QUFBcUMsdUJBQVMsRUFBQyxpQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsZ0JBVUUsOERBQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUVKLElBQWQ7QUFBb0IsU0FBRyxFQUFFQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWFAsbUJBREo7QUFlSCxDQW5CTTs7R0FBTUYsWTs7S0FBQUEsWTtBQXFCYiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjBkMjY4NjM2ZDg5MzUyZWNlZjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGFiYXNlfSBmcm9tIFwiLi4vYXBwL2NvbmZpZ1wiXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL1BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJpcnRoZGF5UGFnZSA9ICh7bmFtZSwgYWdlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGFydCwgc2V0U3RhcnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7IXN0YXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHZoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFN0YXJ0KHRydWUpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj7CoUNhbnRhIGNvbm1pZ28hPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTogPFBsYXllciBuYW1lPXtuYW1lfSBhZ2U9e2FnZX0gLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpcnRoZGF5UGFnZVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7aWR9ID0gY29udGV4dC5xdWVyeVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogZGF0YWJhc2VbaWRdXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9