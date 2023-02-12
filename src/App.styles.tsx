import { createGlobalStyle, withTheme } from "styled-components";

interface Theme {
  main: string;
  secondary: string;
  inverted: string;
  textColor: string;
  searchBarColor: string;
}

type GlobalThemeProps = {
  theme: Theme;
};

export const darkTheme: Theme = {
  main: "hsl(227, 13%, 14%)",
  secondary: "hsl(220, 11%, 11%)",
  inverted: "hsl(0, 0%, 100%)",
  textColor: "hsl(180, 8%, 97%)",
  searchBarColor: "hsl(222, 10%, 19%)",
};

export const lightTheme: Theme = {
  main: "hsl(0, 0%, 98%)",
  secondary: "hsl(0, 0%, 100%)",
  inverted: "hsl(220, 11%, 11%)",
  textColor: "hsl(222, 10%, 19%)",
  searchBarColor: "hsl(0, 0%, 98%)",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }: GlobalThemeProps) => theme.main}; 
    font-family: Poppins, sans-serif;
    color: ${({ theme }: GlobalThemeProps) => theme.textColor};
  }
`;

export default withTheme(GlobalStyle);
