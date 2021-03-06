import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    @media print {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    height: 60px;
    width: 60px;
    align-items: flex-flex-end;
    padding: 0.5rem;
`;
