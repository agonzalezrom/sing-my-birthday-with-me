(function() {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./app/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Player/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/minutesToMilliseconds */ "./app/functions/minutesToMilliseconds.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./app/components/Player/style.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./app/config.ts");

var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\app\\components\\Player\\index.tsx";




const timeouts = [];
const timestamps = ["00:08", "00:12", "00:16", "00:20"];
const Player = () => {
  const {
    0: currentLine,
    1: setCurrentLine
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);

  const handleCurrentLine = () => {
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


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTimeout(handleCurrentLine, (0,_functions_minutesToMilliseconds__WEBPACK_IMPORTED_MODULE_1__.minutesToMilliseconds)(timestamps[0]));
  }, []); // useEffect(() => {
  //     setTimeout(handleCurrentLine, mtm(timestamps[currentLine]))
  // }, [currentLine]);
  // useEffect(()=>{
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./app/components/Player/style.ts":
/*!****************************************!*\
  !*** ./app/components/Player/style.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center; 
  }

  h1 {
    resize: vertical;
    font-family: "Merriweather Bold", sans-serif;
  }
`;

/***/ }),

/***/ "./app/config.ts":
/*!***********************!*\
  !*** ./app/config.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": function() { return /* binding */ ID; },
/* harmony export */   "database": function() { return /* binding */ database; },
/* harmony export */   "song": function() { return /* binding */ song; }
/* harmony export */ });
const ID = 'ccb43c7b-bc37-42b7-90b1-5aeda27957fa';
const database = [];
database[ID] = {
  name: 'Silvana',
  age: 27
};
const song = ["♫♫♫", "Estás son... las mañanitas♪", "Que cantaba el rey David", "Hoy por ser día de tu santo♪", "Te las cantamos aquí♪♪", "Despierta mi bien despierta", "Mira qué ya amaneció...", "Ya los pajaritos cantan, la luna ya se metió", "♫♫♫", "Que linda esta la mañana en que vengo a saludarte", "Venimos todos con gusto  y placer al felicitarte♪", "El día en que tu naciste, nacieron todas las flores", "Y en la pila del bautismo, cantarón los ruiseñores", "Ya viene amaneciando...", "Ya la luz del día nos dio", "♪♪ Levantate de mañana, mira que ya amaneció. ♪♪"];

/***/ }),

/***/ "./app/functions/minutesToMilliseconds.ts":
/*!************************************************!*\
  !*** ./app/functions/minutesToMilliseconds.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minutesToMilliseconds": function() { return /* binding */ minutesToMilliseconds; }
/* harmony export */ });
const minutesToMilliseconds = minute => {
  let [minutes, seconds] = minute.split(":");
  return +minutes * 60000 + +seconds * 1000;
};

/***/ }),

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayPage": function() { return /* binding */ BirthdayPage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/config */ "./app/config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/Player */ "./app/components/Player/index.tsx");


var _jsxFileName = "C:\\Users\\agr\\Proyectos\\axdevel\\birthday-maker\\pages\\[id].tsx";



