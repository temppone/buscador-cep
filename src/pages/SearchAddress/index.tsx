import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Search } from '@mui/icons-material';
import * as yup from 'yup';
import { ptShort } from 'yup-locale-pt';

import { SEARCH_CEP } from '../../api/viacep';
import useFetch from '../../hooks/useFetch';
import { lightTheme } from '../../shared/theme';
import { ReactComponent as SearchAddressSvg } from '../../ui/assets/svgs/searchAddress.svg';
import Button from '../../ui/components/Button';
import Input from '../../ui/components/Input';
import Loading from '../../ui/components/Loading';
import PageHeader from '../../ui/components/PageHeader';
import { maskCep, removeCepMask } from '../../utils/cepMask';
import {
    FormButtonsContainer,
    PresentationSvgContainer,
    SearchAddressContainer,
    SearchArddressSection,
    SearchWithCepContainer,
    SearchWithCepForm,
} from './styles';

interface IFormData {
    cep: string;

    address: string;

    state: string;

    city: string;

    neighborhood: string;

    number: string;

    complement: string;
}

const SearchAddress = (): JSX.Element => {
    const [haveResult, setHaveResult] = useState(false);

    const { loading, error, request } = useFetch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    yup.setLocale(ptShort);

    const schema = yup.object().shape({
        cep: yup

            .string()

            .required('CEP é obrigatório')

            .min(8)

            .max(8)

            .default(''),

        address: yup.string(),

        state: yup.string(),

        city: yup.string(),
    });

    const {
        handleSubmit,

        control,

        setError,

        setValue,

        clearErrors,

        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        clearErrors('cep');

        const getCepResult = async () => {
            setDisabled(false);

            const { response } = await request(
                SEARCH_CEP(removeCepMask(searchParams?.get('cep') ?? ''))
            );

            if (response?.data.erro) {
                setError('cep', { message: 'CEP não encontrado' });

                setHaveResult(false);

                return;
            }

            if (searchParams?.get('cep')?.length === 8) {
                setDisabled(true);

                setValue('address', response?.data?.logradouro);

                setValue('state', response?.data?.uf);

                setValue('city', response?.data?.localidade);

                setValue('neighborhood', response?.data?.bairro);

                setHaveResult(true);

                setValue('cep', searchParams.get('cep'));
            }

            if (error) {
                toast.error('Erro ao buscar o CEP');
            }

            clearErrors();
        };

        getCepResult();
    }, [searchParams]);

    const onSubmit = (data: IFormData) => {
        setSearchParams({
            cep: removeCepMask(data.cep),
        });
    };

    return (
        <SearchAddressContainer>
            <SearchArddressSection>
                <PageHeader title="Buscar endereço" />

                <SearchWithCepContainer>
                    <SearchWithCepForm
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            control={control}
                            name="cep"
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
                                    disabled={disabled}
                                    icon={
                                        loading ? (
                                            <Loading />
                                        ) : (
                                            <Search
                                                sx={{
                                                    color: lightTheme.palette
                                                        .input?.placeholder,
                                                    fontSize: '2.2rem',

                                                    marginTop: '0.8rem',
                                                }}
                                            />
                                        )
                                    }
                                    inputError={errors?.cep?.message}
                                    label="CEP"
                                    maxLength={9}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    placeholder="00000-000"
                                    type="text"
                                    value={maskCep(value || '')}
                                />
                            )}
                        />

                        {haveResult && (
                            <>
                                <Controller
                                    control={control}
                                    name="address"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            disabled
                                            inputError={
                                                errors?.address?.message
                                            }
                                            label="Logradouro"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="state"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            disabled
                                            inputError={
                                                errors?.address?.message
                                            }
                                            label="UF"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="city"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            disabled
                                            inputError={
                                                errors?.address?.message
                                            }
                                            label="Cidade"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="neighborhood"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            disabled
                                            inputError={
                                                errors?.address?.message
                                            }
                                            label="Bairro"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    )}
                                />
                            </>
                        )}

                        {!haveResult ? (
                            <FormButtonsContainer>
                                <Button name="Buscar" type="submit" />

                                <Button
                                    name="Buscar CEP"
                                    onClick={() => navigate('/buscar-cep')}
                                />

                                <Button
                                    backgroundLess
                                    name="Voltar"
                                    onClick={() => navigate('/')}
                                    type="button"
                                />
                            </FormButtonsContainer>
                        ) : (
                            <FormButtonsContainer>
                                <Button
                                    name="Imprimir"
                                    onClick={() => window.print()}
                                />
                                <Button
                                    backgroundLess
                                    name="Nova Busca"
                                    onClick={() => {
                                        setHaveResult(false);

                                        setValue('cep', '');

                                        setDisabled(false);

                                        navigate('/buscar-endereco');
                                    }}
                                />
                            </FormButtonsContainer>
                        )}
                    </SearchWithCepForm>
                </SearchWithCepContainer>
            </SearchArddressSection>

            <PresentationSvgContainer>
                <SearchAddressSvg height="55rem" width="55rem" />
            </PresentationSvgContainer>
        </SearchAddressContainer>
    );
};

export default SearchAddress;
