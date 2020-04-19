import React from 'react';

import { PostType } from '../article_block/types';
import { ArticlesCategory } from '../../utils/api_utils/articles';
import { PopularCard } from '../article_block/partials';
import { ArticlePropsType } from '../article_block/article_section';
import { useSelector } from 'react-redux';


export const defaultStateValue: PostType = {
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0
}

function Block(props: {
    data: PostType
}) {
    return (
        props.data.docs !== undefined? (
            <PopularCard className="card_header-carousel" data={props.data} />
        ): <div></div>
    )
}

export default function (props: ArticlePropsType) {
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
                    />
                )
            case ArticlesCategory.FREELANCE:
                return (
                    <Block
                        data={freelance}
                    />
                )
            case ArticlesCategory.POPULAR:
                return (
                    <Block
                        data={popular}
                    />
                )
            default:
                return (
                    <Block data = {popular}/>
                )
        }
    } else {
        return <div></div>
    }
}