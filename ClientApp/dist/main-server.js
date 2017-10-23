(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(140);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    showModal: function (text, canClose) { return ({
        type: 'SHOW_MODAL_ACTION',
        modalText: text,
        canClose: canClose
    }); },
    closeModal: function () { return ({
        type: 'CLOSE_MODAL_ACTION'
    }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { show: false, modalText: '', canClose: undefined };
var reducer = function (state, action) {
    switch (action.type) {
        case 'SHOW_MODAL_ACTION':
            return {
                show: true,
                modalText: action.modalText,
                canClose: action.canClose
            };
        case 'CLOSE_MODAL_ACTION':
            return {
                show: false,
                modalText: state.modalText,
                canClose: state.canClose
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(141);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    getUserInfo: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])("/api/get/GetUserInfo", {
            method: 'GET',
            credentials: "same-origin"
        }).then(function (response) {
            if (response.status !== 200)
                return null;
            return response.json();
        }).then(function (data) {
            dispatch({ type: 'SET_USER_INFO', userInfo: data });
        }).catch(function (err) {
            console.log('Error :-S in user', err);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'GET_USER_INFO' });
    }; },
    deleteUserInfo: function () { return function (dispatch, getState) {
        var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])("/api/auth/SignOut", {
            method: 'GET',
            credentials: "same-origin"
        }).then(function (response) {
            dispatch({ type: 'DELETE_USER_INFO' });
        }).catch(function (err) {
            console.log('Error :-S in user', err);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { userInfo: null, getServerData: null };
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_USER_INFO':
            return {
                userInfo: state.userInfo,
                getServerData: false
            };
        case 'SET_USER_INFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                userInfo: action.userInfo ? action.userInfo : null,
                getServerData: true
            };
        case 'DELETE_USER_INFO':
            return unloadedState;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(142);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
// ----------------    
// Connection to server
// Config WebSocket
var socket;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    subscribeToMessages: function () { return function (dispatch, getState) {
        socket = new WebSocket("ws://localhost:60217/ws");
        socket.onmessage = function (event) {
            try {
                var items = JSON.parse(event.data);
                var data = {
                    steamId: items.Item1,
                    userName: items.Item2,
                    message: items.Item3,
                    date: new Date(items.Item4)
                };
                dispatch({
                    type: 'GET_MESSAGE',
                    message: data
                });
            }
            catch (err) {
                console.log('WebSocket Error :-S in Chat', err);
            }
        };
        socket.onopen = function (event) {
            socket.send("GetMessages");
        };
        socket.onclose = function (event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            }
            else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
        socket.onerror = function (error) {
            console.log("Ошибка:");
            console.log(error);
        };
    }; },
    sendMessage: function (steamId, userName, message) { return function (dispatch, getState) {
        socket.send(JSON.stringify({ steamId: steamId, userName: userName, message: message }));
    }; },
    showTrigger: function () { return ({ type: 'SHOW_TRIGGER' }); },
    autoScrollTrigger: function () { return ({ type: 'AUTO_SCROLL_TRIGGER' }); },
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { messages: null, show: false, is_autoscroll: false };
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_MESSAGE':
            var data;
            if (!state.messages) {
                data = [action.message];
            }
            else {
                if (state.messages.length > 50) {
                    state.messages.shift();
                    data = state.messages.concat(action.message);
                }
                else {
                    data = state.messages.concat(action.message);
                }
            }
            return {
                messages: data,
                show: state.show,
                is_autoscroll: state.is_autoscroll,
            };
        case 'SHOW_TRIGGER':
            return {
                messages: state.messages,
                show: !state.show,
                is_autoscroll: state.is_autoscroll,
            };
        case 'AUTO_SCROLL_TRIGGER':
            return {
                messages: state.messages,
                show: state.show,
                is_autoscroll: !state.is_autoscroll,
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(135);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(29);




function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* unused harmony export popup */
/* unused harmony export chat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_Layout__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Dota2__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CSGO__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Rules__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_FAQ__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Warning__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Lk__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Chat__ = __webpack_require__(16);











var routes = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__container_Layout__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/dota2', component: __WEBPACK_IMPORTED_MODULE_4__components_Dota2__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/csgo', component: __WEBPACK_IMPORTED_MODULE_5__components_CSGO__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/rules', component: __WEBPACK_IMPORTED_MODULE_6__components_Rules__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/faq', component: __WEBPACK_IMPORTED_MODULE_7__components_FAQ__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/lk/:userId?', component: __WEBPACK_IMPORTED_MODULE_9__components_Lk__["a" /* default */] }));
var popup = __WEBPACK_IMPORTED_MODULE_8__components_Warning__["a" /* default */];
var chat = __WEBPACK_IMPORTED_MODULE_10__components_Chat__["a" /* default */];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(132);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(137);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(139);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(9);









/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(params.location));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, CS:GO!"));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Message__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Chat__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Chat = (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollToBottom = function () {
            if (_this.props.chat.is_autoscroll) {
                var node = __WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"](_this.refs.chat_messages);
                node.scrollTop = node.scrollHeight;
            }
        };
        _this.KeyHandler = function (key) {
            if (key.key == 'Enter') {
                if (key.altKey || key.ctrlKey || key.shiftKey || key.metaKey)
                    return;
                var elem = document.getElementById('inputMessage');
                if (elem.value.trim() == '') {
                    return;
                }
                var props = _this.props;
                var userInfo = props.user.userInfo;
                _this.props.sendMessage(userInfo.steamid, userInfo.personaname, elem.value.trim());
                elem.value = "";
            }
        };
        //React.UIEvent<HTMLDivElement>
        _this.ScrollHandler = function (event) {
            var div = event.target;
            if (_this.props.chat.is_autoscroll) {
                // div.offsetHeight + div.scrollTop <= div.scrollHeight
                var height = (div.scrollTop + div.offsetHeight + 40) - div.scrollHeight;
                if (height < 0) {
                    _this.props.autoScrollTrigger();
                }
            }
            else {
                var height = (div.scrollTop + div.offsetHeight + 40) - div.scrollHeight;
                if (height > 0) {
                    _this.props.autoScrollTrigger();
                }
            }
        };
        return _this;
    }
    Chat.prototype.componentDidMount = function () {
        //get preload messages from server
        this.props.subscribeToMessages();
        //enable chat
        this.props.showTrigger();
        //scroll
        this.props.autoScrollTrigger();
    };
    Chat.prototype.componentDidUpdate = function () {
        this.scrollToBottom();
    };
    Chat.prototype.render = function () {
        var props = this.props;
        var chat = props.chat;
        if (!chat.show)
            return null;
        var userInfo = props.user.userInfo;
        var userName = "anon";
        var disabledAttribut;
        var disabledClassName = '';
        if (userInfo) {
            userName = userInfo.personaname;
        }
        else {
            disabledAttribut = true;
            disabledClassName = ' disabled';
        }
        var inputHTML = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "form-control input-chat" + disabledClassName, id: "inputMessage", placeholder: "Ваше сообщение...", maxLength: 50, onKeyDown: this.KeyHandler, disabled: disabledAttribut });
        var templMessages = null;
        if (chat.messages)
            templMessages = chat.messages.map(function (message, index) {
                // ({ steamId: steamId, userName: userName, message: message, date: date }, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Message__["a" /* default */], { message: message, key: index });
                // return <Message message={{steamId: steamId, userName:userName, message:message, date:date }} key={index} />
            });
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "chat-container" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "chat-messages", onScroll: this.ScrollHandler, ref: 'chat_messages' }, templMessages),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'input-field' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-group-addon input-chat-addon" }, userName + ":"),
                    inputHTML)));
    };
    return Chat;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
function mapStateToProps(state) {
    return {
        user: state.user,
        chat: state.chat,
    };
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(
//(state: ApplicationState) => state.chat, 
mapStateToProps, __WEBPACK_IMPORTED_MODULE_4__store_Chat__["a" /* actionCreators */])(Chat));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonHandler = function (switchDigit) {
            switch (switchDigit) {
                case 0:
                    _this.socket.send(JSON.stringify({ state: 'add_user',
                        name: _this.playerNumber, steamId: _this.playerNumber }));
                    break;
                case 1:
                    _this.socket.send(JSON.stringify({ state: 'start_phase1' }));
                    break;
                case 2:
                    _this.socket.send(JSON.stringify({ state: 'start_phase2' }));
                    break;
                case 3:
                    _this.playerNumber = 0;
                    _this.socket.send(JSON.stringify({ state: 'restart' }));
                    break;
            }
        };
        _this.playerNumber = 0;
        return _this;
    }
    Home.prototype.componentDidMount = function () {
        this.socket = new WebSocket("ws://localhost:60217/b4w_react");
        this.socket.onclose = function (event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            }
            else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
        this.socket.onerror = function (error) {
            console.log("Ошибка:");
            console.log(error);
        };
    };
    Home.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: function () { return _this.buttonHandler(0); } }, "Add"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: function () { return _this.buttonHandler(1); } }, "Phase1"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: function () { return _this.buttonHandler(2); } }, "Phase2"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: function () { return _this.buttonHandler(3); } }, "Restart"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, dota2!"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { border: 'red solid 5px', width: '810px', height: '610px' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("iframe", { src: "B4W/MySecondProject.html", width: '800px', height: '600px', style: { border: 'none' } })));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, FAQ!"));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, world!"));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_User__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_Lk__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Modal__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Lk = (function (_super) {
    __extends(Lk, _super);
    function Lk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lk.prototype.componentDidMount = function () {
        var props = this.props;
        var userId = props.match.params.userId;
        var owner = false;
        if (!userId) {
            userId = props.user.userInfo.steamid;
            owner = true;
        }
        props.setOwner(owner);
        props.getLkInfo(userId);
        // this.getUserInfo().then(data => {
        //     if(data){
        //         //doing something
        //         return;
        //     } else if(data === null){
        //         this.props.showModal('Some trouble when getting data from server\nSorry, try again later', true);
        //     } else if(data === undefined){
        //         this.props.showModal('Some trouble with connection with server\nSorry, try again later', true);
        //     }
        //     //  <Redirect to={'/'} />
        //     this.props.location.pathname = '/';
        //     // location.href = '/';
        // });
    };
    Lk.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello from lk!"));
    };
    return Lk;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
