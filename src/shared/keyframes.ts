import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const slideDown = keyframes`
    0% {
        opacity: 0;
        max-height: 0;
    }

    100% {
        opacity: 1;
        max-height: 100vh;
    }
  `;

export const slideTopWithOpacityBubbles = keyframes`
    from {
      opacity: 0;
      bottom: -5.2rem;
    }

    to {
      opacity: 1;
      bottom: -1.2rem;
    }
  `;

export const slideTopWithOpacityCross = keyframes`
    from {
      opacity: 0;
      top: 3rem;
    }

    to {
      opacity: 1;
      top: 1rem;
    }
`;

export const slideTopTriangle = keyframes`
    from {
        opacity: 0;
        top: -100px;
    }

    to {
        opacity: 1;
        top: -160px;
    }
`;
