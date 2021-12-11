import React from 'react';

import { IAddressCard, IResultValues } from '../../../@types';
import {
    AddressCardContainer,
    AddressCardItem,
    AddressCardItemLabel,
    AddressCardItemValue,
    AddressCardResult,
} from './styles';

const AddressCard = ({ data }: IAddressCard): JSX.Element => {
    return (
        <AddressCardContainer>
            {data.map((item: IResultValues) => (
                <AddressCardResult key={item.cep}>
                    {item.bairro && (
                        <AddressCardItem>
                            <AddressCardItemLabel>Bairro</AddressCardItemLabel>
                            <AddressCardItemValue>
                                {item.bairro}
                            </AddressCardItemValue>
                        </AddressCardItem>
                    )}
                    {item.logradouro && (
                        <AddressCardItem>
                            <AddressCardItemLabel>
                                Logradouro
                            </AddressCardItemLabel>
                            <AddressCardItemValue>
                                {item.logradouro}
                            </AddressCardItemValue>
                        </AddressCardItem>
                    )}
                </AddressCardResult>
            ))}
        </AddressCardContainer>
    );
};

export default AddressCard;
