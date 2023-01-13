import React from "react";
import axios from "axios";
import _ from "lodash";
import WithRouter from "../../Components/WithRouter/WithRouter";
import {
  SearchForm,
  StyledSearchIcon,
  SearchInput,
  SuggestedCoins,
  StyledLink,
} from "./SearchBar.styles";
import SearchIcon from "../../assets/images/Search.png";
import SearchIconLight from "../../assets/images/Search-light.png";

class Search extends React.Component {
  state = {
    inputValue: "",
    suggestedCoins: [],
    isLoading: false,
    hasError: false,
  };

  getSearchSuggestions = async (value) => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      );

      const list = _.map(data.coins, (obj) => ({
        ..._.pick(obj, ["id", "thumb", "name", "symbol"]),
      }));

      this.setState({ suggestedCoins: list, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
    this.getSearchSuggestions(this.state.inputValue);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ inputValue: "" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.key !== prevProps.location.key) {
      this.setState({ inputValue: "" });
    }
  }

  render() {
    const { inputValue, suggestedCoins } = this.state;
    const filteredSearchList = suggestedCoins.filter((item) =>
      item.name.includes(inputValue)
    );

    return (
      <SearchForm onSubmit={this.handleSubmit}>
        {this.props.isThemeDark && (
          <StyledSearchIcon src={SearchIcon} alt="search-icon" />
        )}
        {!this.props.isThemeDark && (
          <StyledSearchIcon src={SearchIconLight} alt="search-icon" />
        )}
        <SearchInput
          placeholder="Search..."
          handleInput={this.handleInput}
          inputValue={inputValue}
        />
        {inputValue &&
          filteredSearchList.length > 0 &&
          filteredSearchList.length < 25 && (
            <SuggestedCoins>
              {suggestedCoins.map((coin) => (
                <StyledLink to={`/coin/${coin.id}`} key={coin.id}>
                  <img src={coin.thumb} alt="icon" />
                  {coin.name} ({coin.symbol})
                </StyledLink>
              ))}
            </SuggestedCoins>
          )}
      </SearchForm>
    );
  }
}

export default WithRouter(Search);
