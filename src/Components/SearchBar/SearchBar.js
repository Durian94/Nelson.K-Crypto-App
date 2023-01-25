import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/search/actions";
import {
  SearchForm,
  StyledSearchIcon,
  SearchInput,
  SuggestedCoins,
  StyledLink,
} from "./SearchBar.styles";
import SearchIcon from "../../assets/images/Search.png";
import SearchIconLight from "../../assets/images/Search-light.png";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const { suggestedCoins } = useSelector((state) => state.searchData);
  const { isThemeDark } = useSelector((state) => state.localStorage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputValue(e.target.value);
    dispatch(fetchSearchResults(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (url) => {
    setInputValue("");
    navigate(url);
  };

  const filteredSearchList = suggestedCoins.filter((item) =>
    item.name.toLowerCase().includes(inputValue)
  );

  return (
    <SearchForm onSubmit={handleSubmit}>
      {isThemeDark && <StyledSearchIcon src={SearchIcon} alt="search-icon" />}
      {!isThemeDark && (
        <StyledSearchIcon src={SearchIconLight} alt="search-icon" />
      )}
      <SearchInput
        placeholder="Search..."
        handleInput={handleInput}
        inputValue={inputValue}
      />
      {inputValue &&
        filteredSearchList.length > 0 &&
        filteredSearchList.length < 50 && (
          <SuggestedCoins>
            {suggestedCoins.map((coin) => (
              <StyledLink
                to={`/coin/${coin.id}`}
                key={coin.id}
                onClick={() => handleClick(`/coin/${coin.id}`)}
              >
                <img src={coin.thumb} alt="icon" />
                {coin.name} ({coin.symbol})
              </StyledLink>
            ))}
          </SuggestedCoins>
        )}
    </SearchForm>
  );
}
