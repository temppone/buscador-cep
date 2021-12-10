import { ReactElement } from 'react';

export interface IInputListItem {
    id: string;
    label: string;
}

export interface IBurger {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export interface IMenu {
    onClick?: () => void;
    open?: boolean;
    setOpen: (open: boolean) => void;
}

export type ThemeModeType = {
    themeName: string;
    themeToggler: () => void;
};

export interface ISwitchButton {
    onClick?: () => void;
}

export interface IAddress {
    logradouro?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    cep?: string;
    mapsCoordinates?: {
        lat: number;
        lng: number;
    };
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
}

export interface IRoute {
    name: string;
    path: string;
    element: ReactElement;
    breadcrumb?: string[];
}
