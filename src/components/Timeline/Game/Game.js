import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {addFocusVisible} from '../../../helpers/focusVisible';

import iconLink from '../../../images/icons/link.svg';

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
`;

const Footer = styled.footer`
  > time {
    color: ${props => props.theme.timelineGame.footerColor};
    font-size: 1.1rem;
    white-space: nowrap;
  }
`;

const Game = styled.article`
  position: relative;
  padding: .4rem .8rem;
  background-color: ${props => props.theme.timelineGame.backgroundColor};
  transition: opacity var(--transition-duration-basic);
  will-change: opacity;

  &:hover {
    z-index: 300;
  }

  &.muted {
    opacity: .1;
    pointer-events: none;
  }

  &.expansion {
    padding-top: 0;
    padding-bottom: 0;
    background-color: unset;

    ${Title} {
      color: ${props => props.theme.timelineGame.titleExpansionColor};

      > a {
        color: ${props => props.theme.timelineGame.titleExpansionLinkColor};

        &:hover {
          background-color: ${props => props.theme.timelineGame.titleExpansionLinkHoverBackgroundColor};
          color: ${props => props.theme.timelineGame.titleExpansionLinkHoverColor};
        }
      }
    }

    ${Footer} {
      > time {
        color: ${props => props.theme.timelineGame.footerExpansionColor};
      }
    }
  }

  &.release-unknown {
    margin-right: -.8rem;
    margin-left: -.8rem;
    padding: .4rem 1.6rem;
    background-color: ${props => props.theme.timelineGame.releaseUnknownBackgroundColor};

    [data-quarter]:not([data-quarter='Q1']) & {
      pointer-events: none;

      ${Title} {
        visibility: hidden;
      }
    }

    [data-quarter='Q2'] &,
    [data-quarter='Q3'] & {
      margin-right: -.9rem;
      margin-left: -.9rem;
    }

    ${Title} {
      color: ${props => props.theme.timelineGame.titleReleaseUnknownColor};

      > a {
        background-color: unset;
        color: ${props => props.theme.timelineGame.titleReleaseUnknownLinkColor};

        &:hover {
          background-color: unset;
          color: ${props => props.theme.timelineGame.titleReleaseUnknownLinkHoverColor};
        }
      }
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

const setAnchor = (gameEl, url) => {
    const hashValue = document.location.hash.substring(1);

    if (gameEl && anchorUrl(url) === hashValue) {
        const link = gameEl.querySelector('.game__title > a');

        if (link) {
            addFocusVisible(link);

            gameEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    }
}

const anchorUrl = url => {
    const pattern = /https:\/\/(en|ru).wikipedia.org\/wiki\//g;

    return url ? url.replace(pattern, '') : null;
}

const gameAnchor = url => {
    return url ? (
        <Anchor
            href={`#${anchorUrl(url)}`}
            title='Anchor'
            tabIndex='-1'
        >
            <img src={iconLink} width='24' height='24' alt='Anchor'/>
        </Anchor>
    ) : null
}

const gameTitle = (title, url) => {
    const className = 'game__title'

    return url ? (
        <Title className={className}>
            <a
                href={url}
                rel='noopener noreferrer'
                target='_blank'
                dangerouslySetInnerHTML={{__html: title}}
            />
        </Title>
    ) : (
        <Title
            className={className}
            dangerouslySetInnerHTML={{__html: title}}
        />
    )
}

const gameFooter = release => {
    return release ? (
        <Footer>
            <time>{release}</time>
        </Footer>
    ) : null;
}

const TimelineGame = ({game, placeholder}) => {
    const {title, url, release, series, expansion} = game;
    const gameRef = useRef(null);
    const className = [
        'game',
        expansion ? 'expansion' : '',
        !release ? 'release-unknown' : '',
    ];

    // TODO: Add "url" to "deps" array
    useEffect(() => {
        setAnchor(gameRef.current, url);
    }, []);

    return placeholder ? (
        <Game
            className={className}
            data-series={series}
            ref={gameRef}
        >
            {gameTitle(title)}
        </Game>
    ) : (
        <Game
            className={className}
            data-series={series}
            ref={gameRef}
        >
            {gameAnchor(url)}
            {gameTitle(title, url)}
            {gameFooter(release)}
        </Game>
    )
}

TimelineGame.propTypes = {
    game: PropTypes.object.isRequired,
    placeholder: PropTypes.bool
}

export default TimelineGame;
