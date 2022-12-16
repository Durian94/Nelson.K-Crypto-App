import styled from "styled-components";
import { Icon }  from "../SearchIcon/SearchIcon";
import { Input } from "../Input/Input";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: hsl(222, 10%, 19%);
  padding: .5rem;
  border-radius: .5rem;
`;

export const StyledSearchIcon = styled(Icon)`
   height: 1rem;
   margin: 0 .5rem 0 .2rem;
`

export const SearchInput = styled(Input)`
  background-color: hsl(222, 10%, 19%);
  width: 18rem;
  padding: .4rem 0;
  color: hsl(180, 8%, 97%);
  border: none;
  font-weight: 700;
  font-size: 14px;
  outline: none;

  ::placeholder {
    color: hsl(180, 8%, 97%);
  }
`



