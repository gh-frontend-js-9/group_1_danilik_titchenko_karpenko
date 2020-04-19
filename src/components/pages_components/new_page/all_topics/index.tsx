import React from 'react';
import data from './data';
import { Block } from './partials';
import Section from '../../../universal_templates/blocks/section';

export default function () {
    return (
        <Section indent className = "display_flex display_flex_row display_flex_justify-content-around">
            {
                data.map((value, index) => {
                    return (
                        <Block
                            icon_class={value.icon_class}
                            text={value.text}
                            key={index}
                        />
                    )
                })
            }
        </Section>
    )
}