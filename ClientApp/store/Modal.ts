import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ModalState {
    show: boolean;
    modalText: string;
    canClose?: boolean;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface ShowModalAction { 
    type: 'SHOW_MODAL_ACTION',
    modalText: string;
    canClose:boolean;
}
interface CloseModalAction { 
    type: 'CLOSE_MODAL_ACTION' 
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ShowModalAction | CloseModalAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    showModal: (text:string, canClose:boolean) => <ShowModalAction> { 
        type: 'SHOW_MODAL_ACTION',
        modalText: text,
        canClose: canClose
    },
    closeModal: () => <CloseModalAction>{ 
        type: 'CLOSE_MODAL_ACTION'
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: ModalState = { show: false, modalText: '', canClose: undefined };

export const reducer: Reducer<ModalState> = (state: ModalState, action: KnownAction) => {
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
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};
