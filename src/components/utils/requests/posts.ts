import { get_articles_proffessional_blog, ArticlesCategory } from "../api_utils/articles";
import { addFreelancePosts } from "../../../redux/posts/freelance/actions";
import { addEssentialsPosts } from "../../../redux/posts/essentials/actions";
import { addPopularPosts } from "../../../redux/posts/popular/actions";
import { useDispatch } from "react-redux";

export default function () {
    const dispatch = useDispatch();

    get_articles_proffessional_blog(ArticlesCategory.FREELANCE).then((response) => {
        dispatch(addFreelancePosts(response.data))
    })

    get_articles_proffessional_blog(ArticlesCategory.ESSENTIALS).then((response) => {
        dispatch(addEssentialsPosts(response.data));
    })

    get_articles_proffessional_blog(ArticlesCategory.POPULAR).then((response) => {
        dispatch(addPopularPosts(response.data));
    })
}