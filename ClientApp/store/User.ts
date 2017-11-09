import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface UserState {
    getServerData: boolean | null,
    userInfo: User | null,
}
export interface User {
    steamid: string,
    personaname: string,
    profileurl: string,
    avatar: string,
    avatarmedium: string,
    avatarfull: string,
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface GetUserInfoAction { 
    type: 'GET_USER_INFO',
}
interface SetUserInfoAction { 
    type: 'SET_USER_INFO',
    userInfo: User,
}
interface DeleteUserInfoAction { 
    type: 'DELETE_USER_INFO',
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = GetUserInfoAction | SetUserInfoAction | DeleteUserInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    getUserInfo: (): AppThunkAction<GetUserInfoAction | SetUserInfoAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        let fetchTask = fetch(`/api/get/GetUserInfo`, {
            method: 'GET',
            credentials: "same-origin"
            }).then(response => {
                if (response.status !== 200) return null;
                return response.json() 
            }).then(data => {
                dispatch({ type: 'SET_USER_INFO', userInfo: data });
            }).catch(err => {
                console.log('Error :-S in user', err);
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'GET_USER_INFO' });
    },
    deleteUserInfo: (): AppThunkAction<DeleteUserInfoAction> => (dispatch, getState) => { 
        let fetchTask = fetch(`/api/auth/SignOut`, {
                method: 'GET',
                credentials: "same-origin"
            }).then(response => {
                dispatch({ type: 'DELETE_USER_INFO' });
            }).catch(err => {
                console.log('Error :-S in user', err);
            });
        addTask(fetchTask);
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: UserState = { userInfo: null, getServerData: null };

export const reducer: Reducer<UserState> = (state: UserState, action: KnownAction) => {
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
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};
