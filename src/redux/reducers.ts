import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    // reducers list
})

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);