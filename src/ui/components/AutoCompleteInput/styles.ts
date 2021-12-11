import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    height: 6rem;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 50%;
    }
`;

export const AutoCompleteLabel = styled.label`
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.text.primary};
    position: relative;
`;

export const IconField = styled.span`
    margin-top: 0.8rem;
    position: absolute;
    top: 50%;
    left: 88%;
    transform: translateY(-50%);
`;

export const AutoCompleteField = styled.input<{
    inputError?: boolean;
}>`
    width: 100%;
    height: 4.2rem;
    padding: 1rem;
    border-radius: 0.4rem;
    transition: 0.1s;
    background: ${({ theme }) => theme.palette.input?.background};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-top: 0.4rem;

    ::placeholder {
        color: ${({ theme }) => theme.palette.input?.placeholder};
    }

    border: 0.1rem solid
        ${({ inputError }) =>
            inputError
                ? ({ theme }) => theme.palette.warning
                : ({ theme }) => theme.palette.input?.outline};

    :hover,
    :focus {
        outline: none;
        border-color: ${({ inputError }) =>
            inputError
                ? ({ theme }) => theme.palette.warning
                : ({ theme }) => theme.palette.input?.outlineHover};
        background: ${({ theme }) => theme.palette.input?.hover};
    }
`;

export const InputWarning = styled.div`
    padding: 0.4rem 0.2rem;
    color: ${({ theme }) => theme.palette.warning};
    font-size: 1rem;
`;
