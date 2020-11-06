import { combineReducers, createStore } from 'redux';

import modalWindowReducer from 'components/modalWindow/modalWindowReducer';

const reducers = combineReducers({
    modalWindow: modalWindowReducer,
});

const store = createStore(reducers);

export default store;
