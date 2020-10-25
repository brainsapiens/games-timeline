import React from 'react';
import styled from 'styled-components';

const Content = styled.article`
    max-width: 80rem;
    padding: 3.2rem;
    
    section {
        &:not(:last-child) {
            margin-bottom: 3.2rem;
        }
    }
    
    h2,
    h3 {
        margin-bottom: 1.6rem;
    }
    
    p,
    ol,
    ul {
        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    }
    
    ol {
        list-style-type: decimal;
    }

    ul {
        list-style-type: circle;
    }

    li {
        &:not(:last-child) {
            margin-bottom: .8rem;
        }
    }
`;

const UiContent = ({children}) => (
    <Content>
        {children}
    </Content>
);

export default UiContent;
