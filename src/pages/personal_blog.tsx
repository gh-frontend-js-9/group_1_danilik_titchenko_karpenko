import React, { useEffect } from 'react';
import Section from '../components/universal_templates/blocks/section';
import BlockBody from '../components/universal_templates/blocks/body';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import SubmitForm from '../components/popular/subscribe_form';
import ArticleList from '../components/professional_blog/reading_list/article';

export default function () {
    useEffect(() => {
        document.title = "Personal blog"
    })
    return (
        <>
            <NavHeader />
            <BlockBody>
                <Section indent>
                    <ArticleList row />
                </Section>
                <SubmitForm />
            </BlockBody>
            <Footer />
        </>
    )
}