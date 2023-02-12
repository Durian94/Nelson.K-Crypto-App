import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.searchBarColor};
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 20.68rem;
`;

export const StyledSearchIcon = styled.img`
  height: 1rem;
  margin: 0 0.5rem 0 0.2rem;
`;

export const SearchInput = styled(Input)`
  background-color: ${({ theme }) => theme.searchBarColor};
  width: 18rem;
  padding: 0.4rem 0;
  color: ${({ theme }) => theme.textColor};
  border: none;
  font-weight: 700;
  font-size: 14px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const SuggestedCoins = styled.ul`
  position: absolute;
  top: 5rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  max-width: 19.5rem;
  max-height: 13rem;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.searchBarColor};
  border: 0.5px solid ${({ theme }) => theme.inverted};
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
