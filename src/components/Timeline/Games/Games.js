import React, {Component} from 'react';
import styled from 'styled-components';

import games from '../../../data/games.json'

import iconLink from '../../../images/icons/link.svg';
import iconLinkOff from '../../../images/icons/link-off.svg';

import Game from '../Game';

// Styles
const List = styled.ol`
    display: flex;
    flex-wrap: wrap;
    grid-gap: .8rem;
`;
const Item = styled.li`
    position: relative;

    &.release-unknown {
        flex: 0 0 100%;
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
    
    ${Item}:hover &,
    ${Item}.anchor & {
        opacity: 1;
    }
`;

// Component
class TimelineGames extends Component {
    constructor (props) {
        super(props);

        this.state = {
            anchor: false
        }

        this.toggleAnchor = this.toggleAnchor.bind(this);
    }

    game = {
        url: null,
        release: null
    };

    componentDidMount () {
        this.setAnchor();
    }

    // Anchor
    matchAnchorToHash = () => {
        return this.anchorUrl && `#${this.anchorUrl}` === document.location.hash;
    }
    setAnchor = () => {
        const hashValue = document.location.hash.substring(1);
        const item = document.querySelector('[data-anchor="' + hashValue + '"]');

        if (item) {
            item.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            item.querySelector('.game-title > a').focus();
        }

        if (this.matchAnchorToHash()) {
            this.setState({'anchor': true});
        }
    }
    toggleAnchor = event => {
        const item = document.querySelector('[data-anchor="' + this.anchorUrl + '"]');

        console.log(item);

        if (item) {
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
        const {url} = this.game;

        if (url) {
            return url.replace('https://en.wikipedia.org/wiki/', '');
        }

        return null;
    }
    get anchor () {
        const {url, release} = this.game;
        const icon = this.state.anchor ? iconLinkOff : iconLink;

        return (url && release) ? (
            <Anchor href={`#${this.anchorUrl}`} title='Game anchor' onClick={this.toggleAnchor}>
                <img src={icon} width='24' height='24' alt='anchor' />
            </Anchor>
        ) : null
    }

    // Games
    matchGameToQuarter (index, year, release) {
        if (!release) return true;

        let date = new Date(release);

        if (!date.getDate()) {
            date = new Date(`${year} ${release}`);
        }

        const monthIndex = date.getMonth() + 1;

        if (index === 1 && monthIndex > 0 && monthIndex <= 3) return true;
        if (index === 2 && monthIndex > 3 && monthIndex <= 6) return true;
        if (index === 3 && monthIndex > 6 && monthIndex <= 9) return true;

        return index === 4 && monthIndex > 9 && monthIndex <= 12;
    }

    get games () {
        const {genreName} = this.props;
        const listOfYears = Object.keys(games);

        return listOfYears.map(year => {
            let result = [];

            for (let index = 1; index <= 4; index++) {
                let gamesList = [];
                let gamesItems = [];

                if (games[year]) {
                    for (const game of games[year]) {
                        const {anchor} = this.state;
                        const {title, url, genre, release} = game;

                        if (genreName === genre && this.matchGameToQuarter(index, year, release)) {
                            this.game.url = url;
                            this.game.release = release;

                            gamesItems.push(
                                <Item
                                    key={title}
                                    onClick={this.toggleAnchor}
                                    className={[
                                        anchor ? 'anchor' : '',
                                        !release ? 'release-unknown' : ''
                                    ]}
                                    data-anchor={release ? this.anchorUrl : null}
                                >
                                    {this.anchor}
                                    <Game key={title} game={game} />
                                </Item>
                            );
                        }
                    }
                }

                if (gamesItems.length) {
                    gamesList.push(
                        <List key={index}>
                            {gamesItems}
                        </List>
                    );
                }

                result.push(
                    <div key={index} data-quarter={`Q${index}`}>
                        {gamesList}
                    </div>
                );

            }

            return result;
        });
    }

    render () {
        return this.games;
    }
}

export default TimelineGames;
