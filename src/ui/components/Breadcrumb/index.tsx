import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IRoute } from '../../../@types';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbList } from './styles';

interface IBreadcrumbComponent {
    routes: IRoute[];
}

const Breadcrumb = function ({ routes }: IBreadcrumbComponent) {
    const location = useLocation();

    return (
        <BreadcrumbContainer>
            <BreadcrumbList>
                {routes.map((route, index) => {
                    if (location.pathname === route.path) {
                        return route?.breadcrumb?.map(crumb => (
                            <BreadcrumbItem disabled={location.pathname === crumb.path} key={route.path}>
                                <Link to={crumb.path}>{crumb.name}</Link>
                            </BreadcrumbItem>
                        ));
                    }
                    return null;
                })}
            </BreadcrumbList>
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;
