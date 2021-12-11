import styled from 'styled-components';

import { slideTopTriangle } from '../../shared/keyframes';

export const SearchAddressContainer = styled.div`
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
        gap: 2rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const SearchArddressSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

export const PresentationSvgContainer = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: flex;
        margin-bottom: 2rem;
        width: 100%;
    }
`;

export const SearchWithCepContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: ${slideTopTriangle} 1000ms;
`;

export const SearchWithCepForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const FormButtonsContainer = styled.div`
    width: 100%;

    @media print {
        display: none;
    }
`;
