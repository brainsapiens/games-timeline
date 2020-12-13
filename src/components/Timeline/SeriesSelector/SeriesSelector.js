import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import globals from '../../../globals';
import series from '../../../data/series.json';

const SeriesSelector = styled.div`
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

const selectSeries = (series) => {
    const allGames = document.querySelectorAll('.game');
    allGames.forEach(game => {
        game.classList.remove('muted');

        const link = game.querySelector('.game__title > a');
        if (link) {
            link.removeAttribute('tabindex');
        }
    });

    if (series !== 'none') {
        removeAnchor();

        storage.setItem('series', series);

        const notSeriesGames = document.querySelectorAll(`.game:not([data-series='${series}'])`);
        notSeriesGames.forEach(game => {
            game.classList.add('muted');

            const link = game.querySelector('.game__title > a');
            if (link) {
                link.setAttribute('tabindex', '-1');
            }
        });

        const seriesGames = document.querySelectorAll(`.game[data-series='${series}']`);
        const firstGameInSeries = seriesGames[0];
        if (firstGameInSeries) {
            const link = firstGameInSeries.querySelector('.game__title > a');

            if (link) {
                const html = document.documentElement;
                html.classList.add('js-focus-visible');

                        link.focus();

                setTimeout(() => {
                    firstGameInSeries.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }, 0);
            }
        }
    } else {
        storage.removeItem('series');
    }
}

const TimelineSeriesSelector = () => {
    const initialState = storage.getItem('series') || 'none';
    const [series, setSeries] = useState(initialState);

    useEffect(() => {
        selectSeries(series);
    });

    const onChange = e => {
        const value = e.target.value;

        setSeries(value);

        selectSeries(value);
    }

    return (
        <SeriesSelector>
            Highlight series:&nbsp;
            <SeriesSelect
                value={series}
                onChange={onChange}
            >
                {seriesOptions()}
            </SeriesSelect>
        </SeriesSelector>
    );
};

export default TimelineSeriesSelector;