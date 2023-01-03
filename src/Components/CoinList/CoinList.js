import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  Container,
  CoinItem,
  StyledCoinListBar,
  Header,
  CoinListHeaders,
  CoinName,
  Percentages,
  CurrentPrice,
} from "./CoinList.styles";
import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";

export default class CoinList extends React.Component {
  render() {
    const { isLoading, hasError, coinListData } = this.props;

    return (
      <>
        <Header>Your overview</Header>
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Error!</p>}
        {!isLoading && !hasError && (
          <Container>
            <CoinListHeaders>
              <p>#</p>
              <p>Name</p>
              <p>Price</p>
              <p>1h%</p>
              <p>24h%</p>
              <p>7d%</p>
              <p>24h Volume/Market Cap</p>
              <p>Circulating/Total Supply</p>
              <p>Last 7d</p>
            </CoinListHeaders>
            {coinListData.map((item) => (
              <CoinItem key={item.id}>
                <p>{item.market_cap_rank}</p>
                <img src={item.image} alt="coin-logo" />
                <CoinName>
                  {item.name} ({item.symbol.toUpperCase()})
                </CoinName>
                <CurrentPrice>{item.current_price}</CurrentPrice>
                <Percentages
                  percent={item.price_change_percentage_1h_in_currency}
                >
                  <img
                    src={
                      item.price_change_percentage_1h_in_currency < 0
                        ? NegativeArrow
                        : PositiveArrow
                    }
                    alt="arrow-icon"
                  />
                  {item.price_change_percentage_1h_in_currency.toFixed(2)}%
                </Percentages>
                <Percentages
                  percent={item.price_change_percentage_24h_in_currency}
                >
                  <img
                    src={
                      item.price_change_percentage_24h_in_currency < 0
                        ? NegativeArrow
                        : PositiveArrow
                    }
                    alt="arrow-icon"
                  />
                  {item.price_change_percentage_24h_in_currency.toFixed(2)}%
                </Percentages>
                <Percentages
                  percent={item.price_change_percentage_7d_in_currency}
                >
                  <img
                    src={
                      item.price_change_percentage_7d_in_currency < 0
                        ? NegativeArrow
                        : PositiveArrow
                    }
                    alt="arrow-icon"
                  />
                  {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                </Percentages>
                <StyledCoinListBar
                  leftData={item.total_volume}
                  rightData={item.market_cap}
                />
                <StyledCoinListBar
                  leftData={item.circulating_supply}
                  rightData={item.total_supply}
                />
                <Sparklines
                  data={item.sparkline_in_7d.price}
                  limit={30}
                  width={60}
                  height={30}
                  style={{ width: "9rem" }}
                >
                  <SparklinesLine color="blue" style={{ fill: "none" }} />
                </Sparklines>
              </CoinItem>
            ))}
          </Container>
        )}
      </>
    );
  }
}
