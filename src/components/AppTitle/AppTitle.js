import React from 'react';
import styled from 'styled-components';

import AppLogo from '../AppLogo';

const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: var(--font-weight-base);
    word-spacing: -6px;
`;
const TitleText = styled.p`
    margin-left: 12px;
    
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
