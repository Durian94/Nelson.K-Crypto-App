import { createSlice } from "@reduxjs/toolkit";

const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    currency: JSON.parse(localStorage.getItem("currency")) || "usd",
    currencySymbol: JSON.parse(localStorage.getItem("currencySymbol")) || "$",
    isThemeDark: JSON.parse(localStorage.getItem("isThemeDark")) || true,
  },
  extraReducers: (builder) => {
    builder.addCase("SET_THEME", (state) => {
      state.isThemeDark = !state.isThemeDark;
      localStorage.setItem("isThemeDark", JSON.stringify(state.isThemeDark));
    });
    builder.addCase("SET_CURRENCY", (state, action) => {
      state.currency = action.currency;
      state.currencySymbol = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: action.currency,
      })
        .format(0)
        .replace(/[a-zA-Z0-9.]/g, "");
      localStorage.setItem(
        "currencySymbol",
        JSON.stringify(state.currencySymbol)
      );
      localStorage.setItem("currency", JSON.stringify(action.currency));
    });
  },
});

export default appReducer.reducer;