const BirthdayPage = ({
  name,
  age
}) => {
  const {
    0: start,
    1: setStart
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: !start ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row mt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => setStart(true),
              className: "btn btn-primary",
              children: "\xA1Canta conmigo!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Player__WEBPACK_IMPORTED_MODULE_3__.Player, {
      name: name,
      age: age
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ __webpack_exports__["default"] = (BirthdayPage);
async function getServerSideProps(context) {
  const {
    id
  } = context.query;
  return {
    props: _app_config__WEBPACK_IMPORTED_MODULE_1__.database[id]
  };
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXJ0aGRheS1tYWtlci8uL2FwcC9jb21wb25lbnRzL1BsYXllci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmlydGhkYXktbWFrZXIvLi9hcHAvY29tcG9uZW50cy9QbGF5ZXIvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vYmlydGhkYXktbWFrZXIvLi9hcHAvY29uZmlnLnRzIiwid2VicGFjazovL2JpcnRoZGF5LW1ha2VyLy4vYXBwL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHMudHMiLCJ3ZWJwYWNrOi8vYmlydGhkYXktbWFrZXIvLi9wYWdlcy9baWRdLnRzeCIsIndlYnBhY2s6Ly9iaXJ0aGRheS1tYWtlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmlydGhkYXktbWFrZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9iaXJ0aGRheS1tYWtlci9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidGltZW91dHMiLCJ0aW1lc3RhbXBzIiwiUGxheWVyIiwiY3VycmVudExpbmUiLCJzZXRDdXJyZW50TGluZSIsInVzZVN0YXRlIiwiaGFuZGxlQ3VycmVudExpbmUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibXRtIiwic29uZyIsIkNvbnRhaW5lciIsInN0eWxlZCIsIklEIiwiZGF0YWJhc2UiLCJuYW1lIiwiYWdlIiwibWludXRlc1RvTWlsbGlzZWNvbmRzIiwibWludXRlIiwibWludXRlcyIsInNlY29uZHMiLCJzcGxpdCIsIkJpcnRoZGF5UGFnZSIsInN0YXJ0Iiwic2V0U3RhcnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBb0IsR0FBRyxFQUE3QjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxDQUNmLE9BRGUsRUFFZixPQUZlLEVBR2YsT0FIZSxFQUlmLE9BSmUsQ0FBbkI7QUFPTyxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUV4QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUMsQ0FBRCxDQUE5Qzs7QUFHQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCRixrQkFBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBYixDQUFkO0FBQ0gsR0FGRCxDQUx3QixDQVN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FJLGtEQUFTLENBQUMsTUFBTTtBQUNaQyxjQUFVLENBQUNGLGlCQUFELEVBQW9CRyx1RkFBRyxDQUFDUixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQXZCLENBQVY7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFULENBckN3QixDQXlDeEI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS1MseUNBQUksQ0FBQ1AsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILENBN0RNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlA7QUFFTyxNQUFNUSxTQUFTLEdBQUdDLDhEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYTyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLE1BQU1DLEVBQVUsR0FBRyxzQ0FBbkI7QUFFQSxNQUFNQyxRQUFvQixHQUFHLEVBQTdCO0FBQ1BBLFFBQVEsQ0FBQ0QsRUFBRCxDQUFSLEdBQWU7QUFDWEUsTUFBSSxFQUFFLFNBREs7QUFFWEMsS0FBRyxFQUFFO0FBRk0sQ0FBZjtBQUtPLE1BQU1OLElBQUksR0FBRyxDQUNaLEtBRFksRUFFWiw2QkFGWSxFQUdaLDBCQUhZLEVBSVosOEJBSlksRUFLWix3QkFMWSxFQU1aLDZCQU5ZLEVBT1oseUJBUFksRUFRWiw4Q0FSWSxFQVNaLEtBVFksRUFVWixtREFWWSxFQVdaLG1EQVhZLEVBWVoscURBWlksRUFhWixvREFiWSxFQWNaLHlCQWRZLEVBZVosMkJBZlksRUFnQlosa0RBaEJZLENBQWIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsTUFBTU8scUJBQXFCLEdBQUlDLE1BQUQsSUFBb0I7QUFDckQsTUFBSSxDQUFDQyxPQUFELEVBQVVDLE9BQVYsSUFBcUJGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLEdBQWIsQ0FBekI7QUFDQSxTQUFRLENBQUNGLE9BQUQsR0FBVSxLQUFYLEdBQXNCLENBQUNDLE9BQUQsR0FBUyxJQUF0QztBQUNILENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUVPLE1BQU1FLFlBQVksR0FBRyxDQUFDO0FBQUNQLE1BQUQ7QUFBT0M7QUFBUCxDQUFELEtBQWlCO0FBRXpDLFFBQU07QUFBQSxPQUFDTyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQm5CLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUVBLHNCQUNJO0FBQUEsY0FDSyxDQUFDa0IsS0FBRCxnQkFDRztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQywrQkFBZjtBQUFBLG1DQUNJO0FBQVEscUJBQU8sRUFBRSxNQUFJQyxRQUFRLENBQUMsSUFBRCxDQUE3QjtBQUFxQyx1QkFBUyxFQUFDLGlCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBVUUsOERBQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUVULElBQWQ7QUFBb0IsU0FBRyxFQUFFQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWFAsbUJBREo7QUFlSCxDQW5CTTtBQXFCUCwrREFBZU0sWUFBZjtBQUVPLGVBQWVHLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUM5QyxRQUFNO0FBQUNDO0FBQUQsTUFBT0QsT0FBTyxDQUFDRSxLQUFyQjtBQUNBLFNBQU87QUFDSEMsU0FBSyxFQUFFZixpREFBUSxDQUFDYSxFQUFEO0FBRFosR0FBUDtBQUdILEM7Ozs7Ozs7Ozs7O0FDaENELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7bWludXRlc1RvTWlsbGlzZWNvbmRzIGFzIG10bX0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9taW51dGVzVG9NaWxsaXNlY29uZHNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7c29uZ30gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcblxyXG5jb25zdCB0aW1lb3V0czogQXJyYXk8YW55PiA9IFtdXHJcblxyXG5jb25zdCB0aW1lc3RhbXBzID0gW1xyXG4gICAgXCIwMDowOFwiLFxyXG4gICAgXCIwMDoxMlwiLFxyXG4gICAgXCIwMDoxNlwiLFxyXG4gICAgXCIwMDoyMFwiLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMClcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ3VycmVudExpbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUrMSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzdGFtcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhtdG0odGltZXN0YW1wc1tpbmRleF0pLzEwMDApXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lc3RhbXBzW2luZGV4XSkpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGltZW91dHMucHVzaCh0aW1lb3V0KVxyXG4gICAgLy8gICAgICAgICB9KShpKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2N1cnJlbnRMaW5lLTFdKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sW10pXHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc3RhbXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG10bSh0aW1lc3RhbXBzW2luZGV4XSkvMTAwMClcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dChoYW5kbGVDdXJyZW50TGluZSwgbXRtKHRpbWVzdGFtcHNbaW5kZXhdKSk7XHJcbiAgICAvLyAgICAgfSkoaSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdGltZXN0YW1wcy5mb3JFYWNoKCh0aW1lKT0+e1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lKSlcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gZm9yKGxldCBpPTA7IGk8dGltZXN0YW1wcy5sZW5ndGg7IGkrKylcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGhhbmRsZUN1cnJlbnRMaW5lLCBtdG0odGltZXN0YW1wc1tpXSkpXHJcbiAgICAvLyB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lc3RhbXBzWzBdKSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoaGFuZGxlQ3VycmVudExpbmUsIG10bSh0aW1lc3RhbXBzW2N1cnJlbnRMaW5lXSkpXHJcbiAgICAvLyB9LCBbY3VycmVudExpbmVdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNbY3VycmVudExpbmUtMV0pXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxbY3VycmVudExpbmVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZnVsbC1oZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY2VudGVyIGZ1bGwtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntzb25nW2N1cnJlbnRMaW5lXX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lyo8UmVhY3RBdWRpb1BsYXllciBzcmM9XCIvYXVkaW8vc29uZy5tcDNcIiBhdXRvUGxheS8+Ki99XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLmZsZXgtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlciBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5gIiwiXHJcbmV4cG9ydCBjb25zdCBJRDogc3RyaW5nID0gJ2NjYjQzYzdiLWJjMzctNDJiNy05MGIxLTVhZWRhMjc5NTdmYSdcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhYmFzZTogQXJyYXk8YW55PiA9IFtdXHJcbmRhdGFiYXNlW0lEXSA9IHtcclxuICAgIG5hbWU6ICdTaWx2YW5hJyxcclxuICAgIGFnZTogMjdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvbmcgPSBbXHJcbiAgICAgICAgXCLimavimavimatcIixcclxuICAgICAgICBcIkVzdMOhcyBzb24uLi4gbGFzIG1hw7Fhbml0YXPimapcIixcclxuICAgICAgICBcIlF1ZSBjYW50YWJhIGVsIHJleSBEYXZpZFwiLFxyXG4gICAgICAgIFwiSG95IHBvciBzZXIgZMOtYSBkZSB0dSBzYW50b+KZqlwiLFxyXG4gICAgICAgIFwiVGUgbGFzIGNhbnRhbW9zIGFxdcOt4pmq4pmqXCIsXHJcbiAgICAgICAgXCJEZXNwaWVydGEgbWkgYmllbiBkZXNwaWVydGFcIixcclxuICAgICAgICBcIk1pcmEgcXXDqSB5YSBhbWFuZWNpw7MuLi5cIixcclxuICAgICAgICBcIllhIGxvcyBwYWphcml0b3MgY2FudGFuLCBsYSBsdW5hIHlhIHNlIG1ldGnDs1wiLFxyXG4gICAgICAgIFwi4pmr4pmr4pmrXCIsXHJcbiAgICAgICAgXCJRdWUgbGluZGEgZXN0YSBsYSBtYcOxYW5hIGVuIHF1ZSB2ZW5nbyBhIHNhbHVkYXJ0ZVwiLFxyXG4gICAgICAgIFwiVmVuaW1vcyB0b2RvcyBjb24gZ3VzdG8gIHkgcGxhY2VyIGFsIGZlbGljaXRhcnRl4pmqXCIsXHJcbiAgICAgICAgXCJFbCBkw61hIGVuIHF1ZSB0dSBuYWNpc3RlLCBuYWNpZXJvbiB0b2RhcyBsYXMgZmxvcmVzXCIsXHJcbiAgICAgICAgXCJZIGVuIGxhIHBpbGEgZGVsIGJhdXRpc21vLCBjYW50YXLDs24gbG9zIHJ1aXNlw7FvcmVzXCIsXHJcbiAgICAgICAgXCJZYSB2aWVuZSBhbWFuZWNpYW5kby4uLlwiLFxyXG4gICAgICAgIFwiWWEgbGEgbHV6IGRlbCBkw61hIG5vcyBkaW9cIixcclxuICAgICAgICBcIuKZquKZqiBMZXZhbnRhdGUgZGUgbWHDsWFuYSwgbWlyYSBxdWUgeWEgYW1hbmVjacOzLiDimarimapcIlxyXG5dIiwiZXhwb3J0IGNvbnN0IG1pbnV0ZXNUb01pbGxpc2Vjb25kcyA9IChtaW51dGU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IFttaW51dGVzLCBzZWNvbmRzXSA9IG1pbnV0ZS5zcGxpdChcIjpcIilcclxuICAgIHJldHVybiAoK21pbnV0ZXMqKDYwMDAwKSkgKyAoK3NlY29uZHMqMTAwMClcclxufSIsImltcG9ydCB7ZGF0YWJhc2V9IGZyb20gXCIuLi9hcHAvY29uZmlnXCJcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvUGxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmlydGhkYXlQYWdlID0gKHtuYW1lLCBhZ2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHshc3RhcnQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRTdGFydCh0cnVlKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+wqFDYW50YSBjb25taWdvITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk6IDxQbGF5ZXIgbmFtZT17bmFtZX0gYWdlPXthZ2V9IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaXJ0aGRheVBhZ2VcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge2lkfSA9IGNvbnRleHQucXVlcnlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IGRhdGFiYXNlW2lkXVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=