import React from 'react';

import { FooterContainer, FooterText } from './styles';

const Footer = (): JSX.Element => {
    return (
        <FooterContainer>
            <FooterText>
                &copy; {new Date().getFullYear()} BuscadorCEP!
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
