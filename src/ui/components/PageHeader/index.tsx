import React from 'react';

import {
    HeaderTitleContainer,
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
            <HeaderTitleContainer>
                <PageHeaderTitle>{title}</PageHeaderTitle>
            </HeaderTitleContainer>
            <PageHeaderCaption>{caption}</PageHeaderCaption>
        </PageHeaderContainer>
    );
};

export default PageHeader;
