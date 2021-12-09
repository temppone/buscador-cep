import React from 'react';

import { IButton } from '../../../@types';
import { ButtonContainer, ButtonContent } from './styles';

const Button = ({ name, onClick }: IButton): JSX.Element => {
    return (
        <ButtonContainer>
            <ButtonContent onClick={onClick}>{name}</ButtonContent>
        </ButtonContainer>
    );
};

export default Button;
