import React from 'react';
import styled from 'styled-components';
import timeline from '../../data/timeline.json'
import games from '../../data/games.json'
import GameBadge from '../GameBadge';

const numberOfYears = timeline.years.length;

const Table = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: inline-grid;
    grid-template-columns: var(--genre-width) repeat(${numberOfYears * 4}, 1fr);
    
    > div {
        padding: var(--cell-padding);
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        
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
    background-color: #fff;
    font-weight: var(--font-weight-extra);
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
    background-color: #fff;
    font-weight: var(--font-weight-extra);
    text-align: center;
    text-transform: capitalize;

    > span {
        position: sticky;
        top: calc(var(--year-height) + var(--cell-padding));
    }
`;

function yearsLayout() {
    const shiftToTheRight = 1;
    let columnStart = 2;
    let columnEnd = columnStart + 4;

    let result = '';
    for (let index = (1 + shiftToTheRight); index <= (numberOfYears + shiftToTheRight); index++) {
        result += `
            &:nth-of-type(${index}) {
                grid-column-start: ${columnStart};
                grid-column-end: ${columnEnd};
            }
        `
        columnStart = columnStart + 4;
        columnEnd = columnEnd + 4;
    }
    return result;
}
const Year = styled(Genre)`
    top: 0;
    left: unset;
    text-transform: unset;

    > span {
        top: unset;
        left: calc(var(--genre-width) + var(--cell-padding));
    }
    
    ${yearsLayout()}
`;

const GamesBadgesList = styled.ul`
    display: flex;
    flex-wrap: wrap;  
    margin: -4px;
`;
const GamesBadgesItem = styled.li`
    margin: 4px;
`;

class TimelineTable extends React.Component {
    matchQuarter (index, releaseDate) {
        const monthIndex = new Date(releaseDate).getMonth() + 1;

        if (index === 1 && monthIndex > 0 && monthIndex <= 3) {
            return true;
        }
        if (index === 2 && monthIndex > 3 && monthIndex <= 6) {
            return true;
        }
        if (index === 3 && monthIndex > 6 && monthIndex <= 9) {
            return true;
        }
        return index === 4 && monthIndex > 9 && monthIndex <= 12;

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
        return timeline.years.map((year, index) => {
            return (
                <Year key={index}>
                    <span>{year}</span>
                </Year>
            )
        });
    }

    get genres () {
        return timeline.genres
            .sort((a, b) => a.localeCompare(b))
            .map((genre, index) => {
                return ([
                    <Genre key={index}>
                        <span>{genre}</span>
                    </Genre>,
                    timeline.years.map(year => {
                        let result = [];
                        for (let index = 1; index <= 4; index++) {
                            let gameBadge = [];
                            if (games[year]) {
                                for (const game of games[year]) {
                                    if (genre === game.genre && this.matchQuarter(index, game.releaseDate)) {
                                        gameBadge.push(
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
                                        {gameBadge}
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
            <Table>
                {this.captions}
                {this.years}
                {this.genres}
            </Table>
        )
    }
}

export default TimelineTable;
