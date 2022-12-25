import React from "react";
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
} from "./Navbar.styles";
import GreenArrow from "../../assets/images/green-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    navbarData: null,
  };

  getTableData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios("https://api.coingecko.com/api/v3/global");

      this.setState({
        navbarData: data,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.getTableData();
  }

  render() {
    const { handleTheme, isThemeDark } = this.props;

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
              <p>
                $ USD
                <img src={GreenArrow} alt="arrow" />
              </p>
            </CurrencyButton>
            <ThemeButton onClick={handleTheme}>
              {isThemeDark && <FontAwesomeIcon icon={faSun} />}
              {!isThemeDark && <FontAwesomeIcon icon={faMoon} />}
            </ThemeButton>
          </RightNavContainer>
        </Container>
        <NavbarTable {...this.state} />
      </>
    );
  }
}
