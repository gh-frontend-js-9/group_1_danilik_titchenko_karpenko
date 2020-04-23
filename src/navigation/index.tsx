import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// pages
import ProfessionalBlog from '../pages/professional_blog';
import Popular from '../pages/popular';
import BusinessBlog from '../pages/business_blog';
import PersonalBlog from '../pages/personal_blog';
import NewPage from '../pages/new';
import Subscribe from '../pages/subscribe';
import List from '../pages/list';
import Topics from '../pages/topics';

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch key="switch">
                <Route exact path="/" component={ProfessionalBlog} />
                <Route path="/popular" component={Popular} />
                <Route path="/business" component={BusinessBlog} />
                <Route path="/personal" component={PersonalBlog} />
                <Route path="/new" component={NewPage}/>
                <Route path="/subscribe" component={Subscribe}/>
                <Route path="/list" component={List}/>
                <Route path="/topics" component={Topics}/>
            </Switch>
        </BrowserRouter>
    )
}