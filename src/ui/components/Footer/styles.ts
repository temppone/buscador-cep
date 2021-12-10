import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    position: absolute;
    width: 100%;
    top: 100%;
    margin-top: 10rem;
`;

export const FooterText = styled.div`
    padding: 2rem;
`;
