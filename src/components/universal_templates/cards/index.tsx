import React from 'react';
import { class_center } from './partials';

type CardPropsType = {
    children: any,
    className?: string | undefined,
    style?: React.CSSProperties,
    center?: boolean
}

export function Card(props: CardPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            className={
                props.className?
                    `${props.className} ${class_name_center} card` : `${class_name_center} card`
                }
            style={props.style}
        >
            {props.children }
        </div>
    )
}