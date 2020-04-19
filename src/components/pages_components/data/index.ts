import { faFacebook, faTwitter, faInstagram, faVk, faPinterest, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export const social_links_data: Array<{
    icon: IconDefinition,
    href: string
}> = [
    {
        icon: faVk,
        href: "#"
    },
    {
        icon: faPinterest,
        href: "#"
    },
    {
        icon: faInstagram,
        href: "#"
    },
    {
        icon: faTwitter,
        href: "#"
    },
    {
        icon: faFacebook,
        href: "#"
    },
]

export const nav_links_data: Array<{
    text: string,
    href: string
}> = [
    {
        text: "Popular",
        href: "/popular"
    },
    {
        text: "New",
        href: "/new"
    },
    {
        text: "Reading list",
        href: "/list"
    },
    {
        text: "Topics",
        href: "/topics"
    },
    {
        text: "Subscribe",
        href: "/subscribe"
    },
]
