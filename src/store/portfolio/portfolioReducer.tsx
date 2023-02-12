import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinName, fetchPortfolioData } from "./actions";

interface SearchedCoins {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface PortfolioData {
  id: string;
  image: string;
  symbol: string;
  currentPrice: number[];
  historyPrice: number[];
  change_24: number;
  purchaseDate: Date;
  amount: number;
  marketCap: number[];
  totalVolume: number[];
  maxSupply: number;
  circSupply: number;
}

interface Portfolio {
  isLoading: boolean;
  hasError: boolean;
  isSearchLoading: boolean;
  hasSearchError: boolean;
  searchedCoins: Array<SearchedCoins>;
  portfolio: any[];
}

const initialState: Portfolio = {
  isLoading: false,
  hasError: false,
  isSearchLoading: false,
  hasSearchError: false,
  searchedCoins: [],
  portfolio: [],
};

const portfolioReducer = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinName.pending, (state) => {
        state.isSearchLoading = true;
      })
      .addCase(fetchCoinName.fulfilled, (state, action) => {
        state.isSearchLoading = false;
        state.searchedCoins = action.payload as SearchedCoins[];
      })
      .addCase(fetchCoinName.rejected, (state) => {
        state.hasSearchError = true;
        state.isSearchLoading = false;
      })
      .addCase(
        "ADD_COIN",
        (state, action: { type: "ADD_COIN"; newCoin: string }) => {
          state.portfolio = [...state.portfolio, action.newCoin];
        }
      )
      .addCase("RESET", (state) => {
        state.searchedCoins = [];
      })
      .addCase(fetchPortfolioData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.portfolio = action.payload as PortfolioData[];
      })
      .addCase(fetchPortfolioData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(
        "REMOVE_COIN",
        (state, action: { type: "REMOVE_COIN"; elementId: string }) => {
          state.portfolio = state.portfolio.filter(
            (coin) => coin.id !== action.elementId
          );
        }
      );
  },
});

export default portfolioReducer.reducer;
