import { createStore, combineReducers, compose } from 'redux';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
    // reducers list
})

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export const store = createStore(
    rootReducer,
    composeEnhancers()
);