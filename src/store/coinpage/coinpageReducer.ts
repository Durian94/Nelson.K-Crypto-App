import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinpageData, fetchChartData } from "./actions";

interface CoinPageData {
  isLoading: boolean;
  isChartLoading: boolean;
  hasError: boolean;
  coinData: unknown;
  coinChartData: null;
}

export interface CoinPageState extends CoinPageData {
  coinPageData: CoinPageData;
}

const initialState: CoinPageData = {
  isLoading: false,
  isChartLoading: false,
  hasError: false,
  coinData: null,
  coinChartData: null,
};

const coinPageData = createSlice({
  name: "coinPageData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinpageData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoinpageData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coinData = action.payload;
      })
      .addCase(fetchCoinpageData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(fetchChartData.pending, (state) => {
        state.isChartLoading = true;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.isChartLoading = false;
        state.coinChartData = action.payload;
      })
      .addCase(fetchChartData.rejected, (state) => {
        state.hasError = true;
        state.isChartLoading = false;
      });
  },
});

export default coinPageData.reducer;
