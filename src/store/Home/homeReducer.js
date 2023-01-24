import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinListData, fetchBitcoinData } from "./actions";

const homeData = createSlice({
  name: "homeData",
  initialState: {
    isLoading: false,
    hasError: false,
    coinListData: [],
    bitcoinChartData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinListData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoinListData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coinListData = action.payload;
      })
      .addCase(fetchCoinListData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      })
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
