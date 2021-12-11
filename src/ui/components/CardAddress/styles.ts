import styled from 'styled-components';

export const AddressCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddressCardResult = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
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
