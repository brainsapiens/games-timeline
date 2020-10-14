import React from 'react';
import styled from 'styled-components';
import games from '../../data/games.json'
import GameBadge from '../GameBadge';

// Years
const listOfYears = Object.keys(games);
const numberOfYears = listOfYears.length;

// Styles
const TimelineWrapper = styled.div`
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
const Timeline = styled.div`
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
            font-size: .9rem;
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
    
    &::before,
    &::after {
        position: absolute;
        color: #ccc;
        font-size: .9rem;
    }
    &::before {
        top: .4rem;
        right: .6rem;
        content: attr(data-caption-year);
    }
    &::after {
        bottom: .4rem;
        left: .6rem;
        content: attr(data-caption-genre);
    }
`;

const Genre = styled.div`
    position: sticky;
    z-index: 100;
    left: 0;
    background-color: #fcfcfc;
    text-align: center;
    
    > span {
        position: sticky;
        top: calc(var(--year-height) + var(--cell-padding));
        font-weight: var(--font-weight-title);
        text-transform: uppercase;
        white-space: nowrap;
    }
`;

const Year = styled(Genre)`
    grid-column: auto / span 4;
    top: 0;
    left: unset;
    
    > span {
        top: unset;
        left: calc(var(--genre-width) + var(--cell-padding));
    }
`;

const GamesBadgesList = styled.ol`
    display: flex;
    flex-wrap: wrap;
    grid-gap: .8rem;
`;
const GamesBadgesItem = styled.li`
    &.release-date-unknown {
        flex: 0 0 100%;
    }
`;

// Component
class TimelineTable extends React.Component {
    constructor (props) {
        super(props);
        this.timelineRef = React.createRef();
    }

    storage = window.sessionStorage;

    setGameAnchorScrollPosition = () => {
        const hash = document.location.hash;
        const hashValue = hash.substring(1);
        const gameBadge = document.querySelector('[data-game-anchor="' + hashValue + '"]');

        if (gameBadge) {
            gameBadge.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            gameBadge.querySelector('.game-title > a').focus();
        }
    }

    setTimelineScrollPosition = () => {
        const timeline = this.timelineRef.current;
        const storage = this.storage;

        storage.setItem('timelineScrollTop', timeline.scrollTop);
        storage.setItem('timelineScrollLeft', timeline.scrollLeft);
    }
    addTimelineScrollPosition = () => {
        const timeline = this.timelineRef.current;
        const hash = document.location.hash;

        if (hash) {
            this.setGameAnchorScrollPosition();
        } else {
            const storage = this.storage;
            const storageScrollTop = storage.getItem('timelineScrollTop');
            const storageScrollLeft = storage.getItem('timelineScrollLeft');

            if (storageScrollTop) {
                timeline.scrollTop = +storageScrollTop;
            } else {
                storage.setItem('timelineScrollTop', timeline.scrollTop);
            }

            if (storageScrollLeft) {
                timeline.scrollLeft = +storageScrollLeft;
            } else {
                storage.setItem('timelineScrollLeft', timeline.scrollLeft);
            }
        }

        timeline.addEventListener('scroll', this.setTimelineScrollPosition);
    }
    removeTimelineScrollPosition = () => {
        const timeline = this.timelineRef.current;
        const storage = this.storage;

        storage.removeItem('timelineScrollTop');
        storage.removeItem('timelineScrollLeft');

        timeline.removeEventListener(this.setTimelineScrollPosition);
    }

    componentDidMount () {
        this.addTimelineScrollPosition();
    }
    componentWillUnmount () {
        this.removeTimelineScrollPosition();
    }

    matchAnnualQuarter (index, year, release) {
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

    get listOfGenres () {
        const listOfGenres = [];

        Object.values(games).forEach(games => {
            for (const game of games) {
                const {genre} = game;

                if (listOfGenres.includes(genre)) continue;
                listOfGenres.push(genre);
            }
        });

        listOfGenres.sort((a, b) => a.localeCompare(b));

        return listOfGenres;
    }

    get captions () {
        return (
            <Captions
                data-caption-year="Year"
                data-caption-genre="Genre"
            />
        )
    }

    get years () {
        return listOfYears.map((year, index) => {
            return (
                <Year key={index}>
                    <span>{year}</span>
                </Year>
            )
        });
    }

    get genres () {
        return this.listOfGenres.map((genreName, index) => {
            return ([
                <Genre key={index}>
                    <span>{genreName}</span>
                </Genre>,

                listOfYears.map(year => {
                    let result = [];

                    for (let index = 1; index <= 4; index++) {
                        let gamesBadgesList = [];
                        let gamesBadgesItems = [];

                        if (games[year]) {
                            for (const game of games[year]) {
                                const {title, genre, release} = game;

                                if (genreName === genre && this.matchAnnualQuarter(index, year, release)) {
                                    gamesBadgesItems.push(
                                        <GamesBadgesItem key={title} className={!release ? 'release-date-unknown' : ''}>
                                            <GameBadge key={title} game={game}/>
                                        </GamesBadgesItem>
                                    );
                                }
                            }
                        }

                        if (gamesBadgesItems.length) {
                            gamesBadgesList.push(
                                <GamesBadgesList key={index}>
                                    {gamesBadgesItems}
                                </GamesBadgesList>
                            );
                        }

                        result.push(
                            <div key={index} data-annual-quarter={`Q${index}`}>
                                {gamesBadgesList}
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
            <TimelineWrapper>
                <Timeline ref={this.timelineRef}>
                    {this.captions}
                    {this.years}
                    {this.genres}
                </Timeline>
            </TimelineWrapper>
        )
    }
}

export default TimelineTable;
