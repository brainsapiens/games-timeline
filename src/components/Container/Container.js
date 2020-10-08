import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-right: 16px;
    padding-left: 16px;
`;

class AppMain extends React.Component {
    render () {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default AppMain;
