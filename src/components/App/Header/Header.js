import React, {useContext} from 'react';
import styled from 'styled-components';

import AppContext from '../../../AppContext';

import UiContainer from '../../Ui/Container';
import AppTitle from '../Title';
import AppNav from '../Nav';

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

const AppHeader = () => {
    const {toggleTheme} = useContext(AppContext);

    return (
        <Header role='banner'>
            <UiContainer>
                <HeaderRow>
                    <AppTitle/>
                    <AppNav/>
                    <button
                        style={{
                            'marginLeft': 'auto',
                            'padding': '.2rem .4rem'
                        }}
                        onClick={toggleTheme}
                    >
                        Toggle theme
                    </button>
                </HeaderRow>
            </UiContainer>
        </Header>
    );
};

export default AppHeader;
