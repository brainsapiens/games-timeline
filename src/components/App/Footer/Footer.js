import React from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppCopyright from '../Copyright';

const Footer = styled.footer`
  position: relative;
  z-index: 102;
  display: grid;
  align-items: center;
  height: var(--bar-height);
  background-color: ${props => props.theme.appFooter.backgroundColor};

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.appFooter.borderColor};
  }
`;

const AppFooter = () => (
    <Footer role='contentinfo'>
        <UiContainer>
            <AppCopyright/>
        </UiContainer>
    </Footer>
);

export default AppFooter;
