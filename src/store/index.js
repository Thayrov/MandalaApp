import { applyMiddleware, combineReducers, createStore } from 'redux';

import { authReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
