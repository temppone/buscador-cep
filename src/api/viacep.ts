export const API_VIACEP = 'https://viacep.com.br/ws/';

export const SEARCH_CEP = (cep: string) => {
    return {
        url: `${API_VIACEP}${cep}/json/`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};

export const GET_STREETS = (city?: string, state?: string, street?: string) => {
    return {
        url: `${API_VIACEP}${state}/${city}/${street}/json/`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};

export const GET_CEP = (city?: string, state?: string, street?: string) => {
    return {
        url: `${API_VIACEP}${state}/${city}/${street?.replace(' ', '+')}/json/`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
};
