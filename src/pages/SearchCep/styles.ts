import styled from 'styled-components';

export const SearchCepContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
        margin: 0 auto;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const SearchCepForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ResultsContainer = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
`;

export const ResultsList = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
`;

export const ResultItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
`;
