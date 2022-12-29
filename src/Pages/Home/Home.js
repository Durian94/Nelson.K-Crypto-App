import React from "react";
import axios from "axios";
import CoinList from "../../Components/CoinList/CoinList";
import BitcoinChart from "../../Components/BitcoinChart/BitcoinChart";
import { Container } from "./Home.styles";

export default class Home extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    coinListData: [],
    bitcoinChartData: null,
  };

  getCoinListData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      const coinItem = data.map(
        ({
          id,
          market_cap_rank,
          image,
          name,
          symbol,
          current_price,
          price_change_percentage_1h_in_currency,
          price_change_percentage_24h_in_currency,
          price_change_percentage_7d_in_currency,
        }) => {
          return {
            id,
            market_cap_rank,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency,
          };
        }
      );
      this.setState({ coinListData: coinItem, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getBitcoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=15&interval=daily"
      );

      this.setState({ bitcoinChartData: data, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.getCoinListData();
    this.getBitcoinData();
  }

  render() {
    return (
      <Container>
        <BitcoinChart {...this.state} />
        <CoinList {...this.state} />
      </Container>
    );
  }
}
