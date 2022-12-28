import React from "react";
import { Container, CoinItem } from "./CoinList.styles";

export default class CoinList extends React.Component {
  render() {
    const { isLoading, hasError, coinListData } = this.props;

    return (
      <Container>
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Data Unavailable</p>}
        {!isLoading &&
          !hasError &&
          coinListData.map((item) => (
            <CoinItem key={item.id}>
              <p>{item.market_cap_rank}</p>
              <img src={item.image} alt="coin-logo" />
              <p>
                {item.name} ({item.symbol})
              </p>
              <p>{item.current_price}</p>
              <p>{item.price_change_percentage_1h_in_currency.toFixed(2)}%</p>
              <p>{item.price_change_percentage_24h_in_currency.toFixed(2)}%</p>
              <p>{item.price_change_percentage_7d_in_currency.toFixed(2)}%</p>
            </CoinItem>
          ))}
      </Container>
    );
  }
}
