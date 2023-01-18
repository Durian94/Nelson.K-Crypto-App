import {
  BrowserRouter as Router,
  Routes,
  Route as Page,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import { useLocalState } from "./utilities/Hooks/Hooks";
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
  const [isThemeDark, setTheme] = useLocalState("isThemeDark", true);
  const [currency, setCurrency] = useLocalState("currency", "usd");

  const handleTheme = () => {
    setTheme(!isThemeDark);
  };

  const getCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const currencySymbol = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  })
    .format(0)
    .replace(/[a-zA-Z0-9.]/g, "");

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar
          handleTheme={handleTheme}
          getCurrency={getCurrencyChange}
          isThemeDark={isThemeDark}
          currency={currency}
          currencySymbol={currencySymbol}
        />
        <Routes>
          <Page
            exact
            path="/"
            element={
              <Home currency={currency} currencySymbol={currencySymbol} />
            }
          />
          <Page
            exact
            path="/coin/:coinName"
            element={
              <Coinpage currency={currency} currencySymbol={currencySymbol} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
