import { configureStore } from "@reduxjs/toolkit";
import homeData from "./Home/homeReducer";
import appReducer from "./app/appReducer";
import navbarData from "./navbar/navbarReducer";
import searchReducer from "./search/searchReducer";
import coinPageReducer from "./coinpage/coinpageReducer";

export const store = configureStore({
  reducer: {
    homeData: homeData,
    localStorage: appReducer,
    navbarData: navbarData,
    searchData: searchReducer,
    coinPageData: coinPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
