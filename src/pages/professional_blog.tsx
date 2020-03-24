import React from 'react';
import 'normalize.css';
import Header from '../components/header/Header';
import ArticleBlock from '../components/professional_blog/article_block';
import ArticleImageBlock from '../components/professional_blog/reading_list';
import Footer from '../components/footer/Footer';


export default function(){
    return (
        <>
        <Header></Header>
            <ArticleBlock/>
            <ArticleImageBlock/>
            <Footer></Footer>
        </>
    )
}