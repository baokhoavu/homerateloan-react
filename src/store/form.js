// src/store/chat.js

// import { Subject } from 'rxjs';

// const subject = new Subject();
// const initialState = {
//   status: '',
//   data: [],
//   newDataCount: 0,
//   error: ''
// };

// let state = initialState;

// const chatStore = {
//   init: () => {
//     state = {...state, newDataCount: 0}
//     subject.next(state)
//   },
//   subscribe: setState => subject.subscribe(setState),
//   sendMessage: message => {
//     state = {
//       ...state,
//       data: [...state.data, message],
//       newDataCount: state.newDataCount + 1
//     };
//     subject.next(state);
//   },
//   clearChat: () => {
//     state = {...state, data: []};
//     subject.next(state);
//   },
//   initialState
// };

// export default chatStore;

import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

export default store;
