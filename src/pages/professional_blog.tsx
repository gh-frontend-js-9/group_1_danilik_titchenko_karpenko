import React from 'react';
import ArticleBlock from '../components/professional_blog/article_block';
import ArticleImageBlock from '../components/professional_blog/reading_list';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeaderCarousel from '../components/professional_blog/header_carousel';

export default function () {
    return (
        <>
            <Header />
            <HeaderCarousel/>
            <div className = "block__body">
                <ArticleBlock />
                <ArticleImageBlock />
            </div>
            <Footer />
        </>
    )
}