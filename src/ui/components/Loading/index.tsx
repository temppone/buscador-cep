import React from 'react';

import { LoadingContainer, LoadingLine } from './styles';

const Loading = (): JSX.Element => {
    return (
        <LoadingContainer>
            <LoadingLine />
            <LoadingLine />
            <LoadingLine />
        </LoadingContainer>
    );
};

export default Loading;
