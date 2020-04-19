import React from 'react';
import NavHeader from '../components/pages_components/header/NavHeader';
import Footer from '../components/pages_components/footer/Footer';
import SumbitComponent from '../components/pages_components/popular/subscribe_form';
import Body from '../components/universal_templates/blocks/body';

export default function () {
    return (
        <>
            <NavHeader />
            <Body>
                <SumbitComponent />
            </Body>
            <Footer />
        </>
    )
}