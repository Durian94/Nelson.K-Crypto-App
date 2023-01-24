import { createSlice } from "@reduxjs/toolkit";
import { fetchNavbarData } from "./actions";

const navbarData = createSlice({
  name: "navbarData",
  initialState: {
    isLoading: false,
    hasError: false,
    navbarData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.navbarData = action.payload;
      })
      .addCase(fetchNavbarData.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default navbarData.reducer;
