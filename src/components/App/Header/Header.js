import React, {Component} from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppTitle from '../Title';
import AppNav from '../Nav';

const Header = styled.header`
    background-color: var(--background-inverse);
    
    a {
        color: var(--color-inverse);
    }
`;
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    height: var(--bar-height);
    color: var(--color-inverse);
`;

class AppHeader extends Component {
    render () {
        return (
            <Header role="banner">
                <UiContainer>
                    <HeaderInner>
                        <AppTitle />
                        <AppNav />
                    </HeaderInner>
                </UiContainer>
            </Header>
        )
    }
}

export default AppHeader;
