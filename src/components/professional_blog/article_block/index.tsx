import React from 'react';
import { Header, Author, Body, Title, Wrapper, ListWrapper } from '../../universal_templates/cards/partials';
import BlogWrapper, { } from '../../universal_templates/blocks/block';
import Card from '../../universal_templates/cards';
import ButtonLink from '../../universal_templates/buttons/link';
import { ArticleBlock } from './types';
import SmallArticles from './small_articles';

type _ArticleBlockType = {
    data: Array<ArticleBlock>
}

export default function (props: _ArticleBlockType) {
    return (
        <BlogWrapper key="Blog">
            {
                props.data.map((value: ArticleBlock) => {
                    return (
                        <ListWrapper key={value._id}>
                            <Wrapper className="card__flex-wrapper_row card__flex-wrapper">
                                <Title>{value.title}</Title>
                                <ButtonLink
                                    href="#"
                                    className="button_element button_element_color-gray button_element_hover">
                                    View All
                            </ButtonLink>
                            </Wrapper>
                            <Wrapper className="card__grid-wrapper_two">
                                <Card className="card_shadow card_bg-blue card__flex-wrapper_column card__flex-wrapper text_color-white">
                                    <Author>{value.card.main.author}</Author>
                                    <Header
                                        className="button_element button_element_hover">
                                        {value.card.main.title}
                                    </Header>
                                    <Body>{value.card.main.text}</Body>
                                </Card>
                                <SmallArticles list={value.card.small} />
                            </Wrapper>
                        </ListWrapper>
                    )
                })
            }
        </BlogWrapper>
    )
}