import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';

import global from '../globals';
const {pages} = global;

export default () => {
    const {about} = pages;

    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path={about.path} exact component={About}/>
        </Switch>
    )
};
