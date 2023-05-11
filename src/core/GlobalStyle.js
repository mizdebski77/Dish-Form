import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    word-break: break-word;
    text-decoration: none;
    padding: 20px;
    background: linear-gradient(to right, ${({ theme }) => theme.color.mainColor}, white);

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    }
   }
  `;    