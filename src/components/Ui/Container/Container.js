import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-right: var(--indent-base);
    padding-left: var(--indent-base);
`;

const UiContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default UiContainer;
