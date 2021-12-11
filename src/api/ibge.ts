const IBGE_API_URL = 'https://servicodados.ibge.gov.br/api/v1/';

export const GET_STATES = () => {
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

export const GET_CITIES = (stateId: string) => {
    return {
        url: `${IBGE_API_URL}localidades/estados/${stateId}/municipios`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};
