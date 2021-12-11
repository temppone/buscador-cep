import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    width: 100%;
    margin-top: 5rem;
    background: ${({ theme }) => theme.palette.background.tertiary};
    position: relative;
    top: 100%;
    height: 10rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        position: absolute;
    }
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
