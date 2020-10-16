import React, {Component} from 'react';
import styled from 'styled-components';

import iconLink from '../../images/icons/link.svg';
import iconLinkOff from '../../images/icons/link-off.svg';

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

const Badge = styled.article`
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

const GameAnchor = styled.a`
    position: absolute;
    top: 0;
    right: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: .6rem;
    background-color: rgba(255, 255, 255, .75);
    color: #000;
    opacity: 0;
    transition: opacity var(--transition-duration-base);
    
    &:hover > img {
        opacity: .75;
    }
    
    > img {
        transition: opacity var(--transition-duration-base);
    }
    
    ${Badge}:hover &,
    ${Badge}.anchor & {
        opacity: 1;
    }
`;

const Title = styled.h2`
    color: #fff;
    font-size: 1.3rem;
    font-weight: unset;
    line-height: unset;
    white-space: nowrap;
    
    ${Badge}.expansion & {
        color: #000;
    }
    
    > a {
        color: #fff;
        text-decoration: none;
        
        &:hover {
            background-color: #fff;
            color: #000;
            
            ${Badge}.expansion & {
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
        
        ${Badge}.expansion & {
            color: #666;
        }
    }
`;

class GameBadge extends Component {
    constructor (props) {
        super(props);

        this.state = {
            anchor: false
        }
    }

    componentDidMount () {
        this.setGameBadgeActiveAnchor();
    }
    componentDidUpdate (prevProps, prevState) {
        console.log(this.state.value);
        console.log(prevState.value);

        if (this.state.value > prevState.value) {
            console.log('!');
        }
    }

    matchGameAnchorToHash = () => {
        return this.gameAnchor && `#${this.gameAnchor}` === document.location.hash;
    }
    setGameBadgeActiveAnchor = () => {
        const hashValue = document.location.hash.substring(1);
        const gameBadge = document.querySelector('[data-game-anchor="' + hashValue + '"]');

        if (gameBadge) {
            gameBadge.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            gameBadge.querySelector('.game-title > a').focus();
        }

        if (this.matchGameAnchorToHash()) {
            this.setState({'anchor': true});
        }
    }
    toggleGameAnchor = event => {
        const gameBadge = document.querySelector('[data-game-anchor="' + this.gameAnchor + '"]');

        if (gameBadge) {
            if (this.matchGameAnchorToHash()) {
                this.setState({'anchor': false});

                window.history.pushState('', document.title, window.location.pathname);

                event.preventDefault();
            } else {
                this.setState({'anchor': true});
            }
        }
    }
    get gameAnchor () {
        const {url} = this.props.game;

        if (url) {
            return url.replace('https://en.wikipedia.org/wiki/', '');
        }

        return null;
    }
    get gameAnchorLink () {
        const {url, release} = this.props.game;
        const icon = this.state.anchor ? iconLinkOff : iconLink;

        return (url && release) ? (
            <GameAnchor href={`#${this.gameAnchor}`} title='Game anchor' onClick={this.toggleGameAnchor}>
                <img src={icon} width='24' height='24' alt='anchor' />
            </GameAnchor>
        ) : null
    }
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
        const {anchor} = this.state;

        return (
            <Badge
                className={[
                    expansion ? 'expansion' : '',
                    !release ? 'release-unknown' : '',
                    anchor ? 'anchor' : '']}
                data-game-anchor={release ? this.gameAnchor : null}
            >
                {this.gameAnchorLink}
                {this.title}
                {this.footer}
            </Badge>
        )
    }
}

export default GameBadge;
