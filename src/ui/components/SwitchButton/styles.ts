import styled from 'styled-components';

type ISwitchButtonStyled = {
    toggle?: boolean;
};

export const SwitchButtonSlider = styled.span<ISwitchButtonStyled>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme, toggle }) =>
        toggle ? theme.palette.text.primary : theme.palette.text.primary};
    border-radius: 15px;
    transition: 0.4s;

    &:before {
        content: '';

        position: absolute;
        left: 2px;
        bottom: 2px;

        width: 20px;
        height: 20px;
        border-radius: 100%;

        background-color: ${({ toggle, theme }) =>
            toggle
                ? theme.palette.highlight.primary
                : theme.palette.highlight.primary};

        transition: 0.4s;
    }
`;

export const SwitchButtonInput = styled.input`
    &:checked + ${SwitchButtonSlider}:before {
        transform: translateX(23.4px);
    }
`;

export const SwitchButtonContainer = styled.label<ISwitchButtonStyled>`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    background-color: ${({ toggle, theme }) =>
        toggle ? theme.palette.text.primary : theme.palette.text.primary};
    border-radius: 15px;
    transition: 0.4s;

    & ${SwitchButtonInput} {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;
