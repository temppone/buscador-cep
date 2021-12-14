import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        palette: IColors;
        breakpoints: IBreakpoints;
        fontSizes: IFontSizes;
    }

    interface IColorShade {
        body?: string;
        primary?: string;
        secondary?: string;
        tertiary?: string;
        hover?: string;
        text?: string;
        background?: string;
        outline?: string;
        outlineHover?: string;
        placeholder?: string;
        gradient?: string;
    }

    interface IColors {
        background: IColorShade;
        text: IColorShade;
        highlight: IColorShade;
        outline: IColorShade;
        warning: string;
        input?: IColorShade;
        header?: IColorShade;
        button: IColorShade;
    }

    interface IBreakpoints {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        sl: string;
    }

    interface IFontSizes {
        extraSmall: string;
        small: string;
        default: string;
        large: string;
        extraLarge: string;
        extraPlusLarge: string;
    }
}
