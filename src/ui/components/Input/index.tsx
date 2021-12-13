import React from 'react';

import { IconField, InputContainer, InputField, InputLabel, InputWarning } from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputError: string | undefined;
    icon?: SVGElement | JSX.Element;
}

const Input = function ({ label, inputError, icon, ...props }: IInput): JSX.Element {
    return (
        <InputContainer>
            <InputLabel>
                {label}
                {icon && <IconField>{icon}</IconField>}

                <InputField inputError={inputError} {...props} />
            </InputLabel>

            <InputWarning>{inputError}</InputWarning>
        </InputContainer>
    );
};

export default Input;
