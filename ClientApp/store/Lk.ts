import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface LkState {
    inventory: Item[] | null,
    bets: Bet[] | null,
    getServerData: boolean | null,
    owner: boolean | null,
}

export interface Bet {
    result: boolean,
    date: Date,
    items: Item[],
}

export interface Item {
    displayName: string,
    imageUrl: string,
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface GetLkInfoAction { 
    type: 'GET_LK_INFO',
}
interface SetLkInfoAction { 
    type: 'SET_LK_INFO',
    bets: Bet[],
    items: Item[],
}
interface SetLkOwnerAction { 
    type: 'SET_LK_OWNER',
    owner: boolean,
}
// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = GetLkInfoAction | SetLkInfoAction | SetLkOwnerAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    getLkInfo: (userId: string): AppThunkAction<GetLkInfoAction | SetLkInfoAction> => (dispatch, getState) => {
        let fetchTask = fetch(`/api/get/GetUserState?userIdParam=${userId}`, {
                method: 'GET',
                credentials: "same-origin"
            }).then(response => {
                if (response.status !== 200) return undefined;
                return response.json() 
            }).then(data => {
                dispatch({ type: 'SET_LK_INFO', bets: data.bets, items: data.items });
            }).catch(function (err) {
                console.log('Error :-S in lk', err);
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'GET_LK_INFO' });
    },
    setOwner: (owner: boolean) => <SetLkOwnerAction> {
        type: 'SET_LK_OWNER',
        owner: owner,
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: LkState = { inventory: null, bets: null, getServerData: null, owner: null };

export const reducer: Reducer<LkState> = (state: LkState, action: KnownAction) => {
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
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};
