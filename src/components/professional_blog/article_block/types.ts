export type ArticleBlock = {
    _id: string,
    title: string,
    card: ArticleBlockType
}
export type SmallArticlesType = {
    title: string,
    text: string,
    _id: string
}

type ArticleBlockType = {
    main: {
        title: string,
        author: string,
        text: string
    },
    small: Array<SmallArticlesType>
}