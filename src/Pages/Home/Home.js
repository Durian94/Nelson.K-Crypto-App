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
    hasMore: true,
  };

  getCoinListData = async (length) => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
          this.props.currency
        }&order=market_cap_desc&per_page=${
          length ? length : 20
        }&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const coinItem = data.map(
        ({
          id,
          market_cap,
          market_cap_rank,
          image,
          name,
          symbol,
          current_price,
          price_change_percentage_1h_in_currency,
          price_change_percentage_24h_in_currency,
          price_change_percentage_7d_in_currency,
          total_volume,
          total_supply,
          circulating_supply,
          sparkline_in_7d,
        }) => {
          return {
            id,
            market_cap,
            market_cap_rank,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency,
            total_volume,
            total_supply,
            circulating_supply,
            sparkline_in_7d,
          };
        }
      );

      this.setState({ coinListData: coinItem, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  addCoinListLength = () => {
    if (this.state.coinListData.length === 250) {
      this.setState({ hasMore: false });
    } else {
      this.getCoinListData(this.state.coinListData.length + 20);
    }
  };

  getBitcoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=15&interval=daily`
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

  componentDidUpdate(prevProps) {
    if (prevProps.currency !== this.props.currency) {
      this.getCoinListData();
      this.getBitcoinData();
    }
  }

  render() {
    const { currencySymbol } = this.props;
    return (
      <Container>
        <BitcoinChart {...this.state} currencySymbol={currencySymbol} />
        <CoinList
          {...this.state}
          currencySymbol={currencySymbol}
          addCoinListLength={this.addCoinListLength}
        />
      </Container>
    );
  }
}
