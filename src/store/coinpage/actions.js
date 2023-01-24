import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoinpageData = createAsyncThunk(
  "FETCH_COINPAGE_DATA",
  async (coin) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      const filteredItems = {
        image: data.image.small,
        name: data.name,
        symbol: data.symbol,
        link: data.links.homepage[0],
        price_24h: data.market_data.price_change_percentage_24h,
        currentPrice: data.market_data.current_price,
        ath: data.market_data.ath,
        athDate: data.market_data.ath_date,
        atl: data.market_data.atl,
        atlDate: data.market_data.atl_date,
        marketCap: data.market_data.market_cap,
        valuation: data.market_data.fully_diluted_valuation,
        totalVolume: data.market_data.total_volume,
        circSupply: data.market_data.circulating_supply,
        maxSupply: data.market_data.max_supply,
        description: data.description.en,
        blockChainSite: data.links.blockchain_site,
      };

      return filteredItems;
    } catch (err) {
      return err;
    }
  }
);

export const fetchChartData = createAsyncThunk(
  "FETCH_CHART_DATA",
  async (coin) => {
    try {
      const dateNow = Math.floor(Date.now() / 1000);
      const customDate = dateNow - coin.number * 86400;

      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin.name}/market_chart/range?vs_currency=${coin.currency}&from=${customDate}&to=${dateNow}&interval=daily`
      );

      return data.prices;
    } catch (err) {
      return err;
    }
  }
);
