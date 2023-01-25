import {
  BrowserRouter as Router,
  Routes,
  Route as Page,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import { useSelector } from "react-redux";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Coinpage from "./Pages/Coinpage/Coinpage";

const darkTheme = {
  main: "hsl(227, 13%, 14%)",
  secondary: "hsl(220, 11%, 11%)",
  inverted: "hsl(0, 0%, 100%)",
  textColor: "hsl(180, 8%, 97%)",
  searchBarColor: "hsl(222, 10%, 19%)",
};

const lightTheme = {
  main: "hsl(0, 0%, 98%)",
  secondary: "hsl(0, 0%, 100%)",
  inverted: "hsl(220, 11%, 11%)",
  textColor: "hsl(222, 10%, 19%)",
  searchBarColor: "hsl(0, 0%, 98%)",
};

export default function App() {
  const { isThemeDark } = useSelector((state) => state.localStorage);

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Page exact path="/" element={<Home />} />
          <Page exact path="/coin/:coinName" element={<Coinpage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
