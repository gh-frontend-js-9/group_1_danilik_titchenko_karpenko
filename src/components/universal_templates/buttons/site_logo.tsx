import React from 'react';
import { Link } from 'react-router-dom';

// font: size family, default font

export type SiteLogoProps = {
    size: string
}

export default function SiteLogo(props: SiteLogoProps) {
    return (
        <Link style={{ fontSize: props.size }} to="/">Bahram</Link>
    )
}