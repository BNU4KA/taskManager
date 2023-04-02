"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getJobList";
exports.ids = ["pages/api/getJobList"];
exports.modules = {

/***/ "(api)/./pages/api/getJobList.js":
/*!*********************************!*\
  !*** ./pages/api/getJobList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/constants */ \"(api)/./src/constants/index.js\");\n\nasync function handler(req, res) {\n    // const resCourseId = await fetch(`${ROOT_API_URL}/api/Job/GetJobList`);\n    // const resData = await resCourseId.json();\n    // switch (resCourseId.status) {\n    //   case 404:\n    //     res.status(200).json({ status: 404 });\n    //   case 200:\n    //     res.status(200).json({ status: 200, data: resData });\n    //   default:\n    //     res.status(200).json({ status: false });\n    // }\n    res.status(200).json({\n        data: [\n            {\n                \"title\": \"task description\",\n                \"id\": \"122ws21\",\n                \"description\": \"Description\"\n            },\n            {\n                \"title\": \"qwe\",\n                \"id\": \"12wqe2q\",\n                \"description\": \"123\"\n            },\n            {\n                \"title\": \"123\",\n                \"id\": \"1dcws21\",\n                \"description\": \"123\"\n            }\n        ]\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Sm9iTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUVwQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Qyx5RUFBeUU7SUFDekUsNENBQTRDO0lBRTVDLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLCtDQUErQztJQUMvQyxJQUFJO0lBQ0pBLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsTUFBTTtZQUMzQjtnQkFDSSxTQUFTO2dCQUNULE1BQU07Z0JBQ04sZUFBZTtZQUNuQjtZQUNBO2dCQUNJLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixlQUFlO1lBQ25CO1lBQ0E7Z0JBQ0ksU0FBUztnQkFDVCxNQUFNO2dCQUNOLGVBQWU7WUFDbkI7U0FDSDtJQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRKb2JMaXN0LmpzPzZmOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUk9PVF9BUElfVVJMIH0gZnJvbSBcIi4uLy4uL3NyYy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBjb25zdCByZXNDb3Vyc2VJZCA9IGF3YWl0IGZldGNoKGAke1JPT1RfQVBJX1VSTH0vYXBpL0pvYi9HZXRKb2JMaXN0YCk7XHJcbiAgLy8gY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc0NvdXJzZUlkLmpzb24oKTtcclxuXHJcbiAgLy8gc3dpdGNoIChyZXNDb3Vyc2VJZC5zdGF0dXMpIHtcclxuICAvLyAgIGNhc2UgNDA0OlxyXG4gIC8vICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogNDA0IH0pO1xyXG4gIC8vICAgY2FzZSAyMDA6XHJcbiAgLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAyMDAsIGRhdGE6IHJlc0RhdGEgfSk7XHJcbiAgLy8gICBkZWZhdWx0OlxyXG4gIC8vICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogZmFsc2UgfSk7XHJcbiAgLy8gfVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogW1xyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJ0YXNrIGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgXCJpZFwiOiAnMTIyd3MyMScsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcInF3ZVwiLFxyXG4gICAgICAgIFwiaWRcIjogJzEyd3FlMnEnLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIxMjNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiMTIzXCIsXHJcbiAgICAgICAgXCJpZFwiOiAnMWRjd3MyMScsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIjEyM1wiXHJcbiAgICB9XHJcbl0gfSlcclxufVxyXG4iXSwibmFtZXMiOlsiUk9PVF9BUElfVVJMIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getJobList.js\n");

/***/ }),

/***/ "(api)/./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROOT_API_URL\": () => (/* binding */ ROOT_API_URL)\n/* harmony export */ });\nconst ROOT_API_URL = \"https://lupa.by/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxlQUFlLG1CQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanM/MThiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUk9PVF9BUElfVVJMID0gJ2h0dHBzOi8vbHVwYS5ieS8nIl0sIm5hbWVzIjpbIlJPT1RfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/constants/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getJobList.js"));
module.exports = __webpack_exports__;

})();