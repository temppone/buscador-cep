import React from 'react';

import { IButton } from '../../../@types';
import { ButtonContainer, ButtonContent } from './styles';

const Button = ({
    name,
    onClick,
    backgroundLess,
    svg,
}: IButton): JSX.Element => {
    return (
        <ButtonContainer>
            <ButtonContent backgroundLess={backgroundLess} onClick={onClick}>
                {name}
                {svg}
            </ButtonContent>
        </ButtonContainer>
    );
};

export default Button;
