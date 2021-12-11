import React from 'react';

import { ReactComponent as SearchAddressSvg } from '../../ui/assets/svgs/searchAddress.svg';
import PageHeader from '../../ui/components/PageHeader';
import SearchWithCep from '../../ui/components/SearchWithCep';
import {
    PresentationSvgContainer,
    SearchAddressContainer,
    SearchArddressSection,
} from './styles';

const SearchAddress = (): JSX.Element => {
    return (
        <SearchAddressContainer>
            <SearchArddressSection>
                <PageHeader title="Buscar endereço" />
                <SearchWithCep />
            </SearchArddressSection>
            <PresentationSvgContainer>
                <SearchAddressSvg width="60rem" height="60rem" />
            </PresentationSvgContainer>
        </SearchAddressContainer>
    );
};

export default SearchAddress;
