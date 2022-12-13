import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route as Page
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './App.styles';
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Page exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

