import React from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeMode from '../../hooks/useThemeMode';
import { darkTheme, lightTheme } from '../../shared/theme';

const ThemeContext: React.FC = function ({ children }) {
    const { themeName } = useThemeMode();

    const themeMode = themeName === 'light' ? lightTheme : darkTheme;

    return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
