import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {addFocusVisible} from '../../../helpers/focusVisible';
import sortAlphabetically from '../../../helpers/sortAlphabetically';
import AppContext from '../../../AppContext';
import globals from '../../../globals';
import series from '../../../data/series';

const SeriesLabel = styled.label`
    display: block;
`;

const SeriesSelect = styled.select`
  width: 16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.timelineSeriesSelector.backgroundColor};
  border: 2px outset ${props => props.theme.timelineSeriesSelector.borderColor};
  border-radius: 3px;
  color: ${props => props.theme.timelineSeriesSelector.textColor};
  font-size: 1.3rem;
  
  &:active {
    border-style: inset;
  }
`;

const removeAnchor = (series) => {
    const {app: {basename}} = globals;

    if (series) {
        window.history.pushState(null, null, basename);
    }
}

const seriesContents = () => {
    const listOfSeries = sortAlphabetically(Object.values(series));
    const selectContents = [<option key='firstOption' value=''>Select series...</option>];

    let prevFirstChar = '';
    let optgroupContents = [];

    for (const value of listOfSeries) {
        const currentFirstChar = value.charAt(0).toLowerCase();

        if (!prevFirstChar || prevFirstChar === currentFirstChar) {
            optgroupContents.push(<option key={value} value={value}>{value}</option>);
        } else {
            selectContents.push(<optgroup key={value} label={prevFirstChar.toUpperCase()}>{optgroupContents}</optgroup>);
            optgroupContents = [];
            optgroupContents.push(<option key={value} value={value}>{value}</option>);
        }

        prevFirstChar = currentFirstChar;
    }

    selectContents.push(<optgroup key='lastOptgroup' label={prevFirstChar.toUpperCase()}>{optgroupContents}</optgroup>);

    return selectContents;
}

const scrollToSeries = series => {
    removeAnchor(series);

    const game = document.querySelector(`[data-series='${series}']`);

    if (!game) return;

    const link = game.querySelector('.game-link');

    if (!link) return;

    addFocusVisible(link);

    setTimeout(() => {
        game.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, 0);
}

const TimelineSeriesSelector = () => {
    const {selectedSeries, selectSeries} = useContext(AppContext);

    useEffect(() => {
        scrollToSeries(selectedSeries);
    }, [selectedSeries]);

    return (
        <SeriesLabel>
            <span className='visually-hidden'>Select series</span>
            <SeriesSelect
                value={selectedSeries}
                onChange={selectSeries}
            >
                {seriesContents()}
            </SeriesSelect>
        </SeriesLabel>
    );
}

export default TimelineSeriesSelector;
