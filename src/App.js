import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import AppHeader from './components/App/Header';
import AppMain from './components/App/Main';
import AppFooter from './components/App/Footer';

import global from './global';
const {app: {basename}} = global;

function App () {
    return (
        <Router basename={basename}>
            <AppHeader />
            <AppMain />
            <AppFooter />
        </Router>
    );
}

export default App;
