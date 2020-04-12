import React, { useEffect } from 'react';
import ArticleBlock from '../components/professional_blog/article_block';
import ArticleImageBlock from '../components/professional_blog/reading_list';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeaderCarousel from '../components/professional_blog/header_carousel';
import BlockBody from '../components/universal_templates/blocks/body';

export default function () {
    useEffect(() => {
        document.title = "Professional blog"
    })

    return (
        <>
            <Header />
            <HeaderCarousel />
            <BlockBody>
                <ArticleBlock />
                <ArticleImageBlock />
            </BlockBody>
            <Footer />
        </>
    )
}