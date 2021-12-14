import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { Info } from '@mui/icons-material';

import { IAddressCard, IResultValues } from '../../../@types';
import Modal from '../../../ui/components/Modal/index';
import { AddressCardContainer, AddressCardItem, AddressCardItemLabel, AddressCardItemValue, AddressCardResult } from './styles';

const AddressCard = function ({ data }: IAddressCard): JSX.Element {
    const [openModal, setOpenModal] = useState(false);
    const [cepToShow, setCepToShow] = useState('');

    return (
        <AddressCardContainer>
            {data.map((item: IResultValues) => (
                <AddressCardResult
                    data-cy='address-card'
                    key={item.cep}
                    onClick={() => {
                        setCepToShow(item.cep);
                        setOpenModal(true);
                    }}
                >
                    {item.bairro && (
                        <AddressCardItem>
                            <AddressCardItemLabel>Bairro</AddressCardItemLabel>
                            <AddressCardItemValue>{item.bairro}</AddressCardItemValue>
                        </AddressCardItem>
                    )}

                    {item.logradouro && (
                        <AddressCardItem>
                            <AddressCardItemLabel>Logradouro</AddressCardItemLabel>
                            <AddressCardItemValue>{item.logradouro}</AddressCardItemValue>
                        </AddressCardItem>
                    )}

                    {item.localidade && (
                        <AddressCardItem>
                            <AddressCardItemLabel>Localidade</AddressCardItemLabel>
                            <AddressCardItemValue>{item.localidade}</AddressCardItemValue>
                        </AddressCardItem>
                    )}

                    {item.uf && (
                        <AddressCardItem>
                            <AddressCardItemLabel>UF</AddressCardItemLabel>
                            <AddressCardItemValue>{item.uf}</AddressCardItemValue>
                        </AddressCardItem>
                    )}
                </AddressCardResult>
            ))}

            {openModal && (
                <Modal
                    body='Esse é o cep do endereço que você está procurando'
                    buttonName='Retornar'
                    header={cepToShow}
                    onClose={() => {
                        setOpenModal(false);
                    }}
                    onCopyContent={() => {
                        navigator.clipboard.writeText(cepToShow);
                        toast.success('CEP copiado!', {
                            icon: <Info />,
                            style: {
                                zIndex: 9999,
                            },
                        });
                    }}
                />
            )}
        </AddressCardContainer>
    );
};

export default AddressCard;
