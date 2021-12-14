import styled from 'styled-components';

export const ButtonContainer = styled.div`
    width: 100%;
`;
export const ButtonContent = styled.button<{ backgroundLess?: boolean }>`
    background-color: ${({ theme, backgroundLess: backgroudLess }) => (backgroudLess ? 'transparent' : theme.palette.button?.background)};
    outline: none;
    border: none;
    border-radius: 0.4rem;
    padding: 1.2rem;
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme, backgroundLess }) => (backgroundLess ? theme.palette.header?.primary : theme.palette.button?.text)};
    width: 100%;
    font-weight: 500;
    margin: 1rem 0;
    border: ${({ theme, backgroundLess }) => (backgroundLess ? `2px solid ${theme.palette.button?.hover}` : 'none')};

    &:hover {
        background-color: ${({ theme }) => theme.palette.highlight.hover};
    }
`;
