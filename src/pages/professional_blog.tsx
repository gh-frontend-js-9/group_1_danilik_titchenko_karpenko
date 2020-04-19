import React, { useEffect } from 'react';
import ArticleBlock from '../components/professional_blog/article_block';
import ArticleImageBlock from '../components/professional_blog/reading_list';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeaderCarousel from '../components/professional_blog/header_carousel';
import BlockBody from '../components/universal_templates/blocks/body';
import { useDispatch } from 'react-redux';
import { get_articles_proffessional_blog, ArticlesCategory } from '../components/utils/api_utils/articles';
import { addFreelancePosts } from '../redux/posts/freelance/actions';
import { addPopularPosts } from '../redux/posts/popular/actions';
import { addEssentialsPosts } from '../redux/posts/essentials/actions';

export default function () {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = "Professional blog";
    })

    get_articles_proffessional_blog(ArticlesCategory.FREELANCE).then((response) => {
        dispatch(addFreelancePosts(response.data))
    })

    get_articles_proffessional_blog(ArticlesCategory.ESSENTIALS).then((response) => {
        dispatch(addEssentialsPosts(response.data));
    })

    get_articles_proffessional_blog(ArticlesCategory.POPULAR).then((response) => {
        dispatch(addPopularPosts(response.data));
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