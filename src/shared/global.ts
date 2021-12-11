import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swa');

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  button{
    box-shadow: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  a:hover{
    color: ${({ theme }) => theme.palette.text.hover};
  }

  html, body, #root{
    height: 100%;
    scroll-behavior: smooth;
  }

  html {
    font-size: 12px;
    background: ${({ theme }) => theme.palette.background.body};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: 'Sora', sans-serif;


    .App{
      display: flex;
      flex-direction: column;
      min-height: calc(100vh + 10rem);
    }

    .AppBody{
      flex: 1;
      background: ${({ theme }) => theme.palette.background.body};
    }
  }
`;
