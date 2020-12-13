import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppTitle from '../Title';
import AppNav from '../Nav';
import AppThemeSwitcher from '../ThemeSwitcher';
import TimelineSeriesSelector from '../../Timeline/SeriesSelector';

const Header = styled.header`
  position: relative;
  z-index: 102;
  display: grid;
  align-items: center;
  height: var(--bar-height);
  background-color: ${props => props.theme.appHeader.backgroundColor};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.appHeader.borderColor};
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderControl = styled.div`
  &:not(:last-child) {
    margin-right: 3.6rem;
  }
`;

const AppHeader = () => {
    const {pathname} = useLocation();

    return (
        <Header role='banner'>
            <UiContainer>
                <HeaderRow>
                    <AppTitle/>
                    <AppNav/>
                    <HeaderControls>
                        {pathname === '/' ? (
                            <HeaderControl>
                                <TimelineSeriesSelector/>
                            </HeaderControl>
                        ) : null}
                        <HeaderControl>
                            <AppThemeSwitcher/>
                        </HeaderControl>
                    </HeaderControls>
                </HeaderRow>
            </UiContainer>
        </Header>
    );
};

export default AppHeader;
