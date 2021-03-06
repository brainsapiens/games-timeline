import React from 'react';
import styled from 'styled-components';

import games from '../../../data/games';

const Year = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  grid-column: auto / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.timelineTable.cellBackgroundColor};

  > span {
    position: sticky;
    right: var(--cell-padding);
    left: calc(var(--genre-width) + var(--cell-padding));
    font-weight: var(--font-weight-title);
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const years = () => Object.keys(games).map(year =>
    <Year key={year}>
        <span>{year}</span>
    </Year>
);

const TimelineYears = () => years();

export default TimelineYears;
