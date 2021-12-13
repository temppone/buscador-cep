import styled from 'styled-components';

import { slideTopTriangle } from '../../../shared/keyframes';

export const AddressCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2.4rem;
    animation: ${slideTopTriangle} 1000ms;
`;

export const AddressCardResult = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
    cursor: pointer;
    border-radius: 0.4rem;

    &:hover {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
`;

export const AddressCardItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.4rem;
    align-items: center;
    :nth-child(2n + 1) {
        background-color: ${({ theme }) => theme.palette.background.tertiary};
    }
`;

export const AddressCardItemLabel = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;

export const AddressCardItemValue = styled.div`
    font-size: 1.2rem;
`;
