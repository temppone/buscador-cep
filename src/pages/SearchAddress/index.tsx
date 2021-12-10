import React from 'react';

import PageHeader from '../../ui/components/PageHeader';
import SearchWithCep from '../../ui/components/SearchWithCep';
import { SearchAddressContainer, SearchArddressSection } from './styles';

const SearchAddress = (): JSX.Element => {
    return (
        <SearchAddressContainer>
            <SearchArddressSection>
                <PageHeader title="Buscar endereço" />
                <SearchWithCep />
            </SearchArddressSection>
        </SearchAddressContainer>
    );
};

export default SearchAddress;
