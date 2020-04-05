import React from 'react';
import Section from '../../universal_templates/blocks/section';
import { Image, Title, Header, Body } from '../../universal_templates/cards/partials';
import Card from '../../universal_templates/cards';
import "../../../stylesheets/universal_templates/display.scss";

export default function () {
    return (
        <Section>
            <Header>Reading List</Header>
            <Card className = "display_flex">
                <Image src="https://picsum.photos/200/250" alt="random photo" />
                <Body className = "card_header">
                    <Title>Popular</Title>
                    <p>Check out the most-read and most-shared posts from the 3layers blog.</p>
                </Body>
            </Card>
        </Section>
    )
}