import styled from 'styled-components';

import { slideTopTriangle } from '../../shared/keyframes';

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    align-self: center;
    animation: ${slideTopTriangle} 1000ms;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const NotFoundTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.extraPlusLarge};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 2rem;
    align-self: center;
`;

export const NotFoundSubTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 2rem;
`;

export const NotFoundDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 2rem;
`;
