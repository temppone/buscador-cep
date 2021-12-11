import { useCallback, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

const useFetch = () => {
    const [data, setData] = useState<unknown>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<unknown>(false);

    const request = useCallback(async (params: AxiosRequestConfig) => {
        let response;

        let json;

        try {
            setError(false);

            setLoading(true);

            response = await axios(params);

            json = await response.data;

            if (json.ok === false) {
                throw new Error(json.message);
            }
        } catch (err) {
            json = null;

            setError(err);

            throw err;
        } finally {
            setData(json);

            setLoading(false);

            return { response, json };
        }
    }, []);

    return { data, loading, error, request };
};

export default useFetch;
