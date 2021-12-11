import styled from 'styled-components';

import { slideTopTriangle } from '../../shared/keyframes';

export const SearchCepContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
    animation: ${slideTopTriangle} 1000ms;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
        margin: 0 auto;
        flex-direction: row;
        gap: 4rem;
        align-items: center;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const SearchCepContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SearchCepSvgContainer = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 6rem 0 0 0;
        width: 100%;
    }
`;

export const SearchCepForm = styled.form`
    display: flex;
    flex-direction: column;
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
