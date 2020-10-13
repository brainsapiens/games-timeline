import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    display: inline-grid;
    grid-gap: 2px;

    span {
        display: block;
        width: 16px;
        height: 16px;
        padding: 1px;
        background: radial-gradient(#eee, #ccc);
        border: 2px outset #ccc;
        border-radius: 2px;
        
        &[data-key="w"] {
            grid-area: 1 / 2 / 2 / 3;
            transform: translateX(-4px);
        }
        &[data-key="a"] {
            grid-area: 2 / 1 / 3 / 2;
        }
        &[data-key="s"] {
            grid-area: 2 / 2 / 3 / 3;
        }
        &[data-key="d"] {
            grid-area: 2 / 3 / 3 / 4;
        }
        
        &::before {
            display: block;
            color: #333;
            content: attr(data-key);
            font-size: 8px;
            line-height: 8px;
            text-transform: uppercase;
        }
    }
`;

class AppLogo extends React.Component {
    render () {
        return (
            <Logo>
                <span data-key="w" />
                <span data-key="a" />
                <span data-key="s" />
                <span data-key="d" />
            </Logo>
        )
    }
}

export default AppLogo;
