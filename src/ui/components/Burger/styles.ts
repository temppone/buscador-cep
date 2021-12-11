import styled from 'styled-components';

interface IBurgerStyled {
    open: boolean;
}

export const BurgerContainer: any = styled.button`
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;

    &:focus {
        outline: none;
    }
`;

export const BurgerLine = styled.div<IBurgerStyled>`
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.palette.highlight.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
            open ? 'translateX(0px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
`;
