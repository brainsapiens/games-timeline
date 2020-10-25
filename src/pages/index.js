import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';

export default () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
    </Switch>
);