function mapStateToProps(state) {
    return {
        user: state.user,
        lk: state.lk,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: function () { return dispatch(__WEBPACK_IMPORTED_MODULE_2__store_User__["a" /* actionCreators */].getUserInfo()); },
        closeModal: function () { return dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Modal__["a" /* actionCreators */].closeModal()); },
        showModal: function (text, canClose) { return dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Modal__["a" /* actionCreators */].showModal(text, canClose)); },
        getLkInfo: function (userId) { return dispatch(__WEBPACK_IMPORTED_MODULE_3__store_Lk__["a" /* actionCreators */].getLkInfo(userId)); },
        setOwner: function (owner) { return dispatch(__WEBPACK_IMPORTED_MODULE_3__store_Lk__["a" /* actionCreators */].setOwner(owner)); },
    };
}
;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Lk));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'login-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: '/api/auth/signin' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "http://community.edgecast.steamstatic.com/public/images/signinthroughsteam/sits_01.png", title: "Click to login" })));
    };
    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Login);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Logout = (function (_super) {
    __extends(Logout, _super);
    function Logout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logout.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "logout-userName navbar-brand", href: '/api/auth/signout', onClick: function () { return _this.props.logoutHandler(); } }, this.props.userName);
    };
    return Logout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Logout);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        var _a = this.props.message, steamId = _a.steamId, userName = _a.userName, message = _a.message, date = _a.date;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "message" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { display: "none" } }, steamId),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { display: "none" } }, date.toString()),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'message-content' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", null,
                    userName,
                    ": "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, message)));
    };
    return Message;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Message);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NavMenu = (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'main-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar navbar-inverse navbar-fixed-top' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar-header' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: 'button', className: 'navbar-toggle collapsed', "data-toggle": 'collapse', "data-target": '#menu-navbar' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'sr-only' }, "Toggle navigation"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' })),
                    this.props.LoginOrLogout,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: 'navbar-brand', to: '/' }, "Rulette")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'clearfix' })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar-link navbar-collapse collapse', id: 'menu-navbar' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: 'nav navbar-nav' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { exact: true, to: '/', activeClassName: 'active' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-home' }),
                            " Home")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { to: '/dota2', activeClassName: 'active' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-play' }),
                            " dota2")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { to: '/csgo', activeClassName: 'active' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-play' }),
                            " csgo")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { exact: true, to: '/rules', activeClassName: 'active' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-info-sign' }),
                            " rules")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { exact: true, to: '/faq', activeClassName: 'active' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-question-sign' }),
                            " faq")))));
    };
    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, rules!"));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Modal__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Warning = (function (_super) {
    __extends(Warning, _super);
    function Warning() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearDOM = function () {
            var elemBackground = document.getElementById('pop-up-container');
            var elemModal = document.getElementById('pop-up-warning');
            if (elemBackground && elemModal) {
                elemBackground.className = elemBackground.className.split(' in')[0];
                setTimeout(function () { return elemBackground.setAttribute('style', 'display: none'); }, 500);
                setTimeout(function () { return elemModal.className = elemModal.className.split(' in')[0]; }, 700);
            }
        };
        _this.AddIn = function () {
            var elemBackground = document.getElementById('pop-up-container');
            var elemModal = document.getElementById('pop-up-warning');
            if (elemBackground && elemModal) {
                elemBackground.setAttribute('style', 'display: block');
                elemBackground.className += ' in';
                setTimeout(function () { elemModal.className += ' in'; }, 200);
            }
        };
        _this.button = function () {
            var button = _this.props.canClose;
            var nameOfClass = 'btn btn-primary pop-up-button ', onButtonDo = undefined;
            nameOfClass += button == true ? 'active' : 'disabled';
            if (button == true) {
                onButtonDo = function () {
                    _this.clearDOM();
                    setTimeout(_this.props.closeModal, 500);
                };
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: nameOfClass, onClick: onButtonDo }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C");
        };
        //    onClick={this.props.canClose ? this.props.closeModal : undefined}  
        _this.toRender = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-backdrop fade", id: 'pop-up-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal fade', tabIndex: -1, id: "pop-up-warning", role: "dialog", "aria-hidden": "true", style: { display: 'block' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-dialog modal-sm' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-content' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-header" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Warning")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-body" }, _this.props.modalText),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-footer" }, _this.button())))));
        };
        return _this;
    }
    Warning.prototype.render = function () {
        var toRender = null;
        if (this.props.show) {
            toRender = this.toRender();
            setTimeout(this.AddIn, 500);
        }
        return toRender;
    };
    return Warning;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.modal; }, __WEBPACK_IMPORTED_MODULE_2__store_Modal__["a" /* actionCreators */])(Warning));


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_NavMenu__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Logout__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_User__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Modal__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // check auth of user
        _this.userIsAuthPromise = function () {
            return fetch("/api/get/UserIsAuth", {
                method: 'GET',
                credentials: "same-origin"
            }).then(function (response) {
                if (response.status !== 200)
                    return undefined;
                return response.json();
            }).then(function (data) {
                return data;
            }).catch(function (err) {
                console.log('Error :-S in user', err);
            });
        };
        return _this;
    }
    // if user login, get his data from steam
    // and render wait component
    Layout.prototype.componentDidMount = function () {
        var _this = this;
        var props = this.props;
        this.userIsAuthPromise().then(function (data) {
            if (data === true) {
                props.getUserInfo();
                // props.showModal('Please wait getting data from server', false);
            }
            else if (data === false) {
                _this.TroubleLogin('Trouble when logining from Steam\nPlease retry login');
            }
            else if (data === undefined) {
                _this.TroubleLogin('Trouble with connection\nPlease retry login');
            }
            else {
                _this.LoginOrLogout = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Login__["a" /* default */], null);
                _this.forceUpdate();
            }
        }).catch(function (err) {
            console.log('Error :-S in layout-componentDidMount', err);
        });
    };
    // when data is gotten, render his user name
    // and logout component
    Layout.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.user.getServerData != this.props.user.getServerData
            && nextProps.user.getServerData == true) {
            if (nextProps.user.userInfo != null) {
                this.LoginOrLogout = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_Logout__["a" /* default */], { userName: nextProps.user.userInfo.personaname, logoutHandler: this.props.deleteUserInfo });
                // this.props.closeModal();
            }
            else {
                this.TroubleLogin('Trouble when getting data from Steam\nPlease retry login');
            }
        }
    };
    Layout.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'container-fluid' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row contant-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row col-sm-3 container-navmenu-chat' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'conteiner-navmenu col-sm-12 navmenu-col-sm-12' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_NavMenu__["a" /* NavMenu */], { LoginOrLogout: this.LoginOrLogout })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-12 container-chat' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: 'react-chat', style: { height: '100%', width: '100%' } }, "loading... "))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-9 container-content' }, this.props.children)));
    };
    Layout.prototype.TroubleLogin = function (str) {
        this.props.deleteUserInfo();
        this.props.showModal(str, true);
        this.LoginOrLogout = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Login__["a" /* default */], null);
    };
    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
