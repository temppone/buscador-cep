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
