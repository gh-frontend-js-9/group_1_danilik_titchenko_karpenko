import { ADD_ESSENTIALS_POSTS } from "./actions";

const defaultState: [] = [];

const essentialsPosts = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_ESSENTIALS_POSTS:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};

export default essentialsPosts