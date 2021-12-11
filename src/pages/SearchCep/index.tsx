import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ptShort } from 'yup-locale-pt';

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

interface IFormSearchCep {
    state: string;
    city: string;
    street: string;
}

const SearchCep = () => {
    const { loading, error, request } = useFetch();
    const [states, setStates] = useState<IOption[]>([]);
    const [citties, setCitties] = useState<IOption[]>([]);
    const [results, setResults] = useState<string[]>([]);
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState<IOption>({
        label: '',
        value: '',
    });
    const [selectedCity, setSelectedCity] = useState<IOption>({
        label: '',
        value: '',
    });

    yup.setLocale(ptShort);

    const schema = yup.object().shape({
        state: yup.string().required('O estado é obrigatório'),
        city: yup.string().required('A cidade é obrigatória'),
        street: yup.string().min(3),
    });

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
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

        setResults(response?.data);
    };

    const onSubmit = (data: IFormSearchCep) => {
        toast.promise(getStreets(data.street), {
            loading: 'Carregando...',
            success: 'Endereço encontrado!',
            error: error ? 'Erro ao buscar endereço' : '',
        });
    };

    return (
        <SearchCepContainer>
            <SearchCepForm action="" onSubmit={handleSubmit(onSubmit)}>
                <PageHeader title="Buscar CEP" />
                <Breadcrumb routes={routes} />

                <AutoCompleteInput
                    onChange={(event: any, selected: any) => {
                        setSelectedState(selected);
                        setValue('state', selected.value);
                    }}
                    label="UF"
                    options={states}
                    inputError={errors?.state?.message}
                />

                <AutoCompleteInput
                    onChange={(event: any, selected: any) => {
                        setSelectedCity(selected);
                        setValue('city', selected.value);
                    }}
                    label="Cidade"
                    options={citties ?? []}
                    inputError={errors?.city?.message}
                />

                <Controller
                    control={control}
                    name="street"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Logradouro"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            inputError={errors?.street?.message}
                        />
                    )}
                />

                <Button
                    type="submit"
                    name={loading ? 'Carregando...' : 'Buscar'}
                />
            </SearchCepForm>

            {results?.length > 0 && (
                <ResultsContainer>
                    <ResultsList>
                        {results.map((result: any) => (
                            <ResultItem key={result.value}>
                                {result.localidade} - {result.cep} -{' '}
                                {result?.bairro}
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
        </SearchCepContainer>
    );
};

export default SearchCep;
