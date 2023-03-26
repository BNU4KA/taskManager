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

/***/ "./src/mainPage/mainPage.js":
/*!**********************************!*\
  !*** ./src/mainPage/mainPage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tabler-icons-react */ \"./node_modules/tabler-icons-react/dist/index.js\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/hooks */ \"./node_modules/@mantine/hooks/esm/index.js\");\n/* harmony import */ var _taskItemModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskItemModal */ \"./src/mainPage/taskItemModal.jsx\");\n/* harmony import */ var _createTaskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTaskModal */ \"./src/mainPage/createTaskModal.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MainPage = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [colorScheme, setColorScheme] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useLocalStorage)({\n        key: \"mantine-color-scheme\",\n        defaultValue: \"light\",\n        getInitialValueInEffect: true\n    });\n    const toggleColorScheme = (value)=>setColorScheme(value || (colorScheme === \"dark\" ? \"light\" : \"dark\"));\n    (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useHotkeys)([\n        [\n            \"mod+J\",\n            ()=>toggleColorScheme()\n        ]\n    ]);\n    const taskTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const taskSummary = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    function createTask() {\n        setTasks([\n            ...tasks,\n            {\n                title: taskTitle.current.value,\n                summary: taskSummary.current.value\n            }\n        ]);\n        saveTasks([\n            ...tasks,\n            {\n                title: taskTitle.current.value,\n                summary: taskSummary.current.value\n            }\n        ]);\n    }\n    function deleteTask(index) {\n        var clonedTasks = [\n            ...tasks\n        ];\n        clonedTasks.splice(index, 1);\n        setTasks(clonedTasks);\n        saveTasks([\n            ...clonedTasks\n        ]);\n    }\n    function loadTasks() {\n        let loadedTasks = localStorage.getItem(\"tasks\");\n        let tasks = JSON.parse(loadedTasks);\n        if (tasks) {\n            setTasks(tasks);\n        }\n    }\n    function saveTasks(tasks) {\n        localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadTasks();\n    }, []);\n    const [isTaskModalOpend, setIsTaskModalOpend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(null);\n    const TaskItem = ({ task , index  })=>{\n        // console.log('task', task);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Card, {\n            withBorder: true,\n            style: {\n                cursor: \"pointer\"\n            },\n            mt: \"sm\",\n            onClick: ()=>{\n                // console.log(123);\n                setIsTaskModalOpend(true);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Group, {\n                    position: \"apart\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            weight: \"bold\",\n                            children: task.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                            lineNumber: 99,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.ActionIcon, {\n                            onClick: ()=>{\n                                deleteTask(index);\n                            },\n                            color: \"red\",\n                            variant: \"transparent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.Trash, {}, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                lineNumber: 106,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                            lineNumber: 100,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    color: \"dimmed\",\n                    size: \"md\",\n                    mt: \"sm\",\n                    children: task.summary ? task.summary : \"No summary was provided for this task\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n            lineNumber: 93,\n            columnNumber: 4\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.ColorSchemeProvider, {\n        colorScheme: colorScheme,\n        toggleColorScheme: toggleColorScheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.MantineProvider, {\n            theme: {\n                colorScheme,\n                defaultRadius: \"md\"\n            },\n            withGlobalStyles: true,\n            withNormalizeCSS: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"App\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createTaskModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setOpened: setOpened,\n                        createTask: createTask,\n                        opened: opened,\n                        taskTitle: taskTitle,\n                        taskSummary: taskSummary\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                        lineNumber: 127,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_taskItemModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        opened: isTaskModalOpend,\n                        setOpened: setIsTaskModalOpend,\n                        taskTitle: taskTitle,\n                        taskSummary: taskSummary\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                        lineNumber: 129,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        size: 550,\n                        my: 40,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Group, {\n                                position: \"apart\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Title, {\n                                        sx: (theme)=>({\n                                                fontFamily: `Greycliff CF, ${theme.fontFamily}`,\n                                                fontWeight: 900\n                                            }),\n                                        children: \"Weekly tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.ActionIcon, {\n                                        color: \"blue\",\n                                        onClick: ()=>toggleColorScheme(),\n                                        size: \"lg\",\n                                        children: colorScheme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.Sun, {\n                                            size: 16\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                            lineNumber: 144,\n                                            columnNumber: 10\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.MoonStars, {\n                                            size: 16\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                            lineNumber: 146,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                lineNumber: 131,\n                                columnNumber: 7\n                            }, undefined),\n                            tasks.length > 0 ? tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskItem, {\n                                    task: task,\n                                    index: index\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 35\n                                }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                size: \"lg\",\n                                mt: \"md\",\n                                color: \"dimmed\",\n                                children: \"You have no tasks\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                lineNumber: 153,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                onClick: ()=>{\n                                    setOpened(true);\n                                },\n                                fullWidth: true,\n                                mt: \"md\",\n                                children: \"New Task\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                                lineNumber: 157,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                        lineNumber: 130,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n                lineNumber: 126,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n            lineNumber: 122,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\todoReact\\\\src\\\\mainPage\\\\mainPage.js\",\n        lineNumber: 119,\n        columnNumber: 3\n    }, undefined);\n};\n_s(MainPage, \"UixEuti9k2N8clh+Zvlb3Q6PWiY=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useLocalStorage,\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useHotkeys,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt5Q0FHN0M7MENBQ0QsOERBQUNoRSxpREFBTUE7Z0NBQ042RCxTQUFTLElBQU07b0NBQ2RwQyxVQUFVLElBQUk7Z0NBQ2Y7Z0NBQ0FzRCxTQUFTO2dDQUNUbkIsSUFBSTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQW5KTXZDOztRQUlpQ0osMkRBQWVBO1FBUXJERCxzREFBVUE7UUFxREtJLGtEQUFTQTs7O0tBakVuQkM7QUFxSk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21haW5QYWdlL21haW5QYWdlLmpzP2U5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QnV0dG9uLFxuXHRDb250YWluZXIsXG5cdFRleHQsXG5cdFRpdGxlLFxuXHRHcm91cCxcblx0Q2FyZCxcblx0QWN0aW9uSWNvbixcbn0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb29uU3RhcnMsIFN1biwgVHJhc2ggfSBmcm9tICd0YWJsZXItaWNvbnMtcmVhY3QnO1xuXG5pbXBvcnQge1xuXHRNYW50aW5lUHJvdmlkZXIsXG5cdENvbG9yU2NoZW1lUHJvdmlkZXIsXG59IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ29sb3JTY2hlbWUgfSBmcm9tICdAbWFudGluZS9ob29rcyc7XG5pbXBvcnQgeyB1c2VIb3RrZXlzLCB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICdAbWFudGluZS9ob29rcyc7XG5pbXBvcnQgVGFza01vZGFsIGZyb20gJy4vdGFza0l0ZW1Nb2RhbCc7XG5pbXBvcnQgQ3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZVRhc2tNb2RhbCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xuXHRjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZUxvY2FsU3RvcmFnZSh7XG5cdFx0a2V5OiAnbWFudGluZS1jb2xvci1zY2hlbWUnLFxuXHRcdGRlZmF1bHRWYWx1ZTogJ2xpZ2h0Jyxcblx0XHRnZXRJbml0aWFsVmFsdWVJbkVmZmVjdDogdHJ1ZSxcblx0fSk7XG5cdGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gdmFsdWUgPT5cblx0XHRzZXRDb2xvclNjaGVtZSh2YWx1ZSB8fCAoY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpKTtcblxuXHR1c2VIb3RrZXlzKFtbJ21vZCtKJywgKCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKV1dKTtcblxuXHRjb25zdCB0YXNrVGl0bGUgPSB1c2VSZWYoJycpO1xuXHRjb25zdCB0YXNrU3VtbWFyeSA9IHVzZVJlZignJyk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcblx0XHRzZXRUYXNrcyhbXG5cdFx0XHQuLi50YXNrcyxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IHRhc2tUaXRsZS5jdXJyZW50LnZhbHVlLFxuXHRcdFx0XHRzdW1tYXJ5OiB0YXNrU3VtbWFyeS5jdXJyZW50LnZhbHVlLFxuXHRcdFx0fSxcblx0XHRdKTtcblxuXHRcdHNhdmVUYXNrcyhbXG5cdFx0XHQuLi50YXNrcyxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IHRhc2tUaXRsZS5jdXJyZW50LnZhbHVlLFxuXHRcdFx0XHRzdW1tYXJ5OiB0YXNrU3VtbWFyeS5jdXJyZW50LnZhbHVlLFxuXHRcdFx0fSxcblx0XHRdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcblx0XHR2YXIgY2xvbmVkVGFza3MgPSBbLi4udGFza3NdO1xuXG5cdFx0Y2xvbmVkVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdHNldFRhc2tzKGNsb25lZFRhc2tzKTtcblxuXHRcdHNhdmVUYXNrcyhbLi4uY2xvbmVkVGFza3NdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcblx0XHRsZXQgbG9hZGVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcblxuXHRcdGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9hZGVkVGFza3MpO1xuXG5cdFx0aWYgKHRhc2tzKSB7XG5cdFx0XHRzZXRUYXNrcyh0YXNrcyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2F2ZVRhc2tzKHRhc2tzKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bG9hZFRhc2tzKCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBbaXNUYXNrTW9kYWxPcGVuZCwgc2V0SXNUYXNrTW9kYWxPcGVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKG51bGwpO1xuXG5cdGNvbnN0IFRhc2tJdGVtID0gKHsgdGFzaywgaW5kZXggfSkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCd0YXNrJywgdGFzayk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDYXJkIGtleT17aW5kZXh9IHdpdGhCb3JkZXIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gbXQ9eydzbSd9IG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coMTIzKTtcblx0XHRcdFx0c2V0SXNUYXNrTW9kYWxPcGVuZCh0cnVlKTtcblxuXHRcdFx0fX0+XG5cdFx0XHRcdDxHcm91cCBwb3NpdGlvbj17J2FwYXJ0J30+XG5cdFx0XHRcdFx0PFRleHQgd2VpZ2h0PXsnYm9sZCd9Pnt0YXNrLnRpdGxlfTwvVGV4dD5cblx0XHRcdFx0XHQ8QWN0aW9uSWNvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRkZWxldGVUYXNrKGluZGV4KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjb2xvcj17J3JlZCd9XG5cdFx0XHRcdFx0XHR2YXJpYW50PXsndHJhbnNwYXJlbnQnfT5cblx0XHRcdFx0XHRcdDxUcmFzaCAvPlxuXHRcdFx0XHRcdDwvQWN0aW9uSWNvbj5cblx0XHRcdFx0PC9Hcm91cD5cblx0XHRcdFx0PFRleHQgY29sb3I9eydkaW1tZWQnfSBzaXplPXsnbWQnfSBtdD17J3NtJ30+XG5cdFx0XHRcdFx0e3Rhc2suc3VtbWFyeVxuXHRcdFx0XHRcdFx0PyB0YXNrLnN1bW1hcnlcblx0XHRcdFx0XHRcdDogJ05vIHN1bW1hcnkgd2FzIHByb3ZpZGVkIGZvciB0aGlzIHRhc2snfVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0KVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PENvbG9yU2NoZW1lUHJvdmlkZXJcblx0XHRcdGNvbG9yU2NoZW1lPXtjb2xvclNjaGVtZX1cblx0XHRcdHRvZ2dsZUNvbG9yU2NoZW1lPXt0b2dnbGVDb2xvclNjaGVtZX0+XG5cdFx0XHQ8TWFudGluZVByb3ZpZGVyXG5cdFx0XHRcdHRoZW1lPXt7IGNvbG9yU2NoZW1lLCBkZWZhdWx0UmFkaXVzOiAnbWQnIH19XG5cdFx0XHRcdHdpdGhHbG9iYWxTdHlsZXNcblx0XHRcdFx0d2l0aE5vcm1hbGl6ZUNTUz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J0FwcCc+XG5cdFx0XHRcdFx0PENyZWF0ZVRhc2sgc2V0T3BlbmVkPXtzZXRPcGVuZWR9IGNyZWF0ZVRhc2s9e2NyZWF0ZVRhc2t9IG9wZW5lZD17b3BlbmVkfSB0YXNrVGl0bGU9e3Rhc2tUaXRsZX0gdGFza1N1bW1hcnk9e3Rhc2tTdW1tYXJ5fSAvPlxuXHRcdFx0XHRcdHsvKiA8Q3JlYXRlVGFzayBzZXRPcGVuZWQ9e3NldElzVGFza01vZGFsT3BlbmR9IGNyZWF0ZVRhc2s9e2NyZWF0ZVRhc2t9IG9wZW5lZD17aXNUYXNrTW9kYWxPcGVuZH0gdGFza1RpdGxlPXt0YXNrVGl0bGV9IHRhc2tTdW1tYXJ5PXt0YXNrU3VtbWFyeX0gLz4gKi99XG5cdFx0XHRcdFx0PFRhc2tNb2RhbCBvcGVuZWQ9e2lzVGFza01vZGFsT3BlbmR9IHNldE9wZW5lZD17c2V0SXNUYXNrTW9kYWxPcGVuZH0gdGFza1RpdGxlPXt0YXNrVGl0bGV9IHRhc2tTdW1tYXJ5PXt0YXNrU3VtbWFyeX0gLz5cblx0XHRcdFx0XHQ8Q29udGFpbmVyIHNpemU9ezU1MH0gbXk9ezQwfT5cblx0XHRcdFx0XHRcdDxHcm91cCBwb3NpdGlvbj17J2FwYXJ0J30+XG5cdFx0XHRcdFx0XHRcdDxUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdHN4PXt0aGVtZSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udEZhbWlseTogYEdyZXljbGlmZiBDRiwgJHt0aGVtZS5mb250RmFtaWx5fWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA5MDAsXG5cdFx0XHRcdFx0XHRcdFx0fSl9PlxuXHRcdFx0XHRcdFx0XHRcdFdlZWtseSB0YXNrc1xuXHRcdFx0XHRcdFx0XHQ8L1RpdGxlPlxuXHRcdFx0XHRcdFx0XHQ8QWN0aW9uSWNvblxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsnYmx1ZSd9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKX1cblx0XHRcdFx0XHRcdFx0XHRzaXplPSdsZyc+XG5cdFx0XHRcdFx0XHRcdFx0e2NvbG9yU2NoZW1lID09PSAnZGFyaycgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3VuIHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TW9vblN0YXJzIHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvQWN0aW9uSWNvbj5cblx0XHRcdFx0XHRcdDwvR3JvdXA+XG5cdFx0XHRcdFx0XHR7dGFza3MubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHRcdFx0dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gPFRhc2tJdGVtIHRhc2s9e3Rhc2t9IGluZGV4PXtpbmRleH0gLz4pXG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBzaXplPXsnbGcnfSBtdD17J21kJ30gY29sb3I9eydkaW1tZWQnfT5cblx0XHRcdFx0XHRcdFx0XHRZb3UgaGF2ZSBubyB0YXNrc1xuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0T3BlbmVkKHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhcblx0XHRcdFx0XHRcdFx0bXQ9eydtZCd9PlxuXHRcdFx0XHRcdFx0XHROZXcgVGFza1xuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9NYW50aW5lUHJvdmlkZXI+XG5cdFx0PC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29udGFpbmVyIiwiVGV4dCIsIlRpdGxlIiwiR3JvdXAiLCJDYXJkIiwiQWN0aW9uSWNvbiIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTW9vblN0YXJzIiwiU3VuIiwiVHJhc2giLCJNYW50aW5lUHJvdmlkZXIiLCJDb2xvclNjaGVtZVByb3ZpZGVyIiwidXNlQ29sb3JTY2hlbWUiLCJ1c2VIb3RrZXlzIiwidXNlTG9jYWxTdG9yYWdlIiwiVGFza01vZGFsIiwiQ3JlYXRlVGFzayIsInVzZVJvdXRlciIsIk1haW5QYWdlIiwidGFza3MiLCJzZXRUYXNrcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsImNvbG9yU2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJnZXRJbml0aWFsVmFsdWVJbkVmZmVjdCIsInRvZ2dsZUNvbG9yU2NoZW1lIiwidmFsdWUiLCJ0YXNrVGl0bGUiLCJ0YXNrU3VtbWFyeSIsImNyZWF0ZVRhc2siLCJ0aXRsZSIsImN1cnJlbnQiLCJzdW1tYXJ5Iiwic2F2ZVRhc2tzIiwiZGVsZXRlVGFzayIsImluZGV4IiwiY2xvbmVkVGFza3MiLCJzcGxpY2UiLCJsb2FkVGFza3MiLCJsb2FkZWRUYXNrcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaXNUYXNrTW9kYWxPcGVuZCIsInNldElzVGFza01vZGFsT3BlbmQiLCJyb3V0ZXIiLCJUYXNrSXRlbSIsInRhc2siLCJ3aXRoQm9yZGVyIiwic3R5bGUiLCJjdXJzb3IiLCJtdCIsIm9uQ2xpY2siLCJwb3NpdGlvbiIsIndlaWdodCIsImNvbG9yIiwidmFyaWFudCIsInNpemUiLCJ0aGVtZSIsImRlZmF1bHRSYWRpdXMiLCJ3aXRoR2xvYmFsU3R5bGVzIiwid2l0aE5vcm1hbGl6ZUNTUyIsImRpdiIsImNsYXNzTmFtZSIsIm15Iiwic3giLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxlbmd0aCIsIm1hcCIsImZ1bGxXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/mainPage/mainPage.js\n"));

/***/ })

});