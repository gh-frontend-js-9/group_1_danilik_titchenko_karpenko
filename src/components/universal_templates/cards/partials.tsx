import React from 'react';

export const class_center: string = "center-horizontal";
type CardComponentPropsType = {
    className?: string,
    style?: React.CSSProperties,
    children?: string | any
    center?: boolean
}
interface ImageComponentPropsType extends CardComponentPropsType {
    src: string,
    alt: string
}

export function Author(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <p
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__author` :
                    `${class_name_center} card__author`
            }>
            {props.children}
        </p>
    )
}

export function Body(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__body` :
                    `${class_name_center} card__body`
            }>
            {props.children}
        </div>
    )
}

export function Header(props: CardComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            style={props.style}
            className=
            {
                props.className ?
                    `${props.className} ${class_name_center} card__header` :
                    `${class_name_center} card__header`
            }>
            {props.children}
        </div>
    )
}

export function Image(props: ImageComponentPropsType) {
    let class_name_center: string = props.center ? class_center : "";
    return (
        <div
            className={
                props.className ?
                    `${props.className} ${class_name_center} card__image` :
                    `${class_name_center} card__image`}>
            <img
                src={props.src}
                alt={props.alt}
                className = "card__image_tag"
            />
        </div>
    )
}