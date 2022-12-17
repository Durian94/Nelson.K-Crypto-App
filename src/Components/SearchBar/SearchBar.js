import React from "react";
import { SearchForm, StyledSearchIcon, SearchInput } from "./SearchBar.styles";

export default class Search extends React.Component {
  render() {
    return (
      <SearchForm>
        <StyledSearchIcon />
        <SearchInput />
      </SearchForm>
    );
  }
}
