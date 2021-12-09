import { useEffect, useState } from 'react';

import { ThemeModeType } from '../@types';

const useThemeMode = (): ThemeModeType => {
    const [themeName, setThemeName] = useState('dark');

    const setMode = (modeName: string) => {
        window.localStorage.setItem('theme', modeName);
        setThemeName(modeName);
    };

    const themeToggler = () =>
        themeName === 'dark' ? setMode('light') : setMode('dark');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setThemeName(localTheme);
        }
    }, []);

    return { themeName, themeToggler };
};

export default useThemeMode;
