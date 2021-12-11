import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptShort } from 'yup-locale-pt';

import { IOption, IResultValues } from '../../@types';
import { GET_CITIES_IBGE, GET_STATES_IBGE } from '../../api/ibge';
import { GET_STREETS } from '../../api/viacep';
import useFetch from '../../hooks/useFetch';
import { ReactComponent as SearchCepSvg } from '../../ui/assets/svgs/searchCep.svg';
import AutoCompleteInput from '../../ui/components/AutoCompleteInput';
import Button from '../../ui/components/Button';
import AddressCard from '../../ui/components/CardAddress';
import Input from '../../ui/components/Input';
import PageHeader from '../../ui/components/PageHeader';
import {
    SearchCepContainer,
    SearchCepContent,
    SearchCepForm,
    SearchCepSvgContainer,
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
    const [results, setResults] = useState<IResultValues[]>([]);
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
        setError,
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

        if (error) {
            toast.error('Não foi possível encontrar o endereço');
            return;
        }

        if (response?.data.length === 0) {
            toast.error('É necessário digitar um logradouro');
        }

        if (response?.data.length > 0) {
            console.log({ response });
            setResults(response?.data);
            toast.success('Endereço encontrado');
        }
    };

    const onSubmit = (data: IFormSearchCep) => {
        getStreets(data.street);
    };

    return (
        <SearchCepContainer>
            <SearchCepContent>
                <SearchCepForm action="" onSubmit={handleSubmit(onSubmit)}>
                    <PageHeader title="Buscar CEP" />

                    <AutoCompleteInput
                        inputError={errors?.state?.message}
                        label="UF"
                        onChange={(event: any, selected: any) => {
                            setSelectedState(selected);
                            setValue('state', selected?.value || '');
                        }}
                        options={states}
                    />

                    <AutoCompleteInput
                        inputError={errors?.city?.message}
                        label="Cidade"
                        onChange={(event: any, selected: any) => {
                            setSelectedCity(selected);

                            setValue('city', selected?.value || '');
                        }}
                        options={citties ?? []}
                    />

                    <Controller
                        control={control}
                        name="street"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                inputError={errors?.street?.message}
                                label="Logradouro"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value || ''}
                            />
                        )}
                    />

                    <Button
                        name={loading ? 'Carregando...' : 'Buscar'}
                        type="submit"
                    />
                </SearchCepForm>

                <Button
                    name="Buscar Endereço"
                    onClick={() => navigate('/buscar-endereco')}
                />

                <Button
                    backgroundLess
                    name="Voltar"
                    onClick={() => navigate('/')}
                />
            </SearchCepContent>

            <SearchCepSvgContainer>
                {results ? (
                    <AddressCard data={results} />
                ) : (
                    <SearchCepSvg height="50rem" width="50rem" />
                )}
            </SearchCepSvgContainer>
        </SearchCepContainer>
    );
};

export default SearchCep;
