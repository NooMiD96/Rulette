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

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(135);

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

module.exports = (__webpack_require__(1))(136);

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

module.exports = (__webpack_require__(1))(137);

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
        // var hostUri = "ws://localhost:60217/ws";
        var hostUri = "http://localhost:60217/";
        if (document.baseURI) {
            hostUri = document.baseURI;
        }
        var socketUri = hostUri.replace('http', 'ws') + "ws";
        socket = new WebSocket(socketUri);
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

module.exports = (__webpack_require__(1))(130);

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

module.exports = (__webpack_require__(1))(127);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(132);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(134);

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
        var hostUri = "http://localhost:60217/";
        if (document.baseURI) {
            hostUri = document.baseURI;
        }
        var socketUri = hostUri.replace('http', 'ws') + "b4w_react";
        this.socket = new WebSocket(socketUri);
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

module.exports = (__webpack_require__(1))(133);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(138);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(67);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmY0NjU0ZDRmZWY1NDg0ZmYzZjgiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL01vZGFsLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9DaGF0LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NTR08udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NoYXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0RvdGEyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9GQVEudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xrLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9nb3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9SdWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lci9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9May50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDNkJBO0FBQUEsbUJBQW1CO0FBQ25CLHVHQUF1RztBQUN2RyxvR0FBb0c7QUFFN0YsSUFBTSxjQUFjLEdBQUc7SUFDMUIsU0FBUyxFQUFFLFVBQUMsSUFBVyxFQUFFLFFBQWdCLElBQUssUUFBa0I7UUFDNUQsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixTQUFTLEVBQUUsSUFBSTtRQUNmLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLEdBSjZDLENBSTdDO0lBQ0QsVUFBVSxFQUFFLGNBQU0sUUFBa0I7UUFDaEMsSUFBSSxFQUFFLG9CQUFvQjtLQUM3QixHQUZpQixDQUVqQjtDQUNKLENBQUM7QUFFRixtQkFBbUI7QUFDbkIsNkhBQTZIO0FB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Q0FDckIsQ0FBQzs7Ozs7OztBQ2pCRiwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZjQ2NTRkNGZlZjU0ODRmZjNmOCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxTdGF0ZSB7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgbW9kYWxUZXh0OiBzdHJpbmc7XHJcbiAgICBjYW5DbG9zZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuXHJcbmludGVyZmFjZSBTaG93TW9kYWxBY3Rpb24geyBcclxuICAgIHR5cGU6ICdTSE9XX01PREFMX0FDVElPTicsXHJcbiAgICBtb2RhbFRleHQ6IHN0cmluZztcclxuICAgIGNhbkNsb3NlOmJvb2xlYW47XHJcbn1cclxuaW50ZXJmYWNlIENsb3NlTW9kYWxBY3Rpb24geyBcclxuICAgIHR5cGU6ICdDTE9TRV9NT0RBTF9BQ1RJT04nIFxyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gU2hvd01vZGFsQWN0aW9uIHwgQ2xvc2VNb2RhbEFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBzaG93TW9kYWw6ICh0ZXh0OnN0cmluZywgY2FuQ2xvc2U6Ym9vbGVhbikgPT4gPFNob3dNb2RhbEFjdGlvbj4geyBcclxuICAgICAgICB0eXBlOiAnU0hPV19NT0RBTF9BQ1RJT04nLFxyXG4gICAgICAgIG1vZGFsVGV4dDogdGV4dCxcclxuICAgICAgICBjYW5DbG9zZTogY2FuQ2xvc2VcclxuICAgIH0sXHJcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiA8Q2xvc2VNb2RhbEFjdGlvbj57IFxyXG4gICAgICAgIHR5cGU6ICdDTE9TRV9NT0RBTF9BQ1RJT04nXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IE1vZGFsU3RhdGUgPSB7IHNob3c6IGZhbHNlLCBtb2RhbFRleHQ6ICcnLCBjYW5DbG9zZTogdW5kZWZpbmVkIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxNb2RhbFN0YXRlPiA9IChzdGF0ZTogTW9kYWxTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NIT1dfTU9EQUxfQUNUSU9OJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxUZXh0OiBhY3Rpb24ubW9kYWxUZXh0LFxyXG4gICAgICAgICAgICAgICAgY2FuQ2xvc2U6IGFjdGlvbi5jYW5DbG9zZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0NMT1NFX01PREFMX0FDVElPTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2RhbFRleHQ6IHN0YXRlLm1vZGFsVGV4dCxcclxuICAgICAgICAgICAgICAgIGNhbkNsb3NlOiBzdGF0ZS5jYW5DbG9zZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL01vZGFsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcbiAgICBnZXRTZXJ2ZXJEYXRhOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHVzZXJJbmZvOiBVc2VyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgc3RlYW1pZDogc3RyaW5nO1xyXG4gICAgcGVyc29uYW5hbWU6IHN0cmluZztcclxuICAgIHByb2ZpbGV1cmw6IHN0cmluZztcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgYXZhdGFybWVkaXVtOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJmdWxsOiBzdHJpbmc7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEdldFVzZXJJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnR0VUX1VTRVJfSU5GTycsXHJcbn1cclxuaW50ZXJmYWNlIFNldFVzZXJJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0VUX1VTRVJfSU5GTycsXHJcbiAgICB1c2VySW5mbzogVXNlcjtcclxufVxyXG5pbnRlcmZhY2UgRGVsZXRlVXNlckluZm9BY3Rpb24geyBcclxuICAgIHR5cGU6ICdERUxFVEVfVVNFUl9JTkZPJ1xyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEdldFVzZXJJbmZvQWN0aW9uIHwgU2V0VXNlckluZm9BY3Rpb24gfCBEZWxldGVVc2VySW5mb0FjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBnZXRVc2VySW5mbzogKCk6IEFwcFRodW5rQWN0aW9uPEdldFVzZXJJbmZvQWN0aW9uIHwgU2V0VXNlckluZm9BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAvLyBPbmx5IGxvYWQgZGF0YSBpZiBpdCdzIHNvbWV0aGluZyB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgKGFuZCBhcmUgbm90IGFscmVhZHkgbG9hZGluZylcclxuICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvZ2V0L0dldFVzZXJJbmZvYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfVVNFUl9JTkZPJywgdXNlckluZm86IGRhdGEgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgOi1TIGluIHVzZXInLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnR0VUX1VTRVJfSU5GTycgfSk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlVXNlckluZm86ICgpOiBBcHBUaHVua0FjdGlvbjxEZWxldGVVc2VySW5mb0FjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4geyBcclxuICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvYXV0aC9TaWduT3V0YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfVVNFUl9JTkZPJyB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6LVMgaW4gdXNlcicsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogVXNlclN0YXRlID0geyB1c2VySW5mbzogbnVsbCwgZ2V0U2VydmVyRGF0YTogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8VXNlclN0YXRlPiA9IChzdGF0ZTogVXNlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX1VTRVJfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogc3RhdGUudXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1NFVF9VU0VSX0lORk8nOlxyXG4gICAgICAgICAgICAvLyBPbmx5IGFjY2VwdCB0aGUgaW5jb21pbmcgZGF0YSBpZiBpdCBtYXRjaGVzIHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0LiBUaGlzIGVuc3VyZXMgd2UgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXNlckluZm86IGFjdGlvbi51c2VySW5mbyA/IGFjdGlvbi51c2VySW5mbyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnREVMRVRFX1VTRVJfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiB1bmxvYWRlZFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG4vLyBpbXBvcnQgY29ubmVjdGlvblVybCBmcm9tICcuLi8uLi9Tb2NrZXRDb25maWcnO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGF0U3RhdGUge1xyXG4gICAgbWVzc2FnZXM6ICAgICAgIE1lc3NhZ2VbXSB8IG51bGwsXHJcbiAgICBzaG93OiAgICAgICAgICAgYm9vbGVhbixcclxuICAgIGlzX2F1dG9zY3JvbGw6ICAgYm9vbGVhbixcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gICAgc3RlYW1JZDogICAgc3RyaW5nLFxyXG4gICAgdXNlck5hbWU6ICAgc3RyaW5nLCBcclxuICAgIG1lc3NhZ2U6ICAgIHN0cmluZywgXHJcbiAgICBkYXRlOiAgICAgICBEYXRlLFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuLy8gVXNlIEB0eXBlTmFtZSBhbmQgaXNBY3Rpb25UeXBlIGZvciB0eXBlIGRldGVjdGlvbiB0aGF0IHdvcmtzIGV2ZW4gYWZ0ZXIgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uXHJcblxyXG5pbnRlcmZhY2UgU3Vic2NyaWJlVG9NZXNzYWdlc0FjdGlvbiB7IH1cclxuaW50ZXJmYWNlIEF1dG9TY3JvbGxUcmlnZ2VyQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnQVVUT19TQ1JPTExfVFJJR0dFUicsXHJcbn1cclxuaW50ZXJmYWNlIFNob3dUcmlnZ2VyQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnU0hPV19UUklHR0VSJyxcclxufVxyXG5pbnRlcmZhY2UgU2VuZE1lc3NhZ2VBY3Rpb24geyBcclxuICAgIHN0ZWFtSWQ6ICBzdHJpbmcsXHJcbiAgICB1c2VyTmFtZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogIHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgR2V0TWVzc2FnZUFjdGlvbiB7IFxyXG4gICAgdHlwZTogJ0dFVF9NRVNTQUdFJyxcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBHZXRNZXNzYWdlQWN0aW9uIHwgU2hvd1RyaWdnZXJBY3Rpb24gfCBBdXRvU2Nyb2xsVHJpZ2dlckFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0gICAgXHJcbi8vIENvbm5lY3Rpb24gdG8gc2VydmVyXHJcbi8vIENvbmZpZyBXZWJTb2NrZXRcclxuXHJcbnZhciBzb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgc3Vic2NyaWJlVG9NZXNzYWdlczogKCk6IEFwcFRodW5rQWN0aW9uPFN1YnNjcmliZVRvTWVzc2FnZXNBY3Rpb24gfCBHZXRNZXNzYWdlQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gdmFyIGhvc3RVcmkgPSBcIndzOi8vbG9jYWxob3N0OjYwMjE3L3dzXCI7XHJcbiAgICAgICAgdmFyIGhvc3RVcmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NjAyMTcvXCI7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuYmFzZVVSSSkge1xyXG4gICAgICAgICAgICBob3N0VXJpID0gZG9jdW1lbnQuYmFzZVVSSTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNvY2tldFVyaSA9IGhvc3RVcmkucmVwbGFjZSgnaHR0cCcsICd3cycpICsgXCJ3c1wiO1xyXG4gICAgICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoc29ja2V0VXJpKTtcclxuICAgICAgICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGVhbUlkOiAgICBpdGVtcy5JdGVtMSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogICBpdGVtcy5JdGVtMixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAgICBpdGVtcy5JdGVtMyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAgICAgICBuZXcgRGF0ZShpdGVtcy5JdGVtNClcclxuICAgICAgICAgICAgICAgIH0gYXMgTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnR0VUX01FU1NBR0UnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgRXJyb3IgOi1TIGluIENoYXQnLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzb2NrZXQub25vcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKFwiR2V0TWVzc2FnZXNcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC53YXNDbGVhbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ch0L7QtdC00LjQvdC10L3QuNC1INC30LDQutGA0YvRgtC+INGH0LjRgdGC0L4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntCx0YDRi9CyINGB0L7QtdC00LjQvdC10L3QuNGPJyk7IC8vINC90LDQv9GA0LjQvNC10YAsIFwi0YPQsdC40YJcIiDQv9GA0L7RhtC10YHRgSDRgdC10YDQstC10YDQsFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQmtC+0LQ6ICcgKyBldmVudC5jb2RlICsgJyDQv9GA0LjRh9C40L3QsDogJyArIGV2ZW50LnJlYXNvbik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0J7RiNC40LHQutCwOlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2VuZE1lc3NhZ2U6IChzdGVhbUlkOiBzdHJpbmcsIHVzZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPFNlbmRNZXNzYWdlQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe3N0ZWFtSWQsIHVzZXJOYW1lLCBtZXNzYWdlfSkpO1xyXG4gICAgfSxcclxuICAgIHNob3dUcmlnZ2VyOiAoKSA9PiA8U2hvd1RyaWdnZXJBY3Rpb24+eyB0eXBlOiAnU0hPV19UUklHR0VSJyB9LFxyXG4gICAgYXV0b1Njcm9sbFRyaWdnZXI6ICgpID0+IDxBdXRvU2Nyb2xsVHJpZ2dlckFjdGlvbj57IHR5cGU6ICdBVVRPX1NDUk9MTF9UUklHR0VSJyB9LFxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBDaGF0U3RhdGUgPSB7IG1lc3NhZ2VzOiBudWxsLCBzaG93OiBmYWxzZSwgaXNfYXV0b3Njcm9sbDogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENoYXRTdGF0ZT4gPSAoc3RhdGU6IENoYXRTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0dFVF9NRVNTQUdFJzpcclxuICAgICAgICAgICAgdmFyIGRhdGE6IE1lc3NhZ2VbXTtcclxuICAgICAgICAgICAgaWYoIXN0YXRlLm1lc3NhZ2VzKXtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBbYWN0aW9uLm1lc3NhZ2VdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdGUubWVzc2FnZXMubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzdGF0ZS5tZXNzYWdlcy5jb25jYXQoYWN0aW9uLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzdGF0ZS5tZXNzYWdlcy5jb25jYXQoYWN0aW9uLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBzdGF0ZS5zaG93LFxyXG4gICAgICAgICAgICAgICAgaXNfYXV0b3Njcm9sbDogc3RhdGUuaXNfYXV0b3Njcm9sbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdTSE9XX1RSSUdHRVInOlxyXG4gICAgICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcclxuICAgICAgICAgICAgICAgIHNob3c6ICFzdGF0ZS5zaG93LFxyXG4gICAgICAgICAgICAgICAgaXNfYXV0b3Njcm9sbDogc3RhdGUuaXNfYXV0b3Njcm9sbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdBVVRPX1NDUk9MTF9UUklHR0VSJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBzdGF0ZS5zaG93LFxyXG4gICAgICAgICAgICAgICAgaXNfYXV0b3Njcm9sbDogIXN0YXRlLmlzX2F1dG9zY3JvbGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ2hhdC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29udGFpbmVyL0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IERvdGEyIGZyb20gJy4vY29tcG9uZW50cy9Eb3RhMic7XHJcbmltcG9ydCBDU0dPIGZyb20gJy4vY29tcG9uZW50cy9DU0dPJztcclxuaW1wb3J0IFJ1bGVzIGZyb20gJy4vY29tcG9uZW50cy9SdWxlcyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi9jb21wb25lbnRzL0ZBUSc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4vY29tcG9uZW50cy9XYXJuaW5nJztcclxuaW1wb3J0IExrIGZyb20gJy4vY29tcG9uZW50cy9Mayc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4vY29tcG9uZW50cy9DaGF0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gPExheW91dD5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9eyBIb21lIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvZG90YTInIGNvbXBvbmVudD17IERvdGEyIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvY3NnbycgY29tcG9uZW50PXsgQ1NHTyB9IC8+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nL3J1bGVzJyBjb21wb25lbnQ9eyBSdWxlcyB9IC8+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2ZhcScgY29tcG9uZW50PXsgRkFRIH0gLz5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvbGsvOnVzZXJJZD8nIGNvbXBvbmVudD17IExrIH0gLz5cclxuPC9MYXlvdXQ+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVwID0gV2FybmluZztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGF0ID0gQ2hhdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZShwYXJhbXMubG9jYXRpb24pKTtcclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17IGJhc2VuYW1lIH0gY29udGV4dD17IHJvdXRlckNvbnRleHQgfSBsb2NhdGlvbj17IHBhcmFtcy5sb2NhdGlvbi5wYXRoIH0gY2hpbGRyZW49eyByb3V0ZXMgfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCBDUzpHTyE8L2gxPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9DU0dPLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XHJcbmltcG9ydCAqIGFzIENoYXRTdGF0ZSBmcm9tICcuLi9zdG9yZS9DaGF0JztcclxuaW1wb3J0ICogYXMgVXNlclN0YXRlIGZyb20gJy4uL3N0b3JlL1VzZXInO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZVByb3BzIHtcclxuICAgIHVzZXI6IFVzZXJTdGF0ZS5Vc2VyU3RhdGUsXHJcbiAgICBjaGF0OiBDaGF0U3RhdGUuQ2hhdFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgQ2hhdFN0YXRlID1cclxuICAgIElTdGF0ZVByb3BzXHJcbiAgICAvL0NoYXRTdGF0ZS5DaGF0U3RhdGUgICAgICAgICAgICAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgJiB0eXBlb2YgQ2hhdFN0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgLy8gLi4uIHBsdXMgYWN0aW9uIGNyZWF0b3JzIHdlJ3ZlIHJlcXVlc3RlZFxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjsgICAgICAgICAgICAgIC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVyc1xyXG5cclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2hhdFN0YXRlLCB7fT4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy9nZXQgcHJlbG9hZCBtZXNzYWdlcyBmcm9tIHNlcnZlclxyXG4gICAgICAgIHRoaXMucHJvcHMuc3Vic2NyaWJlVG9NZXNzYWdlcygpO1xyXG4gICAgICAgIC8vZW5hYmxlIGNoYXRcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dUcmlnZ2VyKCk7XHJcbiAgICAgICAgLy9zY3JvbGxcclxuICAgICAgICB0aGlzLnByb3BzLmF1dG9TY3JvbGxUcmlnZ2VyKCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGF0LmlzX2F1dG9zY3JvbGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5jaGF0X21lc3NhZ2VzKTtcclxuICAgICAgICAgICAgbm9kZS5zY3JvbGxUb3AgPSBub2RlLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVzc2FnZXNFbmQ6IGFueTtcclxuXHJcbiAgICBLZXlIYW5kbGVyID0gKGtleTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGlmKGtleS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZihrZXkuYWx0S2V5IHx8IGtleS5jdHJsS2V5IHx8IGtleS5zaGlmdEtleSB8fCBrZXkubWV0YUtleSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TWVzc2FnZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmKGVsZW0udmFsdWUudHJpbSgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHByb3BzLnVzZXIudXNlckluZm8hO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRNZXNzYWdlKHVzZXJJbmZvLnN0ZWFtaWQsIHVzZXJJbmZvLnBlcnNvbmFuYW1lLCBlbGVtLnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNoYXQgPSBwcm9wcy5jaGF0O1xyXG4gICAgICAgIGlmKCFjaGF0LnNob3cpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHByb3BzLnVzZXIudXNlckluZm87XHJcbiAgICAgICAgbGV0IHVzZXJOYW1lID0gXCJhbm9uXCI7XHJcbiAgICAgICAgbGV0IGRpc2FibGVkQXR0cmlidXQ7XHJcbiAgICAgICAgbGV0IGRpc2FibGVkQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgaWYodXNlckluZm8pIHtcclxuICAgICAgICAgICAgdXNlck5hbWUgPSB1c2VySW5mby5wZXJzb25hbmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNhYmxlZEF0dHJpYnV0ICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGlzYWJsZWRDbGFzc05hbWUgICA9ICcgZGlzYWJsZWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlucHV0SFRNTCA9IDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgaW5wdXQtY2hhdFwiICsgZGlzYWJsZWRDbGFzc05hbWV9IGlkPVwiaW5wdXRNZXNzYWdlXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1Li4uXCIgbWF4TGVuZ3RoPXs1MH0gb25LZXlEb3duPXt0aGlzLktleUhhbmRsZXJ9IGRpc2FibGVkPXtkaXNhYmxlZEF0dHJpYnV0fS8+O1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxNZXNzYWdlcyA9IG51bGw7XHJcbiAgICAgICAgaWYoY2hhdC5tZXNzYWdlcykgdGVtcGxNZXNzYWdlcyA9IGNoYXQubWVzc2FnZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAoeyBzdGVhbUlkOiBzdGVhbUlkLCB1c2VyTmFtZTogdXNlck5hbWUsIG1lc3NhZ2U6IG1lc3NhZ2UsIGRhdGU6IGRhdGUgfSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlfSBrZXk9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIDxNZXNzYWdlIG1lc3NhZ2U9e3tzdGVhbUlkOiBzdGVhbUlkLCB1c2VyTmFtZTp1c2VyTmFtZSwgbWVzc2FnZTptZXNzYWdlLCBkYXRlOmRhdGUgfX0ga2V5PXtpbmRleH0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1tZXNzYWdlc1wiIG9uU2Nyb2xsPXt0aGlzLlNjcm9sbEhhbmRsZXJ9IHJlZj0nY2hhdF9tZXNzYWdlcyc+XHJcbiAgICAgICAgICAgICAgICB7dGVtcGxNZXNzYWdlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvbiBpbnB1dC1jaGF0LWFkZG9uXCI+e3VzZXJOYW1lICsgXCI6XCJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpbnB1dEhUTUwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIC8vUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD5cclxuICAgIFNjcm9sbEhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHZhciBkaXYgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGF0LmlzX2F1dG9zY3JvbGwpIHtcclxuICAgICAgICAgICAgLy8gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPD0gZGl2LnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gKGRpdi5zY3JvbGxUb3AgKyBkaXYub2Zmc2V0SGVpZ2h0ICsgNDApIC0gZGl2LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0IDwgMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dG9TY3JvbGxUcmlnZ2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gKGRpdi5zY3JvbGxUb3AgKyBkaXYub2Zmc2V0SGVpZ2h0ICsgNDApIC0gZGl2LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dG9TY3JvbGxUcmlnZ2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGU6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiAgIHN0YXRlLnVzZXIgIGFzIFVzZXJTdGF0ZS5Vc2VyU3RhdGUsXHJcbiAgICAgICAgY2hhdDogICBzdGF0ZS5jaGF0ICBhcyBDaGF0U3RhdGUuQ2hhdFN0YXRlLFxyXG4gICAgfSBhcyBJU3RhdGVQcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIC8vKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jaGF0LCBcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIENoYXRTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4gKShDaGF0KSBhcyB0eXBlb2YgQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9DaGF0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBob3N0VXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjYwMjE3L1wiO1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmJhc2VVUkkpIHtcclxuICAgICAgICAgICAgaG9zdFVyaSA9IGRvY3VtZW50LmJhc2VVUkk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzb2NrZXRVcmkgPSBob3N0VXJpLnJlcGxhY2UoJ2h0dHAnLCAnd3MnKSArIFwiYjR3X3JlYWN0XCI7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHNvY2tldFVyaSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQud2FzQ2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDQt9Cw0LrRgNGL0YLQviDRh9C40YHRgtC+Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J7QsdGA0YvQsiDRgdC+0LXQtNC40L3QtdC90LjRjycpOyAvLyDQvdCw0L/RgNC40LzQtdGALCBcItGD0LHQuNGCXCIg0L/RgNC+0YbQtdGB0YEg0YHQtdGA0LLQtdGA0LBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC0OiAnICsgZXZlbnQuY29kZSArICcg0L/RgNC40YfQuNC90LA6ICcgKyBldmVudC5yZWFzb24pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0J7RiNC40LHQutCwOlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV0dG9uSGFuZGxlcigwKX0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5idXR0b25IYW5kbGVyKDEpfT5QaGFzZTE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1dHRvbkhhbmRsZXIoMil9PlBoYXNlMjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV0dG9uSGFuZGxlcigzKX0+UmVzdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDE+SGVsbG8sIGRvdGEyITwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAncmVkIHNvbGlkIDVweCcsIHdpZHRoOic4MTBweCcsIGhlaWdodDonNjEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJCNFcvTXlTZWNvbmRQcm9qZWN0Lmh0bWxcIiB3aWR0aD0nODAwcHgnIGhlaWdodD0nNjAwcHgnIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19PjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBidXR0b25IYW5kbGVyID0gKHN3aXRjaERpZ2l0Om51bWJlcikgPT4ge1xyXG4gICAgICAgIHN3aXRjaChzd2l0Y2hEaWdpdCl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe3N0YXRlOiAnYWRkX3VzZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGF5ZXJOdW1iZXIsIHN0ZWFtSWQ6IHRoaXMucGxheWVyTnVtYmVyfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe3N0YXRlOiAnc3RhcnRfcGhhc2UxJ30pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtzdGF0ZTogJ3N0YXJ0X3BoYXNlMid9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7c3RhdGU6ICdyZXN0YXJ0J30pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNvY2tldDogV2ViU29ja2V0O1xyXG4gICAgcGxheWVyTnVtYmVyID0gMDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Eb3RhMi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+SGVsbG8sIEZBUSE8L2gxPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9GQVEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBVc2VyU3RhdGUgZnJvbSAnLi4vc3RvcmUvVXNlcic7XHJcbmltcG9ydCAqIGFzIExrU3RhdGUgZnJvbSAnLi4vc3RvcmUvTGsnO1xyXG5pbXBvcnQgKiBhcyBNb2RhbFN0YXRlIGZyb20gJy4uL3N0b3JlL01vZGFsJztcclxuXHJcbmludGVyZmFjZSBJU3RhdGVQcm9wcyB7XHJcbiAgICB1c2VyOiAgIFVzZXJTdGF0ZS5Vc2VyU3RhdGUsXHJcbiAgICBsazogICAgIExrU3RhdGUuTGtTdGF0ZSxcclxufVxyXG5pbnRlcmZhY2UgSURpc3BhdGNoUHJvcHMge1xyXG4gICAgZ2V0VXNlckluZm86ICAgICgpID0+IGFueSxcclxuICAgIGNsb3NlTW9kYWw6ICAgICAoKSA9PiBhbnksXHJcbiAgICBzaG93TW9kYWw6ICAgICAgKHRleHQ6IHN0cmluZywgY2FuQ2xvc2U6IGJvb2xlYW4pID0+IGFueSxcclxuICAgIGdldExrSW5mbzogICAgICAodXNlcklkOiBzdHJpbmcpID0+IGFueSxcclxuICAgIHNldE93bmVyOiAgICAgICAob3duZXI6IGJvb2xlYW4pID0+IGFueSxcclxufVxyXG5cclxudHlwZSBVc2VyUHJvcHMgPVxyXG4gICAgLy9Vc2VyU3RhdGUuVXNlclN0YXRlICAgICAgICAgICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAvLyYgdHlwZW9mIFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgIC8vJiB0eXBlb2YgTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgSVN0YXRlUHJvcHNcclxuICAgICYgSURpc3BhdGNoUHJvcHNcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7dXNlcklkOiBzdHJpbmcgfCBudWxsfT47ICAgICAgICAgIC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVycyAgIFxyXG5cclxuY2xhc3MgTGsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB7fT4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHVzZXJJZCAgPSBwcm9wcy5tYXRjaC5wYXJhbXMudXNlcklkO1xyXG4gICAgICAgIGxldCBvd25lciAgID0gZmFsc2U7XHJcbiAgICAgICAgaWYoIXVzZXJJZCkge1xyXG4gICAgICAgICAgICB1c2VySWQgPSBwcm9wcy51c2VyLnVzZXJJbmZvIS5zdGVhbWlkO1xyXG4gICAgICAgICAgICBvd25lciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLnNldE93bmVyKG93bmVyKTtcclxuICAgICAgICBwcm9wcy5nZXRMa0luZm8odXNlcklkKTtcclxuICAgICAgICAvLyB0aGlzLmdldFVzZXJJbmZvKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgLy8gICAgICAgICAvL2RvaW5nIHNvbWV0aGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYoZGF0YSA9PT0gbnVsbCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLnNob3dNb2RhbCgnU29tZSB0cm91YmxlIHdoZW4gZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyXFxuU29ycnksIHRyeSBhZ2FpbiBsYXRlcicsIHRydWUpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYoZGF0YSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMuc2hvd01vZGFsKCdTb21lIHRyb3VibGUgd2l0aCBjb25uZWN0aW9uIHdpdGggc2VydmVyXFxuU29ycnksIHRyeSBhZ2FpbiBsYXRlcicsIHRydWUpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvLyAgPFJlZGlyZWN0IHRvPXsnLyd9IC8+XHJcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XHJcbiAgICAgICAgLy8gICAgIC8vIGxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvIGZyb20gbGshPC9oMT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGU6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiAgIHN0YXRlLnVzZXIgIGFzIFVzZXJTdGF0ZS5Vc2VyU3RhdGUsXHJcbiAgICAgICAgbGs6ICAgICBzdGF0ZS5sayAgICBhcyBMa1N0YXRlLkxrU3RhdGUsXHJcbiAgICB9IGFzIElTdGF0ZVByb3BzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRVc2VySW5mbzogICAgKCkgPT4gZGlzcGF0Y2goVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzLmdldFVzZXJJbmZvKCkpLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6ICAgICAoKSA9PiBkaXNwYXRjaChNb2RhbFN0YXRlLmFjdGlvbkNyZWF0b3JzLmNsb3NlTW9kYWwoKSksXHJcbiAgICAgICAgc2hvd01vZGFsOiAgICAgICh0ZXh0OiBzdHJpbmcsIGNhbkNsb3NlOiBib29sZWFuKSA9PiBkaXNwYXRjaChNb2RhbFN0YXRlLmFjdGlvbkNyZWF0b3JzLnNob3dNb2RhbCh0ZXh0LCBjYW5DbG9zZSkpLFxyXG4gICAgICAgIGdldExrSW5mbzogICAgICAodXNlcklkOiBzdHJpbmcpID0+IGRpc3BhdGNoKExrU3RhdGUuYWN0aW9uQ3JlYXRvcnMuZ2V0TGtJbmZvKHVzZXJJZCkpLFxyXG4gICAgICAgIHNldE93bmVyOiAgICAgICAob3duZXI6IGJvb2xlYW4pID0+IGRpc3BhdGNoKExrU3RhdGUuYWN0aW9uQ3JlYXRvcnMuc2V0T3duZXIob3duZXIpKSxcclxuICAgIH0gYXMgSURpc3BhdGNoUHJvcHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTGspIGFzIHR5cGVvZiBMaztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9May50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2xvZ2luLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy9hcGkvYXV0aC9zaWduaW4nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY29tbXVuaXR5LmVkZ2VjYXN0LnN0ZWFtc3RhdGljLmNvbS9wdWJsaWMvaW1hZ2VzL3NpZ25pbnRocm91Z2hzdGVhbS9zaXRzXzAxLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gbG9naW5cIi8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ291dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7dXNlck5hbWU6c3RyaW5nLCBsb2dvdXRIYW5kbGVyOmFueX0sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJsb2dvdXQtdXNlck5hbWUgbmF2YmFyLWJyYW5kXCJcclxuICAgICAgICAgICAgaHJlZj0nL2FwaS9hdXRoL3NpZ25vdXQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubG9nb3V0SGFuZGxlcigpfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudXNlck5hbWV9XHJcbiAgICAgICAgPC9hPjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAqIGFzIENoYXRTdGF0ZSBmcm9tICcuLi9zdG9yZS9DaGF0JztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgbWVzc2FnZTogQ2hhdFN0YXRlLk1lc3NhZ2UsIFxyXG4gICAga2V5OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7c3RlYW1JZCwgdXNlck5hbWUsIG1lc3NhZ2UsIGRhdGV9ID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+e3N0ZWFtSWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT57ZGF0ZS50b1N0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8YT57dXNlck5hbWV9OiA8L2E+PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9NZXNzYWdlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBMb2dpbk9yTG9nb3V0OkpTWC5FbGVtZW50IH0sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3AnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUgY29sbGFwc2VkJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScjbWVudS1uYXZiYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLkxvZ2luT3JMb2dvdXQgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT5SdWxldHRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1saW5rIG5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZScgaWQ9J21lbnUtbmF2YmFyJz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXZiYXItbmF2Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGV4YWN0IHRvPXsgJy8nIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsgJy9kb3RhMicgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc+PC9zcGFuPiBkb3RhMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsgJy9jc2dvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5Jz48L3NwYW4+IGNzZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz17ICcvcnVsZXMnIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWluZm8tc2lnbic+PC9zcGFuPiBydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGV4YWN0IHRvPXsgJy9mYXEnIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nPjwvc3Bhbj4gZmFxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbywgcnVsZXMhPC9oMT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvUnVsZXMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIE1vZGFsU3RhdGUgZnJvbSAnLi4vc3RvcmUvTW9kYWwnO1xyXG5cclxudHlwZSBNb2RhbFByb3BzID1cclxuICAgIE1vZGFsU3RhdGUuTW9kYWxTdGF0ZSAgICAgICAgICAgICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAmIHR5cGVvZiBNb2RhbFN0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgLy8gLi4uIHBsdXMgYWN0aW9uIGNyZWF0b3JzIHdlJ3ZlIHJlcXVlc3RlZFxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjsgICAgICAgICAgICAgIC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVyc1xyXG5cclxuY2xhc3MgV2FybmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNb2RhbFByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdG9SZW5kZXIgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2hvdykge1xyXG4gICAgICAgICAgICB0b1JlbmRlciA9IHRoaXMudG9SZW5kZXIoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLkFkZEluLCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZW5kZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckRPTSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtQmFja2dyb3VuZCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgZWxlbU1vZGFsICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXdhcm5pbmcnKTtcclxuICAgICAgICBpZihlbGVtQmFja2dyb3VuZCAmJiBlbGVtTW9kYWwpe1xyXG4gICAgICAgICAgICBlbGVtQmFja2dyb3VuZC5jbGFzc05hbWUgPSBlbGVtQmFja2dyb3VuZC5jbGFzc05hbWUuc3BsaXQoJyBpbicpWzBdO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpLCA1MDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1Nb2RhbC5jbGFzc05hbWUgPSBlbGVtTW9kYWwuY2xhc3NOYW1lLnNwbGl0KCcgaW4nKVswXSwgNzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEFkZEluID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1CYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBlbGVtTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXdhcm5pbmcnKTtcclxuICAgICAgICBpZihlbGVtQmFja2dyb3VuZCAmJiBlbGVtTW9kYWwpe1xyXG4gICAgICAgICAgICBlbGVtQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XHJcbiAgICAgICAgICAgIGVsZW1CYWNrZ3JvdW5kLmNsYXNzTmFtZSArPSAnIGluJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ZWxlbU1vZGFsLmNsYXNzTmFtZSArPSAnIGluJzt9LCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBidXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5wcm9wcy5jYW5DbG9zZTtcclxuICAgICAgICBsZXQgbmFtZU9mQ2xhc3MgPSAnYnRuIGJ0bi1wcmltYXJ5IHBvcC11cC1idXR0b24gJyxcclxuICAgICAgICAgICAgb25CdXR0b25EbyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBuYW1lT2ZDbGFzcyArPSBidXR0b24gPT0gdHJ1ZSA/ICdhY3RpdmUnIDogJ2Rpc2FibGVkJztcclxuICAgICAgICBpZihidXR0b24gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvbkJ1dHRvbkRvID0gKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJET00oKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5wcm9wcy5jbG9zZU1vZGFsLCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17bmFtZU9mQ2xhc3N9IG9uQ2xpY2s9e29uQnV0dG9uRG99PlxyXG4gICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgfVxyXG4vLyAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNhbkNsb3NlID8gdGhpcy5wcm9wcy5jbG9zZU1vZGFsIDogdW5kZWZpbmVkfSAgXHJcbiAgICBwcml2YXRlIHRvUmVuZGVyID0gKCkgPT4geyByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZHJvcCBmYWRlXCIgaWQ9J3BvcC11cC1jb250YWluZXInID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtb2RhbCBmYWRlJ30gdGFiSW5kZXg9ey0xfSBpZD1cInBvcC11cC13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3tkaXNwbGF5OidibG9jayd9fSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nIG1vZGFsLXNtJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+V2FybmluZzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vZGFsVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5idXR0b24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUubW9kYWwsIFxyXG4gICBNb2RhbFN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoV2FybmluZykgYXMgdHlwZW9mIFdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvV2FybmluZy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZNZW51JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nO1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi9jb21wb25lbnRzL1dhcm5pbmcnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgVXNlclN0YXRlIGZyb20gJy4uL3N0b3JlL1VzZXInO1xyXG5pbXBvcnQgKiBhcyBNb2RhbFN0YXRlIGZyb20gJy4uL3N0b3JlL01vZGFsJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcclxuXHJcbmludGVyZmFjZSBJU3RhdGVQcm9wcyB7XHJcbiAgICB1c2VyOiAgICAgICBVc2VyU3RhdGUuVXNlclN0YXRlLFxyXG4gICAgcm91dGluZzogICAgdHlwZW9mIHJvdXRlclJlZHVjZXIsXHJcbiAgICBjaGlsZHJlbjogICBFbGVtZW50W10sXHJcbn1cclxuaW50ZXJmYWNlIElEaXNwYXRjaFByb3BzIHtcclxuICAgIGdldFVzZXJJbmZvOiAgICAgICAgKCkgPT4gYW55LFxyXG4gICAgZGVsZXRlVXNlckluZm86ICAgICAoKSA9PiBhbnksXHJcbiAgICBjbG9zZU1vZGFsOiAgICAgICAgICgpID0+IGFueSxcclxuICAgIHNob3dNb2RhbDogICAgICAgICAgKHRleHQ6IHN0cmluZywgY2FuQ2xvc2U6IGJvb2xlYW4pID0+IGFueSxcclxufVxyXG5cclxudHlwZSBVc2VyUHJvcHMgPVxyXG4gICAgLy9Vc2VyU3RhdGUuVXNlclN0YXRlICAgICAgICAgICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAvLyYgdHlwZW9mIFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgIC8vJiB0eXBlb2YgTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgSVN0YXRlUHJvcHNcclxuICAgICYgSURpc3BhdGNoUHJvcHNcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47ICAgICAgICAgIC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVycyAgIFxyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJQcm9wcyB8IGFueSwge30+IHtcclxuICAgIC8vIHJlYWRvbmx5IHdhcm5pbmdDb21wb25lbnQgPSBuZXcgV2FybmluZygpO1xyXG4gICAgLy8gaWYgdXNlciBub3QgbG9naW4sIHJlbmRlciBsb2dpbiBjb21wb25lbnRcclxuICAgIExvZ2luT3JMb2dvdXQ6IGFueTtcclxuICAgIC8vIGNoZWNrIGF1dGggb2YgdXNlclxyXG4gICAgdXNlcklzQXV0aFByb21pc2U6ICgpID0+IFByb21pc2U8Ym9vbGVhbiB8IG51bGwgfCB2b2lkPiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYC9hcGkvZ2V0L1VzZXJJc0F1dGhgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIDotUyBpbiB1c2VyJywgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiB1c2VyIGxvZ2luLCBnZXQgaGlzIGRhdGEgZnJvbSBzdGVhbVxyXG4gICAgLy8gYW5kIHJlbmRlciB3YWl0IGNvbXBvbmVudFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJJc0F1dGhQcm9taXNlKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgICAgIC8vIHByb3BzLnNob3dNb2RhbCgnUGxlYXNlIHdhaXQgZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGF0YSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVHJvdWJsZUxvZ2luKCdUcm91YmxlIHdoZW4gbG9naW5pbmcgZnJvbSBTdGVhbVxcblBsZWFzZSByZXRyeSBsb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRyb3VibGVMb2dpbignVHJvdWJsZSB3aXRoIGNvbm5lY3Rpb25cXG5QbGVhc2UgcmV0cnkgbG9naW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ2luT3JMb2dvdXQgPSA8TG9naW4gLz47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgOi1TIGluIGxheW91dC1jb21wb25lbnREaWRNb3VudCcsIGVycik7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyB3aGVuIGRhdGEgaXMgZ290dGVuLCByZW5kZXIgaGlzIHVzZXIgbmFtZVxyXG4gICAgLy8gYW5kIGxvZ291dCBjb21wb25lbnRcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBVc2VyUHJvcHMpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLnVzZXIuZ2V0U2VydmVyRGF0YSAhPSB0aGlzLnByb3BzLnVzZXIuZ2V0U2VydmVyRGF0YVxyXG4gICAgICAgICAgICAgICAgJiYgbmV4dFByb3BzLnVzZXIuZ2V0U2VydmVyRGF0YSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy51c2VyLnVzZXJJbmZvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9naW5PckxvZ291dCA9IDxMb2dvdXQgdXNlck5hbWU9e25leHRQcm9wcy51c2VyLnVzZXJJbmZvLnBlcnNvbmFuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBsb2dvdXRIYW5kbGVyPXsgdGhpcy5wcm9wcy5kZWxldGVVc2VySW5mbyB9IFxyXG4gICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVHJvdWJsZUxvZ2luKCdUcm91YmxlIHdoZW4gZ2V0dGluZyBkYXRhIGZyb20gU3RlYW1cXG5QbGVhc2UgcmV0cnkgbG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb250YW50LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGNvbC1zbS0zIGNvbnRhaW5lci1uYXZtZW51LWNoYXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZWluZXItbmF2bWVudSBjb2wtc20tMTIgbmF2bWVudS1jb2wtc20tMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSBMb2dpbk9yTG9nb3V0PXsgdGhpcy5Mb2dpbk9yTG9nb3V0IH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgY29udGFpbmVyLWNoYXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyBSZWFjdC5jcmVhdGVFbGVtZW50KENoYXQpIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdyZWFjdC1jaGF0JyBzdHlsZT17e2hlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnfX0+bG9hZGluZy4uLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05IGNvbnRhaW5lci1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgVHJvdWJsZUxvZ2luKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVVc2VySW5mbygpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd01vZGFsKHN0ciwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Mb2dpbk9yTG9nb3V0ID0gPExvZ2luIC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlOiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogICAgICAgc3RhdGUudXNlciAgICAgIGFzIFVzZXJTdGF0ZS5Vc2VyU3RhdGUsXHJcbiAgICAgICAgcm91dGluZzogICAgc3RhdGUucm91dGluZyAgIGFzIHR5cGVvZiByb3V0ZXJSZWR1Y2VyLFxyXG4gICAgfSBhcyBJU3RhdGVQcm9wcztcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VXNlckluZm86ICAgICAgICAoKSA9PiBkaXNwYXRjaChVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnMuZ2V0VXNlckluZm8oKSksXHJcbiAgICAgICAgZGVsZXRlVXNlckluZm86ICAgICAoKSA9PiBkaXNwYXRjaChVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnMuZGVsZXRlVXNlckluZm8oKSksXHJcbiAgICAgICAgY2xvc2VNb2RhbDogICAgICAgICAoKSA9PiBkaXNwYXRjaChNb2RhbFN0YXRlLmFjdGlvbkNyZWF0b3JzLmNsb3NlTW9kYWwoKSksXHJcbiAgICAgICAgc2hvd01vZGFsOiAgICAgICAgICAodGV4dDogc3RyaW5nLCBjYW5DbG9zZTogYm9vbGVhbikgPT4gZGlzcGF0Y2goTW9kYWxTdGF0ZS5hY3Rpb25DcmVhdG9ycy5zaG93TW9kYWwodGV4dCwgY2FuQ2xvc2UpKSxcclxuICAgIH0gYXMgSURpc3BhdGNoUHJvcHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4vLyhzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlciwgICAgIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbi8vVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTGF5b3V0KSBhcyB0eXBlb2YgTGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb250YWluZXIvTGF5b3V0LnRzeCIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMa1N0YXRlIHtcclxuICAgIGludmVudG9yeTogSXRlbVtdIHwgbnVsbCxcclxuICAgIGJldHM6IEJldFtdIHwgbnVsbCxcclxuICAgIGdldFNlcnZlckRhdGE6IGJvb2xlYW4gfCBudWxsLFxyXG4gICAgb3duZXI6IGJvb2xlYW4gfCBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJldCB7XHJcbiAgICByZXN1bHQ6IGJvb2xlYW4sXHJcbiAgICBkYXRlOiBEYXRlLFxyXG4gICAgaXRlbXM6IEl0ZW1bXSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcsXHJcbiAgICBpbWFnZVVybDogc3RyaW5nLFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuLy8gVXNlIEB0eXBlTmFtZSBhbmQgaXNBY3Rpb25UeXBlIGZvciB0eXBlIGRldGVjdGlvbiB0aGF0IHdvcmtzIGV2ZW4gYWZ0ZXIgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uXHJcblxyXG5pbnRlcmZhY2UgR2V0TGtJbmZvQWN0aW9uIHsgXHJcbiAgICB0eXBlOiAnR0VUX0xLX0lORk8nLFxyXG59XHJcbmludGVyZmFjZSBTZXRMa0luZm9BY3Rpb24geyBcclxuICAgIHR5cGU6ICdTRVRfTEtfSU5GTycsXHJcbiAgICBiZXRzOiBCZXRbXSxcclxuICAgIGl0ZW1zOiBJdGVtW10sXHJcbn1cclxuaW50ZXJmYWNlIFNldExrT3duZXJBY3Rpb24geyBcclxuICAgIHR5cGU6ICdTRVRfTEtfT1dORVInLFxyXG4gICAgb3duZXI6IGJvb2xlYW4sXHJcbn1cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBHZXRMa0luZm9BY3Rpb24gfCBTZXRMa0luZm9BY3Rpb24gfCBTZXRMa093bmVyQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGdldExrSW5mbzogKHVzZXJJZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248R2V0TGtJbmZvQWN0aW9uIHwgU2V0TGtJbmZvQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL2dldC9HZXRVc2VyU3RhdGU/dXNlcklkUGFyYW09JHt1c2VySWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIFxyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0xLX0lORk8nLCBiZXRzOiBkYXRhLmJldHMsIGl0ZW1zOiBkYXRhLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgOi1TIGluIGxrJywgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgLy8gRW5zdXJlIHNlcnZlci1zaWRlIHByZXJlbmRlcmluZyB3YWl0cyBmb3IgdGhpcyB0byBjb21wbGV0ZVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9MS19JTkZPJyB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRPd25lcjogKG93bmVyOiBib29sZWFuKSA9PiA8U2V0TGtPd25lckFjdGlvbj4ge1xyXG4gICAgICAgIHR5cGU6ICdTRVRfTEtfT1dORVInLFxyXG4gICAgICAgIG93bmVyOiBvd25lcixcclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogTGtTdGF0ZSA9IHsgaW52ZW50b3J5OiBudWxsLCBiZXRzOiBudWxsLCBnZXRTZXJ2ZXJEYXRhOiBudWxsLCBvd25lcjogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8TGtTdGF0ZT4gPSAoc3RhdGU6IExrU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdHRVRfTEtfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnk6IHN0YXRlLmludmVudG9yeSxcclxuICAgICAgICAgICAgICAgIGJldHM6IHN0YXRlLmJldHMsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogc3RhdGUub3duZXIsXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdTRVRfTEtfSU5GTyc6XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG91dC1vZi1vcmRlciByZXNwb25zZXMuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnk6IGFjdGlvbi5pdGVtcyA/IGFjdGlvbi5pdGVtcyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiZXRzOiBhY3Rpb24uYmV0cyA/IGFjdGlvbi5iZXRzIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG93bmVyOiBzdGF0ZS5vd25lcixcclxuICAgICAgICAgICAgICAgIGdldFNlcnZlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnU0VUX0xLX09XTkVSJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeTogc3RhdGUuaW52ZW50b3J5LFxyXG4gICAgICAgICAgICAgICAgYmV0czogc3RhdGUuYmV0cyxcclxuICAgICAgICAgICAgICAgIG93bmVyOiBhY3Rpb24ub3duZXIsXHJcbiAgICAgICAgICAgICAgICBnZXRTZXJ2ZXJEYXRhOiBzdGF0ZS5nZXRTZXJ2ZXJEYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0xrLnRzIiwiaW1wb3J0ICogYXMgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XHJcbmltcG9ydCAqIGFzIFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0ICogYXMgQ2hhdCBmcm9tICcuL0NoYXQnO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIG1vZGFsOiBNb2RhbC5Nb2RhbFN0YXRlLFxyXG4gICAgdXNlcjogVXNlci5Vc2VyU3RhdGUsXHJcbiAgICBjaGF0OiBDaGF0LkNoYXRTdGF0ZSxcclxufVxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIG1vZGFsOiBNb2RhbC5yZWR1Y2VyLFxyXG4gICAgdXNlcjogVXNlci5yZWR1Y2VyLFxyXG4gICAgY2hhdDogQ2hhdC5yZWR1Y2VyLFxyXG59O1xyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9