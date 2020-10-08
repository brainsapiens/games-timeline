import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import AppTitle from '../AppTitle';

const Header = styled.header`
    display: grid;
    align-items: center;
    height: var(--bar-height);
    background-color: var(--background-inverse);
    color: var(--color-inverse);
`;

class AppHeader extends React.Component {
    render () {
        return (
            <Header role="banner">
                <Container>
                    <AppTitle />
                </Container>
            </Header>
        )
    }
}

export default AppHeader;
