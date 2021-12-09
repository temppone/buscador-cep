import React from 'react';

import PageHeader from '../../ui/components/PageHeader';
import SearchWithCep from '../../ui/components/SearchWithCep';
import { SearchAddressContainer } from './styles';

const SearchAddress = (): JSX.Element => {
    return (
        <SearchAddressContainer>
            <PageHeader title="Buscar endereço" />
            <SearchWithCep />
        </SearchAddressContainer>
    );
};

export default SearchAddress;
