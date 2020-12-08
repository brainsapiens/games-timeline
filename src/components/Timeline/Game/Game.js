import React, {Component} from 'react';
import styled from 'styled-components';

import globals from '../../../globals';
import iconLink from '../../../images/icons/link.svg';

const releaseUnknownGameTitle = `
    .game-title {
        color: var(--color-muted);
        
        [data-quarter]:not([data-quarter='Q1']) & {
            visibility: hidden;
        }

        > a {
            background-color: unset;
            color: var(--color-muted);
            
            &:hover {
                background-color: unset;
                color: var(--color-dark);
            }
        }
    }
`;
const Game = styled.article`
    position: relative;
    padding: .4rem .8rem;
    background-color: var(--color-darkest);
    color: var(--color-lightest);
    
    &:hover {
        z-index: 300;
    }
    
    a {
        color: var(--color-lightest);
    }
    
    &.expansion {
        padding-top: 0;
        padding-bottom: 0;
        background-color: unset;
        color: var(--color-darkest);
        
        a {
            color: var(--color-darkest);
        }
    }
    
    &.release-unknown {
        margin-right: -.8rem;
        margin-left: -.8rem;
        padding: .4rem 1.6rem;
        background-color: var(--game-release-unknown-background-color);
        color: var(--color-muted);
        
        [data-quarter='Q2'] &,
        [data-quarter='Q3'] & {
            margin-right: -.9rem;
            margin-left: -.9rem;
        }
        
        ${releaseUnknownGameTitle};
        
        &.expansion {
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
    background-color: rgba(var(--color-lightest-rgb), .75);
    opacity: 0;
    transition: opacity var(--transition-duration-basic);

    &:hover > img {
        opacity: 1;
    }

    > img {
        flex: 0 0 auto;
        opacity: .75;
        transition: opacity var(--transition-duration-basic);
    }
    
    ${Game}:hover & {
        opacity: 1;
    }
`;
const Title = styled.h2`
    color: var(--color-lighest);
    font-size: 1.3rem;
    font-weight: unset;
    line-height: unset;
    white-space: nowrap;
    
    ${Game}.expansion & {
        color: var(--color-darkest);
    }
    
    > a {
        color: var(--color-lightest);
        text-decoration: none;
        
        &:hover {
            background-color: var(--color-lightest);
            color: var(--color-darkest);
            
            ${Game}.expansion & {
                background-color: var(--color-darkest);
                color: var(--color-lightest);
            }
        }
    }
`;
const Footer = styled.footer`
    > time {
        color: rgba(var(--color-lightest-rgb), .75);
        font-size: 1.1rem;
        white-space: nowrap;
        
        ${Game}.expansion & {
            color: var(--color-muted);
        }
    }
`;

class TimelineGame extends Component {
    constructor (props) {
        super(props);
        this.gameRef = React.createRef();
    }

    componentDidMount () {
        this.setAnchor(this.gameRef.current);
    }

    setAnchor = (game) => {
        const hashValue = document.location.hash.substring(1);

        if (game && this.anchorUrl === hashValue) {
            game.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            const link = game.querySelector('.game-title > a');
            link && link.focus();
        }
    }

    get anchorUrl () {
        const {url, release} = this.props.game;
        const {games: {anchorUrlPattern}} = globals;

        return (url && release) ? url.replace(anchorUrlPattern, '') : null;
    }

    get anchor () {
        const {url, release} = this.props.game;

        return (url && release) ? (
            <Anchor
                href={`#${this.anchorUrl}`}
                title='Anchor'
            >
                <img src={iconLink} width='24' height='24' alt='anchor' />
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

        return (
            <Game
                className={[
                    expansion ? 'expansion' : '',
                    !release ? 'release-unknown' : '',
                ]}
                ref={this.gameRef}
            >
                {this.anchor}
                {this.title}
                {this.footer}
            </Game>
        )
    }
}

export default TimelineGame;
