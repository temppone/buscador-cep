import React, { ReactElement } from 'react';

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
    backgroundLess?: boolean;
    svg?: ReactElement;
    background?: string;
}

export interface IRoute {
    name: string;
    path: string;
    element: ReactElement;
    breadcrumb?: IBreadcrumb[];
}

export interface IBreadcrumb {
    name: string;
    path: string;
}

export interface IOption {
    label: string;
    value: string;
    sigla?: string;
}

export interface IResultValues {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
}

export interface IAddressCard {
    data: IResultValues[];
}

export interface IApiResponse {
    url: string;
    options: {
        method: string;
        headers: {
            'Content-Type': string;
        };
    };
}
