import React from "react";
import { SearchForm, StyledSearchIcon, SearchInput } from "./SearchBar.styles";
import SearchIcon from "../SearchBar/Search.png";
import SearchIconLight from "../SearchBar/Search-light.png";

export default class Search extends React.Component {
  render() {
    return (
      <SearchForm>
        {this.props.isThemeDark && (
          <StyledSearchIcon src={SearchIcon} alt="search-icon" />
        )}
        {!this.props.isThemeDark && (
          <StyledSearchIcon src={SearchIconLight} alt="search-icon" />
        )}
        <SearchInput placeholder="Search..." />
      </SearchForm>
    );
  }
}
