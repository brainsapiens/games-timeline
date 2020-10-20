import React, {Component} from 'react';
import styled from 'styled-components';

// Styles
const releaseUnknownGameTitle = `
    .game-title {
        color: #000;

         > a {
            background-color: unset;
            color: #000;
            
            &:hover {
                background-color: unset;
                color: #333;
            }
        }
    }
`;

const Game = styled.article`
    position: relative;
    padding: .4rem .8rem;
    background-color: #000;
    color: #fff;
    
    &:hover {
        z-index: 300;
    }
    
    a {
        color: #fff;
    }
    
    &.expansion {
        padding-top: 0;
        padding-bottom: 0;
        background-color: unset;
        color: #000;
        
        a {
            color: #000;
        }
    }
    
    &.release-unknown {
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
        
        ${releaseUnknownGameTitle};
        
        &.expansion {
            padding-top: .4rem;
            padding-bottom: .4rem;
            
            ${releaseUnknownGameTitle};
        }
    }
`;
const Title = styled.h2`
    color: #fff;
    font-size: 1.3rem;
    font-weight: unset;
    line-height: unset;
    white-space: nowrap;
    
    ${Game}.expansion & {
        color: #000;
    }
    
    > a {
        color: #fff;
        text-decoration: none;
        
        &:hover {
            background-color: #fff;
            color: #000;
            
            ${Game}.expansion & {
                background-color: #000;
                color: #fff;
            }
        }
    }
`;
const Footer = styled.footer`
    > time {
        color: #ccc;
        font-size: 1.1rem;
        white-space: nowrap;
        
        ${Game}.expansion & {
            color: #666;
        }
    }
`;

class TimelineGame extends Component {
    get title () {
        const {title, url} = this.props.game;

        return url ? (
            <Title className='game-title'>
                <a href={url} rel='noopener noreferrer' target='_blank' dangerouslySetInnerHTML={{ __html: title }} />
            </Title>
        ) : (
            <Title className='game-title' dangerouslySetInnerHTML={{ __html: title }} />
        )
    }
    get footer () {
        const {release} = this.props.game;

        return release ? (
            <Footer>
                <time>{release}</time>
            </Footer>
        ) : null
    }

    render () {
        const {release, expansion} = this.props.game;

        return (
            <Game
                className={[
                    expansion ? 'expansion' : '',
                    !release ? 'release-unknown' : ''
                ]}
            >
                {this.title}
                {this.footer}
            </Game>
        )
    }
}

export default TimelineGame;
