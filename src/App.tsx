import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as Page,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./App.styles";
import { useSelector } from "react-redux";
import { LocalStorageState } from "./store/app/appReducer";
import { darkTheme, lightTheme } from "./App.styles";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Coinpage from "./Pages/Coinpage/Coinpage";
import Portfolio from "./Pages/Portfolio/Portfolio";

export default function App() {
  const { isThemeDark } = useSelector(
    (state: LocalStorageState) => state.localStorage
  );

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Page path="/" element={<Home />} />
          <Page path="/coin/:coinName" element={<Coinpage />} />
          <Page path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
