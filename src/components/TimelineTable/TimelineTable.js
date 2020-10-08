import React from 'react';
import styled from 'styled-components';
import games from '../../data/games.json'
import GameBadge from '../GameBadge';

// Icons
// import genreIconAdventure from '../../images/icons/genres/adventure.svg';
// import genreIconAdventure2x from '../../images/icons/genres/adventure@2x.svg';
// import genreIconRacing from '../../images/icons/genres/racing.svg';
// import genreIconRacing2x from '../../images/icons/genres/racing2@x.svg';
// import genreIconRolePlaying from '../../images/icons/genres/role-playing.svg';
// import genreIconRolePlaying2x from '../../images/icons/genres/role-playing@2x.svg';
import genreIconShooter from '../../images/icons/genres/shooter.webp';
import genreIconShooter2x from '../../images/icons/genres/shooter@2x.webp';
// import genreIconStrategy from '../../images/icons/genres/strategy.svg';
// import genreIconStrategy2x from '../../images/icons/genres/strategy@2x.svg';

const genresIcons = {
    '1x': {
        // adventure: genreIconAdventure,
        // racing: genreIconRacing,
        // 'role-playing': genreIconRolePlaying,
        shooter: genreIconShooter,
        // strategy: genreIconStrategy
    },
    '2x': {
        // adventure: genreIconAdventure2x,
        // racing: genreIconRacing2x,
        // 'role-playing': genreIconRolePlaying2x,
        shooter: genreIconShooter2x,
        // strategy: genreIconStrategy2x
    }
}

// Years
const listOfYears = Object.keys(games);
const numberOfYears = listOfYears.length;

// Styles
const TableWrapper = styled.div`
    position: relative;
    width: 100vw;
    
    &::before,
    &::after {
        position: absolute;
        z-index: 200;
        bottom: 0;
        left: 0;
        background-color: var(--border-color);
        content: "";
    }
    &::before {
        width: 1px;
        height: 100%;
    }
    &::after {
        width: 100%;
        height: 1px;
    }
`;
const Table = styled.div`
    display: grid;
    grid-template-columns: var(--genre-width) repeat(${numberOfYears * 4}, 1fr);
    grid-template-rows: var(--year-height) auto;
    max-height: calc(100vh - var(--bar-height));
    overflow: auto;
    
    > div {
        padding: var(--cell-padding);
        border-right: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        
        &[data-annual-quarter]:not([data-annual-quarter='Q4']) {
            border-right-style: dashed;
        }
        &[data-annual-quarter]::before {
            display: block;
            margin-bottom: var(--cell-padding);
            color: #ccc;
            content: attr(data-annual-quarter);
            font-size: 9px;
            text-align: right;
        }
    }
`;

const Captions = styled.div`
    position: sticky;
    z-index: 101;
    top: 0;
    left: 0;
    padding: var(--cell-padding);
    background-color: #fcfcfc;
    font-weight: var(--font-weight-title);
    text-align: center;
    
    > span {
        position: absolute;
        color: #ccc;
        font-size: 9px;
        
        &:nth-of-type(1) {
            top: 4px;
            right: 6px;
        }
        &:nth-of-type(2) {
            bottom: 4px;
            left: 6px;
        }
    }
`;

const Genre = styled.div`
    position: sticky;
    z-index: 100;
    left: 0;
    background-color: #fcfcfc;
    font-weight: var(--font-weight-title);
    text-align: center;
    
    > div {
        position: sticky;
        top: calc(var(--year-height) + var(--cell-padding));
    }
`;
const GenreIcon = styled.img`
    position: relative;
    z-index: -1;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 96px;
    height: 96px;
    font-size: 9px;
    white-space: nowrap;
    
    &.shooter {
        margin-top: -24px;
        margin-bottom: -24px;
    }
`;
const GenreTitle = styled.div`
    font-size: 17px;
    white-space: nowrap;
            
    &::first-letter {
        text-transform: uppercase;
    }
`

const Year = styled(Genre)`
    grid-column: auto / span 4;
    top: 0;
    left: unset;
    
    > div {
        top: unset;
        left: calc(var(--genre-width) + var(--cell-padding));
    }
`;

const GamesBadgesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 8px;
`;
const GamesBadgesItem = styled.li``;

// Component
class TimelineTable extends React.Component {
    matchQuarter (index, release) {
        if (!release) return true;

        const monthIndex = new Date(release).getMonth() + 1;

        if (index === 1 && monthIndex > 0 && monthIndex <= 3) return true;
        if (index === 2 && monthIndex > 3 && monthIndex <= 6) return true;
        if (index === 3 && monthIndex > 6 && monthIndex <= 9) return true;

        return index === 4 && monthIndex > 9 && monthIndex <= 12;
    }

    get listOfGenres () {
        const listOfGenres = [];

        Object.values(games).forEach(games => {
            for (const game of games) {
                if (listOfGenres.includes(game.genre)) continue;
                listOfGenres.push(game.genre);
            }
        });

        listOfGenres.sort((a, b) => a.localeCompare(b));

        return listOfGenres;
    }

    get captions () {
        return (
            <Captions>
                <span key='year'>year</span>
                <span key='genre'>genre</span>
            </Captions>
        )
    }

    get years () {
        return listOfYears.map((year, index) => {
            return (
                <Year key={index}>
                    <div>{year}</div>
                </Year>
            )
        });
    }

    get genres () {
        return this.listOfGenres.map((genre, index) => {
            let genreIcon = null;

            if (genresIcons['2x'][genre] && genresIcons['1x'][genre]) {
                genreIcon = <GenreIcon srcSet={genresIcons['2x'][genre] + ' 2x'} src={genresIcons['1x'][genre]} alt={genre} className={genre}/>;
            }

            return ([
                <Genre key={index}>
                    <div>
                        {genreIcon}
                        <GenreTitle>{genre}</GenreTitle>
                    </div>
                </Genre>,

                listOfYears.map(year => {
                    let result = [];

                    for (let index = 1; index <= 4; index++) {
                        let GamesBadgesItems = [];

                        if (games[year]) {
                            for (const game of games[year]) {
                                if (genre === game.genre && this.matchQuarter(index, game.release)) {
                                    GamesBadgesItems.push(
                                        <GamesBadgesItem key={game.title}>
                                            <GameBadge key={game.title} game={game}/>
                                        </GamesBadgesItem>
                                    );
                                }
                            }
                        }

                        result.push(
                            <div key={index} data-annual-quarter={`Q${index}`}>
                                <GamesBadgesList>
                                    {GamesBadgesItems}
                                </GamesBadgesList>
                            </div>
                        );
                    }

                    return result
                })
            ])
        });
    }

    render () {
        return (
            <TableWrapper>
                <Table>
                    {this.captions}
                    {this.years}
                    {this.genres}
                </Table>
            </TableWrapper>
        )
    }
}

export default TimelineTable;
