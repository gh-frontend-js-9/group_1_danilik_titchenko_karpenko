import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
// https://www.npmjs.com/package/@fortawesome/react-fontawesome

export type SocialIconProps = {
    background: string,
    icon: FontAwesomeIconProps,
    ulr?: string
}

export function SocialIcon(props: SocialIconProps) {
    return (
        <button onClick={() => window.open(props.ulr || "#")}
            style={{ background: props.background }}
        >
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </button>
    )
}