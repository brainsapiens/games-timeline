import React from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppCopyright from '../Copyright';

const Footer = styled.footer`
    display: grid;
    align-items: center;
    height: var(--bar-height);
`;

const AppFooter = () => (
    <Footer role='contentinfo'>
        <UiContainer>
            <AppCopyright />
        </UiContainer>
    </Footer>
);

export default AppFooter;
