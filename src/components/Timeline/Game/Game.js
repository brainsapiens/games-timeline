import React, {Component} from 'react';
import styled from 'styled-components';

import iconLink from '../../../images/icons/link.svg';
import iconLinkOff from '../../../images/icons/link-off.svg';

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
const Anchor = styled.a`
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
    
    ${Game}:hover &,
    ${Game}.anchor & {
        opacity: 1;
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
    constructor (props) {
        super(props);

        this.state = {
            anchor: false
        }
    }

    componentDidMount () {
        this.setAnchor();
    }

    matchAnchorToHash = () => {
        return this.anchorUrl && `#${this.anchorUrl}` === document.location.hash;
    }
    setAnchor = () => {
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

        if (this.matchAnchorToHash()) {
            this.setState({'anchor': true});
        }
    }
    toggleAnchor = event => {
        const gameBadge = document.querySelector('[data-game-anchor="' + this.anchorUrl + '"]');

        if (gameBadge) {
            if (this.matchAnchorToHash()) {
                this.setState({'anchor': false});

                window.history.pushState('', document.title, window.location.pathname);

                event.preventDefault();
            } else {
                this.setState({'anchor': true});
            }
        }
    }

    get anchorUrl () {
        const {url} = this.props.game;

        if (url) {
            return url.replace('https://en.wikipedia.org/wiki/', '');
        }

        return null;
    }
    get anchor () {
        const {url, release} = this.props.game;
        const icon = this.state.anchor ? iconLinkOff : iconLink;

        return (url && release) ? (
            <Anchor href={`#${this.anchorUrl}`} title='Game anchor' onClick={this.toggleAnchor}>
                <img src={icon} width='24' height='24' alt='anchor' />
            </Anchor>
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
            <Game
                className={[
                    expansion ? 'expansion' : '',
                    !release ? 'release-unknown' : '',
                    anchor ? 'anchor' : ''
                ]}
                data-game-anchor={release ? this.anchorUrl : null}
            >
                {this.anchor}
                {this.title}
                {this.footer}
            </Game>
        )
    }
}

export default TimelineGame;