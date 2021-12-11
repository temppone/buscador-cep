import styled from 'styled-components';

export const MapSectionContainer = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 25rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 60vh;
    }
`;
