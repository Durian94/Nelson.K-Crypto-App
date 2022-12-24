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

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("isThemeDark")) !== null) {
      this.setState({
        isThemeDark: JSON.parse(localStorage.getItem("isThemeDark")),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isThemeDark !== this.state.isThemeDark) {
      this.setInStorage();
    }
  }

  render() {
    const { isThemeDark } = this.state;

    return (
      <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
        <Router>
          <GlobalStyle />
          <Navbar handleTheme={this.handleTheme} isThemeDark={isThemeDark} />
          <Routes>
            <Page exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}
