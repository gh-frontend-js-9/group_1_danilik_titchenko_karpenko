import React, { Component } from 'react';
import ArticleCard from './article';
import { PostDocsType, PostType } from './types';

import { get_articles } from '../../utils/api_utils/articles';

export type ArticleType = {
    data: PostType
}

export class Popular extends Component<{}, ArticleType>{
    constructor(props: {}) {
        super(props);
        this.state = {
            data: {
                docs: [],
                limit: 0,
                page: 0,
                pages: 0,
                total: 0
            }
        }
        this.getPopularArticles();
    }

    getPopularArticles() {
        get_articles().then((articles) => {
            if (articles) this.setState({
                data: articles.data
            })
        })
    }

    render() {
        const { data } = this.state;
        if (data) {
            return [
                <ArticleCard data={data}></ArticleCard>,
                <ArticleCard data={data}></ArticleCard>
            ]
        } else {
            return (
                <div></div>
            )
        }
    }
}