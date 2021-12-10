import styled from 'styled-components';

export const SearchWithCepContainer = styled.section`
    display: flex;
    flex-direction: column;
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
