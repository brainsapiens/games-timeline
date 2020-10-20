import React, {Component} from 'react';
import styled from 'styled-components';

import games from '../../../data/games.json'

import Game from '../Game';

// Styles
const List = styled.ol`
    display: flex;
    flex-wrap: wrap;
    grid-gap: .8rem;
`;
const Item = styled.li`
    &.release-unknown {
        flex: 0 0 100%;
    }
`;

// Component
class TimelineGames extends Component {
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
                        const {title, genre, release} = game;

                        if (genreName === genre && this.matchGameToQuarter(index, year, release)) {
                            gamesItems.push(
                                <Item
                                    key={title}
                                    className={!release ? 'release-unknown' : ''}
                                >
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
                    <div
                        key={index}
                        data-quarter={`Q${index}`}
                    >
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
