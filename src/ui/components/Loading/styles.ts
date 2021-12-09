import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const LoadingLine = styled.div`
    display: inline-block;
    width: 0.5rem;
    height: 1.2rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.palette.highlight.primary};
    animation: growing 1.5s 3s infinite;
    margin-right: 0.5rem;

    :nth-last-child(1) {
        animation-delay: 0.2s;
    }

    :nth-last-child(2) {
        animation-delay: 0.4s;
    }

    :nth-last-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes growing {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
`;
