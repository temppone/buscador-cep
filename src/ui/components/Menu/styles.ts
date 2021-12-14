import styled from 'styled-components';

interface IStyledMenu {
    open?: boolean;
}

export const MenuContainer = styled.nav<IStyledMenu>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.palette.background.primary};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 80%;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 10;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 35rem;
    }
`;

export const MenuItem = styled.div`
    padding: 2rem 0;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    a {
        padding: 2rem 0;
        color: ${({ theme }) => theme.palette.header?.primary};
    }

    a:hover {
        color: ${({ theme }) => theme.palette.header?.hover};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 2rem;
        text-align: left;
    }
`;
