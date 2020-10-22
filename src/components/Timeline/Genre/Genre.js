import React, {Component} from 'react';
import styled from 'styled-components';

const Genre = styled.div`
    position: sticky;
    z-index: 100;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    
    > span {
        position: sticky;
        top: calc(var(--year-height) + var(--cell-padding));
        bottom: var(--cell-padding);
        font-weight: var(--font-weight-title);
        text-transform: uppercase;
        white-space: nowrap;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
`;

class TimelineGenre extends Component {
    render () {
        const {genreName} = this.props;

        return (
            <Genre>
                <span>{genreName}</span>
            </Genre>
        )
    }
}

export default TimelineGenre;
