"use strict";
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "tabler-icons-react"
var external_tabler_icons_react_ = __webpack_require__(384);
// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/mainPage/taskItemModal.jsx




const TaskModal = ({ setOpened , opened , taskId , state  })=>{
    const router = (0,router_.useRouter)();
    const { query: { task  } , pathname  } = router || {};
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Modal, {
        opened: opened,
        size: "90%",
        title: task,
        withCloseButton: false,
        onClose: ()=>{
            setOpened(false);
            router.push(pathname);
        },
        centered: true
    });
};
/* harmony default export */ const taskItemModal = (TaskModal);

;// CONCATENATED MODULE: ./src/mainPage/createTaskModal.jsx



const CreateTask = ({ setOpened , createTask , opened , state , handleChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Modal, {
        opened: opened,
        size: "md",
        title: "New Task",
        withCloseButton: false,
        onClose: ()=>{
            setOpened(false);
        },
        centered: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextInput, {
                mt: "md",
                value: state.title,
                name: "title",
                onChange: (event)=>handleChange(event),
                placeholder: "Task Title",
                required: true,
                label: "Title",
                type: "text"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextInput, {
                value: state.description,
                name: "description",
                onChange: (event)=>handleChange(event),
                mt: "md",
                placeholder: "Task Description",
                label: "Description",
                type: "text"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                mt: "md",
                position: "apart",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        onClick: ()=>{
                            setOpened(false);
                        },
                        variant: "subtle",
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        onClick: ()=>{
                            createTask();
                            setOpened(false);
                        },
                        children: "Create Task"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const createTaskModal = (CreateTask);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/slices/tasksSlice.jsx
// import { hydrate } from '@actions/commonActions';

// import { fetch } from 'xpc-utils';
const initialState = {
    tasks: [],
    isTasksLoaded: false
};
const fetchTasks = (0,toolkit_.createAsyncThunk)("fetch/tasks", async (payload, { getState  })=>{
    try {
        // const {
        //   user: { sessionId },
        //   course: { id: courseId },
        // } = getState();
        // if (!courseId) return [];
        // const response = await fetch(`https://translation.xperiencify.dev/api/v1/translation/${courseId}/EN`, {
        //   sessionId,
        // });
        // const data = await response.json();
        // return data;
        console.log(1);
        const response = await fetch(`/api/getJobList/`, {
            method: "GET"
        });
        const responseData = await response.json();
        console.log({
            response,
            responseData
        });
        return responseData;
    } catch (err) {
        console.log("fetch translation error", err);
        return {};
    }
});
const tasksSlice = (0,toolkit_.createSlice)({
    name: "tasksSliceData",
    initialState,
    extraReducers: (project)=>{
        project.addCase(fetchTasks.fulfilled, (state, { payload: { data: tasks  }  })=>{
            return {
                ...state,
                isTasksLoaded: true,
                tasks
            };
        });
    }
});
/* harmony default export */ const slices_tasksSlice = (tasksSlice);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "spinners-react"
var external_spinners_react_ = __webpack_require__(406);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(517);
;// CONCATENATED MODULE: ./src/mainPage/mainPage.js














const mainPage_initialState = {
    title: "",
    description: ""
};
const MainPage = ({ fetchTasks =external_lodash_.noop , tasksData: tasks = [] , isTasksLoaded =false  })=>{
    const [opened, setOpened] = (0,external_react_.useState)(false);
    const [state, setState] = (0,external_react_.useState)(mainPage_initialState);
    const [isTaskModalOpend, setIsTaskModalOpend] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)(null);
    (0,external_react_.useEffect)(()=>{
        fetchTasks();
    }, []);
    const [colorScheme, setColorScheme] = (0,hooks_.useLocalStorage)({
        key: "mantine-color-scheme",
        defaultValue: "light",
        getInitialValueInEffect: true
    });
    const toggleColorScheme = (value)=>setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    (0,hooks_.useHotkeys)([
        [
            "mod+J",
            ()=>toggleColorScheme()
        ]
    ]);
    const handleChange = ({ target: { name , value  }  })=>{
        console.log(name, value);
        setState((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const onSubmit = ()=>{};
    const TaskItem = ({ task , index  })=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
            withBorder: true,
            style: {
                cursor: "pointer"
            },
            mt: "sm",
            onClick: ()=>{
                setIsTaskModalOpend(true);
                router.push(`${router.asPath}/?task=${task.title}`);
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            weight: "bold",
                            children: task.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                            onClick: ()=>{
                                deleteTask(index);
                            },
                            color: "red",
                            variant: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Trash, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    color: "dimmed",
                    size: "md",
                    mt: "sm",
                    children: task.description ? task.description : "No description was provided for this task"
                })
            ]
        }, index);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.ColorSchemeProvider, {
        colorScheme: colorScheme,
        toggleColorScheme: toggleColorScheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MantineProvider, {
            theme: {
                colorScheme,
                defaultRadius: "md"
            },
            withGlobalStyles: true,
            withNormalizeCSS: true,
            children: [
                !isTasksLoaded && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        width: "100vw",
                        height: "95vh",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_spinners_react_.SpinnerDotted, {
                        height: "300",
                        width: "300",
                        radius: "100",
                        color: "green",
                        ariaLabel: "loading",
                        wrapperStyle: true,
                        wrapperClass: true,
                        style: {
                            width: 100,
                            color: "#fff"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "App",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(createTaskModal, {
                            setOpened: setOpened,
                            state: state,
                            createTask: ()=>{},
                            opened: opened,
                            handleChange: handleChange
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(taskItemModal, {
                            opened: isTaskModalOpend,
                            state: state,
                            setOpened: setIsTaskModalOpend,
                            handleChange: handleChange
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                            size: 550,
                            my: 40,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                    position: "apart",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Title, {
                                            sx: (theme)=>({
                                                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                                    fontWeight: 900
                                                }),
                                            children: "Weekly tasks"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                                            color: "blue",
                                            onClick: ()=>toggleColorScheme(),
                                            size: "lg",
                                            children: colorScheme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Sun, {
                                                size: 16
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.MoonStars, {
                                                size: 16
                                            })
                                        })
                                    ]
                                }),
                                tasks.length > 0 ? tasks.map((task, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TaskItem, {
                                        task: task,
                                        index: index
                                    })) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                    size: "lg",
                                    mt: "md",
                                    color: "dimmed",
                                    children: "You have no tasks"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    onClick: ()=>{
                                        setOpened(true);
                                    },
                                    fullWidth: true,
                                    mt: "md",
                                    children: "New Task"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const mapStateToProps = ({ tasksSliceData: { tasks: tasksData , isTasksLoaded  }  })=>({
        tasksData,
        isTasksLoaded
    });
const mapDispatchToProps = (dispatch)=>({
        fetchTasks: ()=>dispatch(fetchTasks())
    });
/* harmony default export */ const mainPage = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(MainPage));

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
;// CONCATENATED MODULE: ./src/slices/index.jsx


/* harmony default export */ const slices = ((0,external_redux_.combineReducers)({
    [slices_tasksSlice.name]: slices_tasksSlice.reducer
}));

;// CONCATENATED MODULE: ./src/store.jsx




const makeStore = ()=>{
    const store = (0,toolkit_.configureStore)({
        reducer: slices,
        devTools: process.env.ENV !== "production",
        middleware: [
            (external_redux_thunk_default())
        ]
    });
    // if (process.env.ENV !== 'production' && module.hot) {
    //   module.hot.accept('./slicers', () => store.replaceReducer(rootReducer));
    // }
    return store;
};
const testStore = makeStore();
const ReduxWrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.js



const App = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(mainPage, {});
};
/* harmony default export */ const _app = (ReduxWrapper.withRedux(App));


/***/ })

};
;