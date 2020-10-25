import React from 'react';
import styled from 'styled-components';

const Content = styled.article`
    max-width: 80rem;
    padding: calc(var(--indent-base) * 2);
    
    section {
        &:not(:last-child) {
            margin-bottom: calc(var(--indent-base) * 2);
        }
    }
    
    h2,
    h3 {
        margin-bottom: var(--indent-base);
    }
    
    p,
    ol,
    ul {
        &:not(:last-child) {
            margin-bottom: var(--indent-base);
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
            margin-bottom: calc(var(--indent-base) / 2);
        }
    }
`;

const UiContent = ({children}) => (
    <Content>
        {children}
    </Content>
);

export default UiContent;
