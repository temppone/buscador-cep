import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Burger from '../Burger';
import Menu from '../Menu';
import { HeaderContainer, LogoContainer } from './styles';

interface IHeader {
    onClick: () => void;
    logo?: React.ReactNode;
}

const Header = function ({ logo, onClick }: IHeader): JSX.Element {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setOpen(false));

    return (
        <HeaderContainer ref={ref}>
            <Burger open={open} setOpen={setOpen} />
            <Menu onClick={onClick} open={open} setOpen={setOpen} />

            <Link to='/'>
                <LogoContainer>{logo}</LogoContainer>
            </Link>
        </HeaderContainer>
    );
};

export default Header;
