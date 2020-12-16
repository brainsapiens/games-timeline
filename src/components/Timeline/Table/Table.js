import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import debounce from '../../../utils/debounce';

import games from '../../../data/games';
import TimelineYears from '../Years';
import TimelineGenres from '../Genres';

const numberOfYears = Object.keys(games).length;

const Table = styled.div`
  display: grid;
  grid-template-columns: var(--genre-width) repeat(${numberOfYears * 4}, 1fr);
  grid-template-rows: var(--year-height) auto;
  width: 100vw;
  height: 100%;
  max-height: calc(100vh - var(--bar-height) * 2);
  overflow: auto;
  border-top: 1px solid ${props => props.theme.timelineTable.borderColor};
  border-left: 1px solid ${props => props.theme.timelineTable.borderColor};
  
  > div {
    padding: var(--cell-padding);
    border-right: 1px solid ${props => props.theme.timelineTable.borderColor};
    border-bottom: 1px solid ${props => props.theme.timelineTable.borderColor};

    &:first-child {
      position: sticky;
      z-index: 101;
      top: 0;
      left: 0;
      padding: var(--cell-padding);
      background-color: ${props => props.theme.timelineTable.cellBackgroundColor};
    }

    &[data-quarter]:not([data-quarter='Q4']) {
      border-right-style: dashed;
    }

    &[data-quarter]::before {
      display: block;
      margin-bottom: var(--cell-padding);
      color: rgba(${props => props.theme.timelineTable.quarterColor}, .25);
      content: attr(data-quarter);
      font-size: .9rem;
      text-align: right;
    }
  }
`;

const storage = window.sessionStorage;

const addTableScrollPosition = table => {
    if (!document.location.hash) {
        const storageScrollTop = storage.getItem('tableScrollTop');
        const storageScrollLeft = storage.getItem('tableScrollLeft');

        if (storageScrollTop) {
            table.scrollTop = +storageScrollTop;
        } else {
            storage.setItem('tableScrollTop', table.scrollTop);
        }

        if (storageScrollLeft) {
            table.scrollLeft = +storageScrollLeft;
        } else {
            storage.setItem('tableScrollLeft', table.scrollLeft);
        }
    }
}

const setTableScrollPosition = table => {
    storage.setItem('tableScrollTop', table.scrollTop);
    storage.setItem('tableScrollLeft', table.scrollLeft);
}

const TimelineTable = () => {
    const tableRef = useRef(null);
    const onScroll = debounce(() => setTableScrollPosition(tableRef.current));

    useEffect(() => {
        addTableScrollPosition(tableRef.current);
    }, []); 

    return (
        <Table
            ref={tableRef}
            onScroll={onScroll}
        >
            <div/>
            <TimelineYears/>
            <TimelineGenres/>
        </Table>
    )
}

export default TimelineTable;
