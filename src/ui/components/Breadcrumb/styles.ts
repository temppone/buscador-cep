import styled from 'styled-components';

interface IBreadcrumbItem {
    disabled?: boolean;
}

export const BreadcrumbContainer = styled.div`
    display: flex;
`;

export const BreadcrumbList = styled.ol`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const BreadcrumbItem = styled.li<IBreadcrumbItem>`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.default};

    ::after {
        content: '/';
        margin: 0 0.5rem;
    }

    :last-child::after {
        content: '';
    }

    ${({ disabled }) => disabled && 'pointer-events: none; opacity: 0.5;'}
`;
