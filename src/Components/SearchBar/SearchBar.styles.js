import styled from "styled-components";
import { Input } from "../Input/Input";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const StyledSearchIcon = styled.img`
  height: 1rem;
  margin: 0 0.5rem 0 0.2rem;
`;

export const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.main};
  width: 18rem;
  padding: 0.4rem 0;
  color: ${(props) => props.theme.textColor};
  border: none;
  font-weight: 700;
  font-size: 14px;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;
