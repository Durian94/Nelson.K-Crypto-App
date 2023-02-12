import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

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
  background-color: ${({ theme }) => theme.main};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0 0.7rem;

  img {
    transform: rotate(180deg);
  }

  p {
    background-color: hsl(220, 11%, 11%);
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    color: hsl(130, 100%, 50%);
  }
`;

export const StyledCurrencySelector = styled(CurrencySelector)`
  select {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textColor};
    border: none;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export const ThemeButton = styled.div`
  background-color: ${({ theme }) => theme.main};
  padding: 0 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`;
