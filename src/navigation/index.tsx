import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';

export default function NavigationPreloadManager() {
    return (
        <BrowserRouter>
            <Switch key = "switch">
                <Route key = "root path" exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}