import React from 'react';

import { NotFoundContainer, NotFoundDescription, NotFoundSubTitle, NotFoundTitle } from './styles';

const NotFound = function (): JSX.Element {
    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubTitle>Algo deu errado :(</NotFoundSubTitle>
            <NotFoundDescription>Não conseguimos encontrar a página que você está procurando.</NotFoundDescription>
        </NotFoundContainer>
    );
};

export default NotFound;
