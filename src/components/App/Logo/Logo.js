import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    display: inline-grid;
    grid-gap: 2px;
    margin-right: 1.2rem;

    span {
        display: block;
        width: 16px;
        height: 16px;
        padding: 2px;
        background: radial-gradient(#eee, #ccc);
        border: 2px outset #aaa;
        border-radius: 3px;
        
        &[data-key='w'] {
            grid-area: 1 / 2 / 2 / 3;
            transform: translateX(-4px);
        }
        &[data-key='a'] {
            grid-area: 2 / 1 / 3 / 2;
        }
        &[data-key='s'] {
            grid-area: 2 / 2 / 3 / 3;
        }
        &[data-key='d'] {
            grid-area: 2 / 3 / 3 / 4;
        }
        
        &::before {
            display: block;
            color: var(--color-dark);
            content: attr(data-key);
            font-family: sans-serif;
            font-weight: var(--font-weight-title);
            font-size: 7px;
            line-height: 7px;
            text-transform: uppercase;
        }
    }
`;

const AppLogo = () => (
    <Logo>
        <span data-key='w' />
        <span data-key='a' />
        <span data-key='s' />
        <span data-key='d' />
    </Logo>
);

export default AppLogo;
