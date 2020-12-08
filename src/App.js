import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import './App.css';

import AppHeader from './components/App/Header';
import AppMain from './components/App/Main';
import AppFooter from './components/App/Footer';

import globals from './globals';
import themes from './themes';

const {app: {basename}} = globals;

function App () {
    return (
        <Router basename={basename}>
            <ThemeProvider theme={themes.light}>
                <AppHeader />
                <AppMain />
                <AppFooter />
            </ThemeProvider>
        </Router>
    );
}

export default App;
