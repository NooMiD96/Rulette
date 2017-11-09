import './css/home.css';
import './css/navmenu.css';
import './css/chat.css';
import './css/page.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import * as H from 'history';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { ApplicationState }  from './store';
import * as RoutesModule from './routes';
import * as Layout from './container/Layout';
let routes = RoutesModule.routes;
let popup  = RoutesModule.popup;
let chat   = RoutesModule.chat;
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;

const store = configureStore(history, initialState);

function renderPopup() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <Provider store={ store }>
            { React.createElement(popup) }
        </Provider>,
        document.getElementById('react-popup')
    );
}

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                { React.createElement(Layout.default, { history: history as H.History, preRender: false } as Layout.IStateProps & Layout.IDispatchProps, routes) }
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

function renderChat() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <Provider store={ store }>
            { React.createElement(chat) }
        </Provider>,
        document.getElementById('react-chat')
    );
}

renderPopup();
renderApp();
renderChat();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
    module.hot.accept('./routes', () => {
        popup = require<typeof RoutesModule>('./routes').popup;
        renderPopup();
    });
    module.hot.accept('./routes', () => {
        chat = require<typeof RoutesModule>('./routes').chat;
        renderChat();
    });
}
