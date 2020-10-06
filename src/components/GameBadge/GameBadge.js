import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
    padding: 4px 8px;
    background-color: #000;
    color: #fff;
    
    &.expansion {
        padding-top: 0;
        padding-bottom: 0;
        filter: invert(1);
    }
    
    &.muted {
        margin: 0 -8px; 
        background: repeating-linear-gradient(
          -45deg,
          #ccc,
          #ccc 10px,
          #eee 10px,
          #eee 20px
        );
        color: #000;
        opacity: .25;
        
        a {
            color: #000;
        }
        
        &.expansion {
            padding-top: 4px;
            padding-bottom: 4px;
            filter: invert(0);
        }
    }
`;

const Title = styled.h6`
    color: #fff;
    font-size: 13px;
    font-weight: unset;
    white-space: nowrap;
    
    > a {
        color: #fff;
        text-decoration: none;
        transition: all var(--transition-duration-base);
        
        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
`;

const Footer = styled.footer`
    > time {
        color: #999;
        font-size: 11px;
        white-space: nowrap;
    }
`;

class GameBadge extends React.Component {
    render () {
        const {title, url, release, expansion} = this.props.game

        return (
            <Badge className={[expansion ? 'expansion' : '', !release ? 'muted' : '']}>
                <Title>
                    <a href={url} rel="noopener noreferrer" target='_blank' dangerouslySetInnerHTML={{ __html: title }} />
                </Title>
                <Footer>
                    <time>{release}</time>
                </Footer>
            </Badge>
        )
    }
}

export default GameBadge;
