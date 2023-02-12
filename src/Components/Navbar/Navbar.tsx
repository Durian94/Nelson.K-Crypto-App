import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/app/actions";
import { LocalStorageState } from "../../store/app/appReducer";
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

export default function Navbar() {
  const { isThemeDark, currencySymbol } = useSelector(
    (state: LocalStorageState) => state.localStorage
  );
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <NavContainer>
          <StyledNavLink to="/">Coins</StyledNavLink>
          <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        </NavContainer>
        <RightNavContainer>
          <Search />
          <CurrencyButton>
            <p>{currencySymbol}</p>
            <StyledCurrencySelector />
            <img src={GreenArrow} alt="green-arrow" />
          </CurrencyButton>
          <ThemeButton onClick={() => dispatch(setTheme())}>
            {isThemeDark && <FontAwesomeIcon icon={faSun} />}
            {!isThemeDark && <FontAwesomeIcon icon={faMoon} />}
          </ThemeButton>
        </RightNavContainer>
      </Container>
      <NavbarTable />
    </>
  );
}
