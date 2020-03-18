import React from 'react';
import Block, { } from '../../universal_templates/blocks/block';
import { Title, Image, Body } from '../../universal_templates/cards/partials';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../../universal_templates/cards';

import Fetcher, { FETCHER_MODE } from '../../utils/Fetcher/index';

type ImageType = {
    alt: string,
    src: string
}

type Test = {
    img: ImageType,
    title: string
}

export default function (props: {
    list: Array<Test>
}) {
    return (
        <Block>
            <Title>Reading list</Title>
            <Carousel centerMode centerSlidePercentage={20} showStatus={false} showIndicators={false} showThumbs={false}>
                {
                    props.list.map((value: Test) => {
                        return (
                            <Card style={{ margin: "1rem" }}>
                                <Image
                                    alt={value.img.alt}
                                    src={value.img.src}
                                />
                                <Body>{value.title}</Body>
                            </Card>
                        )
                    })
                }
            </Carousel>
        </Block>
    )
}