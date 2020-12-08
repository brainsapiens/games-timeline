import React from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppTitle from '../Title';
import AppNav from '../Nav';

const Header = styled.header`
    background-color: var(--color-darkest);
    
    a {
        color: var(--color-lightest);
    }
`;
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    height: var(--bar-height);
    color: var(--color-lightest);
`;

const AppHeader = () => (
    <Header role='banner'>
        <UiContainer>
            <HeaderInner>
                <AppTitle />
                <AppNav />
            </HeaderInner>
        </UiContainer>
    </Header>
);

export default AppHeader;
