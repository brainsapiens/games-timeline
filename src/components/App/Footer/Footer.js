import React, {Component} from 'react';
import styled from 'styled-components';

import UiContainer from '../../Ui/Container';
import AppCopyright from '../Copyright';

const Footer = styled.footer`
    display: grid;
    align-items: center;
    height: var(--bar-height);
`;

class AppFooter extends Component {
    render () {
        return (
            <Footer role="contentinfo">
                <UiContainer>
                    <AppCopyright />
                </UiContainer>
            </Footer>
        )
    }
}

export default AppFooter;
