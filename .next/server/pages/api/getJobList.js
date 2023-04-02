"use strict";
(() => {
var exports = {};
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });

async function handler(req, res) {
    // const resCourseId = await fetch(`${ROOT_API_URL}/api/Job/GetJobList`);
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
        data: [
            {
                "title": "task description",
                "id": "122ws21",
                "description": "Description"
            },
            {
                "title": "qwe",
                "id": "12wqe2q",
                "description": "123"
            },
            {
                "title": "123",
                "id": "1dcws21",
                "description": "123"
            }
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(661));
module.exports = __webpack_exports__;

})();