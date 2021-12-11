import React from 'react';

import { IRoute } from '../../../@types';
import { BreadcrumbContainer, BreadcrumbList } from './styles';

interface IBreadcrumb {
    routes: IRoute[];
}

const Breadcrumb = ({ routes }: IBreadcrumb) => {
    return (
        <BreadcrumbContainer>
            <BreadcrumbList>
                {routes.map((route, index) => (
                    <li key={route.name}>
                        <a href={route.path}>{route.name}</a>
                    </li>
                ))}
            </BreadcrumbList>
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;
