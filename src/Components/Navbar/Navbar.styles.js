import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  padding: 1.5rem 0 1.2rem 4.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  font-size: 23px;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
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
  background-color: ${(props) => props.theme.main};
  border-radius: 0.5rem;
  font-weight: 700;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;

  img {
    margin: 0 0 0.3rem 0.3rem;
  }
`;

export const ThemeButton = styled.div`
  background-color: ${(props) => props.theme.main};
  padding: 0 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`;
