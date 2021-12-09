import styled from 'styled-components';

import { slideDown } from '../../shared/keyframes';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
        margin: 0 auto;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    animation: ${slideDown} 1000ms;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
        justify-content: space-space-between;
        align-items: center;
        padding-top: 5rem;
    }
`;

export const HomePresentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-right: 4rem;
        height: 60vh;
        justify-content: space-between;
    }
`;

export const HomeHeader = styled.h1`
    display: flex;
    flex-direction: column;
    width: 15rem;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 50%;
        font-size: ${({ theme }) => theme.fontSizes.extraPlusLarge};
    }
`;

export const HomeSubHeaders = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HomeSubHeader = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0.5rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-bottom: 3rem;
    }
`;

export const HomeButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-end;
        gap: 2rem;
    }
`;

export const HomeMap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
