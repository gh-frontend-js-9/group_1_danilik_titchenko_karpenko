import React from 'react';
import 'normalize.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ArticleBlock from '../components/professional_blog/article_block';
import ArticleImageBlock from '../components/professional_blog/reading_list';
import HeaderCarousel from '../components/professional_blog/header_carousel';
import Section from '../components/universal_templates/blocks/section';

export default function () {
    return (
        <>
            <Section>
                <Header />
                <HeaderCarousel />
            </Section>
            <Section className="block__body">
                <ArticleBlock />
                <ArticleImageBlock />
            </Section>
            <Footer />
        </>
    )
}