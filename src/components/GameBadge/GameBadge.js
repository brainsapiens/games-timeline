import React from 'react';
import styled from 'styled-components';

import iconLink from '../../images/icons/link.svg';

const GameAnchor = styled.a`
    display: inline-flex;
    margin-left: .4rem;
    padding-right: .2rem;
    padding-left: .2rem;
    vertical-align: text-bottom;
    visibility: hidden;

    &:hover {
        img {
            filter: unset;
            opacity: 1;
        }
    }

    img {
        filter: invert(1);
        opacity: .5;
    }
`;

const Badge = styled.article`
    padding: .4rem .8rem;
    background-color: #000;
    color: #fff;
    
    &:hover {
        ${GameAnchor} {
            visibility: visible;
        }
    }
    
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
    get gameAnchor () {
        const {url} = this.props.game;

        return url.replace('https://en.wikipedia.org/wiki/', '');
    }
    get gameAnchorLink () {
        return (
            <GameAnchor href={`#${this.gameAnchor}`} title='Game anchor' onClick={this.setGameAnchor}>
                <img src={iconLink} width='16' height='16' alt='anchor' />
            </GameAnchor>
        )
    }
    removeFocusVisible = () => {
        const html = document.documentElement;
        html.classList.remove('js-focus-visible');

        const gameBadge = document.querySelector('[data-game-anchor="' + this.gameAnchor + '"]');
        gameBadge.removeEventListener('blur', this.removeFocusVisible);
    }
    setGameAnchor = () => {
        const gameBadge = document.querySelector('[data-game-anchor="' + this.gameAnchor + '"]');

        if (gameBadge) {
            gameBadge.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            const html = document.documentElement;
            html.classList.add('js-focus-visible');

            const titleLink = gameBadge.querySelector('a:first-of-type');
            setTimeout(() => {
                gameBadge.querySelectorAll('a').forEach(link => link.blur());
                titleLink.focus();
                titleLink.addEventListener('blur', this.removeFocusVisible);
            }, 0);
        }
    }

    get title () {
        const {title, url} = this.props.game;
        const titleContent = url
            ? <a href={url} rel='noopener noreferrer' target='_blank' dangerouslySetInnerHTML={{ __html: title }} />
            : title;

        return (
            <Title>
                {titleContent}
                {this.gameAnchorLink}
            </Title>
        );
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
        const {release, expansion} = this.props.game

        return (
            <Badge
                className={[expansion ? 'expansion' : '', !release ? 'shaded' : '']}
                data-game-anchor={this.gameAnchor}
            >
                {this.title}
                {this.footer}
            </Badge>
        )
    }
}

export default GameBadge;
