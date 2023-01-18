import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../SearchBar/SearchBar";
import NavbarTable from "../NavbarTable/NavbarTable";
import {
  Container,
  StyledNavLink,
  NavContainer,
  RightNavContainer,
  CurrencyButton,
  ThemeButton,
  StyledCurrencySelector,
} from "./Navbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import GreenArrow from "../../assets/images/positiveArrow.svg";

export default function Navbar(props) {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [navbarData, setNavbarData] = useState(null);

  const getTableData = async () => {
    try {
      setLoading(true);
      const { data } = await axios("https://api.coingecko.com/api/v3/global");

      setLoading(false);
      setNavbarData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  const { handleTheme, isThemeDark, getCurrency, currency, currencySymbol } =
    props;

  return (
    <>
      <Container>
        <NavContainer>
          <StyledNavLink to="/">Coins</StyledNavLink>
          <StyledNavLink>Portfolio</StyledNavLink>
        </NavContainer>
        <RightNavContainer>
          <Search isThemeDark={isThemeDark} />
          <CurrencyButton>
            <p>{currencySymbol}</p>
            <StyledCurrencySelector
              getCurrency={getCurrency}
              currency={currency}
            />
            <img src={GreenArrow} alt="green-arrow" />
          </CurrencyButton>
          <ThemeButton onClick={handleTheme}>
            {isThemeDark && <FontAwesomeIcon icon={faSun} />}
            {!isThemeDark && <FontAwesomeIcon icon={faMoon} />}
          </ThemeButton>
        </RightNavContainer>
      </Container>
      <NavbarTable
        navbarData={navbarData}
        isLoading={isLoading}
        hasError={hasError}
        currency={currency}
        currencySymbol={currencySymbol}
      />
    </>
  );
}
