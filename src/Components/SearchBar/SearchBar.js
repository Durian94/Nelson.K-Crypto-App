import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import _ from "lodash";
import {
  SearchForm,
  StyledSearchIcon,
  SearchInput,
  SuggestedCoins,
  StyledLink,
} from "./SearchBar.styles";
import SearchIcon from "../../assets/images/Search.png";
import SearchIconLight from "../../assets/images/Search-light.png";

export default function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [suggestedCoins, setSuggestedCoins] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();

  const getSearchSuggestions = async (value) => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      );

      const list = _.map(data.coins, (obj) => ({
        ..._.pick(obj, ["id", "thumb", "name", "symbol"]),
      }));

      setLoading(false);
      setSuggestedCoins(list);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    getSearchSuggestions(inputValue);
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
      {props.isThemeDark && (
        <StyledSearchIcon src={SearchIcon} alt="search-icon" />
      )}
      {!props.isThemeDark && (
        <StyledSearchIcon src={SearchIconLight} alt="search-icon" />
      )}
      <SearchInput
        placeholder="Search..."
        handleInput={handleInput}
        inputValue={inputValue}
      />
      {inputValue &&
        filteredSearchList.length > 0 &&
        filteredSearchList.length < 25 && (
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
