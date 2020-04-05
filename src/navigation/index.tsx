import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import ProfessionalBlog from '../pages/professional_blog';
import Popular from '../pages/popular';

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch key="switch">
                <Route key="root path" exact path="/" component={ProfessionalBlog} />
                <Route key="popular" path="/popular" component={Popular} />
            </Switch>
        </BrowserRouter>
    )
}