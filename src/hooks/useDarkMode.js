import {useCallback, useEffect, useState} from 'react';

export const useDarkMode = () => {
    const storage = window.localStorage;
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = useCallback(mode => {
        storage.setItem('theme', mode);
        setTheme(mode);
    }, [storage]);

    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    };

    useEffect(() => {
        const localTheme = storage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode('light');
        }
        setComponentMounted(true);
    }, [storage, setMode]);

    return [theme, toggleTheme, componentMounted];
};
