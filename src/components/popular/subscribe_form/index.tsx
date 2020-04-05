import React from 'react';
import Section from '../../universal_templates/blocks/section';
import { Header, Body } from '../../universal_templates/cards/partials';
import SubmitFormInput from './input';

export default function(){
    return (
        <Section>
            <Header>Get free web design insights...</Header>
            <Body>In your inbox, every other week. And unsubscribe in a click, if you want.</Body>
            <form action="">
                <SubmitFormInput/>
                <button>Subscribe</button>
            </form>
        </Section>
    )
}