import styled from "styled-components";
import { Input } from "../Input/Input";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.searchBarColor};
  padding: 0.5rem;
  border-radius: 0.5rem;
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
