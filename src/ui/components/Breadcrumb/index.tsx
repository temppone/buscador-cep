import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IRoute } from '../../../@types';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbList } from './styles';

interface IBreadcrumb {
    routes: IRoute[];
}

const Breadcrumb = ({ routes }: IBreadcrumb) => {
    const location = useLocation();
    const isCurrent = (index: number) => {
        return location.pathname === routes[index].path;
    };

    return (
        <BreadcrumbContainer>
            <BreadcrumbList>
                {routes.map(({ path, name, breadcrumb }, index) => {
                    const disabled = isCurrent(index);
                    if (location.pathname === '/') {
                        return;
                    }

                    breadcrumb?.map((crumb) => {
                        if (crumb !== name) {
                            return;
                        }
                        return (
                            <BreadcrumbItem disabled={disabled}>
                                <Link to={path}>{name}</Link>
                            </BreadcrumbItem>
                        );
                    });
                    return null;
                })}
            </BreadcrumbList>
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;
