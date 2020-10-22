import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-right: 1.6rem;
    padding-left: 1.6rem;
`;

class UiContainer extends Component {
    render () {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default UiContainer;
