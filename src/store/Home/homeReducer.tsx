import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinListData, fetchBitcoinData } from "./actions";

interface Sparkline {
  [key: string]: number[];
}

export interface CoinData {
  id: string;
  market_cap: number;
  market_cap_rank: number;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  total_supply: number;
  circulating_supply: number;
  sparkline_in_7d: Sparkline;
}

interface HomeData {
  isLoading: boolean;
  hasError: boolean;
  coinListData: Array<CoinData>;
  bitcoinChartData: null;
}

export interface HomeState extends HomeData {
  homeData: HomeData;
}

const initialState: HomeData = {
  isLoading: false,
  hasError: false,
  coinListData: [],
  bitcoinChartData: null,
};

const homeData = createSlice({
  name: "homeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinListData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoinListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coinListData = action.payload as CoinData[];
      })
      .addCase(fetchCoinListData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(
        "SORT_FILTER",
        (state, action: { type: "SORT_FILTER"; order: string }) => {
          switch (action.order) {
            case "market_cap_asc":
              state.coinListData = state.coinListData.sort(
                (item, index) => item.market_cap_rank - index.market_cap_rank
              );
              break;
            case "market_cap_desc":
              state.coinListData = state.coinListData.sort(
                (item, index) => index.market_cap_rank - item.market_cap_rank
              );
              break;
            case "price_asc":
              state.coinListData = state.coinListData.sort(
                (item, index) => item.current_price - index.current_price
              );
              break;
            case "price_desc":
              state.coinListData = state.coinListData.sort(
                (item, index) => index.current_price - item.current_price
              );
              break;
            case "abc":
              state.coinListData = state.coinListData.sort((item, index) =>
                item.id.localeCompare(index.id)
              );
              break;
            case "1h_asc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  item.price_change_percentage_1h_in_currency -
                  index.price_change_percentage_1h_in_currency
              );
              break;
            case "1h_desc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  index.price_change_percentage_1h_in_currency -
                  item.price_change_percentage_1h_in_currency
              );
              break;
            case "24h_asc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  item.price_change_percentage_24h_in_currency -
                  index.price_change_percentage_24h_in_currency
              );
              break;
            case "24h_desc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  index.price_change_percentage_24h_in_currency -
                  item.price_change_percentage_24h_in_currency
              );
              break;
            case "7d_asc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  item.price_change_percentage_7d_in_currency -
                  index.price_change_percentage_7d_in_currency
              );
              break;
            case "7d_desc":
              state.coinListData = state.coinListData.sort(
                (item, index) =>
                  index.price_change_percentage_7d_in_currency -
                  item.price_change_percentage_7d_in_currency
              );
              break;
            default:
              return;
          }
        }
      )
      .addCase(fetchBitcoinData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBitcoinData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bitcoinChartData = action.payload;
      })
      .addCase(fetchBitcoinData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default homeData.reducer;
