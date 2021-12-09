import React from 'react';

import { IBurger } from '../../../@types';
import { BurgerContainer, BurgerLine } from './styles';

const Burger = ({ open, setOpen }: IBurger): JSX.Element => {
    return (
        <BurgerContainer open={open} onClick={() => setOpen(!open)}>
            <BurgerLine open={open} />
            <BurgerLine open={open} />
            <BurgerLine open={open} />
        </BurgerContainer>
    );
};

export default Burger;
