import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
// import connectionUrl from '../../SocketConfig';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ChatState {
    messages:       Message[] | null,
    show:           boolean,
    is_autoscroll:   boolean,
}
export interface Message {
    steamId:    string,
    userName:   string, 
    message:    string, 
    date:       Date,
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface SubscribeToMessagesAction { }
interface AutoScrollTriggerAction { 
    type: 'AUTO_SCROLL_TRIGGER',
}
interface ShowTriggerAction { 
    type: 'SHOW_TRIGGER',
}
interface SendMessageAction { 
    steamId:  string,
    userName: string,
    message:  string,
}
interface GetMessageAction { 
    type: 'GET_MESSAGE',
    message: Message,
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = GetMessageAction | ShowTriggerAction | AutoScrollTriggerAction;

// ----------------    
// Connection to server
// Config WebSocket

var socket: WebSocket;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).


export const actionCreators = {
    subscribeToMessages: (): AppThunkAction<SubscribeToMessagesAction | GetMessageAction> => (dispatch, getState) => {
        // var hostUri = "ws://localhost:60217/ws";
        var hostUri = "http://localhost:60217/";
        if(document.baseURI) {
            hostUri = document.baseURI;
        }
        var socketUri = hostUri.replace('http', 'ws') + "ws";
        socket = new WebSocket(socketUri);
        socket.onmessage = (event) => { 
            try {
                const items = JSON.parse(event.data);
                const data = {
                    steamId:    items.Item1,
                    userName:   items.Item2,
                    message:    items.Item3,
                    date:       new Date(items.Item4)
                } as Message;
                dispatch({
                    type: 'GET_MESSAGE',
                    message: data
                })
            } catch(err){
                console.log('WebSocket Error :-S in Chat', err);
            }
        };
        socket.onopen = (event) => {
            socket.send("GetMessages");
        };
        socket.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
        socket.onerror = function(error) {
            console.log("Ошибка:");
            console.log(error);
        };
    },
    sendMessage: (steamId: string, userName: string, message: string): AppThunkAction<SendMessageAction> => (dispatch, getState) => {
        socket.send(JSON.stringify({steamId, userName, message}));
    },
    showTrigger: () => <ShowTriggerAction>{ type: 'SHOW_TRIGGER' },
    autoScrollTrigger: () => <AutoScrollTriggerAction>{ type: 'AUTO_SCROLL_TRIGGER' },
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: ChatState = { messages: null, show: false, is_autoscroll: false };

export const reducer: Reducer<ChatState> = (state: ChatState, action: KnownAction) => {
    switch (action.type) {
        case 'GET_MESSAGE':
            var data: Message[];
            if(!state.messages){
                data = [action.message];
            } else {
                if(state.messages.length > 50) {
                    state.messages.shift();
                    data = state.messages.concat(action.message);
                } else{
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
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};
