import { ADD_POPULAR_POSTS } from "./actions";

const defaultState: [] = [];

const popularPosts = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_POPULAR_POSTS:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};

export default popularPosts