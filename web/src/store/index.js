import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import userConfig from './reducers/userConfig';

// combineReducers将多个reducers合并到一起
const rootReducer = combineReducers({
    userConfig
});

export default createStore(rootReducer, compose(applyMiddleware(...[thunk])));
