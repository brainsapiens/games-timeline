import {useCallback, useEffect, useState} from 'react';

export const useDarkMode = () => {
    const storage = window.localStorage;
    const [activeTheme, setActiveTheme] = useState('light');
    const [themeApplied, setThemeApplied] = useState(false);

    const setTheme = useCallback(theme => {
        storage.setItem('activeTheme', theme);
        setActiveTheme(theme);
    }, [storage]);

    const toggleTheme = () => {
        if (activeTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        const localTheme = storage.getItem('activeTheme');
        if (localTheme) {
            setActiveTheme(localTheme);
        } else {
            setTheme('light');
        }
        setThemeApplied(true);
    }, [storage, setTheme]);

    return [activeTheme, toggleTheme, themeApplied];
};
