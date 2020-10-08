import React from 'react';

import Container from '../Container'

class AppHeader extends React.Component {
    render () {
        return (
            <header role="banner">
                <Container>
                    <h1>Games Timeline</h1>
                </Container>
            </header>
        )
    }
}

export default AppHeader;
