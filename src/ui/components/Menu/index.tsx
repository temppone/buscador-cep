import React from 'react';
import { Link } from 'react-router-dom';

import { IMenu } from '../../../@types';
import SwitchButton from '../SwitchButton';
import { MenuContainer, MenuItem } from './styles';

const Menu = function ({ open, onClick, setOpen }: IMenu): JSX.Element {
    return (
        <MenuContainer data-cy='menu-header' open={open}>
            <MenuItem>
                <Link onClick={() => setOpen(!open)} to='/'>
                    Home
                </Link>
            </MenuItem>
            <MenuItem>
                <Link onClick={() => setOpen(!open)} to='/buscar-endereco'>
                    Buscar endereço
                </Link>
            </MenuItem>
            <MenuItem>
                <Link onClick={() => setOpen(!open)} to='/buscar-cep'>
                    Buscar CEP
                </Link>
            </MenuItem>
            <MenuItem>
                <SwitchButton onClick={onClick} />
            </MenuItem>
        </MenuContainer>
    );
};

export default Menu;
