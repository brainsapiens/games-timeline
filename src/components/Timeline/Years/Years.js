import React, {Component} from 'react';
import styled from 'styled-components';

import games from '../../../data/games.json';

const Year = styled.div`
    position: sticky;
    z-index: 100;
    top: 0;
    grid-column: auto / span 4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    
    > span {
        position: sticky;
        right: var(--cell-padding);
        left: calc(var(--genre-width) + var(--cell-padding));
        font-weight: var(--font-weight-title);
        text-transform: uppercase;
        white-space: nowrap;
    }
`;

class TimelineYears extends Component {
    get years () {
        const listOfYears = Object.keys(games);

        return listOfYears.map(year => {
            return (
                <Year key={year}>
                    <span>{year}</span>
                </Year>
            )
        });
    }

    render () {
        return this.years;
    }
}

export default TimelineYears;
