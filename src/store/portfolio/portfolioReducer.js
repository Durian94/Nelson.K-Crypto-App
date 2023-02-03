import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinName, fetchPortfolioData } from "./actions";

const portfolioReducer = createSlice({
  name: "portfolio",
  initialState: {
    isLoading: false,
    hasError: false,
    isSearchLoading: false,
    hasSearchError: false,
    searchedCoins: [],
    portfolio: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinName.pending, (state) => {
        state.isSearchLoading = true;
      })
      .addCase(fetchCoinName.fulfilled, (state, action) => {
        state.isSearchLoading = false;
        state.searchedCoins = action.payload;
      })
      .addCase(fetchCoinName.rejected, (state) => {
        state.hasSearchError = true;
        state.isSearchLoading = false;
      })
      .addCase("ADD_COIN", (state, action) => {
        state.portfolio = [...state.portfolio, action.newCoin];
      })
      .addCase("RESET", (state) => {
        state.searchedCoins = [];
      })
      .addCase(fetchPortfolioData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.portfolio = action.payload;
      })
      .addCase(fetchPortfolioData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default portfolioReducer.reducer;
