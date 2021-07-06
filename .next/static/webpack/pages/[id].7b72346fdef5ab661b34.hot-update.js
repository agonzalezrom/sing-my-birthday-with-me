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
          className: "col-md-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex justify-content-center vh-100",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3giXSwibmFtZXMiOlsiQmlydGhkYXlQYWdlIiwibmFtZSIsImFnZSIsInVzZVN0YXRlIiwic3RhcnQiLCJzZXRTdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUzs7QUFBQSxrQkFFZkMsK0NBQVEsQ0FBQyxLQUFELENBRk87QUFBQSxNQUVsQ0MsS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBSXpDLHNCQUNJO0FBQUEsY0FDSyxDQUFDRCxLQUFELGdCQUNHO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLHNDQUFmO0FBQUEsbUNBQ0k7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQUlDLFFBQVEsQ0FBQyxJQUFELENBQVo7QUFBQSxlQUFqQjtBQUFxQyx1QkFBUyxFQUFDLGlCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxnQkFVRSw4REFBQywwREFBRDtBQUFRLFVBQUksRUFBRUosSUFBZDtBQUFvQixTQUFHLEVBQUVDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYUCxtQkFESjtBQWVILENBbkJNOztHQUFNRixZOztLQUFBQSxZO0FBcUJiLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uN2I3MjM0NmZkZWY1YWI2NjFiMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGF0YWJhc2V9IGZyb20gXCIuLi9hcHAvY29uZmlnXCJcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvUGxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmlydGhkYXlQYWdlID0gKHtuYW1lLCBhZ2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHshc3RhcnQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdmgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0U3RhcnQodHJ1ZSl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPsKhQ2FudGEgY29ubWlnbyE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOiA8UGxheWVyIG5hbWU9e25hbWV9IGFnZT17YWdlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlydGhkYXlQYWdlXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHtpZH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiBkYXRhYmFzZVtpZF1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=