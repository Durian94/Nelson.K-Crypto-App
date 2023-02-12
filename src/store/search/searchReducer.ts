import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from "./actions";

interface SearchBarData {
  isLoading: boolean;
  hasError: boolean;
  suggestedCoins: any[];
}

export interface SearchState extends SearchBarData {
  searchBarData: SearchBarData;
}

const initialState: SearchBarData = {
  isLoading: false,
  hasError: false,
  suggestedCoins: [],
};

const searchResults = createSlice({
  name: "searchBarData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestedCoins = action.payload as SearchBarData[];
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default searchResults.reducer;
