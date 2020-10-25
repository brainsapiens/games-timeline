import React, {Component} from 'react';
import styled from 'styled-components';

import games from '../../../data/games';
import debounce from '../../../utils/debounce';

import TimelineYears from '../Years';
import TimelineGenres from '../Genres';

const numberOfYears = Object.keys(games).length;

const Table = styled.div`
    display: grid;
    grid-template-columns: var(--genre-width) repeat(${numberOfYears * 4}, 1fr);
    grid-template-rows: var(--year-height) auto;
    max-height: calc(100vh - var(--bar-height));
    overflow: auto;
    
    > div {
        padding: var(--cell-padding);
        border-right: 1px solid var(--border-color-base);
        border-bottom: 1px solid var(--border-color-base);
        
        &:first-child {
            position: sticky;
            z-index: 101;
            top: 0;
            left: 0;
            padding: var(--cell-padding);
            background-color: #fafafa;
        }
        
        &[data-quarter]:not([data-quarter='Q4']) {
            border-right-style: dashed;
        }
        &[data-quarter]::before {
            display: block;
            margin-bottom: var(--cell-padding);
            color: #ccc;
            content: attr(data-quarter);
            font-size: .9rem;
            text-align: right;
        }
    }
`;

class TimelineTable extends Component {
    constructor (props) {
        super(props);
        this.tableRef = React.createRef();
    }

    storage = window.sessionStorage;
    table = null;

    componentDidMount () {
        this.table = this.tableRef.current;

        this.addTableScrollPosition();
    }

    setTableScrollPosition = () => {
        const table = this.table;
        const storage = this.storage;

        storage.setItem('tableScrollTop', table.scrollTop);
        storage.setItem('tableScrollLeft', table.scrollLeft);
    }

    addTableScrollPosition = () => {
        const table = this.table;

        if (!document.location.hash) {
            const storage = this.storage;
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

    render () {
        return (
            <Table ref={this.tableRef} onScroll={debounce(this.setTableScrollPosition)}>
                <div />
                <TimelineYears />
                <TimelineGenres />
            </Table>
        )
    }
}

export default TimelineTable;
