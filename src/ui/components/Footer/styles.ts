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
`;

export const FooterText = styled.div`
    padding: 1rem;
`;
