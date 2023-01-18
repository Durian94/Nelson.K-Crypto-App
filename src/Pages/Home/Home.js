import { useState, useEffect, useRef } from "react";
import axios from "axios";
import _ from "lodash";
import CoinList from "../../Components/CoinList/CoinList";
import BitcoinChart from "../../Components/BitcoinChart/BitcoinChart";
import { Container } from "./Home.styles";

export default function Home(props) {
  const [isLoading, setLoad] = useState(false);
  const [hasError, setError] = useState(false);
  const [coinListData, setCoinListData] = useState([]);
  const [bitcoinChartData, setBitcoinData] = useState(null);
  const [pages, setPages] = useState(0);

  const { currency, currencySymbol } = props;
  const prevProps = useRef(currency);
  const prevState = useRef(pages);

  const getCoinListData = async () => {
    try {
      const nextPage = pages + 1;
      setLoad(true);
      setPages(nextPage);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20
        &page=${nextPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );

      const newPageData = _.map(data, (obj) => ({
        ..._.pick(obj, [
          "id",
          "market_cap",
          "market_cap_rank",
          "image",
          "name",
          "symbol",
          "current_price",
          "price_change_percentage_1h_in_currency",
          "price_change_percentage_24h_in_currency",
          "price_change_percentage_7d_in_currency",
          "total_volume",
          "total_supply",
          "circulating_supply",
          "sparkline_in_7d",
        ]),
      }));

      setCoinListData([...coinListData, ...newPageData]);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setError(true);
    }
  };

  const getBitcoinData = async () => {
    try {
      setLoad(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=15&interval=daily`
      );

      setBitcoinData(data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCoinListData();
    // eslint-disable-next-line
    getBitcoinData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (prevProps.current.currency !== currency) {
      setPages(0);
      setCoinListData([]);
      getBitcoinData();
    }
    if (prevState.current.pages !== pages && pages === 0) {
      getCoinListData();
    }
    prevProps.current = props;
    prevState.current = pages;
    // eslint-disable-next-line
  }, [currency, pages]);

  return (
    <Container>
      <BitcoinChart
        bitcoinChartData={bitcoinChartData}
        coinListData={coinListData}
        isLoading={isLoading}
        hasError={hasError}
        currencySymbol={currencySymbol}
      />
      <CoinList
        coinListData={coinListData}
        isLoading={isLoading}
        hasError={hasError}
        currencySymbol={currencySymbol}
        getCoinListData={getCoinListData}
      />
    </Container>
  );
}
