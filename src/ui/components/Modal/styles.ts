import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const CopyContentButton = styled.div`
    display: flex;
    justify-content: flex-end;
    float: right;

    button {
        padding: 1rem;
    }
`;

export const ModalContent = styled.div`
    width: 70%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 20%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 25%;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        width: 27%;
    }
`;

export const ModalHeader = styled.div`
    font-size: 1.2rem;
    padding: 1rem 1rem 0 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const ModalBody = styled.div`
    padding: 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;
