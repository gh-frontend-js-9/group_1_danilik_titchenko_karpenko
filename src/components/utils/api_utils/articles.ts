import Fetcher, { FETCHER_MODE } from "../Fetcher";

// professional blog
export async function get_articles() {
    const response: any = await new Fetcher().get("posts/?category=popular&page=1&limit=10&fields=title,category,author,description,tags,likesCount,viewsCount,featuredImage", FETCHER_MODE.NO_TOKEN)
        .then(response => { return response });
    return response.status > 199 && response.status < 400 ?
        response : null
}