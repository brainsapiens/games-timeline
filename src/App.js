import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useDarkMode} from './hooks/useDarkMode';
import {useSeriesSelector} from './hooks/useSeriesSelector';

import globals from './globals';
import {themeLight, themeDark} from './themes';

import './App.scss';

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

const App = () => {
    const [activeTheme, toggleTheme, themeApplied] = useDarkMode();
    const theme = activeTheme === 'light' ? themeLight : themeDark

    const [selectedSeries, selectSeries, seriesApplied] = useSeriesSelector();

    if (!themeApplied && !seriesApplied) return null;

    return (
        <AppContext.Provider value={{
            activeTheme,
            toggleTheme,
            selectedSeries,
            selectSeries
        }}>
            <Router basename={basename}>
                <ThemeProvider theme={theme}>
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
