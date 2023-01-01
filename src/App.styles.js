import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.main}; 
    font-family: Poppins, sans-serif;
    color: ${({ theme }) => theme.textColor};
  }
`;
