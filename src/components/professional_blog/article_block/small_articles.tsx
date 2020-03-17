import React from 'react';
import { Header, Body, Wrapper, ListWrapper } from '../../universal_templates/cards/partials';
import Card from '../../universal_templates/cards';
import { Link } from 'react-router-dom';
import { SmallArticlesType } from './types';

export default function SmallArticles(props: {
    list: Array<SmallArticlesType>
}){
    return (
        <Wrapper className="card__grid-wrapper_four">
        {
            props.list.map((small: SmallArticlesType) => {
                return (
                    <ListWrapper key={small._id}>
                        <Card className="card_shadow">
                            <Header>
                                <Link
                                    to="#"
                                    className="button_element button_element_color-gray">
                                    {small.title}
                                </Link>
                            </Header>
                            <Body className="button_element button_element_color-black button_element_hover">{small.text}</Body>
                        </Card>
                    </ListWrapper>
                )
            })
        }
    </Wrapper>
    )
}