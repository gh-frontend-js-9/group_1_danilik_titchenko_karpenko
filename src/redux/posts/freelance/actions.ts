export const ADD_FREELANCE_POSTS: string = "ADD_FREELACE_POSTS";

export const addFreelancePosts: (posts:object[]) => {type:string, payload:object[]} = (posts) => {
    return {
        type: ADD_FREELANCE_POSTS,
        payload: posts
    }
};
