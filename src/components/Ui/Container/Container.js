import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-right: 1.6rem;
    padding-left: 1.6rem;
`;

const UiContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default UiContainer;
