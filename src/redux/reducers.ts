import { createStore, combineReducers, compose } from 'redux';

import freelancePosts from './posts/freelance/reducers';
import essentialsPosts from './posts/essentials/reducers';
import popularPosts from './posts/popular/reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
    // reducers list
    freelancePosts,
    essentialsPosts,
    popularPosts
})

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export const store = createStore(
    rootReducer,
    composeEnhancers()
);