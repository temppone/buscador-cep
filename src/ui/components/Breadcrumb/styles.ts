import styled from 'styled-components';

interface IBreadcrumbItem {
    disabled?: boolean;
}

export const BreadcrumbContainer = styled.div`
    display: flex;
    padding: 0 2rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 960px;
        margin: 0 auto;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 1280px;
    }
`;

export const BreadcrumbList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
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
