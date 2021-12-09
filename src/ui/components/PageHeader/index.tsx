import React from 'react';

import {
    PageHeaderCaption,
    PageHeaderContainer,
    PageHeaderTitle,
} from './styles';

interface IPageHeader {
    title: string;
    caption?: string;
}

const PageHeader = ({ title, caption }: IPageHeader): JSX.Element => {
    return (
        <PageHeaderContainer>
            <PageHeaderTitle>{title}</PageHeaderTitle>
            <PageHeaderCaption>{caption}</PageHeaderCaption>
        </PageHeaderContainer>
    );
};

export default PageHeader;
