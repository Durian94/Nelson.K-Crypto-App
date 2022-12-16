import React from "react";
import Search from "../SearchBar/SearchBar";
import NavbarTable from "../NavbarTable/NavbarTable";
import { Container, StyledNavLink, NavContainer, RightNavContainer, CurrencyButton, ThemeButton } from "./Navbar.styles";
import GreenArrow from "./green-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
  
    render() {
      return (
      <>
      <Container>
        <NavContainer>
         <StyledNavLink to="/">Coins</StyledNavLink>
         <StyledNavLink>Portfolio</StyledNavLink>
        </NavContainer>
        <RightNavContainer>
         <Search />
         <CurrencyButton>
           <p>$ USD
            <img src={GreenArrow} alt="arrow" />
           </p>
         </CurrencyButton>
         <ThemeButton>
           <FontAwesomeIcon icon={faSun} />
         </ThemeButton>
        </RightNavContainer>     
      </Container>
      <NavbarTable />
      </>
      )
    }
  }
  