import * as Modal from './Modal';
import * as User from './User';
import * as Chat from './Chat';

// The top-level state object
export interface ApplicationState {
    modal: Modal.ModalState,
    user: User.UserState,
    chat: Chat.ChatState,
}
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    modal: Modal.reducer,
    user: User.reducer,
    chat: Chat.reducer,
};
// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
