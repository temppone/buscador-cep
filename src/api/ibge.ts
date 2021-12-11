import { IApiResponse } from '../@types';

const IBGE_API_URL = 'https://servicodados.ibge.gov.br/api/v1/';

export const GET_STATES_IBGE = (): IApiResponse => {
    return {
        url: `${IBGE_API_URL}localidades/estados`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};

export const GET_CITIES_IBGE = (state?: string): IApiResponse => {
    return {
        url: `${IBGE_API_URL}localidades/estados/${state}/distritos`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};
