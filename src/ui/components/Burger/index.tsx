import React from 'react';

import { IBurger } from '../../../@types';
import { BurgerContainer, BurgerLine } from './styles';

const Burger = function ({ open, setOpen }: IBurger): JSX.Element {
    return (
        <BurgerContainer onClick={() => setOpen(!open)} open={open}>
            <BurgerLine open={open} />
            <BurgerLine open={open} />
            <BurgerLine open={open} />
        </BurgerContainer>
    );
};

export default Burger;
