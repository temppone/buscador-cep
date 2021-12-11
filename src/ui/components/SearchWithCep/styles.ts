import styled from 'styled-components';

import { slideTopTriangle } from '../../../shared/keyframes';

export const SearchWithCepContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: ${slideTopTriangle} 1000ms;
`;

export const SearchWithCepForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const FormButtonsContainer = styled.div`
    width: 100%;

    @media print {
        display: none;
    }
`;
