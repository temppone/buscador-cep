import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.small};
    position: absolute;
    width: 100%;
    top: 100%;
    margin-top: 1rem;
    background: ${({ theme }) => theme.palette.background.tertiary};
    padding: 2rem;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
        margin: 0 auto;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const FooterText = styled.div`
    align-self: center;
    padding: 2rem;
`;
