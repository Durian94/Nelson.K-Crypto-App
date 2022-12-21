import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as Page,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const darkTheme = {
  main: "hsl(227, 13%, 14%)",
  secondary: "hsl(220, 11%, 11%)",
  textColor: "hsl(180, 8%, 97%)",
};

const lightTheme = {
  main: "hsl(0, 0%, 98%)",
  secondary: "hsl(0, 0%, 100%)",
  textColor: "hsl(222, 10%, 19%)",
};

export default class App extends React.Component {
  state = {
    isThemeDark: true,
  };

  handleTheme = () => {
    this.setState({ isThemeDark: !this.state.isThemeDark });
    this.setInStorage();
  };

  setInStorage = () => {
    localStorage.setItem("isThemeDark", JSON.stringify(this.state.isThemeDark));
  };

  render() {
    const currentTheme =
      JSON.parse(localStorage.getItem("isThemeDark")) === null
        ? this.state.isThemeDark
        : JSON.parse(localStorage.getItem("isThemeDark"));

    return (
      <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
        <Router>
          <GlobalStyle />
          <Navbar handleTheme={this.handleTheme} isThemeDark={currentTheme} />
          <Routes>
            <Page exact path="/" component={Home} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}
