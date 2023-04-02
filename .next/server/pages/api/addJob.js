"use strict";
(() => {
var exports = {};
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });

async function handler(req, res) {
    // const resCourseId = await fetch(`${ROOT_API_URL}/api/Job/AddJob`);
    // const resData = await resCourseId.json();
    // switch (resCourseId.status) {
    //   case 404:
    //     res.status(200).json({ status: 404 });
    //   case 200:
    //     res.status(200).json({ status: 200, data: resData });
    //   default:
    //     res.status(200).json({ status: false });
    // }
    res.status(200).json({
        data: {
            "title": "new task",
            "description": "Description",
            "id": "122ws21"
        }
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(250));
module.exports = __webpack_exports__;

})();