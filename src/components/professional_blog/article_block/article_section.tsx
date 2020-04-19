import React from 'react';
import ArticleCard from './article';
import { PostType } from './types';
import { ArticlesCategory } from '../../utils/api_utils/articles';
import { useSelector } from 'react-redux';

export type ArticleType = {
    data: PostType
}

export type ArticlePropsType = {
    category: ArticlesCategory,
    title?: boolean,
    random?: boolean
    wide?: boolean
}

export const defaultStateValue: PostType = {
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0
}

function Block(props: {
    data: PostType,
    properties?: {
        random?: boolean,
        title?: boolean,
        wide?: boolean
    }
}) {
    return (
        props.data.docs !== undefined ? (
            <ArticleCard
                title={
                    props.properties?.title ? true : false
                }
                random={
                    props.properties?.random ? true : false
                }
                wide={
                    props.properties?.wide ? true : false
                }
                data={props.data}
            />
        ) : <div></div>
    )
}

export function ArticleBlock(props: ArticlePropsType) {
    let essentials: PostType = useSelector((state: any) => state.essentialsPosts);
    let popular: PostType = useSelector((state: any) => state.popularPosts);
    let freelance: PostType = useSelector((state: any) => state.freelancePosts);

    if (
        essentials !== undefined &&
        popular !== undefined &&
        freelance !== undefined
    ) {
        switch (props.category) {
            case ArticlesCategory.ESSENTIALS:
                return (
                    <Block
                        data={essentials}
                        properties={props}
                    />
                )
            case ArticlesCategory.FREELANCE:
                return (
                    <Block
                        data={freelance}
                        properties={props}
                    />
                )
            case ArticlesCategory.POPULAR:
                return (
                    <Block
                        data={popular}
                        properties={props}
                    />
                )
            default:
                return (
                    <Block data={popular}
                        properties={props}
                    />
                )
        }
    } else {
        return <div></div>
    }
}
