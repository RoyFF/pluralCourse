import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';

export default (
    <Route>
        <IndexRoute path="/" component={App} />
        <Route path="about" component={AboutPage} />
    </Route>
);