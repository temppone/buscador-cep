import styled from 'styled-components';

export const AddressContainer = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;
