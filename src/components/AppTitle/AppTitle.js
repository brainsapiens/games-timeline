import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 25px;
    font-weight: var(--font-weight-base);
`

class AppTitle extends React.Component {
    render () {
        return (
            <Title>Games Timeline</Title>
        )
    }
}

export default AppTitle;
