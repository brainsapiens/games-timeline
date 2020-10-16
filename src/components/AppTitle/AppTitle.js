import React from 'react';
import styled from 'styled-components';

import AppLogo from '../AppLogo';

import globals from '../../globals';

const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: var(--font-weight-base);
    word-spacing: -.6rem;
`;
const TitleText = styled.p`
    margin-left: 1.2rem;
    
`;

class AppTitle extends React.Component {
    render () {
        return (
            <Title>
                <AppLogo />
                <TitleText>{globals.app.title}</TitleText>
            </Title>
        )
    }
}

export default AppTitle;
