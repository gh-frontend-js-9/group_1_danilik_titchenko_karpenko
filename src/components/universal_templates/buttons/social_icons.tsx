import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
// https://www.npmjs.com/package/@fortawesome/react-fontawesome

export type SocialIconProps = {
    background?: string,
    icon: FontAwesomeIconProps,
    ulr?: string
}

const defaultValue: {
    background: string,
    url: string
} = {
    background: "transparent",
    url: "#"
}

export function SocialIcon(props: SocialIconProps) {
    return (
        <button
            onClick={() => window.open(props.ulr || defaultValue.url)}
            style={{ background: props.background || defaultValue.background }}
        >
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </button>
    )
}