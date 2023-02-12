import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCoin,
  fetchPortfolioData,
  resetSearch,
  fetchCoinName,
} from "../../store/portfolio/actions";
import Calendar from "react-calendar";
import {
  Container,
  Buttons,
  FormContainer,
  CoinList,
  HeaderSection,
  CalendarContainer,
} from "./CoinSelectorForm.styles";

export default function CoinSelectorForm(props: any) {
  const [openCalendar, setCalendar] = useState(false);
  const [amount, setAmount] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [purchaseDate, setDate] = useState(new Date());
  const { searchedCoins, portfolio } = useSelector(
    (state: any) => state.portfolio
  );
  const dispatch: any = useDispatch();
  const prevState = useRef(portfolio);

  const submitNewCoin = () => {
    if (inputValue && parseInt(amount) > 0 && purchaseDate) {
      dispatch(
        addNewCoin({
          id: inputValue,
          amount: parseInt(amount),
          purchaseDate: purchaseDate,
        })
      );
    }
    setAmount("");
    setDate(new Date());
    setInputValue("");
  };

  const handleCoinName = (e: any) => {
    setInputValue(e.target.innerText);
    dispatch(resetSearch());
  };

  const handleSearch = (e: any) => {
    setInputValue(e.target.value);
    dispatch(fetchCoinName(inputValue));
  };

  const handleCalendar = (date: Date) => {
    setCalendar(!openCalendar);
    setDate(date);
  };

  useEffect(() => {
    if (portfolio.length === prevState.current.length + 1) {
      dispatch(fetchPortfolioData(portfolio));
      props.handleSearchWindow();
    }
    prevState.current = portfolio;
    // eslint-disable-next-line
  }, [portfolio]);

  const date = purchaseDate.toString().slice(4, 15);
  return (
    <Container>
      <FormContainer>
        <HeaderSection>
          <h3>Select Coin</h3>
          <span onClick={props.handleSearchWindow}>+</span>
        </HeaderSection>
        <input
          value={inputValue}
          onChange={handleSearch}
          placeholder="Select Coin"
        />
        {inputValue && searchedCoins.length > 0 && (
          <CoinList>
            {inputValue &&
              searchedCoins.length < 50 &&
              searchedCoins.map((coin: { id: string; thumb: string }) => (
                <li key={coin.id} onClick={handleCoinName}>
                  <img src={coin.thumb} alt="icon" />
                  {coin.id}
                </li>
              ))}
          </CoinList>
        )}
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Purchased Amount"
        />
        <p onClick={() => setCalendar(!openCalendar)}>
          Purchased Date: <span>{date}</span>
        </p>
        {openCalendar && (
          <CalendarContainer>
            <Calendar onClickDay={handleCalendar} value={purchaseDate} />
          </CalendarContainer>
        )}
        <Buttons>
          <button onClick={props.handleSearchWindow}>Close</button>
          <button onClick={submitNewCoin}>Save and Continue</button>
        </Buttons>
      </FormContainer>
    </Container>
  );
}
