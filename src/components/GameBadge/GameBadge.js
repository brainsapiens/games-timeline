import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
    padding: .4rem .8rem;
    background-color: #000;
    color: #fff;
    
    &.expansion {
        padding-top: 0;
        padding-bottom: 0;
        filter: invert(1);
    }
    
    &.shaded {
        margin-right: -.8rem;
        margin-left: -.8rem;
        background: repeating-linear-gradient(
          -45deg,
          #ccc,
          #ccc 12px,
          #eee 12px,
          #eee 24px
        );
        color: #000;
        opacity: .25;
        
        a {
            color: #000;
        }
        
        &.expansion {
            padding-top: .4rem;
            padding-bottom: .4rem;
            filter: invert(0);
        }
    }
`;

const Title = styled.h2`
    color: #fff;
    font-size: 1.3rem;
    font-weight: unset;
    line-height: unset;
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
        font-size: 1.1rem;
        white-space: nowrap;
    }
`;

class GameBadge extends React.Component {
    get title () {
        const {title, url} = this.props.game;
        const titleContent = url
            ? <a href={url} rel='noopener noreferrer' target='_blank' dangerouslySetInnerHTML={{ __html: title }} />
            : title;

        return (
            <Title>{titleContent}</Title>
        );
    }

    render () {
        const {release, expansion} = this.props.game

        return (
            <Badge className={[expansion ? 'expansion' : '', !release ? 'shaded' : '']}>
                {this.title}
                <Footer>
                    <time>{release}</time>
                </Footer>
            </Badge>
        )
    }
}

export default GameBadge;
