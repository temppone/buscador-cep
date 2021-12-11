import { yupResolver } from '@hookform/resolvers/yup';
import { Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
                                    label="CEP"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={maskCep(value || '')}
                                    placeholder="00000-000"
                                    inputError={errors?.cep?.message}
                                    maxLength={9}
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
                                    type="text"
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
                                            label="Logradouro"
                                            inputError={
                                                errors?.address?.message
                                            }
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            disabled
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
                                            label="UF"
                                            inputError={
                                                errors?.address?.message
                                            }
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            disabled
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
                                            label="Cidade"
                                            inputError={
                                                errors?.address?.message
                                            }
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            disabled
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
                                            label="Bairro"
                                            inputError={
                                                errors?.address?.message
                                            }
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            disabled
                                        />
                                    )}
                                />
                            </>
                        )}

                        {!haveResult ? (
                            <FormButtonsContainer>
                                <Button type="submit" name="Buscar" />
                                <Button
                                    onClick={() => navigate('/buscar-cep')}
                                    name="Buscar CEP"
                                />
                                <Button
                                    type="button"
                                    name="Voltar"
                                    onClick={() => navigate('/')}
                                    backgroundLess
                                />
                            </FormButtonsContainer>
                        ) : (
                            <FormButtonsContainer>
                                <Button
                                    onClick={() => window.print()}
                                    name="Imprimir"
                                />
                                <Button
                                    onClick={() => {
                                        setHaveResult(false);
                                        setValue('cep', '');
                                        setDisabled(false);
                                        navigate('/buscar-endereco');
                                    }}
                                    name="Nova Busca"
                                    backgroundLess
                                />
                            </FormButtonsContainer>
                        )}
                    </SearchWithCepForm>
                </SearchWithCepContainer>
            </SearchArddressSection>
            <PresentationSvgContainer>
                <SearchAddressSvg width="55rem" height="55rem" />
            </PresentationSvgContainer>
        </SearchAddressContainer>
    );
};

export default SearchAddress;
