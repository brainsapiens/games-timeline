import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
    padding: 4px 8px;
    background-color: #000;
    
    &.expansion {
        padding-top: 0;
        padding-bottom: 0;
        filter: invert(1);
    }
`;

const Title = styled.h6`
    color: #fff;
    font-size: 13px;
    font-weight: unset;
    white-space: nowrap;
`;

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    transition: all .1s;
    
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const Release = styled.time`
    margin-bottom: 2px;
    color: #999;
    font-size: 11px;
    white-space: nowrap;
`;

class GameBadge extends React.Component {
    render () {
        const {title, url, release, expansion} = this.props.game
        return (
            <Badge className={expansion ? 'expansion' : ''}>
                <Title>
                    <Link href={url} target='_blank' dangerouslySetInnerHTML={{ __html: title }} />
                </Title>
                <Release>{release}</Release>
            </Badge>
        )
    }
}

export default GameBadge;
