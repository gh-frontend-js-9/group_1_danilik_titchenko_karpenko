import React from 'react';
import { PostType } from '../../article_block/types';
import ArticleLayoutPhoto from './article';
import { useSelector } from 'react-redux';
import { randomInteger } from '../../../utils/number';

type ArticleListPropsType = {
    className?: string,
    limit?: number,
    description?: boolean,
    row?: boolean
}

export default function (props: ArticleListPropsType) {
    let essentials: PostType = useSelector((state: any) => state.essentialsPosts);
    let popular: PostType = useSelector((state: any) => state.popularPosts);
    let freelance: PostType = useSelector((state: any) => state.freelancePosts);

    let category_array: PostType[] = [essentials, popular, freelance];

    function get_random_category(){
        switch(randomInteger(0, category_array.length)){
            case 0:
                return essentials;
            case 1:
                return popular;
            case 2:
                return freelance;
            default:
                return freelance;
        }
    }

    let data = get_random_category();
    return (
        data.docs !== undefined ? (
            <article className={props.className || ""}>
                <ArticleLayoutPhoto
                    row={
                        props.row ? true : false
                    }
                    limit={props.limit}
                    data={data}
                    description={
                        props.description ? true : false
                    }
                />
            </article>
        ): <div></div>
    )
}