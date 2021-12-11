import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IOption } from '../../@types';
import { GET_CITIES_IBGE, GET_STATES_IBGE } from '../../api/ibge';
import { GET_STREETS } from '../../api/viacep';
import useFetch from '../../hooks/useFetch';
import routes from '../../routes';
import AutoCompleteInput from '../../ui/components/AutoCompleteInput';
import Breadcrumb from '../../ui/components/Breadcrumb';
import Button from '../../ui/components/Button';
import Input from '../../ui/components/Input';
import PageHeader from '../../ui/components/PageHeader';
import {
    ResultItem,
    ResultsContainer,
    ResultsList,
    SearchCepContainer,
    SearchCepForm,
} from './styles';

const SearchCep = () => {
    const { loading, error, request } = useFetch();
    const [states, setStates] = useState<IOption[]>([]);
    const [citties, setCitties] = useState<IOption[]>([]);
    const [streets, setStreets] = useState<IOption[]>([]);
    const [results, setResults] = useState<any[]>([]);
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState<IOption>({
        label: '',
        value: '',
    });
    const [selectedCity, setSelectedCity] = useState<IOption>({
        label: '',
        value: '',
    });

    useEffect(() => {
        const getStates = async () => {
            const { response } = await request(GET_STATES_IBGE());
            const statesResponse = response?.data?.map((state: any) => ({
                label: state.nome,
                value: state.id,
                sigla: state.sigla,
            }));

            setStates(statesResponse);
        };

        getStates();
    }, []);

    useMemo(() => {
        const getCitties = async () => {
            const { response } = await request(
                GET_CITIES_IBGE(selectedState?.sigla)
            );
            const cittiesResponse = response?.data?.map((city: any) => ({
                label: city.nome,
                value: city.id,
            }));

            setCitties(cittiesResponse);
        };

        if (states.length > 0) {
            getCitties();
        }
    }, [selectedState]);

    const getStreets = async (publicPlace: string) => {
        const { response } = await request(
            GET_STREETS(selectedCity.label, selectedState.sigla, publicPlace)
        );
        const streetsResponse = response?.data?.map((street: any) => ({
            label: street.logradouro,
            value: street.id,
        }));

        setStreets(streetsResponse);
    };

    return (
        <SearchCepContainer>
            <SearchCepForm>
                <PageHeader title="Buscar CEP" />
                <Breadcrumb routes={routes} />
                <AutoCompleteInput
                    onChange={(event: any, selected: any) => {
                        setSelectedState(selected);
                    }}
                    label="UF"
                    options={states}
                />
                <AutoCompleteInput
                    onChange={(event: any, selected: any) => {
                        setSelectedCity(selected);
                    }}
                    label="Cidade"
                    options={citties ?? []}
                />
                <Input
                    label="Logradouro"
                    inputError=""
                    onChange={(e) => getStreets(e.target.value)}
                />
                <Button type="submit" name="Buscar" />

                {results?.length > 0 && (
                    <ResultsContainer>
                        <ResultsList>
                            {results.map((result: any) => (
                                <ResultItem key={result.value}>
                                    {result.label}
                                </ResultItem>
                            ))}
                        </ResultsList>
                    </ResultsContainer>
                )}

                <Button
                    name="Buscar Endereço"
                    onClick={() => navigate('/buscar-endereco')}
                />

                <Button
                    name="Voltar"
                    onClick={() => navigate('/')}
                    backgroundLess
                />
            </SearchCepForm>
        </SearchCepContainer>
    );
};

export default SearchCep;
