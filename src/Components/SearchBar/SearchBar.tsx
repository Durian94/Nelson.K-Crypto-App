import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/search/actions";
import { LocalStorageState } from "../../store/app/appReducer";
import {
  SearchForm,
  StyledSearchIcon,
  SearchInput,
  SuggestedCoins,
  StyledLink,
} from "./SearchBar.styles";
import SearchIcon from "../../assets/images/Search.png";
import SearchIconLight from "../../assets/images/Search-light.png";

interface CoinProps {
  id: string;
  thumb: string;
  name: string;
  symbol: string;
}

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const { suggestedCoins } = useSelector((state: any) => state.searchData);
  const { isThemeDark } = useSelector(
    (state: LocalStorageState) => state.localStorage
  );
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(fetchSearchResults(inputValue));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (url: string) => {
    setInputValue("");
    navigate(url);
  };

  const filteredSearchList = suggestedCoins.filter((item: { name: string }) =>
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
            {suggestedCoins.map((coin: CoinProps) => (
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
