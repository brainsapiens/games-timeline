import React, {Component} from 'react';
import styled from 'styled-components';

const Content = styled.article`
    max-width: 80rem;
    padding: 3.2rem;
    
    section {
        &:not(:last-child) {
            margin-bottom: 3.2rem;
        }
    }
    
    h2 {
        margin-bottom: 1.6rem;
    }
    
    p {
        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    }
`;

class UiContent extends Component {
    render () {
        return (
            <Content>
                {this.props.children}
            </Content>
        )
    }
}

export default UiContent;
