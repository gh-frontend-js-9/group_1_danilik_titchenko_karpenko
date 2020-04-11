import React from 'react';
import ArticleBlock from './article';
import ReadingListCarousel from './list';

export default function () {
    return (
        <>
            <ReadingListCarousel indent></ReadingListCarousel>
            <ArticleBlock></ArticleBlock>
        </>
    )
}