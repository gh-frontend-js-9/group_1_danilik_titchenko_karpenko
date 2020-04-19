export const ADD_ESSENTIALS_POSTS: string = "ADD_ESSENTIALS_POSTS";

export const addEssentialsPosts: (posts:object[]) => {type:string, payload:object[]} = (posts) => {
    return {
        type: ADD_ESSENTIALS_POSTS,
        payload: posts
    }
};
