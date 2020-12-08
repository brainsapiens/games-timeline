import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';

import globals from '../globals';

const {pages} = globals;

const Pages = () => {
    const {about} = pages;

    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path={about.path} exact component={About}/>
        </Switch>
    )
};

export default Pages;
