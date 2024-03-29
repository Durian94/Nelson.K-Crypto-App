import { createSlice } from "@reduxjs/toolkit";
import { tryParse } from "../../utilities/formatMoney/functions";

interface AppState {
  currency: string;
  currencySymbol: string;
  isThemeDark: boolean;
}

export interface LocalStorageState extends AppState {
  localStorage: AppState;
}

const initialState: AppState = {
  currency: tryParse(localStorage.getItem("currency")) || "usd",
  currencySymbol: tryParse(localStorage.getItem("currencySymbol")) || "$",
  isThemeDark: tryParse(localStorage.getItem("isThemeDark")) || true,
};

const appReducer = createSlice({
  name: "appReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("SET_THEME", (state) => {
      state.isThemeDark = !state.isThemeDark;
      localStorage.setItem("isThemeDark", JSON.stringify(state.isThemeDark));
    });
    builder.addCase(
      "SET_CURRENCY",
      (state, action: { type: "SET_CURRENCY"; currency: string }) => {
        (state.currency = action.currency) &&
          (state.currencySymbol = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: action.currency,
          })
            .format(0)
            .replace(/[a-zA-Z0-9.]/g, ""));
        localStorage.setItem(
          "currencySymbol",
          JSON.stringify(state.currencySymbol)
        );
        localStorage.setItem("currency", JSON.stringify(action.currency));
      }
    );
  },
});

export default appReducer.reducer;
