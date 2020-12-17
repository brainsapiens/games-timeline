import {useCallback, useEffect, useState} from 'react';

export const useSeriesSelector = () => {
    const storage = window.sessionStorage;
    const [selectedSeries, setSelectedSeries] = useState('');
    const [seriesApplied, setSeriesApplied] = useState(false);

    const setSeries = useCallback(series => {
        storage.setItem('selectedSeries', series);
        setSelectedSeries(series);
    }, [storage]);

    const selectSeries = e => {
        setSeries(e.target.value);
    };

    useEffect(() => {
        const localSeries = storage.getItem('selectedSeries');
        if (localSeries) {
            setSelectedSeries(localSeries);
        } else {
            setSeries('');
        }
        setSeriesApplied(true);
    }, [storage, setSeries]);

    return [selectedSeries, selectSeries, seriesApplied];
};
