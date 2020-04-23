import React, { Component } from 'react';
import { social_links_data } from '../../data/index';
import { SocialIconGray } from '../../../universal_templates/buttons/social_icons';
import './author_info.scss';

class AuthorInfo extends Component {
    render() {
        return (
        <div className="author-info">
            <div className="author-info__img"></div>
            <h3 className="author-info__title">TOMAS LAURINAVICIUS</h3>
            <p className="author-info__text">Hi, my name is Daniel, I'm the CTO here at Kinsta.</p>
            <div className="social-icons-block">
            {
                social_links_data.map((value, index) => {
                    return (
                        <SocialIconGray
                            key={index}
                            icon={value.icon}
                            href={value.href}
                        />
                    )
                })
            }
            </div>
        </div>
        )
    }
}

export default AuthorInfo;