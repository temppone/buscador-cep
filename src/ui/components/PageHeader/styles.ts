import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    margin-bottom: 2rem;
`;

export const HeaderTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PageHeaderTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    font-weight: bold;
    margin: 0;
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;

    :after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: 0.2rem;
        z-index: -1;
        width: 1.5rem;
        height: 1.5rem;
        background-color: ${({ theme }) => theme.palette.highlight.primary};
    }
`;

export const PageHeaderCaption = styled.h2`
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.small};
`;
