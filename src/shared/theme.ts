import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
    name: 'dark',

    palette: {
        background: {
            body: '#121619',
            primary: '#333333',
            secondary: '#f3d2c1',
            tertiary: '#fef6e4',
        },

        text: {
            primary: '#2D3132',
            secondary: '#b8c1ec',
            hover: '#303030',
        },

        highlight: {
            primary: '#F9DB95',
            background: '#F9DB95',
            text: '#fac43f',
            hover: '#F9DB95',
        },

        warning: '#f44336',
        outline: {
            primary: '#001858',
            secondary: '#F0EEF0',
            hover: '#f9db95',
        },

        input: {
            primary: '#2D3132',
            background: '#fffffe',
            hover: '#ffffff',
            outline: '#f2f2f2',
            placeholder: '#bdbdbd',
            outlineHover: '#f9db95',
        },

        header: {
            primary: '#fffffe',
            secondary: '#923932',
        },
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
        sl: '1441px',
    },

    fontSizes: {
        extraSmall: '0.8rem',
        small: '1rem',
        default: '1.5rem',
        large: '2rem',
        extraLarge: '3rem',
        extraPlusLarge: '5rem',
    },
};

export const lightTheme: DefaultTheme = {
    name: 'light',

    palette: {
        background: {
            body: '#fffdf9',
            primary: '#fffffe',
            secondary: '#f3d2c1',
            tertiary: '#fef6e4',
        },

        text: {
            primary: '#2D3132',
            secondary: '#353334',
            hover: '#303030',
        },

        highlight: {
            primary: '#f9db95',
            background: '#f9db95',
            text: '#303030',
            hover: '#ffcc5e',
        },

        warning: '#f44336',
        outline: {
            primary: '#001858',
            secondary: '#F0EEF0',
            hover: '#f9db95',
        },

        input: {
            background: '#fffffe',
            hover: '#ffffff',
            outline: '#f2f2f2',
            placeholder: '#bdbdbd',
            outlineHover: '#f9db95',
        },

        header: {
            primary: '#2D3132',
            secondary: '#353334',
        },
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
        sl: '1441px',
    },

    fontSizes: {
        extraSmall: '0.8rem',
        small: '1rem',
        default: '1.5rem',
        large: '2rem',
        extraLarge: '3rem',
        extraPlusLarge: '5rem',
    },
};
