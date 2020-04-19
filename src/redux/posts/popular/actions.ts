export const ADD_POPULAR_POSTS: string = "ADD_POPULAR_POSTS";

export const addPopularPosts: (posts:object[]) => {type:string, payload:object[]} = (posts) => {
    return {
        type: ADD_POPULAR_POSTS,
        payload: posts
    }
};
