import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import AppCopyright from '../AppCopyright';

const Footer = styled.footer`
    display: grid;
    align-items: center;
    height: var(--bar-height);
`;

class AppFooter extends React.Component {
    render () {
        return (
            <Footer role="contentinfo">
                <Container>
                    <AppCopyright />
                </Container>
            </Footer>
        )
    }
}

export default AppFooter;
