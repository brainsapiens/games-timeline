import React, {Component} from 'react';
import styled from 'styled-components';
import games from '../../../data/games.json';

// Styles
const Year = styled.div`
    position: sticky;
    z-index: 100;
    top: 0;
    grid-column: auto / span 4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    
    > span {
        position: sticky;
        right: var(--cell-padding);
        left: calc(var(--genre-width) + var(--cell-padding));
        font-weight: var(--font-weight-title);
        text-transform: uppercase;
        white-space: nowrap;
    }
`;

// Component
class TimelineYears extends Component {
    get years () {
        return Object
            .keys(games)
            .map((year, index) => {
                return (
                    <Year key={index}>
                        <span>{year}</span>
                    </Year>
                )
            });
    }

    render () {
        return this.years
    }
}

export default TimelineYears;
