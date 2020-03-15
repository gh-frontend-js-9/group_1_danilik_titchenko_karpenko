import React from 'react';
import { Link } from 'react-router-dom';

const defaultValue: {
    size: string,
    color: string
} = {
    size: "2rem",
    color: "black"
}

export type SiteLogoProps = {
    size?: string,
    color?: string
}

export default function SiteLogo(props: SiteLogoProps) {
    return (
        <Link
            className="button_logo"
            style={{
                fontSize: props.size || defaultValue.size,
                color: props.color || defaultValue.color
            }}
            to="/">Bahram
        </Link>
    )
}