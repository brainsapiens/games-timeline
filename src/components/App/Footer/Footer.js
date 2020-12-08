import React from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppCopyright from '../Copyright';

const Footer = styled.footer`
    display: grid;
    align-items: center;
    height: var(--bar-height);
    background-color: var(--color-lightest);
  
    position: relative;
    z-index: 101;
    top: -1px;
    border-top: 1px solid var(--color-light);
`;

const AppFooter = () => (
    <Footer role='contentinfo'>
        <UiContainer>
            <AppCopyright />
        </UiContainer>
    </Footer>
);

export default AppFooter;
