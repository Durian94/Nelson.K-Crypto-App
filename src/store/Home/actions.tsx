import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
import { ThunkAPI } from "../../utilities/types/types";

export const fetchCoinListData = createAsyncThunk(
  "FETCH_COIN_LIST_DATA",
  async (pages: number, { getState }: ThunkAPI) => {
    try {
      const currency = getState().localStorage.currency;
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${pages}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
      const coinListData = getState().homeData.coinListData;
      if (pages > 1) {
        return [...coinListData, ...newPageData];
      } else {
        return newPageData;
      }
    } catch (err) {
      return err;
    }
  }
);

export const sortCoinList = (order: string) => {
  return {
    type: "SORT_FILTER",
    order: order,
  };
};

export const fetchBitcoinData = createAsyncThunk(
  "FETCH_BITCOIN_DATA",
  async (currency, { getState }: ThunkAPI) => {
    try {
      currency = getState().localStorage.currency;
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=15&interval=daily`
      );

      return data;
    } catch (err) {
      return err;
    }
  }
);
