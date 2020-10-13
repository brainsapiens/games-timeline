import React from 'react';
import styled from 'styled-components';

import AppLogo from '../AppLogo';

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
                <TitleText>Games Timeline</TitleText>
            </Title>
        )
    }
}

export default AppTitle;
