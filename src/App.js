import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useDarkMode} from './hooks/useDarkMode';
import {themeLight, themeDark} from './themes';
import globals from './globals';

import './App.css';

import AppContext from './AppContext';
import AppHeader from './components/App/Header';
import AppMain from './components/App/Main';
import AppFooter from './components/App/Footer';

const {app: {basename}} = globals;

const GlobalStyle = createGlobalStyle`
  html:not(.js-focus-visible) :focus-visible,
  html.js-focus-visible :focus {
    outline-color: ${props => props.theme.global.outlineColor};
  }
        
  body {
    background-color: ${props => props.theme.global.backgroundColor};
    color: ${props => props.theme.global.textColor};
  }

  a {
    color: ${props => props.theme.global.linkColor};
  }
  
  h1, h2 {
    color: ${props => props.theme.global.titleColor};
  }
`;

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? themeLight : themeDark

    if (!componentMounted) {
        return null;
    }

    return (
        <AppContext.Provider value={{theme, toggleTheme}}>
            <Router basename={basename}>
                <ThemeProvider theme={themeMode}>
                    <GlobalStyle/>
                    <AppHeader/>
                    <AppMain/>
                    <AppFooter/>
                </ThemeProvider>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
