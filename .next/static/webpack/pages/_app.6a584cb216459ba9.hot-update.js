"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/mainPage/taskItemModal.jsx":
/*!****************************************!*\
  !*** ./src/mainPage/taskItemModal.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst TaskModal = ({ setOpened , createTask , opened , taskTitle , taskSummary , taskId  })=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(taskTitle);\n    const { query: { task  } , asPath  } = router || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n        opened: opened,\n        size: \"90%\",\n        title: task,\n        withCloseButton: false,\n        onClose: ()=>{\n            setOpened(false);\n            router.push(asPath);\n        },\n        centered: true\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\taskItemModal.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TaskModal, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TaskModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskModal);\nvar _c;\n$RefreshReg$(_c, \"TaskModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpblBhZ2UvdGFza0l0ZW1Nb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQU1IO0FBQ2lCO0FBRXhDLE1BQU1NLFlBQVksQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFQyxVQUFTLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEdBQUs7O0lBQ3hGLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QlMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU0sRUFBRU0sT0FBTyxFQUFFQyxLQUFJLEVBQUUsR0FBRUMsT0FBTSxFQUFFLEdBQUdMLFVBQVUsQ0FBQztJQUM1QyxxQkFDSSw4REFBQ1gsZ0RBQUtBO1FBQ1hPLFFBQVFBO1FBQ1JVLE1BQUs7UUFDTEMsT0FBT0g7UUFDUEksaUJBQWlCLEtBQUs7UUFDdEJDLFNBQVMsSUFBTTtZQUNkZixVQUFVLEtBQUs7WUFDZk0sT0FBT1UsSUFBSSxDQUFDTDtRQUNiO1FBQ0FNLFFBQVE7Ozs7OztBQWlDWDtHQS9DTWxCOztRQUNVRCxrREFBU0E7OztLQURuQkM7QUFpRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21haW5QYWdlL3Rhc2tJdGVtTW9kYWwuanN4PzJlZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRNb2RhbCxcclxuXHRUZXh0SW5wdXQsXHJcblx0R3JvdXAsXHJcbn0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFRhc2tNb2RhbCA9ICh7IHNldE9wZW5lZCwgY3JlYXRlVGFzaywgb3BlbmVkLCB0YXNrVGl0bGUsIHRhc2tTdW1tYXJ5LCB0YXNrSWQgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnNvbGUubG9nKHRhc2tUaXRsZSk7XHJcblx0Y29uc3QgeyBxdWVyeTogeyB0YXNrIH0sIGFzUGF0aCB9ID0gcm91dGVyIHx8IHt9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuXHRcdFx0b3BlbmVkPXtvcGVuZWR9XHJcblx0XHRcdHNpemU9XCI5MCVcIlxyXG5cdFx0XHR0aXRsZT17dGFza31cclxuXHRcdFx0d2l0aENsb3NlQnV0dG9uPXtmYWxzZX1cclxuXHRcdFx0b25DbG9zZT17KCkgPT4ge1xyXG5cdFx0XHRcdHNldE9wZW5lZChmYWxzZSk7XHJcblx0XHRcdFx0cm91dGVyLnB1c2goYXNQYXRoKTtcclxuXHRcdFx0fX1cclxuXHRcdFx0Y2VudGVyZWRcclxuICAgICAgICA+XHJcblx0XHRcdHsvKiA8VGV4dElucHV0XHJcblx0XHRcdFx0bXQ9eydtZCd9XHJcblx0XHRcdFx0cmVmPXt0YXNrVGl0bGV9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9eydUYXNrIFRpdGxlJ31cclxuXHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdGxhYmVsPXsnVGl0bGUnfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dElucHV0XHJcblx0XHRcdFx0cmVmPXt0YXNrU3VtbWFyeX1cclxuXHRcdFx0XHRtdD17J21kJ31cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj17J1Rhc2sgU3VtbWFyeSd9XHJcblx0XHRcdFx0bGFiZWw9eydTdW1tYXJ5J31cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEdyb3VwIG10PXsnbWQnfSBwb3NpdGlvbj17J2FwYXJ0J30+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRPcGVuZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9eydzdWJ0bGUnfT5cclxuXHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0Y3JlYXRlVGFzaygpO1xyXG5cdFx0XHRcdFx0XHRzZXRPcGVuZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRDcmVhdGUgVGFza1xyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0dyb3VwPiAqL31cclxuXHRcdDwvTW9kYWw+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza01vZGFsOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIk1vZGFsIiwiVGV4dElucHV0IiwiR3JvdXAiLCJ1c2VSb3V0ZXIiLCJUYXNrTW9kYWwiLCJzZXRPcGVuZWQiLCJjcmVhdGVUYXNrIiwib3BlbmVkIiwidGFza1RpdGxlIiwidGFza1N1bW1hcnkiLCJ0YXNrSWQiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0YXNrIiwiYXNQYXRoIiwic2l6ZSIsInRpdGxlIiwid2l0aENsb3NlQnV0dG9uIiwib25DbG9zZSIsInB1c2giLCJjZW50ZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/mainPage/taskItemModal.jsx\n"));

/***/ })

});