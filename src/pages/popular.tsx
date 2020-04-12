import React, { useEffect } from 'react';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import ReadingList from '../components/professional_blog/reading_list/list';
import HeaderReadingList from '../components/popular/reading_list';
import PopularArticles from '../components/popular/articles_list';
import SubmitForm from "../components/popular/subscribe_form";
import BlockBody from '../components/universal_templates/blocks/body';

export default function () {
    useEffect(() => {
        document.title = "Popular"
    })

    return (
        <>
            <NavHeader />
            <HeaderReadingList className="header_indent" />
            <BlockBody>
                <div>
                    <PopularArticles />
                    <ReadingList />
                    <SubmitForm />
                </div>
                <Footer />
            </BlockBody>
        </>
    )
}