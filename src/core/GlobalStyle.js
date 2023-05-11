import { createGlobalStyle } from "styled-components";
import xd from './background.jpg'
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
    background-image: url("${xd}");
    background-position: center;
  background-size: cover;
  min-height: 100vh;
    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    }
   }
  `;    