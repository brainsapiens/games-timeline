import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconLink from '../../../images/icons/link.svg';

const Game = styled.article`
  position: relative;
  padding: .4rem .8rem;
  background-color: ${props => props.theme.timelineGame.backgroundColor};

  &:hover {
    z-index: 300;
  }

  &.expansion {
    padding-top: 0;
    padding-bottom: 0;
    background-color: unset;
  }

  &.release-unknown {
    margin-right: -.8rem;
    margin-left: -.8rem;
    padding: .4rem 1.6rem;
    background-color: ${props => props.theme.timelineGame.releaseUnknownBackgroundColor};

    [data-quarter='Q2'] &,
    [data-quarter='Q3'] & {
      margin-right: -.9rem;
      margin-left: -.9rem;
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
  background-color: rgba(${props => props.theme.timelineGame.anchorBackgroundColor}, .75);
  opacity: 0;
  transition: opacity var(--transition-duration-basic);

  &:hover > img {
    opacity: 1;
  }

  > img {
    flex: 0 0 auto;
    opacity: .75;
    transition: opacity var(--transition-duration-basic);
    filter: ${props => props.theme.timelineGame.anchorIconFilter}
  }

  ${Game}:hover & {
    opacity: 1;
  }
`;
const Title = styled.h2`
  color: ${props => props.theme.timelineGame.titleColor};
  font-size: 1.3rem;
  font-weight: unset;
  line-height: unset;
  white-space: nowrap;
  
  > a {
    color: ${props => props.theme.timelineGame.titleLinkColor};
    text-decoration: none;

    &:hover {
      background-color: ${props => props.theme.timelineGame.titleLinkHoverBackgroundColor};
      color: ${props => props.theme.timelineGame.titleLinkHoverColor};
    }
  }
  
  ${Game}.expansion & {
    color: ${props => props.theme.timelineGame.titleExpansionColor};

    > a {
      color: ${props => props.theme.timelineGame.titleExpansionLinkColor};
      
      &:hover {
        background-color: ${props => props.theme.timelineGame.titleExpansionLinkHoverBackgroundColor};
        color: ${props => props.theme.timelineGame.titleExpansionLinkHoverColor};
      }
    }
  }
  
  ${Game}.release-unknown & {
    color: var(--color-muted);

    [data-quarter]:not([data-quarter='Q1']) & {
      visibility: hidden;
    }
    
    > a {
      background-color: unset;
      color: var(--color-muted);

      &:hover {
        background-color: unset;
        color: ${props => props.theme.timelineGame.titleReleaseUnknownLinkHoverColor};
      }
    }
  }
`;
const Footer = styled.footer`
  > time {
    color: var(--color-muted);
    font-size: 1.1rem;
    white-space: nowrap;
  }
`;

const removeFocusVisible = e => {
    const html = document.documentElement;
    html.classList.remove('js-focus-visible');

    const target = e.target;
    target.removeEventListener('blur', removeFocusVisible);
}

const setAnchor = (gameEl, url) => {
    const hashValue = document.location.hash.substring(1);

    if (gameEl && anchorUrl(url) === hashValue) {
        gameEl.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });

        const html = document.documentElement;
        html.classList.add('js-focus-visible');

        const gameTitleLink = gameEl.querySelector('.game-title > a');
        setTimeout(() => {
            gameTitleLink.addEventListener('blur', removeFocusVisible);
        }, 0)

        const link = gameEl.querySelector('.game-title > a');
        link && link.focus();
    }
}

const anchorUrl = (url) => {
    const pattern = /https:\/\/(en|ru).wikipedia.org\/wiki\//g;

    return url ? url.replace(pattern, '') : null;
}

const gameAnchor = (url, release) => {
    return (url && release) ? (
        <Anchor
            href={`#${anchorUrl(url)}`}
            title='Anchor'
        >
            <img src={iconLink} width='24' height='24' alt='anchor'/>
        </Anchor>
    ) : null
}

const gameTitle = (title, url) => {
    return url ? (
        <Title className='game-title'>
            <a href={url} rel='noopener noreferrer' target='_blank' dangerouslySetInnerHTML={{__html: title}}/>
        </Title>
    ) : (
        <Title className='game-title' dangerouslySetInnerHTML={{__html: title}}/>
    )
}

const gameFooter = release => {
    return release ? (
        <Footer>
            <time>{release}</time>
        </Footer>
    ) : null
}

const TimelineGame = ({game: {title, url, release, expansion}}) => {
    const gameRef = useRef(null);

    useEffect(() => {
        setAnchor(gameRef.current, url);
    });

    return (
        <Game
            className={[
                expansion ? 'expansion' : '',
                !release ? 'release-unknown' : '',
            ]}
            ref={gameRef}
        >
            {gameAnchor(url, release)}
            {gameTitle(title, url)}
            {gameFooter(release)}
        </Game>
    )
}

TimelineGame.propTypes = {
    game: PropTypes.object.isRequired
}

export default TimelineGame;
