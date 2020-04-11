import React from 'react';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import ReadingList from '../components/professional_blog/reading_list/list';
import HeaderReadingList from '../components/popular/reading_list';
import PopularArticles from '../components/popular/articles_list';
import SubmitForm from "../components/popular/subscribe_form";

export default function () {
    return (
        <>
            <NavHeader />
            <HeaderReadingList className="header_indent" />
            <div className="block__body">
                <div>
                    <PopularArticles />
                    <ReadingList />
                    <SubmitForm />
                </div>
                <Footer />
            </div>
        </>
    )
}