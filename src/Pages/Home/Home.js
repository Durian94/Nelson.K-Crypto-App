import React from "react";
import CoinList from "../../Components/CoinList/CoinList";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    coinData: [],
  };

  getCoinData = async () => {
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
      this.setState({ coinData: coinItem, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.getCoinData();
  }

  render() {
    return <CoinList {...this.state} />;
  }
}
