import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route as Page
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './App.styles';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Page exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

