import { ADD_FREELANCE_POSTS } from "./actions";

const defaultState: [] = [];

const freelancePosts = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_FREELANCE_POSTS:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};

export default freelancePosts