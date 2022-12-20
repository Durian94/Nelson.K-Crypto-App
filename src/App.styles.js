import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: hsl(227, 13%, 14%); 
    font-family: 'Poppins', sans-serif;
    color: hsl(180, 8%, 97%);
  }
`;
