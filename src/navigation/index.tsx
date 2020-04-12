import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// pages
import ProfessionalBlog from '../pages/professional_blog';
import Popular from '../pages/popular';
import BusinessBlog from '../pages/business_blog';
import PersonalBLog from '../pages/personal_blog';

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch key="switch">
                <Route key="root path" exact path="/" component={ProfessionalBlog} />
                <Route key="popular" path="/popular" component={Popular} />
                <Route key="business" path="/business" component={BusinessBlog} />
                <Route key="personal" path="/personal" component={PersonalBLog} />
            </Switch>
        </BrowserRouter>
    )
}