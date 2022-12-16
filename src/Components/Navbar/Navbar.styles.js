import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background-color: hsl(220, 11%, 11%);
  padding: 1.5rem 0 1.2rem 4.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: hsl(180, 8%, 97%);
  text-decoration: none;
  font-size: 23px;
  font-weight: 700;
  padding: .5rem 1.5rem;
  border-radius: .5rem;
`;

export const NavContainer = styled.nav`
   display: flex;
   align-items: center;
`;
export const RightNavContainer = styled.div`
   display: flex;
   margin-left: auto;
   padding-right: 1rem;
   gap: 1rem;
`;

export const CurrencyButton = styled.div`
  background-color: hsl(222, 10%, 19%);
  border-radius: .5rem;
  font-weight: 700;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;

  img {
    margin: 0 0 .3rem .3rem;
  }
`

export const ThemeButton = styled.div`
  background-color: hsl(222, 10%, 19%);
  padding: 0 1rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;
`;

