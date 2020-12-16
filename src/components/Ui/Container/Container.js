import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-right: var(--indent-basic);
  padding-left: var(--indent-basic);
`;

const UiContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default UiContainer;
