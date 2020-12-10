import React from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppTitle from '../Title';
import AppNav from '../Nav';
import AppThemeSwitcher from '../ThemeSwitcher';

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

const HeaderSwitcher = styled.div`
  margin-left: auto;
`;

const AppHeader = () => {
    return (
        <Header role='banner'>
            <UiContainer>
                <HeaderRow>
                    <AppTitle/>
                    <AppNav/>
                    <HeaderSwitcher>
                        <AppThemeSwitcher/>
                    </HeaderSwitcher>
                </HeaderRow>
            </UiContainer>
        </Header>
    );
};

export default AppHeader;
