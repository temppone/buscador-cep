import { lazy } from 'react';

const SearchAddress = lazy(() => import('./pages/SearchAddress'));
const SearchCep = lazy(() => import('./pages/SearchCep'));
const Home = lazy(() => import('./pages/Home'));

export default [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },

    {
        name: 'Buscar Endereço',
        path: '/buscar-endereco',
        element: <SearchAddress />,
        breadcrumb: ['Home', 'Buscar Endereço'],
    },

    {
        name: 'Buscar CEP',
        path: '/buscar-cep',
        element: <SearchCep />,
        breadcrumb: ['Home', 'Buscar CEP'],
    },
];
