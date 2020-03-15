import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}