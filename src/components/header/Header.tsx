import React from 'react';
import SiteLogo, { } from '../universal_templates/buttons/site_logo';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SocialIconWhite } from '../universal_templates/buttons/social_icons';
import { social_links_data } from '../data';
import './Header.scss';

export default () => (
    <header className="header">
        <div className="header-social-block">
            {
                social_links_data.map((value, index) => {
                    return (
                        <SocialIconWhite 
                            key={index} 
                            href={value.href} 
                            icon={value.icon} 
                        />
                    )
                })
            }
        </div>
        <div className="header-logo">
            <SiteLogo color="main"></SiteLogo>
        </div>
        <div className="header-menu-block">
            <div className="menu-block">
                <SocialIconWhite icon={faBars}></SocialIconWhite>
            </div>
            <div className="search-block">
                <SocialIconWhite icon={faSearch}></SocialIconWhite>
            </div>
        </div>
    </header>
)