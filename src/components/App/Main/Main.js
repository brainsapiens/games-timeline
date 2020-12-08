import React from 'react';
import styled from 'styled-components';

import Pages from '../../../pages';

const Main = styled.main`
    background-color: var(--color-lightest);
`;

const AppMain = () => (
    <Main role='main'>
        <Pages />
    </Main>
);

export default AppMain;
