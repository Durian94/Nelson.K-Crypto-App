import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from "./actions";

const searchResults = createSlice({
  name: "searchBarData",
  initialState: {
    isLoading: false,
    hasError: false,
    suggestedCoins: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestedCoins = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default searchResults.reducer;