function mapStateToProps(state) {
    return {
        user: state.user,
        routing: state.routing,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: function () { return dispatch(__WEBPACK_IMPORTED_MODULE_5__store_User__["a" /* actionCreators */].getUserInfo()); },
        deleteUserInfo: function () { return dispatch(__WEBPACK_IMPORTED_MODULE_5__store_User__["a" /* actionCreators */].deleteUserInfo()); },
        closeModal: function () { return dispatch(__WEBPACK_IMPORTED_MODULE_6__store_Modal__["a" /* actionCreators */].closeModal()); },
        showModal: function (text, canClose) { return dispatch(__WEBPACK_IMPORTED_MODULE_6__store_Modal__["a" /* actionCreators */].showModal(text, canClose)); },
    };
}
;
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(
//(state: ApplicationState) => state.user,     // Selects which state properties are merged into the component's props
//UserState.actionCreators                     // Selects which action creators are merged into the component's props
mapStateToProps, mapDispatchToProps)(Layout));


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* unused harmony export reducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    getLkInfo: function (userId) { return function (dispatch, getState) {
        var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])("/api/get/GetUserState?userIdParam=" + userId, {
            method: 'GET',
            credentials: "same-origin"
        }).then(function (response) {
            if (response.status !== 200)
                return undefined;
            return response.json();
        }).then(function (data) {
            dispatch({ type: 'SET_LK_INFO', bets: data.bets, items: data.items });
        }).catch(function (err) {
            console.log('Error :-S in lk', err);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'GET_LK_INFO' });
    }; },
    setOwner: function (owner) { return ({
        type: 'SET_LK_OWNER',
        owner: owner,
    }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { inventory: null, bets: null, getServerData: null, owner: null };
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_LK_INFO':
            return {
                inventory: state.inventory,
                bets: state.bets,
                owner: state.owner,
                getServerData: false,
            };
        case 'SET_LK_INFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                inventory: action.items ? action.items : null,
                bets: action.bets ? action.bets : null,
                owner: state.owner,
                getServerData: true,
            };
        case 'SET_LK_OWNER':
            return {
                inventory: state.inventory,
                bets: state.bets,
                owner: action.owner,
                getServerData: state.getServerData,
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chat__ = __webpack_require__(7);



// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    modal: __WEBPACK_IMPORTED_MODULE_0__Modal__["b" /* reducer */],
    user: __WEBPACK_IMPORTED_MODULE_1__User__["b" /* reducer */],
    chat: __WEBPACK_IMPORTED_MODULE_2__Chat__["b" /* reducer */],
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(138);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(143);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(70);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGQ3ZGE2YTk0ZWQ3ZGFmODU4MWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL01vZGFsLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9DaGF0LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NTR08udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NoYXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0RvdGEyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9GQVEudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xrLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9nb3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9SdWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lci9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9May50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDNkJBO0FBQUEsbUJBQW1CO0FBQ25CLHVHQUF1RztBQUN2RyxvR0FBb0c7QUFFN0YsSUFBTSxjQUFjLEdBQUc7SUFDMUIsU0FBUyxFQUFFLFVBQUMsSUFBVyxFQUFFLFFBQWdCLElBQUssUUFBa0I7UUFDNUQsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixTQUFTLEVBQUUsSUFBSTtRQUNmLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLEdBSjZDLENBSTdDO0lBQ0QsVUFBVSxFQUFFLGNBQU0sUUFBa0I7UUFDaEMsSUFBSSxFQUFFLG9CQUFvQjtLQUM3QixHQUZpQixDQUVqQjtDQUNKLENBQUM7QUFFRixtQkFBbUI7QUFDbkIsNkhBQTZIO0FBQzdILElBQU0sYUFBYSxHQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUUvRSxJQUFNLE9BQU8sR0FBd0IsVUFBQyxLQUFpQixFQUFFLE1BQW1CO0lBQy9FLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssbUJBQW1CO1lBQ3BCLE1BQU0sQ0FBQztnQkFDSCxJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7Z0JBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTthQUM1QixDQUFDO1FBQ04sS0FBSyxvQkFBb0I7WUFDckIsTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2FBQzNCLENBQUM7UUFDTjtZQUNJLDRHQUE0RztZQUM1RyxJQUFNLGVBQWUsR0FBVSxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVELHNHQUFzRztJQUN0RyxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUM7QUFDbEMsQ0FBQyxDQUFDOzs7Ozs7O0FDdEVGLCtDOzs7Ozs7Ozs7OztBQ0E2QztBQXVDN0MsbUJBQW1CO0FBQ25CLHVHQUF1RztBQUN2RyxvR0FBb0c7QUFFN0YsSUFBTSxjQUFjLEdBQUc7SUFDMUIsV0FBVyxFQUFFLGNBQTZELGlCQUFDLFFBQVEsRUFBRSxRQUFRO1FBQ3pGLHVGQUF1RjtRQUN2RixJQUFJLFNBQVMsR0FBRyx5RUFBSyxDQUFDLHNCQUFzQixFQUFFO1lBQzFDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsV0FBVyxFQUFFLGFBQWE7U0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBUTtZQUNaLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDUixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFHO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVQLDJFQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyw2REFBNkQ7UUFDakYsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxFQWhCeUUsQ0FnQnpFO0lBQ0QsY0FBYyxFQUFFLGNBQTRDLGlCQUFDLFFBQVEsRUFBRSxRQUFRO1FBQzNFLElBQUksU0FBUyxHQUFHLHlFQUFLLENBQUMsbUJBQW1CLEVBQUU7WUFDbkMsTUFBTSxFQUFFLEtBQUs7WUFDYixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO1lBQ1osUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDUCwyRUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFWMkQsQ0FVM0Q7Q0FDSixDQUFDO0FBRUYsbUJBQW1CO0FBQ25CLDZIQUE2SDtBQUM3SCxJQUFNLGFBQWEsR0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO0FBRWxFLElBQU0sT0FBTyxHQUF1QixVQUFDLEtBQWdCLEVBQUUsTUFBbUI7SUFDN0UsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxlQUFlO1lBQ2hCLE1BQU0sQ0FBQztnQkFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLGFBQWEsRUFBRSxLQUFLO2FBQ3ZCLENBQUM7UUFDTixLQUFLLGVBQWU7WUFDaEIsaUdBQWlHO1lBQ2pHLGlDQUFpQztZQUNqQyxNQUFNLENBQUM7Z0JBQ0gsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJO2dCQUNsRCxhQUFhLEVBQUUsSUFBSTthQUN0QixDQUFDO1FBQ04sS0FBSyxrQkFBa0I7WUFDbkIsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN6QjtZQUNJLDRHQUE0RztZQUM1RyxJQUFNLGVBQWUsR0FBVSxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVELHNHQUFzRztJQUN0RyxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUM7QUFDbEMsQ0FBQyxDQUFDOzs7Ozs7O0FDdEdGLCtDOzs7Ozs7OztBQzZDQTtBQUFBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBRW5CLElBQUksTUFBaUIsQ0FBQztBQUV0QixtQkFBbUI7QUFDbkIsdUdBQXVHO0FBQ3ZHLG9HQUFvRztBQUc3RixJQUFNLGNBQWMsR0FBRztJQUMxQixtQkFBbUIsRUFBRSxjQUFvRSxpQkFBQyxRQUFRLEVBQUUsUUFBUTtRQUN4RyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBSztZQUNyQixJQUFJLENBQUM7Z0JBQ0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQU0sSUFBSSxHQUFHO29CQUNULE9BQU8sRUFBSyxLQUFLLENBQUMsS0FBSztvQkFDdkIsUUFBUSxFQUFJLEtBQUssQ0FBQyxLQUFLO29CQUN2QixPQUFPLEVBQUssS0FBSyxDQUFDLEtBQUs7b0JBQ3ZCLElBQUksRUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUN6QixDQUFDO2dCQUNiLFFBQVEsQ0FBQztvQkFDTCxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsT0FBTyxFQUFFLElBQUk7aUJBQ2hCLENBQUM7WUFDTixDQUFDO1lBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBQyxLQUFLO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLEtBQUs7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1lBQ3hFLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLEtBQUs7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztJQUNOLENBQUMsRUFsQ3dGLENBa0N4RjtJQUNELFdBQVcsRUFBRSxVQUFDLE9BQWUsRUFBRSxRQUFnQixFQUFFLE9BQWUsSUFBd0MsaUJBQUMsUUFBUSxFQUFFLFFBQVE7UUFDdkgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsT0FBTyxXQUFFLFFBQVEsWUFBRSxPQUFPLFdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQyxFQUZ1RyxDQUV2RztJQUNELFdBQVcsRUFBRSxjQUFNLFFBQW1CLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUEzQyxDQUEyQztJQUM5RCxpQkFBaUIsRUFBRSxjQUFNLFFBQXlCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQXhELENBQXdEO0NBQ3BGLENBQUM7QUFFRixtQkFBbUI7QUFDbkIsNkhBQTZIO0FBQzdILElBQU0sYUFBYSxHQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUVoRixJQUFNLE9BQU8sR0FBdUIsVUFBQyxLQUFnQixFQUFFLE1BQW1CO0lBQzdFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssYUFBYTtZQUNkLElBQUksSUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDaEIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLEVBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFBQyxJQUFJLEVBQUM7b0JBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUM7Z0JBQ0gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7YUFDckMsQ0FBQztRQUNOLEtBQUssY0FBYztZQUNmLE1BQU0sQ0FBQztnQkFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNqQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7YUFDckMsQ0FBQztRQUNOLEtBQUsscUJBQXFCO1lBQ3RCLE1BQU0sQ0FBQztnQkFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWE7YUFDdEMsQ0FBQztRQUNOO1lBQ0ksNEdBQTRHO1lBQzVHLElBQU0sZUFBZSxHQUFVLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0dBQXNHO0lBQ3RHLG1EQUFtRDtJQUNuRCxNQUFNLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQztBQUNsQyxDQUFDLENBQUM7Ozs7Ozs7QUM5SUYsK0M7Ozs7Ozs7Ozs7Ozs7OztBQ0EwSjtBQUMxSDtBQUNxQztBQUVoQjtBQUd2Qyx3QkFBeUIsT0FBZ0IsRUFBRSxZQUErQjtJQUNwRixrR0FBa0c7SUFDbEcsSUFBTSxlQUFlLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyxNQUFhLENBQUM7SUFDN0UsMENBQTBDO0lBQzFDLElBQU0saUJBQWlCLEdBQUcsZUFBZSxJQUFJLGVBQWUsQ0FBQyxpQkFBK0MsQ0FBQztJQUM3RyxJQUFNLHlCQUF5QixHQUFHLHFFQUFPLENBQ3JDLDZFQUFlLENBQUMsbURBQUssRUFBRSwyRkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNqRCxpQkFBaUIsR0FBRyxpQkFBaUIsRUFBRSxHQUFHLFVBQUksSUFBa0MsSUFBSyxXQUFJLEVBQUosQ0FBSSxDQUM1RixDQUFDLGtEQUFXLENBQUMsQ0FBQztJQUVmLG1FQUFtRTtJQUNuRSxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyx3REFBUSxDQUFDLENBQUM7SUFDL0MsSUFBTSxLQUFLLEdBQUcseUJBQXlCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBNEIsQ0FBQztJQUU5RixxREFBcUQ7SUFDckQsRUFBRSxDQUFDLENBQUMsS0FBVSxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFNLGVBQWUsR0FBRyxPQUFPLENBQXFCLFNBQVMsQ0FBQyxDQUFDO1lBQy9ELEtBQUssQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsMEJBQTBCLFdBQThCO0lBQ3BELE1BQU0sQ0FBQyw2RUFBZSxDQUFtQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUVBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzhCO0FBQ1U7QUFDRDtBQUNIO0FBQ0U7QUFDRjtBQUNFO0FBQ0o7QUFDUTtBQUNWO0FBQ0k7QUFHOUIsSUFBTSxNQUFNLEdBQUcscURBQUMsa0VBQU07SUFDekIscURBQUMsdURBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUcsaUVBQUksR0FBSztJQUMzQyxxREFBQyx1REFBSyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFHLGtFQUFLLEdBQUs7SUFDM0MscURBQUMsdURBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRyxpRUFBSSxHQUFLO0lBQ3pDLHFEQUFDLHVEQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFHLGtFQUFLLEdBQUs7SUFDakQscURBQUMsdURBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUcsZ0VBQUcsR0FBSztJQUM3QyxxREFBQyx1REFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBRywrREFBRSxHQUFLLENBQy9DLENBQUM7QUFFSCxJQUFNLEtBQUssR0FBRyxvRUFBTyxDQUFDO0FBRXRCLElBQU0sSUFBSSxHQUFHLGtFQUFJLENBQUM7Ozs7Ozs7QUN4QnpCLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNRO0FBRVc7QUFDRjtBQUNIO0FBQ0M7QUFDMkI7QUFDdkM7QUFDWTtBQUU5QywrREFBZSxnR0FBb0IsQ0FBQyxnQkFBTTtJQUN0QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUM3Qyw4RUFBOEU7UUFDOUUsb0NBQW9DO1FBQ3BDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUNqRyxJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFNLEtBQUssR0FBRyx1RkFBYyxDQUFDLG1GQUFtQixFQUFFLENBQUMsQ0FBQztRQUNwRCxLQUFLLENBQUMsUUFBUSxDQUFDLGtGQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsZ0ZBQWdGO1FBQ2hGLHFEQUFxRDtRQUNyRCxJQUFNLGFBQWEsR0FBUSxFQUFFLENBQUM7UUFDOUIsSUFBTSxHQUFHLEdBQUcsQ0FDUixxREFBQyxxREFBUSxJQUFDLEtBQUssRUFBRyxLQUFLO1lBQ25CLHFEQUFDLDhEQUFZLElBQUMsUUFBUSxFQUFHLFFBQVEsRUFBRyxPQUFPLEVBQUcsYUFBYSxFQUFHLFFBQVEsRUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRyxRQUFRLEVBQUcsdURBQU0sR0FBSyxDQUMvRyxDQUNkLENBQUM7UUFDRix1RkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLG9GQUFvRjtRQUNwRixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELGlFQUFpRTtRQUNqRSxxR0FBcUc7UUFDckcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsT0FBTyxDQUFDO2dCQUNKLElBQUksRUFBRSx1RkFBYyxDQUFDLEdBQUcsQ0FBQztnQkFDekIsT0FBTyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO2FBQ25ELENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLDJEQUEyRDtJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDNEI7QUFHL0I7SUFBa0Msd0JBQTRDO0lBQTlFOztJQU1BLENBQUM7SUFMVSxxQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsaUZBQXNCLENBQ3BCLENBQUM7SUFDWCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0FOaUMsZ0RBQWUsR0FNaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q4QjtBQUNPO0FBRUE7QUFFTjtBQUNXO0FBZTNDO0lBQW1CLHdCQUE4QjtJQUFqRDtRQUFBLHFFQTBGQztRQTlFRyxvQkFBYyxHQUFHO1lBQ2IsRUFBRSxFQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQU0sSUFBSSxHQUFHLHNEQUFvQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUV2QyxDQUFDO1FBQ0wsQ0FBQztRQUdELGdCQUFVLEdBQUcsVUFBQyxHQUEwQztZQUNwRCxFQUFFLEVBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixFQUFFLEVBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQ3BFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFxQixDQUFDO2dCQUN6RSxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6QixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUM7UUF5Q0QsK0JBQStCO1FBQy9CLG1CQUFhLEdBQUcsVUFBQyxLQUFVO1lBQ3ZCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkIsRUFBRSxFQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLHVEQUF1RDtnQkFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDeEUsRUFBRSxFQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQztvQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDeEUsRUFBRSxFQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQztvQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQzs7SUFDTCxDQUFDO0lBekZHLGdDQUFpQixHQUFqQjtRQUNJLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDakMsYUFBYTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsaUNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUF1Qk0scUJBQU0sR0FBYjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN4QixFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUUzQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxnQkFBZ0IsQ0FBQztRQUNyQixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUMzQixFQUFFLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNWLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGdCQUFnQixHQUFNLElBQUksQ0FBQztZQUMzQixpQkFBaUIsR0FBSyxXQUFXLENBQUM7UUFDdEMsQ0FBQztRQUVELElBQUksU0FBUyxHQUFHLGdFQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLHlCQUF5QixHQUFHLGlCQUFpQixFQUFFLEVBQUUsRUFBQyxjQUFjLEVBQzFHLFdBQVcsRUFBQyxtQkFBbUIsRUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDO1FBRTdHLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDM0MsVUFBQyxPQUFPLEVBQUUsS0FBSztnQkFDZix1RkFBdUY7Z0JBQ3ZGLE1BQU0sQ0FBQyxxREFBQyx5REFBTyxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBSTtnQkFDaEQsOEdBQThHO1lBQ2xILENBQUMsQ0FDSixDQUFDO1FBRUYsTUFBTSxDQUFDLDhEQUFLLFNBQVMsRUFBQyxnQkFBZ0I7WUFDbEMsOERBQUssU0FBUyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUMsZUFBZSxJQUMzRSxhQUFhLENBQ1o7WUFDTiw4REFBSyxTQUFTLEVBQUMsYUFBYTtnQkFDeEIsOERBQUssU0FBUyxFQUFDLGFBQWE7b0JBQ3hCLDhEQUFLLFNBQVMsRUFBQyxvQ0FBb0MsSUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFPO29CQUN4RSxTQUFTLENBQ1QsQ0FDSixDQUNKLENBQUM7SUFDWCxDQUFDO0lBaUJMLFdBQUM7QUFBRCxDQUFDLENBMUZrQixnREFBZSxHQTBGakM7QUFFRCx5QkFBMEIsS0FBVTtJQUNoQyxNQUFNLENBQUM7UUFDSCxJQUFJLEVBQUksS0FBSyxDQUFDLElBQTRCO1FBQzFDLElBQUksRUFBSSxLQUFLLENBQUMsSUFBNEI7S0FDOUIsQ0FBQztBQUNyQixDQUFDO0FBRUQseURBQWUsMkVBQU87QUFDbEIsMkNBQTJDO0FBQzNDLGVBQWUsRUFDZixtRUFBd0IsQ0FDMUIsQ0FBQyxJQUFJLENBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhPO0FBRy9CO0lBQWtDLHdCQUE0QztJQUE5RTtRQUFBLHFFQWlEQztRQXBCRyxtQkFBYSxHQUFHLFVBQUMsV0FBa0I7WUFDL0IsTUFBTSxFQUFDLFdBQVcsQ0FBQyxFQUFDO2dCQUNoQixLQUFLLENBQUM7b0JBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxVQUFVO3dCQUNsRCxJQUFJLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsS0FBSyxDQUFDO2dCQUNWLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUQsS0FBSyxDQUFDO2dCQUNWLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUQsS0FBSyxDQUFDO2dCQUNWLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELEtBQUssQ0FBQztZQUNkLENBQUM7UUFDTCxDQUFDO1FBRUQsa0JBQVksR0FBRyxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFoREcsZ0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsS0FBSztZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7WUFDeEUsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLEtBQUs7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTSxxQkFBTSxHQUFiO1FBQUEsaUJBV0M7UUFWRyxNQUFNLENBQUM7WUFDSCxpRUFBUSxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixVQUFjO1lBQzFELGlFQUFRLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLGFBQWlCO1lBQzdELGlFQUFRLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLGFBQWlCO1lBQzdELGlFQUFRLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLGNBQWtCO1lBQzlELGlGQUFzQjtZQUN0Qiw4REFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBRTtnQkFDbEUsaUVBQVEsR0FBRyxFQUFDLDBCQUEwQixFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQVcsQ0FDdEcsQ0FDSixDQUFDO0lBQ1gsQ0FBQztJQXFCTCxXQUFDO0FBQUQsQ0FBQyxDQWpEaUMsZ0RBQWUsR0FpRGhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDhCO0FBRy9CO0lBQWtDLHdCQUE0QztJQUE5RTs7SUFNQSxDQUFDO0lBTFUscUJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQztZQUNILCtFQUFvQixDQUNsQixDQUFDO0lBQ1gsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBTmlDLGdEQUFlLEdBTWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUOEI7QUFHL0I7SUFBa0Msd0JBQTRDO0lBQTlFOztJQU1BLENBQUM7SUFMVSxxQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsaUZBQXNCLENBQ3BCLENBQUM7SUFDWCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0FOaUMsZ0RBQWUsR0FNaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDhCO0FBR087QUFDSztBQUNKO0FBQ007QUFzQjdDO0lBQWlCLHNCQUE4QjtJQUEvQzs7SUFnQ0EsQ0FBQztJQS9CRyw4QkFBaUIsR0FBakI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBSyxLQUFLLENBQUM7UUFDcEIsRUFBRSxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxPQUFPLENBQUM7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLG9DQUFvQztRQUNwQyxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixnQ0FBZ0M7UUFDaEMsNEdBQTRHO1FBQzVHLHFDQUFxQztRQUNyQywwR0FBMEc7UUFDMUcsUUFBUTtRQUVSLGdDQUFnQztRQUNoQywwQ0FBMEM7UUFDMUMsOEJBQThCO1FBQzlCLE1BQU07SUFFVixDQUFDO0lBQ00sbUJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQztZQUNILGtGQUF1QixDQUNyQixDQUFDO0lBQ1gsQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLENBaENnQixnREFBZSxHQWdDL0I7QUFFRCx5QkFBMEIsS0FBVTtJQUNoQyxNQUFNLENBQUM7UUFDSCxJQUFJLEVBQUksS0FBSyxDQUFDLElBQTRCO1FBQzFDLEVBQUUsRUFBTSxLQUFLLENBQUMsRUFBd0I7S0FDMUIsQ0FBQztBQUNyQixDQUFDO0FBRUQsNEJBQTRCLFFBQWE7SUFDckMsTUFBTSxDQUFDO1FBQ0gsV0FBVyxFQUFLLGNBQU0sZUFBUSxDQUFDLG1FQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQWhELENBQWdEO1FBQ3RFLFVBQVUsRUFBTSxjQUFNLGVBQVEsQ0FBQyxvRUFBeUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFoRCxDQUFnRDtRQUN0RSxTQUFTLEVBQU8sVUFBQyxJQUFZLEVBQUUsUUFBaUIsSUFBSyxlQUFRLENBQUMsb0VBQXlCLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUE3RCxDQUE2RDtRQUNsSCxTQUFTLEVBQU8sVUFBQyxNQUFjLElBQUssZUFBUSxDQUFDLGlFQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFsRCxDQUFrRDtRQUN0RixRQUFRLEVBQVEsVUFBQyxLQUFjLElBQUssZUFBUSxDQUFDLGlFQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFoRCxDQUFnRDtLQUNyRSxDQUFDO0FBQ3hCLENBQUM7QUFBQSxDQUFDO0FBRUYseURBQWUsMkVBQU8sQ0FDbEIsZUFBZSxFQUNmLGtCQUFrQixDQUNyQixDQUFDLEVBQUUsQ0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGWTtBQUkvQjtJQUFtQyx5QkFBdUI7SUFBMUQ7O0lBU0EsQ0FBQztJQVJVLHNCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsOERBQUssU0FBUyxFQUFDLGlCQUFpQjtZQUNuQyw0REFBRyxJQUFJLEVBQUMsa0JBQWtCO2dCQUN0Qiw4REFBSyxHQUFHLEVBQUMsd0ZBQXdGLEVBQzdGLEtBQUssRUFBQyxnQkFBZ0IsR0FBRSxDQUM1QixDQUNGO0lBQ1YsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBVGtDLGdEQUFlLEdBU2pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEI7QUFHL0I7SUFBb0MsMEJBQXlEO0lBQTdGOztJQVFBLENBQUM7SUFQVSx1QkFBTSxHQUFiO1FBQUEsaUJBTUM7UUFMRyxNQUFNLENBQUMsNERBQUcsU0FBUyxFQUFDLDhCQUE4QixFQUM5QyxJQUFJLEVBQUMsbUJBQW1CLEVBQ3hCLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQTFCLENBQTBCLElBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNwQixDQUFDO0lBQ1QsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLENBUm1DLGdEQUFlLEdBUWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEI7QUFTL0I7SUFBcUMsMkJBQTJCO0lBQWhFOztJQVlBLENBQUM7SUFYVSx3QkFBTSxHQUFiO1FBQ1UsMkJBQXVELEVBQXRELG9CQUFPLEVBQUUsc0JBQVEsRUFBRSxvQkFBTyxFQUFFLGNBQUksQ0FBdUI7UUFFOUQsTUFBTSxDQUFDLDhEQUFLLFNBQVMsRUFBQyxTQUFTO1lBQzNCLCtEQUFNLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsSUFBRyxPQUFPLENBQVE7WUFDL0MsK0RBQU0sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBUTtZQUN2RCw4REFBSyxTQUFTLEVBQUMsaUJBQWlCO2dCQUM1QjtvQkFBSSxRQUFRO3lCQUFPO2dCQUFBLG1FQUFPLE9BQU8sQ0FBUSxDQUN2QyxDQUNKO0lBQ1YsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBWm9DLGdEQUFlLEdBWW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjhCO0FBQ3VDO0FBRXRFO0lBQTZCLDJCQUFrRDtJQUEvRTs7SUFnREEsQ0FBQztJQS9DVSx3QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLDhEQUFLLFNBQVMsRUFBQyxVQUFVO1lBQzVCLDhEQUFLLFNBQVMsRUFBQyx3Q0FBd0M7Z0JBQ25ELDhEQUFLLFNBQVMsRUFBQyxlQUFlO29CQUMxQixpRUFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyx5QkFBeUIsaUJBQWEsVUFBVSxpQkFBYSxjQUFjO3dCQUN2RywrREFBTSxTQUFTLEVBQUMsU0FBUyx3QkFBeUI7d0JBQ2xELCtEQUFNLFNBQVMsRUFBQyxVQUFVLEdBQVE7d0JBQ2xDLCtEQUFNLFNBQVMsRUFBQyxVQUFVLEdBQVE7d0JBQ2xDLCtEQUFNLFNBQVMsRUFBQyxVQUFVLEdBQVE7d0JBQ2xDLCtEQUFNLFNBQVMsRUFBQyxVQUFVLEdBQVEsQ0FDN0I7b0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO29CQUMxQixxREFBQyxzREFBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFFLEdBQUcsY0FBZ0IsQ0FDcEQ7Z0JBQ04sOERBQUssU0FBUyxFQUFDLFVBQVUsR0FBTyxDQUM5QjtZQUNOLDhEQUFLLFNBQVMsRUFBQyxzQ0FBc0MsRUFBQyxFQUFFLEVBQUMsYUFBYTtnQkFDbEUsNkRBQUksU0FBUyxFQUFDLGdCQUFnQjtvQkFDMUI7d0JBQ0kscURBQUMseURBQU8sSUFBQyxLQUFLLFFBQUMsRUFBRSxFQUFHLEdBQUcsRUFBRyxlQUFlLEVBQUMsUUFBUTs0QkFDOUMsK0RBQU0sU0FBUyxFQUFDLDBCQUEwQixHQUFRO29DQUM1QyxDQUNUO29CQUNMO3dCQUNJLHFEQUFDLHlEQUFPLElBQUMsRUFBRSxFQUFHLFFBQVEsRUFBRyxlQUFlLEVBQUMsUUFBUTs0QkFDN0MsK0RBQU0sU0FBUyxFQUFDLDBCQUEwQixHQUFRO3FDQUM1QyxDQUNUO29CQUNMO3dCQUNJLHFEQUFDLHlEQUFPLElBQUMsRUFBRSxFQUFHLE9BQU8sRUFBRyxlQUFlLEVBQUMsUUFBUTs0QkFDNUMsK0RBQU0sU0FBUyxFQUFDLDBCQUEwQixHQUFRO29DQUM1QyxDQUNUO29CQUNMO3dCQUNJLHFEQUFDLHlEQUFPLElBQUMsS0FBSyxRQUFDLEVBQUUsRUFBRyxRQUFRLEVBQUcsZUFBZSxFQUFDLFFBQVE7NEJBQ25ELCtEQUFNLFNBQVMsRUFBQywrQkFBK0IsR0FBUTtxQ0FDakQsQ0FDVDtvQkFDTDt3QkFDSSxxREFBQyx5REFBTyxJQUFDLEtBQUssUUFBQyxFQUFFLEVBQUcsTUFBTSxFQUFHLGVBQWUsRUFBQyxRQUFROzRCQUNqRCwrREFBTSxTQUFTLEVBQUMsbUNBQW1DLEdBQVE7bUNBQ3JELENBQ1QsQ0FDSixDQUNILENBQ0osQ0FBQztJQUNYLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQWhENEIsZ0RBQWUsR0FnRDNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDhCO0FBRy9CO0lBQWtDLHdCQUE0QztJQUE5RTs7SUFNQSxDQUFDO0lBTFUscUJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQztZQUNILGlGQUFzQixDQUNwQixDQUFDO0lBQ1gsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBTmlDLGdEQUFlLEdBTWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUOEI7QUFFTztBQUVPO0FBTzdDO0lBQXNCLDJCQUErQjtJQUFyRDtRQUFBLHFFQWdFQztRQXREVyxjQUFRLEdBQUc7WUFDZixJQUFNLGNBQWMsR0FBTSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdEUsSUFBTSxTQUFTLEdBQVcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BFLEVBQUUsRUFBQyxjQUFjLElBQUksU0FBUyxDQUFDLEVBQUM7Z0JBQzVCLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLFVBQVUsQ0FBQyxjQUFNLHFCQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFBckQsQ0FBcUQsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDN0UsVUFBVSxDQUFDLGNBQU0sZ0JBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXpELENBQXlELEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckYsQ0FBQztRQUNMLENBQUM7UUFDTyxXQUFLLEdBQUc7WUFDWixJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVELEVBQUUsRUFBQyxjQUFjLElBQUksU0FBUyxDQUFDLEVBQUM7Z0JBQzVCLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3ZELGNBQWMsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO2dCQUNsQyxVQUFVLENBQUMsY0FBTyxTQUFTLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNMLENBQUM7UUFFTyxZQUFNLEdBQUc7WUFDYixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFJLFdBQVcsR0FBRyxnQ0FBZ0MsRUFDOUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUMzQixXQUFXLElBQUksTUFBTSxJQUFJLElBQUksR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3RELEVBQUUsRUFBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxHQUFHO29CQUNULEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEIsVUFBVSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxpRUFBUSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLG1FQUVqRDtRQUNiLENBQUM7UUFDTCx5RUFBeUU7UUFDN0QsY0FBUSxHQUFHO1lBQVEsTUFBTSxDQUFDLDhEQUFLLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxFQUFFLEVBQUMsa0JBQWtCO2dCQUNwRiw4REFBSyxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsZ0JBQWdCLEVBQ3ZELElBQUksRUFBQyxRQUFRLGlCQUFhLE1BQU0sRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDO29CQUM3RCw4REFBSyxTQUFTLEVBQUMsdUJBQXVCO3dCQUNsQyw4REFBSyxTQUFTLEVBQUMsZUFBZTs0QkFDMUIsOERBQUssU0FBUyxFQUFDLGNBQWM7Z0NBQ3pCLDJFQUFnQixDQUNkOzRCQUNOLDhEQUFLLFNBQVMsRUFBQyxZQUFZLElBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNuQjs0QkFDTiw4REFBSyxTQUFTLEVBQUMsY0FBYyxJQUN4QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQ1osQ0FDSixDQUNKLENBQ0osQ0FDSjtRQUNWLENBQUM7O0lBQ0wsQ0FBQztJQS9EVSx3QkFBTSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBd0RMLGNBQUM7QUFBRCxDQUFDLENBaEVxQixnREFBZSxHQWdFcEM7QUFFRCx5REFBZSwyRUFBTyxDQUNuQixVQUFDLEtBQXVCLElBQUssWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLEVBQ3hDLG9FQUF5QixDQUMzQixDQUFDLE9BQU8sQ0FBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZFO0FBRU87QUFFVTtBQUNSO0FBRUU7QUFFQztBQUNFO0FBdUI3QztJQUFxQiwwQkFBb0M7SUFBekQ7UUFBQSxxRUFnRkM7UUE1RUcscUJBQXFCO1FBQ3JCLHVCQUFpQixHQUF5QztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO2dCQUM1QixNQUFNLEVBQUUsS0FBSztnQkFDYixXQUFXLEVBQUUsYUFBYTthQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO2dCQUNaLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7Z0JBQ1IsTUFBTSxDQUFDLElBQWUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7SUErREwsQ0FBQztJQTlERyx5Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLGtDQUFpQixHQUFqQjtRQUFBLGlCQWtCQztRQWpCRyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQzlCLEVBQUUsRUFBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BCLGtFQUFrRTtZQUN0RSxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsWUFBWSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7WUFDckUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxhQUFhLEdBQUcscURBQUMsa0VBQUssT0FBRyxDQUFDO2dCQUMvQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFHO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLDBDQUF5QixHQUF6QixVQUEwQixTQUFvQjtRQUMxQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhO2VBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcscURBQUMsbUVBQU0sSUFBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUN0RSxhQUFhLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQzNDLENBQUM7Z0JBQ0gsMkJBQTJCO1lBQy9CLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsWUFBWSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7WUFDbEYsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU0sdUJBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyw4REFBSyxTQUFTLEVBQUMsaUJBQWlCO1lBQ25DLDhEQUFLLFNBQVMsRUFBQyx1QkFBdUI7Z0JBQ2xDLDhEQUFLLFNBQVMsRUFBQyxxQ0FBcUM7b0JBQ2hELDhEQUFLLFNBQVMsRUFBQywrQ0FBK0M7d0JBQzFELHFEQUFDLG9FQUFPLElBQUMsYUFBYSxFQUFHLElBQUksQ0FBQyxhQUFhLEdBQUksQ0FDN0M7b0JBQ04sOERBQUssU0FBUyxFQUFDLDBCQUEwQjt3QkFFakMsOERBQUssRUFBRSxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsa0JBQW1CLENBRWhGLENBQ0o7Z0JBQ04sOERBQUssU0FBUyxFQUFDLDRCQUE0QixJQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbkIsQ0FDSixDQUNKLENBQUM7SUFDWCxDQUFDO0lBQ08sNkJBQVksR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsYUFBYSxHQUFHLHFEQUFDLGtFQUFLLE9BQUcsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0FoRm9CLGdEQUFlLEdBZ0ZuQztBQUVELHlCQUEwQixLQUFVO0lBQ2hDLE1BQU0sQ0FBQztRQUNILElBQUksRUFBUSxLQUFLLENBQUMsSUFBZ0M7UUFDbEQsT0FBTyxFQUFLLEtBQUssQ0FBQyxPQUFpQztLQUN2QyxDQUFDO0FBQ3JCLENBQUM7QUFFRCw0QkFBNEIsUUFBYTtJQUNyQyxNQUFNLENBQUM7UUFDSCxXQUFXLEVBQVMsY0FBTSxlQUFRLENBQUMsbUVBQXdCLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBaEQsQ0FBZ0Q7UUFDMUUsY0FBYyxFQUFNLGNBQU0sZUFBUSxDQUFDLG1FQUF3QixDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQW5ELENBQW1EO1FBQzdFLFVBQVUsRUFBVSxjQUFNLGVBQVEsQ0FBQyxvRUFBeUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFoRCxDQUFnRDtRQUMxRSxTQUFTLEVBQVcsVUFBQyxJQUFZLEVBQUUsUUFBaUIsSUFBSyxlQUFRLENBQUMsb0VBQXlCLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUE3RCxDQUE2RDtLQUN2RyxDQUFDO0FBQ3hCLENBQUM7QUFBQSxDQUFDO0FBRUYseURBQWUsMkVBQU87QUFDdEIsc0hBQXNIO0FBQ3RILHFIQUFxSDtBQUNqSCxlQUFlLEVBQ2Ysa0JBQWtCLENBQ3JCLENBQUMsTUFBTSxDQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7QUN4SWtCO0FBOEM3QyxtQkFBbUI7QUFDbkIsdUdBQXVHO0FBQ3ZHLG9HQUFvRztBQUU3RixJQUFNLGNBQWMsR0FBRztJQUMxQixTQUFTLEVBQUUsVUFBQyxNQUFjLElBQXdELGlCQUFDLFFBQVEsRUFBRSxRQUFRO1FBQ2pHLElBQUksU0FBUyxHQUFHLHlFQUFLLENBQUMsdUNBQXFDLE1BQVEsRUFBRTtZQUM3RCxNQUFNLEVBQUUsS0FBSztZQUNiLFdBQVcsRUFBRSxhQUFhO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQVE7WUFDWixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQzFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ1IsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRVAsMkVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDZEQUE2RDtRQUNqRixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBZmlGLENBZWpGO0lBQ0QsUUFBUSxFQUFFLFVBQUMsS0FBYyxJQUFLLFFBQW1CO1FBQzdDLElBQUksRUFBRSxjQUFjO1FBQ3BCLEtBQUssRUFBRSxLQUFLO0tBQ2YsR0FINkIsQ0FHN0I7Q0FDSixDQUFDO0FBRUYsbUJBQW1CO0FBQ25CLDZIQUE2SDtBQUM3SCxJQUFNLGFBQWEsR0FBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUUxRixJQUFNLE9BQU8sR0FBcUIsVUFBQyxLQUFjLEVBQUUsTUFBbUI7SUFDekUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxhQUFhO1lBQ2QsTUFBTSxDQUFDO2dCQUNILFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xCLGFBQWEsRUFBRSxLQUFLO2FBQ3ZCLENBQUM7UUFDTixLQUFLLGFBQWE7WUFDZCxpR0FBaUc7WUFDakcsaUNBQWlDO1lBQ2pDLE1BQU0sQ0FBQztnQkFDSCxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUk7Z0JBQzdDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSTtnQkFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixhQUFhLEVBQUUsSUFBSTthQUN0QixDQUFDO1FBQ04sS0FBSyxjQUFjO1lBQ2YsTUFBTSxDQUFDO2dCQUNILFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ25CLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTthQUNyQyxDQUFDO1FBQ047WUFDSSw0R0FBNEc7WUFDNUcsSUFBTSxlQUFlLEdBQVUsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRCxzR0FBc0c7SUFDdEcsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDO0FBQ2xDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOUcrQjtBQUNGO0FBQ0E7QUFRL0Isc0dBQXNHO0FBQ3RHLHdHQUF3RztBQUN4Ryw0REFBNEQ7QUFDckQsSUFBTSxRQUFRLEdBQUc7SUFDcEIsS0FBSyxFQUFFLHVEQUFhO0lBQ3BCLElBQUksRUFBRSxzREFBWTtJQUNsQixJQUFJLEVBQUUsc0RBQVk7Q0FDckIsQ0FBQzs7Ozs7OztBQ2pCRiwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZDdkYTZhOTRlZDdkYWY4NTgxYiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTdGF0ZSB7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgbW9kYWxUZXh0OiBzdHJpbmc7XHJcbiAgICBjYW5DbG9zZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuXHJcbmludGVyZmFjZSBTaG93TW9kYWxBY3Rpb24geyBcclxuICAgIHR5cGU6ICdTSE9XX01PREFMX0FDVElPTicsXHJcbiAgICBtb2RhbFRleHQ6IHN0cmluZztcclxuICAgIGNhbkNsb3NlOmJvb2xlYW47XHJcbn1cclxuaW50ZXJmYWNlIENsb3NlTW9kYWxBY3Rpb24geyBcclxuICAgIHR5cGU6ICdDTE9TRV9NT0RBTF9BQ1RJT04nIFxyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gU2hvd01vZGFsQWN0aW9uIHwgQ2xvc2VNb2RhbEFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBzaG93TW9kYWw6ICh0ZXh0OnN0cmluZywgY2FuQ2xvc2U6Ym9vbGVhbikgPT4gPFNob3dNb2RhbEFjdGlvbj4geyBcclxuICAgICAgICB0eXBlOiAnU0hPV19NT0RBTF9BQ1RJT04nLFxyXG4gICAgICAgIG1vZGFsVGV4dDogdGV4dCxcclxuICAgICAgICBjYW5DbG9zZTogY2FuQ2xvc2VcclxuICAgIH0sXHJcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiA8Q2xvc2VNb2RhbEFjdGlvbj57IFxyXG4gICAgICAgIHR5cGU6ICdDTE9TRV9NT0RBTF9BQ1RJT04nXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IE1vZGFsU3RhdGUgPSB7IHNob3c6IGZhbHNlLCBtb2RhbFRleHQ6ICcnLCBjYW5DbG9zZTogdW5kZWZpbmVkIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxNb2RhbFN0YXRlPiA9IChzdGF0ZTogTW9kYWxTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NIT1dfTU9EQUxfQUNUSU9OJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxUZXh0OiBhY3Rpb24ubW9kYWxUZXh0LFxyXG4gICAgICAgICAgICAgICAgY2FuQ2xvc2U6IGFjdGlvbi5jYW5DbG9zZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0NMT1NFX01PREFMX0FDVElPTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2RhbFRleHQ6IHN0YXRlLm1vZGFsVGV4dCxcclxuICAgICAgICAgICAgICAgIGNhbkNsb3NlOiBzdGF0ZS5jYW5DbG9zZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL01vZGFsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcbiAgICBnZXRTZXJ2ZXJEYXRhOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHVzZXJJbmZvOiBVc2VyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgc3RlYW1pZDogc3RyaW5nO1xyXG4gICAgcGVyc29uYW5hbWU6IHN0cmluZztcclxuICAgIHByb2ZpbGV1cmw6IHN0cmluZztcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgYXZhdGFybWVkaXVtOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJmdWxsOiBzdHJpbmc7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEdldFVzZXJJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnR0VUX1VTRVJfSU5GTycsXHJcbn1cclxuaW50ZXJmYWNlIFNldFVzZXJJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0VUX1VTRVJfSU5GTycsXHJcbiAgICB1c2VySW5mbzogVXNlcjtcclxufVxyXG5pbnRlcmZhY2UgRGVsZXRlVXNlckluZm9BY3Rpb24geyBcclxuICAgIHR5cGU6ICdERUxFVEVfVVNFUl9JTkZPJ1xyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEdldFVzZXJJbmZvQWN0aW9uIHwgU2V0VXNlckluZm9BY3Rpb24gfCBEZWxldGVVc2VySW5mb0FjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBnZXRVc2VySW5mbzogKCk6IEFwcFRodW5rQWN0aW9uPEdldFVzZXJJbmZvQWN0aW9uIHwgU2V0VXNlckluZm9BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAvLyBPbmx5IGxvYWQgZGF0YSBpZiBpdCdzIHNvbWV0aGluZyB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgKGFuZCBhcmUgbm90IGFscmVhZHkgbG9hZGluZylcclxuICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvZ2V0L0dldFVzZXJJbmZvYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfVVNFUl9JTkZPJywgdXNlckluZm86IGRhdGEgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgOi1TIGluIHVzZXInLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnR0VUX1VTRVJfSU5GTycgfSk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlVXNlckluZm86ICgpOiBBcHBUaHVua0FjdGlvbjxEZWxldGVVc2VySW5mb0FjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4geyBcclxuICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvYXV0aC9TaWduT3V0YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfVVNFUl9JTkZPJyB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6LVMgaW4gdXNlcicsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogVXNlclN0YXRlID0geyB1c2VySW5mbzogbnVsbCwgZ2V0U2VydmVyRGF0YTogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8VXNlclN0YXRlPiA9IChzdGF0ZTogVXNlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX1VTRVJfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogc3RhdGUudXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1NFVF9VU0VSX0lORk8nOlxyXG4gICAgICAgICAgICAvLyBPbmx5IGFjY2VwdCB0aGUgaW5jb21pbmcgZGF0YSBpZiBpdCBtYXRjaGVzIHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0LiBUaGlzIGVuc3VyZXMgd2UgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXNlckluZm86IGFjdGlvbi51c2VySW5mbyA/IGFjdGlvbi51c2VySW5mbyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnREVMRVRFX1VTRVJfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiB1bmxvYWRlZFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG4vLyBpbXBvcnQgY29ubmVjdGlvblVybCBmcm9tICcuLi8uLi9Tb2NrZXRDb25maWcnO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGF0U3RhdGUge1xyXG4gICAgbWVzc2FnZXM6ICAgICAgIE1lc3NhZ2VbXSB8IG51bGwsXHJcbiAgICBzaG93OiAgICAgICAgICAgYm9vbGVhbixcclxuICAgIGlzX2F1dG9zY3JvbGw6ICAgYm9vbGVhbixcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gICAgc3RlYW1JZDogICAgc3RyaW5nLFxyXG4gICAgdXNlck5hbWU6ICAgc3RyaW5nLCBcclxuICAgIG1lc3NhZ2U6ICAgIHN0cmluZywgXHJcbiAgICBkYXRlOiAgICAgICBEYXRlLFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuLy8gVXNlIEB0eXBlTmFtZSBhbmQgaXNBY3Rpb25UeXBlIGZvciB0eXBlIGRldGVjdGlvbiB0aGF0IHdvcmtzIGV2ZW4gYWZ0ZXIgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uXHJcblxyXG5pbnRlcmZhY2UgU3Vic2NyaWJlVG9NZXNzYWdlc0FjdGlvbiB7IH1cclxuaW50ZXJmYWNlIEF1dG9TY3JvbGxUcmlnZ2VyQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnQVVUT19TQ1JPTExfVFJJR0dFUicsXHJcbn1cclxuaW50ZXJmYWNlIFNob3dUcmlnZ2VyQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0hPV19UUklHR0VSJyxcclxufVxyXG5pbnRlcmZhY2UgU2VuZE1lc3NhZ2VBY3Rpb24geyBcclxuICAgIHN0ZWFtSWQ6ICBzdHJpbmcsXHJcbiAgICB1c2VyTmFtZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgR2V0TWVzc2FnZUFjdGlvbiB7IFxyXG4gICAgdHlwZTogJ0dFVF9NRVNTQUdFJyxcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBHZXRNZXNzYWdlQWN0aW9uIHwgU2hvd1RyaWdnZXJBY3Rpb24gfCBBdXRvU2Nyb2xsVHJpZ2dlckFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0gICAgXHJcbi8vIENvbm5lY3Rpb24gdG8gc2VydmVyXHJcbi8vIENvbmZpZyBXZWJTb2NrZXRcclxuXHJcbnZhciBzb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgc3Vic2NyaWJlVG9NZXNzYWdlczogKCk6IEFwcFRodW5rQWN0aW9uPFN1YnNjcmliZVRvTWVzc2FnZXNBY3Rpb24gfCBHZXRNZXNzYWdlQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjYwMjE3L3dzXCIpO1xyXG4gICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHsgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZWFtSWQ6ICAgIGl0ZW1zLkl0ZW0xLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiAgIGl0ZW1zLkl0ZW0yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICAgIGl0ZW1zLkl0ZW0zLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICAgICAgIG5ldyBEYXRlKGl0ZW1zLkl0ZW00KVxyXG4gICAgICAgICAgICAgICAgfSBhcyBNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVRfTUVTU0FHRScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBFcnJvciA6LVMgaW4gQ2hhdCcsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNvY2tldC5vbm9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0LnNlbmQoXCJHZXRNZXNzYWdlc1wiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50Lndhc0NsZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4g0YfQuNGB0YLQvicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0LHRgNGL0LIg0YHQvtC10LTQuNC90LXQvdC40Y8nKTsgLy8g0L3QsNC/0YDQuNC80LXRgCwgXCLRg9Cx0LjRglwiINC/0YDQvtGG0LXRgdGBINGB0LXRgNCy0LXRgNCwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QtDogJyArIGV2ZW50LmNvZGUgKyAnINC/0YDQuNGH0LjQvdCwOiAnICsgZXZlbnQucmVhc29uKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLQntGI0LjQsdC60LA6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZW5kTWVzc2FnZTogKHN0ZWFtSWQ6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248U2VuZE1lc3NhZ2VBY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7c3RlYW1JZCwgdXNlck5hbWUsIG1lc3NhZ2V9KSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1RyaWdnZXI6ICgpID0+IDxTaG93VHJpZ2dlckFjdGlvbj57IHR5cGU6ICdTSE9XX1RSSUdHRVInIH0sXHJcbiAgICBhdXRvU2Nyb2xsVHJpZ2dlcjogKCkgPT4gPEF1dG9TY3JvbGxUcmlnZ2VyQWN0aW9uPnsgdHlwZTogJ0FVVE9fU0NST0xMX1RSSUdHRVInIH0sXHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IENoYXRTdGF0ZSA9IHsgbWVzc2FnZXM6IG51bGwsIHNob3c6IGZhbHNlLCBpc19hdXRvc2Nyb2xsOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q2hhdFN0YXRlPiA9IChzdGF0ZTogQ2hhdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX01FU1NBR0UnOlxyXG4gICAgICAgICAgICB2YXIgZGF0YTogTWVzc2FnZVtdO1xyXG4gICAgICAgICAgICBpZighc3RhdGUubWVzc2FnZXMpe1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IFthY3Rpb24ubWVzc2FnZV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS5tZXNzYWdlcy5sZW5ndGggPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2VzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHN0YXRlLm1lc3NhZ2VzLmNvbmNhdChhY3Rpb24ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHN0YXRlLm1lc3NhZ2VzLmNvbmNhdChhY3Rpb24ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogZGF0YSxcclxuICAgICAgICAgICAgICAgIHNob3c6IHN0YXRlLnNob3csXHJcbiAgICAgICAgICAgICAgICBpc19hdXRvc2Nyb2xsOiBzdGF0ZS5pc19hdXRvc2Nyb2xsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1NIT1dfVFJJR0dFUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogIXN0YXRlLnNob3csXHJcbiAgICAgICAgICAgICAgICBpc19hdXRvc2Nyb2xsOiBzdGF0ZS5pc19hdXRvc2Nyb2xsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0FVVE9fU0NST0xMX1RSSUdHRVInOlxyXG4gICAgICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHN0YXRlLnNob3csXHJcbiAgICAgICAgICAgICAgICBpc19hdXRvc2Nyb2xsOiAhc3RhdGUuaXNfYXV0b3Njcm9sbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9DaGF0LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yLCBSZWR1Y2Vyc01hcE9iamVjdCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiA8Uz4obmV4dDogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxTPikgPT4gbmV4dFxyXG4gICAgKShjcmVhdGVTdG9yZSk7XHJcblxyXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzOiBSZWR1Y2Vyc01hcE9iamVjdCkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb250YWluZXIvTGF5b3V0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgRG90YTIgZnJvbSAnLi9jb21wb25lbnRzL0RvdGEyJztcclxuaW1wb3J0IENTR08gZnJvbSAnLi9jb21wb25lbnRzL0NTR08nO1xyXG5pbXBvcnQgUnVsZXMgZnJvbSAnLi9jb21wb25lbnRzL1J1bGVzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuL2NvbXBvbmVudHMvRkFRJztcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi9jb21wb25lbnRzL1dhcm5pbmcnO1xyXG5pbXBvcnQgTGsgZnJvbSAnLi9jb21wb25lbnRzL0xrJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9jb21wb25lbnRzL0NoYXQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSA8TGF5b3V0PlxyXG4gICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17IEhvbWUgfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9kb3RhMicgY29tcG9uZW50PXsgRG90YTIgfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9jc2dvJyBjb21wb25lbnQ9eyBDU0dPIH0gLz5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvcnVsZXMnIGNvbXBvbmVudD17IFJ1bGVzIH0gLz5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvZmFxJyBjb21wb25lbnQ9eyBGQVEgfSAvPlxyXG4gICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9say86dXNlcklkPycgY29tcG9uZW50PXsgTGsgfSAvPlxyXG48L0xheW91dD47XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdXAgPSBXYXJuaW5nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXQgPSBDaGF0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50XHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0byB0aGUgaW5jb21pbmcgVVJMXHJcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXJhbXMuYmFzZVVybC5zdWJzdHJpbmcoMCwgcGFyYW1zLmJhc2VVcmwubGVuZ3RoIC0gMSk7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHBhcmFtcy5sb2NhdGlvbikpO1xyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXsgYmFzZW5hbWUgfSBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+SGVsbG8sIENTOkdPITwvaDE+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NTR08udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcclxuaW1wb3J0ICogYXMgQ2hhdFN0YXRlIGZyb20gJy4uL3N0b3JlL0NoYXQnO1xyXG5pbXBvcnQgKiBhcyBVc2VyU3RhdGUgZnJvbSAnLi4vc3RvcmUvVXNlcic7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xyXG4gICAgdXNlcjogVXNlclN0YXRlLlVzZXJTdGF0ZSxcclxuICAgIGNoYXQ6IENoYXRTdGF0ZS5DaGF0U3RhdGVcclxufVxyXG5cclxudHlwZSBDaGF0U3RhdGUgPVxyXG4gICAgSVN0YXRlUHJvcHNcclxuICAgIC8vQ2hhdFN0YXRlLkNoYXRTdGF0ZSAgICAgICAgICAgICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAmIHR5cGVvZiBDaGF0U3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAvLyAuLi4gcGx1cyBhY3Rpb24gY3JlYXRvcnMgd2UndmUgcmVxdWVzdGVkXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+OyAgICAgICAgICAgICAgLy8gLi4uIHBsdXMgaW5jb21pbmcgcm91dGluZyBwYXJhbWV0ZXJzXHJcblxyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDaGF0U3RhdGUsIHt9PiB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvL2dldCBwcmVsb2FkIG1lc3NhZ2VzIGZyb20gc2VydmVyXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJzY3JpYmVUb01lc3NhZ2VzKCk7XHJcbiAgICAgICAgLy9lbmFibGUgY2hhdFxyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd1RyaWdnZXIoKTtcclxuICAgICAgICAvL3Njcm9sbFxyXG4gICAgICAgIHRoaXMucHJvcHMuYXV0b1Njcm9sbFRyaWdnZXIoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICB9XHJcbiAgICBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNoYXQuaXNfYXV0b3Njcm9sbCkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmNoYXRfbWVzc2FnZXMpO1xyXG4gICAgICAgICAgICBub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlc0VuZDogYW55O1xyXG5cclxuICAgIEtleUhhbmRsZXIgPSAoa2V5OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYoa2V5LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGlmKGtleS5hbHRLZXkgfHwga2V5LmN0cmxLZXkgfHwga2V5LnNoaWZ0S2V5IHx8IGtleS5tZXRhS2V5KSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRNZXNzYWdlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYoZWxlbS52YWx1ZS50cmltKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcHJvcHMudXNlci51c2VySW5mbyE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UodXNlckluZm8uc3RlYW1pZCwgdXNlckluZm8ucGVyc29uYW5hbWUsIGVsZW0udmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgZWxlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2hhdCA9IHByb3BzLmNoYXQ7XHJcbiAgICAgICAgaWYoIWNoYXQuc2hvdykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcHJvcHMudXNlci51c2VySW5mbztcclxuICAgICAgICBsZXQgdXNlck5hbWUgPSBcImFub25cIjtcclxuICAgICAgICBsZXQgZGlzYWJsZWRBdHRyaWJ1dDtcclxuICAgICAgICBsZXQgZGlzYWJsZWRDbGFzc05hbWUgPSAnJztcclxuICAgICAgICBpZih1c2VySW5mbykge1xyXG4gICAgICAgICAgICB1c2VyTmFtZSA9IHVzZXJJbmZvLnBlcnNvbmFuYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkQXR0cmlidXQgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICBkaXNhYmxlZENsYXNzTmFtZSAgID0gJyBkaXNhYmxlZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5wdXRIVE1MID0gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBpbnB1dC1jaGF0XCIgKyBkaXNhYmxlZENsYXNzTmFtZX0gaWQ9XCJpbnB1dE1lc3NhZ2VcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUuLi5cIiBtYXhMZW5ndGg9ezUwfSBvbktleURvd249e3RoaXMuS2V5SGFuZGxlcn0gZGlzYWJsZWQ9e2Rpc2FibGVkQXR0cmlidXR9Lz47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbE1lc3NhZ2VzID0gbnVsbDtcclxuICAgICAgICBpZihjaGF0Lm1lc3NhZ2VzKSB0ZW1wbE1lc3NhZ2VzID0gY2hhdC5tZXNzYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICh7IHN0ZWFtSWQ6IHN0ZWFtSWQsIHVzZXJOYW1lOiB1c2VyTmFtZSwgbWVzc2FnZTogbWVzc2FnZSwgZGF0ZTogZGF0ZSB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlIG1lc3NhZ2U9e21lc3NhZ2V9IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gPE1lc3NhZ2UgbWVzc2FnZT17e3N0ZWFtSWQ6IHN0ZWFtSWQsIHVzZXJOYW1lOnVzZXJOYW1lLCBtZXNzYWdlOm1lc3NhZ2UsIGRhdGU6ZGF0ZSB9fSBrZXk9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW1lc3NhZ2VzXCIgb25TY3JvbGw9e3RoaXMuU2Nyb2xsSGFuZGxlcn0gcmVmPSdjaGF0X21lc3NhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0ZW1wbE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uIGlucHV0LWNoYXQtYWRkb25cIj57dXNlck5hbWUgKyBcIjpcIn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IGlucHV0SFRNTCB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgLy9SZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PlxyXG4gICAgU2Nyb2xsSGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNoYXQuaXNfYXV0b3Njcm9sbCkge1xyXG4gICAgICAgICAgICAvLyBkaXYub2Zmc2V0SGVpZ2h0ICsgZGl2LnNjcm9sbFRvcCA8PSBkaXYuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAoZGl2LnNjcm9sbFRvcCArIGRpdi5vZmZzZXRIZWlnaHQgKyA0MCkgLSBkaXYuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPCAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0b1Njcm9sbFRyaWdnZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAoZGl2LnNjcm9sbFRvcCArIGRpdi5vZmZzZXRIZWlnaHQgKyA0MCkgLSBkaXYuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0b1Njcm9sbFRyaWdnZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzIChzdGF0ZTogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6ICAgc3RhdGUudXNlciAgYXMgVXNlclN0YXRlLlVzZXJTdGF0ZSxcclxuICAgICAgICBjaGF0OiAgIHN0YXRlLmNoYXQgIGFzIENoYXRTdGF0ZS5DaGF0U3RhdGUsXHJcbiAgICB9IGFzIElTdGF0ZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgLy8oc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNoYXQsIFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgQ2hhdFN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbiApKENoYXQpIGFzIHR5cGVvZiBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NoYXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6NjAyMTcvYjR3X3JlYWN0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50Lndhc0NsZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4g0YfQuNGB0YLQvicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0LHRgNGL0LIg0YHQvtC10LTQuNC90LXQvdC40Y8nKTsgLy8g0L3QsNC/0YDQuNC80LXRgCwgXCLRg9Cx0LjRglwiINC/0YDQvtGG0LXRgdGBINGB0LXRgNCy0LXRgNCwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QtDogJyArIGV2ZW50LmNvZGUgKyAnINC/0YDQuNGH0LjQvdCwOiAnICsgZXZlbnQucmVhc29uKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsDpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1dHRvbkhhbmRsZXIoMCl9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV0dG9uSGFuZGxlcigxKX0+UGhhc2UxPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5idXR0b25IYW5kbGVyKDIpfT5QaGFzZTI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1dHRvbkhhbmRsZXIoMyl9PlJlc3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCBkb3RhMiE8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJ3JlZCBzb2xpZCA1cHgnLCB3aWR0aDonODEwcHgnLCBoZWlnaHQ6JzYxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiQjRXL015U2Vjb25kUHJvamVjdC5odG1sXCIgd2lkdGg9JzgwMHB4JyBoZWlnaHQ9JzYwMHB4JyBzdHlsZT17eyBib3JkZXI6ICdub25lJyB9fT48L2lmcmFtZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uSGFuZGxlciA9IChzd2l0Y2hEaWdpdDpudW1iZXIpID0+IHtcclxuICAgICAgICBzd2l0Y2goc3dpdGNoRGlnaXQpe1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtzdGF0ZTogJ2FkZF91c2VyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGxheWVyTnVtYmVyLCBzdGVhbUlkOiB0aGlzLnBsYXllck51bWJlcn0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtzdGF0ZTogJ3N0YXJ0X3BoYXNlMSd9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7c3RhdGU6ICdzdGFydF9waGFzZTInfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe3N0YXRlOiAncmVzdGFydCd9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzb2NrZXQ6IFdlYlNvY2tldDtcclxuICAgIHBsYXllck51bWJlciA9IDA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRG90YTIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCBGQVEhPC9oMT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRkFRLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgVXNlclN0YXRlIGZyb20gJy4uL3N0b3JlL1VzZXInO1xyXG5pbXBvcnQgKiBhcyBMa1N0YXRlIGZyb20gJy4uL3N0b3JlL0xrJztcclxuaW1wb3J0ICogYXMgTW9kYWxTdGF0ZSBmcm9tICcuLi9zdG9yZS9Nb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xyXG4gICAgdXNlcjogICBVc2VyU3RhdGUuVXNlclN0YXRlLFxyXG4gICAgbGs6ICAgICBMa1N0YXRlLkxrU3RhdGUsXHJcbn1cclxuaW50ZXJmYWNlIElEaXNwYXRjaFByb3BzIHtcclxuICAgIGdldFVzZXJJbmZvOiAgICAoKSA9PiBhbnksXHJcbiAgICBjbG9zZU1vZGFsOiAgICAgKCkgPT4gYW55LFxyXG4gICAgc2hvd01vZGFsOiAgICAgICh0ZXh0OiBzdHJpbmcsIGNhbkNsb3NlOiBib29sZWFuKSA9PiBhbnksXHJcbiAgICBnZXRMa0luZm86ICAgICAgKHVzZXJJZDogc3RyaW5nKSA9PiBhbnksXHJcbiAgICBzZXRPd25lcjogICAgICAgKG93bmVyOiBib29sZWFuKSA9PiBhbnksXHJcbn1cclxuXHJcbnR5cGUgVXNlclByb3BzID1cclxuICAgIC8vVXNlclN0YXRlLlVzZXJTdGF0ZSAgICAgICAgICAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgLy8mIHR5cGVvZiBVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAvLyAuLi4gcGx1cyBhY3Rpb24gY3JlYXRvcnMgd2UndmUgcmVxdWVzdGVkXHJcbiAgICAvLyYgdHlwZW9mIE1vZGFsU3RhdGUuYWN0aW9uQ3JlYXRvcnNcclxuICAgIElTdGF0ZVByb3BzXHJcbiAgICAmIElEaXNwYXRjaFByb3BzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e3VzZXJJZDogc3RyaW5nIHwgbnVsbH0+OyAgICAgICAgICAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnMgICBcclxuXHJcbmNsYXNzIExrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJQcm9wcywge30+IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB1c2VySWQgID0gcHJvcHMubWF0Y2gucGFyYW1zLnVzZXJJZDtcclxuICAgICAgICBsZXQgb3duZXIgICA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCF1c2VySWQpIHtcclxuICAgICAgICAgICAgdXNlcklkID0gcHJvcHMudXNlci51c2VySW5mbyEuc3RlYW1pZDtcclxuICAgICAgICAgICAgb3duZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRPd25lcihvd25lcik7XHJcbiAgICAgICAgcHJvcHMuZ2V0TGtJbmZvKHVzZXJJZCk7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRVc2VySW5mbygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmKGRhdGEpe1xyXG4gICAgICAgIC8vICAgICAgICAgLy9kb2luZyBzb21ldGhpbmdcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmKGRhdGEgPT09IG51bGwpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5zaG93TW9kYWwoJ1NvbWUgdHJvdWJsZSB3aGVuIGdldHRpbmcgZGF0YSBmcm9tIHNlcnZlclxcblNvcnJ5LCB0cnkgYWdhaW4gbGF0ZXInLCB0cnVlKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmKGRhdGEgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLnNob3dNb2RhbCgnU29tZSB0cm91YmxlIHdpdGggY29ubmVjdGlvbiB3aXRoIHNlcnZlclxcblNvcnJ5LCB0cnkgYWdhaW4gbGF0ZXInLCB0cnVlKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgLy8gIDxSZWRpcmVjdCB0bz17Jy8nfSAvPlxyXG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xyXG4gICAgICAgIC8vICAgICAvLyBsb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbyBmcm9tIGxrITwvaDE+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlOiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogICBzdGF0ZS51c2VyICBhcyBVc2VyU3RhdGUuVXNlclN0YXRlLFxyXG4gICAgICAgIGxrOiAgICAgc3RhdGUubGsgICAgYXMgTGtTdGF0ZS5Ma1N0YXRlLFxyXG4gICAgfSBhcyBJU3RhdGVQcm9wcztcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VXNlckluZm86ICAgICgpID0+IGRpc3BhdGNoKFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycy5nZXRVc2VySW5mbygpKSxcclxuICAgICAgICBjbG9zZU1vZGFsOiAgICAgKCkgPT4gZGlzcGF0Y2goTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9ycy5jbG9zZU1vZGFsKCkpLFxyXG4gICAgICAgIHNob3dNb2RhbDogICAgICAodGV4dDogc3RyaW5nLCBjYW5DbG9zZTogYm9vbGVhbikgPT4gZGlzcGF0Y2goTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9ycy5zaG93TW9kYWwodGV4dCwgY2FuQ2xvc2UpKSxcclxuICAgICAgICBnZXRMa0luZm86ICAgICAgKHVzZXJJZDogc3RyaW5nKSA9PiBkaXNwYXRjaChMa1N0YXRlLmFjdGlvbkNyZWF0b3JzLmdldExrSW5mbyh1c2VySWQpKSxcclxuICAgICAgICBzZXRPd25lcjogICAgICAgKG93bmVyOiBib29sZWFuKSA9PiBkaXNwYXRjaChMa1N0YXRlLmFjdGlvbkNyZWF0b3JzLnNldE93bmVyKG93bmVyKSksXHJcbiAgICB9IGFzIElEaXNwYXRjaFByb3BzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExrKSBhcyB0eXBlb2YgTGs7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGsudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvYXBpL2F1dGgvc2lnbmluJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2NvbW11bml0eS5lZGdlY2FzdC5zdGVhbXN0YXRpYy5jb20vcHVibGljL2ltYWdlcy9zaWduaW50aHJvdWdoc3RlYW0vc2l0c18wMS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNsaWNrIHRvIGxvZ2luXCIvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e3VzZXJOYW1lOnN0cmluZywgbG9nb3V0SGFuZGxlcjphbnl9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwibG9nb3V0LXVzZXJOYW1lIG5hdmJhci1icmFuZFwiXHJcbiAgICAgICAgICAgIGhyZWY9Jy9hcGkvYXV0aC9zaWdub3V0J1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmxvZ291dEhhbmRsZXIoKX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJOYW1lfVxyXG4gICAgICAgIDwvYT47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9nb3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgKiBhcyBDaGF0U3RhdGUgZnJvbSAnLi4vc3RvcmUvQ2hhdCc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIG1lc3NhZ2U6IENoYXRTdGF0ZS5NZXNzYWdlLCBcclxuICAgIGtleTogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3N0ZWFtSWQsIHVzZXJOYW1lLCBtZXNzYWdlLCBkYXRlfSA9IHRoaXMucHJvcHMubWVzc2FnZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PntzdGVhbUlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+e2RhdGUudG9TdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGE+e3VzZXJOYW1lfTogPC9hPjxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTWVzc2FnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgTG9naW5PckxvZ291dDpKU1guRWxlbWVudCB9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlIGNvbGxhcHNlZCcgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nI21lbnUtbmF2YmFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5Mb2dpbk9yTG9nb3V0IH1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eycvJ30+UnVsZXR0ZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4Jz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbGluayBuYXZiYXItY29sbGFwc2UgY29sbGFwc2UnIGlkPSdtZW51LW5hdmJhcic+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17ICcvZG90YTInIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXBsYXknPjwvc3Bhbj4gZG90YTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17ICcvY3NnbycgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc+PC9zcGFuPiBjc2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZXhhY3QgdG89eyAnL3J1bGVzJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1pbmZvLXNpZ24nPjwvc3Bhbj4gcnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz17ICcvZmFxJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduJz48L3NwYW4+IGZhcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+SGVsbG8sIHJ1bGVzITwvaDE+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1J1bGVzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBNb2RhbFN0YXRlIGZyb20gJy4uL3N0b3JlL01vZGFsJztcclxuXHJcbnR5cGUgTW9kYWxQcm9wcyA9XHJcbiAgICBNb2RhbFN0YXRlLk1vZGFsU3RhdGUgICAgICAgICAgICAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgJiB0eXBlb2YgTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47ICAgICAgICAgICAgICAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnNcclxuXHJcbmNsYXNzIFdhcm5pbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TW9kYWxQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRvUmVuZGVyID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnNob3cpIHtcclxuICAgICAgICAgICAgdG9SZW5kZXIgPSB0aGlzLnRvUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5BZGRJbiwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmVuZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJET00gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbUJhY2tncm91bmQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1Nb2RhbCAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC13YXJuaW5nJyk7XHJcbiAgICAgICAgaWYoZWxlbUJhY2tncm91bmQgJiYgZWxlbU1vZGFsKXtcclxuICAgICAgICAgICAgZWxlbUJhY2tncm91bmQuY2xhc3NOYW1lID0gZWxlbUJhY2tncm91bmQuY2xhc3NOYW1lLnNwbGl0KCcgaW4nKVswXTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbGVtQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKSwgNTAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbGVtTW9kYWwuY2xhc3NOYW1lID0gZWxlbU1vZGFsLmNsYXNzTmFtZS5zcGxpdCgnIGluJylbMF0sIDcwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBBZGRJbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgZWxlbU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC13YXJuaW5nJyk7XHJcbiAgICAgICAgaWYoZWxlbUJhY2tncm91bmQgJiYgZWxlbU1vZGFsKXtcclxuICAgICAgICAgICAgZWxlbUJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xyXG4gICAgICAgICAgICBlbGVtQmFja2dyb3VuZC5jbGFzc05hbWUgKz0gJyBpbic7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2VsZW1Nb2RhbC5jbGFzc05hbWUgKz0gJyBpbic7fSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgYnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMucHJvcHMuY2FuQ2xvc2U7XHJcbiAgICAgICAgbGV0IG5hbWVPZkNsYXNzID0gJ2J0biBidG4tcHJpbWFyeSBwb3AtdXAtYnV0dG9uICcsXHJcbiAgICAgICAgICAgIG9uQnV0dG9uRG8gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbmFtZU9mQ2xhc3MgKz0gYnV0dG9uID09IHRydWUgPyAnYWN0aXZlJyA6ICdkaXNhYmxlZCc7XHJcbiAgICAgICAgaWYoYnV0dG9uID09IHRydWUpIHtcclxuICAgICAgICAgICAgb25CdXR0b25EbyA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRE9NKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucHJvcHMuY2xvc2VNb2RhbCwgNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e25hbWVPZkNsYXNzfSBvbkNsaWNrPXtvbkJ1dHRvbkRvfT5cclxuICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxuLy8gICAgb25DbGljaz17dGhpcy5wcm9wcy5jYW5DbG9zZSA/IHRoaXMucHJvcHMuY2xvc2VNb2RhbCA6IHVuZGVmaW5lZH0gIFxyXG4gICAgcHJpdmF0ZSB0b1JlbmRlciA9ICgpID0+IHsgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2Ryb3AgZmFkZVwiIGlkPSdwb3AtdXAtY29udGFpbmVyJyA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbW9kYWwgZmFkZSd9IHRhYkluZGV4PXstMX0gaWQ9XCJwb3AtdXAtd2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7ZGlzcGxheTonYmxvY2snfX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyBtb2RhbC1zbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPldhcm5pbmc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tb2RhbFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuYnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLm1vZGFsLCBcclxuICAgTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4pKFdhcm5pbmcpIGFzIHR5cGVvZiBXYXJuaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1dhcm5pbmcudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2TWVudSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJztcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi4vY29tcG9uZW50cy9XYXJuaW5nJztcclxuaW1wb3J0IExvZ291dCBmcm9tICcuLi9jb21wb25lbnRzL0xvZ291dCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFVzZXJTdGF0ZSBmcm9tICcuLi9zdG9yZS9Vc2VyJztcclxuaW1wb3J0ICogYXMgTW9kYWxTdGF0ZSBmcm9tICcuLi9zdG9yZS9Nb2RhbCc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xyXG4gICAgdXNlcjogICAgICAgVXNlclN0YXRlLlVzZXJTdGF0ZSxcclxuICAgIHJvdXRpbmc6ICAgIHR5cGVvZiByb3V0ZXJSZWR1Y2VyLFxyXG4gICAgY2hpbGRyZW46ICAgRWxlbWVudFtdLFxyXG59XHJcbmludGVyZmFjZSBJRGlzcGF0Y2hQcm9wcyB7XHJcbiAgICBnZXRVc2VySW5mbzogICAgICAgICgpID0+IGFueSxcclxuICAgIGRlbGV0ZVVzZXJJbmZvOiAgICAgKCkgPT4gYW55LFxyXG4gICAgY2xvc2VNb2RhbDogICAgICAgICAoKSA9PiBhbnksXHJcbiAgICBzaG93TW9kYWw6ICAgICAgICAgICh0ZXh0OiBzdHJpbmcsIGNhbkNsb3NlOiBib29sZWFuKSA9PiBhbnksXHJcbn1cclxuXHJcbnR5cGUgVXNlclByb3BzID1cclxuICAgIC8vVXNlclN0YXRlLlVzZXJTdGF0ZSAgICAgICAgICAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgLy8mIHR5cGVvZiBVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAvLyAuLi4gcGx1cyBhY3Rpb24gY3JlYXRvcnMgd2UndmUgcmVxdWVzdGVkXHJcbiAgICAvLyYgdHlwZW9mIE1vZGFsU3RhdGUuYWN0aW9uQ3JlYXRvcnNcclxuICAgIElTdGF0ZVByb3BzXHJcbiAgICAmIElEaXNwYXRjaFByb3BzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+OyAgICAgICAgICAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnMgICBcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUHJvcHMgfCBhbnksIHt9PiB7XHJcbiAgICAvLyByZWFkb25seSB3YXJuaW5nQ29tcG9uZW50ID0gbmV3IFdhcm5pbmcoKTtcclxuICAgIC8vIGlmIHVzZXIgbm90IGxvZ2luLCByZW5kZXIgbG9naW4gY29tcG9uZW50XHJcbiAgICBMb2dpbk9yTG9nb3V0OiBhbnk7XHJcbiAgICAvLyBjaGVjayBhdXRoIG9mIHVzZXJcclxuICAgIHVzZXJJc0F1dGhQcm9taXNlOiAoKSA9PiBQcm9taXNlPGJvb2xlYW4gfCBudWxsIHwgdm9pZD4gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAvYXBpL2dldC9Vc2VySXNBdXRoYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6LVMgaW4gdXNlcicsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgdXNlciBsb2dpbiwgZ2V0IGhpcyBkYXRhIGZyb20gc3RlYW1cclxuICAgIC8vIGFuZCByZW5kZXIgd2FpdCBjb21wb25lbnRcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy51c2VySXNBdXRoUHJvbWlzZSgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9wcy5zaG93TW9kYWwoJ1BsZWFzZSB3YWl0IGdldHRpbmcgZGF0YSBmcm9tIHNlcnZlcicsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRyb3VibGVMb2dpbignVHJvdWJsZSB3aGVuIGxvZ2luaW5nIGZyb20gU3RlYW1cXG5QbGVhc2UgcmV0cnkgbG9naW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ucm91YmxlTG9naW4oJ1Ryb3VibGUgd2l0aCBjb25uZWN0aW9uXFxuUGxlYXNlIHJldHJ5IGxvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2dpbk9yTG9nb3V0ID0gPExvZ2luIC8+O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIDotUyBpbiBsYXlvdXQtY29tcG9uZW50RGlkTW91bnQnLCBlcnIpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gd2hlbiBkYXRhIGlzIGdvdHRlbiwgcmVuZGVyIGhpcyB1c2VyIG5hbWVcclxuICAgIC8vIGFuZCBsb2dvdXQgY29tcG9uZW50XHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVXNlclByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy51c2VyLmdldFNlcnZlckRhdGEgIT0gdGhpcy5wcm9wcy51c2VyLmdldFNlcnZlckRhdGFcclxuICAgICAgICAgICAgICAgICYmIG5leHRQcm9wcy51c2VyLmdldFNlcnZlckRhdGEgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMudXNlci51c2VySW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ2luT3JMb2dvdXQgPSA8TG9nb3V0IHVzZXJOYW1lPXtuZXh0UHJvcHMudXNlci51c2VySW5mby5wZXJzb25hbmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0SGFuZGxlcj17IHRoaXMucHJvcHMuZGVsZXRlVXNlckluZm8gfSBcclxuICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRyb3VibGVMb2dpbignVHJvdWJsZSB3aGVuIGdldHRpbmcgZGF0YSBmcm9tIFN0ZWFtXFxuUGxlYXNlIHJldHJ5IGxvZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgY29udGFudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wtc20tMyBjb250YWluZXItbmF2bWVudS1jaGF0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVpbmVyLW5hdm1lbnUgY29sLXNtLTEyIG5hdm1lbnUtY29sLXNtLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgTG9naW5PckxvZ291dD17IHRoaXMuTG9naW5PckxvZ291dCB9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyIGNvbnRhaW5lci1jaGF0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHsgUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0KSB9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ncmVhY3QtY2hhdCcgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ319PmxvYWRpbmcuLi4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSBjb250YWluZXItY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFRyb3VibGVMb2dpbihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlVXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dNb2RhbChzdHIsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTG9naW5PckxvZ291dCA9IDxMb2dpbiAvPjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzIChzdGF0ZTogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6ICAgICAgIHN0YXRlLnVzZXIgICAgICBhcyBVc2VyU3RhdGUuVXNlclN0YXRlLFxyXG4gICAgICAgIHJvdXRpbmc6ICAgIHN0YXRlLnJvdXRpbmcgICBhcyB0eXBlb2Ygcm91dGVyUmVkdWNlcixcclxuICAgIH0gYXMgSVN0YXRlUHJvcHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXJJbmZvOiAgICAgICAgKCkgPT4gZGlzcGF0Y2goVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzLmdldFVzZXJJbmZvKCkpLFxyXG4gICAgICAgIGRlbGV0ZVVzZXJJbmZvOiAgICAgKCkgPT4gZGlzcGF0Y2goVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzLmRlbGV0ZVVzZXJJbmZvKCkpLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6ICAgICAgICAgKCkgPT4gZGlzcGF0Y2goTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9ycy5jbG9zZU1vZGFsKCkpLFxyXG4gICAgICAgIHNob3dNb2RhbDogICAgICAgICAgKHRleHQ6IHN0cmluZywgY2FuQ2xvc2U6IGJvb2xlYW4pID0+IGRpc3BhdGNoKE1vZGFsU3RhdGUuYWN0aW9uQ3JlYXRvcnMuc2hvd01vZGFsKHRleHQsIGNhbkNsb3NlKSksXHJcbiAgICB9IGFzIElEaXNwYXRjaFByb3BzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuLy8oc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnVzZXIsICAgICAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4vL1VzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkgYXMgdHlwZW9mIExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVyL0xheW91dC50c3giLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGtTdGF0ZSB7XHJcbiAgICBpbnZlbnRvcnk6IEl0ZW1bXSB8IG51bGwsXHJcbiAgICBiZXRzOiBCZXRbXSB8IG51bGwsXHJcbiAgICBnZXRTZXJ2ZXJEYXRhOiBib29sZWFuIHwgbnVsbCxcclxuICAgIG93bmVyOiBib29sZWFuIHwgbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCZXQge1xyXG4gICAgcmVzdWx0OiBib29sZWFuLFxyXG4gICAgZGF0ZTogRGF0ZSxcclxuICAgIGl0ZW1zOiBJdGVtW10sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nLFxyXG4gICAgaW1hZ2VVcmw6IHN0cmluZyxcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEdldExrSW5mb0FjdGlvbiB7IFxyXG4gICAgdHlwZTogJ0dFVF9MS19JTkZPJyxcclxufVxyXG5pbnRlcmZhY2UgU2V0TGtJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0VUX0xLX0lORk8nLFxyXG4gICAgYmV0czogQmV0W10sXHJcbiAgICBpdGVtczogSXRlbVtdLFxyXG59XHJcbmludGVyZmFjZSBTZXRMa093bmVyQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0VUX0xLX09XTkVSJyxcclxuICAgIG93bmVyOiBib29sZWFuLFxyXG59XHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gR2V0TGtJbmZvQWN0aW9uIHwgU2V0TGtJbmZvQWN0aW9uIHwgU2V0TGtPd25lckFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBnZXRMa0luZm86ICh1c2VySWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPEdldExrSW5mb0FjdGlvbiB8IFNldExrSW5mb0FjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9nZXQvR2V0VXNlclN0YXRlP3VzZXJJZFBhcmFtPSR7dXNlcklkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBcclxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9MS19JTkZPJywgYmV0czogZGF0YS5iZXRzLCBpdGVtczogZGF0YS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIDotUyBpbiBsaycsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdHRVRfTEtfSU5GTycgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0T3duZXI6IChvd25lcjogYm9vbGVhbikgPT4gPFNldExrT3duZXJBY3Rpb24+IHtcclxuICAgICAgICB0eXBlOiAnU0VUX0xLX09XTkVSJyxcclxuICAgICAgICBvd25lcjogb3duZXIsXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IExrU3RhdGUgPSB7IGludmVudG9yeTogbnVsbCwgYmV0czogbnVsbCwgZ2V0U2VydmVyRGF0YTogbnVsbCwgb3duZXI6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPExrU3RhdGU+ID0gKHN0YXRlOiBMa1N0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX0xLX0lORk8nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5OiBzdGF0ZS5pbnZlbnRvcnksXHJcbiAgICAgICAgICAgICAgICBiZXRzOiBzdGF0ZS5iZXRzLFxyXG4gICAgICAgICAgICAgICAgb3duZXI6IHN0YXRlLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgZ2V0U2VydmVyRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnU0VUX0xLX0lORk8nOlxyXG4gICAgICAgICAgICAvLyBPbmx5IGFjY2VwdCB0aGUgaW5jb21pbmcgZGF0YSBpZiBpdCBtYXRjaGVzIHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0LiBUaGlzIGVuc3VyZXMgd2UgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5OiBhY3Rpb24uaXRlbXMgPyBhY3Rpb24uaXRlbXMgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYmV0czogYWN0aW9uLmJldHMgPyBhY3Rpb24uYmV0cyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogc3RhdGUub3duZXIsXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1NFVF9MS19PV05FUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnk6IHN0YXRlLmludmVudG9yeSxcclxuICAgICAgICAgICAgICAgIGJldHM6IHN0YXRlLmJldHMsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogYWN0aW9uLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgZ2V0U2VydmVyRGF0YTogc3RhdGUuZ2V0U2VydmVyRGF0YSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9May50cyIsImltcG9ydCAqIGFzIE1vZGFsIGZyb20gJy4vTW9kYWwnO1xyXG5pbXBvcnQgKiBhcyBVc2VyIGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCAqIGFzIENoYXQgZnJvbSAnLi9DaGF0JztcclxuXHJcbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBtb2RhbDogTW9kYWwuTW9kYWxTdGF0ZSxcclxuICAgIHVzZXI6IFVzZXIuVXNlclN0YXRlLFxyXG4gICAgY2hhdDogQ2hhdC5DaGF0U3RhdGUsXHJcbn1cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBtb2RhbDogTW9kYWwucmVkdWNlcixcclxuICAgIHVzZXI6IFVzZXIucmVkdWNlcixcclxuICAgIGNoYXQ6IENoYXQucmVkdWNlcixcclxufTtcclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==