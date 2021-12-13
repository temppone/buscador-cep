import { lazy } from 'react';
import { IRoute } from './@types';

const SearchAddress = lazy(() => import('./pages/SearchAddress'));
const SearchCep = lazy(() => import('./pages/SearchCep'));
const Home = lazy(() => import('./pages/Home'));

export const routes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },

    {
        name: 'Buscar Endereço',
        path: '/buscar-endereco',
        element: <SearchAddress />,
        breadcrumb: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'Buscar Endereço',
                path: '/buscar-endereco',
            },
        ],
    },

    {
        name: 'Buscar CEP',
        path: '/buscar-cep',
        element: <SearchCep />,
        breadcrumb: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'Buscar CEP',
                path: '/buscar-cep',
            },
        ],
    },
];
