import React from 'react';
import { Header, Author, Body, Title, Wrapper, ListWrapper, Image } from '../../universal_templates/cards/partials';
import BlockWrapper, { } from '../../universal_templates/blocks/block';
import Card from '../../universal_templates/cards';
import ButtonLink from '../../universal_templates/buttons/link';
import { PostDocsType, PostType } from './types';
import { Link } from 'react-router-dom';

export default function (props: {
    data: PostType
}) {
    props.data.docs.sort((a: PostDocsType, b: PostDocsType) => {
        return a.likesCount + b.likesCount
    })
    return (
        <BlockWrapper>
            {
                props.data.docs.map((article, index) => {
                    if (index === 0) {
                        return (
                            <Wrapper className="card__flex-wrapper_row card__flex-wrapper">
                                <Title>{article.category[0]}</Title>
                                <ButtonLink
                                    href="#"
                                    className="button_element button_element_color-gray button_element_hover">
                                    View All
                                </ButtonLink>
                            </Wrapper>
                        )
                    }
                })
            }
            <Wrapper className="card__grid-wrapper_two">
                {
                    props.data.docs.map((article, index) => {
                        if (index === 0) {
                            return (
                                <Card className="card_shadow card_bg-blue card__flex-wrapper_column card__flex-wrapper text_color-white">
                                    <ListWrapper key={article._id}>
                                        <Image src={article.featuredImage} alt={article.slug}></Image>
                                        <Author>By {article.author} in {article.tags[0]}</Author>
                                        <Title>{article.title}</Title>
                                        <Body>{article.description}</Body>
                                    </ListWrapper>
                                </Card>
                            )
                        }
                    })
                }
                <Wrapper className="card__grid-wrapper_four">
                    {
                        props.data.docs.map((article, index) => {
                            return (
                                <Wrapper >
                                    <ListWrapper key={article._id}>
                                        <Card className="card_shadow">
                                            <Header>
                                                <Link
                                                    to="#"
                                                    className="button_element button_element_color-gray">
                                                    {article.tags[0]}
                                                </Link>
                                            </Header>
                                            <Body className="button_element button_element_color-black button_element_hover">{article.description}</Body>
                                        </Card>
                                    </ListWrapper>
                                </Wrapper>
                            )
                        })
                    }
                </Wrapper>
            </Wrapper>
        </BlockWrapper>
    )
}
