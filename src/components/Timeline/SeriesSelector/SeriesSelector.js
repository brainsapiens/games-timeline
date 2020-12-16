import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import globals from '../../../globals';
import series from '../../../data/series.json';

const SeriesSelector = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const SeriesSelect = styled.select`
  width: 16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--color-lighter);
  border: 2px outset var(--color-light);
  border-radius: 3px;
  color: var(--color-darker);
  font-size: 1.3rem;
  
  &:active {
    border-style: inset;
  }
`;

const storage = window.sessionStorage;

const removeAnchor = () => {
    const {app: {basename}} = globals;

    if (!storage.getItem('series')) {
        window.history.pushState(null, null, basename);
    }
}

const seriesOptions = () => {
    const listOfSeries = Object.entries(series);
    const options = [<option key='none' value='none'>None</option>];

    for (const [key, value] of listOfSeries) {
        options.push(<option key={key} value={key}>{value}</option>);
    }

    return options;
}

const selectSeries = series => {
    const allGames = document.querySelectorAll('.game');

    allGames.forEach(game => {
        const link = game.querySelector('.game__title > a');

        game.classList.remove('muted');
        if (link) link.removeAttribute('tabindex');
    });

    if (series === 'none') {
        storage.removeItem('series');
    } else {
        removeAnchor();

        storage.setItem('series', series);

        const notSeriesGames = document.querySelectorAll(`.game:not([data-series='${series}'])`);

        notSeriesGames.forEach(game => {
            const link = game.querySelector('.game__title > a');
            game.classList.add('muted');

            if (link) link.setAttribute('tabindex', '-1');
        });

        const seriesGames = document.querySelectorAll(`.game[data-series='${series}']`);
        const firstGameInSeries = seriesGames[0];

        if (!firstGameInSeries) return;

        const link = firstGameInSeries.querySelector('.game__title > a');
        if (!link) return;

        document.documentElement.classList.add('js-focus-visible');
        link.focus();

        firstGameInSeries.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
}

const TimelineSeriesSelector = () => {
    const [series, setSeries] = useState(() => storage.getItem('series') || 'none');

    useEffect(() => {
        selectSeries(series);
    }, [series]);

    const onChange = useCallback(e => {
        const value = e.target.value;

        setSeries(value);
        selectSeries(value);
    }, [setSeries]);

    return (
        <SeriesSelector>
            Highlight series:&nbsp;
            <SeriesSelect
                id='select'
                value={series}
                onChange={onChange}
            >
                {seriesOptions()}
            </SeriesSelect>
        </SeriesSelector>
    );
};

export default TimelineSeriesSelector;